---
title: Server Events Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: scheduler/server-side-programming/server-events/overview
tags: overview
published: True
position: 0
---

# Server Events Overview



## 

__RadScheduler__ supports a number of server-side events that let you customize its behavior. These events are listed below:

* [AppointmentClick]({%slug scheduler/server-side-programming/server-events/appointmentclick%}) - occurs when the user clicks an appointment.

* [AppointmentCommand]({%slug scheduler/server-side-programming/server-events/appointmentcommand%}) - occurs when the user clicks a button on the appointment template.

* [AppointmentInsert]({%slug scheduler/server-side-programming/server-events/appointmentinsert%}) - occurs just before the scheduler calls the data source to insert an appointment.

* [AppointmentUpdate]({%slug scheduler/server-side-programming/server-events/appointmentupdate%}) - occurs just before the scheduler calls the data source to update an appointment.

* [AppointmentDelete]({%slug scheduler/server-side-programming/server-events/appointmentdelete%}) - occurs just before the scheduler calls the data source to delete an appointment.

* [AppointmentCreated]({%slug scheduler/server-side-programming/server-events/appointmentcreated%}) - occurs when an appointment template is instantiated.

* [AppointmentDataBound]({%slug scheduler/server-side-programming/server-events/appointmentdatabound%}) - occurs when an appointment has been added to the Appointments collection from the data source.

* [AppointmentCancelingEdit]({%slug scheduler/server-side-programming/server-events/appointmentcancelingedit%}) - occurs when the user cancels from the in-line editor or the advanced edit form.

* [NavigationCommand]({%slug scheduler/server-side-programming/server-events/navigationcommand%}) - occurs when the user performs a navigation command.

* [NavigationComplete]({%slug scheduler/server-side-programming/server-events/navigationcomplete%}) - occurs when a navigation action has been completed.

* [FormCreating]({%slug scheduler/server-side-programming/server-events/formcreating%}) - occurs when an edit form or the in-line editor is about to be created.

* [FormCreated]({%slug scheduler/server-side-programming/server-events/formcreated%}) - occurs when an edit form or the in-line editor has just been created.

* [RecurrenceExceptionCreated]({%slug scheduler/server-side-programming/server-events/recurrenceexceptioncreated%}) - occurs when the user creates an exception in a recurrent series.

* [TimeSlotCreated]({%slug scheduler/server-side-programming/server-events/timeslotcreated%}) - occurs when a time slot is created.

* [ReminderSnooze]({%slug scheduler/server-side-programming/server-events/remindersnooze%}) - occurs when a reminder has been snoozed.

* [ReminderDismiss]({%slug scheduler/server-side-programming/server-events/reminderdismiss%}) - occurs when a reminder has been dismissed.

* [ResourceHeaderCreated]({%slug scheduler/server-side-programming/server-events/resourceheadercreated%}) - complements the Resource Header templates

# See Also

 * [Overview]({%slug scheduler/client-side-programming/events/overview%})
