
-- Create the Virtualisation Template Item for a fake UID
EXECUTE [dbo].[OC_Admin_Upsert_Log_Source_Virtualisation_Template_Item] 
   @uid='non-existant-uid'
  ,@name = 'jsBeat - Wahtever file'
GO

/*
Error
No Log Source Type defined for UID: non-existant-uid. Doing nothing.
*/


-- Create the Virtualisation Template Item for a real UID
EXECUTE [dbo].[OC_Admin_Upsert_Log_Source_Virtualisation_Template_Item] 
   @uid='92b5c269-25db-4ea2-97c2-9112c160a309'
  ,@name = 'jsBeat - Flat file - EZ Test'
GO

/*
New_Virtual_Source_Template_ID	EMDB_SP_Return_Code
6	0

LS_Type_ID	Related_Processing_Policy_ID	New_Virtualisation_Template_Item_ID
1000000001	7	1
*/