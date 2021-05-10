---
title: OnClientRemoving
page_title: OnClientRemoving - RadGantt
description: Check our Web Forms article about OnClientRemoving.
slug: gantt/client-side-programming/events/onclientremoving
tags: onclientremoving
published: True
position: 4
---


# OnClientRemoving


The **OnClientRemoving** occurs when a task or a dependency is about to be removed. The event can be canceled. The equivalent of the underlying Kendo UI Gantt [remove event](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/remove).

The event handler receives two parameters:

1. The instance of the **Gantt** control firing the event.

2. An **eventArgs** parameter containing the following methods:

* **get_task** returns the GanttTask instance which is being removed from the DataSource.

* **set_cancel** lets you cancel the event and prevent the inserting.

* **get_cancel** returns **true** if the event has been canceled.

* **dependencies** returns an array of GanttDependency instances which are associated with the task being removed, or an array with a single dependency which is being removed.

* **get_sender** returns the underlying Kendo UI Gantt widget that fired the event.

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" runat="server" id="RadGantt1" OnClientRemoving="OnClientRemoving">
</telerik:RadGantt>
````

````JavaScript
function OnClientRemoving(sender, eventArgs) {
    // cancel the event
    args.set_cancel(true);
}
````

# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
