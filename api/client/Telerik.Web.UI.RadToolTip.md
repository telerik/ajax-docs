---
title: Telerik.Web.UI.RadToolTip
page_title: Client-side API Reference
description: Client-side API Reference
---

# Telerik.Web.UI.RadToolTip : Telerik.Web.UI.RadWebControl

## Methods

###  getManualCloseButton

Returns a reference to the tooltip's close button when HideEvent="ManualClose"

#### Parameters

#### Returns

`Object` 

###  get_animation

Gets animation value for the tooltip

#### Parameters

#### Returns

`Telerik.Web.UI.ToolTipAnimation` 

###  get_animationDuration

Gets animation duration value for the tooltip

#### Parameters

#### Returns

`Number` 

###  get_autoCloseDelay

Gets delay in milliseconds for the tooltip to close automatically

#### Parameters

#### Returns

`Number` 

###  get_content

Gets the current content of the tooltip

#### Parameters

#### Returns

`String` 

###  get_contentElement

Gets the content element of the tooltip

#### Parameters

#### Returns

`Object` 

###  get_contentScrolling

Gets a new overflow value for the tooltip content area

#### Parameters

#### Returns

`Telerik.Web.UI.ToolTipScrolling` 

###  get_enableShadow

Gets a value indicating whether the tooltip should have a shadow.

#### Parameters

#### Returns

`Boolean` 

###  get_height

Gets height of the tooltip

#### Parameters

#### Returns

`Number` 

###  get_hideDelay

Gets delay in milliseconds after which the tooltip will hide after the mouse leaves the target element

#### Parameters

#### Returns

`Number` 

###  get_ignoreAltAttribute

Gets a value indicating whether the Alt attribute of the target should be ignored.

#### Parameters

#### Returns

`Boolean` 

###  get_modal

Gets a value indicating whether a tooltip is modal or not

#### Parameters

#### Returns

`Boolean` 

###  get_mouseTrailing

Gets whether the tooltip should follow the mouse movement or not

#### Parameters

#### Returns

`Boolean` 

###  get_offsetX

Gets the horizontal offset relative to its target element

#### Parameters

#### Returns

`Number` 

###  get_offsetY

Gets the vertical offset relative to its target element

#### Parameters

#### Returns

`Number` 

###  get_overlay

Gets a value indicating whether the tooltip has an overlay element.

#### Parameters

#### Returns

`Boolean` 

###  get_popupElement

Returns a reference to the popup element

#### Parameters

#### Returns

`Object` 

###  get_position

Gets the relative position of the tooltip to its target element

#### Parameters

#### Returns

`Telerik.Web.UI.ToolTipPosition` 

###  get_relativeTo

Gets whether the tooltip is positioned relative to the mouse, relative to the tooltip or to the browser window

#### Parameters

#### Returns

`Telerik.Web.UI.ToolTipRelativeDisplay` 

###  get_showCallout

Gets whether the tooltip callout image will be displayed

#### Parameters

#### Returns

`Boolean` 

###  get_showDelay

Gets delay in milliseconds for the tooltip to appear

#### Parameters

#### Returns

`Number` 

###  get_targetControl

Gets a reference to the tooltip target element

#### Parameters

#### Returns

`Object` 

###  get_targetControlID

Gets the client ID of the tooltip's target control

#### Parameters

#### Returns

`String` 

###  get_text

Gets the text of the tooltip

#### Parameters

#### Returns

`String` 

###  get_title

Gets the title of the tooltip

#### Parameters

#### Returns

`String` 

###  get_value

Gets the arbitrary value associated with a tooltip that can be used in scenarios involving AJAX or web services

#### Parameters

#### Returns

`String` 

###  get_width

Gets width of the tooltip

#### Parameters

#### Returns

`Number` 

###  hide

Hides the tooltip

#### Parameters

#### Returns

`None` 

###  isModal

Returns whether the tooltip control is displaying modally

#### Parameters

#### Returns

`None` 

###  isVisible

Indicates whether the RadToolTip control is currently visible

#### Parameters

#### Returns

`None` 

###  set_animation

Sets animation value for the tooltip

#### Parameters

##### value `Telerik.Web.UI.ToolTipAnimation`

#### Returns

`None` 

###  set_animationDuration

Sets animation duration value for the tooltip

#### Parameters

##### value `Number`

#### Returns

`None` 

###  set_autoCloseDelay

Sets delay in milliseconds for the tooltip to close automatically

#### Parameters

##### value `Number`

#### Returns

`None` 

###  set_content

Sets new content to the tooltip

#### Parameters

##### text `String`

#### Returns

`None` 

###  set_contentElement

Sets a new content element to the tooltip

#### Parameters

##### contentElement `Sys.UI.DomElement`

#### Returns

`None` 

###  set_contentScrolling

Sets a new overflow value for the tooltip content area

#### Parameters

##### value `Telerik.Web.UI.ToolTipScrolling`

#### Returns

`None` 

###  set_enableShadow

Sets a value indicating whether the tooltip should have a shadow.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

###  set_height

Sets new height to the tooltip

#### Parameters

##### value `Number`

#### Returns

`None` 

###  set_hideDelay

Sets delay in milliseconds for the tooltip to hide after the mouse leaves the target element

#### Parameters

##### value `Number`

#### Returns

`None` 

###  set_ignoreAltAttribute

Sets a value indicating whether the Alt attribute of the target should be ignored.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

###  set_modal

Sets a value indicating whether a tooltip is modal or not

#### Parameters

##### value `Boolean`

#### Returns

`None` 

###  set_mouseTrailing

Sets whether the tooltip should follow the mouse movement or not

#### Parameters

##### value `Boolean`

#### Returns

`None` 

###  set_offsetX

Sets a new horizontal offset relative to its target element

#### Parameters

##### value `Number`

#### Returns

`None` 

###  set_offsetY

Sets a new vertical offset relative to its target element

#### Parameters

##### value `Number`

#### Returns

`None` 

###  set_overlay

Sets a value indicating whether the tooltip will create an overlay element.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

###  set_position

Sets a new relative position of the tooltip to its target element

#### Parameters

##### value `Telerik.Web.UI.ToolTipPosition`

#### Returns

`None` 

###  set_relativeTo

Sets whether the tooltip is positioned relative to the mouse, relative to the tooltip or to the browser window

#### Parameters

##### value `Telerik.Web.UI.ToolTipRelativeDisplay`

#### Returns

`None` 

###  set_showCallout

Sets whether the tooltip callout image will be displayed

#### Parameters

##### value `Boolean`

#### Returns

`None` 

###  set_showDelay

Sets delay in milliseconds for the tooltip to appear

#### Parameters

##### value `Number`

#### Returns

`None` 

###  set_targetControl

Sets a new target control to the tooltip

#### Parameters

##### value `Sys.UI.DomElement`

#### Returns

`None` 

###  set_targetControlID

Sets the cleint ID of a new target control to the tooltip

#### Parameters

##### value `String`

#### Returns

`None` 

###  set_text

Sets new text to the tooltip

#### Parameters

##### value `String`

#### Returns

`None` 

###  set_title

Sets a new title to the tooltip

#### Parameters

##### value `String`

#### Returns

`None` 

###  set_value

Sets an arbitrary value associated with a tooltip that can be used in scenarios involving AJAX or web services

#### Parameters

##### value `String`

#### Returns

`None` 

###  set_width

Sets new width to the tooltip

#### Parameters

##### value `Number`

#### Returns

`None` 

###  show

Displays the tooltip at the proper position, relative to its target control.

#### Parameters

#### Returns

`None` 

## Events

### beforeShow

The beforeShow client-side event occurs just prior to the display of the tool tip. The event can be canceled. 

#### Event Data

##### sender `Telerik.Web.UI.RadToolTip`

The instance of the RadToolTip raised the event.

##### args `Sys.CancelEventArgs`

The event arguments.

### show

The show client-side event occurs as the tooltip is displayed. The event cannot be canceled. 

#### Event Data

##### sender `Telerik.Web.UI.RadToolTip`

The instance of the RadToolTip raised the event.

##### eventArgs `Sys.EventArgs`

Empty event argument.

### beforeHide

The beforeHide client-side event occurs just prior to the tool tip being hidden. The event can be canceled. 

#### Event Data

##### sender `Telerik.Web.UI.RadToolTip`

The instance of the RadToolTip raised the event.

##### args `Sys.CancelEventArgs`

The event arguments.

### hide

The hide client-side event occurs as the tooltip is hidden. The event cannot be canceled. 

#### Event Data

##### sender `Telerik.Web.UI.RadToolTip`

The instance of the RadToolTip raised the event.

##### eventArgs `Sys.EventArgs`

Empty event argument.