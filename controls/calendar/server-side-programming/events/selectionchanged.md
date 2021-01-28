---
title: SelectionChanged
page_title: SelectionChanged - RadCalendar
description: Check our Web Forms article about SelectionChanged.
slug: calendar/server-side-programming/events/selectionchanged
tags: selectionchanged
published: True
position: 3
---

# SelectionChanged



The **RadCalendar** control provides the **SelectionChanged** server event, which is raised when the **AutoPostBack** property is set to **true**, and the user changes the current selection by selecting or unselecting a date in the calendar.

The **SelectionChanged** event handler receives two arguments:

1. The **RadCalendar** control whose selection was just changed. This argument is of type object, but can be cast to the **RadCalendar** type.

2. A **SelectedDatesEventArgs** object. This object has a **SelectedDates** property which is a collection that lists all the dates in the current selection.

Use the **SelectionChanged** event handler to respond to changes in the calendar's selection:



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


# See Also

 * [Server-Side Events Overview]({%slug calendar/server-side-programming/events/overview%})

 * [OnDateSelecting]({%slug calendar/client-side-programming/events/ondateselecting%})

 * [OnDateSelected]({%slug calendar/client-side-programming/events/ondateselected%})


