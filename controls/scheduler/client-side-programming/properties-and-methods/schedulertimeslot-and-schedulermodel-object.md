---
title: SchedulerTimeSlot and SchedulerModel Object
page_title: SchedulerTimeSlot and SchedulerModel Object - RadScheduler
description: Check our Web Forms article about SchedulerTimeSlot and SchedulerModel Object.
slug: scheduler/client-side-programming/properties-and-methods/schedulertimeslot-and-schedulermodel-object
tags: schedulertimeslot,and,schedulermodel,object
published: True
position: 7
---

# SchedulerTimeSlot and SchedulerModel Object



Each of the Views - **Week**, **Month** and **Timeline -** and its specific Time Slot are represented by a Model and a TimeSlot client-side object respectively. All Model objects inherit from one common interface - **ISchedulerModel**, whereas all TimeSlot objects inherit from another common interface - **ISchedulerTimeSlot**.

The tables below list all public properties and methods of the both client-side interfaces which all specific Model or TimeSlot objects have.

## ISchedulerTimeSlot Interface Properties


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_index()** |None|String|Gets the index of the Time Slot.|
| **get_isAllDay()** |None|Boolean|Gets a value indicating whether the Time Slot is an All-Day Time Slot.|
| **get_startTime()** |None|Date|Gets the full start time of the Time Slot.|
| **get_endTime()** |None|Date|Gets the full end time of the Time Slot.|
| **get_resource()** |None|SchedulerResource / null|If the current View is grouped by Resource, returns the Resource object. Otherwise, returns **null**. See **Example 1**. |
| **set_selected()** |Boolean|None|Selects/Un-selects the Time Slot|
| **get_selected()** |None|Boolean|Gets a value indicating whether the Time Slot is selected|



>caption Example 1: Get the Time Slot's resource. 
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
| **getTimeSlotFromDomElement()** |DomElement|ISchedulerTimeSlot|Gets the appropriate Time Slot for the current view.|
| **getTimeSlotForAppointment()** |appointment|ISchedulerTimeSlot|Gets the appropriate Time Slot for the appointment in the current view.|
| **get_visibleRangeStart()** ||Date|Gets the first visible date of the current view.|
| **get_visibleRangeEnd()** ||Date|Gets the last visible date of the current view.|



# See Also

 * [Overview]({%slug scheduler/client-side-programming/events/overview%})

 * [SchedulerResource Object]({%slug scheduler/client-side-programming/properties-and-methods/schedulerresource-object%})
