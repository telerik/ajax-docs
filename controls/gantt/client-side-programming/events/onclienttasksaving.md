---
title: OnClientTaskSaving
page_title: OnClientTaskSaving - RadGantt
description: Check our Web Forms article about OnClientTaskSaving.
slug: gantt/client-side-programming/events/onclienttasksaving
tags: onclienttasksaving
published: True
position: 6
---

# OnClientTaskSaving

## 

The **OnClientTaskSaving** occurs when a task field is updated upon user interaction. Event can be canceled. The equivalent of Kendo UI Gantt [save event](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/save).

The event handler receives two parameters:

1. The instance of the **Gantt** control firing the event.

1. An **eventArgs** parameter containing the following methods:

* **get_task** returns the task which has been edited.

* **set_cancel** lets you cancel the event and prevent the task moving.

* **get_cancel** returns **true** if the event has been canceled.

* **get_values** returns the GantTask fields being updated with new values.

* **get_sender** returns the underlying Kendo UI Gantt widget that fired the event.

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" runat="server" id="RadGantt1" OnClientTaskSaving="OnClientTaskSaving">
</telerik:RadGantt>
````

````JavaScript
function OnClientTaskSaving(sender, eventArgs) {
    args.set_cancel(true);
}
````

# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
