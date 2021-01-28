---
title: AssignmentInsert
page_title: AssignmentInsert - RadGantt
description: Check our Web Forms article about AssignmentInsert.
slug: gantt/server-side-programming/events/assignmentinsert
tags: assignmentinsert
published: True
position: 9
---

# AssignmentInsert


The **RadGantt AssignmentInsert** event is fired when an assignment's collection is about to be inserted in the database.

**AssignmentInsert** event handler receives two parameters:

* **sender** is the **RadGantt** control instance.

* **e** is an object of type **AssignmentEventArgs**. It gives you access to the inserted **RadGantt** assignments collection.

## Example

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" ID="RadGantt1" runat="server" OnAssignmentInsert="RadGantt1_AssignmentInsert"></telerik:RadGantt>
````

````C#
protected void RadGantt1_AssignmentInsert(object sender, Telerik.Web.UI.Gantt.AssignmentEventArgs e)
{
    foreach (var item in e.Assignments)
    {
        //...
    }
}
````
````VB.NET
Protected Sub RadGantt1_AssignmentInsert(sender As Object, e As Telerik.Web.UI.Gantt.AssignmentEventArgs)
    For Each item As var In e.Tasks
        '...
    Next
End Sub
````

>note Subscribing to only one of the following events: AssignmentInsert, AssignmentUpdate, AssignmentDelete, will cause a postback to be triggered for the other two events, instead of a callback.
>

# See Also

 * [Server Side Events]({%slug gantt/server-side-programming/events/overview%})
