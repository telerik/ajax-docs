---
title: Styles
page_title: Styles | RadCalendar for ASP.NET AJAX Documentation
description: Styles
slug: calendar/appearance-and-styling/styles
tags: styles
published: True
position: 1
---

# Styles



**RadCalendar** control comes with a set of predefined styles, which are specified by the styles in the current skin CSS classes. If the [Skin]({%slug calendar/appearance-and-styling/skins%}) property is not set to an empty string, you can use a variety of style properties to further customize the appearance of the control.

Setting these properties will copy any non-blank elements of the specified style to the specific element of the rendered control, overwriting any existing style elements defined by the used skin.

>caution 
Setting a style property does not always affect the appearance of a control, if the skin has a setting that applies to a more specific element.
>


## RadCalendar styles

The following table lists the styles that you can assign to a stand-alone **RadCalendar** control or the embedded **RadCalendar** control that acts as a popup to **RadDatePicker** and **RadDateTimePicker**:


| Property | Default CSS Class | Description |
| ------ | ------ | ------ |
|CalendarTableStyle|rcMainTable|The style for the day matrix in the main area of the calendar.|
|DayStyle||The style for the regular days in the displayed month (i.e. without selected days, special days, weekends, etc.).|
|DayOverStyle|rcHover|The style that is applied when the mouse hovers over the calendar days.|
|SelectedDayStyle|rcSelected|The style applied to the selected dates.|
|WeekendDayStyle|rcWeekend|The style applied to the weekend dates.|
|DisabledDayStyle||The style applied to the disabled dates.|
|OtherMonthDayStyle|rcOtherMonth|The style applied to the days on the Calendar control that are not in the current month.|
|OutOfRangeDayStyle|rcOutOfRange|The style for the days on the Calendar control that are out of the predefined range.|
|HeaderStyle||The style for the row and column selectors.|
|TitleStyle||The style of the Calendar title.|
|FastNavigationStyle|RadCalendarMonthView_[skin name]|The style applied to the Month/Year fast navigation popup.|

>tip 
In addition to the style properties listed above, if the calendar has any [special days]({%slug calendar/design-time/radcalendarday-collection-editor%}) defined, you can set their **ItemStyle** property to customize the appearance of the special day.
>



>tip 
Since the Q1 2013 SP1 version of **RadCalendar** the hovered style (**.rcHover**) is appended to the selected style. Thus both styles will be applied when hovering over an element.
>




# See Also

 * [HTML Output]({%slug calendar/appearance-and-styling/html-output%})
