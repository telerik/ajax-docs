---
title: AssignmentDelete
page_title: AssignmentDelete - RadGantt
description: Check our Web Forms article about AssignmentDelete.
slug: gantt/server-side-programming/events/assignmentdelete
tags: assignmentdelete
published: True
position: 11
---

# AssignmentDelete

The **RadGantt AssignmentDelete** event is fired when an assignment's collection is about to be deleted from the database through the provider.

**AssignmentDelete** event handler receives two parameters:

* **sender** is the **RadGantt** control instance.

* **e** is an object of type **AssignmentEventArgs**. It gives you access to the deleted **RadGantt** assignments collection.

## Example

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" ID="RadGantt1" runat="server" OnAssignmentDelete="RadGantt1_AssignmentDelete"></telerik:RadGantt>
````

````C#
protected void RadGantt1_AssignmentDelete(object sender, Telerik.Web.UI.Gantt.AssignmentEventArgs e)
{
    foreach (var item in e.Assignments)
    {
        //...
    }
}
````
````VB.NET
Protected Sub RadGantt1_AssignmentDelete(sender As Object, e As Gantt.AssignmentEventArgs)
    For Each item As var In e.Assignments
        '...
    Next
End Sub
````

>note Subscribing to only one of the following events: AssignmentInsert, AssignmentUpdate, AssignmentDelete, will cause a postback to be triggered for the other two events, instead of a callback.
>

# See Also

 * [Server Side Events]({%slug gantt/server-side-programming/events/overview%})
