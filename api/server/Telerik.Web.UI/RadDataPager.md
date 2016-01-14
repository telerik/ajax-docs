---
title: Telerik.Web.UI.RadDataPager
page_title: Telerik.Web.UI.RadDataPager
description: Telerik.Web.UI.RadDataPager
---

# Telerik.Web.UI.RadDataPager

RadDataPager can be used to display paging navigation controls for other 
            data-bound controls that implement the IPageableItemContainer or 
            IRadPageableItemContainer interface (like the RadListView and MS ListView). 
            The RadDataPager control lets users view large sets of data in small chunks 
            for faster loading and easier navigation. It also provides a set of events, 
            helper methods and properties for custom intervention.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* Telerik.Web.UI.RadWebControl : IControl, IControlResolver, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadDataPager : ICompositeControlDesignerAccessor, INamingContainer, IPostBackEventHandler

## Properties

###  AllowRouting `Boolean`

Gets or sets if the  routing is enabled.

###  AllowSEOPaging `Boolean`

Get or set whether SEO paging should be used.

###  ClientEvents `RadDataPagerClientEvents`

Gets a reference to , which holds
                properties for setting the  client-side events

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ContainerLocator `PageableItemContainerLocator`

Gets reference to 
            which helps in search for controls by ID, Type or finding the controls
            implementing .

###  Controls `ControlCollection`

Gets a  object that represents
            the child controls for a specified server control in the UI hierarchy.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  Culture `CultureInfo`

Gets or sets the selected culture. Localization strings will be loaded based on this value.

###  CurrentPageIndex `Int32`

Gets the index of the current page.

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

###  Fields `RadDataPagerFieldCollection`

Gets a collection of  items.

###  IsSkinSet `String`

For internal use.

###  LocalizationPath `DataPagerStrings`

Gets or sets a value indicating where RadDataPager will look for its .resx localization file.
            By default this file should be in the App_GlobalResources folder. However, if you cannot put
            the resource file in the default location or .resx files compilation is disabled for some reason 
            (e.g. in a DotNetNuke environment), this property should be set to the location of the resource file.

#### Remarks
If specified, the LocalizationPath
            property will allow you to load the grid localization file from any location in the 
            web application.

###  MaximumRows `Int32`

Gets the maximum rows.

###  OriginalPageSize `Int32`

It is used for storing page size set declaratively
            In order to show this page size in the combo box with page sizes

###  PageableItemContainer `IRadPageableItemContainer`

Read only property. Holds reference to control that implements 
            IRadPageableItemContainer or IPageableItemContainer.

###  PageCount `Int32`

Gets the page count of the target paged control.

###  PagedControlID `String`

Gets or sets the ID of the control which will be paged.

###  PageSize `Int32`

Gets or sets the page size of the target paged control.

###  RegisterWithScriptManager `Boolean`

Gets or sets the value, indicating whether to register with the ScriptManager control on the page.

#### Remarks
If RegisterWithScriptManager is set to false the control can be rendered on the page using Web Services or normal callback requests/page methods.

###  RemoveUrlFromDisabledHyperLinkButtons `Boolean`

When SEO paging is enabled this property will remove the URL from the HyperLink buttons and will replace it with sharp sign (#). No 'return false' will be used in this case.

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  RouteName `String`

Gets or sets the name of the route.

###  RoutePageIndexParameterName `String`

Gets or sets the name of the route page index parameter.

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  SEOPagingQueryPageKey `String`

Get or set query string key for SEO paging. This property may be used in conjunction with 
            AllowSEOPaging

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  StartRowIndex `Int32`

Gets the start row index in the specified data source.

###  TotalRowCount `Int32`

Gets the total row count which represents the count in the specified data source.

## Methods

###  AddListenersToContainer

Add listener to IRadPageableItemContainer events.

#### Returns

`System.Void` 

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  CallCommand

Raises  event

#### Parameters

#### e `Telerik.Web.UI.RadDataPagerCommandEventArgs`

#### Returns

`System.Void` 

###  CallCommandToContainer

This method is called whenever any command bubbles from RadDataPagerField. If the command can be handled from RadDataPager
            it will return true and event bubbling will be prevented. If command name is custom return value will be false and command
            will continue to bubble.

#### Parameters

#### commandName `System.String`

Could be any of the predefined RadDataPager commands or any custom command.

#### commandArgument `System.String`

Could be any of the predefined RadDataPager commands arguments or any custom argument.

#### Returns

`System.Boolean` Return false will command should continue bubble or true if command is handled by RadDataPager.

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  CreateDataPagerFields

This method is called to create all RadDataPager fields.

#### Returns

`System.Void` 

###  FireCommand

Triggers command on RadDataPager.

#### Parameters

#### commandName `System.String`

Command that will be fired.

#### commandArgument `System.String`

Arguments of the command.

#### Returns

`System.Void` 

###  FireCommand

Triggers command on RadDataPager.

#### Parameters

#### commandArgs `Telerik.Web.UI.RadDataPagerCommandEventArgs`

Command argument to be processed by RadDataPager

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  HandleSEOPaging

This method checks query string for the key specified by SEOPagingQueryPageKey and
            if present attempt to page.

#### Returns

`System.Void` 

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

###  OnBubbleEvent

Handles event that bubbles from any RadDataPagerField. Command event will be triggered.

#### Parameters

#### source `System.Object`

#### args `System.EventArgs`

#### Returns

`System.Boolean` 

###  OnPageIndexChanged

Raises  event

#### Parameters

#### e `Telerik.Web.UI.RadDataPagerPageIndexChangeEventArgs`

#### Returns

`System.Void` 

###  OnTotalRowCountAvailable

This method is called when total row count is supplied by IRadPageableContainer.

#### Parameters

#### sender `System.Object`

IRadPageableContainer itself

#### e `Telerik.Web.UI.RadDataPagerPageEventArgs`

DataPagerPageEventArgs arguments for creating pager fields

#### Returns

`System.Void` 

###  OnTotalRowCountRequest

Raises  event

#### Parameters

#### e `Telerik.Web.UI.RadDataPagerTotalRowCountRequestEventArgs`

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

