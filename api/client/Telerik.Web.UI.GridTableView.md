---
title: Telerik.Web.UI.GridTableView
description: Telerik.Web.UI.GridTableView
slug: Telerik.Web.UI.GridTableView
---

# Telerik.Web.UI.GridTableView : Sys.UI.Control 

## Inheritance Hierarchy

* Sys.UI.Control
* *[Telerik.Web.UI.GridTableView]({%slug Telerik.Web.UI.GridTableView%})*


## Methods

### cancelAll

Cancels the edit mode for all grid items that are switched in edit mode prior to the method call.

#### Parameters

#### Returns

`None` 

### cancelInsert

Method which cancels the insert action and switches the grid in regular mode.

#### Parameters

#### Returns

`None` 

### cancelUpdate

Method which cancels the update for the edited table row passed as an argument or the row corresponding to the index passed as an argument. If you have several items switched in edit mode, you can cancel the update for all of them with subsequent calls to this method.

#### Parameters

##### index `Number`

#### Returns

`None` 

### clearSelectedItems

Method which clears the selected items for the respective GridTableView client object. This method will clear the selected items from the table's child tables (meaningful in hierarchical grid only).

#### Parameters

#### Returns

`None` 

### collapseItem

Explicitly collapses an item.

#### Parameters

##### index `Number`

#### Returns

`None` 

### dataBind

Method which will force client rebind of the grid and will refresh its state when a new data source is assigned using the set_dataSource() method. Meaningful in this scenario only.

#### Parameters

#### Returns

`None` 

### deleteItem

Method which deletes the table row passed as an argument or the row corresponding to the index passed as an argument.

#### Parameters

##### index `Number`

#### Returns

`None` 

### deleteSelectedItems

Method which deletes all selected items in the grid.

#### Parameters

#### Returns

`None` 

### deselectItem

Deselects the table row passed as an argument or the row corresponding to the index passed as an argument.

#### Parameters

##### rowElement `Object`

#### Returns

`None` 

### editAllItems

Method which switches all GridDataItems in edit mode.

#### Parameters

#### Returns

`None` 

### editItem

Method which switches the table row passed as an argument or the row corresponding to the index passed as an argument in edit mode. If you set AllowMultiRowEdit to true, you can switch multiple grid items in edit mode with subsequent calls to this method.

#### Parameters

##### index `Number`

#### Returns

`None` 

### editSelectedItems

Method which switches all selected items in the grid in edit mode.

#### Parameters

#### Returns

`None` 

### expandItem

Explicitly expands an item.

#### Parameters

##### index `Number`

#### Returns

`None` 

### exportToCsv

Exports the grid to CSV format (comma-separated values).

#### Parameters

#### Returns

`None` 

### exportToExcel

Exports the grid to MS Excel 2003 or later

#### Parameters

#### Returns

`None` 

### exportToPdf

Exports the grid to PDF format.

#### Parameters

#### Returns

`None` 

### exportToWord

Exports the grid to a Word document

#### Parameters

#### Returns

`None` 

### extractKeysFromItem

Method which extracts the key values (added to the ClientDataKeyNames collection of the master/detail table) from the edited table row passed as an argument or the row corresponding to the index passed as an argument. The values will be fetched purely client-side and the data will be returned in an object array which can be traversed to get each individual data entry.

#### Parameters

##### index `Number`

#### Returns

`Object` 

### extractOldValuesFromItem

Method which extracts the old values from the edited table row passed as an argument or the row corresponding to the index passed as an argument. The values will be fetched purely client-side and the data will be returned in an object array which can be traversed to get each individual data entry.

#### Parameters

##### index `Number`

#### Returns

`Object` 

### extractValuesFromItem

Method which extracts the new values from the edited table row passed as an argument or the row corresponding to the index passed as an argument. The values will be fetched purely client-side and the data will be returned in an object array which can be traversed to get each individual data entry.

#### Parameters

##### index `Number`

#### Returns

`Object` 

### filter

Method which triggers filter command for the column with UniqueName (set on the server) passed as a first argument. The second argument should be value to compare (or two values separated by [space] for between filter pattern) or an empty string for EqualTo, NoFilter, IsNull, etc. The last third argument has to be a value from the Telerik.Web.UI.GridFilterFunction enumeration which internally recognizes the filter criteria that should be applied. All server-side filtering capabilities of RadGrid are applicable here as well. See the topic describing the fireCommand method for further details.

#### Parameters

##### colUniqueName `String`

##### valueToCompare `String`

##### filterFunction `String`

##### shouldUpdateFilterControl `Boolean`

#### Returns

`None` 

### fireCommand

Method which triggers specific command for the grid when executed. The method is called for the GridTableView client instance and its arguments depend on the command which will be processed.

#### Parameters

##### comandName `String`

##### commandArgument `String`

#### Returns

`None` 

### get_allowMultiColumnSorting

Returns a boolean value indicating whether multi-column sorting is enabled for the grid instance

#### Parameters

#### Returns

`Boolean` 

### get_clientDataKeyNames

Returns a one-dimensional array which holds the key fields set through the ClientDataKeyNames property of GridTableView on the server

#### Parameters

#### Returns

`Array` 

### get_columns

Returns a collection of c

#### Parameters

#### Returns

`Array` 

### get_currentPageIndex

Returns the current page index

#### Parameters

#### Returns

`Number` 

### get_dataItems

Retuens a collection of all data items for the respective GridTableView instance.

#### Parameters

#### Returns

`Array` 

### get_editItems

Array

#### Parameters

#### Returns

`None` 

### get_element

Returns HTML table which represents the respective table for the GridTableView object rendered on the client.

#### Parameters

#### Returns

`Element` 

### get_filterExpressions

A collection of Telerik.Web.UI.GridFilterExpression objects. Represents the filter expressions applied for the grid instance. The toString() javascript method executed over this collection will return SQL string representation of all filter expressions concatenated by "AND" reserved words. While filter expressions toString() method will create SQL syntax representing current grid filtering, you can also take advantage of the toDynamicLinq() method which will create LINQ expression that can be used directly with Dynamic LINQ library. Furthermore, you can also utilize the toList() method in order to pass an array of items (representing the filter expression elements) to the server and operate with them using GridFilterExpression server object.

#### Parameters

#### Returns

`Telerik.Web.UI.GridFilterExpressions` 

### get_insertItem

HTML element

#### Parameters

#### Returns

`None` 

### get_isFilterItemVisible

Returns a Boolean value, specifying whether the filtering item is visible

#### Parameters

#### Returns

`Boolean` 

### get_isItemInserted

Returns a Boolean property. Gets a value indicating if the GridTableView is currently in insert mode.

#### Parameters

#### Returns

`Boolean` 

### get_name

Returns a string which represents the Name property (set on the server) for the corresponding GridTableView client object. Can be used to identify table in grid hierarchy client-side

#### Parameters

#### Returns

`String` 

### get_owner

Returns a property which is of type RadGrid and present the parent of the current object.

#### Parameters

#### Returns

`Object` 

### get_pageCount

Returns the page count for the respective GridTableView object, i.e. the number of pages

#### Parameters

#### Returns

`Number` 

### get_pageSize

Returns the page size for the respective GridTableView object

#### Parameters

#### Returns

`Number` 

### get_parentRow

If called from a nested GridTableView returns the parent item for the current nested hierarchical GridTableView; returns null if called from the MasterTableView.

#### Parameters

#### Returns

`Object` 

### get_parentView

If called from a nested GridTableView returns the parent GridTableView in the grid hierarchy; returns null if called from the MasterTableView.

#### Parameters

#### Returns

`Object` 

### get_selectedItems

Returns a collection of all selected items (of type GridDataItem) for the respective GridTableView instance. This collection will include the selected items from the table's child tables (meaningful in hierarchical grid only).

#### Parameters

#### Returns

`Array` 

### get_sortExpressions

A collection of Telerik.Web.UI.GridSortExpression objects. Represents the sort expressions applied for the grid instance. The toString() javascript method executed over this collection will return coma separated string of all expressions (in case of AllowMultiColumnSorting) or a single sort expression if multi-column sorting is disabled. You can also utilize the toList() method in order to pass an array of items (representing the sort expressions applied) to the server and operate with them using GridSortExpression server object. Each sort expression (of type Telerik.Web.UI.GridSortExpression) has fieldName and sortOrder properties which hold the DataField of the sorted column and the sort direction (Ascending, Descending or None). To retrieve the values from these properties use the get_fieldName() and get_sortOrder() properties of the corresponding GridSortExpression.

#### Parameters

#### Returns

`Telerik.Web.UI.GridSortExpressions` 

### get_tableFilterRow

Returns the table filter row element

#### Parameters

#### Returns

`Object` 

### get_virtualItemCount

Gets the virtual item count value for the respective GridTableView object. Applies to client-side RadGrid binding only.

#### Parameters

#### Returns

`Number` 

### getCellByColumnUniqueName

Returns a cell specified by a row and a column unique name.

#### Parameters

##### rowObject `Telerik.Web.UI.GridDataItem`

##### uniqueName `String`

#### Returns

`Object` 

### getColumnByUniqueName

Returns a column, specified by the argument of the function

#### Parameters

##### uniqueName `String`

#### Returns

`Telerik.Web.UI.GridColumn` 

### getColumnUniqueNameByCellIndex

Returns the unique name of the column by given header row and cell index passed as first and second arguments.

#### Parameters

##### rowEl `Object`

##### index `Number`

#### Returns

`Object` 

### getDataServiceQuery

The method will automatically send a result (holding all filter and sort expressions in appropriate format and will apply paging on server using skip and top) to the query method of the ADO.NET Data Service. The resulting value from the getDataServiceQuery(entityName) method will generate an expression that can be recognized by the corresponding data service.

#### Parameters

##### entityName `String`

#### Returns

`Object` 

### groupColumn

Method which groups the grid by the column with UniqueName specified as an argument. All server grouping capabilities of RadGrid are applicable for this case as well.

#### Parameters

##### colUniqueName `String`

#### Returns

`None` 

### hideColumn

Explicitly hides a column.

#### Parameters

##### index `Number`

#### Returns

`None` 

### hideFilterItem

Hides the filter item for the tableview instance

#### Parameters

#### Returns

`None` 

### hideItem

Explicitly hides an item.

#### Parameters

##### index `Number`

#### Returns

`None` 

### insertItem

Method which inserts new table row to the grid. The new data will be taken from the insertion form editors fields.

#### Parameters

#### Returns

`None` 

### moveColumnToLeft

Moves a column one position to the left.

#### Parameters

##### columnIndex `Number`

#### Returns

`None` 

### moveColumnToRight

Moves a column one position to the right.

#### Parameters

##### columnIndex `Number`

#### Returns

`None` 

### page

Method which triggers paging action with page command passed as an argument. All server-side paging capabilities of RadGrid are applicable here as well. See the topic describing the fireCommand method for further details.

#### Parameters

##### pageCommand `String`

#### Returns

`None`

### rebind

Forces a rebind of the grid and will refresh its state using internally the fireCommand() client-side method. Will invoke a postback for server-side bound grids.

#### Parameters

#### Returns

`None`

### reorderColumns

Reorders two columns, specified by the two parameters to the function

#### Parameters

##### columnName1 `String`

##### columnName2 `String`

#### Returns

`None` 

### resizeColumn

Resizes a row in the grid to a specified height

#### Parameters

##### columnIndex `Number`

##### columnWidth `Number`

#### Returns

`None` 

### resizeItem

Resizes a row in the grid to a specified height

#### Parameters

##### rowIndex `Number`

##### rowHeight `Object`

#### Returns

`None` 

### selectAllItems

Selects all items in the GridTableView for which the method is invoked.

#### Parameters

#### Returns

`None` 

### selectItem

Selects the table row passed as an argument or the row corresponding to the index passed as an argument.

#### Parameters

##### rowElement `Object`

#### Returns

`None` 

### set_allowMultiColumnSorting

Sets a boolean value indicating whether multi-column sorting is enabled for the grid instance

#### Parameters

##### size `Boolean`

#### Returns

`None` 

### set_currentPageIndex

Sets the current page index

#### Parameters

##### index `Number`

#### Returns

`None` 

### set_dataSource

Method which can be used to assign data source for the corresponding GridTableView client instance. This data source should be of JSON format which can be serialized by a web service or page method.

#### Parameters

##### dataSource `Object`

#### Returns

`None` 

### set_pageSize

Sets the page size for the respective GridTableView object

#### Parameters

##### size `Number`

#### Returns

`None` 

### set_virtualItemCount

Sets the virtual item count value for the respective GridTableView object. Applies to client-side RadGrid binding only.

#### Parameters

##### size `Number`

#### Returns

`None` 

### showColumn

Explicitly shows a column.

#### Parameters

##### index `Number`

#### Returns

`None` 

### showFilterItem

Shows the filter item for the tableview instance

#### Parameters

#### Returns

`None` 

### showInsertItem

Method which switches the grid in insert mode and displays the insertion form.

#### Parameters

#### Returns

`None` 

### showItem

Explicitly shows an item.

#### Parameters

##### index `Number`

#### Returns

`None` 

### sort

Method which triggers sort command for the column with DataField (set on the server) passed as an argument. If you set AllowMultiColumnSorting to true server-side, each subsequent call to this method will sort the corresponding column. All server-side sorting capabilities of RadGrid are applicable here as well.

#### Parameters

##### sortExpression `String`

#### Returns

`None` 

### swapColumns

Swaps the two columns, the names of which are passed as arguments to the method

#### Parameters

##### columnName1 `String`

##### columnName2 `String`

#### Returns

`None` 

### ungroupColumn

Method which performs ungroup action for the column with UniqueName specified as an argument.

#### Parameters

##### colUniqueName `String`

#### Returns

`None` 

### updateEditedItems

Method which updates all edited items in the grid. The new data will be taken from the edit form editors.

#### Parameters

#### Returns

`None` 

### updateItem

Method which updates the edited table row passed as an argument or the row corresponding to the index passed as an argument. If you have several items switched in edit mode, you can update all of them with subsequent calls to this method. The updated data will be taken from the edit form editors.

#### Parameters

##### index `Number`

#### Returns

`None` 


