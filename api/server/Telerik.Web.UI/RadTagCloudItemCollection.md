---
title: Telerik.Web.UI.RadTagCloudItemCollection
page_title: Telerik.Web.UI.RadTagCloudItemCollection
description: Telerik.Web.UI.RadTagCloudItemCollection
---

# Telerik.Web.UI.RadTagCloudItemCollection

A collection of Telerik.Web.UI.RadTagCloudItem RadTagCloudItemobjects in a
                Telerik.Web.UI.RadTagCloud RadTagCloudcontrol.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.UI.RadTagCloudItemCollection

## Properties

###  ItemContainer `RadTagCloud`

The parent TagCloud control, which the items collection belongs to.

###  List `IList`

Gets an IList object of the Items collection of the TagCloud.

## Methods

###  Add

Adds an item to the TagCloud Items collection. 
            If the Weight of the item is smaller than the MinimalWeightAllowed,
            the item will not be added to the collection.

#### Parameters

#### item `Telerik.Web.UI.RadTagCloudItem`

The TagCloud item to add.

#### Returns

`System.Void` 

###  Contains

Checks whether a TagCloud item is present in the collection.

#### Parameters

#### item `Telerik.Web.UI.RadTagCloudItem`

The TagCloud item to check.

#### Returns

`System.Boolean` Bool value indicating whether the TagCloud item is present in the Items collection.

###  CopyTo

Copies the TagCloud Items collection to an array, starting at a particular index.

#### Parameters

#### array `Telerik.Web.UI.RadTagCloudItem`

The one-dimensional, zero-based index destination array, to which the elements of the Items collection will be copied.

#### index `System.Int32`

The zero-based index of the array, at which the copying begins.

#### Returns

`System.Void` 

###  IndexOf

Gets the index of the TagCloud item in the Items collection

#### Parameters

#### item `Telerik.Web.UI.RadTagCloudItem`

The TagCloud item the index of.

#### Returns

`System.Int32` The index of the TagCloud item.

###  Insert

Inserts a TagCloud item at the specified index.

#### Parameters

#### index `System.Int32`

The index (position), where the TagCloud item will be inserted.

#### item `Telerik.Web.UI.RadTagCloudItem`

The TagCloud item to insert.

#### Returns

`System.Void` 

###  Remove

Removes the passed TagCloud item from the Items collection.

#### Parameters

#### item `Telerik.Web.UI.RadTagCloudItem`

The TagCloud item to remove.

#### Returns

`System.Void` 

###  RemoveAt

Removes a TagCloud item from the Items collection, at the specified index.

#### Parameters

#### index `System.Int32`

The index of the TagCloud item.

#### Returns

`System.Void` 

###  Sort

Sorts the current list of TagCloud items. The collection itself is not modified.
            If any of the MinimalWeightAllowed, MaxNumberOfItems and TakeTopWeightedItems
            properties are set, the collection will be filtered too.

#### Returns

`Telerik.Web.UI.RadTagCloudItemCollection` The collection of sorted items.

###  Filter

Filters the current collection (the collection itself is not modified) of items based on the values of 
            MinimalWeightAllowed, MaxNumberOfItems and TakeTopWeightedItems properties, 
            and returns the filtered collection of TagCloud items.

#### Returns

`Telerik.Web.UI.RadTagCloudItemCollection` The collection of filtered items.

###  Min

Finds the TagCloud item with minimal weight.

#### Returns

`Telerik.Web.UI.RadTagCloudItem` 

###  Max

Finds the TagCloud item with maximal weight.

#### Returns

`Telerik.Web.UI.RadTagCloudItem` 

###  FindMinMax

Finds the TagCloud item with maximal/minimal weight.

#### Returns

`System.Void` 

###  SortByWeight

Sort the items using the ListOfSortedItems

#### Returns

`System.Void` 

###  FilterItems

Filters the list of items based on a maximum number of items allowed in the tag cloud.

#### Parameters

#### takeTopWeightedItems `System.Boolean`

Should the items with the highest weight be taken.

#### filteredItems `Telerik.Web.UI.RadTagCloudItemCollection`

The list of items to filter.

#### Returns

`Telerik.Web.UI.RadTagCloudItemCollection` Returns the filtered list of TagCloud items

