---
title: Telerik.Web.UI.RadRadioButtonList
page_title:
description:
---

# Telerik.Web.UI.RadRadioButtonList : Telerik.Web.UI.RadWebControl 

## Methods

### get_visible

Gets the current visibility state of the radio button list control.

#### Parameters

#### Returns

`Boolean` The current visibility state of the radio button list control.

### set_visible

Sets the current visibility state of the radio button list control.

#### Parameters

##### value `Boolean`

The new visibility state of the radio button list control.

#### Returns

`None` 

### get_enabled

Gets whether the radio button list control is enabled.

#### Parameters

#### Returns

`Boolean` A value that indicates whether the radio button list control is enabled.

### set_enabled

Specifies if the radio button list control is enabled.

#### Parameters

##### value `Boolean`

A value that determines whether the radio button list control will be enabled.

#### Returns

`None` 

### get_selectedIndex

Gets the index of the selected item of the radio button list control.

#### Parameters

#### Returns

`Number` The selected index.

### set_selectedIndex

Sets the index of the selected item of the radio button list control.

#### Parameters

##### value `Number`

The index of the item that will be selected.

#### Returns

`None`

### get_items

Gets a collection of the items.

#### Parameters

#### Returns

`Telerik.Web.UI.RadioButtonListItem[]` The collection of items.

### get_toolTip

Gets the text displayed when the mouse pointer hovers over the radio button list control.

#### Parameters

#### Returns

`String` The current text of the tooltip.

### set_toolTip

Sets the text displayed when the mouse pointer hovers over the radio button list control.

#### Parameters

##### value `String`

The text that will appear in the tooltip.

#### Returns

`None`

### get_width

Gets the width of the radio button list control.

#### Parameters

#### Returns

`Number` The width of the radio button list control.

### set_width

Sets the width of the radio button list control.

#### Parameters

##### value `Number`

The width that will be applied to the radio button list control.

#### Returns

`None`

### get_height

Gets the height of the radio button list control.

#### Parameters

#### Returns

`Number` The height of the radio button list control.

### set_height

Sets the height of the radio button list control.

#### Parameters

##### value `Number`

The height that will be applied to the radio button list control.

#### Returns

`None`

### get_validationGroup

Gets the name of validation group to which the radio button list control is assigned. 

#### Parameters

#### Returns

`String` The current validation group name.

### set_validationGroup

Sets the name of validation group to which the radio button list control is assigned. 

#### Parameters

##### value `String`

The name of the validation group that will be assigned.

#### Returns

`None`

## Events

### selectedIndexChanging 

The selectedIndexChanging event is fired before the selected item is changed. You can cancel it.

#### Event Data

#####  sender `Telerik.Web.UI.RadRadioButtonList`

The instance of the RadRadioButtonList that raised the event.

##### args `Telerik.Web.UI.RadioButtonListCancelEventArgs`

The event arguments.  

### selectedIndexChanged 

The selectedIndexChanged event is fired when the selected item is changed. It is subsequent to the selectedIndexChanging event.

#### Event Data

#####  sender `Telerik.Web.UI.RadRadioButtonList`

The instance of the RadRadioButtonList that raised the event.

##### args `Telerik.Web.UI.RadioButtonListSelectedIndexChangedEventArgs`

The event arguments.  

### load 

The load event is fired when the radio button list is initialized.

#### Event Data

#####  sender `Telerik.Web.UI.RadRadioButtonList`

The instance of the RadRadioButtonList that raised the event.

##### args `Sys.EventArgs`

The event arguments.  

### itemCheckedChanging 

The itemCheckedChanging event is fired before selected state of an item is changed. It is cancellable.

#### Event Data

#####  sender `Telerik.Web.UI.RadRadioButtonList`

The instance of the RadRadioButtonList that raised the event.

##### args `Telerik.Web.UI.RadioButtonListCancelEventArgs`

The event arguments. 

### itemCheckedChanged

The itemCheckedChanged event is fired when the selected state of an item is changed. It is subsequent to the itemCheckedChanging event.

#### Event Data

#####  sender `Telerik.Web.UI.RadRadioButtonList`

The instance of the RadRadioButtonList that raised the event.

##### args `Telerik.Web.UI.RadioButtonListEventArgs`

The event arguments.   

### itemClicking

The itemClicking event is fired before an item in the list is clicked. It is cancellable.

#### Event Data

#####  sender `Telerik.Web.UI.RadRadioButtonList`

The instance of the RadRadioButtonList that raised the event.

##### args `Telerik.Web.UI.RadioButtonListCancelEventArgs`

The event arguments. 

### itemClicked

The itemClicked event is fired when an item in the list is clicked. It is subsequent to the itemClicking event.

#### Event Data

#####  sender `Telerik.Web.UI.RadRadioButtonList`

The instance of the RadRadioButtonList that raised the event.

##### args `Telerik.Web.UI.RadioButtonListEventArgs`

The event arguments. 

### itemLoad

The itemLoad event is fired when an item in the list is initialized. 

#### Event Data

#####  sender `Telerik.Web.UI.RadRadioButtonList`

The instance of the RadRadioButtonList that raised the event.

##### args `Telerik.Web.UI.RadioButtonListEventArgs`

The event arguments. 

### itemMouseOver

The itemMouseOver event is fired when the mouse hovers over an item in the list. 

#### Event Data

#####  sender `Telerik.Web.UI.RadRadioButtonList`

The instance of the RadRadioButtonList that raised the event.

##### args `Telerik.Web.UI.RadioButtonListEventArgs`

The event arguments. 

### itemMouseOut

The itemMouseOut event is fired when the mouse leaves a radio button list item. 

#### Event Data

#####  sender `Telerik.Web.UI.RadRadioButtonList`

The instance of the RadRadioButtonList that raised the event.

##### args `Telerik.Web.UI.RadioButtonListEventArgs`

The event arguments. 

