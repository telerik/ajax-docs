---
title: Telerik.Web.UI.RadComboBoxItemCollection
page_title: Telerik.Web.UI.RadComboBoxItemCollection
description: Telerik.Web.UI.RadComboBoxItemCollection
---

# Telerik.Web.UI.RadComboBoxItemCollection

A collection of Telerik.Web.UI.RadComboBoxItem RadComboBoxItemobjects in a
                Telerik.Web.UI.RadComboBox RadComboBoxcontrol.

#### Remarks
The RadComboBoxItemCollectionclass represents a collection of
                RadComboBoxItemobjects.
            	bullet Use the P:Telerik.Web.UI.RadComboBoxItemCollection.Item(System.Int32) indexerto programmatically retrieve a
                        single RadComboBoxItem from the collection, using array notation.
                    Use the Countproperty to determine the total
                        number of combo items in the collection.
                    Use the M:Telerik.Web.UI.RadComboBoxItemCollection.Add(Telerik.Web.UI.RadComboBoxItem) Addmethod to add items in the collection.
                    Use the M:Telerik.Web.UI.RadComboBoxItemCollection.Remove(Telerik.Web.UI.RadComboBoxItem) Removemethod to remove items from the
                        collection.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.UI.ControlItemCollection
* Telerik.Web.UI.RadComboBoxItemCollection : ICollection`1, IEnumerable`1, IList`1

## Properties

###  Item `RadComboBoxItem`

Gets the RadComboBoxItem object at the specified index in 
            	the current RadComboBoxItemCollection.

## Methods

###  Add

Appends the specified RadComboBoxItem object to the end of the current RadComboBoxItemCollection.

#### Parameters

#### item `Telerik.Web.UI.RadComboBoxItem`

The RadComboBoxItem to append to the end of the current RadComboBoxItemCollection.

#### Returns

`System.Void` 

###  Add

Appends an item to the collection.

#### Parameters

#### text `System.String`

The text of the new item.

#### Returns

`System.Void` 

###  FindItemByText

Finds the first RadComboBoxItem with Text that
            matches the given text value.

#### Remarks
This method is not recursive.

#### Parameters

#### text `System.String`

The string to search for.

#### Returns

`Telerik.Web.UI.RadComboBoxItem` The first RadComboBoxItem that matches the
            specified text value.

###  FindItemByValue

Finds the first RadComboBoxItem with Value that
            matches the given value.

#### Remarks
This methods is not recursive.

#### Parameters

#### value `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadComboBoxItem` The first RadComboBoxItem that matches the
            specified value.

###  FindItemByAttribute

Searches the items in the collection for a RadComboBoxItem which contains the specified attribute and attribute value.

#### Remarks
This method is not recursive.

#### Parameters

#### attributeName `System.String`

The name of the target attribute.

#### attributeValue `System.String`

The value of the target attribute

#### Returns

`Telerik.Web.UI.RadComboBoxItem` The RadComboBoxItem that matches the specified arguments. Null (Nothing) is returned if no node is found.

###  FindItemByText

Finds the first RadComboBoxItem with Text that
            matches the given text value.

#### Parameters

#### text `System.String`

The string to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadComboBoxItem` The first RadComboBoxItem that matches the
            specified text value.

###  FindItemByValue

Finds the first RadComboBoxItem with Value that
            matches the given value.

#### Parameters

#### value `System.String`

The value to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadComboBoxItem` The first RadComboBoxItem that matches the
            specified value.

###  FindItemIndexByText

Returns the index of the first RadComboBoxItem with
            Text that matches the given text value.

#### Parameters

#### text `System.String`

The string to search for.

#### Returns

`System.Int32` 

###  FindItemIndexByText

Returns the index of the first RadComboBoxItem with
            Text that matches the given text value.

#### Parameters

#### text `System.String`

The string to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`System.Int32` 

###  FindItemIndexByValue

Returns the index of the first RadComboBoxItem with
            Value that matches the given value.

#### Parameters

#### value `System.String`

The value to search for.

#### Returns

`System.Int32` 

###  FindItemIndexByValue

Returns the index of the first RadComboBoxItem with
            Value that matches the given value.

#### Parameters

#### value `System.String`

The value to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`System.Int32` 

###  FindItem

Returns  the first RadComboBoxItem 
            that matches the conditions defined by the specified predicate.
            The predicate should returns a boolean value.

#### Parameters

#### match `System.Predicate{Telerik.Web.UI.RadComboBoxItem}`

The Predicate <> that defines the conditions of the element to search for.

#### Returns

`Telerik.Web.UI.RadComboBoxItem` 

###  Contains

Determines whether the specified RadComboBoxItem object is in the current 
            	RadComboBoxItemCollection.

#### Parameters

#### item `Telerik.Web.UI.RadComboBoxItem`

The RadComboBoxItem object to find.

#### Returns

`System.Boolean` true if the current collection contains the specified RadComboBoxItem object; 
            	otherwise, false.

###  AddRange

Appends the specified array of RadComboBoxItem objects to the end of the 
            current RadComboBoxItemCollection.

#### Parameters

#### items `System.Collections.Generic.IEnumerable{Telerik.Web.UI.RadComboBoxItem}`

The array of RadComboBoxItem o append to the end of the current 
            RadComboBoxItemCollection.

#### Returns

`System.Void` 

###  IndexOf

Determines the index of the specified RadComboBoxItem object in the collection.

#### Parameters

#### item `Telerik.Web.UI.RadComboBoxItem`

The RadComboBoxItem to locate.

#### Returns

`System.Int32` The zero-based index of item within the current RadComboBoxItemCollection, 
            	if found; otherwise, -1.

###  Insert

Inserts the specified RadComboBoxItem object in the current 
            RadComboBoxItemCollection at the specified index location.

#### Parameters

#### index `System.Int32`

The zero-based index location at which to insert the RadComboBoxItem.

#### item `Telerik.Web.UI.RadComboBoxItem`

The RadComboBoxItem to insert.

#### Returns

`System.Void` 

###  Insert

Inserts an item to the collection at the specified index.

#### Parameters

#### index `System.Int32`

The zero-based index location at which to insert the RadComboBoxItem.

#### text `System.String`

The text of the new item.

#### Returns

`System.Void` 

###  Remove

Removes the specified RadComboBoxItem object from the current
            	RadComboBoxItemCollection.

#### Parameters

#### item `Telerik.Web.UI.RadComboBoxItem`

The RadComboBoxItem object to remove.

#### Returns

`System.Void` 

###  Remove

Removes the specified RadComboBoxItem object from the current
            	RadComboBoxItemCollection.

#### Parameters

#### index `System.Int32`

The zero-based index of the index to remove.

#### Returns

`System.Void` 

###  Sort

Sort the items from RadComboBoxItemCollection.

#### Returns

`System.Void` 

###  Sort

Sort the items from RadComboBoxItemCollection.

#### Parameters

#### comparer `System.Collections.IComparer`

An object from IComparer interface.

#### Returns

`System.Void` 

