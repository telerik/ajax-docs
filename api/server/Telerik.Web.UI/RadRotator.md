---
title: Telerik.Web.UI.RadRotator
page_title: Telerik.Web.UI.RadRotator
description: Telerik.Web.UI.RadRotator
---

# Telerik.Web.UI.RadRotator

RadRotator Control

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl
* Telerik.Web.UI.RadRotator

## Properties

###  RotatorType `RotatorType`

Specifies the type of rotator [how the rotator will render and what options the user will have for interacting with it on the client]

###  ScrollDirection `RotatorScrollDirection`

Specifies possible directions for scrolling rotator items.

###  ScrollDuration `Int32`

Specifies the speed in milliseconds for scrolling rotator items.

###  InitialItemIndex `Int32`

Specifies the index of the item, which will be shown first when the rotator loads.
            When set to 0 (default) - positions initial item to be visible in the rotator.
            When set to -1 - positions the initial item just outside of the rotator viewport.
            Any other positive value - the rotator starts with that particular item in the viewport.

###  PersistCurrentItemOnPostBack `Boolean`

Gets or sets a value indicating whether the index of current item is persisted between postbacks.

###  FrameDuration `Int32`

Specifies the time in milliseconds each frame will display in automatic scrolling scenarios.

###  ItemWidth `Unit`

Specifies the default rotator item width.

###  ItemHeight `Unit`

Specifies the default rotator item height.

###  ClientTemplate `String`

Gets or sets the HTML template that will be used when the Rotator is databound to ClientDataSource.

###  WebServiceSettings `WebServiceSettings`

Gets the settings for the web service used to populate items

#### Remarks
Use the WebServiceSettings property to configure the web
            		service used to populate items on demand.
            		You must specify both Path and
                    Method
            		to fully describe the service.
                
            		In order to use the integrated support, the web service should have the following signature:
            		
            		
            		[ScriptService]
            		public class WebServiceName : WebService
            		{
            			[WebMethod]
            			public RadRotatorItemData[] WebServiceMethodName(int itemIndex, int itemCount)
            			{
            				List<RadRotatorItemData> result = new List<RadRotatorItemData>();
            				RadRotatorItemData item; 
            				for (int i = 0; i < itemCount; i++)
            				{
            					item = new RadRotatorItemData();
            					item.Html = "test "+(itemIndex+i);
            					result.Add(item);
            				}
            				return result.ToArray();
            			}
            		}

###  Height `Unit`

Gets or sets the height of the Web server control. The default height is 200 pixels.

###  Width `Unit`

Gets or sets the width of the Web server control. The default width is 200 pixels.

###  AutoPostBack `Boolean`

Gets or sets a value indicating whether a postback to the server automatically occurs when the user interacts with the control.

#### Remarks
Setting this property to true will make Telerik RadRotator postback to the server 
            on item click.

###  PauseOnMouseOver `Boolean`

Gets or sets a value indicating whether to pause the rotator scrolling when the mouse is over a roatator item

###  EnableRandomOrder `Boolean`

Gets or sets a value indicating whether to randomize the order of display for the rotator items.

###  EnableDragScrolling `Boolean`

Gets or sets a flag determining if drag-scrolling should be enabled.

###  BannersPath `String`

Gets or sets the virtual path where the rotator will look for ads/banners (images) to play.
            This property basically enables the Ad mode of the Rotator. The default value is string.Empty.

###  AppendClientDataBoundItems `RadRotatorItemCollection`

Specifies whether the Rotator items created on the client-side should be cleared before data binding.

###  OnClientItemClicking `String`

The name of the javascript function called when an item is clicked.

###  OnClientItemClicked `String`

The name of the javascript function called after an item is clicked.

###  OnClientMouseOver `String`

The name of the javascript function called when the mouse hovers over an item.

###  OnClientMouseOut `String`

The name of the javascript function called after the mouse leaves an item.

###  OnClientItemShowing `String`

The name of the javascript function called when an item is about to be shown.

###  OnClientItemShown `String`

The name of the javascript function called after an item has been shown.

###  OnClientLoad `String`

The name of the javascript function called when the rotator is loaded on the client. The function
            is called right before the automatic animation (if used) begins.

###  OnClientItemsRequesting `RadRotatorItemCollection`

Gets or sets a value indicating the client-side event handler that is called when
            the RadRotator items are about to be populated when load on demand(from web service).The event is cancellable

###  OnClientItemsRequested `RadRotatorItemCollection`

Gets or sets a value indicating the client-side event handler that is called when
            the RadRotator items were just populated when load on demand(from web service).

###  OnClientItemsRequestFailed `RadRotatorItemCollection`

Gets or sets a value indicating the client-side event handler that is called when
            the operation for populating the RadRotator when load on demand has failed.

###  OnClientItemDataBound `String`

Gets or sets the name of the JavaScript function that will be called when an item is databound on the client-side.

###  OnClientDataBound `String`

Gets or sets the name of the JavaScript function that will be called when the Rotator is databound on the client-side.

###  OnClientTemplateDataBound `String`

Gets or sets the name of the JavaScript function called when the client template for an item is evaluated.

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

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

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
            HTML 5/CSS 3 html and css. If the set value is Auto use ResolvedRenderMode to receive the actual RenderMode
            with respect to the user angent of the current request.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DefaultCssClass `String`

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ScriptManager `ScriptManager`

###  RadScriptManager `ScriptManager`

## Methods

###  DescribeClientProperties

#### Returns

`System.Void` 

###  DescribeClientEvents

#### Returns

`System.Void` 

###  BindToEnumerableData

Binds the rotator to a IEnumerable data source

#### Parameters

#### dataSource `System.Collections.IEnumerable`

IEnumerable data source

#### Returns

`System.Void` 

###  RenderBeginTag

#### Returns

`System.Void` 

###  BindToBanners

Binds the RadRotator to the collection of images found in the provided .
            If no path is provided the Rotator will use the data source provided.

#### Remarks
This method is called by the RadRotator on PreRender.
            Therefore you don't have to call it unless you want to explicitly force the rotator to request its items.

#### Parameters

#### forceBind `System.Boolean`

Forces the rotator to request the images from the specified location.

#### Returns

`System.Void` 

###  GetBanners

Gets all the images (used as banners/ads) from the specified folder.

#### Parameters

#### virtualPath `System.String`

The virtual path to the folder where the images will be taken.

#### allowedExtensions `System.String`

The string of comma-separated allowed image extensions.

#### Returns

`System.Collections.Generic.List`1` Collection of all the images in the specified folder.

###  GetImageExtensions

Gets a string of comma-separated allowed image extensions when the rotator searches the  for image files.

#### Returns

`System.String` The string of comma-separated allowed image extensions. The default allowed extensions are: "*.jpg,*.jpeg,*.gif,*.png,*.bmp,".

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

###  DescribeRenderingMode

Should be  used by inheritors

#### Returns

`System.Void` 

###  DescribeProperty

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

