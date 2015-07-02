---
title: Telerik.Web.UI.GridExcelBuilder.Abstract.ElementsCollection
page_title: Telerik.Web.UI.GridExcelBuilder.Abstract.ElementsCollection
description: Telerik.Web.UI.GridExcelBuilder.Abstract.ElementsCollection
---

# Telerik.Web.UI.GridExcelBuilder.Abstract.ElementsCollection

Collection of ExcelML elements

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridExcelBuilder.Abstract.ElementsCollection

## Properties

###  IsFixedSize `Boolean`

Gets a value indicating whether the collection has a fixed size.

###  IsReadOnly `Boolean`

Gets a value indicating whether the collection is read-only.

###  Item `IElement`

Returns the item at the specified position

## Methods

###  Add

Add element to the collection

#### Parameters

#### value `Telerik.Web.UI.GridExcelBuilder.Abstract.IElement`

Element to be added to the collection

#### Returns

`System.Int32` The position into which the new element was inserted

###  Clear

Removes all items

#### Returns

`System.Void` 

###  Contains

Determines whether the collection contains a specific value.

#### Parameters

#### value `Telerik.Web.UI.GridExcelBuilder.Abstract.IElement`

The object to locate in the collection.

#### Returns

`System.Boolean` true if the Object is found in the collection; otherwise, false.

###  IndexOf

etermines the index of a specific item in the IList.

#### Parameters

#### value `Telerik.Web.UI.GridExcelBuilder.Abstract.IElement`

The object to locate in the collection.

#### Returns

`System.Int32` The index of value if found in the collection; otherwise, -1.

###  Insert

Inserts an item to the collection at the specified index.

#### Parameters

#### index `System.Int32`

The zero-based index at which value should be inserted.

#### value `Telerik.Web.UI.GridExcelBuilder.Abstract.IElement`

The object to insert into the collection.

#### Returns

`System.Void` 

###  Remove

Removes the first occurrence of a specific object from the collection.

#### Parameters

#### value `Telerik.Web.UI.GridExcelBuilder.Abstract.IElement`

The object to remove from the collection.

#### Returns

`System.Void` 

###  RemoveAt

Removes the item at the specified index.

#### Parameters

#### index `System.Int32`

The zero-based index of the item to remove.

#### Returns

`System.Void` 

