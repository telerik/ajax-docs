---
title: GanttResource Object
page_title: GanttResource Object | RadGantt for ASP.NET AJAX Documentation
description: GanttResource Object
slug: gantt/client-side-programming/objects/ganttresource-object
tags: ganttresource,object
published: True
position: 7
---

# GanttResource Object



## 

The following table lists the most important methods of the **GanttResource** client-side object:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_id** |none|string|Gets the id of the resource. See **Example 1**.|
| **get_text** |none|string|Gets the text of the resource.  See **Example 2**.|
| **get_color** |none|string|Gets the color of the resource.  See **Example 3**.|
| **get_format** |none|string|Gets the format of the resource value.  See **Example 4**.|


>caption  Example 1: Get the id of the first resource in the Gantt's DependencyCollection.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
var firstResource = gantt.get_resources().getResource(0); 	
var id = firstResource.get_id();	 
````

>caption  Example 2: Get the text of the first resource in the Gantt's DependencyCollection.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
var firstResource = gantt.get_resources().getResource(0); 
var text = firstResource.get_text();	 
````

>caption  Example 3: Get the color of the first resource in the Gantt's DependencyCollection.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
var firstResource = gantt.get_resources().getResource(0); 
var color = firstResource.get_color();	 
````

>caption  Example 4: Get the format of the first resource in the Gantt's DependencyCollection.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
var firstResource = gantt.get_resources().getResource(0); 
var format = firstResource.get_format();	 
````

# See Also

 * [Overview]({%slug gantt/client-side-programming/overview%})
