---
title: GanttTask Object
page_title: GanttTask Object | RadGantt for ASP.NET AJAX Documentation
description: GanttTask Object
slug: gantt/client-side-programming/objects/gantttask-object
tags: gantttask,object
published: True
position: 1
---

# GanttTask Object


## 

The following table lists the most important methods of the **GanttTask** client-side object:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_id** |none|string|Gets the id of the task. See **Example 1**.|
| **get_parentId** |none|string|Gets the parentId of the task.|
|  **get_orderId**  | none | string |Gets the orderId of the task.|
|  **get_start**  | none | Date |Gets the start time of the task.|
|  **get_end**  | none | Date |Gets the end time of the task.|
|  **get_title**  | none | string |Gets the Title of the task.|
|  **get_percentComplete**  | none | string |Gets the task percentage of completion.|
|  **get_summary**  | none | boolean |Gets a boolean value indicating whether the task has child tasks.|
|  **get_expanded**  | none | boolean |Gets a boolean value indicating whether the task is expanded.|
|  **get_tasks**  | none | Telerik.Web.UI.GanttTaskCollection |Gets a collection with all child tasks.|
|  **get_dependencies**  | none | Telerik.Web.UI.GanttDependencyCollection |Gets a collection with all task dependencies.|
|  **get_predecessors**  | none | Telerik.Web.UI.GanttDependencyCollection |Gets a collection with all task predecessors.|
|  **get_successors**  | none | Telerik.Web.UI.GanttDependencyCollection |Gets a collection with all task successors.|
|  **get_element**  | none | HTMLElement |Gets the HTMLElement of the task.|
|  **set_start**  | Date | none |Sets the start date of the task. See **Example 2**.|
|  **set_end**  | Date | none |Sets the end date of the task.|
|  **set_title**  | string | none |Sets the title of the task.|
|  **set_percentComplete**  | int | none |Sets the task percentage of completion.|
|  **set_expanded**  | boolean | none |Sets a boolean value indicating whether the task is expanded. See **Example 3**.|


**Example 1**: Get the id of the first task in the GanttTaskCollection.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
var taskId = gantt.get_tasks().getTask(0).get_id();  
````

**Example 2**: Set the start time of the first task in the GanttTaskCollection.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
var startDate = new Date(2016,6,14,10,30,0,0);
gantt.get_tasks().getTask(0).set_start(startDate);
````

**Example 3**: Expand the first task in the GanttTaskCollection.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
gantt.get_tasks().getTask(0).set_expanded(true);
````


# See Also

 * [Overview]({%slug gantt/client-side-programming/overview%})
