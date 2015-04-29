---
title: Adding Controls to a Calendar Cell
page_title: Adding Controls to a Calendar Cell | RadCalendar for ASP.NET AJAX Documentation
description: Adding Controls to a Calendar Cell
slug: calendar/how-to/adding-controls-to-a-calendar-cell
tags: adding,controls,to,a,calendar,cell
published: True
position: 0
---

# Adding Controls to a Calendar Cell



There are two possible approaches for adding controls to a **RadCalendar** cell:

* You can add controls to a Day template and assign the template to one or more special days in the calendar. This approach is useful when you want to add controls on a "per day" basis. For details on how to create and use day templates, see [Day Templates]({%slug calendar/templates/radcalendar-day-templates%}).

* You can use the [DayRender]({%slug calendar/server-side-programming/server-side-events/dayrender%}) event to add the controls to every cell of the calendar just before it is rendered on the client:



````C#
protected void RadCalendar1_DayRender(object sender, Telerik.Web.UI.Calendar.DayRenderEventArgs e) 
{ 
    Label label = new Label();
    label.Text = e.Day.Date.Day.ToString();
    e.Cell.Controls.Add(label);
    label = new Label();
    label.Text = e.Day.Date.DayOfWeek.ToString();
    e.Cell.Controls.Add(label); 
}
````
````VB.NET
Protected Sub RadCalendar1_DayRender(ByVal sender As Object, ByVal e As Telerik.Web.UI.Calendar.DayRenderEventArgs) Handles RadCalendar1.DayRender
    Dim label As New Label()
    label.Text = e.Day.[Date].Day.ToString()
    e.Cell.Controls.Add(label)
    label = New Label()
    label.Text = e.Day.[Date].DayOfWeek.ToString()
    e.Cell.Controls.Add(label)
End Sub
````

