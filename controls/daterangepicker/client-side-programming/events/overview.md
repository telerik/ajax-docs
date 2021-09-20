---
title: Overview
page_title: Client-side events Overview - RadDateRangePicker
description: Check our Web Forms article about RadDateRangePicker Client-side events Overview.
slug: daterangepicker/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Overview

This article lists the client-side events of the **RadDateRangePicker** and how to use them.

All events follow the MS AJAX client events convention and receive two arguments:

1. `sender` - the [RadDateRangePicker]({%slug daterangepicker/client-side-programming/overview%}) instance that raised the event.
1. `event arguments` - event-specific data provided to the developer.

>caption The client-side events exposed by RadDateRangePicker

| EVENT                 | APPLIES TO         | DESCRIPTION                                                                                                            |
|-----------------------|--------------------|------------------------------------------------------------------------------------------------------------------------|
| OnDateSelected | RadDateRangePicker | Occurs immediately after a date has been selected. It fires separately for selecting StartDate and EndDate.                                        |
| OnPopupOpening        | RadDateRangePicker | Occurs just before a popup is displayed, before the selection in the popup is synchronized with the input area. |
| OnPopupClosing        | RadDateRangePicker | Occurs just before the a popup is closed.  

>note The embedded **RadCalendar** and **RadDatePicker** objects used by **RadDateRangePicker** also has number of client-side events. For more details see the client events articles for [RadCalendar](https://docs.telerik.com/devtools/aspnet-ajax/controls/calendar/client-side-programming/events/overview) and [RadDatePicker](https://docs.telerik.com/devtools/aspnet-ajax/controls/datepicker/client-side-programming/events/overview) . Have in mind that some events of the embedded controls are disabled so RadDateRangePicker can serve its goals.
>

To use the client-side events, simply write a JavaScript function that can be called when the event occurs. Then assign the name of the JavaScript function as the value of the the corresponding property.

````ASP.NET
<telerik:RadDateRangePicker RenderMode="Lightweight" ID="RadDateRangePicker1" runat="server">
    <ClientEvents OnPopupOpening="popupOpening" />
</telerik:RadDateRangePicker>
````

````JavaScript
function popupOpening(sender, args) {
    alert("popup is opening");
}
````


See live sample of handling the client events in our [Client-side events demo](https://demos.telerik.com/aspnet-ajax/daterangepicker/client-sideprogramming/client-sideevents/defaultcs.aspx)



# See Also

 * [RadDatePicker Client-side Object]({%slug datepicker/client-side-programming/raddatepicker-object%})
 
 * [OnPopupOpening]({%slug daterangepicker/client-side-programming/events/onpopupopening%})
 
 * [OnPopupClosing]({%slug daterangepicker/client-side-programming/events/onpopupclosing%})
 
 * [OnDateSelected]({%slug daterangepicker/client-side-programming/events/ondateselected%})
 
