---
title: TaskDelete
page_title: TaskDelete - RadGantt
description: Check our Web Forms article about TaskDelete.
slug: gantt/server-side-programming/events/taskdelete
tags: taskdelete
published: True
position: 5
---

# TaskDelete

The **RadGantt TaskDelete** is fired when a task's collection is about to be deleted from the database through the provider.

**TaskDelete** event handler receives two parameters:

* **sender** is the **RadGantt** control instance.

* **e** is an object of type **GanttEventArgs**. It gives you access to the deleted **RadGantt** tasks collection.

## Example

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" ID="RadGantt1" runat="server" OnTaskDelete="RadGantt1_TaskDelete"></telerik:RadGantt>
````

````C#
protected void RadGantt1_TaskDelete(object sender, Telerik.Web.UI.Gantt.TaskEventArgs e)
{
    foreach (var item in e.Tasks)
    {
        //...
    }
}
````
````VB.NET
Protected Sub RadGantt1_TaskDelete(sender As Object, e As Gantt.TaskEventArgs)
    For Each item As var In e.Tasks
        '...
    Next
End Sub
````


# See Also

 * [Server Side Events]({%slug gantt/server-side-programming/events/overview%})
