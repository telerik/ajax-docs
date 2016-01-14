---
title: Telerik.Web.UI.RadPanelItemCollection
page_title: Telerik.Web.UI.RadPanelItemCollection
description: Telerik.Web.UI.RadPanelItemCollection
---

# Telerik.Web.UI.RadPanelItemCollection

A collection of Telerik.Web.UI.RadPanelItem RadPanelItemobjects in a
                Telerik.Web.UI.RadPanelBar RadPanelBarcontrol.

#### Remarks
The RadPanelItemCollectionclass represents a collection of
                RadPanelItemobjects.
            	bullet Use the P:Telerik.Web.UI.RadPanelItemCollection.Item(System.Int32) indexerto programmatically retrieve a
                        single RadPanelItem from the collection, using array notation.
                    Use the Countproperty to determine the total
                        number of panel items in the collection.
                    Use the M:Telerik.Web.UI.RadPanelItemCollection.Add(Telerik.Web.UI.RadPanelItem) Addmethod to add items in the collection.
                    Use the M:Telerik.Web.UI.RadPanelItemCollection.Remove(Telerik.Web.UI.RadPanelItem) Removemethod to remove items from the
                        collection.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.UI.ControlItemCollection
* Telerik.Web.UI.RadPanelItemCollection

## Properties

###  Item `RadPanelItem`

Gets the RadPanelItem object at the specified index in 
            	the current RadPanelItemCollection.

## Methods

###  Add

Appends the specified RadPanelItem object to the end of the current RadPanelItemCollection.

#### Parameters

#### item `Telerik.Web.UI.RadPanelItem`

The RadPanelItem to append to the end of the current RadPanelItemCollection.

#### Returns

`System.Void` 

###  AddRange

Appends the specified array of RadPanelItem objects to the end of the 
            current RadPanelItemCollection.

#### Parameters

#### items `Telerik.Web.UI.RadPanelItem`

The array of RadPanelItem o append to the end of the current 
            RadPanelItemCollection.

#### Returns

`System.Void` 

###  Contains

Determines whether the specified RadPanelItem object is in the current 
            	RadPanelItemCollection.

#### Parameters

#### item `Telerik.Web.UI.RadPanelItem`

The RadPanelItem object to find.

#### Returns

`System.Boolean` true if the current collection contains the specified RadPanelItem object; 
            	otherwise, false.

###  FindItem

Returns  the first RadPanelItem 
            that matches the conditions defined by the specified predicate.
            The predicate should returns a boolean value.

#### Parameters

#### match `System.Predicate{Telerik.Web.UI.RadPanelItem}`

The Predicate <> that defines the conditions of the element to search for.

#### Returns

`Telerik.Web.UI.RadPanelItem` 

###  FindItemByAttribute

Searches the nodes in the collection for a RadPanelItem which contains the specified attribute and attribute value.

#### Remarks
This method is not recursive.

#### Parameters

#### attributeName `System.String`

The name of the target attribute.

#### attributeValue `System.String`

The value of the target attribute

#### Returns

`Telerik.Web.UI.RadPanelItem` The RadPanelItem that matches the specified arguments. Null (Nothing) is returned if no node is found.

###  FindItemByText

Searches all nodes for a RadPanelItem with a Text property
            equal to the specified text.

#### Remarks
This method is not recursive.

#### Parameters

#### text `System.String`

The text to search for

#### Returns

`Telerik.Web.UI.RadPanelItem` A RadPanelItem whose Text property equals to the specified argument. Null (Nothing) is returned when no matching node is found.

###  FindItemByText

Searches the RadPanelbar control for the first
                RadPanelItem with a Text property equal to
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

`Telerik.Web.UI.RadPanelItem` A RadPanelItem whose Text property is equal
                to the specified value.

###  FindItemByValue

Searches all nodes for a RadPanelItem with a Value property
            equal to the specified value.

#### Remarks
This method is not recursive.

#### Parameters

#### value `System.String`

The value to search for

#### Returns

`Telerik.Web.UI.RadPanelItem` A RadPanelItem whose Value property equals to the specified argument. Null (Nothing) is returned when no matching node is found.

###  FindItemByValue

Searches the RadPanelbar control for the first
                RadPanelItem with a Value property equal
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

`Telerik.Web.UI.RadPanelItem` A RadPanelItem whose Value property is
                equal to the specified value.

###  IndexOf

Determines the index of the specified RadPanelItem object in the collection.

#### Parameters

#### item `Telerik.Web.UI.RadPanelItem`

The RadPanelItem to locate.

#### Returns

`System.Int32` The zero-based index of item within the current RadPanelItemCollection, 
            	if found; otherwise, -1.

###  Insert

Inserts the specified RadPanelItem object in the current 
            RadPanelItemCollection at the specified index location.

#### Parameters

#### index `System.Int32`

The zero-based index location at which to insert the RadPanelItem.

#### item `Telerik.Web.UI.RadPanelItem`

The RadPanelItem to insert.

#### Returns

`System.Void` 

###  Remove

Removes the specified RadPanelItem object from the current
            	RadPanelItemCollection.

#### Parameters

#### item `Telerik.Web.UI.RadPanelItem`

The RadPanelItem object to remove.

#### Returns

`System.Void` 

###  RemoveAt

Removes the RadPanelItem object at the specified index 
            from the current RadPanelItemCollection.

#### Parameters

#### index `System.Int32`

The zero-based index of the item to remove.

#### Returns

`System.Void` 

