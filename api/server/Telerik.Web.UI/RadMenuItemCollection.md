---
title: Telerik.Web.UI.RadMenuItemCollection
page_title: Telerik.Web.UI.RadMenuItemCollection
description: Telerik.Web.UI.RadMenuItemCollection
---

# Telerik.Web.UI.RadMenuItemCollection

A collection of Telerik.Web.UI.RadMenuItem RadMenuItemobjects in a
                Telerik.Web.UI.RadMenu RadMenucontrol.

#### Remarks
The RadMenuItemCollectionclass represents a collection of
                RadMenuItemobjects. The RadMenuItemobjects in turn represent 
                menu items within a RadMenucontrol.bullet Use the P:Telerik.Web.UI.RadMenuItemCollection.Item(System.Int32) indexerto programmatically retrieve a
                        single RadMenuItem from the collection, using array notation.
                    Use the Countproperty to determine the total
                        number of menu items in the collection.
                    Use the M:Telerik.Web.UI.RadMenuItemCollection.Add(Telerik.Web.UI.RadMenuItem) Addmethod to add menu items in the collection.
                    Use the M:Telerik.Web.UI.RadMenuItemCollection.Remove(Telerik.Web.UI.RadMenuItem) Removemethod to remove menu items from the
                        collection.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.UI.ControlItemCollection
* Telerik.Web.UI.RadMenuItemCollection : ICollection`1, IEnumerable`1, IList`1

## Properties

###  Item `RadMenuItem`

Gets the  object at the specified index in 
            	the current .

## Methods

###  Add

Appends the specified  object to the end of the current .

#### Parameters

#### item `Telerik.Web.UI.RadMenuItem`

The  to append to the end of the current .

#### Returns

`System.Void` 

###  AddRange

Appends the specified array of  objects to the end of the 
            current .

#### Parameters

#### items `System.Collections.Generic.IEnumerable{Telerik.Web.UI.RadMenuItem}`

The array of  to append to the end of the current .

#### Returns

`System.Void` 

###  Contains

Determines whether the specified  object is in the current 
            	.

#### Parameters

#### item `Telerik.Web.UI.RadMenuItem`

The  object to find.

#### Returns

`System.Boolean` true if the current collection contains the specified  object; 
            	otherwise, false.

###  CopyTo

Copies the contents of the current  into the 
            specified array of  objects.

#### Parameters

#### array `Telerik.Web.UI.RadMenuItem`

The target array.

#### index `System.Int32`

The index to start copying from.

#### Returns

`System.Void` 

###  FindItem

Returns  the first RadMenuItem 
            that matches the conditions defined by the specified predicate.
            The predicate should returns a boolean value.

#### Parameters

#### match `System.Predicate{Telerik.Web.UI.RadMenuItem}`

The Predicate <> that defines the conditions of the element to search for.

#### Returns

`Telerik.Web.UI.RadMenuItem` 

###  FindItemByAttribute

Searches the items in the collection for a RadMenuItem which contains the specified attribute and attribute value.

#### Remarks
This method is not recursive.

#### Parameters

#### attributeName `System.String`

The name of the target attribute.

#### attributeValue `System.String`

The value of the target attribute

#### Returns

`Telerik.Web.UI.RadMenuItem` The RadMenuItem that matches the specified arguments. Null (Nothing) is returned if no node is found.

###  FindItemByText

Searches the RadMenuItemCollection control for the first
                RadMenuItem with a Text property equal to
                the specified value.

#### Remarks
The method returns the first item matching the search criteria. This method is not recursive. If no item is
            matching then null (Nothing in VB.NET) is
            returned.

#### Parameters

#### text `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadMenuItem` A RadMenuItem whose Text property is equal
                to the specified value.

###  FindItemByText

Searches the RadMenu control for the first
                RadMenuItem with a Text property equal to
                the specified value.

#### Remarks
The method returns the first item matching the search criteria. If no item is
            matching then null (Nothing in VB.NET) is
            returned.

#### Parameters

#### text `System.String`

The value to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadMenuItem` A RadMenuItem whose Text property is equal
                to the specified value.

###  FindItemByValue

Searches the RadMenuItemCollection control for the first
                RadMenuItem with a Value property equal
                to the specified value.

#### Remarks
The method returns the first item matching the search criteria. This method is not recursive. If no item is
            matching then null (Nothing in VB.NET) is
            returned.

#### Parameters

#### value `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadMenuItem` A RadMenuItem whose Value property is
                equal to the specified value.

###  FindItemByValue

Searches the RadMenu control for the first
                RadMenuItem with a Value property equal
                to the specified value.

#### Remarks
The method returns the first item matching the search criteria. If no item is
            matching then null (Nothing in VB.NET) is
            returned.

#### Parameters

#### value `System.String`

The value to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadMenuItem` A RadMenuItem whose Value property is
                equal to the specified value.

###  IndexOf

Determines the index of the specified  object in the collection.

#### Parameters

#### item `Telerik.Web.UI.RadMenuItem`

The  to locate.

#### Returns

`System.Int32` The zero-based index of item within the current ,
            	if found; otherwise, -1.

###  Insert

Inserts the specified  object in the current 
             at the specified index location.

#### Parameters

#### index `System.Int32`

The zero-based index location at which to insert the .

#### item `Telerik.Web.UI.RadMenuItem`

The  to insert.

#### Returns

`System.Void` 

###  Remove

Removes the specified  object from the current
            	.

#### Parameters

#### item `Telerik.Web.UI.RadMenuItem`

The RadMenuItem object to remove.

#### Returns

`System.Void` 

###  RemoveAt

Removes the  object at the specified index 
            from the current .

#### Parameters

#### index `System.Int32`

The zero-based index of the index to remove.

#### Returns

`System.Void` 

