---
title: Telerik.Web.UI.RadSearchBox
page_title: Telerik.Web.UI.RadSearchBox
description: Telerik.Web.UI.RadSearchBox
---

# Telerik.Web.UI.RadSearchBox

Telerik RadSearchBox for ASP.NET AJAX provides the user 
            the ability to write text in an input field with an optional autocomplete functionality.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadSearchBox : ICallbackEventHandler, IFlatBoundContainer, INamingContainer, IPostBackEventHandler

## Properties

###  Buttons `SearchBoxButtonCollection`

Gets the RadSearchBox 
                SearchBoxButtons collection.

###  ClientDataSourceID `String`

Gets or sets ID of ClientDataSource control that is used for client side binding

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  CollapseAnimation `AnimationSettings`

Gets the settings for the animation played when the dropdown closes.

#### Remarks
Use the CollapseAnimation property to customize the expand
                    animation of RadSearchBox. You can specify the
                    Type and
                    Duration.
                    To disable collapse animation effects you should set the
                    Type to
                    AnimationType.None.
                    To customize the expand animation you can use the
                    ExpandAnimation property.

###  ContextControl `SearchContextControl`

For testing purposes.

###  ControlId `String`

The client-side id of the inner input element used for intergation with RadLabel

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  Culture `CultureInfo`

Gets or sets the selected culture. Localization strings will be loaded based on this value.

###  DataContextKeyField `String`

Gets or sets the DataContextKeyField. This property will define the data column used as a context field.

###  DataKeyNames `String[]`

Gets or sets an array of data-field names that will be used to populate the
                    's DataItem property.

#### Remarks
Note: Values set to this property are case-sensitive! The
                field names should be coma-separated.

###  DataTextField `String`

Gets or sets the DataTextField.

###  DataTextFormatString `String`

Gets or sets a value indicating how the DropDownItems text should be formatted.

###  DataValueField `String`

Gets or sets the DataValueField.

###  DropDownSettings `DropDownSettings`

Used to customize the appearance and position of the buttons displayed by RadListBox.

###  EmptyMessage `String`

Gets or sets a message when the input of the RadSearchBox is empty.

###  EnableAjaxSkinRendering `String`

Gets or sets the value, indicating whether to render the skin CSS files during Ajax requests

#### Remarks
If EnableAjaxSkinRendering is set to false you will have to register the needed control base CSS file by hand when adding/showing the control with Ajax.

###  EnableAutoComplete `Boolean`

Gets or sets a value indicating whether the AutoComplete functionality of the RadSearchBox is enabled.

###  EnableDirectionDetection `Boolean`

Determines whether the Direction Detection is enabled or not.

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

###  EnableScreenBoundaryDetection `Boolean`

Determines whether the Screen Boundaries Detection is enabled or not.

###  ExpandAnimation `AnimationSettings`

Gets the settings for the animation played when the dropdown opens.

#### Remarks
Use the ExpandAnimation property to customize the expand
                    animation of RadSearchBox. You can specify the
                    Type and
                    Duration.
                    To disable expand animation effects you should set the
                    Type to
                    AnimationType.None.
                    To customize the collapse animation you can use the
                    CollapseAnimation property.

###  Filter `SearchBoxFilter`

Gets or sets a value indicating whether the RadSearchBox should apply “Contains” or “StartsWith” filter logic.

###  Height `Unit`

Gets or sets the height of the Web server control.

###  HighlightFirstMatch `Boolean`

Gets or sets a value indicating whether the first matching result will be highlighted upon drop down opening.

###  IsCaseSensitive `Boolean`

Gets or sets a value that indicates whether the filter logic is
            case-sensitive or not.

###  IsSkinSet `String`

For internal use.

###  Label `String`

Gets or sets the label of the control.

###  LabelCssClass `String`

Gets or sets the css class of the label.

###  LabelWidth `String`

Gets or sets the width of the control's label

###  Localization `SearchBoxLocalization`

Gets the localization.

###  LocalizationPath `SearchBoxLocalization`

Gets or sets a value indicating where RadSearchBox will look for its .resx localization files.

###  MaxResultCount `Int32`

Gets or sets how many results are shown in the dropdown.

###  MinFilterLength `Int32`

Defines the minimum number of characters that must be typed before a search is made.

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  OnClientButtonCommand `String`

Gets or sets a value indicating the client-side event handler that is called
            when a button from the Buttons Collection is clicked.

#### Remarks
If specified, the OnClientButtonCommand client-side event handler is
                called when a button from the Buttons Collection is clicked.The event handler receives two parameters: the instance of the searchBox
                client-side object and event args.This event cannot be cancelled.

###  OnClientDataRequesting `String`

Gets or sets a value indicating the client-side event handler that is called
            before a search is triggered in RadSearchBox.

#### Remarks
If specified, the OnClientDataRequesting client-side event handler is
                called before a search is triggered in RadSearchBox .The event handler receives two parameters: the instance of the searchBox
                client-side object and event args.This event can be cancelled.

###  OnClientLoad `String`

Gets or sets a value indicating the client-side event handler that is called
            after the RadSearchBox client-side object is initialized.

#### Remarks
If specified, the OnClienLoad client-side event handler is
                called after the searchBox is fully initialized on the client.A single parameter - the searchBox client object - is passed to the
                handler.This event cannot be cancelled.

###  OnClientSearch `String`

Gets or sets a value indicating the client-side event handler that is called
            when a search is triggered in the SearchBox. This happens when
            the default seach button or an item from the dropdown is clicked, or Enter key is pressed.

#### Remarks
If specified, the OnClientSearch client-side event handler is
                called when a search is triggered in the SearchBox. This happens when
                the default seach button or an item from the dropdown is clicked, or Enter key is pressed.The event handler receives two parameters: the instance of the searchBox
                client-side object and event args.This event cannot be cancelled.

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

###  SearchContext `SearchContext`

Gets the RadSearchBox 
            SearchContext.

###  ShowLoadingIcon `Boolean`

Gets or sets a value indicating whether a loading icon should be shown while a request it pending.

###  ShowSearchButton `Boolean`

Gets or sets a value indicating whether the default search button is rendered.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  Text `String`

Gets or sets the RadSearchBox's input value.

###  UniqueID `String`

Gets the unique, hierarchically qualified identifier for the server
            control.

###  WebServiceSettings `WebServiceSettings`

Gets the settings for the web service used to provide search results.

#### Remarks
Use the WebServiceSettings property to configure the web
            			service used to provide search results.
            			You must specify both
                     Path and
                     Method
            			to fully describe the service.
                 
            			In order to use the integrated support, the web service should have the following signature:
            			
            			
            			[ScriptService]
            			public class WebServiceName : WebService
            			{
                         [WebMethod]
                         public SearchBoxItemData[] GetResult(SearchBoxContext context)
                         {
            
                         }
            			}
            			
                     <System.Web.Script.Services.ScriptService()> _
                        Public Class WebService
                            Inherits System.Web.Services.WebService
            
                            <WebMethod> _
                            Public Function GetResult(context As SearchBoxContext) As SearchBoxItemData()
            
                            End Function
            
                        End Class

## Methods

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

###  CreateControlRenderer

This method should return object that implements ISearchBoxRenderer or Inherits the SearchBoxRenderer class.

#### Returns

`Telerik.Web.UI.IRenderer` 

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

###  OnButtonCommand

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.SearchBoxButtonEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnDataSourceSelect

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.SearchBoxDataSourceSelectEventArgs`

The  instance containing the event data.

#### Returns

`System.Boolean` 

###  OnSearch

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.SearchBoxEventArgs`

The  instance containing the event data.

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

