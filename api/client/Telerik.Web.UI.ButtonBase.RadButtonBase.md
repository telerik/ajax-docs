---
title: Telerik.Web.UI.ButtonBase.RadButtonBase
page_title: Client-side API Reference
description: Telerik.Web.UI.ButtonBase.RadButtonBase
slug: Telerik.Web.UI.ButtonBase.RadButtonBase
---

# Telerik.Web.UI.ButtonBase.RadButtonBase : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.ButtonBase.RadButtonBase]({%slug Telerik.Web.UI.ButtonBase.RadButtonBase%})*


## Methods

### click

Executes programmatic button click.

#### Parameters

##### raiseClicking? `Boolean`

 Bool value indicating whether the 

#### Returns

`None` 

### get_cssClass

Gets the Cascading Style Sheet (CSS) class rendered by the RadButton control on the client.

#### Parameters

#### Returns

`String` The Cascading Style Sheet 

### get_disabledCssClass

Gets the CSS class applied when the control is disabled.

#### Parameters

#### Returns

`String` The CSS class applied when the control is disabled.

### get_enabled

Returns a value, indicating whether the button control is enabled.

#### Parameters

#### Returns

`Boolean` The value of the Enabled property.

### get_height

Gets the height of the RadButton control.

#### Parameters

#### Returns

`Number` The height of the RadButton control.

### get_hoveredCssClass

Gets the CSS class applied to the RadButton control when the mouse pointer is over the control.

#### Parameters

#### Returns

`String` The CSS class applied to the RadButton control when the mouse pointer is over the control.

### get_pressedCssClass

Gets the CSS class applied to the RadButton control when the control is pressed.

#### Parameters

#### Returns

`String` The CSS class applied to the RadButton control when the control is pressed.

### get_text

Gets the text displayed in the RadButton control.

#### Parameters

#### Returns

`String` The text displayed in the RadButton control.

### get_toolTip

Gets the text displayed when the mouse pointer hovers over the RadButton control.

#### Parameters

#### Returns

`String` The text displayed when the mouse pointer hovers over the RadButton control.

### get_uniqueID

Gets the unique, hierarchically qualified identifier for the RadButton control.

#### Parameters

#### Returns

`String` The unique

### get_value

Gets the Value property of the RadButton control.

#### Parameters

#### Returns

`String` The Value property of the RadButton control.

### get_width

Gets the width of the RadButton control.

#### Parameters

#### Returns

`Number` The width of the RadButton control.

### set_enabled

Sets whether the button is enabled.

#### Parameters

##### value `Boolean`

The new value for the Enabled property.

#### Returns

`None` 

### set_text

Sets the text displayed in the RadButton control.

#### Parameters

##### value `String`

The text that will be displayed in the RadButton control.

#### Returns

`None` 

### set_toolTip

Sets the text displayed when the mouse pointer hovers over the RadButton control.

#### Parameters

##### value `String`

The text that will be displayed on hover.

#### Returns

`None`

### set_value

Sets the Value property of the RadButton control.

#### Parameters

##### value `String`

The Value property of the RadButton control.

#### Returns

`None`


## Events

### clicked

The clicked event is subsequent to the clicking event, and occurs when the RadButton control is clicked.

#### Event Data

#####  sender `Telerik.Web.UI.RadButton`

The instance of the RadButton raised the event.

##### args `Telerik.Web.UI.ButtonEventArgs`

The event arguments.

### clicking

The clicking event occurs when the RadButton control is clicked, immediately after the mouse button is released.

#### Event Data

#####  sender `Telerik.Web.UI.RadButton`

The instance of the RadButton raised the event.

##### args `Telerik.Web.UI.ButtonCancelEventArgs`

The event arguments.

### load

The load event occurs when the RadButton control loaded on the page.

#### Event Data

#####  sender `Telerik.Web.UI.RadButton`

The instance of the RadButton raised the event.

#####  eventArgs `Sys.EventArgs`

Empty event argument.

### mouseOut

The mouseOut event is fired when the user moves the mouse pointer over the control. 

#### Event Data

#####  sender `Telerik.Web.UI.RadButton`

The instance of the RadButton raised the event.

##### args `Telerik.Web.UI.ButtonEventArgs`

The event arguments.
### mouseOver

The mouseOver event is fired when the user moves the mouse pointer over the control. 

#### Event Data

#####  sender `Telerik.Web.UI.RadButton`

The instance of the RadButton raised the event.

##### args `Telerik.Web.UI.ButtonEventArgs`

The event arguments.


