---
title: OnPopupOpening
page_title: OnPopupOpening | RadDatePicker for ASP.NET AJAX Documentation
description: OnPopupOpening
slug: datepicker/client-side-programming/events/onpopupopening
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

The following example uses the **OnPopupOpening** event to initialize the selection if the input area is empty:

````ASPNET
<telerik:RadDatePicker ID="RadDatePicker1" runat="server">
    <Calendar DayNameFormat="FirstLetter"
           UseColumnHeadersAsSelectors="False"
           UseRowHeadersAsSelectors="False">
    </Calendar>
    <ClientEvents OnPopupOpening="popupOpening" />
</telerik:RadDatePicker>
````
````JavaScript
function popupOpening(sender, eventArgs) {
	if (sender.isEmpty()) {
		eventArgs.set_cancelCalendarSynchronization(true);
		
		var popup = eventArgs.get_popupControl();
		var todaysDate;
		var todayTriplet;
		
		if (popup.get_selectedDates().length == 0) {
			todaysDate = new Date();
			todayTriplet = [todaysDate.getFullYear(), todaysDate.getMonth() + 1, todaysDate.getDate()];
			popup.selectDate(todayTriplet, true);
		}
	}
}
````


# See Also

 * [Client-side Events Overview]({%slug datepicker/client-side-programming/events/overview%})

 * [OnPopupClosing]({%slug datepicker/client-side-programming/events/onpopupclosing%})


