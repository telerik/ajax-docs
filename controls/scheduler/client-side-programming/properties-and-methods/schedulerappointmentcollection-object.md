---
title: SchedulerAppointmentCollection Object
page_title: SchedulerAppointmentCollection Object - RadScheduler
description: Check our Web Forms article about SchedulerAppointmentCollection Object.
slug: scheduler/client-side-programming/properties-and-methods/schedulerappointmentcollection-object
tags: schedulerappointmentcollection,object
published: True
position: 3
---

# SchedulerAppointmentCollection Object



The SchedulerAppointmentCollection client-side object represents a list of Appointments available in the Scheduler.

The tables below lists all public properties and the most important methods of the SchedulerAppointmentCollection client-side object.


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_count()** |None|Int|Gets the number of Appointments in the collection.|
| **add()** |Appointment|None|Adds the specified Appointment to the collection.|
| **clear()** |None|None|Clears the collection of all Appointments in it.|
| **findByID()** |Int|Appointment|Gets the Appointment with the specified ID in the collection. Returns **null** ifsuch an Appointment does not exist in the collection **.** |
| **findByResource()** |Resource|Appointment|Gets the Appointment with the specified Resource in the collection. Returns **null** if such an Appointmentdoes not exist in the collection **.** |
| **getAppointment()** |Int|Appointment|Gets the Appointment at the specified index in the collection.|
| **getAppointmentsInRange()** |Date (start Date), Date (end Date)|SchedulerAppointmentCollection|Gets a list of all Appointments in the specified range.|
| **getAppointmentsStartingInRange()** |Date (start Date), Date (end Date)|SchedulerAppointmentCollection|Gets a list of all Appointments which start date is in the specified range.|
| **indexOf()** |Appointment|Int|Gets the index of the specified Appointment in the collection. Returns **-1** if the Appointment is not in the collection.|
| **insert()** |Int (index), Appointment|None|Inserts the specified Appointment at the specified index in the collection.|
| **remove()** |Appointment|None|Removes the specified Appointment from the collection.|
| **removeAt()** |Int|None|Removes the Appointment at the specified index from the collection.|

# See Also

 * [SchedulerAppointment Object]({%slug scheduler/client-side-programming/properties-and-methods/schedulerappointment-object%})

 * [Overview]({%slug scheduler/client-side-programming/events/overview%})
