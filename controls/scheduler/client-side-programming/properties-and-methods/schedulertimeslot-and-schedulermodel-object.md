---
title: SchedulerTimeSlot and SchedulerModel Object
page_title: SchedulerTimeSlot and SchedulerModel Object | UI for ASP.NET AJAX Documentation
description: SchedulerTimeSlot and SchedulerModel Object
slug: scheduler/client-side-programming/properties-and-methods/schedulertimeslot-and-schedulermodel-object
tags: schedulertimeslot,and,schedulermodel,object
published: True
position: 7
---

# SchedulerTimeSlot and SchedulerModel Object



Each of the Views - __Week__, __Month__ and __Timeline -__ and its specific Time Slot are represented by a Model and a TimeSlot client-side object respectively. All Model objects inherit from one common interface - __ISchedulerModel__, whereas all TimeSlot objects inherit from another common interface - __ISchedulerTimeSlot__.

The tables below list all public properties and methods of the both client-side interfaces which all specific Model or TimeSlot objects have.

## ISchedulerTimeSlot Interface Properties


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_index()__ |None|String|Gets the index of the Time Slot.|
| __get_isAllDay()__ |None|Boolean|Gets a value indicating whether the Time Slot is an All-Day Time Slot.|
| __get_startTime()__ |None|Date|Gets the full start time of the Time Slot.|
| __get_endTime()__ |None|Date|Gets the full end time of the Time Slot.|
| __get_resource()__ |None|SchedulerResource / null|If the current View is grouped by Resource, returns the Resource object. Otherwise, returns __null__ .|
| __set_selected()__ |Boolean|None|Selects/Un-selects the Time Slot|
| __get_selected()__ |None|Boolean|Gets a value indicating whether the Time Slot is selected|

````JavaScript
	     
	function clientTimeSlotClick(sender, eventArgs)
	{
	var resource = null;
	var timeSlot = eventArgs.get_targetSlot();
	if (timeSlot.get_resource)
	 resource = timeSlot.get_resource();
	}
				
````



## ISchedulerModel Interface Methods


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __getTimeSlotFromDomElement()__ |DomElement|ISchedulerTimeSlot|Gets the appropriate Time Slot for the current view.|
| __getTimeSlotForAppointment()__ |appointment|ISchedulerTimeSlot|Gets the appropriate Time Slot for the appointment in the current view.|
| __get_visibleRangeStart()__ ||Date|Gets the first visible date of the current view.|
| __get_visibleRangeEnd()__ ||Date|Gets the last visible date of the current view.|



# See Also

 * [Overview]({%slug scheduler/client-side-programming/events/overview%})

 * [SchedulerResource Object]({%slug scheduler/client-side-programming/properties-and-methods/schedulerresource-object%})
