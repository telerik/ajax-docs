---
title: ColumnCreated
page_title: ColumnCreated - RadGantt
description: Check our Web Forms article about ColumnCreated.
slug: gantt/server-side-programming/events/columncreated
tags: columncreated
published: True
position: 2
---

# ColumnCreated


The **RadGantt ColumnCreated** is fired after a [TreeList]({%slug gantt/structure/layout%}) column was created.

**ColumnCreated** event handler receives two parameters:

* **sender** is the **RadGantt** control instance.

* **e** is an object of type **ColumnCreatedEventArgs**. It gives you access to the created [TreeList]({%slug gantt/structure/layout%}) column.

## Example

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" ID="RadGantt1" runat="server" OnColumnCreated="RadGantt1_ColumnCreated"></telerik:RadGantt>
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
