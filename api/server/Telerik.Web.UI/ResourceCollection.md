---
title: Telerik.Web.UI.ResourceCollection
page_title: Telerik.Web.UI.ResourceCollection
description: Telerik.Web.UI.ResourceCollection
---

# Telerik.Web.UI.ResourceCollection

This Class defines the Resource Collection that inherits StronglyTypedStateManagedCollection and IEnumerable
            collections.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.StronglyTypedStateManagedCollection`1
* Telerik.Web.UI.ResourceCollection : IEnumerable`1

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

###  GetResource

Gets the resource that matches the specified type and key.

#### Parameters

#### type `System.String`

The type.

#### key `System.Object`

The key.

#### Returns

`Telerik.Web.UI.Resource` The resource that matches the specified type and key; null if no resource matches.

###  GetResourceByType

Gets the first resource (if any) of the specified type.

#### Parameters

#### type `System.String`

The type of resource to search for.

#### Returns

`Telerik.Web.UI.Resource` The first resource of the specified type; null if no resource matches.

###  GetResourcesByType

Gets the resources of the specified type.

#### Parameters

#### type `System.String`

The type of resource to search for.

#### Returns

`System.Collections.Generic.IList`1` The resources of the specified type.

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

