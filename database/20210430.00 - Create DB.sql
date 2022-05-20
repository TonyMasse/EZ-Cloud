-- =============================================
-- Author:		Tony Massé
-- Create date: 2021-04-30
-- Update date: 2021-11-22 - To be runnable multiple times and ignore unnecessary tasks
-- Update date: 2021-11-26 - To log each step
-- Update date: 2021-11-26 - To avoid running the ALTER commands if the DB already existed
-- =============================================

PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Checking if database [EZ] already exists...'
USE master
GO
IF NOT EXISTS (SELECT * FROM sys.databases WHERE name = 'EZ')
BEGIN
	-- Creating the DB
	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Creating database [ExZ]...'
	CREATE DATABASE [EZ]
		CONTAINMENT = NONE
		COLLATE SQL_Latin1_General_CP1_CI_AS

	-- Setting it up

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting COMPATIBILITY_LEVEL...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET COMPATIBILITY_LEVEL = 130'

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting ANSI_NULL_DEFAULT...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET ANSI_NULL_DEFAULT OFF '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting ANSI_NULLS...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET ANSI_NULLS OFF '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting ANSI_PADDING...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET ANSI_PADDING OFF '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting ANSI_WARNINGS...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET ANSI_WARNINGS OFF '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting ARITHABORT...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET ARITHABORT OFF '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting AUTO_CLOSE...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET AUTO_CLOSE OFF '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting AUTO_SHRINK...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET AUTO_SHRINK OFF '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting AUTO_CREATE_STATISTICS...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET AUTO_CREATE_STATISTICS ON(INCREMENTAL = OFF)'

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting AUTO_UPDATE_STATISTICS...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET AUTO_UPDATE_STATISTICS ON '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting CURSOR_CLOSE_ON_COMMIT...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET CURSOR_CLOSE_ON_COMMIT OFF '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting CURSOR_DEFAULT...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET CURSOR_DEFAULT GLOBAL '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting CONCAT_NULL_YIELDS_NULL...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET CONCAT_NULL_YIELDS_NULL OFF '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting NUMERIC_ROUNDABORT...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET NUMERIC_ROUNDABORT OFF '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting QUOTED_IDENTIFIER...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET QUOTED_IDENTIFIER OFF '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting RECURSIVE_TRIGGERS...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET RECURSIVE_TRIGGERS OFF '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting DISABLE_BROKER...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET DISABLE_BROKER '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting AUTO_UPDATE_STATISTICS_ASYNC...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET AUTO_UPDATE_STATISTICS_ASYNC OFF '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting DATE_CORRELATION_OPTIMIZATION...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET DATE_CORRELATION_OPTIMIZATION OFF '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting PARAMETERIZATION...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET PARAMETERIZATION SIMPLE '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting READ_COMMITTED_SNAPSHOT...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET READ_COMMITTED_SNAPSHOT OFF '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting READ_WRITE...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET READ_WRITE '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting RECOVERY...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET RECOVERY FULL '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting MULTI_USER...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET MULTI_USER '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting PAGE_VERIFY...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET PAGE_VERIFY CHECKSUM'

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting TARGET_RECOVERY_TIME...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET TARGET_RECOVERY_TIME = 60 SECONDS '

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting DELAYED_DURABILITY...'
	EXEC [master].sys.sp_executesql N'ALTER DATABASE [EZ] SET DELAYED_DURABILITY = DISABLED '

	-- Scoped config

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting SCOPED CONFIGURATION SET MAXDOP...'
	EXEC [EZ].sys.sp_executesql N'ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;'

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP...'
	EXEC [EZ].sys.sp_executesql N'ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;'

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION...'
	EXEC [EZ].sys.sp_executesql N'ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;'

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION...'
	EXEC [EZ].sys.sp_executesql N'ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;'

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting SCOPED CONFIGURATION SET PARAMETER_SNIFFING...'
	EXEC [EZ].sys.sp_executesql N'ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;'

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING...'
	EXEC [EZ].sys.sp_executesql N'ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;'

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES...'
	EXEC [EZ].sys.sp_executesql N'ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;'

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES...'
	EXEC [EZ].sys.sp_executesql N'ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;'

	-- Filegroup

	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Setting FILEGROUP [PRIMARY] as DEFAULT...'
	EXEC [EZ].sys.sp_executesql N'IF NOT EXISTS (SELECT name FROM sys.filegroups WHERE is_default=1 AND name = N''PRIMARY'') ALTER DATABASE [EZ] MODIFY FILEGROUP [PRIMARY] DEFAULT'

END
ELSE
BEGIN
	PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: [EZ] already exists. Moving on.'
END
GO

PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | INFO: Done...' -- 🎉🎉🎉🎉🎉🎉
PRINT CONVERT(nvarchar(24), GETDATE(), 121) + ' | =============================================='
