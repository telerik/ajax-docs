---
title: OnClientTaskEditing
page_title: OnClientTaskEditing - RadGantt
description: Check our Web Forms article about OnClientTaskEditing.
slug: gantt/client-side-programming/events/onclienttaskediting
tags: onclienttaskediting
published: True
position: 5
---

# OnClientTaskEditing

## 

The **OnClientTaskEditing** occurs when the user starts task edit upon double click on a cell or a task element. Event can be canceled. The equivalent of Kendo UI Gantt [edit event](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/edit).


The event handler receives two parameters:

1. The instance of the **Gantt** control firing the event.

1. An **eventArgs** parameter containing the following methods:

* **get_task** returns the current moved task.

* **set_cancel** lets you cancel the event and prevent the task editing.

* **get_cancel** returns **true** if the event has been canceled.

* **get_container** returns the jQuery object representing the wrapping cell element. That element contains the editing UI.

* **get_sender** returns the underlying Kendo UI Gantt widget that fired the event.

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" runat="server" id="RadGantt1" OnClientTaskEditing="OnClientTaskEditing">
</telerik:RadGantt>
````

````JavaScript
function OnClientTaskEditing(sender, eventArgs) {
    args.set_cancel(true);
}
````

# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
