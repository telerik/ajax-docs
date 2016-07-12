---
title: GanttAssignmentCollection Object
page_title: GanttAssignmentCollection Object | RadGantt for ASP.NET AJAX Documentation
description: GanttAssignmentCollection Object
slug: gantt/client-side-programming/objects/ganttassignmentcollection-object
tags: ganttassignmentcollection,object
published: True
position: 6
---

# GanttAssignmentCollection Object



## 

The following table lists the most important methods of the **GanttAssignmentCollection** client-side object:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **add** |Telerik.Web.UI.GanttAssignment|none|Adds a resource assignment to the collection.|
| **remove** |Telerik.Web.UI.GanttAssignment|none|Removes a resource assignment from the collection. See **Example 1**.|
| **get_count** |none|int|Returns the number of resource assignments in the collection.|
| **indexOf** |Telerik.Web.UI.GanttAssignment|int|Gets the index of a resource assignment.|
| **getAssignment** |int|Telerik.Web.UI.GanttAssignment|Gets the resource assignment from the collection residing at the index specified by the parameter.|
| **toArray** |none|array|Returns the collection represented as array.|


**Example 1**: Remove the resource assignment at index 5 from the Gantt's AssignmentCollection.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
var collection = gantt.get_assignments(); 	
collection.remove(collection.getAssignment(5));	 
````


# See Also

 * [Overview]({%slug gantt/client-side-programming/overview%})
