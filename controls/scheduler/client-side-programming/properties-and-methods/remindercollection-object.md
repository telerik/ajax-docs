---
title: ReminderCollection Object
page_title: ReminderCollection Object | UI for ASP.NET AJAX Documentation
description: ReminderCollection Object
slug: scheduler/client-side-programming/properties-and-methods/remindercollection-object
tags: remindercollection,object
published: True
position: 9
---

# ReminderCollection Object



The __Telerik.Web.UI.ReminderCollection__ client-side object represents a list of a Reminder objects.

The tables below lists the all public members of the __Telerik.Web.UI.ReminderCollection__ client-side object.

## Methods


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __add()__ |Telerik.Web.UI.Reminder|Number|Adds the Reminder to the collection.|
| __insert()__ |index(Number),Telerik.Web.UI.Reminder|None|Inserts the Reminder at the specified index in the collection.|
| __remove()__ |Telerik.Web.UI.Reminder|None|Removes the specified Reminder from the collection|
| __removeAt()__ |index (Number)|None|Removes the Reminder at the specified index in the collection.|
| __indexOf()__ |Telerik.Web.UI.Reminder|Number|Returns the index of the Reminder in the collection, -1 if not found|
| __clear()__ |None|None|Clears the collection|
| __get_count()__ |None|Number|Gets the total number of Reminders in the collection|
| __getReminder()__ |index (Number)|Telerik.Web.UI.Reminder|Returns the reminder at the specified index in the collection|
| __findByID()__ |id (String)|Telerik.Web.UI.Reminder|Returns the reminder with the specified ID, null if not found|

# See Also

 * [Reminder Object]({%slug scheduler/client-side-programming/properties-and-methods/reminder-object%})
