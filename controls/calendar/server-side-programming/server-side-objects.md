---
title: Server-Side Objects
page_title: Server-Side Objects | RadCalendar for ASP.NET AJAX Documentation
description: Server-Side Objects
slug: calendar/server-side-programming/server-side-objects
tags: server-side,objects
published: True
position: 0
---

# Server-Side Objects



The **RadCalendar** controls provide a rich API with classes that expose several properties, enumerations, methods and events. You can use the API to easily customize the controls programmatically in the code-behind.

## RadCalendar

The main classes provided for working with the **RadCalendar** control are:

* **RadCalendar** is the main class. It provides several properties, methods, and events for customizing the calendar.

* **RadCalendarDay** maps a date value to its corresponding visual settings and a number of boolean properties that represent its status (weekend date, disabled, selected, and so on). This class is used for the **Day** property of the event arguments of the **[DayRender]({%slug calendar/server-side-programming/server-side-events/dayrender%})** event, as well as for the elements in the **[SpecialDays]({%slug calendar/design-time/radcalendarday-collection-editor%})** collection.

* **CalendarView** represents the current view of the calendar. It can include links to child views if the calendar is in multi-view mode. This class is the type of the **CalendarView** property, and is the type of the **OldView** and **NewView** properties of the event arguments of the **[DefaultViewChanged]({%slug calendar/server-side-programming/server-side-events/defaultviewchanged%})** event.

* **MonthView** is a descendant of **CalendarView** that represents the view information for a single month. It is the type of the **View** property of the event arguments of the **[DayRender]({%slug calendar/server-side-programming/server-side-events/dayrender%})** event. It is the type of the **CalendarView** property when the calendar is in single-view mode.

* **TableCell** is the control class for a cell in the day matrix. It is the value of the **Cell** property of the event arguments of the **[DayRender]({%slug calendar/server-side-programming/server-side-events/dayrender%})** event.

* **RadDate** is a wrapper for System.DateTime. It is used for persisting DateTime values in collections such as the **[SelectedDates]({%slug calendar/design-time/raddate-collection-editor%})** property.

* **DayTemplate** implements an ITemplate wrapper. It is the type for each element of the **[CalendarDayTemplates]({%slug calendar/design-time/daytemplate-collection-editor%})** property.

## RadDatePicker, RadTimePicker, RadDateTimePicker and RadMonthYearPicker

The main classes for working with the **RadDatePicker**, **RadTimePicker**, **RadDateTimePicker** and**RadMonthYearPicker**controls are:

* **RadDatePicker** is the main class for the date picker control.It provides several properties, methods, and events for customizing the control.

* **RadTimePicker** is the main class for the time picker control.It provides several properties, methods, and events for customizing the control.

* **RadDateTimePicker** is the main class for the date-and-time picker control. It provides several properties, methods, and events for customizing the control.

* **RadMonthYearPicker** is the main class for the month-and-year picker control. It provides several properties, methods, and events for customizing the control.

* **RadDateInput** is the class for the input area of**RadDatePicker**, **RadTimePicker**, and**RadDateTimePicker**. It handles the formatting and parsing of date and time strings, and has a number of its own properties, methods, and events.**RadDateInput** is one of the standard **RadInput** controls.

* **CalendarPopupButton** is the class for the popup button that displaysthe calendar on **RadDatePicker** and **RadDateTimePicker**. It is exposed by the **DatePopupButton** property.

* **TimePopupButton** is the class for the popup button that displays the time view on **RadTimePicker** and **RadDateTimePicker**. It is exposed by the **TimePopupButton** property.

* **DatePopupButton** is the class for the popup button that displays the monthyear view on **RadMonthYearPicker**. It is exposed by the **DatePopupButton** property.

* **RadTimeView** is the class for the popup time view used by**RadTimePicker** and **RadDateTimePicker**.

* **DataListItem** is the standard System.Web.UI.WebControls.DataListItem class. The **RadTimeView** control uses this class for each of the items it displays. It can be [accessed through the DataList property]({%slug calendar/templates/finding-controls-inside-radtimeview-templates%}), and is also available as the **Item** property of the event arguments of the **[ItemCreated]({%slug calendar/server-side-programming/server-side-events/itemcreated%})** and **[ItemDataBound]({%slug calendar/server-side-programming/server-side-events/itemdatabound%})** events.
