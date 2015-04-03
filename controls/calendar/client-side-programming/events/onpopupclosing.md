---
title: OnPopupClosing
page_title: OnPopupClosing | UI for ASP.NET AJAX Documentation
description: OnPopupClosing
slug: calendar/client-side-programming/events/onpopupclosing
tags: onpopupclosing
published: True
position: 13
---

# OnPopupClosing



## 

The __OnPopupClosing__ client-side event handler is called immediately before a popup calendar or time view is closed.

>note The __OnPopupClosing__ event is supported by: __RadDatePicker__ , __RadTimePicker__ , and __RadDateTimePicker__ .
>


The event handler receives two arguments:

1. the object that fired the event.

1. an event arguments object that exposes the following methods:OnPopupClosing event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| __get_popupControl()__ |[Time view]({%slug calendar/client-side-programming/radtimeview-object%})or[Calendar]({%slug calendar/client-side-programming/radcalendar-object%})client object||Returns the client object for the time view or calendar that is about to close.|
| __set_cancel(value)__ ||bool|Lets you prevent the popup from closing.|

The following example uses the __OnPopupClosing__ event to prevent the popup from closing if nothing is selected:

````ASPNET
	 <script type="text/javascript">
	     function ForceSelection(sender, eventArgs) {
	         var popup = eventArgs.get_popupControl();
	         if (popup == sender.get_calendar()) {
	             if (popup.get_selectedDates().length == 0) {
	                 alert("You must select a date!");
	                 eventArgs.set_cancel(true);
	             }
	         }
	         else if (!popup.getTime()) {
	             alert("You must select a time!");
	             eventArgs.set_cancel(true);
	         }
	     }
	</script>
	<telerik:RadDateTimePicker ID="RadDateTimePicker1" runat="server">
	    <Calendar DayNameFormat="FirstLetter"
	           UseColumnHeadersAsSelectors="False"
	           UseRowHeadersAsSelectors="False">
	    </Calendar>
	    <ClientEvents OnPopupClosing="ForceSelection" />
	</telerik:RadDateTimePicker>		
````



# See Also

 * [OnPopupOpening]({%slug calendar/client-side-programming/events/onpopupopening%})

 * [OnClientTimeSelected]({%slug calendar/client-side-programming/events/onclienttimeselected%})
