---
title: OnPopupClosing
page_title: OnPopupClosing - RadTimePicker
description: Check our Web Forms article about OnPopupClosing.
slug: timepicker/client-side-programming/events/onpopupclosing
tags: onpopupclosing
published: True
position: 3
---

# OnPopupClosing



The **OnPopupClosing** client-side event handler is called immediately before a popup time view is closed.


The event handler receives two arguments:

1. the object that fired the event.

1. an event arguments object that exposes the following methods:


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_popupControl()** |[Time view]({%slug timepicker/client-side-programming/radtimeview-object%}) client object||Returns the client object for the time view that is about to close.|
| **set_cancel(value)** ||bool|Lets you prevent the popup from closing.|

The following example uses the **OnPopupClosing** event to prevent the popup from closing if nothing is selected:

````ASPNET
<telerik:RadTimePicker RenderMode="Lightweight" ID="RadTimePicker1" runat="server">
    <ClientEvents OnPopupClosing="popupClosing" />
</telerik:RadTimePicker>		
````
````JavaScript
function popupClosing(sender, eventArgs) {
	var popup = eventArgs.get_popupControl();
	
    if (!popup.getTime()) {
		alert("You must select a time!");
		eventArgs.set_cancel(true);
	}
}
````



# See Also

 * [OnPopupOpening]({%slug timepicker/client-side-programming/events/onpopupopening%})


