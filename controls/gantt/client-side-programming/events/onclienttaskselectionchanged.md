---
title: OnClientTaskSelectionChanged
page_title: OnClientTaskSelectionChanged - RadGantt
description: Check our Web Forms article about OnClientTaskSelectionChanged.
slug: gantt/client-side-programming/events/onclienttaskselectionchanged
tags: onclienttaskselectionchanged
published: True
position: 17
---

# OnClientTaskSelectionChanged

## 

The **OnClientTaskSelectionChanged** occurs when the user selects a task in the Gantt. The equivalent of Kendo UI Gantt [change event](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt/events/change).

The event handler receives two parameters:

1. The instance of the **Gantt** control firing the event.

1. An **eventArgs** parameter containing the following methods:

* **get_sender** returns the underlying Kendo UI Gantt widget that fired the event.

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" runat="server" id="RadGantt1" OnClientTaskSelectionChanged="OnClientTaskSelectionChanged">
</telerik:RadGantt>
````

````JavaScript
function OnClientTaskSelectionChanged(sender, eventArgs) {
    var kendoGantt = eventArgs.get_sender();
    var selection = kendoGantt.select();
    var task;

    if (selection){
        task = kendoGantt.dataItem(selection);
        console.log($telerik._kendo.format("{0} is selected", task.title));
    }
}
````

# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
