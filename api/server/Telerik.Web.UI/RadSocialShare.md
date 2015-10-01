---
title: Telerik.Web.UI.RadSocialShare
page_title: Telerik.Web.UI.RadSocialShare
description: Telerik.Web.UI.RadSocialShare
---

# Telerik.Web.UI.RadSocialShare

Telerik Social Share control

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl
* Telerik.Web.UI.RadSocialShare

## Properties

###  TagKey `HtmlTextWriterTag`

###  CssClassFormatString `String`

###  SupportsRenderingMode `Boolean`

###  Orientation `Orientation`

Get/Set orientation of the buttons. Horizontal by default.

###  DialogWidth `Unit`

Get/Set the width of the social dialog popup.

###  DialogHeight `Unit`

Get/Set the height of the social dialog popup.

###  DialogTop `Unit`

Get/Set the top of the social dialog. It is centered by default.

###  DialogLeft `Unit`

Get/Set the left of the social dialog popup. It is centered by default.

###  Width `Unit`

Get/Set the width of the social share control.

###  Height `Unit`

Get/Set the height of the social share control.

###  UrlToShare `String`

Get/Set the url to share. The default value is empty string which results in sharing the page on which the button resides.

###  TitleToShare `String`

Get/Set the title of the shared message. The default value is an empty string
            which results in sharing the title of the current page or the url itself if there isn't a title.

###  HideIframesOnDialogMove `Boolean`

Get/Set whether IFRAMEs should be hidden while the compact popup or send email dialog is moved. The default value is true.

###  CompactButtons `GenericSocialButtonsCollection`1`

Compact buttons collection.

###  MainButtons `GenericSocialButtonsCollection`1`

Main buttons collection.

###  GoogleAnalyticsUA `String`

Get/set the web property ID for your Analytics account.

###  FacebookAppId `String`

Get/set the FacebookAppId of your Facebook application.

###  YammerAppId `String`

Get/set the Application ID of the Yammer application related to the RadSocialShare buttons

###  EmailSettings `RadSocialShareEmailSettings`

Email settings

###  OnSocialButtonClicking `String`

Get/set the name of the JavaScript function that is called when one of the 
            Styled buttons is clicked. The event is raised before the  event and it can be cancelled.

###  OnSocialButtonClicked `String`

Get/set the name of the JavaScript function that is called after one of the 
            Styled buttons is clicked. The event is raised after the  event and it cannot be cancelled.

###  OnFacebookLike `String`

Get/set the name of the JavaScript function that is called when the Facebook Like standard button is clicked.

###  OnFacebookUnLike `String`

Get/set the name of the JavaScript function that is called when the Facebook UnLike standard button is clicked.

###  OnFacebookSend `String`

Get/set the name of the JavaScript function that is called when the Facebook Send standard button is clicked.

###  OnTweet `String`

Get/set the name of the JavaScript function that is called when the Tweet standard button is clicked.

###  OnLinkedInShare `String`

Get/set the name of the JavaScript function that is called when the LinkedIn standard button is clicked.

###  OnGooglePlusOneOn `String`

Get/set the name of the JavaScript function that is called when the GooglePlus standard button is clicked for approval.

###  OnGooglePlusOneOff `String`

Get/set the name of the JavaScript function that is called when the GooglePlus standard button is clicked for disapproval.

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

###  OnLoad

#### Returns

`System.Void` 

###  emailCaptcha_CaptchaValidate

#### Returns

`System.Void` 

###  DescribeComponent

#### Returns

`System.Void` 

###  CreateChildControls

#### Returns

`System.Void` 

###  CreateControlStyle

#### Returns

`System.Web.UI.WebControls.Style` 

###  RenderContents

#### Returns

`System.Void` 

###  RenderSocialButton

#### Returns

`System.Void` 

###  DecodeItemHTML

#### Returns

`System.Void` 

###  AddButtonSerialization

#### Returns

`System.Void` 

###  GetSerializedCollection

#### Returns

`System.String` 

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

