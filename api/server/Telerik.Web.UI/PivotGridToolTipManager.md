---
title: Telerik.Web.UI.PivotGridToolTipManager
page_title: Telerik.Web.UI.PivotGridToolTipManager
description: Telerik.Web.UI.PivotGridToolTipManager
---

# Telerik.Web.UI.PivotGridToolTipManager

Represents the control that manages the settings of 
             	the automatically generated tooltips in the PivotGrid

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadToolTipBase
* Telerik.Web.UI.RadToolTipManager
* Telerik.Web.UI.PivotGridToolTipManager

## Properties

###  Animation `ToolTipAnimation`

Get/Set the animation effect of the tooltip. Turned off by default.

###  AnimationDuration `ToolTipAnimation`

Sets/gets the duration of the animation in milliseconds. 500 by default.

###  AutoCloseDelay `Int32`

Get/Set the delay (in milliseconds) after which the tooltip will hide if the mouse stands still over the target element. 3000 by default.

###  AutoTooltipify `Boolean`

Gets or sets a value whether the RadToolTipManager, when its TargetControls collection is empty will tooltipify automatically all elements on the page that have a 'title' attribute

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ContentScrolling `ToolTipScrolling`

Get/Set overflow of the tooltip's content area.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

###  EnableDataCaching `Boolean`

Gets or sets a value indicating whether the content of loaded on demand tooltip should be cached after the first request.

#### Remarks
When caching is enabled only one request will be performed for each target, regardless of how many times the tooltip will be shown.
            By default a new request is performed each time the tooltip must be shown (caching is disabled).

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

###  EnableRoundedCorners `Boolean`

Gets or sets a value indicating whether the RadToolTip should have rounded corners. True by default.

###  EnableShadow `Boolean`

Gets or sets a value indicating whether the RadToolTip should have shadow. True by default.

###  Height `Unit`

Get/Set the Height of the tooltip in pixels.

###  HideDelay `Int32`

Get/Set delay (in milliseconds) for the tooltip to hide after the mouse leaves the target element. 300 by default.

###  HideEvent `ToolTipHideEvent`

Get/Set the client event at which the tooltip will be hidden.

###  IgnoreAltAttribute `Boolean`

Get/Set the indicator whether the Alt specified for the target should be ignored or not

#### Remarks
You can use the IgnoreAltAttribute to instruct the RadToolTip to ignore the AlternateText and alt properties and not remove them from its target element.
            This will result in a change of the content source priorities for images and a second tooltip being shown under IE6 and IE7,
            as these browsers interpret the alt attribute like the title attribute.

###  IsSkinSet `String`

For internal use.

###  ManualClose `Boolean`

This property is obsolete. Please use HideEvent="ManualClose" instead.
            Gets/Sets whether the tooltip will need to be closed manually by the user using the [x] button, or will close automatically.

###  ManualCloseButtonText `Boolean`

Get/Set the manual close button's tooltip text.

###  Modal `Boolean`

Gets or sets a value indicating whether a tooltip is modal or not.

###  MouseTrailing `Boolean`

Get/Set whether the tooltip will move to follow mouse movement over the target control or will stay fixed.

###  OffsetX `Int32`

Get/Set the tooltip's horizontal offset from the target control in pixels. Works in cooperation with the Position property.

###  OffsetY `Int32`

Get/Set the tooltip's vertical offset from the target control in pixels. Works in cooperation with the Position property.

###  OnClientBeforeHide `String`

Gets or sets the name of client-side JavaScript function that is called just before the RadToolTip hides.

#### Remarks
If specified, the OnClientBeforeHideclient-side event handler that is called 
            before the tooltip is hidden. Two parameters are passed to the handler:sender, the RadToolTip object.args.This event can be cancelled.

###  OnClientBeforeShow `String`

Gets or sets the name of client-side JavaScript function that is called just before the RadToolTip is shown.

#### Remarks
If specified, the OnClientBeforeShowclient-side event handler is called before the RadToolTip
                is shown. Two parameters are passed to the handler:sender, the RadToolTip object.args.This event can be cancelled.

###  OnClientHide `String`

Gets or sets the name of client-side JavaScript function that is called just after the RadToolTip is hidden.

#### Remarks
If specified, the OnClientHideclient-side event handler that is called 
            after the tooltip is hidden. Two parameters are passed to the handler:sender, the RadToolTip object.args.This event cannot be cancelled.

###  OnClientRequestStart `String`

Gets or sets a value indicating the client-side event handler that is called when
            the RadToolTipManager when a call to a WebService is initiated or AJAX request is started.

#### Remarks
If specified, the OnClientRequestStartclient-side event handler is called when the request is started Two parameters are passed to the handler:sender, the RadToolTipManager object.args.This event can be cancelled.

###  OnClientResponseEnd `String`

Gets or sets a value indicating the client-side event handler that is called when
            the RadToolTipManager receives the server response from a WebService or AJAX request.

#### Remarks
If specified, the OnClientResponseEndclient-side event handler is called before the RadToolTipManager
                displays the content returned from the server. Two parameters are passed to the handler:sender, the RadToolTipManager object.args.This event cannot be cancelled.

###  OnClientResponseError `String`

Gets or sets a value indicating the client-side event handler that is called when
            the  Load On Demand call to the WebService or the AJAX request is interrupted by an error.

###  OnClientShow `String`

Gets or sets the name of client-side JavaScript function that is called just after the RadToolTip is shown.

#### Remarks
If specified, the OnClientShowclient-side event handler is called after the tooltip is shown
             Two parameters are passed to the handler:sender, the RadToolTip object.args.This event cannot be cancelled.

###  Overlay `Boolean`

Gets or sets a value indicating whether the tooltip will create an overlay element to ensure it will be displayed over a flash element.

###  Position `ToolTipPosition`

Get/Set the top/left position of the tooltip relative to the target element

#### Remarks
If there isn't enough room in the viewport to show the tooltip in the specified position (this depends on the tooltip's Width and Height and the target's position)
            the tooltip will automatically reposition itself so that it is entirely visible. Usually this will be the opposite position.
            All positions are tried until enough room is found on the screen, if there isn't the top left corner of the tooltip will be visible and scrollbars will be produced.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  RelativeTo `ToolTipRelativeDisplay`

Get/Set whether the tooltip should appear relative to the mouse, to the target element or to the browser viewport. Works in cooperation with the Position property.

#### Remarks
When the display is relative to the mouse or to the element the tooltips are positioned absolutely on the page, when relative to the browser viewport
            they have fixed position and do not scroll with the rest of the page.

###  RenderInPageRoot `Boolean`

Get/Set whether the tooltip should be added as a child of the form element or as a child of its direct parent. True by default.

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

###  ShowCallout `Boolean`

Get/Set whether the tooltip will show a small arrow pointing to its target element. True by default.

###  ShowDelay `Int32`

Get/Set the time (in milliseconds) for which the user should hold the mouse over a target element for the tooltip to appear. The default is 400.

###  ShowEvent `ToolTipShowEvent`

Get/Set the client event at which the tooltip will be made visible for a particular target control.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  Sticky `Boolean`

This property is obsolete. Please use HideEvent="LeaveToolTip" instead.
            Gets/Sets whether the tooltip will hide when the mouse moves away from the target element (when false),
            or when the mouse [enters] and moves out of the tooltip itself (when set to true).

###  TargetControls `ToolTipTargetControlCollection`

The collection of TargetControl objects that allows for specifying the objects for which tooltips will be created on the client-side.

#### Remarks
Use the TargetControls collection to programmatically control which objects should be tooltipified on the client-side.

###  Text `String`

Get/Set the Text that will appear in the tooltip (if it should be different from the content of the 'title' attribute of the target element).

###  Title `String`

Get/Set a title for the tooltip.

#### Remarks
This title is not affected by the rest of the content and is always displayed, regardless of the content source.
            For more details see this help article: http://www.telerik.com/help/aspnet-ajax/tooltip-content.html.

###  ToolTipZoneID `String`

Gets or sets the id (ClientID if a runat=server is used) of a html element whose children will be tooltipified

###  UpdatePanel `UpdatePanel`

Gets a reference to the UpdatePanel property of RadToolTipManager. The UpdatePanel allows for sending AJAX content to the client-side during the OnAjaxUpdate event.

###  VisibleOnPageLoad `Boolean`

Gets or sets a value indicating whether the tooltip will open automatically when its parent [aspx] page is loaded on the client.

###  WebServiceSettings `WebServiceSettings`

Gets the settings for the web service used to populate items.

#### Remarks
Use the WebServiceSettings property to configure the web
            		service used to populate items on demand.
            		You must specify both
                    Path and
                    Method
            		to fully describe the service.
                
            		In order to use the integrated support, the web service should have the following signature:
            		
            		
            		[ScriptService]
            		public class WebServiceName : WebService
            		{
            			[WebMethod]
            			public string WebServiceMethodName(object context)
            			{
            				// We cannot use a dictionary as a parameter, because it is only supported by script services.
            				// The context object should be cast to a dictionary at runtime.
            				IDictionary<string, object> contextDictionary = (IDictionary<string, object>) context;
            				
            				//...
            			}
            		}

###  Width `Unit`

Get/Set the Width of the tooltip in pixels.

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

###  OnAjaxUpdate

Allows for dynamic content to be set into the tooltip with an ajax request.
            The tooltip triggers the event when it is shown on the client.

#### Remarks
If specified, the OnAjaxUpdateis triggered when the tooltip is shown on the client. Two parameters are passed to the handler:sender, the RadToolTip object.args.This event cannot be cancelled.

#### Returns

`System.Void` 

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

###  Show

Causes the tooltip to open automatically when the page is loaded

#### Returns

`System.Void` 

