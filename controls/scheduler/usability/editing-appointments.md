---
title: Editing Appointments
page_title: Editing Appointments | RadScheduler for ASP.NET AJAX Documentation
description: Editing Appointments
slug: scheduler/usability/editing-appointments
tags: editing,appointments
published: True
position: 3
---

# Editing Appointments



To edit an appointment once it has been created:

1. Double-click an appointment.

1. If the appointment is recurring, the "Editing a recurring appointment" pop-up appears, where you can specifywhether you want to edit only the selected occurrence of the appointment, or edit the entire series:![Edit Series](images/scheduler_editseries.png)Choose which you want to edit, and press OK. You can also press Cancel to cancel the edit entirely.

1. An editor appears where you can edit the appointment:

* If the **StartEditingInAdvancedForm** property is **True** (the default),the edit form appears:![Edit Appointment](images/scheduler_editappointment.png)You can specify reminder for each appointment. Make sure that **“Reminders-Enabled”** property of the RadScheduler is set to **“True”**. That way you can specify the time for the reminder from the dropdown:![RadScheduler Edit Appointment](images/scheduler_editappointment1.png)When the appointment is saved with reminder - the reminder icon ( ![RadScheduler Reminder](images/scheduler_reminder.png) ) appears.

* If the **StartEditingInAdvancedForm** property is **False**, the in-line editor appears:![Inline Edit](images/scheduler_inlineedit.png)

1. Make the desired changes to the appointment and click **"Save"** to preserve the changes or Cancel to cancel them.

## Exceptions to recurring appointments

When you edit a single instance of a recurring appointment, you create an exception. On exceptions, the recurring appointment icon ( ![Recurrence Symbol](images/scheduler_recurrencesymbol.png) ) is replaced by an exception symbol: ![Exception Icon](images/scheduler_exceptionicon.png) . This indicates that the appointment is still part of a recurring sequence, but that it differs in some details from the master recurring appointment.Exceptions can reflect any change to the appointment including its subject, time, duration, or any custom resources or attributes. The first appointment in the recurring series is called “Master”. You can remove all exceptions of the master appointment bydouble-clicking on the master and in the opened advanced form select the “ **reset exceptions**” link: ![Recurrence Exceptions](images/scheduler_recurrenceexceptions.png)

# See Also

 * [Adding Appointments]({%slug scheduler/usability/adding-appointments%})

 * [Resizing Moving and Deleting Appointments]({%slug scheduler/usability/resizing-moving-and-deleting-appointments%})

 * [OnClientAppointmentEditing]({%slug scheduler/client-side-programming/events/onclientappointmentediting%})

 * [AppointmentUpdate]({%slug scheduler/server-side-programming/server-events/appointmentupdate%})

 * [AppointmentCancelingEdit]({%slug scheduler/server-side-programming/server-events/appointmentcancelingedit%})

 * [Working with Recurring Appointments]({%slug scheduler/server-side-programming/working-with-recurring-appointments%})
