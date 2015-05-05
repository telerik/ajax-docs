---
title: OnClientTimeSelected
page_title: OnClientTimeSelected | RadCalendar for ASP.NET AJAX Documentation
description: OnClientTimeSelected
slug: calendar/client-side-programming/events/onclienttimeselected
tags: onclienttimeselected
published: True
position: 15
---

# OnClientTimeSelected



## 

The **OnClientTimeSelected** client-side event handler is called when the user selects a time cell in the time view control.

>note The **OnClientTimeSelected** event is supported by: **RadTimeView** .
>


The event handler receives two arguments:

1. the [RadTimeView]({%slug calendar/client-side-programming/radtimeview-object%}) object that fired the event.

1. an event arguments object that exposes the following methods:OnClientTimeSelected event arguments object


| Name | Return Type | Arguments | Description |
| ------ | ------ | ------ | ------ |
| **get_oldTime()** |Date object||Returns the time before the user selected a new time value.|
| **get_newTime()** |Date object||Returns the newly selected time value.|

The following example uses the **OnClientTimeSelected** event to raise an alert:

````ASPNET
<telerik:RadTimePicker ID="RadTimePicker1" runat="server" >
    <TimeView OnClientTimeSelected="timeSelected">
    </TimeView>
</telerik:RadTimePicker>
````
````JavaScript
function timeSelected(sender, eventArgs) {
	var oldTime = eventArgs.get_oldTime();
	var newTime = eventArgs.get_newTime();
	var msg = "Time changed from ";
	if (oldTime) {
		msg = msg + oldTime.localeFormat("h:mm tt");
	}
	else {
		msg = msg + "nothing";
	}

	msg = msg + " to ";

	if (newTime) {
		msg = msg + newTime.localeFormat("h:mm tt");
	}
	else {
		msg = msg + "nothing";
	}

	alert(msg);
}
````



# See Also

 * [OnPopupClosing]({%slug calendar/client-side-programming/events/onpopupclosing%})

 * [OnPopupOpening]({%slug calendar/client-side-programming/events/onpopupopening%})
