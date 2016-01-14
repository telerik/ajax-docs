---
title: Telerik.Web.UI.RadCaptcha
page_title: Telerik.Web.UI.RadCaptcha
description: Telerik.Web.UI.RadCaptcha
---

# Telerik.Web.UI.RadCaptcha

This control serves as spam protection mechanism.
            It implements 3 strategies:
            1. Auto-detection - if this strategy is chosen, then we use predefined rules
            which decide whether the input comes from a robot or not. This strategy is not
            100% secure and some sophisticated robots may pass it so it should be used in
            personal websites with low traffic and where spam robots are not very likely to
            drop by. If such robots are found to visit the site, the use of the more secure
            strategy is more advisable.
            2. RadCaptcha - if this strategy is chosen, then an image with obfuscated
            text is displayed and the user is required to input this text in a
            textbox thus allowing the control to validate whether s/he is a robot
            or not. This is the most secure method to protect from spam but it is
            considered to be inaccessible because disabled people may not see the
            text in the image!
            TODO in future release: 3. Subscribe to anti-spam services. This last spam protection
            mechanism is used to validate the input against public or private web services
            which given the input return whether or not it is considered to be spam.
            Some services claim that they catch more than 90% of the spam so
            this type of protection is fairly secure and can be used in small to medium
            websites but not in large-scale websites.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadCaptcha : INamingContainer, IValidator

## Properties

###  AccessKey `String`

Gets or sets the RadCaptcha text box access key.

###  AudioAccessKey `String`

Gets or sets the access key for the Get Audio Code link.

###  CaptchaAudioLinkButtonText `String`

Gets or sets the text of the LinkButton that gets the Captcha Audio Code.

###  CaptchaImage `CaptchaImage`

Gets the CaptchaImage object of RadCaptcha

###  CaptchaLinkButtonText `String`

Gets or sets the text of the LinkButton that generates new CaptchaImage.

###  CaptchaMaxTimeout `Int32`

Gets or sets the maximum number of minutes RadCaptcha will be cached and valid. 
            If you're too slow, you may be a RadCaptcha hack attempt. Set to zero to disable.

###  CaptchaTextBoxCssClass `String`

Gets or sets the CSS class applied to the RadCaptcha input textbox.

###  CaptchaTextBoxLabel `String`

Gets or sets the label which explains that the user needs to input the RadCaptcha text box.

###  CaptchaTextBoxLabelCssClass `String`

Gets or sets the CSS class to the label which explains that the user needs to input the RadCaptcha text box.

###  CaptchaTextBoxTitle `String`

Gets or sets the title of the RadCaptcha input textbox.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  Display `ValidatorDisplay`

Gets or sets display behavior of error message.

###  DownloadAudioText `String`

Gets or sets the text displayed in the Download Audio Code link.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  Enabled `Boolean`

Gets or sets a value indicating whether the Web server control is enabled.

###  EnableDownloadAudio `Boolean`

Defines whether Download Audio Code link should be rendered.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.
            This control features no skins, so this property must be set to false.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `Boolean`

Gets or sets the value, indicating whether to render links to the embedded skins or not. 
            This control features no skins, so this property must be set to false.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableMissingPluginNotification `Boolean`

Defines whether notification panel for missing audio plug-in should be displayed if one is not installed on the client's machine.

###  EnableRefreshImage `Boolean`

Gets or sets a bool value indicating whether or not the RadCaptchaImage can be refreshed. 
            The "rcRefreshImage" CSS class should be used for changing the skinning of the LinkButton,
            that generates the new image.

###  ErrorMessage `String`

The error message text generated when the condition being validated fails.

###  ForeColor `Color`

Gets or sets the fore color of the error message.

###  HttpHandlerUrl `String`

Specifies the URL of the HTTPHandler that serves the captcha image.

#### Remarks
The HTTPHandler should either be registered in the application configuration
            		file, or a file with the specified name should exist at the location, which
            		HttpHandlerUrl points to.
            	
            		If a file is to serve the files, it should inherit the class Telerik.Web.UI.WebResource

###  IgnoreCase `Boolean`

Gets or sets a bool value indicating whether the RadCaptcha should ignore  
            the case of the letters or not.

###  ImageStorageLocation `CaptchaImageStorage`

Gets or sets the storage medium for the CaptchaImage.

#### Remarks
When the image is stored in the session the RadCaptcha HttpHandler 
            definition (in the web.config file) must be changed from type="Telerik.Web.UI.WebResource" to 
            type="Telerik.Web.UI.WebResourceSession" so that the image can be retrieved from the Session.

###  InvisibleTextBoxLabel `String`

Gets or sets the invisible textbox strategy label text.

###  IsSkinSet `String`

For internal use.

###  IsValid `Boolean`

Gets or sets a value indicating whether the user-entered content in the RadCaptcha control passes validation.

###  MinTimeout `Int32`

Gets or sets the minimum number of seconds the form must be displayed 
            before it is valid. If you're too fast, you must be a robot.

###  MissingPluginText `String`

Gets or sets the text displayed in the MissingPlugin download link.

###  OnClientLoad `String`

Gets or sets the name of the JavaScript function that will be called when the RadCaptcha is loaded on the page.

###  ProtectionMode `ProtectionStrategies`

Gets or sets which strategies are/to be used for automatic
             robot discovery.

###  RefreshImageAccessKey `String`

Gets or sets the access key for generating new captcha image.

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

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  TabIndex `Int16`

Gets or sets the tab index of the RadCaptcha text box.

###  TextBoxDecoration `WebControlDecorator`

Composite property containing decoration options of the inner TextBox control

###  TextBoxLabelDecoration `WebControlDecorator`

Composite property containing decoration options of the inner Label control

###  ValidatedTextBox `TextBox`

Gets the TextBox that is being validated by the RadCaptcha.

###  ValidatedTextBoxID `String`

Gets or sets the ID of the textbox to be validated, 
            when only the RadCaptcha image is rendered on the page.

###  ValidatedTextControl `ITextControl`

Gets the ITextControl that is being validated by the RadCaptcha.

###  ValidationGroup `String`

Gets or sets the validation group.

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  EvaluateIsValid

Determines whether the RadCaptcha control is valid.

#### Returns

`System.Boolean` The bool value that indicates whether the RadCaptcha is valid.

###  FindTextBox

Searches for the validated Text control

#### Returns

`System.Web.UI.Control` A control that gets validated.

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  GetValidationCssClass

Gets the CSS class set to the RadCaptcha after validation occurs.
            If RadCaptcha.IsValid=true, the "rcValid" is returned and "rcInvalid" when the captcha is not valid.

#### Parameters

#### isValid `System.Boolean`

Bool value indicating whether the user entered the correct value.

#### Returns

`System.String` Returns "rcValid" if the captcha is valid (RadCaptcha.IsValid=true), otherwise "rcInvalid".

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

###  OnCaptchaValidate

Raises the CaptchaValidate event before the default validation executes.

#### Parameters

#### e `Telerik.Web.UI.CaptchaValidateEventArgs`

A CaptchaValidateEventArgs that contains the event data.

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

###  Validate

Performs validation of the RadCaptcha control.

#### Returns

`System.Void` 

