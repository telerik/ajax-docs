---
title: RadSlider Object
page_title: RadSlider Object | RadSlider for ASP.NET AJAX Documentation
description: RadSlider Object
slug: slider/client-side-programming/radslider-object
tags: radslider,object
published: True
position: 1
---

# RadSlider Object

The following table lists significant members of the client-side **RadSlider** object:

## Public Properties

| Name | Description |
| ------ | ------ |
| **get_animationDuration** |Get animation duration in milliseconds.|
| **get_largeChange** |Get the delta with which the value will change when user click on the track|
| **get_enabled** |Get whether the slider is enabled|
| **get_maximumValue** |Get the current maximum value that can be selected with slider.|
| **get_minimumValue** |Get the current minimum value that can be selected with slider.|
| **get_orientation** |Get the current orientation of the slider control - horizontal or vertical.|
| **get_showDecreaseHandle** |Get whether the decrease handle is displayed.|
| **get_showDragHandle** |Get whether the drag handle is displayed.|
| **get_showIncreaseHandle** |Get whether the increase handle is displayed.|
| **get_smallChange** |Get the step with which the slider value will change|
| **get_trackMouseWheel** |Get whether the mouse wheel will change the value of the slider.|
| **get_value** |Get the current value of the slider.|
| **set_animationDuration** |Set animation duration in milliseconds.|
| **set_largeChange** |Set the delta with which the value will change when user click on the track|
| **set_enabled** |Set whether the slider is enabled|
| **set_maximumValue** |Set the current maximum value that can be selected with slider.|
| **set_minimumValue** |Set the current minimum value that can be selected with slider.|
| **set_orientation** |Set the current orientation of the slider control - horizontal or vertical.|
| **set_showDecreaseHandle** |Set whether the decrease handle is displayed.|
| **set_showDragHandle** |Set whether the drag handle is displayed.|
| **set_showIncreaseHandle** |Set whether the increase handle is displayed.|
| **set_smallChange** |Set the step with which the slider value will change|
| **set_trackMouseWheel** |Set whether the mouse wheel will change the value of the slider.|
| **set_value** |Set the current value of the slider.|
| **get_trackPosition** |Gets the position of the track|
| **set_trackPosition** |Sets the position of the track|
| **get_selectionStart** |Returns the starting value of the range when **IsSelectionRangeEnabled** is set to true|
| **set_selectionStart** |Sets the starting value of the range when **IsSelectionRangeEnabled** is set to true|
| **get_selectionEnd** |Returns the ending value of the range when **IsSelectionRangeEnabled** is set to true|
| **set_selectionEnd** |Sets the ending value of the range when **IsSelectionRangeEnabled** is set to true|

## Public Methods

| Name | Description |
| ------ | ------ |
| **repaint** |Render the slider using the current settings for the control.|
| **addSliderItem** |Adds a slider item to the slider. The item will not exist in the rotator's items collection on the server. The function is designed for a slider with **ItemType="Items"** and accepts the following parameters: **item** - The item object describing the item to add. It should contain a property **text** and **value** - **{text: "value", value: "value"}**; **index** - The index, where the item should be added. If missing, the item will be added to the end of the slider's items collection.|
| **removeSliderItem** |Removes a slider item from the slider. The removed item exists in the rotator's items collection on the server. This function is designed for a slider with **ItemType="Items"** and accepts the following parameter:  **index** - The index number of the item to remove. If it is missing, the last slider item will be removed.|
| **setValue** |Sets the value of the slider. Allows to skip the events [OnClientValueChanging]({%slug slider/client-side-programming/events/onclientvaluechanging%}) and [OnClientValueChanged]({%slug slider/client-side-programming/events/onclientvaluechanged%}). The function accepts the following parameters: *value* - The new value of the slider; **skipEvents** - Determines whether the value change events will be skipped. Should be set to **true** in order to skip them.|
| **get_dataSource** |Gets the client-side data source object that is data-bound to the slider.|
| **set_dataSource** |Sets the client-side data source that will be data bound to the slider. The function accepts an array of client-side JSON literals as a parameter. Each of the objects in the collection should have fields matching the fields that are specified in the **ItemBinding** composite property of **RadSlider** .|
| **get_clientDataSource** |Gets the client-side object of the [RadClientDataSource](1ef67ca5-56c3-42a5-acd9-d4add74507c7) instance that is data-bound to the slider.|
| **set_clientDataSource** |Sets the client-side object of the **RadClientDataSource** instance that is data-bound to the slider. The function accepts the client-side object of the **RadClientDataSource** control as a parameter.|
| **get_clientDataSourceID** |Gets the **ClientID** of the **RadClientDataSource** instance that is data-bound to the slider.|
| **set_clientDataSourceID** |Sets the **ClientID** of the **RadClientDataSource** instance that will be data-bound to the slider. The function accepts a string with the value of the **ClientID** property.|
| **get_itemBinding** |Gets an object with the following structure: **{ textField: "", valueField: "", toolTipField: "" }** .The fields in this object show the connection between the fields of the data source and the properties of the slider items. **textField** - its value is the name of the data source field that populates the **Text** property of the slider items; **valueField** - its value is the name of the data source field that populates the **Value** property of the slider items; **toolTipField** - its value is the name of the data source field that populates the **ToolTip** property of the slider items.|
| **dataBind** |Initiates the data binding to a client data source. The data source needs to be set before this function is called.|

## Adding and Removing Client-Side Events

| Name | Description |
| ------ | ------ |
| **add_loaded** |Add a handler to the loaded event|
| **add_slide** |Add a handler to the Slide event|
| **add_slideBegin** |Add a handler to the slideBegin event|
| **add_sliding** |Add a handler to the Sliding event|
| **add_valueChange** |Add a handler to the ValueChange event|
| **add_ itemsCreated** |Add a handler to the ItemsCreated event|
| **remove_loaded** |Remove a handler from the loaded event|
| **remove_slide** |Remove a handler from the Slide event|
| **remove_slideBegin** |Remove a handler from the slideBegin event|
| **remove_sliding** |Remove a handler from the Sliding event|
| **remove_valueChange** |Remove a handler from the ValueChange event|
| **remove_ itemsCreated** |Remove a handler from the ItemsCreated event|
