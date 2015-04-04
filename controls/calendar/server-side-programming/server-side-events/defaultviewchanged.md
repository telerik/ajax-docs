---
title: DefaultViewChanged
page_title: DefaultViewChanged | UI for ASP.NET AJAX Documentation
description: DefaultViewChanged
slug: calendar/server-side-programming/server-side-events/defaultviewchanged
tags: defaultviewchanged
published: True
position: 4
---

# DefaultViewChanged



## 

The __RadCalendar__control provides the __DefaultViewChanged__server event,which is raised when the __AutoPostBack__ property is set to __true__, and the user changes the currently visible view using the navigation controls in the title bar.

The __DefaultViewChanged__event handler receives two arguments:

1. The __RadCalendar__control whose view was just changed. This argument is of type object, but can be cast to the __RadCalendar__ type.

1. A __DefaultViewChangedEventArgs__ object. This object has the following two properties:

* __OldView__ is the CalendarView object for the view that was current before the change.

* __NewView__ is the CalendarView object for the current view after the change.

Use the __DefaultViewChanged__event handler to respond to changes in the dates the calendar displays:

>tabbedCode

````C#
	
	    protected void RadCalendar1_DefaultViewChanged(object sender, DefaultViewChangedEventArgs e)
	    {
	        if (e.OldView.ViewStartDate < e.NewView.ViewStartDate)
	            Label1.Text = e.OldView.TitleContent + " -> " + e.NewView.TitleContent;
	        else
	            Label1.Text = e.NewView.TitleContent + " <- " + e.OldView.TitleContent;
	    }
````
````VB.NET
	     
	    Protected Sub RadCalendar1_DefaultViewChanged(ByVal sender As Object, ByVal e As DefaultViewChangedEventArgs) Handles RadCalendar1.DefaultViewChanged
	        If e.OldView.ViewStartDate < e.NewView.ViewStartDate Then
	            Label1.Text = e.OldView.TitleContent + " -> " + e.NewView.TitleContent
	        Else
	            Label1.Text = e.NewView.TitleContent + " <- " + e.OldView.TitleContent
	        End If
	    End Sub
````
>end

# See Also

 * [Server-Side Events Basics]({%slug calendar/server-side-programming/server-side-events/server-side-events-basics%})

 * [OnCalendarViewChanging]({%slug calendar/client-side-programming/events/oncalendarviewchanging%})

 * [OnCalendarViewChanged]({%slug calendar/client-side-programming/events/oncalendarviewchanged%})
