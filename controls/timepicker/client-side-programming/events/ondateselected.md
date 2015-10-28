---
title: OnDateSelected
page_title: OnDateSelected | RadTimePicker for ASP.NET AJAX Documentation
description: OnDateSelected
slug: timepicker/client-side-programming/events/ondateselected
tags: ondateselected
published: True
position: 4
---

# OnDateSelected



The **OnDateSelected** client-side event handler is called immediately after the value of the control is changed.


The event handler receives two arguments:

1. the object that fired the event.

1. an event arguments object that exposes the following methods:


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_oldValue()** |string||Returns the old value of the control, formatted as a string.|
| **get_newValue()** |string||Returns the new value of the control, formatted as a string|
| **get_oldDate()** |Date object||Returns the old value of the control as a Date object.|
| **get_newDate()** |Date object||Returns the new value of the control as a Date object.|



The following example shows the **OnDateSelected** event for **RadDatePicker**. The **OnDateSelected** event works the same way for **RadTimePicker** and **RadDateTimePicker**.

````ASPNET
<telerik:RadTimePicker runat="server" ID="RadTimePicker1">
    <ClientEvents OnDateSelected="dateSelected" />
</telerik:RadTimePicker>	
````
````JavaScript
function dateSelected(sender, eventArgs) {
	alert("The date was just changed from " + eventArgs.get_oldValue() + " to " + eventArgs.get_newValue());
}
````


# See Also

 * [OnPopupClosing]({%slug timepicker/client-side-programming/events/onpopupclosing%})

 * [OnPopupOpening]({%slug timepicker/server-side-programming/server-side-events/onpopupopening%})


