---
title: Telerik.Web.UI.RadPane
page_title: Telerik.Web.UI.RadPane
description: Telerik.Web.UI.RadPane
---

# Telerik.Web.UI.RadPane

RadPane class

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.SplitterItem
* Telerik.Web.UI.SplitterPaneBase
* Telerik.Web.UI.RadPane

## Properties

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  Collapsed `Boolean`

Sets/gets whether the pane is collapsed

###  ContentUrl `String`

The URL of the page to load inside the pane.

#### Remarks
Use the ContentUrl property if you want to load external page 
            into the pane content area.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

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

###  Height `Unit`

Get/Set the Height of the pane.

###  Index `Int32`

This property is being used internally by the RadSplitter control.
            Setting it may lead to unpredictable results.

#### Remarks
The Index property is used internally.

###  IsSkinSet `String`

For internal use.

###  Locked `Boolean`

Sets/gets whether the pane is locked

###  MaxHeight `Int32`

Sets/gets the max height to which the pane can be resized

###  MaxWidth `Int32`

Sets/gets the max width to which the pane can be resized

###  MinHeight `Unit`

Sets/gets the min height to which the pane can be resized

###  MinHeight `Int32`

Sets/gets the min height to which the pane can be resized

###  MinWidth `Unit`

Sets/gets the min width to which the pane can be resized

###  MinWidth `Int32`

Sets/gets the min width to which the pane can be resized

###  OnClientCollapsed `String`

Gets or sets a value indicating the client-side event handler that is called when
            the RadPane is collapsed.

#### Remarks
Two parameters are passed to the handler:sender, the pane object that raised the eventargsThis event cannot be cancelled.

###  OnClientCollapsing `String`

Gets or sets a value indicating the client-side event handler that is called before
            the RadPane is collapsed.

#### Remarks
Two parameters are passed to the handler:sender, the pane object that raised the eventargsThis event can be cancelled.

###  OnClientExpanded `String`

Gets or sets a value indicating the client-side event handler that is called when
            the RadPane is expanded.

#### Remarks
Two parameters are passed to the handler:sender, the pane object that raised the eventargsThis event cannot be cancelled.

###  OnClientExpanding `String`

Gets or sets a value indicating the client-side event handler that is called before
            the RadPane is expanded.

#### Remarks
Two parameters are passed to the handler:sender, the pane object that raised the eventargsThis event can be cancelled.

###  OnClientResized `String`

Gets or sets a value indicating the client-side event handler that is called when the RadPane is resized.

#### Remarks
Two parameters are passed to the handler:sender, the pane object that raised the eventargs with the following methods:
             			get_oldWidth - the width of the pane before the resizeget_oldHeight - the height of the pane before the resizeThis event cannot be cancelled.

###  OnClientResizing `String`

Gets or sets a value indicating the client-side event handler that is called before
            the RadPane is resized.

#### Remarks
Two parameters are passed to the handler:sender, the event objectargs with the following methods:
             			get_delta - the delta with which the pane will be resizedget_resizeDirection - the direction in which the pane will be resized. You can use the Telerik.Web.UI.SplitterDirection hash to check the direction. The 2 possible values are : Forward and BackwardThis event can be cancelled.

###  PersistScrollPosition `Boolean`

Sets/gets whether the scrolls position will be persisted acrosss postbacks

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

###  Scrolling `SplitterPaneScrolling`

Sets/gets whether the content of the pane will get a scrollbars when it exceeds the pane area size

###  ShowContentDuringLoad `Boolean`

Gets or sets a value indicating whether the page that is loaded
            through the ContentUrl property should be shown during the loading process, or a loading sign is displayed instead.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  Splitter `RadSplitter`

Reference to the parent Splitter object

###  Width `Unit`

Get/Set the Width of the pane.

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

###  GetExpandedSize

Get the expanded Size of the pane, when the pane is collapsed. 
            In case the Orientation of the splitter is Vertical, returns the expanded Height, otherwise, the expanded Width.

#### Returns

`System.Web.UI.WebControls.Unit` 

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

###  SetExpandedSize

Set the expanded Size of the pane, when the pane is collapsed. 
            In case the Orientation of the splitter is Vertical, sets the expanded Height, otherwise, the expanded Width.

#### Returns

`System.Void` 

