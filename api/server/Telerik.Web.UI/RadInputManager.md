---
title: Telerik.Web.UI.RadInputManager
page_title: Telerik.Web.UI.RadInputManager
description: Telerik.Web.UI.RadInputManager
---

# Telerik.Web.UI.RadInputManager

The RadInputManager offers an easy and intuitive way to extend a standard ASP.NET System.Web.UI.WebControls.TextBox , 
            and without any extra custom code, introduce much functionality, normally related to a Telerik RadInput 
            control. For example, a standard text box control offers no default functionality for text parsing and 
            validation – this has to be done via custom code, either client or server side. This input validation is 
            normally associated with Telerik RadInput controls.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* Telerik.Web.UI.RadControl
* Telerik.Web.UI.InputManagerBase
* Telerik.Web.UI.RadInputManager

## Properties

###  SupportsRenderingMode `Boolean`

###  InputSettings `InputSettingsCollection`

Gets a collection of InputSetting objects that allows for specifying the objects
            for which input elements will be created on the client-side.

###  Enabled `Boolean`

Gets or sets a value indicating whether manager should be enabled or not.

###  SkinID `String`

Gets or sets the skin to apply to the control.

###  RegisterWithScriptManager `ScriptManager`

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

## Methods

###  OnValidating

#### Returns

`System.Void` 

###  OnValidated

#### Returns

`System.Void` 

###  GetSettingByBehaviorID

Finds the  by provided behaviorID.

#### Parameters

#### behaviorID `System.String`

The behaviorID.

#### Returns

`Telerik.Web.UI.InputSetting` 

###  GetSettingsByType

Finds the  by provided type.

#### Parameters

#### type `System.Type`

The type.

#### Returns

`System.Collections.Generic.List`1` 

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

###  RenderScriptsNoScriptManager

#### Returns

`System.Void` 

###  RenderDescriptorsNoScriptManager

#### Returns

`System.Void` 

