---
title: Telerik.Web.UI.RadLightBox
page_title: Telerik.Web.UI.RadLightBox
description: Telerik.Web.UI.RadLightBox
---

# Telerik.Web.UI.RadLightBox

RadLightBox control. See the http://docs.telerik.com/devtools/aspnet-ajax/controls/lightbox/overview Overviewtopic for more information.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadLightBox : INamingContainer, IPostBackEventHandler

## Properties

###  AppendDataBoundItems `RadLightBoxItemCollection`

Gets/sets a value that indicates whether list items are cleared before databinding

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ClientSettings `LightBoxClientSettings`

RadLightBox Client Settings

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  Culture `CultureInfo`

Gets or sets the selected culture. Localization strings will be loaded based on this value.

###  CurrentItemIndex `RadLightBoxItem`

Gets/sets the current item index

###  DataDescriptionField `String`

The field in the data source which provides the description text.

###  DataImageUrlField `String`

The field in the data source which provides the ImageUrl.

###  DataImageUrlFormatString `String`

This property enables setting a default path for the images when binding

###  DataNavigateUrlField `String`

The field in the data source which provides the NavigateUrl.

###  DataTargetControlIDField `String`

The field in the data source which provides the target control's ID.

###  DataTitleField `String`

The field in the data source which provides the title text.

###  DescriptionPosition `LightBoxDescriptionPosition`

Determines the position of the RadLightBox title/description

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableAriaSupport `Boolean`

Determines if the control will have WAI-ARIA support enabled

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

###  EnableGlowEffect `Boolean`

Enables or disables the "glow" effect around the control

###  EnableRippleEffect `Boolean`

Returns true if ripple effect should be added

###  IsSkinSet `String`

For internal use.

###  Items `RadLightBoxItemCollection`

RadLightBox Items Collection

###  ItemsCount `RadLightBoxItemCollection`

Returns the items count

###  ItemsCounterFormatString `RadLightBoxItemCollection`

Gets/sets the items counter format string. The first parameter is the item index and the second is the total number of items. The second parameter is optional.

###  LightBoxDescriptionContainer `PlaceHolder`

The container that holds the description

###  LightBoxItemContainer `PlaceHolder`

The container that holds the main content

###  LightBoxTitleContainer `PlaceHolder`

The container that holds the title

###  LocalizationPath `LightBoxStrings`

Gets or sets a value indicating where RadLightBox will look for its .resx localization file.
            By default this file should be in the App_GlobalResources folder. However, if you cannot put
            the resource file in the default location or .resx files compilation is disabled for some reason 
            (e.g. in a DotNetNuke environment), this property should be set to the location of the resource file.

#### Remarks
If specified, the LocalizationPath
            property will allow you to load the grid localization file from any location in the 
            web application.

###  LoopItems `RadLightBoxItemCollection`

If enabled, this will loop the items when the last/first one is reached

###  Modal `Boolean`

Determines whether the RadLightBox is modal

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  PreserveCurrentItemTemplates `RadLightBoxItem`

If set to true, this will prevent disposing of the current item's templates which will avoid 
            the postback when only one template item is available in the items collection and the lightbox is closed and then re-opened.
            Disabled by default.

#### Remarks
See the RadLightBox Templates article for more detail: https://docs.telerik.com/devtools/aspnet-ajax/controls/lightbox/functionality/templates

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

###  ShowCloseButton `Boolean`

Determines whether the Close button will be visible

###  ShowLoadingPanel `RadAjaxLoadingPanel`

Determines whether the RadLightBox will display loading panel

###  ShowMaximizeButton `Boolean`

Determines whether the Maximize button will be visible

###  ShowNextButton `Button`

Determines whether the Next button will be visible

###  ShowPrevButton `Button`

Determines whether the Prev button will be visible

###  ShowRestoreButton `Boolean`

Determines whether the Restore button will be visible

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  TabIndex `Int16`

Gets or sets the tab index of the RadLightBox control.
            Setting this to 0 will prevent the normal operation of the keyboard navigation.

###  ZIndex `Int32`

Gets or sets the z-index of the LightBox popup

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

###  OnCommand

Raises  event

#### Parameters

#### e `Telerik.Web.UI.LightBoxCommandEventArgs`

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

