---
title: TaskInsert
page_title: TaskInsert | RadGantt for ASP.NET AJAX Documentation
description: TaskInsert
slug: gantt/server-side-programming/events/taskinsert
tags: taskinsert
published: True
position: 3
---

# TaskInsert


The **RadGantt TaskInsert** is fired when a task's collection is about to be inserted in the database.

**TaskInsert** event handler receives two parameters:

* **sender** is the **RadGantt** control instance.

* **e** is an object of type **GanttEventArgs**. It gives you access to the inserted **RadGantt** tasks collection.

## Example

````ASPNET
<telerik:RadGantt ID="RadGantt1" runat="server" OnTaskInsert="RadGantt1_TaskInsert"></telerik:RadGantt>
````

````C#
protected void RadGantt1_TaskInsert(object sender, Telerik.Web.UI.Gantt.GanttEventArgs e)
{
    foreach (var item in e.Tasks)
    {
        item.Title = "Modified Title";
    }
}
````
````VB.NET
Protected Sub RadGantt1_TaskInsert(sender As Object, e As Telerik.Web.UI.Gantt.GanttEventArgs)
    For Each item As var In e.Tasks
        item.Title = "Modified Title"
    Next
End Sub
````


# See Also

 * [Server Side Events]({%slug gantt/server-side-programming/events/overview%})
