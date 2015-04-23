---
title: HeaderCellRender
page_title: HeaderCellRender | RadCalendar for ASP.NET AJAX Documentation
description: HeaderCellRender
slug: calendar/server-side-programming/server-side-events/headercellrender
tags: headercellrender
published: True
position: 2
---

# HeaderCellRender



## 

The **RadCalendar** control provides the
**HeaderCellRender** server event, which is raised after all the
row and column headers and the view selector have been generated and just
before one of these header cells is rendered to the client. It is the last
place where changes to the already constructed header cells can be made.

>note The **HeaderCellRender** event does not fire if the calendar does not display its row and column headers or view selectors. That is, if the **ShowRowHeaders** , **ShowColumnHeaders** and **EnableViewSelector** properties are all **False** , the event does not fire.
>


The **HeaderCellRender** event handler has two
arguments:

1. The **RadCalendar** control whose header cell is about to be rendered. This argument is of type object, but can be cast to the **RadCalendar** type.

1. A **HeaderCellRenderEventArgs** object. This object has the following two properties:

* **Cell** is the control for the cell that is about to be rendered. The event handler can make changes to this control to change the way the cell is rendered.

* **HeaderType** is an enumerated value that indicates whether the cell represents a row header, column header, or view selector.

Use the **HeaderCellRender** event handler to make changes to
the header cell before it is rendered:



````C#
	
	    protected void RadCalendar1_HeaderCellRender(object sender, HeaderCellRenderEventArgs e)
	    {
	        switch (e.HeaderType)
	        {
	            case Telerik.Web.UI.Calendar.HeaderType.Column:
	                e.Cell.BackColor = System.Drawing.Color.Red;
	                break;
	            case Telerik.Web.UI.Calendar.HeaderType.Row:
	                e.Cell.BackColor = System.Drawing.Color.Green;
	                break;
	            case Telerik.Web.UI.Calendar.HeaderType.View:
	                e.Cell.BackColor = System.Drawing.Color.White;
	                break;
	        }
	    }
				
````
````VB.NET
	     
		Protected Sub RadCalendar1_HeaderCellRender(ByVal sender As Object, ByVal e As HeaderCellRenderEventArgs) Handles RadCalendar1.HeaderCellRender
	        Select Case e.HeaderType
	            Case Telerik.Web.UI.Calendar.HeaderType.Column
	                e.Cell.BackColor = System.Drawing.Color.Red
	                Exit Select
	            Case Telerik.Web.UI.Calendar.HeaderType.Row
	                e.Cell.BackColor = System.Drawing.Color.Green
	                Exit Select
	            Case Telerik.Web.UI.Calendar.HeaderType.View
	                e.Cell.BackColor = System.Drawing.Color.White
	                Exit Select
	        End Select
	    End Sub
				
````


# See Also

 * [DayRender]({%slug calendar/server-side-programming/server-side-events/dayrender%})
