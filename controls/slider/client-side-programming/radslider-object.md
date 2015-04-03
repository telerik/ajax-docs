---
title: RadSlider Object
page_title: RadSlider Object | UI for ASP.NET AJAX Documentation
description: RadSlider Object
slug: slider/client-side-programming/radslider-object
tags: radslider,object
published: True
position: 1
---

# RadSlider Object



The following table lists significant members of the client-side __RadSlider__ object:

## Public Properties




>caption  

| Name | Description |
| ------ | ------ |
| __get_animationDuration__ |Get animation duration in milliseconds.|
| __get_largeChange__ |Get the delta with which the value will change when user click on the track|
| __get_enabled__ |Get whether the slider is enabled|
| __get_maximumValue__ |Get the current maximum value that can be selected with slider.|
| __get_minimumValue__ |Get the current minimum value that can be selected with slider.|
| __get_orientation__ |Get the current orientation of the slider control - horizontal or vertical.|
| __get_showDecreaseHandle__ |Get whether the decrease handle is displayed.|
| __get_showDragHandle__ |Get whether the drag handle is displayed.|
| __get_showIncreaseHandle__ |Get whether the increase handle is displayed.|
| __get_smallChange__ |Get the step with which the slider value will change|
| __get_trackMouseWheel__ |Get whether the mouse wheel will change the value of the slider.|
| __get_value__ |Get the current value of the slider.|
| __set_animationDuration__ |Set animation duration in milliseconds.|
| __set_largeChange__ |Set the delta with which the value will change when user click on the track|
| __set_enabled__ |Set whether the slider is enabled|
| __set_maximumValue__ |Set the current maximum value that can be selected with slider.|
| __set_minimumValue__ |Set the current minimum value that can be selected with slider.|
| __set_orientation__ |Set the current orientation of the slider control - horizontal or vertical.|
| __set_showDecreaseHandle__ |Set whether the decrease handle is displayed.|
| __set_showDragHandle__ |Set whether the drag handle is displayed.|
| __set_showIncreaseHandle__ |Set whether the increase handle is displayed.|
| __set_smallChange__ |Set the step with which the slider value will change|
| __set_trackMouseWheel__ |Set whether the mouse wheel will change the value of the slider.|
| __set_value__ |Set the current value of the slider.|
| __get_trackPosition__ |Gets the position of the track|
| __set_trackPosition__ |Sets the position of the track|
| __get_selectionStart__ |Returns the starting value of the range when __IsSelectionRangeEnabled__ is set to true|
| __set_selectionStart__ |Sets the starting value of the range when __IsSelectionRangeEnabled__ is set to true|
| __get_selectionEnd__ |Returns the ending value of the range when __IsSelectionRangeEnabled__ is set to true|
| __set_selectionEnd__ |Sets the ending value of the range when __IsSelectionRangeEnabled__ is set to true|

## Public Methods




>caption  

| Name | Description |
| ------ | ------ |
| __repaint__ |Render the slider using the current settings for the control.|
| __addSliderItem__ |Adds a slider item to the slider. The item will not exist in the rotator's items collection on the server. The function is designed for a slider with __ItemType="Items"__ and accepts the following parameters:

*  __item__ - The item object describing the item to add. It should contain a property __text__ and __value__ - __{text: "value", value: "value"}__ 

*  __index__ - The index, where the item should be added. If missing, the item will be added to the end of the slider's items collection.|
| __removeSliderItem__ |Removes a slider item from the slider. The removed item exists in the rotator's items collection on the server. This function is designed for a slider with __ItemType="Items"__ and accepts the following parameter:

*  __index__ - The index number of the item to remove. If it is missing, the last slider item will be removed.|
| __setValue__ |Sets the value of the slider. Allows to skip the events[OnClientValueChanging]({%slug slider/client-side-programming/events/onclientvaluechanging%})and[OnClientValueChanged]({%slug slider/client-side-programming/events/onclientvaluechanged%}). The function accepts the following parameters:

*  __value__ - The new value of the slider.

*  __skipEvents__ - Determines whether the value change events will be skipped. Should be set to __true__ in order to skip them.|
| __get_dataSource__ |Gets the client-side data source object that is data-bound to the slider.|
| __set_dataSource__ |Sets the client-side data source that will be data bound to the slider. The function accepts an array of client-side JSON literals as a parameter. Each of the objects in the collection should have fields matching the fields that are specified in the __ItemBinding__ composite property of __RadSlider__ .|
| __get_clientDataSource__ |Gets the client-side object of the[RadClientDataSource](1ef67ca5-56c3-42a5-acd9-d4add74507c7)instance that is data-bound to the slider.|
| __set_clientDataSource__ |Sets the client-side object of the __RadClientDataSource__ instance that is data-bound to the slider. The function accepts the client-side object of the __RadClientDataSource__ control as a parameter.|
| __get_clientDataSourceID__ |Gets the __ClientID__ of the __RadClientDataSource__ instance that is data-bound to the slider.|
| __set_clientDataSourceID__ |Sets the __ClientID__ of the __RadClientDataSource__ instance that will be data-bound to the slider. The function accepts a string with the value of the __ClientID__ property.|
| __get_itemBinding__ |Gets an object with the following structure: __{ textField: "", valueField: "", toolTipField: "" }__ .The fields in this object show the connection between the fields of the data source and the properties of the slider items.

*  __textField__ - its value is the name of the data source field that populates the __Text__ property of the slider items.

*  __valueField__ - its value is the name of the data source field that populates the __Value__ property of the slider items.

*  __toolTipField__ - its value is the name of the data source field that populates the __ToolTip__ property of the slider items.|
| __dataBind__ |Initiates the data binding to a client data source. The data source needs to be set before this function is called.|

## Adding and Removing Client-Side Events




>caption  

| Name | Description |
| ------ | ------ |
| __add_loaded__ |Add a handler to the loaded event|
| __add_slide__ |Add a handler to the Slide event|
| __add_slideBegin__ |Add a handler to the slideBegin event|
| __add_sliding__ |Add a handler to the Sliding event|
| __add_valueChange__ |Add a handler to the ValueChange event|
| __add_ itemsCreated__ |Add a handler to the ItemsCreated event|
| __remove_loaded__ |Remove a handler from the loaded event|
| __remove_slide__ |Remove a handler from the Slide event|
| __remove_slideBegin__ |Remove a handler from the slideBegin event|
| __remove_sliding__ |Remove a handler from the Sliding event|
| __remove_valueChange__ |Remove a handler from the ValueChange event|
| __remove_ itemsCreated__ |Remove a handler from the ItemsCreated event|
