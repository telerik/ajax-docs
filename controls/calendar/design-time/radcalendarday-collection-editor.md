---
title: RadCalendarDay Collection Editor
page_title: RadCalendarDay Collection Editor | UI for ASP.NET AJAX Documentation
description: RadCalendarDay Collection Editor
slug: calendar/design-time/radcalendarday-collection-editor
tags: radcalendarday,collection,editor
published: True
position: 3
---

# RadCalendarDay Collection Editor



## 

The __RadCalendarDay Collection Editor__ lets you define "special days" that the calendar control treats in a different way than the other days in its display. Special days can correspond to public holidays, vacation days, birthdays, and so on.

To display the __RadCalendarDay Collection Editor__, locate the __SpecialDays__ property in the properties pane for the __RadCalendar__ control and click the ellipsis button.![RadCalendarDay Collection editor](images/calendar_day_collection_editor.png)

Use the __Add__ and __Remove__ buttons to add or remove special days.

Select a special day and set its properties using the properties grid of the editor. The following table describes the properties of each special day:


>caption  

| Property | Description |
| ------ | ------ |
| __Date__ |The date that is set aside as a "special day". This value is interpreted based on the value of the __Repeatable__ property.|
| __IsDisabled__ |When __true__ , the special day is disabled in the calendar.|
| __IsSelectable__ |When __true__ , the special day can be selected in the calendar.|
| __IsSelected__ |When __true__ , the calendar starts up with the special day selected.|
| __IsToday__ |When __true__ , the calendar defines the special day as "today".|
| __IsWeekend__ |When __true__ , the special day is formatted as a weekend day.|
| __ItemStyle__ |A composite property that lets you assign the style properties of the special day so that it is visually distinct.|
| __Repeatable__ |Allows the special day definition to apply to several days in the calendar. Possible values are

*  __DayInMonth__ - Only the day part of the __Date__ property is used. The special day repeats every month on the same day.

*  __Today__ - The special day settings control the appearance and behavior of today's date. The value of the __Date__ property is ignored.

*  __DayAndMonth__ - Only the month and day part of the __Date__ property are used. The special day repeats every year on the same month and day.

*  __WeekDayWeekNumberAndMonth__ - Only the weekday (Mon, Tue, etc.), the week number, and the month are used. The special day repeats every year on a specific weekday in a specific week. Can be used for repeatable holidays that are on a different date each year. For instance Martin Luther King Jr. Day: every third Monday of January. Only the week number, the weekday (Mon, Tue, etc) and the month are used.

*  __WeekAndMonth__ - Only the day of the week and the month of the __Date__ property are used. The special day repeats once a week on the same day for a specific month.

*  __Week__ - Only the day of the week of the __Date__ property is used. The special day repeats every week on the same day.

*  __None__ - The special day occurs on the date specified by the __Date__ property. It does not repeat.|
| __TemplateID__ |Identifies a dynamic day template that is used to display the special day. Dynamic day templates are defined using the[DayTemplate Collection Editor]({%slug calendar/design-time/daytemplate-collection-editor%}).|
| __ToolTip__ |A string that appears as a tooltip when the user hovers the mouse over the special day.|

>note If you set the __Repeatable__ property for a special day to anything other than "None", you must either enable postbacks ( __AutoPostBack__ = __True__ ) or set the __EnableRepeatableDaysOnClient__ property to __True__ .
>


Following is a sample illustrating the use of the __Repeatable__ property:

````XML
	     
	
	<telerik:RadCalendar ID="RadCalendar1" runat="server" FocusedDate="1.2008">
	    <SpecialDays>
	        <telerik:RadCalendarDay Date="2008/01/21" Repeatable="WeekDayWeekNumberAndMonth" IsSelectable="false" >
	           <ItemStyle Font-Bold="true"  />
	        </telerik:RadCalendarDay>
	    </SpecialDays>
	</telerik:RadCalendar>
				
````



# See Also

 * [RadCalendar Day Templates]({%slug calendar/templates/radcalendar-day-templates%})
