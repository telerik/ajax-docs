---
title: SchedulerResourceCollection Object
page_title: SchedulerResourceCollection Object | UI for ASP.NET AJAX Documentation
description: SchedulerResourceCollection Object
slug: scheduler/client-side-programming/properties-and-methods/schedulerresourcecollection-object
tags: schedulerresourcecollection,object
published: True
position: 4
---

# SchedulerResourceCollection Object



The SchedulerResourceCollection client-side object represents a list of Resources defined in the Scheduler.

The tables below lists all public properties and the most important methods of the SchedulerResourceCollection client-side object.

## Properties


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_count()__ |None|Int|Gets the number of Resources in the collection.|

## Methods


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __add()__ |Resource|None|Adds the specified Resource to the collection.|
| __clear()__ |None|None|Clears the collection of all Resources in it.|
| __forEach()__ |function|SchedulerResourceCollection|Gets the collection of all Resources.|
| __getResource()__ |Int|Resource|Gets the Resource at the specified index in the collection.|
| __getResourceByType()__ |String|Resource|Gets the Resource of a specified type in the collection.|
| __getResourcesByType()__ |String|SchedulerResourceCollection|Gets a list of all Resources of the specified type.|
| __getResourceByTypeAndKey()__ |String, String|Resource|Gets a Resources of the specified type and key.|
| __insert()__ |Int (index), Resource|None|Inserts the specified Resource at the specified index in the collection.|
| __remove()__ |Resource|None|Removes the specified Resource (if it exists) from the collection.|
| __removeAt()__ |Int|None|Removes the Resource at the specified index from the collection.|

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
