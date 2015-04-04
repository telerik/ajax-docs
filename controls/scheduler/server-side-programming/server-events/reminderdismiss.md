---
title: ReminderDismiss
page_title: ReminderDismiss | UI for ASP.NET AJAX Documentation
description: ReminderDismiss
slug: scheduler/server-side-programming/server-events/reminderdismiss
tags: reminderdismiss
published: True
position: 23
---

# ReminderDismiss



## 



The ReminderDismiss event occurs when a reminder has been dismissed.

The event arguments contain:

* __Reminder__ - The dismissed reminder

* __Appointment__ - The original appointment with non-modified reminders

* __ModifiedAppointment__ - The modified appointment with updated reminders

The operation can be cancelled by setting the __Cancel__ property of the event arguments to true.



>tabbedCode

````C#
	
	    protected void RadScheduler1_ReminderDismiss(object sender, ReminderDismissEventArgs e)
	    {
	        e.Cancel = true;
	    }
	
````
````VB.NET
	
	    Protected Sub RadScheduler1_ReminderDismiss(ByVal sender As Object, ByVal e As ReminderDismissEventArgs)
	        e.Cancel = True
	    End Sub
	
````
>end
