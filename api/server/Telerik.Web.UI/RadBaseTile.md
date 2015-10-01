---
title: Telerik.Web.UI.RadBaseTile
page_title: Telerik.Web.UI.RadBaseTile
description: Telerik.Web.UI.RadBaseTile
---

# Telerik.Web.UI.RadBaseTile

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl
* Telerik.Web.UI.RadBaseTile

## Properties

###  NavigateUrl `String`

Gets or sets the URL of the page to navigate to, without posting the page back to the server.

###  Target `String`

Gets or sets the target window or frame in which to display the Web page content linked to when the NavigateUrl property when the control is clicked.

###  Shape `TileShape`

Gets or sets the shape of the tile.

###  Selected `Boolean`

Gets or sets the selected state of the tile.

#### Remarks
Use the Selected property to determine whether the tile is selected or not.

###  EnableSelection `Boolean`

Gets or sets a value determinig if selection of the tile is enabled. Not applicable for tiles inside a RadTileList,
            whether they can be selected is controlled by the TileList's SelectionMode property.

#### Remarks
Use the Selected property to determine whether the tile is selected or not.

###  Name `String`

Gets or sets the Name proerty of a tile.

###  AutoPostBack `Boolean`

Gets or sets a value indicating whether a postback to the server automatically
            occurs when the user changes the RadTileList selection or clicks on a tile.

###  PostBackUrl `String`

Gets or sets the URL of the page to post to from the current page when a tile
                from RadBaseTile is clicked.

###  PeekContentContainer `Panel`

Gets the control, where the ContentTemplate will be instantiated in. You can add controls programmatically here.

#### Remarks
You can use this property to programmatically add controls to the content area.
            If you add controls to the ContentContainer the NavigateUrl property will be ignored.

###  PeekTemplate `ITemplate`

Gets or sets the System.Web.UI.ITemplate that contains the controls which will be 
            placed in the peek tempate.

#### Remarks
You cannot set this property twice, or when you added controls to the PeekContentContainer.

###  IsDeclarative `Boolean`

Gets or sets value, which shows that the tile is created declaratively.

###  OnClientLoad `String`

Gets or sets a value indicating the client-side event handler that is called when the tile is loaded on the client.

#### Remarks
If specified, the OnClientLoadclient-side event handler is called when the tile is loaded on the client.
             Two parameters are passed to the handler:sender, the tile object.args.

###  OnClientSelecting `String`

Gets or sets the name of the JavaScript function which handles the selecting of the tile client-side event.

#### Remarks
The clientTileSelecting client-side event occurs before the tile is selected.

###  OnClientSelected `Boolean`

Gets or sets the name of the JavaScript function which handles the selection of the tile client-side event.

#### Remarks
The clientTileSelected client-side event occurs after th tile is selected.

###  OnClientClicking `String`

Gets or sets the name of the JavaScript function that will be called when the tile is clicked. The event is cancelable.

###  OnClientClicked `String`

Gets or sets the name of the JavaScript function that will be called when the tile is clicked, after the OnClientClicking event.

###  SupportsRenderingMode `Boolean`

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

###  OnSelectionStateChanged

Raises the SelectionStateChanged event.

#### Returns

`System.Void` 

###  OnClick

Raises the Click event of the RadBaseTile control.

#### Parameters

#### e `System.EventArgs`

A EventArgs that contains the event data.

#### Returns

`System.Void` 

###  PeekContentContainerHasControls

Returns false if there is no peek template or there are no children in the peek container

#### Returns

`System.Boolean` 

###  CreateChildControls

#### Returns

`System.Void` 

###  GetPostbackEventReference

Creates a PostBackOptions object that represents the RadTileList control's postback behavior, and returns the client script 
            generated as a result of the PostBackOptions.

#### Returns

`System.String` The client script that represents the RadTileList control's PostBackOptions.

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

