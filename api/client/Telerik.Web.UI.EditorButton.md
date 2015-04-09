---
title: Telerik.Web.UI.EditorButton
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.EditorButton : Sys.UI.Control 

## Methods

###  click

Performs a click operation, but does not fire a command. 

#### Parameters

#### Returns

`Boolean` Indicates whether the DOM event is canceled or not. 

###  getAnchorElement

Returns the anchor element of the tool.

#### Parameters

#### Returns

`Element` 

###  getSpanElement

Returns the span element of the tool.

#### Parameters

#### Returns

`Element` 

###  get_contentAreaMode

Returns the ContentAreaMode value.

#### Parameters

#### Returns

`Telerik.Web.UI.EditorContentAreaMode` 

###  get_enableAriaSupport

Indicates whether the Aria support is enabled.

#### Parameters

#### Returns

`Boolean` 

###  get_enabled

Indicates whether the tool is enabled.

#### Parameters

#### Returns

`Boolean` 

###  get_height

Returns the height of the tool in pixels.

#### Parameters

#### Returns

`String` 

###  get_text

Returns the Text value of the tool.

#### Parameters

#### Returns

`String` 

###  get_tooltipDecrease

Returns the tool-tip text of the decrease button.

#### Parameters

#### Returns

`String` 

###  get_tooltipIncrease

Returns the tool-tip text of the increase button.

#### Parameters

#### Returns

`String`

###  set_tooltipDecrease

Sets the tool-tip text of the decrease button.

#### Parameters

##### value `String`

#### Returns

`None` 

###  set_tooltipIncrease

Sets the tool-tip text of the increase button.

#### Parameters

##### value `String`

#### Returns

`None`  

###  get_width

Returns the width of the tool in pixels.

#### Parameters

#### Returns

`String` 

###  isOn

Returns a Boolean value upon the state of the tool. 

#### Parameters

#### Returns

`Boolean` 

###  isTarget

Determines whether the tool was clicked.

#### Parameters

##### evtArgs `Object`

The event arguments.

#### Returns

`Boolean` 

### setFocus

Sets the focus on the tool's element.

#### Parameters

#### Returns

`None` 

### setOn

Enables the tool.

#### Parameters

##### value `Boolean` 

If set to false, the tool will remain disabled.

##### attribute `Object`

#### Returns

`None` 

###  setState

Sets the state of the tool.

#### Parameters

##### state `Telerik.Web.UI.Editor.CommandStates`

#### Returns

`None` 

###  set_contentAreaMode

Overrides the ConentAreaMode value.

#### Parameters

##### value `Telerik.Web.UI.EditorContentAreaMode`

#### Returns

`None` 

###  set_enableAriaSupport

Configures the state of the Aria support. 

#### Parameters

##### value `Boolean`

##### role `String`

The role value to be set. 

#### Returns

`None` 

###  set_enabled

Sets the enable/disable state of the tool.

#### Parameters

##### value `Boolean`

Defines whether the tool to be enabled or not.

#### Returns

`None` 

###  set_height

Sets the height value of the tool.

#### Parameters

##### value `String`

#### Returns

`None` 

###  set_text

Overrides the Text value of the tool.

#### Parameters

##### value `String`

#### Returns

`None` 

###  set_width

Sets the width value of the tool.

#### Parameters

##### value `String`

#### Returns

`None` 


## Events

### valueSelected

This event is raised when a value is selected.

#### Event Data

##### sender `Telerik.Web.UI.EditorButton`

The EditorButton instance raised the event.

##### args `Sys.EventArgs`

The event arguments.


