---
title: OnClientTaskMoveEnd
page_title: OnClientTaskMoveEnd | UI for ASP.NET AJAX Documentation
description: OnClientTaskMoveEnd
slug: gantt/client-side-programming/events/onclienttaskmoveend
tags: onclienttaskmoveend
published: True
position: 3
---

# OnClientTaskMoveEnd

## 

The **OnClientTaskMoveEnd** occurs when the Task moving is ended.

The event handler receives two parameters:

1. The instance of the **Gantt** control firing the event.

1. An **eventArgs** parameter containing the following methods:

* **get_task** returns the current moved task.

* **get_start** returns the start time of the current task.

* **set_cancel** lets you cancel the event and prevent the task moving.

* **get_cancel** returns **true** if the event has been canceled.

````XML
<telerik:RadGantt runat="server" id="RadGantt1" OnClientTaskMoveEnd="OnClientTaskMoveEnd">
</telerik:RadGantt>
````

````JavaScript
function OnClientTaskMoveEnd(sender, eventArgs) {
    args.set_cancel(true);
}
````

# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
