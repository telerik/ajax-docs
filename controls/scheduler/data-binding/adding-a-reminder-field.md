---
title: Adding a Reminder Field
page_title: Adding a Reminder Field | RadScheduler for ASP.NET AJAX Documentation
description: Adding a Reminder Field
slug: scheduler/data-binding/adding-a-reminder-field
tags: adding,a,reminder,field
published: True
position: 4
---

# Adding a Reminder Field



## 

Starting with the 2010 Q2 release RadScheduler offers integrated support for appointment reminders.

In order to enable this support you need to create an additional column in your data table of type nvarchar(256) or compatible. Set the **DataReminderField**property to the name of the column.

You should be able set the appointment reminder from the advanced form afterwards.

![Reminders](images/scheduler_advancedform_reminder.png)
