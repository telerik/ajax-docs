---
title: GanttDependency Object
page_title: GanttDependency Object | RadGantt for ASP.NET AJAX Documentation
description: GanttDependency Object
slug: gantt/client-side-programming/objects/ganttdependency-object
tags: ganttdependency,object
published: True
position: 3
---

# GanttDependency Object



## 

The following table lists the most important methods of the **GanttDependency** client-side object:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_id** |none|string|Gets the id of the dependency. See **Example 1**.|
| **get_predecessorId** |none|string|Gets the id of the predecessor task.|
| **get_successorId** |none|string|Gets the id of the successor task.|
| **get_type** |none|Telerik.Web.UI.GanttDependencyType|Gets the type of the dependency.|


**Example 1**: Get the id of the first dependency in the Gantt's DependencyCollection.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
var firstDependency = gantt.get_dependencies().getDependency(0); 	
var id = firstDependency.get_id();	 
````


# See Also

 * [Overview]({%slug gantt/client-side-programming/overview%})
