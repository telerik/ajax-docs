---
title: Telerik.Web.UI.DialogOpener
page_title: Telerik.Web.UI.DialogOpener
description: Telerik.Web.UI.DialogOpener
---

# Telerik.Web.UI.DialogOpener

This class is provided for backwards compatibility with old solutions.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadDialogOpener : INamingContainer
* Telerik.Web.UI.DialogOpener

## Properties

###  AdditionalQueryString `String`

Gets or sets an additional querystring appended to the dialog URL.

###  Animation `WindowAnimation`

Get/Set the animation effect of the window

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DialogDefinitions `DialogDefinitionDictionary`

Gets the DialogDefinitionDictionary, containing the DialogDefinitions of the managed dialogs.

#### Remarks
TODO

###  DialogsCssFile `String`

Gets or sets the location of a CSS file, that will be added in the dialog window. If you need to include 
            more than one file, use the CSS @import url(); rule to add the other files from the first.
            This property is needed if you are using a custom skin. It allows you to include your custom skin
            CSS in the dialogs, which are separate from the main page.

###  DialogsScriptFile `String`

Gets or sets the location of a JavaScript file, that will be added in the dialog window. If you need to include 
            more than one file, you will need to combine the scripts into one first.
            This property is needed if want to override some of the default functionality without loading the dialog
            from an external ascx file.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render links to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed script files by hand.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableTelerikManagers `Boolean`

When set to True, tells the dialog opener to use RadScriptManager and RadStyleSheetManager when loading an .ascx dialog file.

###  IsSkinSet `String`

For internal use.

###  Language `String`

Gets or sets the localization language for the user interface.

###  OnClientClose `String`

Gets or sets the client-side script that gets executed when the dialog closing event is raised

###  OnClientOpen `String`

Gets or sets the client-side script that gets executed when the dialog opening event is raised

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

###  ShouldRegisterCssReferences `Boolean`

This control has no skin! This property will prevent the SkinRegistrar from
            registering the missing CSS references.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  UseClassicDialogs `Boolean`

Gets or sets a value, indicating if classic windows will be used for opening a dialog.

#### Remarks
When set to true, the RadDialogOpener shows a dialog similar to the
            ones opened by window.open and window.showModalDialog;

###  Window `RadWindow`

A read-only property that returns the RadWindow instance used in the RadDialogOpener control.

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

###  SerializeManagerParameters

If the EnableTelerikManagers property is set to true, this function should be called to copy the settings 
            (CDN, handler URL, etc.) to the script/stylesheet manager control in the dialogs.

#### Returns

`System.Void` 

