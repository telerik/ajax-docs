---
title: Telerik.Web.UI.RadListView
page_title: Telerik.Web.UI.RadListView
description: Telerik.Web.UI.RadListView
---

# Telerik.Web.UI.RadListView

Telerik.Web.UI.RadListView is designed to give your the freedom to specify 
            predefined or customized type of layout for the items displayed in 
            the control and in the same time gives you integrated sorting, paging, 
            grouping, editing, selecting, etc. capabilities. You can embed various 
            controls of your choice in RadListView's templates and model their 
            appearance in a custom manner. Thanks to its innovative architecture 
            Telerik.Web.UI.RadListView is extremely fast and generates very little output.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* System.Web.UI.WebControls.CompositeDataBoundControl
* Telerik.Web.UI.RadCompositeDataBoundControl
* Telerik.Web.UI.RadListView

## Properties

###  ResolvedDataSource `ListViewEnumerableBase`

###  DataSourceIsAssigned `Boolean`

###  ItemPropertyTypes `Dictionary`2`

###  ODataDataSourceID `String`

Gets or sets the ODataDataSource used for data binding.

###  DataModelID `String`

Gets or sets a OData service DataModelID.

###  LayoutTemplate `ITemplate`

Gets or sets the custom content for the root container in a 
             control.

###  ItemTemplate `ITemplate`

Gets or sets the custom content for the data item in a 
            control.

###  AlternatingItemTemplate `ITemplate`

Gets or sets the custom content for the alternating data item in a  control.

###  EditItemTemplate `ITemplate`

Gets or sets the custom content for the item in edit mode.

###  InsertItemTemplate `ITemplate`

Gets or sets the custom content for an insert item in the
             control.

###  GroupTemplate `ITemplate`

Gets or sets the custom content for group container in the
             control.

###  GroupSeparatorTemplate `ITemplate`

Gets or sets the user-defined content for the separator between
            groups in a  control.

###  EmptyItemTemplate `ITemplate`

Gets or sets the user-defined content for the empty item that is
            rendered in a  control when there are no more data items to
            display in the last row of the current data page.

###  ItemPlaceholderID `String`

Gets or sets the ID for the item placeholder in a 
            control.

###  GroupPlaceholderID `String`

Gets or sets the ID for the group placeholder in a  control.

###  Items `RadListViewDataItemCollection`

Gets a collection of  objects that represent
            the data items of the current page of data in a  control.

###  ItemSeparatorTemplate `ITemplate`

Gets or sets the custom content for the separator between the items
            in a  control.

###  EmptyDataTemplate `ITemplate`

Gets or sets the Template that will be displayed if there are no
            records in the DataSource assigned.

###  GroupItemCount `Int32`

Gets or sets the number of items to display per group in a
             control. Default value is 1

###  DataKeyNames `String[]`

Gets or sets an array of data-field names that will be used to
            populate the
             collection, when the 
            control is databinding.

###  ClientDataKeyNames `String[]`

Gets or sets comma delimited list of data-field Names.

###  GroupAggregatesScope `ListViewGroupAggregatesScope`

Gets or sets the scope of the aggregates in a . Meaningful only in case of data grouping.
            Default value is

###  DataKeyValues `RadListViewDataKeyArray`

Gets collection of data key values.

###  ClientSettings `RadListViewClientSettings`

Gets a reference to the 
             object that allows
            you to set the properties of the client-side behavior and
            appearance in a Telerik  control.

###  SortExpressions `RadListViewSortExpressionCollection`

Gets a collection of sort expressions for

###  DataGroups `ListViewDataGroupCollection`

Gets or sets the custom content for the data group template in a 
            control.

###  FilterExpressions `RadListViewFilterExpressionCollection`

Gets a collection of filter expressions for

###  AllowMultiFieldSorting `Boolean`

Gets or sets the value indicating if more than one datafield can
                be sorted. The order is the same as the sequence of expressions
                in .

###  AllowNaturalSort `Boolean`

Allows and disallows the no-sort state when changing sort order.

###  AllowStableSort `Boolean`

Allow RadListView equal items not to be reordered when sorting.
            Enables sorting result consistancy between 3.5, 4.0, 4.5 Framework

###  CurrentPageIndex `Int32`

Gets or sets a value indicating the index of the currently active page in case
            paging is enabled ( is
            true).

###  IsItemInserted `Boolean`

Gets or sets a value indicating if the RadListView is
            currently in insert mode.

#### Remarks
The ItemInserted property indicates if the RadListView is
                currently in insert mode. After setting it you should call the
                 method.

###  OverrideDataSourceControlSorting `Boolean`

Gets or sets a value indicating if the 
            should override the default  sorting
            with its native sorting.

#### Remarks
You can set this to true in case of 
                 with 
                data without implemented sorting.

###  AllowCustomSorting `Boolean`

Gets or sets if the custom sorting feature is enabled.

###  PageSize `Int32`

Specify the maximum number of items that would appear in a page,
             when paging is enabled by  property.
             Default value is 10.

###  PageCount `Int32`

Gets the number of pages required to display the records of the data
            source in a control.

###  VirtualItemCount `Int32`

###  AllowCustomPaging `Boolean`

Gets or sets if the custom paging feature is enabled.

###  UpdateMethod `String`

Gets or sets the name of the method to call in order to update data

###  InsertMethod `String`

Gets or sets the name of the method to call in order to insert data

###  DeleteMethod `String`

Gets or sets the name of the method to call in order to delete data

###  AllowPaging `Boolean`

Gets or sets a value indicating whether the automatic paging feature is
            enabled.

###  CanRetrieveAllData `Boolean`

Gets or sets a value indicating whether Telerik
             should retrieve all data and ignore server paging in
            case of sorting.

###  ValidationSettings `RadListViewValidationSettings`

Gets a reference to the 
             object that allows you to set the properties of the validate
             operation in a  control.

###  SelectedItemTemplate `ITemplate`

Gets or sets the custom content for the selected item in a 
             control.

###  SelectedIndexes `RadListViewIndexesCollection`

Gets a collection of indexes of the selected items.

###  AllowMultiItemSelection `Boolean`

Gets or sets a value indicating whether you will be able to select multiple items
            in Telerik . By default this property is set to
            false.

###  SelectedItems `RadListViewDataItemCollection`

Gets a collection of the currently selected
            RadListViewDataItems

###  SelectedValue `Object`

Gets the data key value of the selected item in a 
             control.

###  SelectedValues `Object`

###  EditIndexes `RadListViewIndexesCollection`

Gets the edit indexes which represent the indexes
            of the items that are currenly in edit mode.

###  EditItems `RadListViewDataItemCollection`

Gets a collection of all  in edit mode.

###  AllowMultiItemEdit `Boolean`

Gets or sets a value indicating whether RadListView will allow you
            to have multiple items in edit mode. The default value is
            false.

###  ConvertEmptyStringToNull `Boolean`

Gets or sets a value that indicates whether empty string values ("")
            are automatically converted to null values when the data field is
            updated in the data source.

###  InsertItemPosition `RadListViewInsertItemPosition`

Gets or sets the location of the 
            template when it is rendered as part of the 
             control.

###  InsertItem `RadListViewInsertItem`

Gets the insert item of a  control.

###  ClientDataSourceID `String`

Gets or sets ID of RadClientDataSource control that to be used for client side binding

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

###  RenderMode `RenderMode`

Specifies the rendering mode of the control. Setting the mode to Lightweight will yield
            HTML 5/CSS 3 html and css.

#### Remarks
Lightweight rendering mode might change the outlook of the component in some older browsers
            that don't support CSS3/HTML5.

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  ClientStateFieldID `String`

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  DefaultCssClass `String`

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ScriptManager `ScriptManager`

###  AccessKey `String`

Gets or sets the access key that allows you to quickly navigate to the
            Web server control.

###  BackColor `Color`

Gets or sets the background color of the Web server control.

###  BorderColor `Color`

Gets or sets the border color of the Web control.

###  BorderStyle `BorderStyle`

Gets or sets the border style of the Web server control.

###  BorderWidth `Unit`

Gets or sets the border width of the Web server control.

###  CssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class rendered by the Web
            server control on the client.

###  Enabled `Boolean`

Gets or sets a value indicating whether the Web server control is enabled.

###  EnableTheming `Boolean`

Gets or sets a value indicating whether themes apply to this control.

###  ForeColor `Color`

Gets or sets the foreground color (typically the color of the text)
            of the Web server control.

###  Font `FontInfo`

Gets the font properties associated with the Web server control.

###  Height `Unit`

Gets or sets the height of the Web server control.

###  SkinID `String`

Gets or sets the skin to apply to the control.

###  Visible `Boolean`

Gets or sets a value that indicates whether a server control is rendered
            as UI on the page.

###  Width `Unit`

Gets or sets the width of the Web server control.

###  TabIndex `Int16`

Gets or sets the tab index of the Web server control.

###  ToolTip `String`

Gets or sets the text displayed when the mouse pointer hovers over the
            Web server control.

###  DataMember `String`

Gets or sets the name of the list of data that the data-bound control
            binds to, in cases where the data source contains more than one distinct list
            of data items.

###  EnableViewState `Boolean`

Gets or sets a value indicating whether the server control persists
            its view state, and the view state of any child controls it contains, to the
            requesting client.

###  DataSource `Object`

Gets or sets the object from which the data-bound control retrieves
            its list of data items.

###  DataSourceID `Object`

Gets or sets the ID of the control from which the data-bound control
            retrieves its list of data items.

## Methods

###  CreateChildControls

When overridden in an abstract class, creates the control hierarchy
             that is used to render the composite data-bound control based on the
             values from the specified data source.

#### Parameters

#### dataSource `System.Collections.IEnumerable`

An 
              that contains the
             values to bind to the control.

#### dataBinding `System.Boolean`

true to indicate
                             that the 
                             
                             is called during data binding; otherwise, false.

#### Returns

`System.Int32` The number of items created by the 
             
             .

###  CreateDataSourceSelectArguments

Creates a default 
             object used
            by the data-bound control if no arguments are specified.

#### Returns

`System.Web.UI.DataSourceSelectArguments` A 
            initialized to 
            .

###  PerformDataBinding

Binds the data from the data source to the composite data-bound
            control.

#### Parameters

#### data `System.Collections.IEnumerable`

An 
            that contains the values to bind to the composite data-bound
            control.

#### Returns

`System.Void` 

###  CreateDataItems

#### Returns

`System.Int32` 

###  CreateInsertItem

#### Returns

`Telerik.Web.UI.RadListViewItem` 

###  PopulateDataKeys

#### Returns

`System.Void` 

###  InstantiateDataItemTemplate

#### Returns

`System.Void` 

###  RetrivePlaceHolderControl

#### Returns

`System.Web.UI.Control` 

###  RetriveDataItemsContainer

#### Returns

`System.Web.UI.Control` 

###  InitializeLayoutTemplate

Creates and instantiate layout template instance

#### Returns

`System.Int32` Created controls count

###  SaveControlState

Saves any  control state changes that have
            occurred since the time the page was posted back to the server.

#### Returns

`System.Object` Returns the 's current state. If there is
            no state associated with the control, this method returns null.

###  LoadControlState

Restores control-state information from a previous page request that
            was saved by the 
             method.

#### Parameters

#### savedState `System.Object`

An  that
            represents the control state to be restored.

#### Returns

`System.Void` 

###  SetPageProperties

#### Returns

`System.Void` 

###  OnItemCreated

Raises  event

#### Parameters

#### e `Telerik.Web.UI.RadListViewItemEventArgs`

#### Returns

`System.Void` 

###  OnItemDataBound

Raises  event

#### Parameters

#### e `Telerik.Web.UI.RadListViewItemEventArgs`

#### Returns

`System.Void` 

###  OnItemCommand

Raises  event

#### Parameters

#### e `Telerik.Web.UI.RadListViewCommandEventArgs`

#### Returns

`System.Void` 

###  OnItemDeleted

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadListViewDeletedEventArgs`

#### Returns

`System.Void` 

###  OnItemUpdating

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadListViewCommandEventArgs`

#### Returns

`System.Void` 

###  OnItemUpdated

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadListViewUpdatedEventArgs`

#### Returns

`System.Void` 

###  OnItemCanceling

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadListViewCommandEventArgs`

#### Returns

`System.Void` 

###  OnNeedDataSource

Raises  event

#### Parameters

#### e `Telerik.Web.UI.RadListViewNeedDataSourceEventArgs`

#### Returns

`System.Void` 

###  OnItemDrop

Raises the  event

#### Parameters

#### e `Telerik.Web.UI.RadListViewItemDragDropEventArgs`

#### Returns

`System.Void` 

###  OnCustomAggregate

Raises the  event

#### Parameters

#### e `Telerik.Web.UI.ListViewCustomAggregateEventArgs`

#### Returns

`System.Void` 

###  ClearSelectedItems

Removes all selected items that belong to  instance.

#### Returns

`System.Void` 

###  ClearEditItems

Removes all edit items that belong to the 
            instance.

#### Returns

`System.Void` 

###  OnInit

Handles the  event.

#### Parameters

#### e `System.EventArgs`

An  object that contains the event data.

#### Returns

`System.Void` 

###  OnLoad

Handles the  event.

#### Parameters

#### e `System.EventArgs`

An  object that
            contains event data.

#### Returns

`System.Void` 

###  Render

Renders the  to the specified HTML writer.

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

The 
             object that receives
            the control content.

#### Returns

`System.Void` 

###  DataBind

#### Returns

`System.Void` 

###  Rebind

Rebinds this instance and updates the .

#### Returns

`System.Void` 

###  ExtractValuesFromItem

The passed  object (like  for example) will be filled with the
                names/values of the corresponding 's bound values and data-key values if included.

#### Returns

`System.Void` 

###  PerformUpdate

Perform asynchronous update operation, using the  control API and the
                Rebind method. Please, make sure you have specified the correct
                DataKeyNames for the . When the
                asynchronous operation calls back,  will fire
                 event.

#### Returns

`System.Void` 

###  PerformUpdate

Perform asynchronous update operation, using the 
                control API. Please make sure you have specified the correct 
                DataKeyNames for the
                . When the asynchronous operation calls
                back,  will fire
                 event. The boolean
                property defines if  will  after
                the update.

#### Returns

`System.Void` 

###  PerformDelete

Perform asynchronous delete operation, using the 
             API the Rebinds the grid. Please
            make sure you have specified the correct  for the 
            . When the asynchronous operation calls
            back,  will fire 
             event.

#### Returns

`System.Void` 

###  PerformDelete

Perform delete operation, using the 
            API. Please make sure you have specified the correct 
             for the .

#### Returns

`System.Void` 

###  ShowInsertItem

Places the RadListView in insert mode, allowing user to insert a new data-item
                values.

#### Returns

`System.Void` 

###  ShowInsertItem

Places the RadListView in insert mode, allowing user to insert a new data-item
                values.

#### Returns

`System.Void` 

###  ShowInsertItem

Places the RadListView in insert mode, allowing user to insert a new data-item values.
            The InsertItem created will be bound to values found in defaultValues dictionary;

#### Parameters

#### defaultValues `System.Collections.IDictionary`

values with which InsertItem will be populated

#### Returns

`System.Void` 

###  ShowInsertItem

Places the RadListView in insert mode, allowing user to insert a new data-item values.
            The InsertItem created will be bound to values found in defaultValues dictionary;

#### Parameters

#### itemPosition `Telerik.Web.UI.RadListViewInsertItemPosition`

position at which the insertItem will be shown

#### defaultValues `System.Collections.IDictionary`

values with which InsertItem will be populated

#### Returns

`System.Void` 

###  ShowInsertItem

Places the RadListView in insert mode, allowing user to insert a new data-item values.
            The InsertItem created will be bound to the provided object;

#### Parameters

#### dataItem `System.Object`

object to which InsertItem will be bound

#### Returns

`System.Void` 

###  ShowInsertItem

Places the RadListView in insert mode, allowing user to insert a new data-item values.
            The InsertItem created will be bound to the provided object;

#### Parameters

#### itemPosition `Telerik.Web.UI.RadListViewInsertItemPosition`

position at which the insertItem will be shown

#### dataItem `System.Object`

object to which InsertItem will be bound

#### Returns

`System.Void` 

###  PerformInsert

Performs asynchronous insert operation, using the  API, then
            Rebinds. When the asynchronous operation calls back,  will fire
             event.

#### Returns

`System.Void` 

###  PerformInsert

Performs asynchronous insert operation, using the  API, then
            Rebinds. When the asynchronous operation calls back,  will fire
             event.

#### Returns

`System.Void` 

###  ExtractDataKeyValue

#### Returns

`System.Object` 

###  ApplyConditionalRendering

Use this from RenderContents of the inheritor

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

###  RenderScriptsNoScriptManager

#### Returns

`System.Void` 

###  RenderDescriptorsNoScriptManager

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

`System.Boolean` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  RenderClientStateField

#### Returns

`System.Void` 

###  RenderContents

#### Returns

`System.Void` 

###  RenderBeginTag

#### Returns

`System.Void` 

###  DescribeComponent

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

