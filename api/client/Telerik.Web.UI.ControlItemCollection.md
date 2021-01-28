---
title: Telerik.Web.UI.ControlItemCollection
description: Telerik.Web.UI.ControlItemCollection
generic: Telerik.Web.UI.ControlItem => TClass;
slug: Telerik.Web.UI.ControlItemCollection
---

# Telerik.Web.UI.ControlItemCollection<TClass extends Telerik.Web.UI.ControlItem>

## Inheritance Hierarchy

* *[Telerik.Web.UI.ControlItemCollection]({%slug Telerik.Web.UI.ControlItemCollection%})*


## Methods

### add

Adds ControlItem to the ControlItemCollection.

#### Parameters

##### item `Telerik.Web.UI.ControlItem`

The ControlItem to be added to the collection.

### clear

Clears the Items collection of ControlItemContainer.

#### Parameters

#### Returns

`None` 

### forEach

Iterates through the Items collection.

#### Parameters

##### lambda `Function`

The function to execute on each iteration.

#### Returns

`None` 

### get_count

Returns the number of items in the Items collection.

#### Parameters

#### Returns

`Number` The number of the items.

### getItem

Gets the item from the Items collection residing at the index specified by the parameter.

#### Parameters

##### index `Number`

The index of the item that should be returned.

#### Returns

`Telerik.Web.UI.ControlItem` Returns ControlItem.

### indexOf

Gets the index of an item.

#### Parameters

##### item `Telerik.Web.UI.ControlItem`

The item to get the index of.

#### Returns

`Number` int

### insert

Inserts an item into the Items collection at the position;specified by the first (index) parameter.

#### Parameters

##### index `Number`

The index to insert at.

##### item `Telerik.Web.UI.ControlItem`

The item to insert.

#### Returns

`None` 

### remove

Removes an item from the Items collection.

#### Parameters

##### item `Telerik.Web.UI.ControlItem`

 The item to remove.

#### Returns

`None` 

### removeAt

Removes the item at the specified index.

#### Parameters

##### index `Number`

 The index to remove at.

#### Returns

`None` 

### toArray

Returns the collection represented as array.

#### Parameters

#### Returns

`Telerik.Web.UI.ControlItem[]` 



