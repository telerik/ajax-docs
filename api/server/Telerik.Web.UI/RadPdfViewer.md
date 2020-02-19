---
title: Telerik.Web.UI.RadPdfViewer
page_title: Telerik.Web.UI.RadPdfViewer
description: Telerik.Web.UI.RadPdfViewer
---

# Telerik.Web.UI.RadPdfViewer

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadPdfViewer

## Properties

###  ActivePage `Int32`

The active page number in the viewer.

###  ClientEvents `PdfViewerClientEvents`

Defines the client events handlers.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DefaultPageSizeSettings `DefaultPageSize`

Specifies the default page size if no PDF is displayed in the PdfViewer. The page size will shrink to fit the viewer dimensions.

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

###  MaxSerializerLength `Int32`

Specifies the maximum length of accepted JSON strings.
            Default value is 2 * 1024 * 1024 (2MB=2097152)

###  MessagesSettings `Messages`

Specifies the localization messages of the PdfViewer.

###  PdfjsProcessingSettings `PdfjsProcessing`

Specifies the PDF.JS configuration options. Including pdfjs is mandatory.

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

###  Scale `Scale`

Specifies the default scale of the pages.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  ToolBar `Boolean`

ToolBar option accepts a Boolean value which indicates if the toolbar will be displayed or an Object with items. Inherits Kendo UI ToolBar.

###  ToolBarSettings `Boolean`

ToolBar option accepts a Boolean value which indicates if the toolbar will be displayed or an Object with items. Inherits Kendo UI ToolBar.

###  ZoomMax `Double`

Specifies the maximum zoom that could be applied to the pages.

###  ZoomMin `Double`

Specifies the minimum zoom that could be applied to the pages.

###  ZoomRate `Double`

Specifies the zoom rate that could be applied to the pages. Used when zooming on mousewheel and for the zoomIn and zoomOut tools.

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

Loads the posted content of the list control, if it is different from the last posting.

#### Parameters

#### postDataKey `System.String`

The key identifier for the control, used to index the postCollection.

#### postCollection `System.Collections.Specialized.NameValueCollection`

A  that contains value information indexed by control identifiers.

#### Returns

`System.Boolean` true if the posted content is different from the last posting; otherwise, false.

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

