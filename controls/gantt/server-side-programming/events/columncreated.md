---
title: ColumnCreated
page_title: ColumnCreated | UI for ASP.NET AJAX Documentation
description: ColumnCreated
slug: gantt/server-side-programming/events/columncreated
tags: columncreated
published: True
position: 2
---

# ColumnCreated


The __RadGantt ColumnCreated__ is fired after a [TreeList]({%slug gantt/structure/layout%}) column was created.

__ColumnCreated__ event handler receives two parameters:

* __sender__ is the __RadGantt__ control instance.

* __e__ is an object of type __ColumnCreatedEventArgs__. It gives you access to the created [TreeList]({%slug gantt/structure/layout%}) column.

## Example

````ASPNET
	    <telerik:RadGantt ID="RadGantt1" runat="server" OnColumnCreated="RadGantt1_ColumnCreated"></telerik:RadGantt>
````

````C#
protected void RadGantt1_ColumnCreated(object sender, Telerik.Web.UI.Gantt.ColumnCreatedEventArgs e)
{
    //...
}
````
````VB.NET
Protected Sub RadGantt1_ColumnCreated(sender As Object, e As Gantt.ColumnCreatedEventArgs)
    '...
End Sub
````


# See Also

 * [Server Side Events]({%slug gantt/server-side-programming/events/overview%})
