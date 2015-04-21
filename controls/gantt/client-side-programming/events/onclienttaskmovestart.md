---
title: OnClientTaskMoveStart
page_title: OnClientTaskMoveStart | UI for ASP.NET AJAX Documentation
description: OnClientTaskMoveStart
slug: gantt/client-side-programming/events/onclienttaskmovestart
tags: onclienttaskmovestart
published: True
position: 1
---

# OnClientTaskMoveStart

## 

The **OnClientTaskMoveStart** occurs when the Task moving is started.

The event handler receives two parameters:

1. The instance of the **Gantt** control firing the event.

1. An **eventArgs** parameter containing the following methods:

* **get_task** return the current moved task.

* **set_cancel** lets you cancel the event and prevent the task moving.

````XML
<telerik:RadGantt runat="server" id="RadGantt1" OnClientTaskMoveStart="OnClientTaskMoveStart">
</telerik:RadGantt>
````

````JavaScript
function OnClientTaskMoveStart(sender, eventArgs) {
    args.set_cancel(true);
}
````

# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
