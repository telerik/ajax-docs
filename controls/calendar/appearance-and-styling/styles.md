---
title: Styles
page_title: Styles | UI for ASP.NET AJAX Documentation
description: Styles
slug: calendar/appearance-and-styling/styles
tags: styles
published: True
position: 1
---

# Styles



The __RadCalendar__ controls come with a set of predefined styles, which are specified by the styles in the current skin CSS classes. If the __[Skin]({%slug calendar/appearance-and-styling/skins%})__ property is not set to an empty string, you can use a variety of style properties to further customize the appearance of the control.

Setting these properties will copy any non-blank elements of the specified style to the specific element of the rendered control, overwriting any existing style elements defined by the used skin.

>caution Setting a style property does not always affect the appearance of a control, if the skin has a setting that applies to a more specific element.
>


## RadCalendar styles

The following table lists the styles that you can assign to a stand-alone __RadCalendar__ control or the embedded __RadCalendar__ control that acts as a popup to __RadDatePicker__ and __RadDateTimePicker__:


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

>note In addition to the style properties listed above, if the calendar has any[special days]({%slug calendar/design-time/radcalendarday-collection-editor%})defined, you can set their __ItemStyle__ property to customize the appearance of the special day.
>


## RadTimeView Styles

The following table lists the styles that you can assign to the embedded __RadTimeView__ control that acts as a popup to __RadTimePicker__ and __RadDateTimePicker__:


| Property | Default CSS Class | Description |
| ------ | ------ | ------ |
|TimeStyle||The style for the selectable time values.|
|AlternatingTimeStyle||The style for every other selectable time value.|
|TimeOverStyle|rcHover|The style that is applied when the mouse hovers over a time value.|
|HeaderStyle|rcHeader|The style for the header region.|
|FooterStyle|rcFooter|The style for the footer region.|

## RadInput Styles

The following table lists the styles that you can assign to the embedded __RadInput__ control of __RadDatePicker__, __RadTimePicker__, and __RadDateTimePicker__:


| Property | Default CSS class | Description |
| ------ | ------ | ------ |
|EnabledStyle|riEnabled|The style for the enabled input control.|
|DisabledStyle|riDisabled|The style that is applied for the disabled input control.|
|EmptyMessageStyle|riEmpty|The style when the value is not set and the input control does not have focus.|
|FocusedStyle|riFocused|The style when the input control has focus.|
|HoveredStyle|riHover|The style when the mouse hovers over the input control.|
|InvalidStyle|riError|The style when the value of the input control is invalid.|

>note The CSS class definitions for the embedded __RadInput__ control are found in the Input CSS skin file rather than the Calendar CSS file.
>


>note Since the Q1 2013 SP1 version of RadCalendar the hovered style(.rcHover) is appended to the selected style. Thus both styles will be applied when hovering over an element.
>




# See Also

 * [HTML Output]({%slug calendar/appearance-and-styling/html-output%})
