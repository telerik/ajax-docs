---
title: Controlling Appearance
page_title: Controlling Appearance - RadScheduler
description: Check our Web Forms article about Controlling Appearance.
slug: scheduler/appearance-and-styling/controlling-appearance
tags: controlling,appearance
published: True
position: 0
---

# Controlling Appearance



**RadScheduler** is highly configurable, with many properties you can set to control its appearance.

## Properties That Affect the Entire Scheduler

* The **Skin** property controls the overall look of the scheduler. The values of **Skin** are described morefully in [Skins]({%slug scheduler/appearance-and-styling/skins%}).

* The **OverflowBehavior** property controls whether the scheduler maintains its original height and uses ascroll bar, or whether it adjusts its height automatically to display its contents. When **OverflowBehavior** is **Expand**, the size of the scheduler changes automatically when the user switches between Month, Day and Week view, and when the user toggles between Full Time mode and Business hours.

* The **Localization** property lets you customize any of the strings that appear in the scheduler, in-line editor, edit form, and pop-up dialogs.

## Properties That Affect the Header

* The **ShowHeader** property determines whether the header region appears on the scheduler at all.If you set **ShowHeader** to **False**, the scheduler has no navigation controls, no view tabs, and no day, week, or month header.

* You can hide individual controls within the header by setting the **ShowNavigationPane** and **ShowViewTabs** properties.Using these properties, you can restrict the user's ability to alter the view or date displayed, or you can provide an alternate method of changing these by adding your own controlsto the web page. If you hide the navigation pane, you can still control the date displayed in the scheduler using the **SelectedDate** property. If you hide theview tabs, you can still control the view displayed in the scheduler using the **SelectedView** property.

* The **DayView-HeaderDateFormat**, **WeekView-HeaderDateFormat**, and **MonthView-HeaderDateFormat** propertiescontrol the formatting of the date label in the header region for the Day, Week, and Month views, respectively.

* Although the **Skin** property affects the overall color and appearance of the scheduler, you can override the background color of the header region bysetting the **BackColor** property.

## Properties That Affect the Row Region or Cells

* The **MinutesPerRow** property determines the amount of time each row represents in Day or Week view.

* The **ShowAllDayRow** property determines whether the All Day row appears at the top of the row region. If you hide the All Day Row,the scheduler gives no visual indication of the existence of all day appointments, although the control to create them still exists in the edit form.

* The **DayStartTime** and **DayEndTime** properties control what rows appear in the scheduler when it is set to display business hours.

* The **WorkDayStartTime** and **WorkDayEndTime** properties control what rows appear shaded in the scheduler when it is in Full Time mode.

* The **FirstDayOfWeek** and **LastDayOfWeek** properties control what columns appear in Week view or Month view.

* The **MonthView-VisibleAppointmentsPerDay** property determines the number of appointments a cell in Month view can display. If the number of appointmentsfor a day exceeds this limit, the cell displays a link labeled "more..." Clicking the "more..." link toggles the scheduler into Day view for the day in question.

* The **RowHeight** property controls the height of each row in the RadScheduler. The minimum value is **16px**.

* The **RowHeaderWidth** property affects the width of the row headers. The value must be in pixels and the minimum is **50px**.

## Properties That Affect the Hours Column

* The **ShowHoursColumn** property determines whether the hours column appears on the scheduler at all.If you set **ShowHoursColumn** to **False**, the scheduler has no row labels, including no label for the All day row.

* The **HoursPanelTimeFormat** property controls the formatting of the time labels that appear next to groups of rows.

* The **TimeLabelRowSpan** property controls the height (in rows) of the hours panels. That is, this property controlsthe number of rows each label covers. Note that the amount of time this represents is controlled by the **MinutesPerRow** property.

## Properties That Affect the Column Headers

* The **ShowWeeklyColumnHeader** and **ShowMonthlyColumnHeader** properties determine whether the columnheader appears in Week view and Month view, respectively.

* The **WeekColumnHeaderDateFormat** and **MonthColumnHeaderDateFormat** properties control the formattingof the labels in the column headers for Week view and Month view, respectively.

## Properties That Affect the Footer

* The **ShowFooter** property determines whether the footer appears in scheduler.If the footer does not appear, the scheduler has no link for the user to toggle between Full Time mode and Business hours. You can control which of these modes the scheduler displays by setting the **StartInFullTime** property.

## Properties That Affect the In-line editor and Edit Form

* The **EditFormDateFormat** and **EditFormTimeFormat** properties determine how date and time values are formatted in the Edit Form.

* The **StartInsertingInAdvancedForm** and **StartEditingInAdvancedForm** properties control whetherthe user sees the in-line editor or the edit form when start inserting or start editing an appointment.

* The **EnableCustomAttributeEditing** and **EnableResourceEditing** properties determine whether the advanced form includescontrols for the custom attributes or custom resources that you have defined.

# See Also

 * [Templates]({%slug scheduler/appearance-and-styling/templates%})

 * [Translating Strings]({%slug scheduler/accessibility-and-internationalization/translating-strings%})
