---
title: OnPopupOpening
page_title: OnPopupOpening | RadTimePicker for ASP.NET AJAX Documentation
description: OnPopupOpening
slug: timepicker/client-side-programming/events/onpopupopening
tags: onpopupopening
published: True
position: 2
---

# OnPopupOpening



The **OnPopupOpening** client-side event handler is called immediately before a popup time view is displayed.


The event handler receives two arguments:

1. the object that fired the event.

1. an event arguments object that exposes the following methods:


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_popupControl()** |[Time view]({%slug timepicker/client-side-programming/radtimeview-object%}) client object||Returns the client object for the time view that is about to be displayed.|
| **set_cancelCalendarSynchronization(value)** ||bool|Lets you prevent the popup control from synchronizing its value to the value in the input area.|
| **set_cancel(value)** ||bool|Lets you prevent the popup from appearing.|

The following example uses the **OnPopupOpening** event to initialize the selection if the input area is empty:

````ASPNET
<telerik:RadTimePicker ID="RadTimePicker1" runat="server">
    <ClientEvents OnPopupOpening="popupOpening" />
</telerik:RadTimePicker>
````
````JavaScript
function popupOpening(sender, eventArgs) {
	var popup = eventArgs.get_popupControl();
	var time = popup.getTime();;
	
	if (!time) {
		time = new Date();
		time.setHours(12);
		popup.setTime(time);
	}
}
````


# See Also

 * [OnPopupClosing]({%slug timepicker/client-side-programming/events/onpopupclosing%})
