---
title: Multi-View Mode
page_title: Multi-View Mode | UI for ASP.NET AJAX Documentation
description: Multi-View Mode
slug: calendar/radcalendar/multi-view-mode
tags: multi-view,mode
published: True
position: 4
---

# Multi-View Mode



## 

__RadCalendar__ can be easily configured to show more than one month in the calendar area. To enable this functionality, simply set the __MultiViewRows__ and __MultiViewColumns__ properties to specify the number of month views to appear in each row and column.

>note When using Multi-view mode, it is a good idea to use the __CalendarTableStyle__ property to provide some separation between the individual calendar views. For more information on style properties, see[Styles]({%slug calendar/appearance-and-styling/styles%}).
>
![RadCalendar in multiview mode](images/MultiViewMode.png)

The code below shows the configuration of the multi-view calendar shown above:

````ASPNET
	     
	 <telerik:RadCalendar
	    ID="RadCalendar1"
	    runat="server"
	    ShowRowHeaders="False"
	    Skin="WebBlue"
	    DayNameFormat="FirstLetter"
	    EnableMultiSelect="False"
	    FocusedDate="2008-01-01"
	    AutoPostBack="True"
	    MultiViewColumns="4"
	    MultiViewRows="3" >
	    <CalendarTableStyle BorderStyle="Solid" BorderWidth="1px" />
	</telerik:RadCalendar>
							
````



>caution Multi-view calendar logic works -only- when __AutoPostBack="true"__ . As a result, if a __RadCalendar__ control is used as the popup control inside a __RadDatePicker__ or __RadDateTimePicker__ control, it cannot use multi-view mode.
>


# See Also

 * [Customizing the Day Matrix]({%slug calendar/radcalendar/customizing-the-day-matrix%})
