---
title: OnPopupOpening
page_title: OnPopupOpening | UI for ASP.NET AJAX Documentation
description: OnPopupOpening
slug: calendar/client-side-programming/events/onpopupopening
tags: onpopupopening
published: True
position: 12
---

# OnPopupOpening



## 

The __OnPopupOpening__ client-side event handler is called immediately before a popup calendar or time view is initialized to the current selection in the input area and then displayed.

>note The __OnPopupOpening__ event is supported by: __RadDatePicker__ , __RadTimePicker__ , and __RadDateTimePicker__ .
>


The event handler receives two arguments:

1. the object that fired the event.

1. an event arguments object that exposes the following methods:OnPopupOpening event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| __get_popupControl()__ |[Time view]({%slug calendar/client-side-programming/radtimeview-object%})or[Calendar]({%slug calendar/client-side-programming/radcalendar-object%})client object||Returns the client object for the time view or calendar that is about to be displayed.|
| __set_cancelCalendarSynchronization(value)__ ||bool|Lets you prevent the popup control from synchronizing its value to the value in the input area.|
| __set_cancel(value)__ ||bool|Lets you prevent the popup from appearing.|

The following example uses the __OnPopupOpening__ event to initialize the selection if the input area is empty:

````ASPNET
	<script type="text/javascript">
	    function InitializePopup(sender, eventArgs) {
	        if (sender.isEmpty()) {
	            eventArgs.set_cancelCalendarSynchronization(true);
	            var popup = eventArgs.get_popupControl();
	            if (popup == sender.get_calendar()) {
	                if (popup.get_selectedDates().length == 0) {
	                    var todaysDate = new Date();
	                    var todayTriplet = [todaysDate.getFullYear(), todaysDate.getMonth() + 1, todaysDate.getDate()];
	                    popup.selectDate(todayTriplet, true);
	                }
	            }
	            else {
	                var time = popup.getTime();
	                if (!time) {
	                    time = new Date();
	                    time.setHours(12);
	                    popup.setTime(time);
	                }
	            }
	        }
	    }
	</script>
	<telerik:RadDateTimePicker ID="RadDateTimePicker1" runat="server">
	    <Calendar DayNameFormat="FirstLetter"
	           UseColumnHeadersAsSelectors="False"
	           UseRowHeadersAsSelectors="False">
	    </Calendar>
	    <ClientEvents OnPopupOpening="InitializePopup" />
	</telerik:RadDateTimePicker>
````



# See Also

 * [OnPopupClosing]({%slug calendar/client-side-programming/events/onpopupclosing%})
