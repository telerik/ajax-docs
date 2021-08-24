---
title: Events
page_title: Client-side Events - RadDateRangePicker
description: Check our Web Forms article about Events.
slug: daterangepicker/client-side-programming/events
tags: events
published: True
position: 1
---

# Events

This article lists the client-side events of the **RadDateRangePicker** and how to use them.

All events follow the MS AJAX client events convention and receive two arguments:

1. `sender` - the [RadDateRangePicker]({%slug daterangepicker/client-side-programming/overview%}) instance that raised the event.
1. `event arguments` - event-specific data provided to the developer.

>caption The client-side events exposed by RadDateRangePicker

| EVENT                 | APPLIES TO         | DESCRIPTION                                                                                                            |
|-----------------------|--------------------|------------------------------------------------------------------------------------------------------------------------|
| OnRangeSelectionChanged | RadDateRangePicker | Occurs immediately after the value of the control's selection has been changed.                                        |
| OnPopupOpening        | RadDateRangePicker | Occurs just before a popup is displayed, before the selection in the popup is synchronized with the input area. |
| OnPopupClosing        | RadDateRangePicker | Occurs just before the a popup is closed.  

>note The embedded **RadCalendar** and **RadDatePicker** objects used by **RadDateRangePicker** also has number of client-side events. For more details see the client events articles for [RadCalendar](https://docs.telerik.com/devtools/aspnet-ajax/controls/calendar/client-side-programming/events/overview) and [RadDatePicker](https://docs.telerik.com/devtools/aspnet-ajax/controls/datepicker/client-side-programming/events/overview) . Have in mind that some events of the embedded controls are disabled so RadDateRangePicker can serve its goals.
>

To use the client-side events, simply write a JavaScript function that can be called when the event occurs. Then assign the name of the JavaScript function as the value of the the corresponding property.

````ASPX
<telerik:RadDateRangePicker RenderMode="Lightweight" ID="RadDateRadPicker1" runat="server">
    <ClientEvents OnPopupOpening="popupOpening" />
</telerik:RadDatePicker>
````
````JavaScript
function popupOpening(sender, args) {
    alert("popup is opening");
}
````


<!-- See live sample of handling the client events in our [Client-side events demo](https://demos.telerik.com/aspnet-ajax/breadcrumb/client-side-programming/clientsideevents/defaultcs.aspx) -->


# See Also

 * [RadDateRangePicker Client-side Overview]({%slug daterangepicker/client-side-programming/overview%})

 * [RadCalendar Client-side Events]({%slug calendar/client-side-programming/events/overview%})
 
 * [RadDatePicker Client-side Events]({%slug datepicker/client-side-programming/events/overview%}).


