---
title: OnClientTaskResizeStart
page_title: OnClientTaskResizeStart - RadGantt
description: Check our Web Forms article about OnClientTaskResizeStart.
slug: gantt/client-side-programming/events/onclienttaskresizestart
tags: onclienttaskresizestart
published: True
position: 5
---

# OnClientTaskResizeStart

## 

The **OnClientTaskResizeStart** occurs when the Task resizing is started.

The event handler receives two parameters:

1. The instance of the **Gantt** control firing the event.

1. An **eventArgs** parameter containing the following methods:

* **get_task** returns the current moved task.

* **set_cancel** lets you cancel the event and prevent the task moving.

* **get_cancel** returns **true** if the event has been canceled.

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" runat="server" id="RadGantt1" OnClientTaskResizeStart="OnClientTaskResizeStart">
</telerik:RadGantt>
````

````JavaScript
function OnClientTaskResizeStart(sender, eventArgs) {
    args.set_cancel(true);
}
````


# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
