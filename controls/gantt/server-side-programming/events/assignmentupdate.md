---
title: AssignmentUpdate
page_title: AssignmentUpdate | RadGantt for ASP.NET AJAX Documentation
description: AssignmentUpdate
slug: gantt/server-side-programming/events/assignmentupdate
tags: assignmentupdate
published: True
position: 10
---

The **RadGantt AssignmentUpdate** is fired when an assignment's collection is about to be updated through the provider.

**AssignmentUpdate** event handler receives two parameters:

* **sender** is the **RadGantt** control instance.

* **e** is an object of type **AssignmentEventArgs**. It provides access to the updated **RadGantt** assignments collection.

## Example

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" ID="RadGantt1" runat="server" OnAssignmentUpdate="RadGantt1_AssignmentUpdate"></telerik:RadGantt>
````

````C#
protected void RadGantt1_AssignmentUpdate(object sender, Telerik.Web.UI.Gantt.AssignmentEventArgs e)
{
    foreach (var item in e.Assignments)
    {
        //...
    }
}
````
````VB.NET
Protected Sub RadGantt1_AssignmentUpdate(sender As Object, e As Telerik.Web.UI.Gantt.AssignmentEventArgs)
    For Each item As var In e.Assignments
        '...
    Next
End Sub
````


# See Also

 * [Server Side Events]({%slug gantt/server-side-programming/events/overview%})
 