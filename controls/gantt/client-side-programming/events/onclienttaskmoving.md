---
title: OnClientTaskMoving
page_title: OnClientTaskMoving - RadGantt
description: Check our Web Forms article about OnClientTaskMoving.
slug: gantt/client-side-programming/events/onclienttaskmoving
tags: onclienttaskmoving
published: True
position: 12
---

# OnClientTaskMoving

## 

The **OnClientMoving** occurs when the Task is just about to be moved.

The event handler receives two parameters:

1. The instance of the Gantt control firing the event.

1. An **eventArgs** parameter containing the following methods:

* **get_task** return the current moved task.

* **get_start** return the start time of the current task.

* **set_cancel** lets you cancel the event and stop the task moving.

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" runat="server" id="RadGantt1" OnClientTaskMoving="OnClientTaskMoving">
</telerik:RadGantt>
````

````JavaScript
function OnClientTaskMoving(sender, eventArgs) {
    args.set_cancel(true);
}
````


# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
