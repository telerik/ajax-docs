---
title: Telerik.Web.UI.RadDatePicker
page_title: Client-side API Reference
description: Telerik.Web.UI.RadDatePicker
slug: Telerik.Web.UI.RadDatePicker
---

# Telerik.Web.UI.RadDatePicker : Telerik.Web.UI.RadWebControl 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadDatePicker]({%slug Telerik.Web.UI.RadDatePicker%})*

## Methods

###  clear

Clears the selection, leaving the value as unassigned.

#### Parameters

#### Returns

`None` 

###  getElementDimensions

Returns the dimensions of the specified child element.

#### Parameters

##### element `Object`

#### Returns

`Array` 

###  getElementPosition

Returns the x and y coordinates of the specified child element.

#### Parameters

##### el `Object`

#### Returns

`Array` 

###  get_calendar

Returns a reference to the client object for the popup calendar.

#### Parameters

#### Returns

`Telerik.Web.UI.RadCalendar` 

###  get_dateInput

Returns a reference to the client object for the input area. For details on using this object, see the RadInput documentation.

#### Parameters

#### Returns

`Telerik.Web.UI.RadDateInput` 

###  get_enableScreenBoundaryDetection

Returns whether the screen boundary detection will be applied.

#### Parameters

#### Returns

`Boolean` 

###  get_enabled

Returns true if the control is enabled

#### Parameters

#### Returns

`Boolean` 

###  get_focusedDate

Returns the date that determines the view the popup calendar uses when the value of the date picker is not assigned.

#### Parameters

#### Returns

`Date` 

###  get_maxDate

Returns the latest date the user can select.

#### Parameters

#### Returns

`Date` 

###  get_maxDateStr

Returns the latest date the user can select as string.

#### Parameters

#### Returns

`String` 

###  get_minDate

Returns the earliest date the user can select.

#### Parameters

#### Returns

`Date` 

###  get_minDateStr

Returns the earliest date the user can select as string.

#### Parameters

#### Returns

`String` 

###  get_popupButton

Returns the DOM element for the calendar popup button.

#### Parameters

#### Returns

`Object` 

###  get_popupContainer

Returns the DOM element for the DIV element that contains the popup calendar.

#### Parameters

#### Returns

`Object` 

###  get_popupDirection

Set the popup direction

#### Parameters

#### Returns

`String` 

###  get_selectedDate

Returns the selected date, or null if no date is selected.

#### Parameters

#### Returns

`Date` 

###  get_showPopupOnFocus

Returns whether the popup control (Calendar or TimeView) will be displayed when the DateInput textbox is focused.

#### Parameters

#### Returns

`Boolean` 

###  get_textBox

Returns the DOM element for the text box that implements the input area.

#### Parameters

#### Returns

`Object` 

###  get_visible

Returns whether the control is visible

#### Parameters

#### Returns

`Boolean` 

###  hidePopup

Hides the popup calendar if it is showing.

#### Parameters

#### Returns

`None` 

###  isEmpty

Returns true if the value is unassigned.

#### Parameters

#### Returns

`None` 

###  isPopupVisible

Returns whether the popup calendar is visible.

#### Parameters

#### Returns

`None` 

###  repaint

Repaints the control

#### Parameters

#### Returns

`None` 

###  set_calendar

#### Parameters

#### Returns

`None` 

###  set_dateInput

#### Parameters

#### Returns

`None` 

###  set_enableScreenBoundaryDetection

Sets whether the screen boundary detection will be applied.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

###  set_enabled

Enables/disables the control

#### Parameters

##### value `Boolean`

#### Returns

`None` 

###  set_focusedDate

Sets the date that determines the view the popup calendar uses when the value of the date picker is not assigned.

#### Parameters

##### value `Date`

#### Returns

`None` 

###  set_maxDate

Sets the latest date the user can select.

#### Parameters

##### value `Date`

#### Returns

`None` 

###  set_minDate

Sets the earliest date the user can select.

#### Parameters

##### value `Date`

#### Returns

`None` 

###  set_popupDirection

Returns the popup direction

#### Parameters

##### value `String`

#### Returns

`None` 

###  set_selectedDate

Assigns the value of the date picker.

#### Parameters

##### newDate `Date`

#### Returns

`None` 

###  set_showPopupOnFocus

Sets whether the popup control (Calendar or TimeView) will be displayed when the DateInput textbox is focused.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

###  set_visible

Shows/hides the control

#### Parameters

##### value `Boolean`

#### Returns

`None` 

###  showPopup

Displays the popup calendar at the specified coordinates. If the two parameters are omitted, the popup appears below the input area.

#### Parameters

##### x `Number`

##### y `Number`

#### Returns

`None` 

###  togglePopup

Toggles the visible state of the popup calendar.

#### Parameters

#### Returns

`None` 


## Events

### dateSelected

The dateSelected event is fired immediately after the value of the control's selection has changed. 

#### Event Data

##### sender `Telerik.Web.UI.RadDatePicker`

The instance of the RadDatePicker raised the event.

##### args `Telerik.Web.UI.DateInputValueChangedEventArgs`

The event arguments.

### popupOpening

The popupOpening event is fired immediately before a popup calendar or time view is initialized to the current selection in the input area and then displayed.

#### Event Data

##### sender `Telerik.Web.UI.RadDatePicker`

The instance of the RadDatePicker raised the event.

##### args `Telerik.Web.UI.DatePickerPopupOpeningEventArgs`

The event arguments.

### popupClosing

The popupClosing event is fired immediately before a popup calendar or time view is closed.

#### Event Data

##### sender `Telerik.Web.UI.RadDatePicker`

The instance of the RadDatePicker raised the event.

##### args `Telerik.Web.UI.DatePickerPopupClosingEventArgs`

The event arguments.
