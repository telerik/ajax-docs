---
title: Telerik.Web.UI.RadSplitter
page_title: Telerik.Web.UI.RadSplitter
description: Telerik.Web.UI.RadSplitter
---

# Telerik.Web.UI.RadSplitter

telerik RadSplitter is a flexible UI component for ASP.NET applications which allows users to manage effectively the content size and layout.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.SplitterItemsContainer
* Telerik.Web.UI.RadSplitter

## Properties

###  SupportsRenderingMode `Boolean`

###  HeightOffset `Int32`

Sets/gets the pixels that should be substracted from the splitter height when its height is defined in percent

###  FullScreenMode `Boolean`

Resize the splitter in 100% of the page

###  VisibleDuringInit `Boolean`

Whether the Splitter should be visible during its initialization or not

###  Height `Unit`

Sets/gets the height of the splitter

###  Width `Unit`

Sets/gets the width of the splitter

###  LiveResize `Boolean`

Sets/gets whether the rendering of the splitter panes is previewed during the resize

###  ResizeWithBrowserWindow `Boolean`

Sets/gets whether the splitter will be resized when the browser window is resized. The Width or Height properties should be defined in percent.

###  ResizeWithParentPane `Boolean`

Sets/gets whether the splitter will resize when the parent pane is resized

###  Orientation `Orientation`

Specify the orientation of the panes inside the splitter

###  ResizeMode `SplitterResizeMode`

Set/Get the way the panes are resized

###  BorderSize `Int32`

Set/Get size of the splitter border

###  PanesBorderSize `Int32`

Set/Get size of the splitter panes border

###  SplitBarsSize `Unit`

Set/Get size of the split bars - in pixels

###  OnClientLoad `String`

Gets or sets a value indicating the client-side event handler that is called when
            the RadSplitter control is initialized.

#### Remarks
Two parameters are passed to the handler:sender, the RadSplitter that fired the eventargsThis event cannot be cancelled.

###  OnClientResized `String`

Gets or sets a value indicating the client-side event handler that is called when
            the RadSplitter is resized.

#### Remarks
If specified, the OnClientResizedclient-side event handler is called when the RadSplitter
                is resized. Two parameters are passed to the handler:sender, the event objecteventArgs with the following methods:
             			get_oldWidth - the width of the splitter before the resizeget_oldHeight - the height of the splitter before the resizeThis event cannot be cancelled.

###  OnClientResizing `String`

Gets or sets a value indicating the client-side event handler that is called before the RadSplitter is resized.

#### Remarks
Two parameters are passed to the handler:sender, the RadSplitter that fired the eventargs with the following methods:
             			get_newWidth - the new width that will be applied to the RadSplitter objectget_newHeight - the new height that will be applied to the RadSplitter objectThis event can be cancelled.

###  Items `SplitterItemsCollection`

Gets the collection of child items in the RadSplitter
            control.

#### Remarks
Use this property to retrieve the child items of the RadSplitter
            control. You can also use it to programmatically add or remove items.

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

###  IsTouchSkin

#### Returns

`System.Boolean` 

###  RenderBeginTag

#### Returns

`System.Void` 

###  AddAttributesToRender

#### Returns

`System.Void` 

###  RenderEndTag

#### Returns

`System.Void` 

###  RenderContents

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

