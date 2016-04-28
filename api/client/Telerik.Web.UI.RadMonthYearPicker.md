---
title: Telerik.Web.UI.RadMonthYearPicker
page_title: Client-side API Reference
description: Telerik.Web.UI.RadMonthYearPicker
slug: Telerik.Web.UI.RadMonthYearPicker
---

# Telerik.Web.UI.RadMonthYearPicker : Telerik.Web.UI.RadWebControl 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadMonthYearPicker]({%slug Telerik.Web.UI.RadMonthYearPicker%})*


## Methods

###  clear

Clears the selection, leaving the value as unassigned.

#### Parameters

#### Returns

`None` 

### get_culture

Returns the culture used by RadDateInput to format the date.

#### Parameters

#### Returns

`String` 

### get_dateInput

Returns a reference to the client object for the input area. For details on using this object, see the RadInput documentation.

#### Parameters

#### Returns

`Telerik.Web.UI.RadDateInput` 

### get_enabled

Returns true if the control is enabled

#### Parameters

#### Returns

`Boolean` 

### get_enableScreenBoundaryDetection

Returns whether the screen boundary detection will be applied.

#### Parameters

#### Returns

`Boolean` 

### get_focusedDate

Returns the date that determines the view the popup calendar uses when the value of the date picker is not assigned.

#### Parameters

#### Returns

`Date` 

### get_maxDate

Returns the latest date the user can select.

#### Parameters

#### Returns

`Date` 

### get_maxDateStr

Returns the latest date the user can select as string.

#### Parameters

#### Returns

`String` 

### get_minDate

Returns the earliest date the user can select.

#### Parameters

#### Returns

`Date` 

### get_minDateStr

Returns the earliest date the user can select as string.

#### Parameters

#### Returns

`String` 

### get_monthYearNavigationSettings

Returns an array with the fast navigation settings. The settings are, in order, TodayButtonCaption, OkButtonCaption, CancelButtonCaption, DateIsOutOfRangeMessage, EnableTodayButtonSelection.

#### Parameters

#### Returns

`Array` 

### get_popupButton

Returns the DOM element for the calendar popup button.

#### Parameters

#### Returns

`Object` 

### get_popupDirection

Set the popup direction

#### Parameters

#### Returns

`String` 

### get_selectedDate

Returns the selected date, or null if no date is selected.

#### Parameters

#### Returns

`Date` 

### get_showPopupOnFocus

Returns whether the popup control (Calendar or TimeView) will be displayed when the DateInput textbox is focused.

#### Parameters

#### Returns

`Boolean` 

### get_skin

Returns the real skin name for the control user interface. If Skin is not set, returns "Default".

#### Parameters

#### Returns

`String` 

### get_stylesHash

Returns object containing all styles applied to the control.

#### Parameters

#### Returns

`Object` 

### get_textBox

Returns the DOM element for the text box that implements the input area.

#### Parameters

#### Returns

`Object` 

### get_visible

Returns whether the control is visible

#### Parameters

#### Returns

`Boolean` 

### getElementDimensions

Returns the dimensions of the specified child element.

#### Parameters

##### element `Object`

#### Returns

`Array` 

### hidePopup

Hides the popup calendar if it is showing.

#### Parameters

#### Returns

`None` 

### isEmpty

Returns true if the value is unassigned.

#### Parameters

#### Returns

`None` 

### isPopupVisible

Returns whether the popup calendar is visible.

#### Parameters

#### Returns

`None` 

### navigateToDate

Sets whether the screen boundary detection will be applied.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### raise_dateSelected

Raise the dateSelected event.

#### Parameters

##### handler `Function`

#### Returns

`None` 

### raise_monthSelected

Raise the monthSelected event.

#### Parameters

##### handler `Function`

#### Returns

`None` 

### raise_popupClosing

Raise the popupClosing event.

#### Parameters

##### handler `Function`

#### Returns

`None` 

### raise_popupOpening

Raise the popupOpening event.

#### Parameters

##### handler `Function`

#### Returns

`None` 

### raise_viewChanged

Raise the viewChanged event.

#### Parameters

##### handler `Function`

#### Returns

`None` 

### raise_yearSelected

Raise the yearSelected event.

#### Parameters

##### handler `Function`

#### Returns

`None` 

### repaint

Repaints the control

#### Parameters

#### Returns

`None` 

### set_dateInput

#### Parameters

#### Returns

`None` 

### set_enabled

Enables/disables the control

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_enableScreenBoundaryDetection

Sets whether the screen boundary detection will be applied.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_focusedDate

Sets the date that determines the view the popup calendar uses when the value of the date picker is not assigned.

#### Parameters

##### value `Date`

#### Returns

`None` 

### set_maxDate

Sets the latest date the user can select.

#### Parameters

##### value `Date`

#### Returns

`None` 

### set_minDate

Sets the earliest date the user can select.

#### Parameters

##### value `Date`

#### Returns

`None` 

### set_monthYearNavigationSettings

Sets the fast navigation settings. The settings are, in order, TodayButtonCaption, OkButtonCaption, CancelButtonCaption, DateIsOutOfRangeMessage, EnableTodayButtonSelection. Changes you make to these settings have an effect only if you make them before the first time the month/year navigation popup is displayed.

#### Parameters

##### value `Array`

#### Returns

`None` 

### set_popupDirection

Returns the popup direction

#### Parameters

##### value `String`

#### Returns

`None` 

### set_selectedDate

Assigns the value of the date picker.

#### Parameters

##### newDate `Date`

#### Returns

`None` 

### set_showPopupOnFocus

Sets whether the popup control (Calendar or TimeView) will be displayed when the DateInput textbox is focused.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_visible

Shows/hides the control

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### showPopup

Displays the popup calendar at the specified coordinates. If the two parameters are omitted, the popup appears below the input area.

#### Parameters

##### x `Number`

##### y `Number`

#### Returns

`None` 

### togglePopup

Toggles the visible state of the popup calendar.

#### Parameters

#### Returns

`None` 



## Events

### dateSelected

The dateSelected event is fired immediately after the value of the control's selection has changed. 

#### Event Data

##### sender `Telerik.Web.UI.RadMonthYearPicker`

The instance of the RadMonthYearPicker raised the event.

##### args `Telerik.Web.UI.DateInputValueChangedEventArgs`

The event arguments.

### monthSelected

The monthSelected event is fired immediately after a user select a month cell in the MonthYearView.

#### Event Data

##### sender `Telerik.Web.UI.RadMonthYearPicker`

The instance of the RadMonthYearPicker raised the event.

##### args `Telerik.Web.UI.MonthYearPickerMonthSelectedEventArgs`

The event arguments.

### popupClosing

The popupClosing event is fired immediately before a popup calendar or time view is closed.

#### Event Data

##### sender `Telerik.Web.UI.RadMonthYearPicker`

The instance of the RadMonthYearPicker raised the event.

##### args `Telerik.Web.UI.MonthYearPickerPopupClosingEventArgs`

The event arguments.

### popupOpening

The popupOpening event is fired immediately before a popup calendar or time view is initialized to the current selection in the input area and then displayed.

#### Event Data

##### sender `Telerik.Web.UI.RadMonthYearPicker`

The instance of the RadMonthYearPicker raised the event.

##### args `Telerik.Web.UI.MonthYearPickerPopupOpeningEventArgs`

The event arguments.

### viewChanged

The viewChanged event is fired when the MonthYearView navigates to a new view, before the viewable area rendered by the MonthYearView is changed.

#### Event Data

##### sender `Telerik.Web.UI.RadMonthYearPicker`

The instance of the RadMonthYearPicker raised the event.

##### args `Telerik.Web.UI.MonthYearPickerViewChangedEventArgs`

The event arguments.

### yearSelected

The yearSelected event is fired immediately after a user select an year cell in the MonthYearView.

#### Event Data

##### sender `Telerik.Web.UI.RadMonthYearPicker`

The instance of the RadMonthYearPicker raised the event.

##### args `Telerik.Web.UI.MonthYearPickerMonthSelectedEventArgs`

The event arguments.

