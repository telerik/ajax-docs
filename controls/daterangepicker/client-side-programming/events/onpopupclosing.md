---
title: OnPopupClosing
page_title: OnPopupClosing - RadDateRangePicker
description: Check our Web Forms article about OnPopupClosing.
slug: daterangepicker/client-side-programming/events/onpopupclosing
tags: onpopupclosing
published: True
position: 2
---

# OnPopupClosing


The **OnPopupClosing** client-side event handler is called just before a popup calendar is closed.


The event handler receives two arguments:

1. the object that fired the event.

1. an event arguments object that exposes the following methods:OnPopupClosing event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_popupControl()** | [Calendar]({%slug calendar/client-side-programming/radcalendar-object%}) client-side object ||Returns the client object for the time view or calendar that is about to close.|
| **set_cancel(value)** ||bool|Lets you prevent the popup from closing.|

The following example demonstrates the **OnPopupClosing** event:

````ASPX
<telerik:RadDateRangePicker RenderMode="Lightweight" ID="RadDateRadPicker1" runat="server">
    <ClientEvents OnPopupClosing="popupClosing" />
</telerik:RadDateRangePicker>
````

````JavaScript
function popupClosing(sender, args) {
    alert("popup is closing");
}
````

Check out sample use of this event in the [Client-Side Events demo](https://demos.telerik.com/aspnet-ajax/daterangepicker/client-sideprogramming/client-sideevents/defaultcs.aspx)


# See Also

 * [Client-side Events Overview]({%slug daterangepicker/client-side-programming/events/overview%})

 * [OnPopupOpening]({%slug daterangepicker/client-side-programming/events/onpopupopening%})


