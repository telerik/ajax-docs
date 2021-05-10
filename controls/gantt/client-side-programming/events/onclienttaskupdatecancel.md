---
title: OnClientTaskUpdateCancel
page_title: OnClientTaskUpdateCancel - RadGantt
description: Check our Web Forms article about OnClientTaskUpdateCancel.
slug: gantt/client-side-programming/events/onclienttaskupdatecancel
tags: onclienttaskupdatecancel
published: True
position: 7
---

# OnClientTaskUpdateCancel

## 

The **OnClientTaskUpdateCancel** occurs when the user cancels tasks's cell editing. Event can be canceled. The equivalent of Kendo UI Gantt [change event](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/cancel).

The event handler receives two parameters:

1. The instance of the **Gantt** control firing the event.

2. An **eventArgs** parameter containing the following methods:

* **get_task** returns the GanttTask which has been edited.

* **set_cancel** lets you cancel the event and prevent the task update cancel.

* **get_cancel** returns **true** if the event has been canceled.

* **get_container** returns the jQuery object representing the wrapping cell element. That element contains the editing UI.

* **get_sender** returns the underlying Kendo UI Gantt widget that fired the event.

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" runat="server" id="RadGantt1" OnClientTaskUpdateCancel="OnClientTaskUpdateCancel">
</telerik:RadGantt>
````

````JavaScript
function OnClientTaskUpdateCancel(sender, eventArgs) {
    args.set_cancel(true);
}
````

# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
