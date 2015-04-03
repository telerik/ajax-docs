---
title: Reading the Recurrence Rule
page_title: Reading the Recurrence Rule | UI for ASP.NET AJAX Documentation
description: Reading the Recurrence Rule
slug: scheduler/recurrence-editor/server-side-programming/reading-the-recurrence-rule
tags: reading,the,recurrence,rule
published: True
position: 0
---

# Reading the Recurrence Rule



## 

The recurrence rule is incomplete without the start and end date of the first occurrence.

You need to set them to the __StartDate__ and __EndDate__ properties before retrieving the recurrence rule.

The following example builds the recurrence rule by reading the Start and End date from two __RadDatePickers__ on the page:

![Save Recurrence](images/scheduler_saverecurrence.png)

>tabbedCode

````C#
	     
	
	protected void SaveButton_Click(object sender, EventArgs e)
	{    
	    RecurrenceEditor1.StartDate = StartDate.SelectedDate.Value;    
	    RecurrenceEditor1.EndDate = EndDate.SelectedDate.Value;
	    // Read the recurrence rule    RecurrenceRule rrule = RecurrenceEditor1.RecurrenceRule;
	    // Or directly as string    string rruleText = RecurrenceEditor1.RecurrenceRuleText;
	}
				
````



````VB.NET
	     
	
	    Protected Sub SaveButton_Click(ByVal sender As Object, ByVal e As EventArgs)
	        RecurrenceEditor1.StartDate = StartDate.SelectedDate.Value
	        RecurrenceEditor1.EndDate = EndDate.SelectedDate.Value
	        ' Read the recurrence rule Dim rrule As RecurrenceRule = RecurrenceEditor1.RecurrenceRule
	        ' Or directly as string Dim rruleText As String = RecurrenceEditor1.RecurrenceRuleTextEnd Sub
	
````


>end
