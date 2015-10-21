---
title: OnPopupClosing
page_title: OnPopupClosing | RAdMonthYearPicker for ASP.NET AJAX Documentation
description: OnPopupClosing
slug: monthyearpicker/client-side-programming/events/onpopupclosing
tags: onpopupclosing
published: True
position: 1
---

# OnPopupClosing


The **OnPopupClosing** client-side event handler is called immediately before a popup calendar or time view is closed.

The event handler receives two arguments:

1. the object that fired the event.

1. an event arguments object that exposes the following methods:

**OnPopupClosing** event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_popupControl()** |[Time view]({%slug calendar/client-side-programming/radtimeview-object%})or[Calendar]({%slug calendar/client-side-programming/radcalendar-object%})client object||Returns the client object for the time view or calendar that is about to close.|
| **set_cancel(value)** ||bool|Lets you prevent the popup from closing.|

The following example uses the **OnPopupClosing** event to prevent the popup from closing if nothing is selected:

````ASPNET
telerik:RadMonthYearPicker ID="RadMonthYearPicker1" runat="server"  >
    <ClientEvents OnPopupClosing="popupClosing" />
</telerik:RadMonthYearPicker>	
````
````JavaScript
function popupClosing(sender, args) {
    alert("popup closing");
}
````



# See Also

 * [Client-side Events Overview]({%slug monthyearpicker/client-side-programming/events/overview%})
 
 * [OnPopupOpening]({%slug monthyearpicker/client-side-programming/events/onpopupopening%})
 

