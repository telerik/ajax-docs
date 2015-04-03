---
title: OccurrenceDelete 
page_title: OccurrenceDelete  | UI for ASP.NET AJAX Documentation
description: OccurrenceDelete 
slug: scheduler/server-side-programming/server-events/occurrencedelete-
tags: occurrencedelete,
published: True
position: 17
---

# OccurrenceDelete 



## 

The __OccurenceDelete__ event occurs when a single occurrence is deleted,but no exception is created in its place.

__OccurenceDelete__ has two parameters:

* __sender__ is the scheduler control.

* __e__ is an object of type __OccurrenceDeleteEventArgs__.It has the following properties

* __Appointment -__the Master appointment;

* __OccurrenceAppointment -__the Occurrence that is about to be deleted;

* __Cancel -__if set to true, cancels the event;
