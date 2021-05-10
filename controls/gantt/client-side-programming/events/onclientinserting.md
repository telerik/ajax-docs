---
title: OnClientInserting
page_title: OnClientInserting - RadGantt
description: Check our Web Forms article about OnClientInserting.
slug: gantt/client-side-programming/events/onclientinserting
tags: 
published: True
position: 3
---

# OnClientInserting


The **OnClientInserting** occurs when a new task or a new dependency is about to be added. The event can be canceled. The equivalent of the underlying Kendo UI Gantt [add event](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/add).

The event handler receives two parameters:

1. The instance of the **Gantt** control firing the event.

2. An **eventArgs** parameter containing the following methods:

* **get_task** returns the GanttTask instance which will be added to the DataSource.

* **set_cancel** lets you cancel the event and prevent the inserting.

* **get_cancel** returns **true** if the event has been canceled.

* **dependency** returns the GanttDependency instance which will be added to the DataSource.

* **get_sender** returns the underlying Kendo UI Gantt widget that fired the event.

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" runat="server" id="RadGantt1" OnClientInserting="OnClientInserting">
</telerik:RadGantt>
````

````JavaScript
function OnClientInserting(sender, eventArgs) {
    // cancel the event
    args.set_cancel(true);
}
````

# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
