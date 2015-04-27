---
title: Populating the Recurrence Rule
page_title: Populating the Recurrence Rule | RadScheduler for ASP.NET AJAX Documentation
description: Populating the Recurrence Rule
slug: scheduler/recurrence-editor/client-side-programming/populating-the-recurrence-rule
tags: populating,the,recurrence,rule
published: True
position: 1
---

# Populating the Recurrence Rule



## 

The recurrence editor can be populated from a **RecurrenceRule** object

````JavaScript
	    
	    var rrule = Telerik.Web.UI.RecurrenceRule.parse(appointment.get_recurrenceRule());
	    var editor = $find("RecurrenceEditor1");
	    editor.set_recurrenceRule(rrule);  
	
````


