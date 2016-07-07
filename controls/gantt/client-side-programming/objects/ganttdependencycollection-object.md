---
title: GanttDependencyCollection Object
page_title: GanttDependencyCollection Object | RadGantt for ASP.NET AJAX Documentation
description: GanttDependencyCollection Object
slug: gantt/client-side-programming/objects/ganttdependencycollection-object
tags: ganttdependencycollection,object
published: True
position: 4
---

# GanttDependencyCollection Object



## 

The following table lists the most important methods of the **GanttDependencyCollection** client-side object:


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **add** |Telerik.Web.UI.GanttDependency|none|Adds a dependency to the collection.|
| **remove** |Telerik.Web.UI.GanttDependency|none|Removes a dependency from the collection. See **Example 1**.|
| **get_count** |none|int|Returns the number of dependencies in the collection.|
| **indexOf** |Telerik.Web.UI.GanttDependency|int|Gets the index of a dependency.|
| **getDependency** |int|Telerik.Web.UI.GanttDependency|Gets the dependency from the collection residing at the index specified by the parameter.|
| **toArray** |none|array|Returns the collection represented as array.|


**Example 1**: Remove the dependency at index 5 from the Gantt's DependencyCollection.
````JavaScript
var gantt = $find("<%= RadGantt1.ClientID %>");
var collection = gantt.get_dependencies(); 	
collection.remove(collection.getDependency(5));	 
````


# See Also

 * [Overview]({%slug gantt/client-side-programming/overview%})
