---
title: OnClientTaskResizeEnd
page_title: OnClientTaskResizeEnd - RadGantt
description: Check our Web Forms article about OnClientTaskResizeEnd.
slug: gantt/client-side-programming/events/onclienttaskresizeend
tags: onclienttaskresizeend
published: True
position: 7
---

# OnClientTaskResizeEnd

## 

The **OnClientTaskResizeEnd** occurs when the Task resizing is ended.

The event handler receives two parameters:

1. The instance of the **Gantt** control firing the event.

1. An **eventArgs** parameter containing the following methods:

* **get_task** returns the current moved task.

* **set_cancel** lets you cancel the event and prevent the task moving.

* **get_cancel** returns **true** if the event has been canceled.

* **get_start** returns the start time of the current task.

* **get_end** returns the end time of the current task.

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" runat="server" id="RadGantt1" OnClientTaskResizeEnd="OnClientTaskResizeEnd">
</telerik:RadGantt>
````

````JavaScript
function OnClientTaskResizeEnd(sender, eventArgs) {
    args.set_cancel(true);
}
````

# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
