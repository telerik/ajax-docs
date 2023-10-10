---
title: Telerik.Web.UI.RadAvatar
page_title: Telerik.Web.UI.RadAvatar
description: Telerik.Web.UI.RadAvatar
---

# Telerik.Web.UI.RadAvatar

RadAvatar control is typically used to display images, icons or initials representing people or other entities.
            For more information about the RadAvatar refer to the https://docs.telerik.com/kendo-ui/controls/avatar/overview documentationand its https://docs.telerik.com/kendo-ui/api/javascript/ui/avatar API.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadAvatar

## Properties

###  Border `Boolean`

Specifies whether the avatar should render border around its container element. Default is false.

###  ClassName `String`

Adds additional custom classes to the Avatar container element.

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

###  FillMode `AvatarFillMode`

Specifies the appearance fill style of the Avatar. The available values are "outline", "solid" (default), and "none".

###  Icon `String`

Specifies an icon name to be used if the avatar type is set to icon. For a list of available icon names, please refer to the Web Font Icons article.

###  IsSkinSet `String`

For internal use.

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

###  Rounded `AvatarRounded`

Could be one of the predefined shapes available for the widget container: "Full" (default), "Small", "Medium", "Large", or "None".

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  Size `AvatarSize`

The Avatar allows you to set predefined sizes. The available size values are "Small", "Medium" (default), "Large", or "None".

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  Text `String`

Will be used to populated Avatar content when its type is set to text

###  ThemeColor `AvatarThemeColor`

The Avatar allows you to specify predefined theme colors for background of its container. The available themeColor values are:     - "primary" (Default) - Applies coloring based on primary theme color.     - "base" - Applies base theme color.     - "secondary" - Applies coloring based on secondary theme color.     - "tertiary" - Applies coloring based on tertiary theme color.     - "inherit" - Applies inherited coloring value.     - "info" - Applies coloring based on info theme color.     - "success" - Applies coloring based on success theme color.     - "warning" - Applies coloring based on warning theme color.     - "error" - Applies coloring based on error theme color.     - "dark" - Applies coloring based on dark theme color.     - "light" - Applies coloring based on light theme color.     - "inverse" - Applies coloring based on inverted theme color.     - "none" - Does not apply theme color class.

###  Type `AvatarType`

Could be one of the three predefined types for the widget: icon, image, or text (default).

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

