---
title: Telerik.Web.UI.GridDataItem
title_prefix: Client-side API Reference
description: Telerik.Web.UI.GridDataItem
slug: Telerik.Web.UI.GridDataItem
---

# Telerik.Web.UI.GridDataItem : Sys.UI.Control 

## Inheritance Hierarchy

* Sys.UI.Control
* *[Telerik.Web.UI.GridDataItem]({%slug Telerik.Web.UI.GridDataItem%})*


## Methods

### findControl

This method takes control id for an argument and returns the corresponding client object of RadControl or ASP.NET AJAX control inside the grid row. Useful to reference client objects of controls inside a grid item cell on the client.

#### Parameters

##### id `String`

#### Returns

`Sys.UI.Control` 

### findElement

This method takes control id for an argument and returns the corresponding DOM element of html or rendered server control inside the grid row. Useful to reference html elements of controls inside a grid item cell on the client.

#### Parameters

##### id `String`

#### Returns

`Object` 

### get_cell

Returns a specific cell from a dataItem, given the unique name of a column

#### Parameters

##### columnUniqueName `String`

#### Returns

`Object` 

### get_dataItem

This method provides reference to the DataItem object (data container). Useful to obtain data from a particular row cell passing the unique name of the column as an indexer.

#### Parameters

#### Returns

`Object` 

### get_display

Returns a value of type Boolean and specifies if the row is visible.

#### Parameters

#### Returns

`Boolean` 

### get_editFormItem

HTML element

#### Parameters

#### Returns

`None` 

### get_element

HTML element

#### Parameters

#### Returns

`Element` 

### get_expanded

Returns a Boolean value, indicating whether the element is expanded or not.

#### Parameters

#### Returns

`Boolean` 

### get_id

Returns a String, representing the client_id for the element.

#### Parameters

#### Returns

`String` 

### get_isInEditMode

Boolean

#### Parameters

#### Returns

`None` 

### get_itemIndexHierarchical

Returns the hierarchical item index of the GridDataItem object.

#### Parameters

#### Returns

`Object` 

### get_nestedViews

Returns an array, containing the nestedViews of an element. Meaningful when we have a hierarchical structure.

#### Parameters

#### Returns

`Array` 

### get_owner

Returns the parent element of the GridColumn, the masterTableView instance

#### Parameters

#### Returns

`Object` 

### get_selectable

Gets a Boolean value, indicating whether the dataItem is selectable or not.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### get_selected

Returns a Boolean value, indicating whether the dataItem is selected or not.

#### Parameters

#### Returns

`Boolean` 

### getDataKeyValue

Returns the dataKeyValue, associated with the dataItem.

#### Parameters

##### columnName `String`

#### Returns

`String` 

### set_display

Sets a Boolean value, indicating whether the dataItem is displayed or not.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_expanded

Sets a Boolean value, indicating whether the dataItem is expanded or not.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_selected

Sets a Boolean value, indicating whether the dataItem is selected or not.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_visible

The method toggles the visibility of an item on and off. It takes a boolean value indicating whether the item will be visible or not..

#### Parameters

##### value `Boolean`

#### Returns

`None` 


