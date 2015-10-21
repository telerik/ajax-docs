---
title: OnPopupOpening
page_title: OnPopupOpening | RadMonthYearPicker for ASP.NET AJAX Documentation
description: OnPopupOpening
slug: monthyearpicker/client-side-programming/events/onpopupopening
tags: onpopupopening
published: True
position: 1
---

# OnPopupOpening


The **OnPopupOpening** client-side event handler is called immediately before a popup monthyearview displayed.

The event handler receives two arguments:

1. the object that fired the event.

1. an event arguments object that exposes the following methods:

OnPopupOpening event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_popupControl()** |[Time view]({%slug calendar/client-side-programming/radtimeview-object%})or[Calendar]({%slug calendar/client-side-programming/radcalendar-object%})client object||Returns the client object for the time view or calendar that is about to be displayed.|
| **set_cancelCalendarSynchronization(value)** ||bool|Lets you prevent the popup control from synchronizing its value to the value in the input area.|
| **set_cancel(value)** ||bool|Lets you prevent the popup from appearing.|

The following example uses the **OnPopupOpening** event to initialize the selection if the input area is empty:

````ASPNET
<telerik:RadMonthYearPicker ID="RadMonthYearPicker1" runat="server"  >
    <ClientEvents OnPopupOpening="popupOpening" />
</telerik:RadMonthYearPicker>
````
````JavaScript
function popupOpening(sender, args) {
    alert("popup opening");
}
````


# See Also

 * [Client-side Events Overview]({%slug monthyearpicker/client-side-programming/events/overview%})
 
 * [OnPopupClosing]({%slug monthyearpicker/client-side-programming/events/onpopupclosing%})
 
 
