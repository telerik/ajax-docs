---
title: OnPopupOpening
page_title: OnPopupOpening - RadDateRangePicker
description: Check our Web Forms article about OnPopupOpening.
slug: daterangepicker/client-side-programming/events/onpopupopening
tags: onpopupopening
published: True
position: 1
---

# OnPopupOpening


The **OnPopupOpening** client-side event handler is called just before a popup calendar is initialized to the current selection in the input area and then displayed.

The event handler receives two arguments:

1. the object that fired the event.

1. an event arguments object that exposes the following methods:OnPopupOpening event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_popupControl()** | [RadCalendar]({%slug calendar/client-side-programming/radcalendar-object%}) client-side object ||Returns the client object for the time view or calendar that is about to be displayed.|
| **set_cancelCalendarSynchronization(value)** ||bool|Lets you prevent the popup control from synchronizing its value to the value in the input area.|
| **set_cancel(value)** ||bool|Lets you prevent the popup from appearing.|

The following example demonstrates the **OnPopupOpening** event:

````ASPX
<telerik:RadDateRangePicker RenderMode="Lightweight" ID="RadDateRadPicker1" runat="server">
    <ClientEvents OnPopupOpening="popupOpening" />
</telerik:RadDateRangePicker>
````

````JavaScript
function popupOpening(sender, args) {
    alert("popup is opening");
}
````

Check out sample use of this event in the [Client-Side Events demo](https://demos.telerik.com/aspnet-ajax/daterangepicker/client-sideprogramming/client-sideevents/defaultcs.aspx)

# See Also

 * [Client-side Events Overview]({%slug daterangepicker/client-side-programming/events/overview%})

 * [OnPopupClosing]({%slug daterangepicker/client-side-programming/events/onpopupclosing%})


