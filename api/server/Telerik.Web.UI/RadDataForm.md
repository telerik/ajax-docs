---
title: Telerik.Web.UI.RadDataForm
page_title: Telerik.Web.UI.RadDataForm
description: Telerik.Web.UI.RadDataForm
---

# Telerik.Web.UI.RadDataForm

Telerik.Web.UI.RadDataForm is designed to give your the freedom to specify 
            predefined or customized type of layout for the items displayed in 
            the control and in the same time gives you integrated paging and editing. You can embed various 
            controls of your choice in RadDataForm's templates and model their 
            appearance in a custom manner. Thanks to its innovative architecture 
            Telerik.Web.UI.RadDataForm is extremely fast and generates very little output.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.Control
* System.Web.UI.WebControls.WebControl
* System.Web.UI.WebControls.BaseDataBoundControl
* System.Web.UI.WebControls.DataBoundControl
* System.Web.UI.WebControls.CompositeDataBoundControl
* Telerik.Web.UI.RadCompositeDataBoundControl : IControl, IControlResolver, IFeatureGroup, IPostBackDataHandler, IScriptControl, ISkinnableControl
* Telerik.Web.UI.RadDataForm : IPageableItemContainer, IPostBackEventHandler, IRadPageableItemContainer

## Properties

###  AccessKey `String`

Gets or sets the access key that allows you to quickly navigate to the
            Web server control.

###  AllowCustomPaging `Boolean`

Gets or sets if the custom paging feature is enabled.

###  AllowPaging `Boolean`

Gets or sets a value indicating whether the automatic paging feature is
            enabled.

###  BackColor `Color`

Gets or sets the background color of the Web server control.

###  BorderColor `Color`

Gets or sets the border color of the Web control.

###  BorderStyle `BorderStyle`

Gets or sets the border style of the Web server control.

###  BorderWidth `Unit`

Gets or sets the border width of the Web server control.

###  ClientDataSourceID `String`

Gets or sets ID of RadClientDataSource control that to be used for client side binding

###  ClientIDMode `ClientIDMode`

This property is overridden in order to support controls which implement INamingContainer.
            The default value is changed to "AutoID".

###  ClientSettings `RadDataFormClientSettings`

Gets a reference to the 
             object that allows
            you to set the properties of the client-side behavior and
            appearance in a Telerik  control.

###  ConvertEmptyStringToNull `Boolean`

Gets or sets a value that indicates whether empty string values ("")
            are automatically converted to null values when the data field is
            updated in the data source.

###  CssClass `String`

Gets or sets the Cascading Style Sheet (CSS) class rendered by the Web
            server control on the client.

###  CssClassFormatString `String`

The CssClass property will now be used instead of the former Skin 
            and will be modified in AddAttributesToRender()

###  CurrentPageIndex `Int32`

Gets or sets a value indicating the index of the currently active page in case
            paging is enabled ( is
            true).

###  DataKeyNames `String[]`

Gets or sets an array of data-field names that will be used to
            populate the
             collection, when the 
            control is databinding.

###  DataKeyValues `RadDataFormDataKeyArray`

Gets collection of data key values.

###  DataMember `String`

Gets or sets the name of the list of data that the data-bound control
            binds to, in cases where the data source contains more than one distinct list
            of data items.

###  DataSource `Object`

Gets or sets the object from which the data-bound control retrieves
            its list of data items.

###  DataSourceID `Object`

Gets or sets the ID of the control from which the data-bound control
            retrieves its list of data items.

###  DeleteMethod `String`

Gets or sets the name of the method to call in order to delete data

###  EditIndex `Int32`

Gets the edit indexes which represent the indexes
            of the items that are currenly in edit mode.

###  EditItemTemplate `ITemplate`

Gets or sets the custom content for the item in edit mode.

###  EmptyDataTemplate `ITemplate`

Gets or sets the Template that will be displayed if there are no
            records in the DataSource assigned.

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

###  EnableEmbeddedScripts `Boolean`

Gets or sets the value, indicating whether to render script references to the embedded scripts or not.

#### Remarks
If EnableEmbeddedScripts is set to false you will have to register the needed Scripts files by hand.

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

###  InsertItem `RadDataFormInsertItem`

Gets the insert item of a  control.

###  InsertItemPosition `RadDataFormInsertItemPosition`

Gets or sets the location of the 
            template when it is rendered as part of the 
             control.

###  InsertItemTemplate `ITemplate`

Gets or sets the custom content for an insert item in the
             control.

###  InsertMethod `String`

Gets or sets the name of the method to call in order to insert data

###  IsItemInserted `Boolean`

Gets or sets a value indicating if the RadDataForm is
            currently in insert mode.

#### Remarks
The ItemInserted property indicates if the RadDataForm is
                currently in insert mode. After setting it you should call the
                 method.

###  IsSkinSet `String`

For internal use.

###  ItemPlaceholderID `String`

Gets or sets the ID for the item placeholder in a 
            control.

###  Items `RadDataFormDataItemCollection`

Gets a collection of  objects that represent
            the data items of the current page of data in a  control.

###  ItemTemplate `ITemplate`

Gets or sets the custom content for the data item in a 
            control.

###  LayoutTemplate `ITemplate`

Gets or sets the custom content for the root container in a 
             control.

###  PageCount `Int32`

Gets the number of pages required to display the records of the data
            source in a control.

###  PageSize `Int32`

Specify the maximum number of items that would appear in a page,
             when paging is enabled by  property.
             Default value is 10.

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

###  RenderWrapper `Boolean`

RenderWrapper property determines if the LayoutTemplate should be wrapped inside Div element with ID of the DataForm

###  ResolvedDataSource `DataFormEnumerableBase`

###  ResolvedRenderMode `RenderMode`

Returns resolved RenderMode should the original value was Auto

###  RuntimeSkin `String`

Gets the real skin name for the control user interface. If Skin is not set, returns
            "Default", otherwise returns Skin.

###  Skin `String`

Gets or sets the skin name for the control user interface.

#### Remarks
If this property is not set, the control will render using the skin named "Default".
            If EnableEmbeddedSkins is set to false, the control will not render skin.

###  SkinID `String`

Gets or sets the skin to apply to the control.

###  TabIndex `Int16`

Gets or sets the tab index of the Web server control.

###  ToolTip `String`

Gets or sets the text displayed when the mouse pointer hovers over the
            Web server control.

###  UpdateMethod `String`

Gets or sets the name of the method to call in order to update data

###  ValidationSettings `RadDataFormValidationSettings`

Gets a reference to the 
             object that allows you to set the properties of the validate
             operation in a  control.

###  VirtualItemCount `Int32`

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

###  ClearEditItems

Removes all edit items that belong to the 
            instance.

#### Returns

`System.Void` 

###  ControlPreRender

Code moved into this method from OnPreRender to make sure it executed when the framework skips OnPreRender() for some reason

#### Returns

`System.Void` 

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

###  CreateDataItems

#### Returns

`System.Int32` 

###  CreateDataSourceSelectArguments

Creates a default 
             object used
            by the data-bound control if no arguments are specified.

#### Returns

`System.Web.UI.DataSourceSelectArguments` A 
            initialized to 
            .

###  CreateInsertItem

#### Returns

`Telerik.Web.UI.RadDataFormItem` 

###  DataBind

#### Returns

`System.Void` 

###  ExtractDataKeyValue

#### Returns

`System.Object` 

###  ExtractValuesFromItem

The passed  object (like  for example) will be filled with the
                names/values of the corresponding 's bound values and data-key values if included.

#### Returns

`System.Void` 

###  GetEmbeddedSkinNames

Returns the names of all embedded skins. Used by Telerik.Web.Examples.

#### Returns

`System.Collections.Generic.List`1` 

###  InitializeLayoutTemplate

Creates and instantiate layout template instance

#### Returns

`System.Int32` Created controls count

###  InstantiateDataItemTemplate

#### Returns

`System.Void` 

###  LoadClientState

Loads the client state data

#### Parameters

#### clientState `System.Collections.Generic.Dictionary{System.String,System.Object}`

#### Returns

`System.Boolean` 

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

###  LoadPostData

Executed when post data is loaded from the request

#### Parameters

#### postDataKey `System.String`

#### postCollection `System.Collections.Specialized.NameValueCollection`

#### Returns

`System.Boolean` 

###  OnInit

Handles the  event.

#### Parameters

#### e `System.EventArgs`

An  object that contains the event data.

#### Returns

`System.Void` 

###  OnItemCanceling

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadDataFormCommandEventArgs`

#### Returns

`System.Void` 

###  OnItemCommand

Raises  event

#### Parameters

#### e `Telerik.Web.UI.RadDataFormCommandEventArgs`

#### Returns

`System.Void` 

###  OnItemCreated

Raises  event

#### Parameters

#### e `Telerik.Web.UI.RadDataFormItemEventArgs`

#### Returns

`System.Void` 

###  OnItemDataBound

Raises  event

#### Parameters

#### e `Telerik.Web.UI.RadDataFormItemEventArgs`

#### Returns

`System.Void` 

###  OnItemDeleted

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadDataFormDeletedEventArgs`

#### Returns

`System.Void` 

###  OnItemUpdated

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadDataFormUpdatedEventArgs`

#### Returns

`System.Void` 

###  OnItemUpdating

Raises the  event.

#### Parameters

#### e `Telerik.Web.UI.RadDataFormCommandEventArgs`

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

###  OnNeedDataSource

Raises  event

#### Parameters

#### e `Telerik.Web.UI.RadDataFormNeedDataSourceEventArgs`

#### Returns

`System.Void` 

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

###  PerformDelete

Perform asynchronous delete operation

#### Returns

`System.Void` 

###  PerformDelete

Perform delete operation, using the 
            API. Please make sure you have specified the correct 
             for the .

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

###  PopulateDataKeys

#### Returns

`System.Void` 

###  RaisePostDataChangedEvent

Executed when post data changes should invoke a changed event

#### Returns

`System.Void` 

###  Rebind

Rebinds this instance and updates the .

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

###  Render

Renders the  to the specified HTML writer.

#### Parameters

#### writer `System.Web.UI.HtmlTextWriter`

The 
             object that receives
            the control content.

#### Returns

`System.Void` 

###  RetriveDataItemsContainer

#### Returns

`System.Web.UI.Control` 

###  RetrivePlaceHolderControl

#### Returns

`System.Web.UI.Control` 

###  SaveClientState

Saves the client state data

#### Returns

`System.String` 

###  SaveControlState

Saves any  control state changes that have
            occurred since the time the page was posted back to the server.

#### Returns

`System.Object` Returns the 's current state. If there is
            no state associated with the control, this method returns null.

###  SetPageProperties

#### Returns

`System.Void` 

###  ShowInsertItem

Places the RadDataForm in insert mode, allowing user to insert a new data-item
                values.

#### Returns

`System.Void` 

###  ShowInsertItem

Places the RadDataForm in insert mode, allowing user to insert a new data-item
                values.

#### Returns

`System.Void` 

###  ShowInsertItem

Places the RadDataForm in insert mode, allowing user to insert a new data-item values.
            The InsertItem created will be bound to values found in defaultValues dictionary;

#### Parameters

#### defaultValues `System.Collections.IDictionary`

values with which InsertItem will be populated

#### Returns

`System.Void` 

###  ShowInsertItem

Places the RadDataForm in insert mode, allowing user to insert a new data-item values.
            The InsertItem created will be bound to values found in defaultValues dictionary;

#### Parameters

#### itemPosition `Telerik.Web.UI.RadDataFormInsertItemPosition`

position at which the insertItem will be shown

#### defaultValues `System.Collections.IDictionary`

values with which InsertItem will be populated

#### Returns

`System.Void` 

###  ShowInsertItem

Places the RadDataForm in insert mode, allowing user to insert a new data-item values.
            The InsertItem created will be bound to the provided object;

#### Parameters

#### dataItem `System.Object`

object to which InsertItem will be bound

#### Returns

`System.Void` 

###  ShowInsertItem

Places the RadDataForm in insert mode, allowing user to insert a new data-item values.
            The InsertItem created will be bound to the provided object;

#### Parameters

#### itemPosition `Telerik.Web.UI.RadDataFormInsertItemPosition`

position at which the insertItem will be shown

#### dataItem `System.Object`

object to which InsertItem will be bound

#### Returns

`System.Void` 

