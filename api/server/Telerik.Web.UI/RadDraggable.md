---
title: Telerik.Web.UI.RadDraggable
page_title: Telerik.Web.UI.RadDraggable
description: Telerik.Web.UI.RadDraggable
---

# Telerik.Web.UI.RadDraggable

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadDraggable

## Properties

###  AutoScroll `Boolean`

If set to true the widget will auto-scroll the container when the mouse/finger is close to the top/bottom of it.

###  Axis `RadDraggableAxisMode`

Constrains the hint movement to either the horizontal (x) or vertical (y) axis. Can be set to either "x" or "y".

###  ClientEvents `DraggableClientEvents`

Defines the client events handlers.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ContainerSelectors `String[]`

If set, the hint movement is constrained to the container boundaries.

#### Remarks
The values of the property should be a valid jQuery selectors. E.g. class name or Id of html element.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  CursorOffset `Object`

If set, specifies the offset of the hint relative to the mouse cursor/finger. By default, the hint is initially positioned on top of the draggable source offset. The option accepts an object with two keys: top and left.

###  CursorOffsetSettings `Object`

The options that will be used for the popup initialization. For more details about the available options refer to Popup documentation.

###  Distance `Double`

The required distance that the mouse should travel in order to initiate a drag.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableRippleEffect `Boolean`

Returns true if ripple effect should be added

###  FilterSelectors `String[]`

Gets or sets the selectors used to get the elements within the Draggable that will be draggable.

#### Remarks
The values of the property should be a valid jQuery selectors. E.g. class name or Id of html element.

###  Group `String`

Used to group sets of draggable and drop targets. A draggable with the same group value as a drop target will be accepted by the drop target.

###  Hint `String`

Provides a way for customization of the drag indicator. If a function is supplied, it receives one argument - the draggable element's jQuery object.

###  HoldToDrag `Boolean`

Suitable for touch oriented user interface, in order to avoid collision with the touch scrolling gesture. When set to true, the widget will be activated after the user taps and holds the finger on the element for a short amount of time.The draggable will also be activated by pressing, holding and lifting the finger without any movement. Dragging it afterwards will initiate the drag immediately. The activated mode can be canceled by calling cancelHold.

###  IgnoreSelectors `String[]`

Gets or sets the selectors used to get the elements within the Draggable that will not trigger a drag.

#### Remarks
The values of the property should be a valid jQuery selectors. E.g. class name or Id of html element.

###  IsSkinSet `String`

For internal use.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  TargetSelectors `String[]`

Gets or sets the selectors used to get the elements that will become Draggables.

#### Remarks
The values of the property should be a valid jQuery selectors. E.g. class name or Id of html element.

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Void` 

###  LoadPostData

Executed when post data is loaded from the request

#### Parameters

#### postDataKey `System.String`

#### postCollection `System.Collections.Specialized.NameValueCollection`

#### Returns

`System.Boolean` 

###  RaisePostDataChangedEvent

Executed when post data changes should invoke a changed event

#### Returns

`System.Void` 

###  RegisterCssReferences

Registers the CSS references

#### Returns

`System.Void` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

