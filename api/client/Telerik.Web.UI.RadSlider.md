---
title: Telerik.Web.UI.RadSlider
page_title: Client-side API Reference
description: Telerik.Web.UI.RadSlider
slug: Telerik.Web.UI.RadSlider
---

# Telerik.Web.UI.RadSlider : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadSlider]({%slug Telerik.Web.UI.RadSlider%})*

## Methods

### set_minimumValue

Sets the current minimum value that can be selected with slider

#### Parameters

##### value `Number`

The minimum value to be set

#### Returns

`None` 

### set_showDragHandle

Sets a bool value indicating whether the drag handle is displayed

#### Parameters

##### value `Boolean`

The bool value indicating whether the drag handle is displayed

#### Returns

`None` 

### get_maximumValue

Gets the current maximum value that can be selected with slider

#### Parameters

#### Returns

`Number` The current maximum value that can be selected with the slider

### addSliderItem

Adds a slider item to the slider. Adds only if ItemType="Items". If index not specified, adds the item to the end of the slider

#### Parameters

##### item `Object`

The item object describing the item to add. Should contain a property 

##### index `Number`

The index

#### Returns

`None` 

### get_isSelectionRangeEnabled

Gets the bool value indicating whether the slider has two drag handles (Selection start handle -- Selection end handle). This way the user can select a specific range of items/values

#### Parameters

#### Returns

`Boolean` A value

### get_selectedItem

Gets the currently selected item of the slider

#### Parameters

#### Returns

`Telerik.Web.UI.RadSliderItem` The currently selected item of the slider

### get_isDirectionReversed

Gets the bool value, indicating whether the direction of the slider is reversed

#### Parameters

#### Returns

`Boolean` The bool value

### get_clientDataSourceID

ClientID

#### Parameters

#### Returns

`None` 

### set_clientDataSource

RadClientDataSource

#### Parameters

#### Returns

`None` 

### set_largeChange

Sets the delta with which the value will change when user clicks on the track

#### Parameters

##### value `Number`

The delta with which the value will change when the user clicks on the track

#### Returns

`None` 

### get_itemBinding

{ textField: "", valueField: "", toolTipField: "" }

#### Parameters

#### Returns

`None` 

### get_selectedValue

Gets the value of the currently selected item

#### Parameters

#### Returns

`String` The value of the currently selected item

### set_smallChange

Sets the step with which the slider value will change

#### Parameters

##### value `Number`

The step with which the slider value will change

#### Returns

`None` 

### get_showDragHandle

Gets the bool value indicating whether the drag handle is displayed

#### Parameters

#### Returns

`Boolean` The bool value indicating whether the drag handle is displayed

### set_orientation

Sets the current orientation of the slider control - horizontal or vertical

#### Parameters

##### value `Telerik.Web.UI.Orientation`

The orientaion to be set

#### Returns

`None` 

### get_largeChange

Gets the delta with which the value will change when user clicks on the track

#### Parameters

#### Returns

`Number` The delta with which the value will change when the user clicks on the track

### set_isDirectionReversed

Sets the bool value, indicating whether the direction of the slider is reversed

#### Parameters

##### value `Boolean`

The bool value

#### Returns

`None` 

### set_clientDataSourceID

ClientID

#### Parameters

#### Returns

`None` 

### get_animationDuration

Gets the animation duration in milliseconds

#### Parameters

#### Returns

`Number` The number of miliseconds the animation will last

### get_clientDataSource

RadClientDataSource

#### Parameters

#### Returns

`None` 

### get_minimumValue

Gets the current minimum value that can be selected with slider

#### Parameters

#### Returns

`Number` The current minimum value that can be selected with slider

### get_itemType

Gets the [Telerik.Web.UI.SliderItemType] type of the items in the slider control

#### Parameters

#### Returns

`Telerik.Web.UI.SliderItemType` The type of the items in the slider control

### set_value

Sets the current value of the slider control

#### Parameters

##### value `Number`

The value to be set

#### Returns

`None` 

### get_height

Gets the height of the slider

#### Parameters

#### Returns

`Number` The height of the slider

### get_showDecreaseHandle

Gets the bool value indicating whether the decrease handle is displayed

#### Parameters

#### Returns

`Boolean` The bool value indicatiing whether the decrease handle is displayed

### get_childListElement

Gets a reference to the UL element containing the slider items (LI elements)

#### Parameters

#### Returns

`Object` The UL element containing the slider items 

### get_smallChange

Gets the step with which the slider value will change

#### Parameters

#### Returns

`Number` The step with which the slider value will change

### set_selectionEnd

Sets the ending value of the range when IsSelectionRangeEnabled is set to true

#### Parameters

##### value `Number`

The ending value to be set

#### Returns

`None` 

### get_orientation

Gets the current orientation of the slider control - horizontal or vertical

#### Parameters

#### Returns

`Telerik.Web.UI.Orientation` The current orienation of the slider control

### get_selectionEnd

Gets the ending value of the range when IsSelectionRangeEnabled is set to true

#### Parameters

#### Returns

`Number` The ending value of the range

### set_showIncreaseHandle

Sets a bool value indicating whether the increase handle is displayed

#### Parameters

##### value `Boolean`

The bool value indicating whether the increase handle is displayed

#### Returns

`None` 

### get_activeHandle

Gets a reference to the HTML element of the currently active drag handle

#### Parameters

#### Returns

`Object` The HTML element of the currently active drag handle

### get_value

Gets the current value of the slider control

#### Parameters

#### Returns

`Number` The current value of the slider

### get_selectedItems

Gets an array of the currently selected items

#### Parameters

#### Returns

`Array` An array of currently selected items

### removeSliderItem

Removes a slider item to the slider. Removes only if ItemType="Items". If index not specified, removes the item from the end of the slider.

#### Parameters

##### index `Number`

The index of the item to remove. If missing

#### Returns

`None` 

### set_selectionStart

Sets the starting value of the range, when IsSelectionRangeEnabled is set to true

#### Parameters

##### value `Number`

The starting value to be set

#### Returns

`None` 

### set_height

Sets a height to the slider

#### Parameters

##### value `Number`

The height of the slider to be set

#### Returns

`None` 

### get_dragText

Gets the tooltip for the drag handle

#### Parameters

#### Returns

`String` The tooltip for the drag handle

### set_dragText

Sets the tooltip for the drag handle

#### Parameters

##### value `String`

The tooltip for the drag handle

#### Returns

`None` 

### set_dataSource

ItemBinding

#### Parameters

#### Returns

`None` 

### get_enabled

Gets the bool value indicating whether the slider is enabled

#### Parameters

#### Returns

`Boolean` The bool value indicating whether the slider is enabled or not

### get_dragHandles

Gets the array containing the (two) drag handles of the slider control

#### Parameters

#### Returns

`Array` The array containing the 

### get_dataSource

Gets the client-side data source object that is data-bound to the slider.

#### Parameters

#### Returns

`None` 

### set_isSelectionRangeEnabled

Sets a value, indicating whether the slider has two drag handles (Selection start handle -- Selection end handle). This way the user can select a specific range of items/values

#### Parameters

##### value `Boolean`

Enable

#### Returns

`None` 

### get_width

Gets the width of the slider

#### Parameters

#### Returns

`Number` The width of the slider

### set_animationDuration

Sets an animation duration in milliseconds

#### Parameters

##### value `Number`

Number of milliseconds

#### Returns

`None` 

### get_showIncreaseHandle

Gets the bool value indicating whether the increase handle is displayed

#### Parameters

#### Returns

`Boolean` The bool value indicating whether the increase handle is displayed

### set_enabled

Enables/Disables the slider

#### Parameters

##### value `Boolean`

Enable

#### Returns

`None` 

### set_trackMouseWheel

Sets a bool value indicating whether the mouse wheel will change the value of the slider

#### Parameters

##### value `Boolean`

The bool value indicating whether the mouse wheel will change the value of the slider 

#### Returns

`None` 

### get_selectionStart

Gets the starting value of the range, when IsSelectionRangeEnabled is set to true

#### Parameters

#### Returns

`Number` The starting value of the range

### set_liveDrag

Sets the bool value indicating whether the value of the slider will change while the drag hanle is moving, or when the drag handle is released

#### Parameters

##### value `Boolean`

The value indicating whether the value of the slider will change while the drag hanle is moving

#### Returns

`None` 

### set_trackPosition

Sets the position of the track

#### Parameters

##### value `Telerik.Web.UI.SliderTrackPosition`

The position of the track

#### Returns

`None` 

### get_skin

Gets the skin name of the slider

#### Parameters

#### Returns

`String` The skin name of the slider

### get_trackPosition

Gets the [Telerik.Web.UI.SliderTrackPosition] position of the track

#### Parameters

#### Returns

`Telerik.Web.UI.SliderTrackPosition`  The position of the track

### get_visibleItems

Gets an array of all the visible items of the slider

#### Parameters

#### Returns

`Array` The array containing the visible items of the slider

### repaint

Repaints the slider control and forces it to recalculate the size of its elements. Use this method when the control is in an intially hidden element

#### Parameters

#### Returns

`None` 

### get_items

Gets an array of all the items of the slider

#### Parameters

#### Returns

`Array` The array containing the items of the slider

### dataBind

Initiates the data binding to a client data source. The data source needs to be set before this function is called.

#### Parameters

#### Returns

`None` 

### get_liveDrag

Gets the bool value, indicating whether the value of the slider will change while the drag hanle is moving, or when the drag handle is released

#### Parameters

#### Returns

`Boolean` The value

### set_width

Sets a width to the slider

#### Parameters

##### value `Number`

The width of the slider to be set

#### Returns

`None` 

### get_trackMouseWheel

Gets the bool value indicating whether the mouse wheel will change the value of the slider

#### Parameters

#### Returns

`Boolean` The bool value indicating whether the mouse wheel will change the value of the slider

### setValue

OnClientValueChanging

#### Parameters

#### Returns

`None` 

### set_maximumValue

Sets the current maximum value that can be selected with slider

#### Parameters

##### value `Number`

The maximum value to be set

#### Returns

`None` 

### set_showDecreaseHandle

Sets a bool value indicating whether the decrease handle is displayed

#### Parameters

##### value `Boolean`

The bool value indicating whether the decrease handle is displayed

#### Returns

`None` 

## Events

### slideStart

The slideStart client-side event occurs just before the drag handle is moved along the track.

#### Event Data

##### sender `Telerik.Web.UI.RadSlider`

The instance of the RadSlider raised the event.

##### eventArgs `Sys.EventArgs`

Empty event argument.

### slide

The slide client-side event occurs as the drag handle is moved along the track. 

#### Event Data

#####  sender `Telerik.Web.UI.RadSlider`

The instance of the RadSlider raised the event.

##### eventArgs `Sys.EventArgs`

Empty event argument.

### slideEnd

The slideEnd client-side event occurs as the drag handle stops moving along the track.

#### Event Data

#####  sender `Telerik.Web.UI.RadSlider`

The instance of the RadSlider raised the event.

##### eventArgs `Sys.EventArgs`

Empty event argument.

### valueChanged

The valueChanged client-side event occurs as the value property changes.

#### Event Data

#####  sender `Telerik.Web.UI.RadSlider`

The instance of the RadSlider raised the event.

##### args `Telerik.Web.UI.SliderEventArgs`

The event arguments. 

### valueChanging

The valueChanging client-side event occurs before the value property changes.

#### Event Data

#####  sender `Telerik.Web.UI.RadSlider`

The instance of the RadSlider raised the event.

##### args `Telerik.Web.UI.SliderCancelEventArgs`

The event arguments. 

### load

The load client-side event occurs after the slider loads on the page.

#### Event Data

#####  sender `Telerik.Web.UI.RadSlider`

The instance of the RadSlider raised the event.

##### eventArgs `Sys.EventArgs`

Empty event argument.

### itemsCreated

The itemsCreated client-side event occurs when the items of the RadSlider control are created.

#### Event Data

#####  sender `Telerik.Web.UI.RadSlider`

The instance of the RadSlider raised the event.

##### eventArgs `Sys.EventArgs`

Empty event argument.

### slideRangeStart

The slideRangeStart client-side event occurs just before the user starts sliding the selected region of RadSlider, thus changing both SelectionStart and SelectionEnd values.

#### Event Data

#####  sender `Telerik.Web.UI.RadSlider`

The instance of the RadSlider raised the event.

##### eventArgs `Sys.EventArgs`

Empty event argument. 

### slideRange

The slideRange client-side event occurs as the user is sliding the selected region of RadSlider, thus changing both SelectionStart and SelectionEnd values.

#### Event Data

#####  sender `Telerik.Web.UI.RadSlider`

The instance of the RadSlider raised the event.

##### eventArgs `Sys.EventArgs`

Empty event argument. 

### slideRangeEnd

The slideRangeEnd client-side event occurs when user releases the selected region of RadSlider after dragging it, thus changing both SelectionStart and SelectionEnd values.

#### Event Data

#####  sender `Telerik.Web.UI.RadSlider`

The instance of the RadSlider raised the event.

##### eventArgs `Sys.EventArgs`

Empty event argument. 

### itemDataBinding

The itemDataBinding event is raised just before an item in the RadSlider is data-bound to the provided data source.

#### Event Data

#####  sender `Telerik.Web.UI.RadSlider`

The instance of the RadSlider raised the event.

##### args `Telerik.Web.UI.SliderItemDataBindingEventArgs`

The event arguments. 

### itemDataBound

The itemDataBound event is raised when an item in the RadSlider is data-bound to the provided data source.

#### Event Data

#####  sender `Telerik.Web.UI.RadSlider`

The instance of the RadSlider raised the event.

##### args `Telerik.Web.UI.SliderItemDataBoundEventArgs`

The event arguments. 

### dataBound

The dataBound event is fired when the data binding of RadSlider is finished.

#### Event Data

#####  sender `Telerik.Web.UI.RadSlider`

The instance of the RadSlider raised the event.

##### eventArgs `Sys.EventArgs`

Empty event argument. 
