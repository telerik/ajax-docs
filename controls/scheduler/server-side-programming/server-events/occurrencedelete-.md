---
title: OccurrenceDelete 
page_title: OccurrenceDelete  | RadScheduler for ASP.NET AJAX Documentation
description: OccurrenceDelete 
slug: scheduler/server-side-programming/server-events/occurrencedelete-
tags: occurrencedelete,
published: True
position: 17
---

# OccurrenceDelete 



## 

The **OccurenceDelete** event occurs when a single occurrence is deleted,but no exception is created in its place.

**OccurenceDelete** has two parameters:

* **sender** is the scheduler control.

* **e** is an object of type **OccurrenceDeleteEventArgs**. It has the following properties

* **Appointment** - the Master appointment;

* **OccurrenceAppointment** - the Occurrence that is about to be deleted;

* **Cancel** - if set to true, cancels the event;
