---
title: Telerik.Web.UI.GridExcelBuilder.AttributesCollection
page_title: Telerik.Web.UI.GridExcelBuilder.AttributesCollection
description: Telerik.Web.UI.GridExcelBuilder.AttributesCollection
---

# Telerik.Web.UI.GridExcelBuilder.AttributesCollection

Collection of attributes for a given object

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.GridExcelBuilder.AttributesCollection : IAttributesCollection, ICollection, IDictionary, IEnumerable

## Properties

###  IsFixedSize `Boolean`

Gets a value indicating whether the collection has a fixed size.

###  IsReadOnly `Boolean`

Gets a value indicating whether the collection is read-only.

###  Keys `ICollection`

Gets an ICollection object containing the keys of the collection.

###  Values `ICollection`

Gets an ICollection object containing the values in the collection.

###  Item `String`

Returns the attribute located at the corresponding position

###  Count `Int32`

Gets the number of elements contained in the ICollection. (Inherited from ICollection.)

###  IsSynchronized `Boolean`

Gets a value indicating whether access to the ICollection is synchronized (thread safe). (Inherited from ICollection.)

###  SyncRoot `Object`

Gets an object that can be used to synchronize access to the ICollection. (Inherited from ICollection.)

## Methods

###  Add

Add an Attribute to the collection

#### Parameters

#### key `System.String`

#### value `System.String`

#### Returns

`System.Void` 

###  Clear

Clears the Attribute collection

#### Returns

`System.Void` 

###  Contains

Determines whether the collection contains an element with the specified key.

#### Parameters

#### key `System.String`

The key to locate in the collection.

#### Returns

`System.Boolean` true if the collection contains an element with the key; otherwise, false.

###  GetEnumerator

Returns an IDictionaryEnumerator object for the IDictionary object.

#### Returns

`System.Collections.IDictionaryEnumerator` An IDictionaryEnumerator object for the IDictionary object.

###  Remove

Removes the element with the specified key from the collection.

#### Parameters

#### key `System.String`

The key of the element to remove.

#### Returns

`System.Void` 

###  CopyTo

Copies the elements of the ICollection to an Array, starting at a particular Array index. (Inherited from ICollection.)

#### Parameters

#### array `System.String`

The one-dimensional Array that is the destination of the elements copied from ICollection. The Array must have zero-based indexing.

#### index `System.Int32`

The zero-based index in array at which copying begins.

#### Returns

`System.Void` 

