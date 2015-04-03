---
title: TreeList Object
page_title: TreeList Object | UI for ASP.NET AJAX Documentation
description: TreeList Object
slug: treelist/server-side-programming/treelist-object
tags: treelist,object
published: True
position: 0
---

# TreeList Object



Below are listed the properties, methods, collections and events you should be aware of when working with Telerik __RadTreeList__ control.

## Server-side Properties

__RadTreeList__ provides the following server-side properties:


>caption  

| Property | Description |
| ------ | ------ |
| __AllowLoadOnDemand__ |Gets or sets the value indicating whether the load on demand feature is enabled.|
| __AllowMultiItemEdit__ |Gets or sets the value indicating whether editing of multiple records at the same time is enabled.|
| __AllowNaturalSort__ |Gets or sets the value indicating whether the __None__ mode will beincluded when toggling the sort modes of the control.|
| __AllowPaging__ |Gets or sets the value indicating whether the paging feature is enabled.|
| __AllowRecursiveDelete__ |Gets or sets the value indicating whether the recursive delete feature is enabled.|
| __AllowSorting__ |Gets or sets the value indicating whether the sorting feature is enabled.|
| __AllowMultiColumnSorting__ |Gets or sets the value indicating whether more than one columns can be sorted in a single radTreeList.The order is the same as the sequence of expressions in SortExpressions.|
| __AllowMultiItemSelection__ |Gets or sets the value indicating whether you will be able to select multiple items in the RadTreeList. By default the property is set to false.|
| __AllowRecursiveSelection__ |Gets or sets the value indicating whether child items will be selected recursively when a RadTreeList item is selected. Setting this property to true automatically enables MultiItemSelection for the RadTreeList. The default value is false.|
| __ClientDataKeyNames__ |Returns a collection of the client data key names specified for the treelist control.|
| __CurrentPageIndex__ |Gets or sets a value indicating the index of the currently active page in case paging is enabled.|
| __DataKeyNames__ |Gets or sets an array of data-field names that will be used to populate the DataKeyValues collection when the RadTreeList control is bound.|
| __DataSourceIsAssigned__ |A boolean property indicating whether a DataSource has been set for the RadTreeList control.|
| __DetailTemplate__ |Sets a template which will be used to generate a DetailTemplateItem corresponding to eachTreeListDataItem.|
| __Dir__ |Gets or sets a value which indicates the direction in which the control will be rendered (RTL/LTR).|
| __EditMode__ |A property used to specify the edit mode of the treelist items, the possible values being(EditForms, InPlace and PopUp).|
| __EnableAriaSupport__ |A boolean property specifying whether WAI-ARIA support should be enabled.|
| __EnableAjaxSkinRendering__ |Gets or sets value indicating whether to render the skin CSS files during Ajax requests.|
| __Enabled__ |Gets or sets value indicating whether the control is enabled or not. The default value is true.|
| __EnableNoRecordsTemplate__ |Gets or sets value indicating whether a NoRecordsItem will be displayed when the treelist is bound to an empty datasource.|
| __EnableEmbeddedBaseStylesheet__ |Gets or sets value indicating whether to render the embedded base stylesheet css file of the control or not.|
| __EnableEmbeddedScripts__ |Gets or sets value indicating whether to render the embedded scripts of the control or not.|
| __EnableEmbeddedSkins__ |Gets or sets value, indicating whether to render the embedded skin css file of the control or not.|
| __EnableViewState__ |Gets or sets value indicating whether the RadTreeList ViewState is enabled or not. The default value is true.|
| __GridLines__ |Gets or sets value indicating whether borders will be displayed when the RadTreeList is rendered. Can be set to "Both" (the default value), "None", "Horizintal" and "Vertical".|
| __HideExpandCollapseButtonIfNoChildren__ |Specifies whether the expand collapse button should be hidden when there are no children for a certain item (not used with load-on-demand functionality of the control).|
| __IsItemInserted__ |Indicates whether a root item is currently being inserted.|
| __LocalizationPath__ |Gets or sets a value indicating where the control will look for its .resx localization files.By default these files should be in the App_GlobalResources folder.|
| __NoRecordsTemplate__ |Sets a template which will be used to generate a NoRecordsItem when the RadTreeList control is bound to an empty datasource.|
| __NoRecordsText__ |Sets a text which will be displayed inside the NoRecordsItem when the RadTreeList control is bound to an empty datasource.|
| __PageSize__ |Specifies the maximum number of items that can appear in a page. The default value is 10.|
| __PageCount__ |Gets the number of pages required to display the records of the data source in a RadTreeList control.|
| __PagerTemplate__ |Sets a template which will be used for generating the TreeListPagerItem.|
| __ParentDataKeyNames__ |Gets or sets an array of data-field names that will be used to populate the ParentDataKeyValues collection when the RadTreeList control is bound.|
| __ShowOuterBorders__ |Gets or sets value indicating whether the control will show outer borders. The default alue is true.|
| __ShowTreeLines__ |Gets or sets value indicating whether the control will show outer tree lines. The default value is true.|
| __Skin__ |Gets or set the RadTreeList skin|
| __SortingSettings.SortedAscToolTip__ |Gets or sets the tooltip that will be displayed when you hover over the sorting button and the column is sorted ascending.|
| __SortingSettings.SortedDescToolTip__ |Gets or sets the tooltip that will be displayed when you hover over the sorting button and the column is sorted descending.|

## ClientSettings

The RadTreeList ClientSettings class contains the following properties used to customize the client-sidebehavior of the control:


>caption  

| Property | Description |
| ------ | ------ |
| __AllowPostBackOnItemClick__ |Gets or sets a value indicating whether RadTreeList should postback on row click.|
| __Scrolling.AllowScroll__ |Gets or sets the value indicating whether the scrolling feature is enabled.|
| __Scrolling.SaveScrollPosition__ |Gets or sets the value indicating whether the scroll position of the control should bepreserved on postback.|
| __Scrolling.ScrollHeight__ |Gets or sets the value indicating the height of the items container when scrolling.|
| __Scrolling.ScrollLeft__ |Gets or sets the value indicating the treelist's horizontal scroll position.|
| __Scrolling.ScrollTop__ |Gets or sets the value indicating the treelist's vertical scroll position.|
| __Scrolling.UseStaticHeaders__ |Gets or sets the value indicating whether the static headers feature is enabled.|
| __Selecting.AllowItemSelection__ |Gets or sets a value indicating whether you will be able to select a treelist row on the client by clicking on it with the mouse.|
| __Selecting.AllowToggleSelection__ |Gets or sets a value indicating whether clicking on an item will toggle the item's selected state.|
| __Selecting.UseSelectColumnOnly__ |Gets or sets value indicating whether users could select items on mouse click or forces them to use the __TreeListSelectColumn__ for that purpose. The default value is false.|

## EditFormSettings

The RadTreeList EditFormSettings class is used to set up the look, edit form modes and behavior of the RadTreeListcontrol when in edit mode, it exposes the following properties:


>caption  

| Property | Description |
| ------ | ------ |
| __CaptionDataField__ |Specifies the data field that will be used to populate the caption of the edit form.|
| __CaptionFormatString__ |Specifies the format string used for building the caption of the edit form.|
| __ColumnsCount__ |Specifies the number of columns in the <table> rendered in the auto-generated edit form.|
| __EditColumn__ |Provides access for modifying the property values of the EditCommandColumn.|
| __EditFormType__ |Sets the type of the edit form when an item in RadTreeList is edited or inserted. The threeoptions are *AutoGenerated* , *Template* and *WebUserControl* .|
| __FormCaptionStyle / FormMainTableStyle / FormStyle / FormTableAlternatingItemStyle /	FormTableButtonRowStyle / FormTableItemStyle / FormTableStyle__ |Properties used to style the respective parts of the auto-generated edit form.|
| __FormTemplate__ |Sets a template which will be used to generate the RadTreeList edit/insert form.|
| __InsertCaption__ |Specifies a string which will be displayed as a caption in the insert form of the treelist.|
| __PopUpSettings.CloseButtonTooltip__ |Specifies the text for the tooltip of the pop-up edit form's close button.|
| __PopUpSettings.Height__ |Specifies the height of the pop-up edit form.|
| __PopUpSettings.Modal__ |A boolean property controlling whether the pop-up edit form will be modal.|
| __PopUpSettings.ScrollBars__ |A property controlling which scrollbars will be displayed.|
| __PopUpSettings.ShowCaptionInEditForm__ |A boolean property controlling whether a caption will be displayed in the pop-up edit form.|
| __PopUpSettings.Width__ |Specifies the width of the pop-up edit form.|
| __PopUpSettings.ZIndex__ |A property which allows you to specify the z-index of the pop-up edit form.|

## ExportSettings

The RadTreeList ExportSettings class is used to control the RadTreeList export modes and behavior,it exposes the following properties:


>caption  

| Property | Description |
| ------ | ------ |
| __ExportMode__ |A property which controls which part of the treelist content will be exported.|
| __FileName__ |A property which specifies the name of the exported file.|
| __IgnorePaging__ |A boolean property controlling whether the whole data from the control's resolved datasourcewill be exported.|
| __OpenInNewWindow__ |A boolean property controlling whether the newly exported file will be opened in new browserwindow/tab.|
| __Pdf__ |A group of properties used to control the PDF export of RadTreeList. You can find descriptionof them in[this help article]({%slug treelist/functionality/exporting/pdf/overview%}).|

## ValidationSettings

The RadTreeList ValidationSettings class is used to configure the RadTreeList validation behavior of the control when editing/inserting records:


>caption  

| Property | Description |
| ------ | ------ |
| __CommandsToValidate__ |An array of strings used to list the names of the commands which will trigger validation in RadTreeList.|
| __EnableValidation__ |A boolean value idicating whether the treelist values should be validated.|
| __ValidationGroup__ |A property used to set a ValidationGroup for the treelist control, so that it is validated only along a certain group of controls, having the same ValidationGroup name.|

## Server-side Collections

__RadTreeList__ has the following server-side collections:


>caption  

| Collection | Return type | Description |
| ------ | ------ | ------ |
| __AutoGeneratedColumns__ |TreeListColumn[]|A collection of all the auto-generated columns inside RadTreeList.|
| __ClientDataKeyValues__ |TreeListDataKeyArray|A collection containing the values of the fields specified as ClientDataKeyNames in the RadTreeListdeclaration.|
| __Columns__ |TreeListColumnsCollection|A collection of all the TreeListColumns manually added to the control instance.|
| __DataKeyValues__ |TreeListDataKeyArray|A collection containing the values of the fields specified as DataKeyNames in the RadTreeListdeclaration.|
| __EditIndexes__ |TreeListEditIndexesCollection|A collection containing the indexes of all items which are currently in edit mode.|
| __EditItems__ |TreeListEditItemCollection|A collection of all currently edited items.|
| __ExpandedIndexes__ |TreeListExpandedIndexesCollection|A collection containing the indexes of all rendered items which are currently expanded.|
| __InsertIndexes__ |TreeListEditIndexesCollection|Returns an array containing the indexes of all items which are currently inserted.|
| __InsertItems__ |TreeListEditItemCollection|Returns a collection of all currently inserted items.|
| __Items__ |TreeListDataItemCollection|A collection of all currently rendered TreeListDataItem objects.|
| __ParentDataKeyValues__ |TreeListDataKeyArray|A collection containing the values of the fields specified as ParentDataKeyNames in the RadTreeListdeclaration.|
| __SelectedIndexes__ |TreeListDataItemCollection (read-only)|A collection containing the indexes of all the selected items in the RadTreeList.|
| __SelectedItems__ |TreeListDataItemCollection (read-only)|A collection containing all TreeListDataItems currently selected.|
| __SortExpressions__ |TreeListSortExpressionCollection|A collection of the sort expressions generated for the RadTreeList.|
| __RenderColumns__ |TreeListColumn[]|A collection of all the TreeListColumns which will be rendered in the control (including auto-generated ones).|

## Server-side Methods

__RadTreeList__ provides the following server-side methods:


>caption  

| Method | Description |
| ------ | ------ |
| __ApplyRecursiveSelection(TreeListDataItem item, bool selected[optional])__ |Recursively selects or deselects all child items of a RadTreeLIst item specified by its hierarchical index. Updates the selected state of all the parent items of the specified item to reflect the recursive selection.|
| __ClearSelectedItems()__ |Removes all selected items that belongs to RadTreeList instance.|
| __CollapseAllItems()__ |Collapses all RadTreeList items.|
| __ExpandAllItems()__ |Expands all RadTreeList items.|
| __ExpandItemToLevel(TreeListDataItem item, int level)__ |Expands the specified TreeListDataItem to the specified level.|
| __ExpandToLevel(int level)__ |Expands all RadTreeList items to the specified level.|
| __ExtractValuesFromItem(IDictionary newValues, TreeListEditableItem dataItem, bool includePrimaryKey)__ |Fills an IDictionary object with the values of a TreeListEditableItem.|
| __GetItems(TreeListItem Type[])__ |Returns a collection of TreeListItems objects with the specified type.|
| __InsertChildItem(TreeListDataItem parentItem)__ |Inserts a new child item for the TreeListDataItem passed.|
| __InsertItem()__ |Inserts a new root item in RadTreeList.|
| __PerformDelete(TreeListDataItem editedItem)__ |Performs asynchronous delete operation, using the DataSourceControl API, then Rebinds.When the asynchronous operation calls back, RadTreeList will fire ItemDeleted event.|
| __PerformInsert(TreeListEditableItem insertItem)__ |Performs asynchronous insert operation, using the DataSourceControl API, then Rebinds.When the asynchronous operation calls back, RadTreeList will fire ItemInserted event.|
| __PerformUpdate(TreeListEditableItem editedItem)__ |Performs asynchronous update operation, using the DataSource control API and the Rebind method. When the asynchronous operation calls back, RadTreeList will fire ItemUpdated event.|

## Server-side Events

__RadTreeList__ provides the following server-side events:


>caption  

| Events | Description |
| ------ | ------ |
| __AutoGeneratedColumnCreated__ |Fires when auto generated column is created.|
| __CancelCommand__ |Fires when an insert or edit action is cancelled.|
| __ChildItemsDataBind__ |Fires when load-on-demand is enabled and a TreeListDataItem is being expanded.|
| __CreateColumnEditor__ |Fires when when a column editor needs to be initialized.|
| __CreateCustomColumn__ |Fires when a custom column is recreated on postback.|
| __DeleteCommand__ |Fires when a delete command is triggered.|
| __EditCommand__ |Fires when an edit command has been triggered.|
| __Exporting__ |Fires when the export output is already generated and ready for adding to the response.|
| __InsertCommand__ |Fires when a PerformInsert command is triggered.|
| __ItemCreated__ |Fires when the RadTreeList item is created. In this event you could add controls in the specific TreeListItem and modify the properties to already existing controls.|
| __ItemCommand__ |Fires when any command button is clicked in the RadTreeList control. All bubbled events from the treelist items fire the ItemCommand event.|
| __ItemDataBound__ |Fires after an item is databound to the RadTreeList control. In this event you could manipulate the newly added (in the ItemCreated event) controls' properties for instance.|
| __ItemDeleted__ |Fires when an item has been deleted from RadTreeList with automatic datasource operations enabled.|
| __ItemDrop__ |Fires when a TreeListDataItem is dragged and dropped over HTML element.|
| __ItemDrop__ |Fires when a TreeListDataItem is dragged and dropped over HTML element.|
| __ItemInserted__ |Fires when an item has been inserted in RadTreeList with automatic datasource operations enabled.|
| __ItemInserted__ |Fires when an item has been updated in RadTreeList with automatic datasource operations enabled.|
| __NeedDataSource__ |Fires when the RadTreeList is about to be bound and the data source must be assigned.|
| __PageIndexChanged__ |Fires when a paging action is performed.|
| __PageSizeChanged__ |Fires when page size is changed.|
| __SelectedIndexChanged__ |Fired for both client and server-side item selection on the first post-back following the selection/deselection ofthe item/items. For example, if you have client-side item selection and you select one or more tree list item,the event will be fired the next time you make a post-back to the server.In the case of server-side item selection, the event will be fired immediately after the selection/deselection of a certain item since that operation automatically triggers a post-back to the server.|
| __PdfExporting__ |Fires when the HTML output of the RadTreeList control is generated and before it is parsedinto binary. It allows you to manipulate the treelist output when exporting, as in the Export eventthe pdf is already generated and cannot be modified.|
| __Sorting__ |Fires when a sort operation is requested and before the RadTreeList control handles the sort operation.|
| __UpdateCommand__ |Fires when an Update command is triggered.|
