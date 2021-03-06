---
title: Overview
page_title: Server-side Programming Overview - RadGantt
description: Check our Web Forms article about Overview.
slug: gantt/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview

**RadGantt** provides a rich set of server-side properties, methods and events that can help you configure the look and behaviour of the control. You can find a list and explanation of the most important **RadGantt** properties and methods in this [**RadGantt Object article**]({%slug gantt/server-side-programming/objects/radgantt-object%}).


## RadGantt Events

**Table 1** shows the server-side events that you can subscribe to.


| Events | Description |
| ------ | ------ |
| **[ColumnCreating]({%slug gantt/server-side-programming/events/columncreating%})** |Fires before a column is created. You can handle the event to replace or modify the instance of the column.|
| **[ColumnCreated]({%slug gantt/server-side-programming/events/columncreated%})** |Fires after a column is created. You can handle the event to grab an instance of the newly created column.|
| **[TaskInsert]({%slug gantt/server-side-programming/events/taskinsert%})** |Fires when the task's collection is about to be inserted in the database through the provider.|
| **[TaskUpdate]({%slug gantt/server-side-programming/events/taskupdate%})** |Fires when the task's collection is about to be updated through the provider.|
| **[TaskDelete]({%slug gantt/server-side-programming/events/taskdelete%})** |Fires when the task's collection is about to be deleted from the database through the provider.|
| **[AssignmentInsert]({%slug gantt/server-side-programming/events/assignmentinsert%})** |Fires when the assignment's collection is about to be inserted in the database through the provider|
| **[AssignmentUpdate]({%slug gantt/server-side-programming/events/assignmentupdate%})** |Fires when the assignment's collection is about to be updated through the provider.|
| **[AssignmentDelete]({%slug gantt/server-side-programming/events/assignmentdelete%})** |Fires when the assignment's collection is about to be deleted from the database through the provider.|
| **[NavigationCommand]({%slug gantt/server-side-programming/events/navigationcommand%})** |Fires when the **RadGantt** executes a navigation command.|
| **[DependencyInsert]({%slug gantt/server-side-programming/events/dependencyinsert%})** |Fires when a dependency's collection is about to be inserted in the database.|
| **[DependencyDelete]({%slug gantt/server-side-programming/events/dependencydelete%})** |Fires when a dependency's collection is about to be deleted from the database through the provider.|


# See Also

 * [RadGantt Object]({%slug gantt/server-side-programming/objects/radgantt-object%})

 * [Tasks]({%slug gantt/server-side-programming/objects/tasks%})

 * [Dependencies]({%slug gantt/server-side-programming/objects/dependencies%})
 
 * [Assignments]({%slug gantt/server-side-programming/objects/assignments%})
 
 * [Resources]({%slug gantt/server-side-programming/objects/resources%})
 
 * [Events Overview]({%slug gantt/server-side-programming/events/overview%})
 
