---
title: GanttAssignment Object
page_title: GanttAssignment Object - RadGantt
description: Check our Web Forms article about GanttAssignment Object.
slug: gantt/client-side-programming/objects/ganttassignment-object
tags: ganttassignment,object
published: True
position: 5
---

# GanttAssignment Object



## 

The following table lists the most important methods of the **GanttAssignment** client-side object:



| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_id** |none|string|Gets the id of the assignment. See **Example 1**.|
| **get_taskId** |none|string|Gets the id of the task.|
| **get_resourceId** |none|string|Gets the id of the resource.|
| **get_units** |none|Number|Gets the assigned units of the corresponding assignment. See **Example 2**.|
| **set_units** |Number|none|Sets the assigned units of the corresponding assignment.|


>caption  Example 1: Get the id of the first assignment in the Gantt's AssignmentCollection.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
var firstAssignment = gantt.get_assignments().getAssignment(0); 	
var id = firstAssignment.get_id();	 
````

>caption  Example 2: Get the assigned units of the corresponding assignment.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
var firstAssignment = gantt.get_assignments().getAssignment(0); 
var assignedUnits = firstAssignment.get_units();	 
````


# See Also

 * [Overview]({%slug gantt/client-side-programming/overview%})
