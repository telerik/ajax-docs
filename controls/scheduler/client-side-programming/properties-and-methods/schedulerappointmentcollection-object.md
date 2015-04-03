---
title: SchedulerAppointmentCollection Object
page_title: SchedulerAppointmentCollection Object | UI for ASP.NET AJAX Documentation
description: SchedulerAppointmentCollection Object
slug: scheduler/client-side-programming/properties-and-methods/schedulerappointmentcollection-object
tags: schedulerappointmentcollection,object
published: True
position: 3
---

# SchedulerAppointmentCollection Object



The SchedulerAppointmentCollection client-side object represents a list of Appointments available in the Scheduler.

The tables below lists all public properties and the most important methods of the SchedulerAppointmentCollection client-side object.

## Properties


>caption  

| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_count()__ |None|Int|Gets the number of Appointments in the collection.|

## Methods




>caption  

| Name | Parameters | Return Value | Description |
| ------ | ------ | ------ | ------ |
| __add()__ |Appointment|None|Adds the specified Appointment to the collection.|
| __clear()__ |None|None|Clears the collection of all Appointments in it.|
| __findByID()__ |Int|Appointment|Gets the Appointment with the specified ID in the collection. Returns __null__ ifsuch an Appointment does not exist in the collection __.__ |
| __findByResource()__ |Resource|Appointment|Gets the Appointment with the specified Resource in the collection. Returns __null__ if such an Appointmentdoes not exist in the collection __.__ |
| __getAppointment()__ |Int|Appointment|Gets the Appointment at the specified index in the collection.|
| __getAppointmentsInRange()__ |Date (start Date), Date (end Date)|SchedulerAppointmentCollection|Gets a list of all Appointments in the specified range.|
| __getAppointmentsStartingInRange()__ |Date (start Date), Date (end Date)|SchedulerAppointmentCollection|Gets a list of all Appointments which start date is in the specified range.|
| __indexOf()__ |Appointment|Int|Gets the index of the specified Appointment in the collection. Returns __-1__ if the Appointment is not in the collection.|
| __insert()__ |Int (index), Appointment|None|Inserts the specified Appointment at the specified index in the collection.|
| __remove()__ |Appointment|None|Removes the specified Appointment from the collection.|
| __removeAt()__ |Int|None|Removes the Appointment at the specified index from the collection.|

# See Also

 * [SchedulerAppointment Object]({%slug scheduler/client-side-programming/properties-and-methods/schedulerappointment-object%})

 * [Overview]({%slug scheduler/client-side-programming/events/overview%})
