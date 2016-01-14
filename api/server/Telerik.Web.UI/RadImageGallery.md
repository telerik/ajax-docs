---
title: Telerik.Web.UI.RadImageGallery
page_title: Telerik.Web.UI.RadImageGallery
description: Telerik.Web.UI.RadImageGallery
---

# Telerik.Web.UI.RadImageGallery

RadImageGallery control. See http://docs.telerik.com/devtools/aspnet-ajax/controls/imagegallery/overview RadImageGallery Overviewtopic for more information.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* System.Web.UI.WebControls.CompositeDataBoundControl
* Telerik.Web.UI.RadCompositeDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadImageGallery : ICallbackEventHandler, IPostBackEventHandler

## Properties

###  AccessKey `String`

Gets or sets the access key that allows you to quickly navigate to the
            Web server control.

###  AllowPaging `Boolean`

Gets or sets a value indicating whether the automatic paging feature is
            enabled.

###  AppendDataBoundItems `ImageGalleryItemCollection`

Gets or sets a value that indicates whether  collection is cleared before DataBinding.

###  BackColor `Color`

Gets or sets the background color of the Web server control.

###  BorderColor `Color`

Gets or sets the border color of the Web control.

###  BorderStyle `BorderStyle`

Gets or sets the border style of the Web server control.

###  BorderWidth `Unit`

Gets or sets the border width of the Web server control.

###  ClientDataSourceID `Object`

Gets or sets the ID of the ClientDataSource control which is used for client-side databinding scenarios.

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ClientSettings `ImageGalleryClientSettings`

Gets the settings associated with the  Toolbar.

###  CssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class rendered by the Web
            server control on the client.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  Culture `CultureInfo`

Gets or sets the selected culture. Localization strings will be loaded based on this value.

###  CurrentItemIndex `Int32`

Gets or sets a value indicating the index of the current page the RadImageGallery is paged on.

###  CurrentPageIndex `Int32`

Gets or sets an integer value representing the current page index.

#### Remarks
Note that the  should be 
            set to 'true' in order for the property to take effect.

###  DataDescriptionField `String`

Gets or sets a string value determining the field in the 
            which the  control will bind its items'
             property.

###  DataImageField `String`

Gets or sets a string value determining the field in the 
            which the  control will bind its items'
             or  property.
            The field could be of type String for specifying the  value.
            Or byte array(byte[]) for specifying the .

###  DataKeyNames `String[]`

Gets or sets an array of data-field names that will be used to
            populate the DataKeyValues collection, when the 
            control is databinding.

###  DataMember `String`

Gets or sets the name of the list of data that the data-bound control
            binds to, in cases where the data source contains more than one distinct list
            of data items.

###  DataSource `Object`

Gets or sets the object from which the data-bound control retrieves
            its list of data items.

###  DataSource `Object`

Gets or sets the object from which the data-bound control retrieves
            its list of data items.

###  DataSourceID `Object`

Gets or sets the ID of the control from which the data-bound control
            retrieves its list of data items.

###  DataSourceID `Object`

Gets or sets the ID of the control from which the data-bound control
            retrieves its list of data items.

###  DataThumbnailField `String`

Gets or sets a string value determining the field in the 
            which the  control will bind its items'
             or  property.
            The field could be of type String for specifying the  value.
            Or byte array(byte[]) for specifying the .

###  DataTitleField `String`

Gets or sets a string value determining the field in the 
            which the  control will bind its items'
             property.

###  DisplayAreaMode `ImageGalleryDisplayAreaMode`

Gets or sets a value indicating the mode the  control will operate in.
            The mode determines the appearance and the way the entire control will work.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  Enabled `Boolean`

Gets or sets a value indicating whether the Web server control is enabled.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  EnableEmbeddedBaseStylesheet `Boolean`

Gets or sets the value, indicating whether to render the link to the embedded base stylesheet of the control or not.

#### Remarks
If EnableEmbeddedBaseStylesheet is set to false you will have to register the needed control base CSS file by hand.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

###  EnableEmbeddedSkins `Boolean`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableEmbeddedSkins `String`

Gets or sets the value, indicating whether to render links to the embedded skins or not.

#### Remarks
If EnableEmbeddedSkins is set to false you will have to register the needed CSS files by hand.

###  EnableTheming `Boolean`

Gets or sets a value indicating whether themes apply to this control.

###  EnableViewState `Boolean`

Gets or sets a value indicating whether the server control persists
            its view state, and the view state of any child controls it contains, to the
            requesting client.

###  Font `FontInfo`

Gets the font properties associated with the Web server control.

###  ForeColor `Color`

Gets or sets the foreground color (typically the color of the text)
            of the Web server control.

###  Height `Unit`

Gets or sets the height of the Web server control.

###  ImageAreaSettings `ImageGalleryImageArea`

Gets the settings for the  ImageArea.

###  ImagesFolderPath `String`

A relative or absolute path to a folder from which the RadImageGallery items will be populated.

###  IsSkinSet `String`

For internal use.

###  Items `ImageGalleryItemCollection`

Gets the items collection which holds the data associated with the items 
            that will be populated in the ThumbnailArea and the items that will be
            shown in the current content view mode.

###  LightBox `RadLightBox`

Gets a reference to the  control used when
             is equal to 'LightBox'.

###  LoadingPanel `RadAjaxLoadingPanel`

Gets the  control that will be displayed
            when waiting for the image

###  LocalizationPath `ImageGalleryStrings`

Gets or sets a value indicating where RadImageGallery will look for its .resx localization file.
            By default this file should be in the App_GlobalResources folder. However, if you cannot put
            the resource file in the default location or .resx files compilation is disabled for some reason 
            (e.g. in a DotNetNuke environment), this property should be set to the location of the resource file.

#### Remarks
If specified, the LocalizationPath
            property will allow you to load the grid localization file from any location in the 
            web application.

###  LoopItems `ImageGalleryItemCollection`

If enabled, this will loop the items when the last/first one is reached.

###  PagerStyle `ImageGalleryPagerStyle`

Gets a reference to the , which holds
            properties for controlling the behavior of the 
            pager item.

###  PageSize `Int32`

Gets or sets an integer value indicating the number of items that will be populated
            in the  ThumbnailArea.

#### Remarks
Note that the  should be 
            set to 'true' in order for the property to take effect.

###  RadToolTip `RadToolTip`

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

###  ShowLoadingPanel `RadAjaxLoadingPanel`

Determines if the  control will display loading panel when image is being loaded.

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

###  SkinID `String`

Gets or sets the skin to apply to the control.

###  TabIndex `Int16`

Gets or sets the tab index of the Web server control.

###  ThumbnailListView `RadListView`

Gets a reference to the  control that 
            is used inside the  ThumbnailArea.
            The  holds the thumbnails items created from the
             collection.

###  ThumbnailsAreaSettings `ImageGalleryThumbnailsArea`

Gets the settings for the  ThumbnailArea.

###  ToolbarSettings `ImageGalleryToolbarSettings`

Gets the settings associated with the  Toolbar.

###  ToolTip `String`

Gets or sets the text displayed when the mouse pointer hovers over the
            Web server control.

###  Visible `Boolean`

Gets or sets a value that indicates whether a server control is rendered
            as UI on the page.

###  Width `Unit`

Gets or sets the width of the Web server control.

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

`System.Boolean` 

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

###  Rebind

Rebinds the ThumbnailsArea.ListView control and
            recreates all controls required for the  to recreates
            itself successfully.

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

