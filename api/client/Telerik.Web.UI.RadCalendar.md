---
title: Telerik.Web.UI.RadCalendar
page_title: Client-side API Reference
description: Telerik.Web.UI.RadCalendar
slug: Telerik.Web.UI.RadCalendar
---

# Telerik.Web.UI.RadCalendar : Telerik.Web.UI.RadWebControl 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadCalendar]({%slug Telerik.Web.UI.RadCalendar%})*


## Methods

###  get_rangeMaxDate

Returns the triplet for the maximum date that the user can select.

#### Parameters

#### Returns

`Array` 

### calculateDateFromStep

Returns the triplet for the date that is offset by the specified number of days from the current month. If the parameter is positive, the days are offset from the last day of the month. If the parameter is negative, the days are offset from the first day of the month.

#### Parameters

##### step `Number`

#### Returns

`Array` 

### get_autoPostBack

Returns the value of the AutoPostBack property.

#### Parameters

#### Returns

`Boolean` 

### get_calendarEnableMonthYearFastNavigation

Returns whether the month/year navigation popup is enabled.

#### Parameters

#### Returns

`Boolean` 

### get_calendarEnableNavigation

Returns whether the navigation buttons appear on the title bar.

#### Parameters

#### Returns

`Boolean` 

### get_cellDayFormat

Returns the cell date format

#### Parameters

#### Returns

`String` 

### get_culture

Returns the RadCalendar culture name.

#### Parameters

#### Returns

`String` 

### get_dateRangeSeparator

Returns the separator string that will be put between start and end months in a multi view title.

#### Parameters

#### Returns

`String` 

### get_dayCellToolTipFormat

Get the format of the date that appears when the user hovers the mouse over a cell in the calendar.

#### Parameters

#### Returns

`String` 

### get_enableAriaSupport

Returns a value indicating whether the Aria support is enabled.

#### Parameters

#### Returns

`Boolean` 

### get_enabled

Returns true if the control is enabled.

#### Parameters

#### Returns

`Boolean` 

### get_enableMultiSelect

Returns true if the calendar allows multiple dates to be selected.

#### Parameters

#### Returns

`Boolean` 

### get_enableNavigationAnimation

Returns true if navigation animation is enabled.

#### Parameters

#### Returns

`Boolean` 

### get_enableRepeatableDaysOnClient

Returns true if the repeatable days are enabled

#### Parameters

#### Returns

`Boolean` 

### get_fastNavigationStep

Returns the number of months by which the view changes when the user clicks the fast navigation buttons.

#### Parameters

#### Returns

`Number` 

### get_focusedDate

Returns the triplet that represents the currently focused date. The focused Date is the date that determines which view the calendar displays.

#### Parameters

#### Returns

`Array` 

### get_hideNavigationControls

Returns a boolean value indicating whether the navigation controls are hidden.

#### Parameters

#### Returns

`Boolean` 

### get_monthYearNavigationSettings

Returns an array with the fast navigation settings. The settings are, in order, TodayButtonCaption, OkButtonCaption, CancelButtonCaption, DateIsOutOfRangeMessage, EnableTodayButtonSelection.

#### Parameters

#### Returns

`Array` 

### get_multiViewColumns

Returns the number of columns when the calendar is in multi-view mode (the number of months in each row).

#### Parameters

#### Returns

`Number` 

### get_multiViewRows

Returns the number of rows when the calendar is in multi-view mode (the number of months in each column).

#### Parameters

#### Returns

`Number` 

### get_orientation

Returns 1 if the orientation is "RenderInRows", 2 if it is "RenderInColumns".

#### Parameters

#### Returns

`Number` 

### get_presentationType

Returns the current presentation type (Interactive - 1, Preview - 2)

#### Parameters

#### Returns

`Number` 

### get_rangeMinDate

Returns the triplet for the minimum date that the user can select.

#### Parameters

#### Returns

`Array` 

### get_rangeSelectionEndDate

Returns last date form the selected range when when RadCalendar's range selection is enabled.

#### Parameters

#### Returns

`Date` 

### get_rangeSelectionStartDat

Returns first date form the selected range when when RadCalendar's range selection is enabled.

#### Parameters

#### Returns

`Date` 

### get_selectedDates

Returns an array of triplets that represent the selected dates in the calendar.

#### Parameters

#### Returns

`Array` 

### get_showDayCellToolTips

Returns a value indicating whether the day cell tooltips should be shown.

#### Parameters

#### Returns

`Boolean` 

### get_showOtherMonthsDays

Returns true if the calendar displays days from months other than the focused month.

#### Parameters

#### Returns

`Boolean` 

### get_singleViewColumns

Returns the number of columns in each month view.

#### Parameters

#### Returns

`Number` 

### get_singleViewRows

Returns the number of rows in each month view.

#### Parameters

#### Returns

`Number` 

### get_skin

Returns the name of the current skin

#### Parameters

#### Returns

`String` 

### get_specialDaysArray

Returns an array (0-offset)containing information about the special days that are defined. Each element in the array is an array (1-offset) with the following elements (in order): a triplet for the date, four elements that are not used client-side, an indicator of the repeatable status of the special day, another unused element, the tool tip for the day, and array with the style settings for the special day.

#### Parameters

#### Returns

`Array` 

### get_stylesHash

Returns an array that specifies the CSS classes, set for the predefined styles. For example: CalendarTableStyle - rcMainTable

#### Parameters

#### Returns

`Array` 

### get_titleFormat

Returns the header (title) date format

#### Parameters

#### Returns

`String` 

### get_useColumnHeadersAsSelectors

Returns whether the column selection is enabled.

#### Parameters

#### Returns

`Boolean` 

### get_useRowHeadersAsSelectors

Returns whether the row selection is enabled.

#### Parameters

#### Returns

`Boolean` 

### navigateToDate

Causes the calendar to switch to the view containing the specified date.

#### Parameters

##### date `Array`

#### Returns

`None` 

### raise_calendarViewChanged

Raises the calendarViewChanged event.

#### Parameters

##### handler `Function`

#### Returns

`None` 

### raise_calendarViewChanging

Raises the calendarViewChanging event.

#### Parameters

##### handler `Function`

#### Returns

`None` 

### raise_columnHeaderClick

Raises the columnHeaderClick event.

#### Parameters

##### handler `Function`

#### Returns

`None` 

### raise_dateClick

Raises the dateClick event.

#### Parameters

##### handler `Function`

#### Returns

`None` 

### raise_dateSelected

Raises the dateSelected event.

#### Parameters

##### handler `Function`

#### Returns

`None` 

### raise_dateSelecting

Raises the dateSelecting event.

#### Parameters

##### handler `Function`

#### Returns

`None` 

### raise_dayRender

Raises the dayRender event.

#### Parameters

##### handler `Function`

#### Returns

`None` 

### raise_init

Raises the init event.

#### Parameters

##### handler `Function`

#### Returns

`None` 

### raise_load

Raises the load event.

#### Parameters

##### handler `Function`

#### Returns

`None` 

### raise_rowHeaderClick

Raises the rowHeaderClick event.

#### Parameters

##### handler `Function`

#### Returns

`None` 

### raise_viewSelectorClick

Raises the viewSelectorClick event.

#### Parameters

##### handler `Function`

#### Returns

`None` 

### selectDate

Selects the specified date.

#### Parameters

##### date `Date`

The DateTime object which should be selected.

##### navigate `Boolean`

Boolean value that indicates whether the calendar should navigate to the specified date.	

#### Returns

`None` 

### selectDates

Selects the set of dates in the first parameter, where each date is represented by triplet. If the second parameter is true, the calendar navigates to the view containing the newly selected dates.

#### Parameters

##### dates `Array`

##### navigate `Boolean`

#### Returns

`None` 

### set_autoPostBack

Sets the value of the AutoPostBack property.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_calendarEnableMonthYearFastNavigation

Sets whether the month/year navigation popup is enabled.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_calendarEnableNavigation

Returns whether the navigation buttons appear on the title bar. NOTE: Setting this property on the client has no effect.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_cellDayFormat

Sets the cell day format

#### Parameters

##### value `String`

#### Returns

`None` 

### set_dateRangeSeparator

Sets the separator string that will be put between start and end months in a multi view title.

#### Parameters

##### value `String`

#### Returns

`None` 

### set_datesInRange

Selects all dates between startDate and endDate, when RadCalendar's range selection is enabled.

#### Parameters

##### startDate `Date`

##### endDate `Date`

#### Returns

`None` 

### set_dayCellToolTipFormat

Set the format of the date that appears when the user hovers the mouse over a cell in the calendar.

#### Parameters

##### value `String`

#### Returns

`None` 

### set_enabled

Enables/disables the control

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_enableMultiSelect

Sets whether the calendar allows multiple dates to be selected.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_enableNavigationAnimation

If set to true, this causes the RadCalendar control to display animated effects when the user changes the current month using the navigation controls in the title bar:

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_enableRepeatableDaysOnClient

Enables/disabled the repeatable days

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_fastNavigationStep

Sets the number of months by which the view changes when the user clicks the fast navigation buttons.

#### Parameters

##### value `Number`

#### Returns

`None` 

### set_focusedDate

Sets the focused Date - it determines which view the calendar displays.

#### Parameters

##### date `Array`

#### Returns

`None` 

### set_hideNavigationControls

Sets a value indicating whether the naviagation control should be visible

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_monthYearNavigationSettings

Sets the fast navigation settings. The settings are, in order, TodayButtonCaption, OkButtonCaption, CancelButtonCaption, DateIsOutOfRangeMessage, EnableTodayButtonSelection. Changes you make to these settings have an effect only if you make them before the first time the month/year navigation popup is displayed.

#### Parameters

##### value `Array`

#### Returns

`None` 

### set_multiViewColumns

Sets the number of columns when the calendar is in multi-view mode (the number of months in each row).

#### Parameters

##### value `Number`

#### Returns

`None` 

### set_multiViewRows

Sets the number of rows when the calendar is in multi-view mode (the number of months in each column).

#### Parameters

##### value `Number`

#### Returns

`None` 

### set_orientation

Sets the orientation (1 - RenderInRows, 2 - RenderInColumns)

#### Parameters

##### value `Number`

#### Returns

`None` 

### set_presentationType

Sets the current presentation type (Interactive - 1, Preview - 2)

#### Parameters

##### value `Number`

#### Returns

`None` 

### set_rangeMaxDate

Sets the maximum date to the date represented by a triplet.

#### Parameters

##### date `Array`

#### Returns

`None` 

### set_rangeMinDate

Sets the minimum date to the date represented by a triplet.

#### Parameters

##### date `Array`

#### Returns

`None` 

### set_showDayCellToolTips

Sets a value indication whether the day cell tooltips should be visible.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_showOtherMonthsDays

Sets whether the calendar displays days from months other than the focused month.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_singleViewColumns

Sets the number of columns in each month view.

#### Parameters

##### value `Number`

#### Returns

`None` 

### set_singleViewRows

Sets the number of rows in each month view.

#### Parameters

##### value `Number`

#### Returns

`None` 

### set_skin

Changes the current skin

#### Parameters

##### value `String`

#### Returns

`None` 

### set_specialDaysArray

Sets the special days. Each element in the array is an array (1-offset) with the following elements (in order): a triplet for the date, four elements that are not used client-side, an indicator of the repeatable status of the special day, another unused element, the tool tip for the day, and array with the style settings for the special day.

#### Parameters

##### value `Array`

#### Returns

`None` 

### set_stylesHash

Sets the predefined RadCalendar styles.

#### Parameters

##### value `Array`

#### Returns

`None` 

### set_titleFormat

Sets the headers (title) date format

#### Parameters

##### value `String`

#### Returns

`None` 

### set_useColumnHeadersAsSelectors

Enables/disables the column selection

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_useRowHeadersAsSelectors

Enables/disables the row selection

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### unselectDate

Un-selects the date represented by the parameter if it is currently selected.

#### Parameters

##### date `Array`

#### Returns

`None` 

### unselectDates

Un-selects all the dates represented by triplets in the array if they are currently selected.

#### Parameters

##### dates `Array`

#### Returns

`None` 



## Events

### calendarViewChanged

The calendarViewChanged event is fired when the calendar navigates to a new view or after the calendar has been updated for the new view, but before it is rendered.

#### Event Data

#####  sender `Telerik.Web.UI.RadCalendar`

The instance of the RadCalendar raised the event.

##### args `Telerik.Web.UI.CalendarViewChangedEventArgs`

The event arguments.  

### calendarViewChanging

The calendarViewChanging event is fired when the calendar navigates to a new view, before the viewable area rendered by the calendar is changed.

#### Event Data

##### sender `Telerik.Web.UI.RadCalendar`

The instance of the RadCalendar raised the event.

##### args `Telerik.Web.UI.CalendarViewChangingEventArgs`

The event arguments.  

### columnHeaderClick

The columnHeaderClick event is fired when the user is about to select a column of dates by clicking on a column header. The event occurs only if the ShowColumnHeaders and UseColumnHeadersAsSelectors properties are set to true.

#### Event Data

##### sender `Telerik.Web.UI.RadCalendar`

The instance of the RadCalendar raised the event.

##### args `Telerik.Web.UI.CalendarClickEventArgs`

The event arguments. 

### dateClick

The dateClick event is fired when the user clicks on a date in the day matrix or presses the ENTER key while a date has focus.

#### Event Data

##### sender `Telerik.Web.UI.RadCalendar`

The instance of the RadCalendar raised the event.

##### args `Telerik.Web.UI.CalendarDateClickEventArgs`

The event arguments. 

### dateSelected

The dateSelected event is fired immediately after the value of the control's selection has changed. 

#### Event Data

##### sender `Telerik.Web.UI.RadCalendar`

The instance of the RadCalendar raised the event.

##### args `Telerik.Web.UI.CalendarDateSelectedEventArgs`

The event arguments.

### dateSelecting

The dateSelecting event is fired immediately before the selected dates collection is updated to reflect the selection or deselection of a date.

#### Event Data

##### sender `Telerik.Web.UI.RadCalendar`

The instance of the RadCalendar raised the event.

##### args `Telerik.Web.UI.CalendarDateSelectingEventArgs`

The event arguments.

### dayRender

The dayRender event is fired for every calendar day cell when the calendar is rendered as a result of client-side navigation.

#### Event Data

##### sender `Telerik.Web.UI.RadCalendar`

The instance of the RadCalendar raised the event.

##### args `Telerik.Web.UI.CalendarDayRenderEventArgs`

The event arguments.

### init

The init event is fired when the calendar is first constructed.

#### Event Data

##### sender `Telerik.Web.UI.RadCalendar`

The instance of the RadCalendar raised the event.

##### args `Sys.EventArgs`

The event arguments.

### load

The load event is fired when the calendar is loaded on the client. 

#### Event Data

##### sender `Telerik.Web.UI.RadCalendar`

The instance of the RadCalendar raised the event.

##### args `Sys.EventArgs`

The event arguments.

### rowHeaderClick

The rowHeaderClick event is fired when the user is about to select a row of dates by clicking on a row header.

#### Event Data

##### sender `Telerik.Web.UI.RadCalendar`

The instance of the RadCalendar raised the event.

##### args `Telerik.Web.UI.CalendarClickEventArgs`

The event arguments.

### viewSelectorClick

The viewSelectorClick event is fired when the user is about to select an entire view of dates by clicking on the view selector. The event occurs only if the EnableViewSelector property is set to true.

#### Event Data

##### sender `Telerik.Web.UI.RadCalendar`

The instance of the RadCalendar raised the event.

##### args `Telerik.Web.UI.CalendarClickEventArgs`

The event arguments.

