---
title: OnClientTaskResizing
page_title: OnClientTaskResizing | RadGantt for ASP.NET AJAX Documentation
description: OnClientTaskResizing
slug: gantt/client-side-programming/events/onclienttaskresizing
tags: onclienttaskresizing
published: True
position: 5
---

# OnClientTaskResizing

## 

The **OnClientTaskResizing** occurs when the Task is just about to be resized.

The event handler receives two parameters:

1. The instance of the **Gantt** control firing the event.

1. An **eventArgs** parameter containing the following methods:

* **get_task** returns the current moved task.

* **set_cancel** lets you cancel the event and prevent the task moving.

* **get_cancel** returns **true** if the event has been canceled.

* **get_start** returns the start time of the current task.

* **get_end** returns the end time of the current task.

````XML
<telerik:RadGantt runat="server" id="RadGantt1" OnClientTaskResizing="OnClientTaskResizing">
</telerik:RadGantt>
````

````JavaScript
function OnClientTaskResizing(sender, eventArgs) {
    args.set_cancel(true);
}
````

# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
