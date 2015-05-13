---
title: Reading the Recurrence Rule
page_title: Reading the Recurrence Rule | RadScheduler for ASP.NET AJAX Documentation
description: Reading the Recurrence Rule
slug: scheduler/recurrence-editor/client-side-programming/reading-the-recurrence-rule
tags: reading,the,recurrence,rule
published: True
position: 0
---

# Reading the Recurrence Rule



## 

The recurrence rule is incomplete without the start and end date of the first occurrence.

You need to set them to the **startDate** and **endDate** properties before retrieving the recurrence rule.

The following example builds the recurrence rule by reading the Start and End date from two **RadDatePickers** on the page:



````JavaScript
	     
var editor = $find("RecurrenceEditor1");
var startDate = $find("StartDate").get_selectedDate();
var endDate = $find("EndDate").get_selectedDate();
editor.set_startDate(startDate);editor.set_endDate(endDate);       
var rrule = editor.get_recurrenceRule();

				
````




