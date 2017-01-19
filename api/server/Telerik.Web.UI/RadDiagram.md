---
title: Telerik.Web.UI.RadDiagram
page_title: Telerik.Web.UI.RadDiagram
description: Telerik.Web.UI.RadDiagram
---

# Telerik.Web.UI.RadDiagram

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadDiagram

## Properties

###  BindingSettings `BindingSettings`

Defines Data Binding Settings for RadDiagram

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

###  ClientEvents `DiagramClientEvents`

Defines the client events handlers.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ConnectionDataSource `Object`

Gets or sets the object from which RadDiagram retrieves its ConnectionsCollection.

#### Remarks
The data source object should be of a type that implements

###  ConnectionDataSourceId `Object`

Gets or sets the ID of the control from which the diagram control retrieves its list of connection data items.

###  ConnectionDefaultsSettings `ConnectionDefaults`

Defines the defaults of the connections. Whenever a connection is created, the specified connectionDefaults will be used and merged with the (optional) configuration passed through the connection creation method.

###  ConnectionsClientDataSourceID `String`

The RadClientDataSource ID that fetches the connections for the Diagram

###  ConnectionsCollection `DiagramConnectionsCollection`

Defines the connections configuration.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  Editable `Boolean`

Enable editing of the diagram.

###  EditableSettings `Boolean`

Defines the editable configuration.

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

###  LayoutSettings `DiagramLayout`

Defines the diagram's Layout settings

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  Pannable `Boolean`

Defines the pannable options.

###  PannableSettings `Boolean`

Defines the pannable options.

###  PdfSettings `DiagramPdf`

Defines the settings for the client-side Pdf export.

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

###  Selectable `Boolean`

Defines the selectable options.

###  SelectableSettings `Boolean`

Defines the selectable options.

###  ShapeDefaultsSettings `ShapeDefaults`

Defines the shape options.

###  ShapesCollection `DiagramShapesCollection`

Defines the shape options.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  Template `String`

The template which renders the content of the shape when bound to a dataSource. The names you can use in the template correspond to the properties used in the dataSource. See the dataSource topic below for a concrete example.

###  Zoom `Double`

The zoom level in percentages.

###  ZoomMax `Double`

The zoom max level in percentages.

###  ZoomMin `Double`

The zoom min level in percentages.

###  ZoomRate `Double`

The zoom step when using the mouse-wheel to zoom in or out.

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

