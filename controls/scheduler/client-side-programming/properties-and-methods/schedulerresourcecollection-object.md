---
title: SchedulerResourceCollection Object
page_title: SchedulerResourceCollection Object | RadScheduler for ASP.NET AJAX Documentation
description: SchedulerResourceCollection Object
slug: scheduler/client-side-programming/properties-and-methods/schedulerresourcecollection-object
tags: schedulerresourcecollection,object
published: True
position: 4
---

# SchedulerResourceCollection Object



The SchedulerResourceCollection client-side object represents a list of Resources defined in the Scheduler.

The tables below lists the most important methods of the SchedulerResourceCollection client-side object.

>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_count()** |None|Int|Gets the number of Resources in the collection. See **Example 1**. |
| **add()** |Resource|None|Adds the specified Resource to the collection. See **Example 1**. |
| **clear()** |None|None|Clears the collection of all Resources in it.|
| **forEach()** |function|SchedulerResourceCollection|Gets the collection of all Resources. See **Example 1**. |
| **getResource()** |Int|Resource|Gets the Resource at the specified index in the collection.|
| **getResourceByType()** |String|Resource|Gets the Resource of a specified type in the collection. See **Example 1**. |
| **getResourcesByType()** |String|SchedulerResourceCollection|Gets a list of all Resources of the specified type.|
| **getResourceByTypeAndKey()** |String, String|Resource|Gets a Resources of the specified type and key. See **Example 1**. |
| **insert()** |Int (index), Resource|None|Inserts the specified Resource at the specified index in the collection.|
| **remove()** |Resource|None|Removes the specified Resource (if it exists) from the collection.|
| **removeAt()** |Int|None|Removes the Resource at the specified index from the collection.|



>caption Example 1: Update the appointment's resources.
````JavaScript
function OnClientAppointmentClick(sender, args) {
	var appointment = args.get_appointment();
	var resources = appointment.get_resources();
	resources.forEach(function (res) {
		alert(res.get_type());
		alert(res.get_text());
	});
	if (resources.get_count() != 0) {
		resources.getResourceByType("Room").set_key("2");
		sender.updateAppointment(appointment, false);
	}
	else {
		appointment.get_resources().clear();
		//Find the resource corresponding to the clicked item
		var room = sender.get_resources().getResourceByTypeAndKey("Room", "2");
		//Add it to the appointment resources collection
		appointment.get_resources().add(room);
		sender.updateAppointment(appointment, false);
	}
} 
````



# See Also

 * [SchedulerResource Object]({%slug scheduler/client-side-programming/properties-and-methods/schedulerresource-object%})

 * [Overview]({%slug scheduler/client-side-programming/events/overview%})
