---
title: Telerik.Web.UI.RadSpell
page_title: Telerik.Web.UI.RadSpell
description: Telerik.Web.UI.RadSpell
---

# Telerik.Web.UI.RadSpell

Telerik RadSpell

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadSpell : INamingContainer

## Properties

###  TagKey `HtmlTextWriterTag`

Gets the  value that corresponds to this Web server control. This property is used primarily by control developers.

###  HandlerUrl `String`

Gets or sets the URL for the spell dialog handler

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

###  AdditionalQueryString `String`

Gets or sets an additional querystring appended to the dialog URL.

###  AllowAddCustom `Boolean`

Gets or sets the value indicating whether the spell will allow adding custom words.

###  AjaxUrl `String`

Gets or sets the URL which the AJAX call will be made to. Check the help for more information.

###  ButtonText `String`

Gets or sets the text of the button that will start the spellcheck. This property is localizable.

###  ButtonType `ButtonType`

Gets or sets the type of the button that will start the spellcheck.

#### Remarks
Values allowed:
                PushButton/LinkButton/ImageButton/
                None.Setting the value to None will not render a button. The only
                way to start a spellcheck will be through the client-side API.

###  ClientTextSource `String`

Gets or sets the class of the client side text source object.

#### Remarks
The text source is a JavaScript object.  It has to provide two methods: GetText() and SetText(newValue).

###  ControlToCheck `String`

The ID of the control to check.

#### Remarks
The ID can be both a server-side ID, or a client-side ID. RadSpell will find the
            appropriate server control and use its ClientID to attach to it.

###  ControlsToCheck `String[]`

An array of IDs of the control to check.

#### Remarks
The IDs can be server-side or client-side. RadSpell will find the
            appropriate server control and use its ClientID to attach to it.
            Note that you cannot mix server and client IDs in this list - use only one kind.

###  CustomDictionarySourceTypeName `String`

Gets or sets the fully qualified type name that will be used to store and read
            the custom dictionary.

#### Remarks
The type name must be fully qualified if the type is in a GAC-deployed assembly.
                The type must implement the
                ICustomDictionarySource
                interface.

###  CustomDictionarySuffix `String`

Gets or sets the suffix for the custom dictionary files.

#### Remarks
The filenames are formed with the following scheme: Language + CustomDictionarySuffix +
            ".txt". Different suffixes can be used to create different custom dictionaries for
            different users.

###  DialogTypeName `String`

Gets or sets the assembly qualified name of the SpellDialog type.

###  DialogVirtualPath `String`

Gets or sets the virtual path of the UserControl that represents the SpellDialog.

###  DictionaryLanguage `String`

Gets or sets the dictionary language used for spellchecking.

#### Remarks
The language name is used to find a corresponding dictionary file. Spellchecking in
                en-US will work only if a file en-US.TDF can be found inside the folder pointed to
                by DictionaryPath.

###  DictionaryPath `String`

Gets or sets the path for the dictionary files.

#### Remarks
This is the path that contains the TDF files, and the custom dictionary TXT
            files.

###  EditDistance `Int32`

Gets or sets a the edit distance. If you increase the value, the checking speed
            decreases but more suggestions are presented. Applicable only in EditDistance mode.

#### Remarks
This property takes effect only if the
                SpellCheckProvider property is set to
                EditDistanceProvider.

###  FragmentIgnoreOptions `FragmentIgnoreOptions`

Configures the spellchecker engine, so that it knows whether to skip URL's, email
            addresses, and filenames and not flag them as erros.

###  IsClientID `Boolean`

Gets or sets a value indicating whether whether the ControlToCheck
            property provides a client element ID or a server side control ID.

#### Remarks
When true RadSpell will look for the server-side control and get
                its ClientID. When false the
                ControlToCheck property will be interpreted as a
                client-side ID and will be used to attach to the target control.

###  Language `String`

Gets or sets the localization language for the user interface.

###  SpellChecked `Boolean`

Gets a value indicating if the target control has been spellchecked.

#### Remarks
Spellchecking the entire text by the client would set the property to
                true on postback.
            The property is used by the SpellCheckValidator class. You can set it on the
                client side with RadSpell's SetSpellChecked(false) on various events, say a
                TEXTAREA's OnChange.

###  SpellCheckProviderTypeName `String`

Allows the use of a custom spell checking provider. It must implement the ISpellCheckProvider interface.

###  SpellCheckProvider `SpellCheckProvider`

Specifies the spellchecking algorithm which will be used by RadSpell.

###  SupportedLanguages `String`

Gets or sets the supported languages.

#### Remarks
The supported languages will be displayed in a drop-down list, and the user can
            select the language for spellchecking.

###  WordIgnoreOptions `WordIgnoreOptions`

Gets or sets the value used to configure the spellchecker engine to ignore words containing: UPPERCASE, some 
            CaPitaL letters, numbers; or to ignore repeated words (very very)

###  OnClientLoad `String`

Gets or sets the name of the client-side function that will be called when the
            spell control is initialized on the page.

#### Remarks
The function should accept two parameters: sender (the spell client object) and arguments.

###  OnClientCheckStarted `String`

Gets or sets the name of the client-side function that will be called when the
            spell check starts.

#### Remarks
The function should accept two parameters: sender (the spell client object) and arguments.

###  OnClientCheckFinished `String`

Gets or sets the name of the client-side function that will be called when the
            spell check is finished.

#### Remarks
The function should accept two parameters: sender (the spell client object) and arguments.

###  OnClientCheckCancelled `String`

Specifies the name of the client-side function that will be called when the user
            cancels the spell check.

#### Remarks
The function should accept two parameters: sender (the spell client object) and arguments.

###  OnClientDialogClosed `String`

Specifies the name of the client-side function that will be called before the
            spell check dialog closes.

#### Remarks
The function should accept two parameters: sender (the dialog opener client object) and arguments.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render links to the embedded client scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed script files by hand.

###  LocalizationPath `String`

Gets or sets a value indicating where the soell will look for its .resx localization files.
            By default these files should be in the App_GlobalResources folder. However, if you cannot put
            the resource files in the default location or .resx files compilation is disabled for some reason 
            (e.g. in a DotNetNuke environment), this property should be set to the location of the resource files.

#### Remarks
If specified, the LocalizationPath
            property will allow you to load the spell localization files from any location in the current
            web application.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  TabIndex `Int16`

Gets or sets the tabindex of the RadSpell SpellCheck Button.

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

###  DescribeComponent

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

