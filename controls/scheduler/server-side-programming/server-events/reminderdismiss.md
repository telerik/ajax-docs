---
title: ReminderDismiss
page_title: ReminderDismiss - RadScheduler
description: Check our Web Forms article about ReminderDismiss.
slug: scheduler/server-side-programming/server-events/reminderdismiss
tags: reminderdismiss
published: True
position: 23
---

# ReminderDismiss




The ReminderDismiss event occurs when a reminder has been dismissed.

The event arguments contain:

* **Reminder** - The dismissed reminder

* **Appointment** - The original appointment with non-modified reminders

* **ModifiedAppointment** - The modified appointment with updated reminders

The operation can be cancelled by setting the **Cancel** property of the event arguments to true.





````C#
	
protected void RadScheduler1_ReminderDismiss(object sender, ReminderDismissEventArgs e)
{
	e.Cancel = true;
}
	
````
````VB
	
Protected Sub RadScheduler1_ReminderDismiss(ByVal sender As Object, ByVal e As ReminderDismissEventArgs)
	e.Cancel = True
End Sub
	
````

