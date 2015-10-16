---
title: OnDateSelected 
page_title: OnDateSelected | RadDatePicker for ASP.NET AJAX Documentation
description: OnDateSelected 
slug: datepicker/client-side-programming/events/ondateselected
tags: ondateselected
published: True
position: 1
---

# OnDateSelected


The **OnDateSelected** client-side event handler is called immediately after the value of the control's selection has changed.

>note The **OnDateSelected** event is supported by: **RadCalendar** , **RadDatePicker** , **RadTimePicker** , and **RadDateTimePicker** .
>

The event handler receives two arguments:

1. the object that fired the event.

1. an event arguments object that exposes the following methods:OnDateSelected event arguments object for **RadCalendar**


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_renderDay()** |[RenderDay client-side object]({%slug calendar/client-side-programming/renderday-object%})||Returns the client-side RenderDay object for the day that was just selected or unselected.|OnDateSelected event arguments object for **RadDatePicker**, **RadTimePicker** and**RadDateTimePicker**


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_oldValue()** |string||Returns the old value of the control, formatted as a string.|
| **get_newValue()** |string||Returns the new value of the control, formatted as a string|
| **get_oldDate()** |Date object||Returns the old value of the control as a Date object.|
| **get_newDate()** |Date object||Returns the new value of the control as a Date object.|


````ASPNET
<telerik:RadDatePicker ID="RadDatePicker1" runat="server">
    <ClientEvents OnDateSelected="dateSelected" />
</telerik:RadDatePicker>		
````
````JavaScript
function dateSelected(sender, eventArgs) {
	alert("The date was just changed from " + eventArgs.get_oldValue() + " to " + eventArgs.get_newValue());
}
````


# See Also

 * [Client-side Events Overview]({%slug datepicker/client-side-programming/events/overview%})


