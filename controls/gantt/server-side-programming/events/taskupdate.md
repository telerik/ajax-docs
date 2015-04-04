---
title: TaskUpdate
page_title: TaskUpdate | UI for ASP.NET AJAX Documentation
description: TaskUpdate
slug: gantt/server-side-programming/events/taskupdate
tags: taskupdate
published: True
position: 4
---

# TaskUpdate



The __RadGantt TaskUpdate__ is fired when a task's collection is about to be updated through the provider.

__TaskUpdate__ event handler receives two parameters:

* __sender__ is the __RadGantt__ control instance.

* __e__ is an object of type __GanttEventArgs__. It provides access to the updated __RadGantt__ tasks collection.

## Example

````ASPNET
	    <telerik:RadGantt ID="RadGantt1" runat="server" OnTaskUpdate="RadGantt1_TaskUpdate"></telerik:RadGantt>
````



>tabbedCode

````C#
	    protected void RadGantt1_TaskUpdate(object sender, Telerik.Web.UI.Gantt.GanttEventArgs e)
	    {
	        foreach (var item in e.Tasks)
	        {
	            item.Title = "Modified Title";
	        }
	    }
````
````VB.NET
	    Protected Sub RadGantt1_TaskUpdated(sender As Object, e As Telerik.Web.UI.Gantt.GanttEventArgs)
	        For Each item As var In e.Tasks
	            item.Title = "Modified Title"
	        Next
	    End Sub
````
>end

# See Also

 * [Server Side Events]({%slug gantt/server-side-programming/events/overview%})
