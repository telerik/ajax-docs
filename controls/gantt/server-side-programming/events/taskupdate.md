---
title: TaskUpdate
page_title: TaskUpdate - RadGantt
description: Check our Web Forms article about TaskUpdate.
slug: gantt/server-side-programming/events/taskupdate
tags: taskupdate
published: True
position: 4
---

# TaskUpdate


The **RadGantt TaskUpdate** event is fired when a task's collection is about to be updated through the provider.

**TaskUpdate** event handler receives two parameters:

* **sender** is the **RadGantt** control instance.

* **e** is an object of type **GanttEventArgs**. It provides access to the updated **RadGantt** tasks collection.

## Example

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" ID="RadGantt1" runat="server" OnTaskUpdate="RadGantt1_TaskUpdate"></telerik:RadGantt>
````

````C#
protected void RadGantt1_TaskUpdate(object sender, Telerik.Web.UI.Gantt.GanttEventArgs e)
{
    foreach (var item in e.Tasks)
    {
        item.Title = "Modified Title";
    }
}
````
````VB.NET
Protected Sub RadGantt1_TaskUpdated(sender As Object, e As Telerik.Web.UI.Gantt.GanttEventArgs)
    For Each item As var In e.Tasks
        item.Title = "Modified Title"
    Next
End Sub
````


# See Also

 * [Server Side Events]({%slug gantt/server-side-programming/events/overview%})
