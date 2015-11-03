---
title: RadCalendar Object
page_title: RadCalendar Server-Side Objects | RadCalendar for ASP.NET AJAX Documentation
description: RadCalendar Server-Side Objects
slug: calendar/server-side-programming/radcalendar-object
tags: server-side,objects
published: True
position: 0
---

# RadCalendar Object



The **RadCalendar** controls provide a rich API with classes that expose several properties, enumerations, methods and events. You can use the API to easily customize the controls programmatically in the code-behind.

## RadCalendar

The main classes provided for working with the **RadCalendar** control are:

* **RadCalendar** is the main class. It provides several properties, methods, and events for customizing the calendar.

* **RadCalendarDay** maps a date value to its corresponding visual settings and a number of boolean properties that represent its status (weekend date, disabled, selected, and so on). This class is used for the **Day** property of the event arguments of the [DayRender]({%slug calendar/server-side-programming/events/dayrender%}) event, as well as for the elements in the [SpecialDays]({%slug calendar/design-time/radcalendarday-collection-editor%}) collection.

* **CalendarView** represents the current view of the calendar. It can include links to child views if the calendar is in multi-view mode. This class is the type of the **CalendarView** property, and is the type of the **OldView** and **NewView** properties of the event arguments of the [DefaultViewChanged]({%slug calendar/server-side-programming/events/defaultviewchanged%}) event.

* **MonthView** is a descendant of **CalendarView** that represents the view information for a single month. It is the type of the **View** property of the event arguments of the [DayRender]({%slug calendar/server-side-programming/events/dayrender%}) event. It is the type of the **CalendarView** property when the calendar is in single-view mode.

* **TableCell** is the control class for a cell in the day matrix. It is the value of the **Cell** property of the event arguments of the [DayRender]({%slug calendar/server-side-programming/events/dayrender%}) event.

* **RadDate** is a wrapper for System.DateTime. It is used for persisting **DateTime** values in collections such as the [SelectedDates]({%slug calendar/design-time/raddate-collection-editor%}) property.

* **DayTemplate** implements an **ITemplate** wrapper. It is the type for each element of the [CalendarDayTemplates]({%slug calendar/design-time/daytemplate-collection-editor%}) property.




