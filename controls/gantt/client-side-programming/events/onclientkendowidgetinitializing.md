---
title: OnClientKendoWidgetInitializing
page_title: OnClientKendoWidgetInitializing - RadGantt
description: Check our Web Forms article about OnClientKendoWidgetInitializing.
slug: gantt/client-side-programming/events/onclientkendowidgetinitializing
tags: onclientkendowidgetinitializing
published: True
position: 1
---

# OnClientKendoWidgetInitializing

## 

The **OnClientKendoWidgetInitializing** occurs just before the Kendo Widget is initialized. The arguments are the options object that will be passed to the underlying [Kendo UI Gantt](https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt) constructor.

The event handler receives two parameters:

1. The instance of the **Gantt** control firing the event.

1. An **eventArgs** parameter that represents the options object that will be passed to the Kendo UI Gantt constructor

````ASP.NET
<telerik:RadGantt RenderMode="Lightweight" runat="server" id="RadGantt1" OnClientKendoWidgetInitializing="OnClientKendoWidgetInitializing">
</telerik:RadGantt>
````

````JavaScript
function OnClientKendoWidgetInitializing(sender, eventArgs) {
    var options = eventArgs;
    // change the options object passed to .kendoGantt() method
    // https://docs.telerik.com/kendo-ui/api/javascript/ui/gantt
}
````

# See Also

 * [Client-Side Basics]({%slug gantt/client-side-programming/overview%})

 * [Client-Side Events]({%slug gantt/client-side-programming/events/overview%})
