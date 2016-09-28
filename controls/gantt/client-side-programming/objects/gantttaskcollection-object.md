---
title: GanttTaskCollection Object
page_title: GanttTaskCollection Object | RadGantt for ASP.NET AJAX Documentation
description: GanttTaskCollection Object
slug: gantt/client-side-programming/objects/gantttaskcollection-object
tags: gantttaskcollection,object
published: True
position: 1
---

# GanttTaskCollection Object


## 

The following table lists the most important methods of the **GanttTaskCollection** client-side object:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **add** |Telerik.Web.UI.GanttTask|none|Adds a task to the collection.|
| **insert** |int, Telerik.Web.UI.GanttTask|none|Inserts a task into the collection at the position specified by the first (index) parameter.|
|  **remove**  | Telerik.Web.UI.GanttTask | none |Removes a task from the collection. See **Example 1**.|
|  **get_count**  | none | int |Gets the number of tasks in the collection.|
|  **getTask**  | int | Telerik.Web.UI.GanttTask |Gets the task from the collection residing at the index specified by the parameter.|
|  **indexOf**  | Telerik.Web.UI.GanttTask | int |Gets the index of a task.|
|  **toArray**  | none | array |Returns the collection of tasks represented as array.|


>caption  Example 1: Get a reference to the first task in the GanttTaskCollection and remove it.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
var firstTask = gantt.get_tasks().getTask(0);  
gantt.get_tasks().remove(firstTask);
````


# See Also

 * [Overview]({%slug gantt/client-side-programming/overview%})
