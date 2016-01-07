---
title: Telerik.Web.UI.RadDateTimePicker
page_title: Client-side API Reference
description: Telerik.Web.UI.RadDateTimePicker
slug: Telerik.Web.UI.RadDateTimePicker
---

# Telerik.Web.UI.RadDateTimePicker : Telerik.Web.UI.RadDatePicker 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadDatePicker]({%slug Telerik.Web.UI.RadDatePicker%})
* *[Telerik.Web.UI.RadDateTimePicker]({%slug Telerik.Web.UI.RadDateTimePicker%})*

## Methods

###  GetTimePopupContainer

Returns the DOM element for the DIV element that contains the popup time view.

#### Parameters

#### Returns

`Object` 

###  get_autoPostBackControl

Gets a value indicating whether a postback to the server automatically occurs when the user changes the list selection.

#### Parameters

#### Returns

`Boolean` 

###  get_timePopupButton

Returns the DOM element for the time popup button.

#### Parameters

#### Returns

`Object` 

###  get_timePopupContainer

Returns the DOM element for the DIV element that contains the popup time view.

#### Parameters

#### Returns

`Object` 

###  get_timeView

Returns a reference to the client object for the popup time view.

#### Parameters

#### Returns

`Telerik.Web.UI.RadTimeView` 

###  hideTimePopup

Hides the popup time view if it is showing.

#### Parameters

#### Returns

`None` 

###  isTimePopupVisible

Returns whether the popup time view is visible.

#### Parameters

#### Returns

`Boolean` 

###  set_autoPostBackControl

Sets a value indicating whether a postback to the server automatically occurs when the user changes the list selection.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

###  set_enabled

Enables/disabled the control.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

###  set_timeView

#### Parameters

#### Returns

`None` 

###  showTimePopup

Displays the popup time view at the specified coordinates. If the two parameters are omitted, the popup appears below the input area.

#### Parameters

##### x `Number`

##### y `Number`

#### Returns

`None` 

###  toggleTimePopup

Toggles the visible state of the popup time view.

#### Parameters

#### Returns

`None` 

## Events

### dateSelected

The dateSelected event is fired immediately after the value of the control's selection has changed. 

#### Event Data

##### sender `Telerik.Web.UI.RadDateTimePicker`

The instance of the RadDateTimePicker raised the event.

##### args `Telerik.Web.UI.DateInputValueChangedEventArgs`

The event arguments.

### popupOpening

The popupOpening event is fired immediately before a popup calendar or time view is initialized to the current selection in the input area and then displayed.

#### Event Data

##### sender `Telerik.Web.UI.RadDateTimePicker`

The instance of the RadDateTimePicker raised the event.

##### args `Telerik.Web.UI.DatePickerPopupOpeningEventArgs`

The event arguments.

### popupClosing

The popupClosing event is fired immediately before a popup calendar or time view is closed.

#### Event Data

##### sender `Telerik.Web.UI.RadDateTimePicker`

The instance of the RadDateTimePicker raised the event.

##### args `Telerik.Web.UI.DatePickerPopupClosingEventArgs`

The event arguments.
