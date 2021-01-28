---
title: Reminder Object
page_title: Reminder Object - RadScheduler
description: Check our Web Forms article about Reminder Object.
slug: scheduler/client-side-programming/properties-and-methods/reminder-object
tags: reminder,object
published: True
position: 8
---

# Reminder Object



The **Telerik.Web.UI.Reminder** client-side object represents a single instance of a Reminder defined in the RadScheduler.

The tables below lists the all public properties of the **Telerik.Web.UI.Reminder** client-side object.

## Methods


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_trigger()|None|Number|Gets the Reminder trigger value in minutes.|
|set_trigger()|value (Number)|None|Sets the Reminder trigger value in minutes.|
|get_id()|None|Number|Gets the ID of the Reminder.|
|set_id()|id (Number)|None|Sets the ID of the Reminder.|
|get_owner()|None|[Telerik.Web.UI.SchedulerAppointment]({%slug scheduler/client-side-programming/properties-and-methods/schedulerappointment-object%})|Gets the appointment that the Reminder is associated with.|
|get_triggerDate()|None|Date|Gets the date on which the reminder should be triggered.|
|get_attributes()|None|[Telerik.Web.UI.SchedulerAttributeCollection]({%slug scheduler/client-side-programming/properties-and-methods/schedulerattributecollection-object%})|Gets a collection of the Attributes associated to the current Reminder.|
|clone()|None|Telerik.Web.UI.Reminder|Returns a copy of this Reminder.|

# See Also

 * [Overview]({%slug scheduler/client-side-programming/events/overview%})

 * [ReminderCollection Object]({%slug scheduler/client-side-programming/properties-and-methods/remindercollection-object%})
