---
title: Telerik.Web.UI.RadToolTipBase
page_title: Telerik.Web.UI.RadToolTipBase
description: Telerik.Web.UI.RadToolTipBase
---

# Telerik.Web.UI.RadToolTipBase

RadToolTipBase class

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl
* Telerik.Web.UI.RadToolTipBase

## Properties

###  VisibleOnPageLoad `Boolean`

Gets or sets a value indicating whether the tooltip will open automatically when its parent [aspx] page is loaded on the client.

###  Animation `ToolTipAnimation`

Get/Set the animation effect of the tooltip. Turned off by default.

###  AnimationDuration `ToolTipAnimation`

Sets/gets the duration of the animation in milliseconds. 500 by default.

###  ManualClose `Boolean`

This property is obsolete. Please use HideEvent="ManualClose" instead.
            Gets/Sets whether the tooltip will need to be closed manually by the user using the [x] button, or will close automatically.

###  Sticky `Boolean`

This property is obsolete. Please use HideEvent="LeaveToolTip" instead.
            Gets/Sets whether the tooltip will hide when the mouse moves away from the target element (when false),
            or when the mouse [enters] and moves out of the tooltip itself (when set to true).

###  HideEvent `ToolTipHideEvent`

Get/Set the client event at which the tooltip will be hidden.

###  ShowEvent `ToolTipShowEvent`

Get/Set the client event at which the tooltip will be made visible for a particular target control.

###  Width `Unit`

Get/Set the Width of the tooltip in pixels.

###  Height `Unit`

Get/Set the Height of the tooltip in pixels.

###  Text `String`

Get/Set the Text that will appear in the tooltip (if it should be different from the content of the 'title' attribute of the target element).

###  IgnoreAltAttribute `Boolean`

Get/Set the indicator whether the Alt specified for the target should be ignored or not

#### Remarks
You can use the IgnoreAltAttribute to instruct the RadToolTip to ignore the AlternateText and alt properties and not remove them from its target element.
            This will result in a change of the content source priorities for images and a second tooltip being shown under IE6 and IE7,
            as these browsers interpret the alt attribute like the title attribute.

###  Title `String`

Get/Set a title for the tooltip.

#### Remarks
This title is not affected by the rest of the content and is always displayed, regardless of the content source.
            For more details see this help article: http://www.telerik.com/help/aspnet-ajax/tooltip-content.html.

###  ManualCloseButtonText `Boolean`

Get/Set the manual close button's tooltip text.

###  Position `ToolTipPosition`

Get/Set the top/left position of the tooltip relative to the target element

#### Remarks
If there isn't enough room in the viewport to show the tooltip in the specified position (this depends on the tooltip's Width and Height and the target's position)
            the tooltip will automatically reposition itself so that it is entirely visible. Usually this will be the opposite position.
            All positions are tried until enough room is found on the screen, if there isn't the top left corner of the tooltip will be visible and scrollbars will be produced.

###  ContentScrolling `ToolTipScrolling`

Get/Set overflow of the tooltip's content area.

###  RelativeTo `ToolTipRelativeDisplay`

Get/Set whether the tooltip should appear relative to the mouse, to the target element or to the browser viewport. Works in cooperation with the Position property.

#### Remarks
When the display is relative to the mouse or to the element the tooltips are positioned absolutely on the page, when relative to the browser viewport
            they have fixed position and do not scroll with the rest of the page.

###  OffsetX `Int32`

Get/Set the tooltip's horizontal offset from the target control in pixels. Works in cooperation with the Position property.

###  OffsetY `Int32`

Get/Set the tooltip's vertical offset from the target control in pixels. Works in cooperation with the Position property.

###  AutoCloseDelay `Int32`

Get/Set the delay (in milliseconds) after which the tooltip will hide if the mouse stands still over the target element. 3000 by default.

###  HideDelay `Int32`

Get/Set delay (in milliseconds) for the tooltip to hide after the mouse leaves the target element. 300 by default.

###  ShowDelay `Int32`

Get/Set the time (in milliseconds) for which the user should hold the mouse over a target element for the tooltip to appear. The default is 400.

###  MouseTrailing `Boolean`

Get/Set whether the tooltip will move to follow mouse movement over the target control or will stay fixed.

###  ShowCallout `Boolean`

Get/Set whether the tooltip will show a small arrow pointing to its target element. True by default.

###  RenderInPageRoot `Boolean`

Get/Set whether the tooltip should be added as a child of the form element or as a child of its direct parent. True by default.

###  EnableShadow `Boolean`

Gets or sets a value indicating whether the RadToolTip should have shadow. True by default.

###  EnableRoundedCorners `Boolean`

Gets or sets a value indicating whether the RadToolTip should have rounded corners. True by default.

###  Modal `Boolean`

Gets or sets a value indicating whether a tooltip is modal or not.

###  Overlay `Boolean`

Gets or sets a value indicating whether the tooltip will create an overlay element to ensure it will be displayed over a flash element.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

###  OnClientBeforeShow `String`

Gets or sets the name of client-side JavaScript function that is called just before the RadToolTip is shown.

#### Remarks
If specified, the OnClientBeforeShowclient-side event handler is called before the RadToolTip
                is shown. Two parameters are passed to the handler:sender, the RadToolTip object.args.This event can be cancelled.

###  OnClientShow `String`

Gets or sets the name of client-side JavaScript function that is called just after the RadToolTip is shown.

#### Remarks
If specified, the OnClientShowclient-side event handler is called after the tooltip is shown
             Two parameters are passed to the handler:sender, the RadToolTip object.args.This event cannot be cancelled.

###  OnClientBeforeHide `String`

Gets or sets the name of client-side JavaScript function that is called just before the RadToolTip hides.

#### Remarks
If specified, the OnClientBeforeHideclient-side event handler that is called 
            before the tooltip is hidden. Two parameters are passed to the handler:sender, the RadToolTip object.args.This event can be cancelled.

###  OnClientHide `String`

Gets or sets the name of client-side JavaScript function that is called just after the RadToolTip is hidden.

#### Remarks
If specified, the OnClientHideclient-side event handler that is called 
            after the tooltip is hidden. Two parameters are passed to the handler:sender, the RadToolTip object.args.This event cannot be cancelled.

###  TagKey `HtmlTextWriterTag`

###  CssClassFormatString `String`

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  IsSkinSet `String`

For internal use.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  ClientStateFieldID `String`

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ScriptManager `ScriptManager`

###  RadScriptManager `ScriptManager`

## Methods

###  Show

Causes the tooltip to open automatically when the page is loaded

#### Returns

`System.Void` 

###  CreateControlStyle

#### Returns

`System.Web.UI.WebControls.Style` 

###  GetScriptReferences

#### Returns

`System.Collections.Generic.IEnumerable`1` 

###  DescribeComponent

#### Returns

`System.Void` 

###  ThrowControlNotFound

#### Returns

`System.Void` 

###  DescribeClientProperties

#### Returns

`System.Void` 

###  DescribeClientEvents

#### Returns

`System.Void` 

###  AddAttributesToRender

#### Returns

`System.Void` 

###  OnPreRender

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  RegisterScriptControl

Registers the control with the ScriptManager

#### Returns

`System.Void` 

###  RegisterCssReferences

Registers the CSS references

#### Returns

`System.Void` 

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Void` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  RenderClientStateField

#### Returns

`System.Void` 

###  RenderBeginTag

#### Returns

`System.Void` 

###  RenderEndTag

#### Returns

`System.Void` 

###  Render

#### Returns

`System.Void` 

###  RenderScriptsNoScriptManager

#### Returns

`System.Void` 

###  RenderDescriptorsNoScriptManager

#### Returns

`System.Void` 

###  RenderContents

#### Returns

`System.Void` 

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  DescribeComponent

#### Returns

`System.Void` 

###  DescribeProperty

#### Returns

`System.Void` 

###  DescribeIDReferenceProperty

#### Returns

`System.Void` 

###  DescribeEvent

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

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

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

