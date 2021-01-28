---
title: Telerik.Web.UI.RadMultiColumnComboBox
description: Telerik.Web.UI.RadMultiColumnComboBox
slug: Telerik.Web.UI.RadMultiColumnComboBox
---

# Telerik.Web.UI.RadMultiColumnComboBox : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadMultiColumnComboBox]({%slug Telerik.Web.UI.RadMultiColumnComboBox%})*


## Methods

### close

Closes the dropdown.

#### Returns

`None`

### destroy

Destroys the underlying Kendo widget (calls its destroy method). Once you call it, you will not be able to use the widget or control.

#### Returns

`None`

### focus

Focuses the input.

#### Returns

`None`

### get_dataItem

Returns the data item for the corresponding index. If no index is provided, the data item for the selected item will be returned.

#### Parameters

##### index `Number`

The item index whose data item you want

#### Returns

`Object`

### get_filter

Returns the filtering method used to determine the suggestions for the current value.

#### Returns

`String`

### get_items

Returns an array of the DOM `<li>` elements, which correspond to the data items from the Kendo UI DataSource of the widget.

#### Returns

`Array`

### get_kendoWidget

Returns a reference to the underlying Kendo MultiColumnComboBox widget.

#### Returns

`Object`

### get_readOnly

Returns whether the input is readonly and typing is not allowed.

#### Returns

`Boolean`

### get_selected

Returns the index of the selected item. If custom value is entered, returns `-1`.

#### Returns

`Number`

### get_text

Returns the current text.

#### Returns

`String`

### get_value

Returns the current value.

#### Returns

`String`

### open

Opens the dropdown.

#### Returns

`None`

### refresh

Refresh the popup by rendering all items again.

#### Returns

`None`

### search

Searches the data source for the provided value and displays any matches as suggestions.

#### Parameters

##### searchString `String`

the value to search for

#### Returns

`None`

### set_dataSource

 Sets the dataSource of the widget and rebinds it. Can be an actual kendo.data.DataSource object or an array of object literals.

#### Parameters

##### newDataSource `Object`

#### Returns

`None`

### set_enabled

Enables or disables the widget if you pass `true` or `false` respectively.

#### Parameters

##### toEnable `Boolean`

Indicates whether the control will be enabled.

#### Returns

`None`

### set_filter

Sets the filter setting of the underlying Kendo widget. Can be `startswith`, `endswith`, `eq` and `contains`. Pass `none` to disable filtering.

#### Parameters

##### filterSetting `String`

The filter method to be used. Can be `startswith`, `endswith`, `eq` and `contains`. Pass `none` to disable filtering.

#### Returns

`None`

### set_readOnly

Sets whether the input is readonly and typing is disabled.

#### Parameters

##### toMakeReadOnly `Boolean`

Indicates whether the text input will be read only and so - typing will be disabled.

#### Returns

`None`

### set_selected

Sets the new selected item. See the underlying Kendo widget's select method for more details on the possible arguments you can pass and its behavior.

#### Parameters

##### itemToSelect `Object`

A string, DOM element or jQuery object which represents the item to be selected. A string is treated as a jQuery selector. A number representing the index of the item or function predicate which returns the correct data item.

#### Returns

`None`

### set_text

Sets the text. See the underlying Kendo Widget's text method for more details on its behavior.

#### Parameters

##### newText `String`

The text to set.

#### Returns

`None`

### set_value

Sets the value. See the underlying Kendo Widget's value method for more details on its behavior.

#### Parameters

##### newValue `String`

The value to set.

#### Returns

`None`

### suggest

Sets the value of the widget to the specified argument and visually selects the text.

#### Parameters

##### stringToSuggest `String`

Characters to force a suggestion.

#### Returns

`None`

### toggle

Opens or closes the dropdown depending on its current state.

#### Returns

`None`

## Events

### onCascade

Fired when the value of the widget is changed via API or user interaction. 

#### Event Data

#####  sender `Telerik.Web.UI.RadMultiColumnComboBox`

The instance of the RadMultiColumnComboBox that raised the event.

##### args `Sys.CancelEventArgs`

Event arguments.

### onChange

Fired when the value of the widget is changed by the user.

#### Event Data

#####  sender `Telerik.Web.UI.RadMultiColumnComboBox`

The instance of the RadMultiColumnComboBox that raised the event.

##### args `Sys.EventArgs`

Event arguments.

### onClose

Fired when the popup of the widget is closed.

#### Event Data

#####  sender `Telerik.Web.UI.RadMultiColumnComboBox`

The instance of the RadMultiColumnComboBox that raised the event.

##### args `Sys.CancelEventArgs`

Event arguments.

### onDataBound

Fired when the widget is bound to data from its data source. 

#### Event Data

#####  sender `Telerik.Web.UI.RadMultiColumnComboBox`

The instance of the RadMultiColumnComboBox that raised the event.

##### args `Sys.EventArgs`

Event arguments.

### onInitialize

Fired just before the RadMultiColumnComboBox client-side object and Kendo Widget is initialized. 

#### Event Data

#####  sender `Telerik.Web.UI.RadMultiColumnComboBox`

The instance of the RadMultiColumnComboBox that raised the event.

##### args `Sys.EventArgs`

Event arguments.

### onFiltering

Fired when the widget is about to filter the data source.

#### Event Data

#####  sender `Telerik.Web.UI.RadMultiColumnComboBox`

The instance of the RadMultiColumnComboBox that raised the event.

##### args `Sys.CancelEventArgs`

Event arguments.

### onLoad

Fired when RadMultiColumnComboBox is initialized.

#### Event Data

#####  sender `Telerik.Web.UI.RadMultiColumnComboBox`

The instance of the RadMultiColumnComboBox that raised the event.

##### args `Sys.EventArgs`

Event arguments.

### onOpen

Fired when the popup of the widget is opened by the user. 

#### Event Data

#####  sender `Telerik.Web.UI.RadMultiColumnComboBox`

The instance of the RadMultiColumnComboBox that raised the event.

##### args `Sys.CancelEventArgs`

Event arguments.

### onSelect

Fired when an item from the popup is selected by the user either with mouse/tap or with keyboard navigation. 

#### Event Data

#####  sender `Telerik.Web.UI.RadMultiColumnComboBox`

The instance of the RadMultiColumnComboBox that raised the event.

##### args `Sys.CancelEventArgs`

Event arguments.

