---
title: Task
page_title: Task | RadGantt for ASP.NET AJAX Documentation
description: Task
slug: gantt/server-side-programming/objects/tasks
tags: tasks
published: True
position: 2
---

# Task


In this help article you can find helpful information on the different types of **RadGantt tasks**, their properties and methods.


## Task Types

Depending on the **TaskType** property, the **Task** can be one of three types:

* **Regular Task** - regular task which can have assigned resources, links to predecessors, start date, end date,duration and percentage of completion.

* **Summary** - a grouping of child tasks. The **Summary** has a **Start** and **End** determined by the earliest **Start** and latest **End** of its child tasks. The percentage of completion is calculated based on the percentage of each child task. The **Summary** does not have links to predecessors, and can not be referenced as such by other tasks.

* **Milestone** - a regular task with zero duration.


## Task Properties

The table below demonstrates some general properties of the **Task** object.

| Name | Type | Description |
| ------ | ------ | ------ |
| **Dependencies** |Telerik.Web.UI.Gantt.DependencyCollection|Gets a collection of dependencies to other tasks.|
| **Description** |string|Gets or sets the task description.|
| **Duration** |TimeSpan|Gets a value indicating the duration of the task.|
| **End** |DateTime|Gets or sets the end time of the task.|
| **Expanded** |bool|Gets or sets a value that determines whether the tasks is expanded in the **TreeList**.|
| **ID** |object|Gets or sets **Task** ID.|
| **OrderID** |object|Gets or sets **OrderID** field used by sort operations.|
| **Owner** |Telerik.Web.UI.Gantt.IGantt|Gets or sets the **Gantt** that is owner of the task.|
| **ParentID** |object|Gets or sets pointer to the parent task using its ID.|
| **PercentComplete** |decimal|Gets a value in percent indicating the task completion.|
| **Predecessors** |Telerik.Web.UI.Gantt.DependencyCollection|Gets a collection of the dependencies that are predecessors of the task.|
| **Start** |DateTime|Gets or sets the start time of the task.|
| **Successors** |Telerik.Web.UI.Gantt.DependencyCollection|Gets a collection of the dependencies that are successors of the task.|
| **Summary** |bool|Gets a boolean value indicating whether the task is a summary task.|
| **Tasks** |Telerik.Web.UI.Gantt.TaskCollection|Gets all children tasks of the current task.|
| **TaskType** |Telerik.Web.UI.Gantt.TaskType enumeration|Gets a value that determines the type of the task.|
| **Title** |string|Gets or sets a value that determines the title of the task.|


## Task Methods

The table below shows the publicly accessible methods of the **Task** object.

| Method | Parameters | Return type | Description |
| ------ | ------ | ------ | ------ |
| **GetData** |none|System.Collections.Specialized.IOrderedDictionary|Returns the Task data as an OrdrederDictionary.|
| **LoadFromDictionary** |System.Collections.IDictionary|void|Loads the **Task** data from a Dictionary.|




# See Also

 * [Server-side Programming Overview]({%slug gantt/server-side-programming/overview%})
 
 * [RadGantt object]({%slug gantt/server-side-programming/objects/radgantt-object%})

 * [Dependencies]({%slug gantt/server-side-programming/objects/dependencies%})
 
 * [Assignments]({%slug gantt/server-side-programming/objects/assignments%})

 * [Resources]({%slug gantt/server-side-programming/objects/resources%})

 * [Overview demo](https://demos.telerik.com/aspnet-ajax/gantt/examples/overview/defaultcs.aspx)
 
