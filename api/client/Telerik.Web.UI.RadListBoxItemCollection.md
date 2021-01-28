---
title: Telerik.Web.UI.RadListBoxItemCollection
description: Telerik.Web.UI.RadListBoxItemCollection
slug: Telerik.Web.UI.RadListBoxItemCollection
---

# Telerik.Web.UI.RadListBoxItemCollection : Telerik.Web.UI.ControlItemCollection<Telerik.Web.UI.RadListBoxItem>

## Inheritance Hierarchy

* [Telerik.Web.UI.ControlItemCollection]({%slug Telerik.Web.UI.ControlItemCollection%})
* *[Telerik.Web.UI.RadListBoxItemCollection]({%slug Telerik.Web.UI.RadListBoxItemCollection%})*


## Methods

### add

Adds an item to the Items collection. 

#### Parameters

##### item `Telerik.Web.UI.RadListBoxItem`

The item that will ba added.

#### Returns

`None` 

### clear

Clears the Items collection of RadListBox

#### Parameters

#### Returns

`None` 

### find

Searches the collection against a match passed as a parameter

#### Parameters

##### match `Function`

 Predicate that that all items in the collection are checked against. The first match is returned.

#### Returns

`None` 

### forEach

Iterates through the Items collection

#### Parameters

##### lambda `Function`

The function to execute on each iteration

#### Returns

`None` 

### get_count

Returns the number of items in the Items collection.

#### Parameters

#### Returns

`Number` The number of the items

### get_last

Gets the last N items where N is passed as a parameter

#### Parameters

##### value `Number`

Indicates the last N items that should be returned 

#### Returns

`None` 

### getItem

Gets the item from the Items collection residing at the index specified by the parameter.

#### Parameters

##### index `Number`

The index of the Item that should be returned.

#### Returns

`Telerik.Web.UI.RadListBoxItem` ListBoxItem

### removeAt

Removes the item at the specified index.

#### Parameters

##### index `Number`

 The index to remove at

#### Returns

`None` 


