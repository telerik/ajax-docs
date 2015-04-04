---
title: TaskInsert
page_title: TaskInsert | UI for ASP.NET AJAX Documentation
description: TaskInsert
slug: gantt/server-side-programming/events/taskinsert
tags: taskinsert
published: True
position: 3
---

# TaskInsert



The __RadGantt TaskInsert__ is fired when a task's collection is about to be inserted in the database.

__TaskInsert__ event handler receives two parameters:

* __sender__ is the __RadGantt__ control instance.

* __e__ is an object of type __GanttEventArgs__. It gives you access to the inserted __RadGantt__ tasks collection.

## Example

````ASPNET
	    <telerik:RadGantt ID="RadGantt1" runat="server" OnTaskInsert="RadGantt1_TaskInsert"></telerik:RadGantt>
````



>tabbedCode

````C#
	    protected void RadGantt1_TaskInsert(object sender, Telerik.Web.UI.Gantt.GanttEventArgs e)
	    {
	        foreach (var item in e.Tasks)
	        {
	            item.Title = "Modified Title";
	        }
	    }
````
````VB.NET
	    Protected Sub RadGantt1_TaskInsert(sender As Object, e As Telerik.Web.UI.Gantt.GanttEventArgs)
	        For Each item As var In e.Tasks
	            item.Title = "Modified Title"
	        Next
	    End Sub
````
>end

# See Also

 * [Server Side Events]({%slug gantt/server-side-programming/events/overview%})
