---
title: ColumnCreating
page_title: ColumnCreating | UI for ASP.NET AJAX Documentation
description: ColumnCreating
slug: gantt/server-side-programming/events/columncreating
tags: columncreating
published: True
position: 1
---

# ColumnCreating



The __RadGantt ColumnCreating__ is fired when a [TreeList]({%slug gantt/structure/layout%}) column is about to be created.

__ColumnCreating__ event handler receives two parameters:

* __sender__ is the __RadGantt__ control instance.

* __e__ is an object of type __ColumnCreatingEventArgs__. It gives you access to the [TreeList]({%slug gantt/structure/layout%}) column.

## Example

````ASPNET
	    <telerik:RadGantt ID="RadGantt1" runat="server" OnColumnCreating="RadGantt1_ColumnCreating"></telerik:RadGantt>
````





````C#
	    protected void RadGantt1_ColumnCreating(object sender, Telerik.Web.UI.Gantt.ColumnCreatingEventArgs e)
	    {
	        if (e.Column.HeaderText == "ID") {
	            e.Column.AllowSorting = false;
	        }
	    }
````
````VB.NET
	    Protected Sub RadGantt1_ColumnCreating(sender As Object, e As Gantt.ColumnCreatingEventArgs)
	        For Each item As var In e.Tasks
	            item.Title = "Modified Title"
	        Next
	    End Sub
````


# See Also

 * [Server Side Events]({%slug gantt/server-side-programming/events/overview%})
