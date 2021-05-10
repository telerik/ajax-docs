---
title: OnClientTogglePlannedTasks
page_title: OnClientTogglePlannedTasks - RadGantt
description: Check our Web Forms article about OnClientTogglePlannedTasks.
slug: gantt/client-side-programming/events/onclienttoggleplannedtasks
tags: onclienttoggleplannedtasks
published: True
position: 19
---

# OnClientTogglePlannedTasks

## 

The **OnClientTogglePlannedTasks** occurs upon Toolbar PlannedTasks Switch click. As a result, the planned tasks will be either hidden or shown in the Gantt Timeline view. Event can be canceled. The equivalent of Kendo UI Gantt [togglePlannedTasks event](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/toggleplannedtasks).

The event handler receives two parameters:

1. The instance of the **Gantt** control firing the event.

1. An **eventArgs** parameter containing the following methods:

* **get_showPlannedTasks** returns a boolean indicating whether the planned tasks are about to be shown (true) or hidden (false)..

* **set_cancel** lets you cancel the event and prevent the planned task toggle.

* **get_cancel** returns **true** if the event has been canceled.

* **get_sender** returns the underlying Kendo UI Gantt widget that fired the event.

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" runat="server" id="RadGantt1" OnClientTogglePlannedTasks="OnClientTogglePlannedTasks">
</telerik:RadGantt>
````

````JavaScript
function OnClientTogglePlannedTasks(sender, eventArgs) {
    args.set_cancel(true);
}
````

# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
