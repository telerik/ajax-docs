---
title: Migrating RadCalendar Skins Created Before Q3 2008
page_title: Migrating RadCalendar Skins Created Before Q3 2008 | RadCalendar for ASP.NET AJAX Documentation
description: Migrating RadCalendar Skins Created Before Q3 2008
slug: calendar/appearance-and-styling/skin-migration
tags: migrating,skin
published: True
position: 6
---

# Migrating RadCalendar Skins Created Before Q3 2008


For its Q3 2008 release RadCalendar has undergone an HTML and CSS optimization. All CSS classes have been renamed to use Telerik's current naming convention, some new CSS classes have been added to make skinning more flexible, and some unused CSS classes have been removed. RadCalendar skins now use CSS sprites.

Here is a list of all CSS classes used in RadCalendar (including the Calendar, TimeView and date/time pickers) and their new equivalents. 

>caution Please note that the lists below show how the CSS classes have changed, but they are not a direct indication about how the CSS selectors should be constructed - this is a matter of preference and generally, you should follow your current scheme. However, since the new CSS classes do not have a skin suffix, you will need to add the CSS class of the control's wrapper (.RadCalendar_Skin) to each selector. For example:
*(old selector)* **.radCalSelect_Skin a** {...} -> *(new selector)* **.RadCalendar_Skin .rcSelected a** {...}
>


## Calendar


| Old CSS class | New CSS class | Notes |
| ------ | ------ | ------ |
|table.calendarWrapper_Skin|table.RadCalendar_Skin| |
|[no class]|td.rcTitlebar|wraps the titlebar table|
|table.titlebar_Skin|.RadCalendar_Skin .rcTitlebar table|[removed]|
|[no class]|td.rcTitle|contains the month name and year|
|[no class]|a.rcFastPrev|used in sprite mode only (when ImagesPath and ImageUrls are NOT set)|
|[no class]|a.rcPrev| |
|[no class]|a.rcNext| |
|[no class]|a.rcFastNext| |
|[no class]|td.rcMain|wraps table.rcMainTable|
|table.TableLayout_Skin|table.rcMainTable| |
|[no class]|tr.rcWeek|wraps the column headers (weekday names)|
|th.ViewSelector_Skin|th.rcViewSel| |
|th.DaysOfWeek_Skin|.RadCalendar_Skin .rcWeek th|[removed] used for column headers|
|td.DaysOfWeek_Skin|.RadCalendar_Skin .rcRow th|[removed] used for row headers|
|[no class]|tr.rcRow|wraps all date rows except the column header row|
|td.radCalDefault_Skin|.RadCalendar_Skin .rcRow td|[removed]|
|td.otherMonth_Skin|td.rcOtherMonth| |
|td.radCalWeekendDefault_Skin|td.rcWeekend| |
|td.radCalHover_Skin|td.rcHover| |
|td.radCalSelect_Skin|td.rcSelected| |
|td.radCalToday_Skin|td.rcToday| |
|td.outOfRange_Skin|td.rcOutOfRange| |
|[no class]|td.rcHeader|wraps the header template|
|[no class]|td.rcFooter|wraps the footer template|



## Month/Year Fast Nagivation

| Old CSS class | New CSS class | Notes |
|---|---|---|
|  div.RadCalendarFastNavPopup |  div.RadCalendarFastNavPopup |   |
|  table.MonthYearFastNav_Skin |  table.RadCalendarMonthView_Skin |   |
| td#RadCalendar_FastNav_Jan  | td#rcMView_Jan  |   |
| td#RadCalendar_FastNav_###  | td#rcMView_###  |   |
|  td#RadCalendar_FastNav_PrevYears |  td#rcMView_PrevY |   |
| td#RadCalendar_FastNav_NextYears  |  td#rcMView_NextY |   |
| td.selected_Skin  | td.rcSelected  |   |
| td.bottom_Skin  | td.rcButtons  |   |
| input#RadCalendar_FastNav_TodayButton  |  input#rcMView_Today |   |
| input#RadCalendar_FastNav_OkButton  |  input#rcMView_OK |   |
| input#RadCalendar_FastNav_CancelButton |  input#rcMView_Cancel |   |



## TimeView


| Old CSS class | New CSS class | Notes |
|---|---|---|
|table.radTimeTableCss_Skin | table.RadCalendarTimeView_Skin | |
|th.radHeaderCss_Skin | th.rcHeader | |
|td.radItemCss_Skin | .RadCalendarTimeView_Skin td | [removed] |
|td.radAlternatingItemCss_Skin | .RadCalendarTimeView_Skin td | [removed] |
|td.radTimeOverCss_Skin | td.rcHover | |
|[no class] | td.rcFooter | wraps the footer template |
 


## DateTimePicker

| Old CSS class | New CSS class | Notes |
|---|---|---|
|div.pickerWrapper_Skin | div.RadPicker_Skin | |
|td.inputCell | td.rcInputCell | |
|a.radPopupImage_Skin (pops a calendar) | a.rcCalPopup | used in sprite mode only (when ImagesPath and ImageUrls are NOT set) |
|a.radPopupImage_Skin (pops a timeview) | a.rcTimePopup | |
|div.RadCalendarPopup | div.RadCalendarPopup | use to distinct when RadCalendar is popped |


## Calendar MultiMonth View


| Old CSS class | New CSS class | Notes |
|---|---|---|
|[no class] | table.RadCalendarMultiView_Skin | applied together with .RadCalendar_Skin | |
|[no class] | td.rcCalendars | wraps all month views | |
|[no class] | td.rcCalendar | wraps a single month view | |
|[no class] | td.rcFirstCol, td.rcLastCol, td.rcFirstRow, td.rcLastRow | these classes are applied to the same table cells from the previous line. Use to distinct first/last cells, e.g. when different border styles have to be set |


