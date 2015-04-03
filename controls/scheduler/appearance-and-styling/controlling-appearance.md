---
title: Controlling Appearance
page_title: Controlling Appearance | UI for ASP.NET AJAX Documentation
description: Controlling Appearance
slug: scheduler/appearance-and-styling/controlling-appearance
tags: controlling,appearance
published: True
position: 0
---

# Controlling Appearance



__RadScheduler__ is highly configurable, with many properties you can set to control its appearance.

## Properties That Affect the Entire Scheduler

* The __Skin__ property controls the overall look of the scheduler. The values of __Skin__ are described morefully in [Skins]({%slug scheduler/appearance-and-styling/skins%}).

* The __OverflowBehavior__ property controls whether the scheduler maintains its original height and uses ascroll bar, or whether it adjusts its height automatically to display its contents. When __OverflowBehavior__ is __Expand__, the size of the scheduler changes automatically when the user switches between Month, Day and Week view, and when the user toggles between Full Time mode and Business hours.

* The __Localization__ property lets you customize any of the strings that appear in the scheduler, in-line editor, edit form, and pop-up dialogs.

## Properties That Affect the Header

* The __ShowHeader__ property determines whether the header region appears on the scheduler at all.If you set __ShowHeader__ to __False__, the scheduler has no navigation controls, no view tabs, and no day, week, or month header.

* You can hide individual controls within the header by setting the __ShowNavigationPane__ and __ShowViewTabs__ properties.Using these properties, you can restrict the user's ability to alter the view or date displayed, or you can provide an alternate method of changing these by adding your own controlsto the web page. If you hide the navigation pane, you can still control the date displayed in the scheduler using the __SelectedDate__ property. If you hide theview tabs, you can still control the view displayed in the scheduler using the __SelectedView__ property.

* The __DayView-HeaderDateFormat__, __WeekView-HeaderDateFormat__, and __MonthView-HeaderDateFormat__ propertiescontrol the formatting of the date label in the header region for the Day, Week, and Month views, respectively.

* Although the __Skin__ property affects the overall color and appearance of the scheduler, you can override the background color of the header region bysetting the __BackColor__ property.

## Properties That Affect the Row Region or Cells

* The __MinutesPerRow__ property determines the amount of time each row represents in Day or Week view.

* The __ShowAllDayRow__ property determines whether the All Day row appears at the top of the row region. If you hide the All Day Row,the scheduler gives no visual indication of the existence of all day appointments, although the control to create them still exists in the edit form.

* The __DayStartTime__ and __DayEndTime__ properties control what rows appear in the scheduler when it is set to display business hours.

* The __WorkDayStartTime__ and __WorkDayEndTime__ properties control what rows appear shaded in the scheduler when it is in Full Time mode.

* The __FirstDayOfWeek__ and __LastDayOfWeek__ properties control what columns appear in Week view or Month view.

* The __MonthView-VisibleAppointmentsPerDay__ property determines the number of appointments a cell in Month view can display. If the number of appointmentsfor a day exceeds this limit, the cell displays a link labeled "more..." Clicking the "more..." link toggles the scheduler into Day view for the day in question.

* The __RowHeight__ property controls the height of each row in the RadScheduler. The minimum value is __16px__.

* The __RowHeaderWidth__ property affects the width of the row headers. The value must be in pixels and the minimum is __50px__.

## Properties That Affect the Hours Column

* The __ShowHoursColumn__ property determines whether the hours column appears on the scheduler at all.If you set __ShowHoursColumn__ to __False__, the scheduler has no row labels, including no label for the All day row.

* The __HoursPanelTimeFormat__ property controls the formatting of the time labels that appear next to groups of rows.

* The __TimeLabelRowSpan__ property controls the height (in rows) of the hours panels. That is, this property controlsthe number of rows each label covers. Note that the amount of time this represents is controlled by the __MinutesPerRow__ property.

## Properties That Affect the Column Headers

* The __ShowWeeklyColumnHeader__ and __ShowMonthlyColumnHeader__ properties determine whether the columnheader appears in Week view and Month view, respectively.

* The __WeekColumnHeaderDateFormat__ and __MonthColumnHeaderDateFormat__ properties control the formattingof the labels in the column headers for Week view and Month view, respectively.

## Properties That Affect the Footer

* The __ShowFooter__ property determines whether the footer appears in scheduler.If the footer does not appear, the scheduler has no link for the user to toggle between Full Time mode and Business hours. You can control which of these modes the scheduler displays by setting the __StartInFullTime__ property.

## Properties That Affect the In-line editor and Edit Form

* The __EditFormDateFormat__ and __EditFormTimeFormat__ properties determine how date and time values are formatted in the Edit Form.

* The __StartInsertingInAdvancedForm__ and __StartEditingInAdvancedForm__ properties control whetherthe user sees the in-line editor or the edit form when start inserting or start editing an appointment.

* The __EnableCustomAttributeEditing__ and __EnableResourceEditing__ properties determine whether the advanced form includescontrols for the custom attributes or custom resources that you have defined.

# See Also

 * [RadScheduler Structure]({%slug scheduler/usability/radscheduler-structure%})

 * [Templates]({%slug scheduler/appearance-and-styling/templates%})

 * [Translating Strings]({%slug scheduler/accessibility-and-internationalization/translating-strings%})
