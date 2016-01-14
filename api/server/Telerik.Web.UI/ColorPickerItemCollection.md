---
title: Telerik.Web.UI.ColorPickerItemCollection
page_title: Telerik.Web.UI.ColorPickerItemCollection
description: Telerik.Web.UI.ColorPickerItemCollection
---

# Telerik.Web.UI.ColorPickerItemCollection

A collection of Telerik.Web.UI.ColorPickerItem ColorPickerItemobjects in a
                Telerik.Web.UI.RadColorPicker RadColorPickercontrol.

#### Remarks
The ColorPickerItemCollectionclass represents a collection of
                ColorPickerItemobjects. The ColorPickerItemobjects in turn represent 
                Colors items within a RadColorPickercontrol.bullet Use the Telerik.Web.UI.ColorPickerItemCollection indexerto programmatically retrieve a
                        single ColorPickerItem from the collection, using array notation.
                    Use the Countproperty to determine the total
                        number of Items in the collection.
                    Use the M:Telerik.Web.StronglyTypedStateManagedCollection`1.Add(`0) Addmethod to add Items in the collection.
                    Use the M:Telerik.Web.StronglyTypedStateManagedCollection`1.Remove(`0) Removemethod to remove Items from the
                        collection.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.StronglyTypedStateManagedCollection`1
* Telerik.Web.UI.ColorPickerItemCollection

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

Adds colors to the palette of RadColorPicker.

#### Parameters

#### items `Telerik.Web.UI.ColorPickerItemCollection`

A collection of ColorPickerItem objects.

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

