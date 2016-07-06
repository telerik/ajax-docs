---
title: Assignments
page_title: Assignments | RadGantt for ASP.NET AJAX Documentation
description: Assignments
slug: gantt/server-side-programming/objects/assignments
tags: assignments
published: True
position: 4
---

# Assignments


The following article describes the **Telerik.Web.UI.Gantt.Assignment** object. An assignment can be associated with **RadGantt** **Task** and **Resource**.

## Assignment Properties

The table below demonstrates some general properties of the **Assignment** object.

| Name | Type | Description |
| ------ | ------ | ------ |
| **ID** |object|Gets or sets **Assignment** ID.|
| **ResourceID** |object|Gets or sets pointer to a **Resource** using its ID.|
| **TaskID** |object|Gets or sets pointer to a **GanttTask** using its ID.|
| **Units** |object|Gets or sets the proportion of the **Resource** that is dedicated to current **GanttTask**.|


## Assignment Methods

The table below demonstrates the public methods of the **Assignment** object.

| Name | Parameters | Return type | Description |
| ------ | ------ | ------ | ------ |
| **GetData** |none|System.Collections.Specialized.IOrderedDictionary|Returns **Assignment** data as an Ordered dictionary.|
| **LoadFromDictionary** |System.Collections.IDictionary|void|Loads **Assignment** data from a Dictionary.|


# See Also

 * [Server-side Programming Overview]({%slug gantt/server-side-programming/overview%})
 
 * [RadGantt object]({%slug gantt/server-side-programming/objects/radgantt-object%})

 * [Tasks]({%slug gantt/server-side-programming/objects/tasks%})
 
 * [Dependencies]({%slug gantt/server-side-programming/objects/dependencies%})
 
 * [Resources]({%slug gantt/server-side-programming/objects/resources%})
 
 * [Resources demo](http://demos.telerik.com/aspnet-ajax/gantt/examples/functionality/resources/defaultcs.aspx)
 
