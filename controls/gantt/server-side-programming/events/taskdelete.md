---
title: TaskDelete
page_title: TaskDelete | UI for ASP.NET AJAX Documentation
description: TaskDelete
slug: gantt/server-side-programming/events/taskdelete
tags: taskdelete
published: True
position: 5
---

# TaskDelete



The __RadGantt TaskDelete__ is fired when a task's collection is about to be deleted from the database through the provider.

__TaskDelete__ event handler receives two parameters:

* __sender__ is the __RadGantt__ control instance.

* __e__ is an object of type __GanttEventArgs__. It gives you access to the deleted __RadGantt__ tasks collection.

## Example

````ASPNET
	    <telerik:RadGantt ID="RadGantt1" runat="server" OnTaskDelete="RadGantt1_TaskDelete"></telerik:RadGantt>
````



>tabbedCode

````C#
	    protected void RadGantt1_TaskDelete(object sender, Telerik.Web.UI.Gantt.GanttEventArgs e)
	    {
	        foreach (var item in e.Tasks)
	        {
	            //...
	        }
	    }
````



````VB.NET
	    Protected Sub RadGantt1_TaskDelete(sender As Object, e As Gantt.GanttEventArgs)
	        For Each item As var In e.Tasks
	            '...
	        Next
	    End Sub
````


>end

# See Also

 * [Server Side Events]({%slug gantt/server-side-programming/events/overview%})
