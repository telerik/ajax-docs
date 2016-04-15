---
title: DependencyDelete
page_title: DependencyDelete | RadGantt for ASP.NET AJAX Documentation
description: DependencyDelete
slug: gantt/server-side-programming/events/dependencydelete
tags: dependencydelete
published: True
position: 7
---

# DependencyDelete


The **RadGantt DependencyDelete** is fired when a [dependency]({%slug gantt/structure/layout%}) collection is about to be deleted from the database through the provider.

**DependencyDelete** event handler receives two parameters:

* **sender** is the **RadGantt** control instance.

* **e** is an object of type **DependencyEventArgs**. It gives you access to the deleted **Dependencies** collection.

## Example

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" ID="RadGantt1" runat="server" OnDependencyDelete="RadGantt1_DependencyDelete"></telerik:RadGantt>
````

````C#
protected void RadGantt1_DependencyDelete(object sender, Telerik.Web.UI.Gantt.DependencyEventArgs e)
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
Protected Sub RadGantt1_DependencyDelete(sender As Object, e As Telerik.Web.UI.Gantt.DependencyEventArgs)
    For Each dependency As var In e.Dependencies
        If dependency.Type = Telerik.Web.UI.Gantt.DependencyType.FinishFinish Then
            e.Cancel = True
        End If
    Next
End Sub
````


# See Also

 * [Server Side Events]({%slug gantt/server-side-programming/events/overview%})
