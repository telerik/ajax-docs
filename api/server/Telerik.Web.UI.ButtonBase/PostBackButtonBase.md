---
title: Telerik.Web.UI.ButtonBase.PostBackButtonBase
page_title: Telerik.Web.UI.ButtonBase.PostBackButtonBase
description: Telerik.Web.UI.ButtonBase.PostBackButtonBase
---

# Telerik.Web.UI.ButtonBase.PostBackButtonBase

RadPostBackButtonBase class provides the PostBack functionality for the RadPushButton, RadImageButton, RadToggleButton, RadRadioButton and RadCheckBox controls.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.ButtonBase.RadButtonBase : INamingContainer
* Telerik.Web.UI.ButtonBase.PostBackButtonBase : IButtonControl, IPostBackEventHandler

## Properties

###  AccessKey `String`

Gets or sets the accessKey of the Button control.

###  AriaSettings `WaiAriaSettings`

Gets the object that controls the Wai-Aria settings applied on the control's element.

###  AutoPostBack `Boolean`

Gets or sets a bool value indicating whether the Button control automatically posts back to the server when clicked.

###  CausesValidation `Boolean`

Gets or sets a value indicating whether validation is performed when the Button control is clicked.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  CommandArgument `String`

Gets or sets an optional parameter passed to the Command event along with the associated CommandName.

###  CommandName `String`

Gets or sets the command name associated with the Button control that is passed to the Command event.

###  CssClass `String`

Gets or sets the CSS class rendered by the Button control on the client.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DisabledCssClass `String`

Gets or sets the CSS class applied to the Button control when it is in a disabled state.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

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

Gets or sets the height of the Button control.

###  HoveredCssClass `String`

Gets or sets the CSS class applied to the Button control when the mouse pointer is over the control.

###  IsSkinSet `String`

For internal use.

###  OnClientClicked `String`

Gets or sets the name of the JavaScript function that will be called when the Button is clicked, after the OnClientClicking event.

###  OnClientClicking `String`

Gets or sets the name of the JavaScript function that will be called when the Button is clicked. The event is cancelable.

###  OnClientLoad `String`

Gets or sets the name of the JavaScript function that will be called when the Button is loaded on the page.

###  OnClientMouseOut `String`

Gets or sets the name of the JavaScript function that will be called when the mouse pointer leaves the Button.

###  OnClientMouseOver `String`

Gets or sets the name of the JavaScript function that will be called when the mouse pointer hovers over the Button.

###  OriginalEnabled `Boolean`

The Enabled property is reset in AddAttributesToRender in order
            to avoid setting disabled attribute in the control tag (this is
            the default behavior). This property has the real value of the 
            Enabled property in that moment.

###  PostBackUrl `String`

Gets or sets the URL of the page to post to from the current page when the Button control is clicked.

###  PressedCssClass `String`

Gets or sets the CSS class applied to the Button control when the control is pressed.

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

###  SingleClick `Boolean`

Gets or sets a bool value indicating whether the Button control will be immediately disabled after the user has clicks it. (i.e. enables/disables "Single Click" functionality)

###  SingleClickText `Boolean`

Gets or sets the text displayed in the Button control after the button is being clicked and disabled. (i.e. the text used for the 'Single Click' functionality)

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  SupportsRenderingMode `Boolean`

Gets or RenderingMode support

###  TabIndex `Int16`

Gets or sets the TabIndex of the Button control.

###  Text `String`

Gets or sets the text displayed in the Button control.

###  ToolTip `String`

Gets or sets the text that will be displayed in the tooltip of the Button control when it is hovered.

###  UseSubmitBehavior `Boolean`

Gets or sets a value indicating whether the Button control uses the client browser's submit mechanism or the ASP.NET postback mechanism.

###  ValidationGroup `String`

Gets or sets the group of controls for which the Button control causes validation when it posts back to the server.

###  Value `String`

Gets or sets an optional Value of the Button control.

###  Width `Unit`

Gets or sets the width of the Button control.

## Methods

###  AddAttributesToRender

Adds the attributes of the RadButton control to the output stream for rendering on the client.

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

An HtmlTextWriter that contains the output stream to render on the client.

#### Returns

`System.Void` 

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

###  GetPostbackEventReference

Creates a PostBackOptions object that represents the RadButton control's postback behavior, and returns the client script 
            generated as a result of the PostBackOptions.

#### Returns

`System.String` The client script that represents the RadButton control's PostBackOptions.

###  GetPostBackOptions

Creates a PostBackOptions object that represents the RadButton control's postback behavior.

#### Returns

`System.Web.UI.PostBackOptions` A PostBackOptions that represents the RadButton control's postback behavior.

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

