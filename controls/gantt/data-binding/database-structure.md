---
title: Database Structure
page_title: Database Structure - RadGantt
description: Check our Web Forms article about Database Structure.
slug: gantt/data-binding/database-structure
tags: database,structure
published: True
position: 0
---

# Database Structure

The **Gantt**'s data can be stored within a Database with tables for the [Tasks]({%slug gantt/server-side-programming/objects/tasks%}) and [Dependencies]({%slug gantt/server-side-programming/objects/dependencies%}). Below is shown a sample database with all required fields.

## Tasks![gantt-database-structure-1](images/gantt-database-structure-1.png)

You can use the following script to add the Gantt's Tasks table to an existing database:

````SQL	
USE [DBNAME]
GO

--CREATE TASKS TABLE
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GanttTasks](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ParentID] [int] NULL,
	[OrderID] [int] NOT NULL,
	[Title] [ntext] NULL,
	[Start] [datetime] NOT NULL,
	[End] [datetime] NOT NULL,
	[PercentComplete] [decimal](5, 2) NOT NULL,
	[Expanded] [bit] NULL,
	[Summary] [bit] NOT NULL,
 CONSTRAINT [PK_GanttTasks] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

SET IDENTITY_INSERT [dbo].[GanttTasks] OFF
ALTER TABLE [dbo].[GanttTasks] ADD  CONSTRAINT [DF_GanttTasks_Summary]  DEFAULT ((0)) FOR [Summary]
GO
ALTER TABLE [dbo].[GanttTasks]  WITH CHECK ADD  CONSTRAINT [FK_GanttTasks_GanttTasks] FOREIGN KEY([ParentID])
REFERENCES [dbo].[GanttTasks] ([ID])
GO
ALTER TABLE [dbo].[GanttTasks] CHECK CONSTRAINT [FK_GanttTasks_GanttTasks]
GO
````

### Planned/Baseline Tasks

R2 2021 introduces the [Planned vs Actual/Baseline functionality]({%slug gantt/functionality/planned-vs-actual %}). To leverage it, the `PlannedStart` and `PlannedEnd` columns should be added. They should be nullable and of type `datetime`.

````SQL
USE [DBNAME]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[GanttPlannedTasks](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ParentID] [int] NULL,
	[OrderID] [int] NOT NULL,
	[Title] [ntext] NULL,
	[Start] [datetime] NOT NULL,
	[PlannedStart] [datetime] NULL,
	[End] [datetime] NOT NULL,
	[PlannedEnd] [datetime] NULL,
	[PercentComplete] [decimal](5, 2) NOT NULL,
	[Expanded] [bit] NULL,
	[Summary] [bit] NOT NULL,
 CONSTRAINT [PK_GanttPlannedTasks] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]

GO

ALTER TABLE [dbo].[GanttPlannedTasks]  WITH CHECK ADD  CONSTRAINT [FK_GanttPlannedTasks_GanttPlannedTasks] FOREIGN KEY([ParentID])
REFERENCES [dbo].[GanttPlannedTasks] ([ID])
GO

ALTER TABLE [dbo].[GanttPlannedTasks] CHECK CONSTRAINT [FK_GanttPlannedTasks_GanttPlannedTasks]
GO
```` 


## Dependencies![gantt-database-structure-2](images/gantt-database-structure-2.png)

Here is a simpler example without support for resources:

````SQL
--CREATE DEPENDENCIES TABLE
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[GanttDependencies](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[PredecessorID] [int] NOT NULL,
	[SuccessorID] [int] NOT NULL,
	[Type] [int] NOT NULL,
 CONSTRAINT [PK_GanttDependencies] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
SET IDENTITY_INSERT [dbo].[GanttDependencies] ON 
````


# See Also

 * [Tasks]({%slug gantt/server-side-programming/objects/tasks%})

 * [Dependencies]({%slug gantt/server-side-programming/objects/dependencies%})
