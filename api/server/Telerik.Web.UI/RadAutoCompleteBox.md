---
title: Telerik.Web.UI.RadAutoCompleteBox
page_title: Telerik.Web.UI.RadAutoCompleteBox
description: Telerik.Web.UI.RadAutoCompleteBox
---

# Telerik.Web.UI.RadAutoCompleteBox

Telerik RadAutoCompleteBox for ASP.NET AJAX is a powerful 
            drop-down list control which gives the ability to 
            select multiple entries, displaying them as a sequence of strings 
            separated by a delimiter, or fancy styled tokens depending on your preferences.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadAutoCompleteBox : ICallbackEventHandler, IFlatBoundContainer, INamingContainer, IPostBackEventHandler

## Properties

###  UsingWebServiceBinding `Boolean`

###  CssClassFormatString `String`

###  AutoPostBack `Boolean`

Gets or sets a value indicating whether a postback to the server automatically
            occurs when the user changes the RadAutoCompleteBox selection and/or text.

###  DataTextFormatString `String`

Gets or sets a value indicating how the items text should be formatted.

###  MaxResultCount `Int32`

Defines the maximum number of results shown in the autocomplete dropdown.

###  MinFilterLength `Int32`

Defines the minimum number of characters that must be typed before the autocomplete is triggered.

###  HighlightFirstMatch `Boolean`

Gets or sets whether the first match will be highlighted.

###  Filter `RadAutoCompleteFilter`

Gets or sets a value indicating whether the RadAutoCompleteBox should apply “Contains” or “StartsWith” filter logic.

###  IsCaseSensitive `Boolean`

Gets or sets a value that indicates whether the filter logic is
            case-sensitive or not.

###  InputType `RadAutoCompleteInputType`

Gets or sets a value indicating how the RadAutoCompleteBox items should be displayed - as tokens or as text.

###  DropDownPosition `RadAutoCompleteDropDownPosition`

Gets or sets a value indicating how the RadAutoCompleteBoxDropDown should be positioned.

###  Text `String`

Gets the text of the input field.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  Entries `AutoCompleteBoxEntryCollection`

Gets the RadAutoCompleteBox 
                entries collection.

###  DataTextField `String`

Gets or sets the DataTextField.

###  DataValueField `String`

Gets or sets the DataValueField.

###  EnableClientFiltering `RadAutoCompleteFilter`

Gets or sets a value indicating whether the filtering is done on the client, or each typed letter should trigger a request.

###  AllowCustomEntry `Boolean`

Gets or sets a value indicating whether the user will be able to add a custom text not present 
            within the raw data in order to create a custom entry.

###  ShowLoadingIcon `Boolean`

Gets or sets a value indicating whether a loading icon should be shown while a request it pending.

###  Delimiter `String`

Gets or sets a value indicating what delimiter should be used when the control displays the selected items as text (InputType = Text)

###  UniqueID `String`

Gets the unique, hierarchically qualified identifier for the server
            control.

###  DropDownItemTemplate `ITemplate`

Gets or sets the template for the items that appear in the dropdown.

###  ClientDropDownItemTemplate `ITemplate`

Gets or sets the template for the items that appear in the dropdown.

###  WebServiceSettings `WebServiceSettings`

Gets the settings for the web service used to populate items.

#### Remarks
Use the WebServiceSettings property to configure the web
            		service used to populate items on demand.
            		You must specify both
                    Path and
                    Method
            		to fully describe the service.
                
            		In order to use the integrated support, the web service should have the following signature:
            		
            		
            		[ScriptService]
            		public class WebServiceName : WebService
            		{
            			[WebMethod]
            			public DropDownDataItemData[] WebServiceMethodName(object context)
            			{
            				// We cannot use a dictionary as a parameter, because it is only supported by script services.
            				// The context object should be cast to a dictionary at runtime.
            				IDictionary<string, object> contextDictionary = (IDictionary<string, object>) context;
            				
            				//...
            			}
            		}

###  ExpandAnimation `AnimationSettings`

Gets the settings for the animation played when the dropdown opens.

#### Remarks
Use the ExpandAnimation property to customize the expand
                    animation of RadAutoCompleteBox. You can specify the
                    Type and
                    Duration.
                    To disable expand animation effects you should set the
                    Type to
                    AnimationType.None.
                    To customize the collapse animation you can use the
                    CollapseAnimation property.

###  CollapseAnimation `AnimationSettings`

Gets the settings for the animation played when the dropdown closes.

#### Remarks
Use the CollapseAnimation property to customize the expand
                    animation of RadAutoCompleteBox. You can specify the
                    Type and
                    Duration.
                    To disable collapse animation effects you should set the
                    Type to
                    AnimationType.None.
                    To customize the expand animation you can use the
                    ExpandAnimation property.

###  EnableScreenBoundaryDetection `Boolean`

Determines whether the Screen Boundaries Detection is enabled or not.

###  DropDownHeight `Unit`

Gets or sets the height of the dropdown in pixels.

###  Height `Unit`

Gets or sets the height of the Web server control.

###  DropDownWidth `Unit`

Gets or sets the width of the dropdown in pixels.

###  EmptyMessage `String`

Gets or sets a value indicating what message will be displayed then the control is empty (has no entries selected).

###  ZIndex `Int32`

The HTML Z-index of the items dropdown of RadAutoCompleteBox. Its default value is 7000.

#### Remarks
Can be used when the dropdown is to be shown over content with a specified
            Z-index. If the RadAutoCompleteBox items dropdown is displayed below the content, set the
            ZIndex property to a value higher than the value of the HTML content
            below.

###  TokensSettings `AutoCompleteBoxTokensSettings`

Gets the Tokens settings.

###  TextSettings `String`

Gets the Text settings.

###  Localization `AutoCompleteBoxLocalization`

Gets the localization.

###  LocalizationPath `AutoCompleteBoxLocalization`

Gets or sets a value indicating where RadAutoCompleteBox will look for its .resx localization files.

###  Culture `CultureInfo`

Gets or sets the selected culture. Localization strings will be loaded based on this value.

###  Label `String`

Gets or sets the label of the control.

###  LabelCssClass `String`

Gets or sets the CSS class of the label.

###  LabelWidth `String`

Gets or sets the width of the control's label

###  OnClientLoad `String`

Gets or sets the name of the JavaScript function which handles the load client-side event.

#### Remarks
The load event occurs when RadAutoCompleteBox is initialized.

###  OnClientDropDownOpening `String`

Gets or sets the name of the JavaScript function called when the dropdown is about to be opened

###  OnClientDropDownOpened `String`

Gets or sets the name of the JavaScript function called when the dropdown is opened

###  OnClientDropDownClosing `String`

Gets or sets the name of the JavaScript function called when the dropdown is about to be closed

###  OnClientDropDownClosed `String`

Gets or sets the name of the JavaScript function called when the dropdown is closed

###  OnClientDropDownItemDataBound `String`

Gets or sets the name of the JavaScript function called when an DropDownItem is created during Web Service Load on Demand.

###  OnClientEntryAdding `String`

Gets or sets the name of the JavaScript function called when an entry is about to be added

###  OnClientEntryAdded `String`

Gets or sets the name of the JavaScript function called when an entry was added

###  OnClientEntryRemoving `String`

Gets or sets the name of the JavaScript function called when an entry is about to be removed

###  OnClientEntryRemoved `String`

Gets or sets the name of the JavaScript function called when an entry was removed

###  OnClientTextChanged `String`

Gets or sets the name of the JavaScript function called when the text is changed

###  OnClientRequesting `String`

Gets or sets a value indicating the client-side event handler that is called when
            the RadAutoCompleteBox is about to be populated (for example from web service).

#### Remarks
If specified, the OnItemsRequesting client-side event
                handler is called when the RadAutoCompleteBox is about to be populated.
            	Two parameters are passed to the handler:sender, the menu client object;eventArgs with three properties:
            			get_context(), an user object that will be passed to the web service.set_cancel(), used to cancel the event.This event can be cancelled.

###  OnClientRequested `String`

Gets or sets a value indicating the client-side event handler that is called when
            the RadAutoCompleteBox items were just populated (for example from web service).

#### Remarks
If specified, the OnClientRequested client-side event
                handler is called when the RadAutoCompleteBox items were just populated.
            	Two parameters are passed to the handler:sender, the menu client object;eventArgs, null for this event.This event cannot be cancelled.

###  OnClientRequestFailed `String`

Gets or sets a value indicating the client-side event handler that is called when
            the operation for populating the RadAutoCompleteBox has failed.

#### Remarks
If specified, the OnClientRequestFailed client-side event
                handler is called when the operation for populating the RadAutoCompleteBox has failed.
            	Two parameters are passed to the handler:sender, the menu client object;eventArgs with one property:
            			set_cancel(), set to true to suppress the default action (alert message).This event can be cancelled.

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

###  OnDropDownTemplateNeeded

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.AutoCompleteDropDownItemEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnEntryAdded

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.AutoCompleteEntryEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnEntryRemoved

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.AutoCompleteEntryEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnTextChanged

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.AutoCompleteTextEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnDataSourceSelect

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.AutoCompleteBoxDataSourceSelectEventArgs`

The  instance containing the event data.

#### Returns

`System.Boolean` 

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

###  GetViewStateValue

#### Returns

`Telerik.Web.UI.T` 

