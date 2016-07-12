---
title: GanttResourceCollection Object
page_title: GanttResourceCollection Object | RadGantt for ASP.NET AJAX Documentation
description: GanttResourceCollection Object
slug: gantt/client-side-programming/objects/ganttresourcecollection-object
tags: ganttresourcecollection,object
published: True
position: 8
---

# GanttResourceCollection Object



## 

The following table lists the most important methods of the **GanttResourceCollection** client-side object:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_count** |none|int|Returns the number of resources in the collection.|
| **indexOf** |Telerik.Web.UI.GanttResource|int|Gets the index of a resource.|
| **getResource** |int|Telerik.Web.UI.GanttResource|Gets the resource from the collection residing at the index specified by the parameter. See **Example 1**.|
| **toArray** |none|array|Returns the collection represented as array.|


**Example 1**: Get the resource at index 3 from the Gantt's ResourceCollection.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
var collection = gantt.get_resources(); 	
var resource = collection.getResource(3);	 
````


# See Also

 * [Overview]({%slug gantt/client-side-programming/overview%})
