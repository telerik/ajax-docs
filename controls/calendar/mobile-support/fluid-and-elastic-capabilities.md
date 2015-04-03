---
title: Fluid and Elastic Capabilities
page_title: Fluid and Elastic Capabilities | UI for ASP.NET AJAX Documentation
description: Fluid and Elastic Capabilities
slug: calendar/mobile-support/fluid-and-elastic-capabilities
tags: fluid,and,elastic,capabilities
published: True
position: 1
---

# Fluid and Elastic Capabilities



The RadCalendar including the picker controls provide elastic and fluid capabilities which allow keeping the control’s component proportion on different mobile devices.

## Fluid capability

The __fluid__ capabilities are simply achievable by setting the control’s width in __percentages__.

## Elastic capability

To take advantage __elastic__ functionality advantage you could set a specific __font size__ based on the application target __mobile device__ and follow three simple steps to transform the __RadCalendar/Picker__ controls to be __elastic__:

1. By using specific CSS selectros apply "__1em__" font size for all the __Calendar__ components like this:

````ASPNET
	    <style type="text/css">
	        /*Calednar*/ html .RadCalendar,
	        /*MonthYearPicker, RadDatePicker FastNavigation Popup*/ html .RadCalendarMonthView,
	        /*TimeView Popup*/ html .RadCalendarTimeView,
	        /*Input, DateInput*/ html .RadInput, html .riTextBox,
	        html .RadPicker {
	            font-size: 1em;
	        }
	    </style>
````



1. Set the __RenderMode__ property of the Calendar, DatePicker, DateTimePicker, MonthYearPicker to "__Lightweight__"

````ASPNET
	    <telerik:raddatepicker id="RadDatePicker2" runat="server" selecteddate="8.4.2014"
	        rendermode="Lightweight" width="13.3333em" dateinput-label="Label:"></telerik:raddatepicker>
	    <telerik:raddatepicker id="RadDatePicker3" runat="server" selecteddate="8.4.2014"
	        rendermode="Lightweight" width="13.3333em" dateinput-label="Label:"></telerik:raddatepicker>
	    <telerik:radtimepicker id="RadTimePicker2" runat="server" selectedtime="10:00" rendermode="Lightweight"
	        width="13.3333em" dateinput-label="Label:"></telerik:radtimepicker>
	    <telerik:raddatetimepicker id="RadDateTimePicker2" runat="server" selecteddate="4.8.2014 10:00"
	        rendermode="Lightweight" dateinput-label="Label:" width="13.3333em"></telerik:raddatetimepicker>
	    <telerik:radmonthyearpicker id="RadMonthYearPicker2" runat="server" selecteddate="8.2014"
	        rendermode="Lightweight" width="13.3333em" dateinput-label="Label:"></telerik:radmonthyearpicker>
	    <telerik:radcalendar id="RadCalendar1" runat="server" rendermode="Lightweight" autopostback="true">
					<SpecialDays>
						<telerik:RadCalendarDay Repeatable="Today" ItemStyle-CssClass="rcToday"></telerik:RadCalendarDay>
						<telerik:RadCalendarDay Repeatable="DayInMonth" Date="6/19/2014" ItemStyle-CssClass="rcSelected"></telerik:RadCalendarDay>
						<telerik:RadCalendarDay Repeatable="DayInMonth" Date="6/17/2014" ItemStyle-CssClass="rcHover"></telerik:RadCalendarDay>
					</SpecialDays>
				</telerik:radcalendar>
	    <telerik:radcalendar id="RadCalendar2" runat="server" rendermode="Lightweight" autopostback="true"
	        multiviewcolumns="2" multiviewrows="2"></telerik:radcalendar>
````



1. Set the picker components __width__ in "__em__". In order to keep the default calendar/pickers __proportion__ on mobile devices we would suggest you to set __width="13.3333em"__ as the default width of the components is "__160px__" and the font-size is originally set to "__12px__"See the both images bellow that presents the control's __elastic__ capability

* DatePicker control's rendering in case the body font size is set to 12px![mobile-support-12px](images/mobile-support-12px.png)

* DatePicker control's rendering in case the body font size is set to 18px![mobile-support-18px](images/mobile-support-18px.png)
