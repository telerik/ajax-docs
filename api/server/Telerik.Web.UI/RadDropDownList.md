---
title: Telerik.Web.UI.RadDropDownList
page_title: Telerik.Web.UI.RadDropDownList
description: Telerik.Web.UI.RadDropDownList
---

# Telerik.Web.UI.RadDropDownList

This Class defines the RadDropDownList.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.ControlItemContainer : IControlItemContainer, INamingContainer, IXmlSerializable
* Telerik.Web.UI.RadDropDownList : ICallbackEventHandler, IFlatBoundContainer, IPostBackEventHandler

## Properties

###  UniqueID `String`

Gets the unique, hierarchically qualified identifier for the server
            control.

###  Items `DropDownListItemCollection`

Gets the items of the  control.

#### Remarks
You can use the Items property to add and remove items in the  control.

###  ExpandDirection `DropDownListExpandDirection`

Gets or sets a value indicating the opening direction of RadDropDownList dropdown.
                If this property is not set - by default dropdown opens downwards.

###  SelectedIndex `Int32`

Gets or sets the selected index of the  control.

#### Remarks
Set the selected index to -1 to clear the selection.

###  SelectedItem `DropDownListItem`

Gets the currently selected item in the dropdownlist.

#### Remarks
SelectedItem can be null in client-side binding scenarios.

###  SelectedText `String`

Gets the text of the currently selected item in the dropdownlist.

###  SelectedValue `String`

Gets the value of the currently selected item in the dropdownlist.

###  DefaultMessage `String`

Gets or sets a message when there is no selected item in the DropDownList.

###  ClientItemTemplate `String`

Gets or sets the HTML template of a 
            when added on the client.

###  ClientChanges `IList`1`

Gets a list of all client-side changes (adding an Item, removing an Item, changing an Item's property) which have occurred.

###  AutoPostBack `Boolean`

Gets or sets a value indicating whether a postback to the server automatically
            occurs when the user changes the RadDropDownList selection.

#### Remarks
Set this property to true if the server needs to capture the selection
                as soon as it is made. For example, other controls on the Web page can be
                automatically filled depending on the user's selection from a list control.This property can be used to allow automatic population of other controls on
                the Web page based on a user's selection from a list.The value of this property is stored in view state.

###  EnableAriaSupport `Boolean`

When set to true enables support for WAI-ARIA

###  ItemTemplate `ITemplate`

Gets or sets the  that defines how items in the  control are displayed.

###  DropDownHeight `Unit`

Gets or sets the height of the dropdown in pixels.

###  Height `Unit`

Gets or sets the height of the Web server control.

###  DropDownWidth `Unit`

Gets or sets the width of the dropdown in pixels.

###  ZIndex `Int32`

The HTML Z-index of the items dropdown of RadDropDownList.Its default value is 7000.

#### Remarks
Can be used when the dropdown is to be shown over content with a specified
            Z-index. If the dropdownlist items dropdown is displayed below the content, set the
            ZIndex property to a value higher than the value of the HTML content
            below.

###  EnableVirtualScrolling `Boolean`

Gets or sets a value indicating whether the functionality to render and load items on demand is enabled or not.

#### Remarks
When set to true upon scroll a request will be made either to the server or to a web service
            	in order to render and initialize a new set of items

###  LoadingPanelID `String`

The ID of the RadAjaxLoadingPanel to be displayed during Callback or WebService calls

###  ItemCountPerRequest `Int32`

Gets or sets the number of Items the RadDropDownList will load when the VirtualScolling
            functionality is enabled.

#### Remarks
When this property is not set the number Items which will be loaded will be calculated based on the height of the DropDrown 
            of the RadDropDownList and the height of a single item.

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
            			    private static int totalCount = 100;
                         private static List<DropDownListItemData> itemsList = new List<DropDownListItemData>();
            
                         static DropDownService()
                         {
                             for (var i = 0; i < totalCount; i++)
                             {
                                 DropDownListItemData itemData = new DropDownListItemData();
                                 itemData.Text = "Item" + i.ToString();
                                 itemData.Value = i.ToString();
                                 itemData.Attributes["Attribute"] = "Attribute" + i.ToString();
                                 itemsList.Add(itemData);
                             }
                         }
            
                         [WebMethod]
                         public DropDownListData GetItems(DropDownListContext context)
                         {
                             DropDownListData data = new DropDownListData();
                             data.Items = itemsList.GetRange(context.StartIndex, context.ItemsCount).ToArray();        
                             data.TotalCount = totalCount;
            
                             return data;
                         }
            			}
            			
                     <System.Web.Script.Services.ScriptService()> _
                        Public Class WebService
                            Inherits System.Web.Services.WebService
            
                            Private Shared totalCount As Integer = 100
                            Private Shared itemsList As New List(Of DropDownListItemData)()
            
                            Shared Sub New()
                                For i As Integer = 0 To totalCount - 1
                                    Dim itemData As New DropDownListItemData()
                                    itemData.Text = "Item" + i.ToString()
                                    itemData.Value = i.ToString()
                                    itemData.Attributes("Attribute") = "Attribute" + i.ToString()
                                    itemsList.Add(itemData)
            
                                Next
                            End Sub
            
                            <WebMethod> _
                            Public Function GetItems(context As DropDownListContext) As DropDownListData
                                Dim data As New DropDownListData()
                                data.Items = itemsList.GetRange(context.StartIndex, context.ItemsCount).ToArray()
                                data.TotalCount = totalCount
            
                                Return data
                            End Function
            
                        End Class

###  ExpandAnimation `AnimationSettings`

Gets the settings for the animation played when the dropdown opens.

#### Remarks
Use the ExpandAnimation property to customize the expand
                    animation of RadDropDownList. You can specify the
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
                    animation of RadDropDownList. You can specify the
                    Type and
                    Duration.
                    To disable collapse animation effects you should set the
                    Type to
                    AnimationType.None.
                    To customize the expand animation you can use the
                    ExpandAnimation property.

###  EnableScreenBoundaryDetection `Boolean`

Determines whether the Screen Boundaries Detection is enabled or not.

###  OnClientLoad `String`

Gets or sets a value indicating the client-side event handler that is called
            after the RadDropDownList client-side object is initialized.

#### Remarks
If specified, the OnClienLoad client-side event handler is
                called after the dropdownlist is fully initialized on the client.A single parameter - the dropdownlist client object - is passed to the
                handler.This event cannot be cancelled.

###  OnClientDropDownOpening `String`

The client-side event that is fired before the dropdown of the DropDownList is
            opened.

#### Remarks
The event handler receives two parameter: the instance of the dropdownlist
            client-side object and event args. The event can be cancelled - simply set  args.set_cancel to true args.set_cancel(true); 
            from the event handler and the dropdownlist dropdown will not be opened.

###  OnClientDropDownOpened `String`

The client-side event that is fired after the dropdown of the dropdownlist is
            opened.

#### Remarks
The event handler receives two parameter: the instance of the dropdownlist
            client-side object and event args. The event cannot  be cancelled.

###  OnClientDropDownClosing `String`

The client-side event that is fired before the dropdown of the dropdownlist is
            closed.

#### Remarks
The event handler receives two parameter: the instance of the dropdownlist
            client-side object and event args. The event can be cancelled - simply set  args.set_cancel to true args.set_cancel(true); 
            from the event handler and the dropdownlist dropdown will not be closed.

###  OnClientDropDownClosed `String`

The client-side event that is fired after the dropdown of the dropdownlist is
             closed.

#### Remarks
The event handler receives two parameter: the instance of the dropdownlist
             client-side object and event args. The event can not be cancelled

###  OnClientSelectedIndexChanged `Int32`

The client-side event that is fired after the selected index of the RadDropDownList has
            been changed.

#### Remarks
The event handler receives two parameters: the instance of of the dropdownlist
            client-side object and event argument with the new selected index.

###  OnClientItemSelecting `String`

The client-side event that is fired when a dropDownListItem is about to be selected.

#### Remarks
The event handler receives two parameters: the instance of of the dropdownlist
            client-side object and event argument with the item which is about to be selected and set_cancel method.The event can be cancelled.

###  OnClientItemSelected `String`

The client-side event that is fired when a dropDownListItem is selected.

#### Remarks
The event handler receives two parameters: the instance of of the dropdownlist
            client-side object and event argument with the item which is selected.

###  OnClientTemplateDataBound `String`

Gets or sets the name of the JavaScript function called when the client template for an item is evaluated

#### Remarks
The event handler receives two parameters: the instance of of the dropdownlist
            client-side object and event argument with get_dateItem(), get_html(), set_html() and get_template() methods.

###  OnClientItemDataBound `String`

Gets or sets the name of the JavaScript function called when an Item is created during Web Service Binding mode.

#### Remarks
The event handler receives two parameters: the instance of of the dropdownlist
            client-side object and event argument with get_dateItem() and get_item() methods.

###  OnClientItemsRequesting `DropDownListItemCollection`

Gets or sets a value indicating the client-side event handler that is called when
            the RadDropDownList is about to send a request for items (for example from web service).

#### Remarks
If specified, the OnClientItemsRequesting client-side event
                handler is called when the RadDropDownList is about to send a request for items.
            	Two parameters are passed to the handler:sender, the dropdownlist client object;eventArgs with two properties:
            			get_context(), an user object that will be passed to the web service.set_cancel(), used to cancel the event.This event can be cancelled.

###  OnClientItemsRequested `DropDownListItemCollection`

Gets or sets a value indicating the client-side event handler that is called when
            the RadDropDownList items were just populated (for example from web service).

#### Remarks
If specified, the OnClientItemsRequested client-side event
                handler is called when the RadDropDownList items were just populated.
            	Two parameters are passed to the handler:sender, the menu client object;eventArgs, null for this event.This event cannot be cancelled.

###  OnClientItemsRequestFailed `DropDownListItemCollection`

Gets or sets a value indicating the client-side event handler that is called when
            the operation for populating the RadDropDownList has failed.

#### Remarks
If specified, the OnClientItemsRequestFailed client-side event
                handler is called when the operation for populating the RadDropDownList has failed.
            	Two parameters are passed to the handler:sender, the menu client object;eventArgs with one property:
            			set_cancel(), set to true to suppress the default action (alert message).This event can be cancelled.

###  SupportsDisabledAttribute `Boolean`

For internal use.

###  ValidationGroup `String`

Gets or sets the name of the validation group to which this validation
                control belongs.

#### Remarks
This property works only when CausesValidation
                is set to true.

###  PostBackUrl `String`

Gets or sets the URL of the page to post to from the current page when a tab
                from the tabstrip is clicked.

###  CausesValidation `Boolean`

Gets or sets a value indicating whether validation is performed when an item within
            the control is selected.

#### Remarks
By default, page validation is performed when an item is selected. Page
                validation determines whether the input controls associated with a validation
                control on the page all pass the validation rules specified by the validation
                control. You can specify or determine whether validation is performed on both the
                client and the server when an item is clicked by using the CausesValidation
                property. To prevent validation from being performed, set the
                CausesValidation property to false.

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

###  OnItemSelected

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.DropDownListEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnSelectedIndexChanged

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.DropDownListEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnItemDataBound

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.DropDownListItemEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnTemplateNeeded

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.DropDownListItemEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnItemCreated

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.DropDownListItemEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  ClearSelection

Clears the selection. The  property of all items is set to false.

#### Returns

`System.Void` 

###  LoadContentFile

Populates the  control from an XML file

#### Parameters

#### xmlFileName `System.String`

Name of the XML file.

#### Returns

`System.Void` 

###  FindItemByText

Finds the first DropDownListItem with Text that
            matches the given text value.

#### Parameters

#### text `System.String`

The string to search for.

#### Returns

`Telerik.Web.UI.DropDownListItem` The first DropDownListItem that matches the
            specified text value.

###  FindItemByText

Finds the first DropDownListItem with Text that
            matches the given text value.

#### Parameters

#### text `System.String`

The string to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.DropDownListItem` The first DropDownListItem that matches the
            specified text value.

###  FindItemByValue

Finds the first DropDownListItem with Value that
            matches the given value.

#### Parameters

#### value `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.DropDownListItem` The first DropDownListItem that matches the
            specified value.

###  FindItemByValue

Finds the first DropDownListItem with Value that
            matches the given value.

#### Parameters

#### value `System.String`

The value to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.DropDownListItem` The first DropDownListItem that matches the
            specified value.

###  CreateControlRenderer

This method should return object that implements IDropDownListRenderer or Inherits the

#### Returns

`Telerik.Web.UI.IRenderer` 

###  LoadPostData

Loads the posted content of the list control, if it is different from the last posting.

#### Parameters

#### postDataKey `System.String`

The key identifier for the control, used to index the postCollection.

#### postCollection `System.Collections.Specialized.NameValueCollection`

A  that contains value information indexed by control identifiers.

#### Returns

`System.Boolean` true if the posted content is different from the last posting; otherwise, false.

###  DescribeClientProperties

#### Returns

`System.Void` 

###  DescribeClientEvents

#### Returns

`System.Void` 

###  AddProperty

Adds the property to the IScriptDescriptor, if it's value is different from the given default.

#### Parameters

#### descriptor `Telerik.Web.UI.IScriptDescriptor`

The descriptor to add the property to.

#### name `System.String`

The property name.

#### value `System.Object`

The current value of the property.

#### defaultValue `System.Object`

The default value.

#### Returns

`System.Void` 

###  GetXml

Gets an XML string representing the state of the control. All child items and their properties are serialized in this
            	string.

#### Remarks
Use the GetXml method to get the XML state of the control. You can cache it and then restore it using
            	the LoadXml method.

#### Returns

`System.String` A String representing the state of the control - child items, properties etc.

###  LoadXml

Loads the control from an XML string.

#### Remarks
Use the LoadXml method to populate the control from an XML string. You can use it along the GetXml
            	method to implement caching.

#### Parameters

#### xml `System.String`

The string representing the XML from which the control will be populated.

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

