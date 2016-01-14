---
title: Telerik.Web.UI.RadRatingItemCollection
page_title: Telerik.Web.UI.RadRatingItemCollection
description: Telerik.Web.UI.RadRatingItemCollection
---

# Telerik.Web.UI.RadRatingItemCollection

A collection of Telerik.Web.UI.RadRatingItem RadRatingItemobjects in a
                Telerik.Web.UI.RadRating RadRatingcontrol.

#### Remarks
The RadRatingItemCollectionclass represents a collection of
                RadRatingItemobjects.
            	bullet Use the indexer to programmatically retrieve a
                        single RadRatingItem from the collection, using array notation.
                    Use the P:System.Web.UI.StateManagedCollection.Count Countproperty to determine the total
                        number of rating items in the collection.
                    Use the M:Telerik.Web.UI.RadRatingItemCollection.Add(System.String) Addmethod to add items in the collection.
                    Use the M:Telerik.Web.StronglyTypedStateManagedCollection`1.Remove(`0) Removemethod to remove items from the
                        collection.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.StronglyTypedStateManagedCollection`1
* Telerik.Web.UI.RadRatingItemCollection

## Properties

###  Item `ItemType`

ItemType collection indexer.

## Methods

###  Add

Add an item to the collection

#### Parameters

#### item ``0`

Item to be added to the collection

#### Returns

`System.Void` 

###  AddRange

Adds the items to the end of the collection

#### Parameters

#### items `System.Collections.Generic.IEnumerable{`0}`

Items to be added

#### Returns

`System.Void` 

###  Contains

Determines whether an element is in the collection

#### Parameters

#### item ``0`

The item to locate in the collection

#### Returns

`System.Boolean` true if item is found in the collection; otherwise, false.

###  CopyTo

Copies the array or portion of it to the collection

#### Parameters

#### array ``0`

One-dimensional array that serves as a destination

#### index `System.Int32`

Zero-based index

#### Returns

`System.Void` 

###  IndexOf

Returns the zero-based index of the first occurrence of a value in the collection or in a portion of it.

#### Parameters

#### item ``0`

Target item

#### Returns

`System.Int32` The zero-based index of the first occurrence of item within the entire collection

###  Insert

Inserts an element into the collection at the specified index.

#### Parameters

#### index `System.Int32`

The zero-based index at which item should be inserted.

#### item ``0`

The object to insert.

#### Returns

`System.Void` 

###  Remove

Removes the first occurrence of a specific object from the collection.

#### Parameters

#### item ``0`

The object to remove from the collection

#### Returns

`System.Void` 

###  RemoveAt

Removes the element at the specified index of the collection.

#### Parameters

#### index `System.Int32`

The zero-based index of the element to remove.

#### Returns

`System.Void` 

