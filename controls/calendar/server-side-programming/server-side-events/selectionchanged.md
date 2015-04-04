---
title: SelectionChanged
page_title: SelectionChanged | UI for ASP.NET AJAX Documentation
description: SelectionChanged
slug: calendar/server-side-programming/server-side-events/selectionchanged
tags: selectionchanged
published: True
position: 3
---

# SelectionChanged



## 

The __RadCalendar__control provides the __SelectionChanged__server event,which is raised when the __AutoPostBack__ property is set to __true__, and the user changes the current selection by selecting or unselecting a date in the calendar.

The __SelectionChanged__event handler receives two arguments:

1. The __RadCalendar__control whose selection was just changed. This argument is of type object, but can be cast to the __RadCalendar__ type.

1. A __SelectedDatesEventArgs__ object. This object has a __SelectedDates__ property which is a collection that lists all the dates in the current selection.

Use the __SelectionChanged__event handler to respond to changes in the calendar's selection:

>tabbedCode

````C#
	
	    protected void RadCalendar1_SelectionChanged(object sender, SelectedDatesEventArgs e)
	    {
	        Label1.Text = "Selected dates are:<br />";
	        for (int i = 0; i < e.SelectedDates.Count; i++)
	        {
	            Label1.Text += (e.SelectedDates[i]).Date.ToString() + ",<br />";
	        }
	    }
````
````VB.NET
	
	    Protected Sub RadCalendar1_SelectionChanged(ByVal sender As Object, ByVal e As SelectedDatesEventArgs) Handles RadCalendar1.SelectionChanged
	        Label1.Text = "Selected dates are:<br />"
	        Dim i As Integer = 0
	        While i < e.SelectedDates.Count
	            Label1.Text += (e.SelectedDates(i)).[Date].ToString() + ",<br />"
	            System.Math.Max(System.Threading.Interlocked.Increment(i), i - 1)
	        End While
	    End Sub
````
>end

# See Also

 * [Server-Side Events Basics]({%slug calendar/server-side-programming/server-side-events/server-side-events-basics%})

 * [OnDateSelecting]({%slug calendar/client-side-programming/events/ondateselecting%})

 * [OnDateSelected]({%slug calendar/client-side-programming/events/ondateselected%})
