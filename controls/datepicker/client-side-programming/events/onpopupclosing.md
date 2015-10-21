---
title: OnPopupClosing
page_title: OnPopupClosing | RadDatePicker for ASP.NET AJAX Documentation
description: OnPopupClosing
slug: datepicker/client-side-programming/events/onpopupclosing
tags: onpopupclosing
published: True
position: 1
---

# OnPopupClosing


The **OnPopupClosing** client-side event handler is called just before a popup calendar is closed.

>note The **OnPopupClosing** event is supported by: **RadDatePicker** , **RadTimePicker** , and **RadDateTimePicker** .
>


The event handler receives two arguments:

1. the object that fired the event.

1. an event arguments object that exposes the following methods:OnPopupClosing event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_popupControl()** | [Calendar]({%slug calendar/client-side-programming/radcalendar-object%}) client-side object ||Returns the client object for the time view or calendar that is about to close.|
| **set_cancel(value)** ||bool|Lets you prevent the popup from closing.|

The following example uses the **OnPopupClosing** event to prevent the popup from closing if nothing is selected:

````ASPNET
<telerik:RadDatePicker ID="RadDatePicker1" runat="server">
    <Calendar DayNameFormat="FirstLetter"
           UseColumnHeadersAsSelectors="False"
           UseRowHeadersAsSelectors="False">
    </Calendar>
    <ClientEvents OnPopupClosing="popupClosing" />
</telerik:RadDatePicker>		
````
````JavaScript
function popupClosing(sender, eventArgs) {
	var popup = eventArgs.get_popupControl();
	
	if (popup.get_selectedDates().length == 0) {
		alert("You must select a date!");
		eventArgs.set_cancel(true);
	}
}
````



# See Also

 * [Client-side Events Overview]({%slug datepicker/client-side-programming/events/overview%})

 * [OnPopupOpening]({%slug datepicker/client-side-programming/events/onpopupopening%})


