---
title: Telerik.Web.UI.SearchContextItemCollection
page_title: Client-side API Reference
description: Telerik.Web.UI.SearchContextItemCollection
slug: Telerik.Web.UI.SearchContextItemCollection
---

# Telerik.Web.UI.SearchContextItemCollection

## Inheritance Hierarchy

* *[Telerik.Web.UI.SearchContextItemCollection]({%slug Telerik.Web.UI.SearchContextItemCollection%})*

## Methods

### indexOf

Gets the index of an item.

#### Parameters

##### button `Telerik.Web.UI.SearchContextItem`

The item to get the index of

#### Returns

`Number` int

### toArray

Returns the collection represented as array

#### Parameters

#### Returns

`Telerik.Web.UI.SearchContextItem[]` 

### forEach

Iterates through the Items collection

#### Parameters

##### lambda `Function`

The function to execute on each iteration

#### Returns

`None` 

### remove

Removes an item from the Items collection

#### Parameters

##### button `Telerik.Web.UI.SearchContextItem`

The item to remove

#### Returns

`None` 

### insert

Inserts an item into the Items collection at the position specified by the first (index) parameter

#### Parameters

##### index `Number`

The index to insert at

##### button `Telerik.Web.UI.SearchContextItem`

The item to insert

#### Returns

`None` 

### removeAt

Removes the item at the specified index.

#### Parameters

##### index `Number`

The index to remove at

#### Returns

`None` 

### add

Appends an item to the Items collection

#### Parameters

##### button `Telerik.Web.UI.SearchContextItem`

The item to insert

#### Returns

`None` 

### clear

Clears the Items collection of RadSearchBox's SearchContext

#### Parameters

#### Returns

`None` 

### get_count

Returns the number of items in the Items collection.

#### Parameters

#### Returns

`Number` The number of the buttons

### getItem

Gets the item from the Items collection residing at the index specified by the parameter.

#### Parameters

##### index `Number`

The index of the button that should be returned

#### Returns

`Telerik.Web.UI.SearchContextItem` Returns SearchContextItem

