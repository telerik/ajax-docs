---
title: TreeList Object
page_title: TreeList Object | RadTreeList for ASP.NET AJAX Documentation
description: TreeList Object
slug: treelist/server-side-programming/treelist-object
tags: treelist,object
published: True
position: 0
---

# TreeList Object



Below are listed the properties, methods, collections and events you should be aware of when working with Telerik **RadTreeList** control.

## Server-side Properties

**RadTreeList** provides the following server-side properties:


>caption  

| Property | Description |
| ------ | ------ |
| **AllowLoadOnDemand** |Gets or sets the value indicating whether the load on demand feature is enabled.|
| **AllowMultiItemEdit** |Gets or sets the value indicating whether editing of multiple records at the same time is enabled.|
| **AllowNaturalSort** |Gets or sets the value indicating whether the **None** mode will beincluded when toggling the sort modes of the control.|
| **AllowPaging** |Gets or sets the value indicating whether the paging feature is enabled.|
| **AllowRecursiveDelete** |Gets or sets the value indicating whether the recursive delete feature is enabled.|
| **AllowSorting** |Gets or sets the value indicating whether the sorting feature is enabled.|
| **AllowMultiColumnSorting** |Gets or sets the value indicating whether more than one columns can be sorted in a single radTreeList.The order is the same as the sequence of expressions in SortExpressions.|
| **AllowMultiItemSelection** |Gets or sets the value indicating whether you will be able to select multiple items in the RadTreeList. By default the property is set to false.|
| **AllowRecursiveSelection** |Gets or sets the value indicating whether child items will be selected recursively when a RadTreeList item is selected. Setting this property to true automatically enables MultiItemSelection for the RadTreeList. The default value is false.|
| **ClientDataKeyNames** |Returns a collection of the client data key names specified for the treelist control.|
| **CurrentPageIndex** |Gets or sets a value indicating the index of the currently active page in case paging is enabled.|
| **DataKeyNames** |Gets or sets an array of data-field names that will be used to populate the DataKeyValues collection when the RadTreeList control is bound.|
| **DataSourceIsAssigned** |A boolean property indicating whether a DataSource has been set for the RadTreeList control.|
| **DetailTemplate** |Sets a template which will be used to generate a DetailTemplateItem corresponding to eachTreeListDataItem.|
| **Dir** |Gets or sets a value which indicates the direction in which the control will be rendered (RTL/LTR).|
| **EditMode** |A property used to specify the edit mode of the treelist items, the possible values being(EditForms, InPlace and PopUp).|
| **EnableAriaSupport** |A boolean property specifying whether WAI-ARIA support should be enabled.|
| **EnableAjaxSkinRendering** |Gets or sets value indicating whether to render the skin CSS files during Ajax requests.|
| **Enabled** |Gets or sets value indicating whether the control is enabled or not. The default value is true.|
| **EnableNoRecordsTemplate** |Gets or sets value indicating whether a NoRecordsItem will be displayed when the treelist is bound to an empty datasource.|
| **EnableEmbeddedBaseStylesheet** |Gets or sets value indicating whether to render the embedded base stylesheet css file of the control or not.|
| **EnableEmbeddedScripts** |Gets or sets value indicating whether to render the embedded scripts of the control or not.|
| **EnableEmbeddedSkins** |Gets or sets value, indicating whether to render the embedded skin css file of the control or not.|
| **EnableViewState** |Gets or sets value indicating whether the RadTreeList ViewState is enabled or not. The default value is true.|
| **GridLines** |Gets or sets value indicating whether borders will be displayed when the RadTreeList is rendered. Can be set to "Both" (the default value), "None", "Horizintal" and "Vertical".|
| **HideExpandCollapseButtonIfNoChildren** |Specifies whether the expand collapse button should be hidden when there are no children for a certain item (not used with load-on-demand functionality of the control).|
| **IsItemInserted** |Indicates whether a root item is currently being inserted.|
| **LocalizationPath** |Gets or sets a value indicating where the control will look for its .resx localization files.By default these files should be in the App_GlobalResources folder.|
| **NoRecordsTemplate** |Sets a template which will be used to generate a NoRecordsItem when the RadTreeList control is bound to an empty datasource.|
| **NoRecordsText** |Sets a text which will be displayed inside the NoRecordsItem when the RadTreeList control is bound to an empty datasource.|
| **PageSize** |Specifies the maximum number of items that can appear in a page. The default value is 10.|
| **PageCount** |Gets the number of pages required to display the records of the data source in a RadTreeList control.|
| **PagerTemplate** |Sets a template which will be used for generating the TreeListPagerItem.|
| **ParentDataKeyNames** |Gets or sets an array of data-field names that will be used to populate the ParentDataKeyValues collection when the RadTreeList control is bound.|
| **ShowOuterBorders** |Gets or sets value indicating whether the control will show outer borders. The default alue is true.|
| **ShowTreeLines** |Gets or sets value indicating whether the control will show outer tree lines. The default value is true.|
| **Skin** |Gets or set the RadTreeList skin|
| **SortingSettings.SortedAscToolTip** |Gets or sets the tooltip that will be displayed when you hover over the sorting button and the column is sorted ascending.|
| **SortingSettings.SortedDescToolTip** |Gets or sets the tooltip that will be displayed when you hover over the sorting button and the column is sorted descending.|

## ClientSettings

The RadTreeList ClientSettings class contains the following properties used to customize the client-sidebehavior of the control:


>caption  

| Property | Description |
| ------ | ------ |
| **AllowPostBackOnItemClick** |Gets or sets a value indicating whether RadTreeList should postback on row click.|
| **Scrolling.AllowScroll** |Gets or sets the value indicating whether the scrolling feature is enabled.|
| **Scrolling.SaveScrollPosition** |Gets or sets the value indicating whether the scroll position of the control should bepreserved on postback.|
| **Scrolling.ScrollHeight** |Gets or sets the value indicating the height of the items container when scrolling.|
| **Scrolling.ScrollLeft** |Gets or sets the value indicating the treelist's horizontal scroll position.|
| **Scrolling.ScrollTop** |Gets or sets the value indicating the treelist's vertical scroll position.|
| **Scrolling.UseStaticHeaders** |Gets or sets the value indicating whether the static headers feature is enabled.|
| **Selecting.AllowItemSelection** |Gets or sets a value indicating whether you will be able to select a treelist row on the client by clicking on it with the mouse.|
| **Selecting.AllowToggleSelection** |Gets or sets a value indicating whether clicking on an item will toggle the item's selected state.|
| **Selecting.UseSelectColumnOnly** |Gets or sets value indicating whether users could select items on mouse click or forces them to use the **TreeListSelectColumn** for that purpose. The default value is false.|

## EditFormSettings

The RadTreeList EditFormSettings class is used to set up the look, edit form modes and behavior of the RadTreeListcontrol when in edit mode, it exposes the following properties:


>caption  

| Property | Description |
| ------ | ------ |
| **CaptionDataField** |Specifies the data field that will be used to populate the caption of the edit form.|
| **CaptionFormatString** |Specifies the format string used for building the caption of the edit form.|
| **ColumnsCount** |Specifies the number of columns in the <table> rendered in the auto-generated edit form.|
| **EditColumn** |Provides access for modifying the property values of the EditCommandColumn.|
| **EditFormType** |Sets the type of the edit form when an item in RadTreeList is edited or inserted. The threeoptions are *AutoGenerated* , *Template* and *WebUserControl* .|
| **FormCaptionStyle / FormMainTableStyle / FormStyle / FormTableAlternatingItemStyle /	FormTableButtonRowStyle / FormTableItemStyle / FormTableStyle** |Properties used to style the respective parts of the auto-generated edit form.|
| **FormTemplate** |Sets a template which will be used to generate the RadTreeList edit/insert form.|
| **InsertCaption** |Specifies a string which will be displayed as a caption in the insert form of the treelist.|
| **PopUpSettings.CloseButtonTooltip** |Specifies the text for the tooltip of the pop-up edit form's close button.|
| **PopUpSettings.Height** |Specifies the height of the pop-up edit form.|
| **PopUpSettings.Modal** |A boolean property controlling whether the pop-up edit form will be modal.|
| **PopUpSettings.ScrollBars** |A property controlling which scrollbars will be displayed.|
| **PopUpSettings.ShowCaptionInEditForm** |A boolean property controlling whether a caption will be displayed in the pop-up edit form.|
| **PopUpSettings.Width** |Specifies the width of the pop-up edit form.|
| **PopUpSettings.ZIndex** |A property which allows you to specify the z-index of the pop-up edit form.|

## ExportSettings

The RadTreeList ExportSettings class is used to control the RadTreeList export modes and behavior,it exposes the following properties:


>caption  

| Property | Description |
| ------ | ------ |
| **ExportMode** |A property which controls which part of the treelist content will be exported.|
| **FileName** |A property which specifies the name of the exported file.|
| **IgnorePaging** |A boolean property controlling whether the whole data from the control's resolved datasourcewill be exported.|
| **OpenInNewWindow** |A boolean property controlling whether the newly exported file will be opened in new browserwindow/tab.|
| **Pdf** |A group of properties used to control the PDF export of RadTreeList. You can find descriptionof them in[this help article]({%slug treelist/functionality/exporting/pdf/overview%}).|

## ValidationSettings

The RadTreeList ValidationSettings class is used to configure the RadTreeList validation behavior of the control when editing/inserting records:


>caption  

| Property | Description |
| ------ | ------ |
| **CommandsToValidate** |An array of strings used to list the names of the commands which will trigger validation in RadTreeList.|
| **EnableValidation** |A boolean value idicating whether the treelist values should be validated.|
| **ValidationGroup** |A property used to set a ValidationGroup for the treelist control, so that it is validated only along a certain group of controls, having the same ValidationGroup name.|

## Server-side Collections

**RadTreeList** has the following server-side collections:


>caption  

| Collection | Return type | Description |
| ------ | ------ | ------ |
| **AutoGeneratedColumns** |TreeListColumn[]|A collection of all the auto-generated columns inside RadTreeList.|
| **ClientDataKeyValues** |TreeListDataKeyArray|A collection containing the values of the fields specified as ClientDataKeyNames in the RadTreeListdeclaration.|
| **Columns** |TreeListColumnsCollection|A collection of all the TreeListColumns manually added to the control instance.|
| **DataKeyValues** |TreeListDataKeyArray|A collection containing the values of the fields specified as DataKeyNames in the RadTreeListdeclaration.|
| **EditIndexes** |TreeListEditIndexesCollection|A collection containing the indexes of all items which are currently in edit mode.|
| **EditItems** |TreeListEditItemCollection|A collection of all currently edited items.|
| **ExpandedIndexes** |TreeListExpandedIndexesCollection|A collection containing the indexes of all rendered items which are currently expanded.|
| **InsertIndexes** |TreeListEditIndexesCollection|Returns an array containing the indexes of all items which are currently inserted.|
| **InsertItems** |TreeListEditItemCollection|Returns a collection of all currently inserted items.|
| **Items** |TreeListDataItemCollection|A collection of all currently rendered TreeListDataItem objects.|
| **ParentDataKeyValues** |TreeListDataKeyArray|A collection containing the values of the fields specified as ParentDataKeyNames in the RadTreeListdeclaration.|
| **SelectedIndexes** |TreeListDataItemCollection (read-only)|A collection containing the indexes of all the selected items in the RadTreeList.|
| **SelectedItems** |TreeListDataItemCollection (read-only)|A collection containing all TreeListDataItems currently selected.|
| **SortExpressions** |TreeListSortExpressionCollection|A collection of the sort expressions generated for the RadTreeList.|
| **RenderColumns** |TreeListColumn[]|A collection of all the TreeListColumns which will be rendered in the control (including auto-generated ones).|

## Server-side Methods

**RadTreeList** provides the following server-side methods:


>caption  

| Method | Description |
| ------ | ------ |
| **ApplyRecursiveSelection(TreeListDataItem item, bool selected[optional])** |Recursively selects or deselects all child items of a RadTreeLIst item specified by its hierarchical index. Updates the selected state of all the parent items of the specified item to reflect the recursive selection.|
| **ClearSelectedItems()** |Removes all selected items that belongs to RadTreeList instance.|
| **CollapseAllItems()** |Collapses all RadTreeList items.|
| **ExpandAllItems()** |Expands all RadTreeList items.|
| **ExpandItemToLevel(TreeListDataItem item, int level)** |Expands the specified TreeListDataItem to the specified level.|
| **ExpandToLevel(int level)** |Expands all RadTreeList items to the specified level.|
| **ExtractValuesFromItem(IDictionary newValues, TreeListEditableItem dataItem, bool includePrimaryKey)** |Fills an IDictionary object with the values of a TreeListEditableItem.|
| **GetItems(TreeListItem Type[])** |Returns a collection of TreeListItems objects with the specified type.|
| **InsertChildItem(TreeListDataItem parentItem)** |Inserts a new child item for the TreeListDataItem passed.|
| **InsertItem()** |Inserts a new root item in RadTreeList.|
| **PerformDelete(TreeListDataItem editedItem)** |Performs asynchronous delete operation, using the DataSourceControl API, then Rebinds.When the asynchronous operation calls back, RadTreeList will fire ItemDeleted event.|
| **PerformInsert(TreeListEditableItem insertItem)** |Performs asynchronous insert operation, using the DataSourceControl API, then Rebinds.When the asynchronous operation calls back, RadTreeList will fire ItemInserted event.|
| **PerformUpdate(TreeListEditableItem editedItem)** |Performs asynchronous update operation, using the DataSource control API and the Rebind method. When the asynchronous operation calls back, RadTreeList will fire ItemUpdated event.|

## Server-side Events

**RadTreeList** provides the following server-side events:


>caption  

| Events | Description |
| ------ | ------ |
| **AutoGeneratedColumnCreated** |Fires when auto generated column is created.|
| **CancelCommand** |Fires when an insert or edit action is cancelled.|
| **ChildItemsDataBind** |Fires when load-on-demand is enabled and a TreeListDataItem is being expanded.|
| **CreateColumnEditor** |Fires when when a column editor needs to be initialized.|
| **CreateCustomColumn** |Fires when a custom column is recreated on postback.|
| **DeleteCommand** |Fires when a delete command is triggered.|
| **EditCommand** |Fires when an edit command has been triggered.|
| **Exporting** |Fires when the export output is already generated and ready for adding to the response.|
| **InsertCommand** |Fires when a PerformInsert command is triggered.|
| **ItemCreated** |Fires when the RadTreeList item is created. In this event you could add controls in the specific TreeListItem and modify the properties to already existing controls.|
| **ItemCommand** |Fires when any command button is clicked in the RadTreeList control. All bubbled events from the treelist items fire the ItemCommand event.|
| **ItemDataBound** |Fires after an item is databound to the RadTreeList control. In this event you could manipulate the newly added (in the ItemCreated event) controls' properties for instance.|
| **ItemDeleted** |Fires when an item has been deleted from RadTreeList with automatic datasource operations enabled.|
| **ItemDrop** |Fires when a TreeListDataItem is dragged and dropped over HTML element.|
| **ItemDrop** |Fires when a TreeListDataItem is dragged and dropped over HTML element.|
| **ItemInserted** |Fires when an item has been inserted in RadTreeList with automatic datasource operations enabled.|
| **ItemInserted** |Fires when an item has been updated in RadTreeList with automatic datasource operations enabled.|
| **NeedDataSource** |Fires when the RadTreeList is about to be bound and the data source must be assigned.|
| **PageIndexChanged** |Fires when a paging action is performed.|
| **PageSizeChanged** |Fires when page size is changed.|
| **SelectedIndexChanged** |Fired for both client and server-side item selection on the first post-back following the selection/deselection ofthe item/items. For example, if you have client-side item selection and you select one or more tree list item,the event will be fired the next time you make a post-back to the server.In the case of server-side item selection, the event will be fired immediately after the selection/deselection of a certain item since that operation automatically triggers a post-back to the server.|
| **PdfExporting** |Fires when the HTML output of the RadTreeList control is generated and before it is parsedinto binary. It allows you to manipulate the treelist output when exporting, as in the Export eventthe pdf is already generated and cannot be modified.|
| **Sorting** |Fires when a sort operation is requested and before the RadTreeList control handles the sort operation.|
| **UpdateCommand** |Fires when an Update command is triggered.|
