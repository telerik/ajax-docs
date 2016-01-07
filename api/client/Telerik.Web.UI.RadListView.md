---
title: Telerik.Web.UI.RadListView
page_title: Client-side API Reference
description: Telerik.Web.UI.RadListView
slug: Telerik.Web.UI.RadListView
---

# Telerik.Web.UI.RadListView : Telerik.Web.UI.RadWebControl

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadListView]({%slug Telerik.Web.UI.RadListView%})*

## Methods

### set_allowPaging

Sets a value indicating whether paging is allowed in RadListView

#### Parameters

##### value `Boolean`

A boolean value indicating whether paging is enabled

#### Returns

`None`

### get_isDataBoundOnClient

Indicates whether RadListView is setup for client-side databinding

#### Parameters

#### Returns

`Boolean`

### rebind

Rebinds RadListView to its given data source

#### Parameters

#### Returns

`None`

### page

Navigates RadListView to the page specified as an argument. If server-side databinding is used, RadDataPager should be used for page navigation

#### Parameters

##### command `String`

The actual page to which the user will be navigated. Possible values are

##### doNotFireCommand `Boolean`

Optional

#### Returns

`None`

### editItem

Switches RadListView item into edit mode (with index specified as an argument)

#### Parameters

##### itemIndex `Number`

Index of the item that will be edited

#### Returns

`None`

### clearSort

Clears the sorting of the specified field or all the sort expressions if no field is specified.

#### Parameters

##### field `String`

Optional

##### doNotFireCommand `Boolean`

Optional

#### Returns

`None`

### get_allowNaturalSort

Gets a value indicating whether natural sort is enabled in RadListView

#### Parameters

#### Returns

`Boolean`

### set_dataSource

Sets the data source of RadListView

#### Parameters

##### value `Array`

A javascript array of objects

#### Returns

`None`

### deselectItem

Deselects an item in RadListViews

#### Parameters

##### index `Number`

An integer index of the item to deselect.

##### doNotRebind `Boolean`

Optional

#### Returns

`None`

### cancelInsert

Cancels insert operation and hides RadListView's insertion form

#### Parameters

#### Returns

`None`

### appendData

Appends additional data to the current data source and creates new items for the new data. Existing items are not modified.

#### Parameters

##### data `Array`

A javascript array of objects to append

#### Returns

`None`

### showInsertItem

Displays RadListView's insertion form

#### Parameters

##### insertItemPosition `Number`

Optional

#### Returns

`None`

### get_virtualItemCount

Gets the total number of items RadListView can bind to. This value is used for page calculations.

#### Parameters

#### Returns

`Number`

### rebindItem

Rebinds a single item specified by its index

#### Parameters

##### index `Number`

The index of the item to rebind

#### Returns

`None`

### get_pageSize

Gets the page size in RadListView

#### Parameters

#### Returns

`Number`

### fireCommand

Fires command with command name and command argument specified as arguments

#### Parameters

##### commandName `String`

The name of the command that will be executed. Possible values are listed here

##### commandArgument `String`

The command argument with which the command will be executed. Possible values are listed here

#### Returns

`None`

### set_pageSize

Sets the page size in RadListView

#### Parameters

##### value `Number`

An integer value greater than 0

#### Returns

`None`

### get_currentPageIndex

Gets the current page index in case paging for RadListView is enabled

#### Parameters

#### Returns

`Number`

### get_uniqueID

Gets the unique id of RadListView's container

#### Parameters

#### Returns

`String`

### clearCache

Clears the cached data when caching is enabled with client-side databinding in RadListView

#### Parameters

##### forCurrentState `Boolean`

Optional

#### Returns

`None`

### get_pageCount

Gets the page count in RadListView

#### Parameters

#### Returns

`Number`

### set_virtualItemCount

Sets the virtual item count in RadListView

#### Parameters

##### value `Number`

An integer value greater than or equal to 0

#### Returns

`None`

### deleteItem

Deletes RadListView item with index specified as an argument

#### Parameters

##### itemIndex `Number`

Index of the item that will be deleted

#### Returns

`None`

### get_isItemInserted

Gets a value indicating whether the insert form is currently shown

#### Parameters

#### Returns

`Boolean`

### clearFilter

Clears the filter expressions for the specified field. If no field is specified, clears all filter expression in RadListView

#### Parameters

##### field `String`

Optional

##### doNotFireCommand `Boolean`

Optional

#### Returns

`None`

### get_allowMultiItemSelection

Gets a value indicating whether multi-item selection is enabled in RadListView

#### Parameters

#### Returns

`Boolean`

### cancelUpdate

Cancels RadListView item update (with index specified as an argument)

#### Parameters

##### itemIndex `Number`

Index of the edited item for which update operation will be aborted

#### Returns

`None`

### selectItem

Selects an item in RadListView

#### Parameters

##### index `Number`

An integer index of the item to select.

##### doNotRebind `Boolean`

Optional

#### Returns

`None`

### get_sortExpressions

Retrieves the sort expressions collection in RadListView

#### Parameters

#### Returns

`Telerik.Web.UI.RadListViewSortExpressions`

### get_dataSource

Gets the data source javascript array of RadListView

#### Parameters

#### Returns

`Array`

### set_currentPageIndex

Sets the current page index in RadListView

#### Parameters

##### value `Number`

An integer value greater than or equal to 0

#### Returns

`None`

### updateItem

Updates RadListView item (with index specified as an argument)

#### Parameters

##### itemIndex `Number`

Index of the edited item that will be updated

#### Returns

`None`

### selectAllItems

Selects all items in RadListView

#### Parameters

##### doNotRebind `Boolean`

Optional

#### Returns

`None`

### get_allowPaging

Specifies whether paging is enabled in RadListView

#### Parameters

#### Returns

`Boolean`

### sort

Sorts the data in RadListView

#### Parameters

##### field `String`

The field name to sort by. If no sort order is specified

##### order `String`

Optional

##### doNotFireCommand `Boolean`

Optional

#### Returns

`None`

### clearSelectedItems

Clears all selected items in RadListView

#### Parameters

##### doNotRebind `Boolean`

Optional

#### Returns

`None`

### filter

Applies a filter to the data in RadListView

#### Parameters

##### field `String`

The field name to filter.

##### filterFunction `String`

The filter function to use. Accepted values are specified by the Telerik.Web.UI.RadListViewFilterFunction object.

##### value `String`

The filter value to use for the specified field.

##### doNotFireCommand `Boolean`

Optional

#### Returns

`None`

### get_skin

Gets the skin set to the RadListView's control

#### Parameters

#### Returns

`String` Gets the skin applied in RadListView

### get_clientDataKeyValue

Gets a two-dimensional array of client key values. Item indices and names stored in the ClientDataKeyNames collection on the server can be used as array indices. Example: get_clientDataKeyValue()[0]["CustomerID"] - returns the CustomerID clinet key value for the first RadListView item.

#### Parameters

#### Returns

`Array`

### dataBind

Databinds the listview when the client-side data source is set

#### Parameters

#### Returns

`None`

### get_isDataBinding

Indicates whether RadListView is currently databinding on the client-side

#### Parameters

#### Returns

`Boolean`

### get_isInitializedOnClient

Indicates whether RadListView is initialized entirely on the client-side with no server-side control

#### Parameters

#### Returns

`Boolean`

### get_clientSettings

Gets the current client settings applied for RadListView

#### Parameters

#### Returns

`Object`

### get_selectedIndexes

Gets the selected indexes array in RadListView. The array should contain the numeric indexes of selected items.

#### Parameters

#### Returns

`Array`

### set_selectedIndexes

Sets the array containing the selected indexes

#### Parameters

##### value `Array`

A javascript array of integer values representing the selected indexes in RadListView

#### Returns

`None`

### toggleSelection

Toggles between the selected and deselected state of an item in RadListViews

#### Parameters

##### index `Number`

An integer index of the item to toggle.

##### doNotRebind `Boolean`

Optional

#### Returns

`None`

### get_filterExpressions

Retrieves the filter expressions collection in RadListView

#### Parameters

#### Returns

`Telerik.Web.UI.RadListViewFilterExpressions`

### insertItem

Inserts a new item in RadListView with values taken from its insertion form

#### Parameters

#### Returns

`None`

## Events

### TemplateDataBound

Fired when a client-side template is databound

#### Event Data

##### sender `Telerik.Web.UI.RadListView`

The RadListView instance raised the event.

##### args `ListViewTemplateDataBoundEventArgs`

The arguments of the  event.

### DataBinding

This client-side event is fired before RadListView databinds.

#### Event Data

##### sender `Telerik.Web.UI.RadListView`

The RadListView instance raised the event.

##### args `ListViewDataBindingEventArgs`

The arguments of the  event.

### ItemDeselecting

The event is fired when an item is about to be deselected.

#### Event Data

##### sender `Telerik.Web.UI.RadListView`

The RadListView instance raised the event.

##### args `ListViewItemDeselectingEventArgs`

The arguments of the  event.

### DataBindingFailed

This client-side event is fired when RadListView fails to databind automatically to a web service.

#### Event Data

##### sender `Telerik.Web.UI.RadListView`

The RadListView instance raised the event.

##### args `ListViewDataBindingFailedEventArgs`

The arguments of the  event.

### DataBound

Fired after the RadListView is bound on the client.

#### Event Data

##### sender `Telerik.Web.UI.RadListView`

The RadListView instance raised the event.

##### args `Sys.EventArgs`

The arguments of the  event.

### ListViewDestroying

Fired when the RadListView instance is about to be disposed.

#### Event Data

##### sender `Telerik.Web.UI.RadListView`

The RadListView instance raised the event.

##### args `Sys.EventArgs`

The arguments of the  event.

### Command

Fired when a command is about to be executed.

#### Event Data

##### sender `Telerik.Web.UI.RadListView`

The RadListView instance raised the event.

##### args `ListViewCommandEventArgs`

The arguments of the  event.

### ItemDropped

Fired when the dragged item is dropped.

#### Event Data

##### sender `Telerik.Web.UI.RadListView`

The RadListView instance raised the event.

##### args `ListViewItemDroppedEventArgs`

The arguments of the  event.

### ItemDeselected

Fired after an item is deselected.

#### Event Data

##### sender `Telerik.Web.UI.RadListView`

The RadListView instance raised the event.

##### args `ListViewItemDeselectedEventArgs`

The arguments of the  event.

### ItemDragging

Fired when an item is dragged.

#### Event Data

##### sender `Telerik.Web.UI.RadListView`

The RadListView instance raised the event.

##### args `ListViewItemDraggingEventArgs`

The arguments of the  event.

### ListViewCreating

Fired before the RadListView instance is created.

#### Event Data

##### sender `Telerik.Web.UI.RadListView`

The RadListView instance raised the event.

##### args `Sys.EventArgs`

The arguments of the  event.

### ItemDragStarted

Raised when the drag is started

#### Event Data

##### sender `Telerik.Web.UI.RadListView`

The RadListView instance raised the event.

##### args `ListViewItemDragStartedEventArgs`

The arguments of the  event.

### ItemSelecting

Firen when an item is about to be selected.

#### Event Data

##### sender `Telerik.Web.UI.RadListView`

The RadListView instance raised the event.

##### args `ListViewItemSelectingEventArgs`

The arguments of the  event.

### ItemSelected

Firen when an item is selected.

#### Event Data

##### sender `Telerik.Web.UI.RadListView`

The RadListView instance raised the event.

##### args `ListViewItemSelectedEventArgs`

The arguments of the  event.

### ListViewCreated

Fired after the RadListView instance is created.

#### Event Data

##### sender `Telerik.Web.UI.RadListView`

The RadListView instance raised the event.

##### args `Sys.EventArgs`

The arguments of the  event.

### ItemDropping

Fired when the dragged item is being dropped over an element.

#### Event Data

##### sender `Telerik.Web.UI.RadListView`

The RadListView instance raised the event.

##### args `ListViewItemDroppingEventArgs`

The arguments of the  event.

### TemplateCreated

Fired when a template is created.

#### Event Data

##### sender `Telerik.Web.UI.RadListView`

The RadListView instance raised the event.

##### args `ListViewTemplateCreatedEventArgs`

The arguments of the  event.

### DataSourceResolved

Fired when automatic data-binding to a web service is used and the data source is resolved.

#### Event Data

##### sender `Telerik.Web.UI.RadListView`

The RadListView instance raised the event.

##### args `ListViewDataSourceResolvedEventArgs`

The arguments of the  event.
