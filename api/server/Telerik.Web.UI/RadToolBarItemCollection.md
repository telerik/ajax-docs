---
title: Telerik.Web.UI.RadToolBarItemCollection
page_title: Telerik.Web.UI.RadToolBarItemCollection
description: Telerik.Web.UI.RadToolBarItemCollection
---

# Telerik.Web.UI.RadToolBarItemCollection

A collection of Telerik.Web.UI.RadToolBarItem RadToolBarItemobjects in a
                Telerik.Web.UI.RadToolBar RadToolBarcontrol.

#### Remarks
The RadToolBarItemCollectionclass represents a collection of
                RadToolBarItemobjects. The RadToolBarItemobjects
            	in turn represent items (buttons, dropdowns or split buttons) within a
            	RadToolBarcontrol.bullet Use the P:Telerik.Web.UI.RadToolBarItemCollection.Item(System.Int32) indexerto programmatically retrieve a
                        single RadToolBarItem from the collection, using array notation.
                    Use the Countproperty to determine the total
                        number of toolbar items in the collection.
                    Use the M:Telerik.Web.UI.RadToolBarItemCollection.Add(Telerik.Web.UI.RadToolBarItem) Addmethod to add toolbar items to the collection.
                    Use the M:Telerik.Web.UI.RadToolBarItemCollection.Remove(Telerik.Web.UI.RadToolBarItem) Removemethod to remove toolbar items from the
                        collection.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.UI.ControlItemCollection
* Telerik.Web.UI.RadToolBarItemCollection

## Properties

###  Item `RadToolBarItem`

Gets the RadToolBarItem object at the specified index in 
            	the current RadToolBarItemCollection.

## Methods

###  Add

Appends the specified RadToolBarItem object to the end of the
            current RadToolBarItemCollection.

#### Parameters

#### item `Telerik.Web.UI.RadToolBarItem`

The RadToolBarItem to append to the end of the current
            RadToolBarItemCollection.

#### Returns

`System.Void` 

###  AddRange

Appends the specified array of RadToolBarItem objects
            to the end of the current RadToolBarItemCollection.

#### Parameters

#### items `System.Collections.Generic.IEnumerable{Telerik.Web.UI.RadToolBarItem}`

The array of RadToolBarItem objects to append to the end of the current 
            	RadToolBarItemCollection.

#### Returns

`System.Void` 

###  Contains

Determines whether the specified RadToolBarItem object is in the current 
            	RadToolBarItemCollection.

#### Parameters

#### item `Telerik.Web.UI.RadToolBarItem`

The RadToolBarItem object to find.

#### Returns

`System.Boolean` true if the current collection contains the specified
            	RadToolBarItem object; otherwise, false.

###  FindItem

Returns  the first RadToolBarItem 
            that matches the conditions defined by the specified predicate.
            The predicate should returns a boolean value.

#### Parameters

#### match `System.Predicate{Telerik.Web.UI.RadToolBarItem}`

The Predicate <> that defines the conditions of the element to search for.

#### Returns

`Telerik.Web.UI.RadToolBarItem` 

###  FindItemByAttribute

Searches the items in the collection for a RadToolBarItem which contains the specified attribute and attribute value.

#### Remarks
This method is not recursive.

#### Parameters

#### attributeName `System.String`

The name of the target attribute.

#### attributeValue `System.String`

The value of the target attribute

#### Returns

`Telerik.Web.UI.RadToolBarItem` The RadToolBarItem that matches the specified arguments. Null (Nothing) is returned if no node is found.

###  FindItemByText

Searches the ToolBarItemCollection for the first
                RadToolBarItem with a Text property equal to
                the specified value.

#### Remarks
The method returns the first item matching the search criteria. This method is not recursive. If no item is
            matching then null (Nothing in VB.NET) is
            returned.

#### Parameters

#### text `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadToolBarItem` A RadToolBarItem which Text property is equal
                to the specified value.

###  FindItemByText

Searches the ToolBarItemCollection for the first
                RadToolBarItem with a Text property equal to
                the specified value.

#### Remarks
The method returns the first item matching the search criteria. This method is not recursive. If no item is
            matching then null (Nothing in VB.NET) is
            returned.

#### Parameters

#### text `System.String`

The value to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadToolBarItem` A RadToolBarItem which Text property is equal
                to the specified value.

###  FindItemByValue

Searches the ToolBarItemCollection for the first button item
                (RadToolBarButton or
            	RadToolBarSplitButton) with a
            	Value property equal
                to the specified value.

#### Remarks
The method returns the first item matching the search criteria. This method is not recursive. If no item is
            matching then null (Nothing in VB.NET) is
            returned.

#### Parameters

#### value `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadToolBarItem` A button item which Value property is
                equal to the specified value.

###  FindItemByValue

Searches the ToolBarItemCollection for the first button item
                (RadToolBarButton or
            	RadToolBarSplitButton) with a
            	Value property equal
                to the specified value.

#### Remarks
The method returns the first item matching the search criteria. This method is not recursive. If no item is
            matching then null (Nothing in VB.NET) is
            returned.

#### Parameters

#### value `System.String`

The value to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadToolBarItem` A button item which Value property is
                equal to the specified value.

###  IndexOf

Determines the index of the specified RadToolBarItem object in
            	the collection.

#### Parameters

#### item `Telerik.Web.UI.RadToolBarItem`

The RadToolBarItem to locate.

#### Returns

`System.Int32` The zero-based index of a toolbar item within the current
            	RadToolBarItemCollection, 
            	if found; otherwise, -1.

###  Insert

Inserts the specified RadToolBarItem object in the current 
            RadToolBarItemCollection at the specified index location.

#### Parameters

#### index `System.Int32`

The zero-based index location at which to insert the
            	RadToolBarItem.

#### item `Telerik.Web.UI.RadToolBarItem`

The RadToolBarItem to insert.

#### Returns

`System.Void` 

###  Remove

Removes the specified RadToolBarItem object from the current
            	RadToolBarItemCollection.

#### Parameters

#### item `Telerik.Web.UI.RadToolBarItem`

The RadToolBarItem object to remove.

#### Returns

`System.Void` 

###  RemoveAt

Removes the RadToolBarItem object at the specified index 
            from the current RadToolBarItemCollection.

#### Parameters

#### index `System.Int32`

The zero-based index of the item to remove.

#### Returns

`System.Void` 

