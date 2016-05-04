---
title: Telerik.Web.UI.RadXmlHttpPanel
page_title: Telerik.Web.UI.RadXmlHttpPanel
description: Telerik.Web.UI.RadXmlHttpPanel
---

# Telerik.Web.UI.RadXmlHttpPanel

RadXmlHttpPanel class

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadXmlHttpPanel : ICallbackEventHandler

## Properties

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableClientScriptEvaluation `Boolean`

Gets or sets a boolean value indicating whether or not the client scripts loaded by the RadControls 
            hosted inside the RadXmlHttpPanel should be executed.

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

###  LoadingPanelID `String`

Gets or sets the ID of the RadAjaxLoadingPanel control that will be displayed over the control during the partial page update.

###  MaxJsonLength `Int32`

Property to define the maximum length of the Value for the XmlHttpPanel. The default is 2097152 characters, which is equivalent to 4 MB of Unicode string data.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  RenderMode `XmlHttpPanelRenderMode`

Gets or sets a value that indicates how the content of an RadXmlHttpPanel control will be wrapped on a page.
            In-line means the content will be wrapped in a span tag (Default), while Block means that the content will be wrapped in a div.

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

###  Value `String`

Gets or sets a string value depending on which a certain content is loaded in the RadXmlHttpPanel.

###  WcfRequestMethod `XmlHttpPanelWcfRequestMethod`

Gets or sets the request method for WCF Service used to populate content GET, POST, PUT, DELETE

###  WcfServiceMethod `String`

Gets or sets a string value that indicates the WCF Service method used by the RadXmlHttpPanel.

###  WcfServicePath `String`

Gets or sets a string value that indicates the virtual path of the WCF Service used by the RadXmlHttpPanel.

###  WebMethodName `String`

Gets or sets a string value that indicates the WebService method used by the RadXmlHttpPanel.

###  WebMethodPath `String`

Gets or sets a string value that indicates the virtual path of the WebService used by the RadXmlHttpPanel.

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

