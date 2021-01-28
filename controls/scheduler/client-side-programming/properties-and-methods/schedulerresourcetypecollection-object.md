---
title: SchedulerResourceTypeCollection Object
page_title: SchedulerResourceTypeCollection Object - RadScheduler
description: Check our Web Forms article about SchedulerResourceTypeCollection Object.
slug: scheduler/client-side-programming/properties-and-methods/schedulerresourcetypecollection-object
tags: schedulerresourcetypecollection,object
published: True
position: 5
---

# SchedulerResourceTypeCollection Object



The **SchedulerResourceTypeCollection** client-side object represents a list of **ResourcesTypes** defined in the Scheduler.

The tables below lists the most important methods of the **SchedulerResourceTypeCollection** client-side object.


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_count()** |None|Int|Gets the number of ResourcesType in the collection.|
| **add()** |ResourceType|None|Adds the specified ResourceType to the collection.|
| **clear()** |None|None|Clears the collection of all ResourcesType in it.|
| **forEach()** |function|ResourceTypeCollection|Gets the collection of all ResourcesType. See **Example 1**. |
| **getResourceType()** |Int|ResourceType|Gets the ResourceType at the specified index in the collection.|
| **getResourcesTypeByName()** |String|ResourceType|Gets a list of all ResourcesTypes of the specified type.|
| **insert()** |Int (index), ResourceType|None|Inserts the specified ResourceType at the specified index in the collection.|
| **remove()** |ResourceType|None|Removes the specified ResourceType (if it exists) from the collection.|
| **removeAt()** |Int|None|Removes the ResourceType at the specified index from the collection.|



>caption Example 1: Display all resource types
````JavaScript
	     
function clientFormCreated(scheduler, args) 
{
	var mode = args.get_mode();
	if (mode == Telerik.Web.UI.SchedulerFormMode.AdvancedInsert ||
		mode == Telerik.Web.UI.SchedulerFormMode.AdvancedEdit) {
		//Alerts all resource types on AdvancedInsert/Edit Form created.
		var a = new Telerik.Web.UI.ResourceType();
		a.set_name("New ResourceType");
		scheduler.get_resourceTypes().add(a);
		scheduler.get_resourceTypes().forEach(function (type) {
			alert(type.get_name());
		});
	}
}
				
````



# See Also

 * [SchedulerResource Object]({%slug scheduler/client-side-programming/properties-and-methods/schedulerresource-object%})

 * [Overview]({%slug scheduler/client-side-programming/events/overview%})
