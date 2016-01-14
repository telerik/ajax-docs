---
title: Telerik.Web.UI.RadToolBarButtonCollection
page_title: Telerik.Web.UI.RadToolBarButtonCollection
description: Telerik.Web.UI.RadToolBarButtonCollection
---

# Telerik.Web.UI.RadToolBarButtonCollection

A collection of Telerik.Web.UI.RadToolBarButton RadToolBarButtonobjects in
                Telerik.Web.UI.RadToolBarDropDown RadToolBarDropDownand
            	Telerik.Web.UI.RadToolBarSplitButton RadToolBarSplitButton.

#### Remarks
The RadToolBarButtonCollectionclass represents a collection of
                RadToolBarButtonobjects. The RadToolBarButtonobjects
            	in turn represent buttons within a Telerik.Web.UI.RadToolBarDropDown RadToolBarDropDownor
            	a Telerik.Web.UI.RadToolBarSplitButton RadToolBarSplitButton.bullet Use the P:Telerik.Web.UI.RadToolBarButtonCollection.Item(System.Int32) indexerto programmatically retrieve a
                        single RadToolBarButton from the collection, using array notation.
                    Use the Countproperty to determine the total
                        number of buttons in the collection.
                    Use the M:Telerik.Web.UI.RadToolBarButtonCollection.Add(Telerik.Web.UI.RadToolBarButton) Addmethod to add buttons to the collection.
                    Use the M:Telerik.Web.UI.RadToolBarButtonCollection.Remove(Telerik.Web.UI.RadToolBarButton) Removemethod to remove buttons from the
                        collection.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.UI.ControlItemCollection
* Telerik.Web.UI.RadToolBarItemCollection
* Telerik.Web.UI.RadToolBarButtonCollection

## Properties

###  Item `RadToolBarButton`

Gets the RadToolBarButton object at the specified index in 
            	the current RadToolBarButtonCollection.

###  Item `RadToolBarItem`

Gets the RadToolBarItem object at the specified index in 
            	the current RadToolBarItemCollection.

## Methods

###  Add

Appends the specified RadToolBarButton object to the end of the
            current RadToolBarButtonCollection.

#### Parameters

#### item `Telerik.Web.UI.RadToolBarButton`

The RadToolBarButton to append to the end of the current
            RadToolBarButtonCollection.

#### Returns

`System.Void` 

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

Appends the specified array of RadToolBarButton objects
            to the end of the current RadToolBarButtonCollection.

#### Parameters

#### buttons `System.Collections.Generic.IEnumerable{Telerik.Web.UI.RadToolBarButton}`

The array of RadToolBarButton objects to append to
            	the end of the current RadToolBarButtonCollection.

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

Determines whether the specified RadToolBarButton object
            	is in the current RadToolBarButtonCollection.

#### Parameters

#### button `Telerik.Web.UI.RadToolBarButton`

The RadToolBarButton object to find.

#### Returns

`System.Boolean` true if the current collection contains the specified
            	RadToolBarButton object; otherwise, false.

###  Contains

Determines whether the specified RadToolBarItem object is in the current 
            	RadToolBarItemCollection.

#### Parameters

#### item `Telerik.Web.UI.RadToolBarItem`

The RadToolBarItem object to find.

#### Returns

`System.Boolean` true if the current collection contains the specified
            	RadToolBarItem object; otherwise, false.

###  FindButtonByAttribute

Searches the items in the collection for a RadToolBarButton
            which contains the specified attribute and attribute value.

#### Remarks
This method is not recursive.

#### Parameters

#### attributeName `System.String`

The name of the target attribute.

#### attributeValue `System.String`

The value of the target attribute

#### Returns

`Telerik.Web.UI.RadToolBarButton` The RadToolBarButton that matches the specified arguments.
            	Null (Nothing) is returned if no node is found.

###  FindButtonByText

Searches the RadToolBarButtonCollection for the first
                RadToolBarButton with a Text property equal to
                the specified value.

#### Remarks
The method returns the first item matching the search criteria. This method is not recursive. If no item is
            matching then null (Nothing in VB.NET) is
            returned.

#### Parameters

#### text `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadToolBarButton` A RadToolBarButton which Text property is equal
                to the specified value.

###  FindButtonByValue

Searches the RadToolBarButtonCollection for the first
                RadToolBarButton with a Value property equal
                to the specified value.

#### Remarks
The method returns the first item matching the search criteria. This method is not recursive. If no item is
            matching then null (Nothing in VB.NET) is
            returned.

#### Parameters

#### value `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadToolBarButton` A RadToolBarButton whose Value property is
                equal to the specified value.

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

Determines the index of the specified RadToolBarButton object in
            	the collection.

#### Parameters

#### button `Telerik.Web.UI.RadToolBarButton`

The RadToolBarButton to locate.

#### Returns

`System.Int32` The zero-based index of a toolbar button within the current
            	RadToolBarButtonCollection, 
            	if found; otherwise, -1.

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

Inserts the specified RadToolBarButton object in the current 
            RadToolBarButtonCollection at the specified index location.

#### Parameters

#### index `System.Int32`

The zero-based index location at which to insert the
            	RadToolBarButton.

#### button `Telerik.Web.UI.RadToolBarButton`

The RadToolBarButton to insert.

#### Returns

`System.Void` 

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

Removes the specified RadToolBarButton object from the current
            	RadToolBarButtonCollection.

#### Parameters

#### button `Telerik.Web.UI.RadToolBarButton`

The RadToolBarButton object to remove.

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

Removes the RadToolBarButton object at the specified index 
            from the current RadToolBarButtonCollection.

#### Parameters

#### index `System.Int32`

The zero-based index of the button to remove.

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

