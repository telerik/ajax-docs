---
title: DayRender
page_title: DayRender | RadCalendar for ASP.NET AJAX Documentation
description: DayRender
slug: calendar/server-side-programming/events/dayrender
tags: dayrender
published: True
position: 1
---

# DayRender



The **RadCalendar** control provides the **DayRender** server event, which is raised after all the cells of the day matrix have been generated and just before a cell is rendered to the client. It is the last place where changes to the already constructed calendar cells can be made.

The **DayRender** event handler receives two arguments:

1. The **RadCalendar** control whose cell is about to be rendered. This argument is of type object, but can be cast to the **RadCalendar** type.

2. A **DayRenderEventArgs** object. This object carries the following three arguments:

	* **Cell** is the control for the cell that is about to be rendered. The event handler can make changes to this control to change the way the cell is rendered.

	* **Day** is the **RadCalendarDay** object that represents the day that the cell represents. Use this object to obtain information about the date the cell represents, and about its state (**IsDisabled**, **IsToday**, **IsSelected**, and so on).

	* **View** is the **MonthView** object that represents the month in which the cell occurs. Use this to obtain information about the context in which the cell occurs.

Use the **DayRender** event handler to make changes to the cell before it is rendered. For example, the following event handler changes the text of dates in the non-current month, and changes the appearance of today's date:



````C#
protected void RadCalendar1_DayRender(object sender, Telerik.Web.UI.Calendar.DayRenderEventArgs e)
{
    DateTime CurrentDate = e.Day.Date;
    if (CurrentDate.Month != RadCalendar1.FocusedDate.Month)
    {
        e.Cell.Text = "(" + CurrentDate.Day + ")";
    }
    else if (e.Day.IsToday)
    {
        e.Cell.Style["background-color"] = "Red";
    }
}
````
````VB.NET
Protected Sub RadCalendar1_DayRender(ByVal sender As Object, _
ByVal e As Telerik.Web.UI.Calendar.DayRenderEventArgs) _
Handles RadCalendar1.DayRender
    Dim CurrentDate As DateTime = e.Day.[Date]
    If CurrentDate.Month <> RadCalendar1.FocusedDate.Month Then
        e.Cell.Text = "(" + CurrentDate.Day + ")"
    ElseIf e.Day.IsToday Then
        e.Cell.Style("background-color") = "Red"
    End If
End Sub
````


>note 
When customizing the appearance of the cells of the calendar using the **DayRender** event, it is often helpful to also create a handler for the client-side [OnDayRender]({%slug calendar/client-side-programming/events/ondayrender%}) event that makes the same customizations when the user changes the view.
>


For a live example that uses the **DayRender** event , see [DayRender Event.](http://demos.telerik.com/aspnet-ajax/Calendar/Examples/Programming/CustomDayCellRendering/DefaultCS.aspx)

# See Also

 * [Adding Controls to a Calendar Cell]({%slug calendar/how-to/adding-controls-to-a-calendar-cell%})

 * [HeaderCellRender]({%slug calendar/server-side-programming/events/headercellrender%})


