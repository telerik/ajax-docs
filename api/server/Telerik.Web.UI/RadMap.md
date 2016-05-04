---
title: Telerik.Web.UI.RadMap
page_title: Telerik.Web.UI.RadMap
description: Telerik.Web.UI.RadMap
---

# Telerik.Web.UI.RadMap

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadMap

## Properties

###  AppendDataBoundLayers `Boolean`

Gets or sets a bool value that indicates whether the layers are cleared before data binding.

###  AppendDataBoundMarkers `Boolean`

Gets or sets a bool value that indicates whether the markers are cleared before data binding.

###  CenterSettings `Location`

The map center. Coordinates are listed as [Latitude, Longitude].

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

###  ClientEvents `MapClientEvents`

Defines the client events handlers.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ControlsSettings `Controls`

The configuration of built-in map controls.

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

###  IsSkinSet `String`

For internal use.

###  LayerDefaultsSettings `LayerDefaults`

The default configuration for map layers by type.

###  LayersCollection `MapLayersCollection`

The configuration of the map layers. The layer type is determined by the value of the type field.

###  LayersDataSource `Object`

Gets or sets the object from which RadMap retrieves its layers.

#### Remarks
The data source object should be of a type that implements , ,

###  LayersDataSourceID `Object`

Gets or sets the ID of the control from which the map control retrieves its list of layers.

###  MarkerDefaultsSettings `MarkerDefaults`

The default options for all markers.

###  MarkersCollection `MapMarkersCollection`

Static markers to display on the map.

###  MaxZoom `Double`

The maximum zoom level. Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features).

###  MinSize `Double`

The size of the map in pixels at zoom level 0.

###  MinZoom `Double`

The minimum zoom level. Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features).

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  Pannable `Boolean`

Controls whether the user can pan the map.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css. If the set value is Auto use ResolvedRenderMode to receive the actual RenderMode
            with respect to the user angent of the current request.

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

###  Wraparound `Boolean`

Specifies whether the map should wrap around the east-west edges.

###  Zoom `Double`

The initial zoom level.Typical web maps use zoom levels from 0 (whole world) to 19 (sub-meter features).The map size is derived from the zoom level and minScale options: size = (2 ^ zoom) * minSize

###  Zoomable `Double`

Controls whether the map zoom level can be changed by the user.

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  DescribeRenderingMode

Should be  used by inheritors

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

###  OnItemCreated

Raises the TileCreated event of the RadTileList control.

#### Parameters

#### e `Telerik.Web.UI.Map.MapItemEventArgs`

A TileListEventArgs that contains the event data.

#### Returns

`System.Void` 

###  OnItemDataBound

Raises the TileCreated event of the RadTileList control.

#### Parameters

#### e `Telerik.Web.UI.Map.MapItemDataBoundEventArgs`

A TileListEventArgs that contains the event data.

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

