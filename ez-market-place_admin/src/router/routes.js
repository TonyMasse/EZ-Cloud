// import { createApp } from 'vue'
import { LoginCallback, useAuth } from '@okta/okta-vue'
import store from '../store'
import packageDetails from '../../package.json'
const productName = packageDetails.productName

// // Check if we have a JWT token, and redirect to /Login if not
// function isLoggedIn (to, from, next) {
//   const token = (Store && Store.state && Store.state.mainStore && Store.state.mainStore.jwtToken ? Store.state.mainStore.jwtToken : '')
//   if (token && token.length) {
//     next()
//   } else {
//     next('/Login')
//     // next()
//   }
// }

// const app = createApp()

// Update the tab/window's title
function updateTitle (to, from, next) {
  let pageTitle = ''

  // Get the page title from the last match with a meta.title, if any
  if (to.matched && Array.isArray(to.matched)) {
    to.matched.forEach(m => {
      if (m.meta && m.meta.title && m.meta.title.length) {
        pageTitle = m.meta.title
      }
    })
  }

  // Assign it
  if (pageTitle.length) {
    document.title = productName + ' - ' + pageTitle
  } else {
    document.title = productName
  }
  next()
}

// Update the user details, if logged in
async function updateUser (to, from) {
  // Obtain the current oktaAuth instance
  const auth = useAuth()

  // Get the previously stored JWT Token
  const token = (store() && store().state && store().state.mainStore && store().state.mainStore.jwtToken ? store().state.mainStore.jwtToken : '')

  const isAuthenticated = (auth ? await auth.isAuthenticated() : false)
  console.log('isAuthenticated (Okta)', isAuthenticated)

  // If none, check if we are Okta authenticated, and if we are, store the new token in Store
  if (!(token && token.length)) {
    // if (app.config.globalProperties.$auth.isAuthenticated) {
    if (auth && !!(await auth.isAuthenticated())) {
      try {
        const oktaToken = await auth.getAccessToken()
        let userDetails = null
        if (oktaToken) {
          try {
            userDetails = await auth.getUser()
          } catch (error) {
            console.log(error)
          }
        }
        // Store the JWT token and user details
        store().dispatch('mainStore/signIn', { token: oktaToken, userDetails })
      } catch (error) {
        console.log(error)
      }
    }
  }
}

const routes = [

  {
    path: '/',
    meta: { title: 'Welcome' },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    // Okta Login Call Back path
    path: '/mfa',
    component: LoginCallback
  },

  {
    path: '/Stats',
    meta: { title: 'Statistics' },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Stats/Index.vue') }
    ]
  },

  {
    path: '/Welcome',
    meta: { title: 'Welcome' },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },

  {
    path: '/Login',
    meta: { title: 'Login' },
    component: () => import('layouts/PlainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login/Login.vue') }
    ]
  },

  {
    path: '/Logout',
    meta: { title: 'Logout' },
    component: () => import('layouts/PlainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login/Logout.vue') }
    ]
  },

  {
    path: '/Loggedout',
    meta: { title: 'Logout' },
    component: () => import('layouts/PlainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Login/Loggedout.vue') }
    ]
  },

  {
    path: '/Admin',
    meta: {
      title: 'Admin',
      requiresAuth: true
    },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Error404.vue') },

      // RBAC
      { path: 'RBAC', component: () => import('pages/Admin/RBAC/Index.vue') },
      { path: 'RBAC/Users', component: () => import('pages/Admin/RBAC/Users.vue') },
      { path: 'RBAC/Roles', component: () => import('pages/Admin/RBAC/Roles.vue') },

      // Pipelines Templates
      { path: 'PipelineTemplates', component: () => import('pages/Admin/PipelineTemplates/Index.vue'), meta: { title: 'Admin - Templates' } },
      { path: 'PipelineTemplates/:pipelineTemplateUid/Review', component: () => import('pages/Admin/PipelineTemplates/Review.vue'), meta: { title: 'Admin - Templates - Review' } },

      // Notifications
      { path: 'Notifications', component: () => import('pages/Admin/Notifications/Index.vue'), meta: { title: 'Admin - Notifications' } },

      // Publishers
      { path: 'Publishers', component: () => import('pages/Admin/Publishers/Index.vue'), meta: { title: 'Admin - Publishers' } }
    ]
    // ,
    // beforeEnter: isLoggedIn
  },

  {
    path: '/Settings',
    meta: { title: 'Settings' },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Settings/Settings.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    meta: { title: 'Oops...' },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Error404.vue') }
    ]
  }
]

export {
  routes,
  updateTitle,
  updateUser
}
