---
title: Telerik.Web.UI.RadListBox
page_title: Telerik.Web.UI.RadListBox
description: Telerik.Web.UI.RadListBox
---

# Telerik.Web.UI.RadListBox

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* Telerik.Web.UI.RadDataBoundControl
* Telerik.Web.UI.ControlItemContainer
* Telerik.Web.UI.RadListBox

## Properties

###  Controls `ControlCollection`

Gets a  object that represents
            the child controls for a specified server control in the UI hierarchy.

###  EnableMarkMatches `Boolean`

Gets or sets the enable mark matches.

###  Localization `ListBoxButtons`

Gets the localization.

###  LocalizationPath `ListBoxButtons`

Gets or sets a value indicating where RadListBox will look for its .resx localization files.

###  Culture `CultureInfo`

Gets or sets the selected culture. Localization strings will be loaded based on this value.

###  AllowAutomaticUpdates `Boolean`

Gets or sets a value indicating whether to update the underlying datasource after postback caused by reorder, delete or transfer.

#### Remarks
Automatic updates require postback so the ,  or
             should be set to true depending on the requirements.

###  DataKeys `DataKeyCollection`

Gets a  object that stores the key values of each record.

#### Remarks
The DataKeys property is populated after databinding if the  property is set.

###  AutoPostBackOnDelete `Boolean`

Gets or sets a value indicating whether RadListBox should post back after delete.

###  AutoPostBackOnTransfer `Boolean`

Gets or sets a value indicating whether RadListBox should post back after transfer.

###  AutoPostBackOnReorder `Boolean`

Gets or sets a value indicating whether RadListBox should post back after reorder.

###  TransferMode `ListBoxTransferMode`

Gets or sets the transfer mode used for transfer operations.

#### Remarks
If the TransferMode property is set to  the items would be deleted from the source listbox before
            inserting them in the destination listbox. The TransferMode property of the listbox whose  property is set is taken into account.

###  AllowTransferOnDoubleClick `Boolean`

Gets or sets a value indicating whether the double click on a item causes transfer

###  AllowTransferDuplicates `Boolean`

Gets or sets a value indicating whether the user can transfer the same item more than once.

#### Remarks
The property should only be used together with SelectionType="Copy"

###  TransferToListBox `RadListBox`

Gets the  which the current list box is configured to transfer to via the  property.

###  TransferToID `String`

Gets or sets the ID of the  which the current listbox should transfer to. 
            Set the TransferToID property only of one of the two listboxes which will transfer items between each other.

###  PersistClientChanges `Boolean`

Gets or sets a value indicating whether RadListBox should persist the changes that occurred client-side (reorder, transfer, delete) after postback.

###  ButtonSettings `ListBoxButtonSettings`

Used to customize the appearance and position of the buttons displayed by RadListBox.

###  ShowCheckAll `Boolean`

Gets or sets a value that indicates whether the CheckAll checkbox is shown in ListBox.

###  AllowReorder `Boolean`

Gets or sets a value indicating whether RadListBox displays the reordering buttons.

###  AllowDelete `Boolean`

Gets or sets a value indicating whether RadListBox displays the delte button.

###  AllowTransfer `Boolean`

Gets or sets a value indicating whether RadListBox displays the transfer buttons.

###  AutoPostBack `Boolean`

Gets or sets a value indicating whether a postback to the server automatically
            occurs when the user changes the RadListBox selection.

#### Remarks
Set this property to true if the server needs to capture the selection
                as soon as it is made. For example, other controls on the Web page can be
                automatically filled depending on the user's selection from a list control.This property can be used to allow automatic population of other controls on
                the Web page based on a user's selection from a list.The value of this property is stored in view state.
                    The server-side event that is fired is
                    SelectedIndexChanged.

###  CheckedItems `IList`1`

Gets the currently checked items in the ListBox.

###  EnableDragAndDrop `Boolean`

When set to true enables Drag-and-drop functionality

###  EmptyMessage `String`

Gets or sets the empty message.

###  EmptyMessageTemplate `String`

Gets or sets the  that defines the  empty message template.

###  HeaderTemplate `ITemplate`

Gets or sets the  that defines the  header template.

###  FooterTemplate `ITemplate`

Gets or sets the  that defines the  footer template.

###  Header `WebControl`

Get a header of 
            RadListBox.

###  Footer `WebControl`

Get a footer of 
            RadListBox.

###  ItemTemplate `ITemplate`

Gets or sets the  that defines how items in the  control are displayed.

###  ClientItemTemplate `ITemplate`

Gets or sets the HTML template of a 
            when added on the client.

###  Items `RadListBoxItemCollection`

Gets the items of the  control.

#### Remarks
You can use the Items property to add and remove items in the  control.

###  SelectedIndex `Int32`

Gets or sets the selected index of the  control.

#### Remarks
Set the selected index to -1 to clear the selection.

###  SelectedItem `RadListBoxItem`

Gets the currently selected Item in the ListBox.

###  SelectedItems `RadListBoxItemCollection`

Gets the currently selected items in the ListBox.

###  SelectedValue `String`

Gets the  of the selected item.
            When set selects the item with matching  property.

###  SelectionMode `ListBoxSelectionMode`

Gets or sets the Selection Mode of the RadListBox.

###  Sort `RadListBoxSort`

Automatically sorts items alphabetically (based on the Text
            property) in ascending or descending order.

###  SortCaseSensitive `RadListBoxSort`

Gets/sets whether the sorting will be case-sensitive or not.
            By default is set to true.

###  CheckBoxes `Boolean`

When set to true displays a checkbox next to each item.

###  ClientChanges `IList`1`

Gets a list of all client-side changes (adding an Item, removing an Item, changing an Item's property) which have occurred.

###  DataKeyField `String`

Gets or sets the key field in the data source. Usually this is the database column which denotes the primary key.

#### Remarks
DataKeyField is required for automatic data source updates during transfer, reorder and delete.

###  DataSortField `RadListBoxSort`

Gets or sets the sort field in the data source. The sort field must be of numeric type.

#### Remarks
DataSortField is required for automatic data source updates during reorder.

###  UniqueID `String`

Gets the unique, hierarchically qualified identifier for the server
            control.

###  LoadingPanelID `String`

The ID of the RadAjaxLoadingPanel to be displayed during LOD

###  EnableLoadOnDemand `Boolean`

Gets or sets the EnableLoadOnDemand property.

###  WebServiceSettings `NavigationControlWebServiceSettings`

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
            			public RadListBoxItemData[] WebServiceMethodName(object context)
            			{
            				// We cannot use a dictionary as a parameter, because it is only supported by script services.
            				// The context object should be cast to a dictionary at runtime.
            				IDictionary<string, object> contextDictionary = (IDictionary<string, object>) context;
            				
            				//...
            			}
            		}

###  OnClientItemsRequesting `RadListBoxItemCollection`

Gets or sets a value indicating the client-side event handler that is called when
            the RadListBOx is about to be populated (for example from web service).

#### Remarks
If specified, the OnClientItemsRequesting client-side event
                handler is called when the RadListBox is about to be populated.
            	Two parameters are passed to the handler:sender, the listBox   client object;eventArgs with three properties:
            			get_context(), an user object that will be passed to the web service.set_cancel(), used to cancel the event.This event can be cancelled.

###  OnClientItemsRequested `RadListBoxItemCollection`

Gets or sets a value indicating the client-side event handler that is called when
            the RadListBox items were just populated (for example from web service).

#### Remarks
If specified, the OnClientItemsRequested client-side event
                handler is called when the RadListBox items were just populated.
            	Two parameters are passed to the handler:sender, the menu client object;eventArgs, null for this event.This event cannot be cancelled.

###  OnClientItemsRequestFailed `RadListBoxItemCollection`

Gets or sets a value indicating the client-side event handler that is called when
            the operation for populating the RadListBox has failed.

#### Remarks
If specified, the OnClientItemsRequestFailed client-side event
                handler is called when the operation for populating the RadListBox has failed.
            	Two parameters are passed to the handler:sender, the menu client object;eventArgs with one property:
            			set_cancel(), set to true to suppress the default action (alert message).This event can be cancelled.

###  OnClientItemDataBound `String`

Gets or sets the name of the JavaScript function called when an Item is created during Web Service Load on Demand.

###  OnClientItemDoubleClicking `String`

###  OnClientItemDoubleClicked `String`

###  OnClientSelectedIndexChanging `Int32`

Gets or sets the name of the JavaScript function which handles the selectedIndexChanging client-side event.

#### Remarks
The selectedIndexChanging client-side event occurs when the selection changes.

###  OnClientSelectedIndexChanged `Int32`

Gets or sets the name of the JavaScript function which handles the selectedIndexChanged client-side event.

#### Remarks
The selectedIndexChanged client-side event occurs when the selection changes.

###  OnClientContextMenu `String`

Gets or sets a value indicating the client-side event handler that is called
            before the browser context panel shows (after right-clicking an item).

#### Remarks
Use theOnClientContextMenu property to specify a JavaScript
            function that will be executed before the context menu shows after right clicking an
            item.

###  OnClientItemChecking `String`

Gets or sets the name of the JavaScript function which handles the itemChecking client-side event.

#### Remarks
The itemChecking event occurs when the item is checked.

###  OnClientItemChecked `String`

Gets or sets the name of the JavaScript function which handles the itemChecked client-side event.

#### Remarks
The itemChecked event occurs when the item is checked.

###  OnClientCheckAllChecked `String`

Gets or sets the name of the JavaScript function which handles the checkAllItemChecked client-side event.

#### Remarks
The JavaScript function executed when CheckAll checkbox is checked.

###  OnClientCheckAllChecking `String`

Gets or sets the name of the JavaScript function which handles the checkAllItemChecked client-side event.

#### Remarks
The JavaScript function executed before CheckAll checkbox is checked.

###  OnClientDeleting `String`

Gets or sets the name of the JavaScript function which handles the deleting client-side event.

#### Remarks
The deleting event occurs when an items are deleted (during transfer or delete for example).

###  OnClientDeleted `String`

Gets or sets the name of the JavaScript function which handles the deleted client-side event.

#### Remarks
The deleted event occurs when an itema are deleted (during transfer or delete for example).

###  OnClientTransferring `String`

Gets or sets the name of the JavaScript function which handles the transferring client-side event.

#### Remarks
The transferring event occurs when an item is transferred.

###  OnClientTransferred `String`

Gets or sets the name of the JavaScript function which handles the transferred client-side event.

#### Remarks
The transferred event occurs when an item is transferred.

###  OnClientReordering `String`

Gets or sets the name of the JavaScript function which handles the reordering client-side event.

#### Remarks
The reordering event occurs when an item is reordered.

###  OnClientReordered `String`

Gets or sets the name of the JavaScript function which handles the reordered client-side event.

#### Remarks
The reordered event occurs when an item is reordered.

###  OnClientMouseOver `String`

Gets or sets the name of the JavaScript function which handles the mouseOver client-side event.

#### Remarks
The mouseOver event occurs when the user hovers a listbox item with the mouse.

###  OnClientMouseOut `String`

Gets or sets the name of the JavaScript function which handles the mouseOut client-side event.

#### Remarks
The mouseOut event occurs when the user moves away the mouse from a listbox item.

###  OnClientLoad `String`

Gets or sets the name of the JavaScript function which handles the load client-side event.

#### Remarks
The load event occurs when RadListBox is initialized.

###  OnClientDragStart `String`

Gets or sets the name of the JavaScript function which handles the itemDragStart client-side event.

#### Remarks
The itemDragStart event occurs when user starts to drag an item.

###  OnClientDragging `String`

Gets or sets the name of the JavaScript function which handles the itemDragging client-side event.

#### Remarks
The itemDragging event occurs when user moves the mouse while dragging an item.

###  OnClientDropping `String`

Gets or sets the name of the JavaScript function which handles the itemDropping client-side event.

#### Remarks
The itemDropping event occurs when the user drops an item onto another item.

###  OnClientDropped `String`

Gets or sets the name of the JavaScript function which handles the itemDropped client-side event.

#### Remarks
The itemDropped event occurs after the user drops an item onto another item.

###  OnClientTemplateDataBound `String`

Gets or sets the name of the JavaScript function called when the client template for an item is evaluated

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

###  DescribeClientProperties

#### Returns

`System.Void` 

###  DescribeClientEvents

#### Returns

`System.Void` 

###  LoadPostData

Loads the posted content of the list control, if it is different from the last posting.

#### Parameters

#### postDataKey `System.String`

The key identifier for the control, used to index the postCollection.

#### postCollection `System.Collections.Specialized.NameValueCollection`

A  that contains value information indexed by control identifiers.

#### Returns

`System.Boolean` true if the posted content is different from the last posting; otherwise, false.

###  RaisePostDataChangedEvent

Invokes the  method whenever posted data for the RadListBox control has changed.

#### Returns

`System.Void` 

###  SetPostDataSelection

Sets the  property of a  after a page is posted back.

#### Parameters

#### selectedIndex `System.Int32`

The index of the Item to select in the  collection.

#### Returns

`System.Void` 

###  LoadContentFile

Populates the  control from an XML file

#### Parameters

#### xmlFileName `System.String`

Name of the XML file.

#### Returns

`System.Void` 

###  Delete

Deletes the specified item. Fires the  and  events.

#### Remarks
The Delete method updates the underlying datasource if the  is set to true.

#### Parameters

#### item `Telerik.Web.UI.RadListBoxItem`

The item which should be deleted.

#### Returns

`System.Void` 

###  Delete

Deletes the specified list of items. Fires the  and  events.

#### Remarks
The Delete method updates the underlying datasource if the  is set to true.

#### Parameters

#### items `System.Collections.Generic.IList{Telerik.Web.UI.RadListBoxItem}`

The list of items which should be deleted.

#### Returns

`System.Void` 

###  Transfer

Transfers the specified list of items from the source to the destination listbox. Fires the  and  events.

#### Remarks
Always call the Transfer method of the RadListBox whose  property is set!
            The Transfer method updates the underlying datasource if the  is set to true.

#### Parameters

#### itemsToTransfer `System.Collections.Generic.IList{Telerik.Web.UI.RadListBoxItem}`

The items to transfer.

#### sourceListBox `Telerik.Web.UI.RadListBox`

The source list box.

#### destinationListBox `Telerik.Web.UI.RadListBox`

The destination list box.

#### Returns

`System.Void` 

###  Transfer

Transfers the specified item from the source list box to the destination listbox.
            Fires the  and  events.

#### Remarks
Always call the Transfer method of the RadListBox whose  property is set!
            The Transfer method updates the underlying datasource if the  is set to true.

#### Parameters

#### item `Telerik.Web.UI.RadListBoxItem`

The item to transfer.

#### sourceListBox `Telerik.Web.UI.RadListBox`

The source list box.

#### destinationListBox `Telerik.Web.UI.RadListBox`

The destination list box.

#### Returns

`System.Void` 

###  Reorder

Moves the item at old index to new index by calculating the offset.
            Fires the  and  events.

#### Remarks
The Reorder method updates the underlying datasource if the  is set to true.

#### Parameters

#### oldIndex `System.Int32`

The old (current) index of the item.

#### newIndex `System.Int32`

The new index of the item.

#### Returns

`System.Void` 

###  ReorderToIndex

Moves the item at old index to new index.
            Fires the  and  events.

#### Remarks
The ReorderToIndex method updates the underlying datasource if the  is set to true.

#### Parameters

#### oldIndex `System.Int32`

The old (current) index of the item.

#### newIndex `System.Int32`

The new index of the item.

#### Returns

`System.Void` 

###  Reorder

Reorders the specified items with the specified offset.
            Fires the  and  events.

#### Remarks
he Reorder method updates the underlying datasource if the  is set to true.

#### Parameters

#### items `System.Collections.Generic.IList{Telerik.Web.UI.RadListBoxItem}`

The items.

#### offset `System.Int32`

The offset.

#### Returns

`System.Void` 

###  ReorderToIndex

Reorders the specified items to the specified index.
            Fires the  and  events.

#### Remarks
The ReorderToIndex method updates the underlying datasource if the  is set to true.

#### Parameters

#### items `System.Collections.Generic.IList{Telerik.Web.UI.RadListBoxItem}`

The items.

#### targetIndex `System.Int32`

The target index.

#### Returns

`System.Void` 

###  FindItem

Finds the first item for which the specified predicate returns true.

#### Parameters

#### predicate `System.Predicate{Telerik.Web.UI.RadListBoxItem}`

The predicate which will test all items.

#### Returns

`Telerik.Web.UI.RadListBoxItem` The first item for which the specified predicate returns true. Null (Nothing) is returned if no item matches.

###  FindItemByText

Finds the first item whose  property is the same as the specified text.

#### Parameters

#### text `System.String`

The text to search for.

#### Returns

`Telerik.Web.UI.RadListBoxItem` The first item whose  property is the same as the specified text. Null (Nothing) otherwise.

###  FindItemByValue

Finds the first item whose  property is the same as the specified value.

#### Parameters

#### value `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadListBoxItem` The first item whose  property is the same as the specified value. Null (Nothing) otherwise.

###  ClearSelection

Clears the selection. The  property of all items is set to false.

#### Returns

`System.Void` 

###  ClearChecked

Clears the checked items. The  property of all items is set to false.

#### Returns

`System.Void` 

###  GetSelectedIndices

Gets an array containing the indices of the currently selected items in the RadListBox control.

#### Returns

`System.Int32[]` 

###  GetCheckedIndices

Gets an array containing the indices of the currently checked items in the RadListBox control.

#### Returns

`System.Int32[]` 

###  FindItemIndexByValue

Finds the index of the item whose  property is the same as the specified value.

#### Parameters

#### value `System.String`

The value.

#### Returns

`System.Int32` The index of the item whose  property is the same as the specified value. -1 if no item is found.

###  FindItemIndexByValue

Finds the index of the item whose  property is the same as the specified value.

#### Parameters

#### value `System.String`

The value.

#### ignoreCase `System.Boolean`

if set to true case insensitive comparison is made.

#### Returns

`System.Int32` The index of the item whose  property is the same as the specified value. -1 if no item is found.

###  SortItems

Sorts the items in the RadListBox.

#### Returns

`System.Void` 

###  OnUpdating

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadListBoxUpdatingEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnUpdated

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadListBoxEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnTransferred

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadListBoxTransferredEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnTransferring

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadListBoxTransferringEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnInserted

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadListBoxEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnInserting

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadListBoxInsertingEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnReordered

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadListBoxEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnReordering

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadListBoxReorderingEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnDropping

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadListBoxDroppingEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnDropped

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadListBoxDroppedEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnItemDataBound

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadListBoxItemEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnItemCreated

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadListBoxItemEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnItemCheck

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadListBoxItemEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnCheckAllCheck

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadListBoxCheckAllCheckEventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnSelectedIndexChanged

Raises the  event.

#### Parameters

#### e `System.EventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnTextChanged

Raises the  event.

#### Parameters

#### e `System.EventArgs`

The  instance containing the event data.

#### Returns

`System.Void` 

###  OnItemsRequested

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadListBoxItemsRequestedEventArgs`

The  instance containing the event data.

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

