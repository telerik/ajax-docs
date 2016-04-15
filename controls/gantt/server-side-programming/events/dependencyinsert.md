---
title: DependencyInsert
page_title: DependencyInsert | RadGantt for ASP.NET AJAX Documentation
description: DependencyInsert
slug: gantt/server-side-programming/events/dependencyinsert
tags: dependencyinsert
published: True
position: 6
---

# DependencyInsert

The **RadGantt DependencyInsert** is fired when a [dependency's]({%slug gantt/structure/layout%}) collection is about to be inserted in the database.

**DependencyInsert** event handler receives two parameters:

* **sender** is the **RadGantt** control instance.

* **e** is an object of type **DependencyEventArgs**. It gives you access to the inserted **Dependencies** collection.

## Example

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" ID="RadGantt1" runat="server" OnDependencyInsert="RadGantt1_DependencyInsert"></telerik:RadGantt>
````

````C#
protected void RadGantt1_DependencyInsert(object sender, Telerik.Web.UI.Gantt.DependencyEventArgs e)
{
    foreach (var dependency in e.Dependencies)
    {
        if (dependency.Type == Telerik.Web.UI.Gantt.DependencyType.FinishFinish)
        {
            e.Cancel = true;
        }
    }
}
````
````VB.NET
Protected Sub RadGantt1_DependencyInsert(sender As Object, e As Telerik.Web.UI.Gantt.DependencyEventArgs)
    For Each dependency As var In e.Dependencies
        If dependency.Type = Telerik.Web.UI.Gantt.DependencyType.FinishFinish Then
            e.Cancel = True
        End If
    Next
End Sub
````


# See Also

 * [Server Side Events]({%slug gantt/server-side-programming/events/overview%})
