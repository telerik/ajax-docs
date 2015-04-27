---
title: ReminderCollection Object
page_title: ReminderCollection Object | RadScheduler for ASP.NET AJAX Documentation
description: ReminderCollection Object
slug: scheduler/client-side-programming/properties-and-methods/remindercollection-object
tags: remindercollection,object
published: True
position: 9
---

# ReminderCollection Object



The **Telerik.Web.UI.ReminderCollection** client-side object represents a list of a Reminder objects.

The tables below lists the all public members of the **Telerik.Web.UI.ReminderCollection** client-side object.

## Methods


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **add()** |Telerik.Web.UI.Reminder|Number|Adds the Reminder to the collection.|
| **insert()** |index(Number),Telerik.Web.UI.Reminder|None|Inserts the Reminder at the specified index in the collection.|
| **remove()** |Telerik.Web.UI.Reminder|None|Removes the specified Reminder from the collection|
| **removeAt()** |index (Number)|None|Removes the Reminder at the specified index in the collection.|
| **indexOf()** |Telerik.Web.UI.Reminder|Number|Returns the index of the Reminder in the collection, -1 if not found|
| **clear()** |None|None|Clears the collection|
| **get_count()** |None|Number|Gets the total number of Reminders in the collection|
| **getReminder()** |index (Number)|Telerik.Web.UI.Reminder|Returns the reminder at the specified index in the collection|
| **findByID()** |id (String)|Telerik.Web.UI.Reminder|Returns the reminder with the specified ID, null if not found|

# See Also

 * [Reminder Object]({%slug scheduler/client-side-programming/properties-and-methods/reminder-object%})
