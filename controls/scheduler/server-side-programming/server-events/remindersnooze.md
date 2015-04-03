---
title: ReminderSnooze
page_title: ReminderSnooze | UI for ASP.NET AJAX Documentation
description: ReminderSnooze
slug: scheduler/server-side-programming/server-events/remindersnooze
tags: remindersnooze
published: True
position: 22
---

# ReminderSnooze



## 

The ReminderSnooze event occurs when a reminder has been snoozed.

The event arguments contain:

* __Reminder__ - The snoozed reminder with updated Trigger value

* __Appointment__ - The original appointment with non-modified reminders

* __ModifiedAppointment__ - The modified appointment with updated reminders

The operation can be cancelled by setting the __Cancel__ property of the event arguments to true.



>tabbedCode

````C#
	
	    protected void RadScheduler1_ReminderSnooze(object sender, ReminderSnoozeEventArgs e) 
	    { 
	        e.Cancel = true; 
	    }
	
````



````VB.NET
	
	    Protected Sub RadScheduler1_ReminderSnooze(ByVal sender As Object, ByVal e As ReminderSnoozeEventArgs)
	        e.Cancel = True
	    End Sub
	
````


>end
