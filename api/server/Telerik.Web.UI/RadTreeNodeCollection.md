---
title: Telerik.Web.UI.RadTreeNodeCollection
page_title: Telerik.Web.UI.RadTreeNodeCollection
description: Telerik.Web.UI.RadTreeNodeCollection
---

# Telerik.Web.UI.RadTreeNodeCollection

A collection of Telerik.Web.UI.RadTreeNode RadTreeNodeobjects in a
                Telerik.Web.UI.RadTreeView control.

#### Remarks
The RadTreeNodeCollectionclass represents a collection of
                RadTreeNodeobjects.
            	bullet Use the P:Telerik.Web.UI.RadTreeNodeCollection.Item(System.Int32) indexerto programmatically retrieve a
                        single RadTreeNode from the collection, using array notation.
                    Use the Countproperty to determine the total
                        number of menu items in the collection.
                    Use the M:Telerik.Web.UI.RadTreeNodeCollection.Add(Telerik.Web.UI.RadTreeNode) Addmethod to add nodes in the collection.
                    Use the M:Telerik.Web.UI.RadTreeNodeCollection.Remove(Telerik.Web.UI.RadTreeNode) Removemethod to remove nodes from the
                        collection.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.UI.ControlItemCollection
* Telerik.Web.UI.RadTreeNodeCollection

## Properties

###  Item `RadTreeNode`

Gets the object at the specified index in 
            	the current .

## Methods

###  Add

Appends the specified  object to the end of the current 
            	.

#### Parameters

#### node `Telerik.Web.UI.RadTreeNode`

The  to append to the end of the current 
            	.

#### Returns

`System.Void` 

###  Remove

Removes the specified  object from the current
            	.

#### Parameters

#### node `Telerik.Web.UI.RadTreeNode`

The  object to remove.

#### Returns

`System.Void` 

###  RemoveAt

Removes the  object at the specified index 
            from the current .

#### Parameters

#### index `System.Int32`

The zero-based index of the node to remove.

#### Returns

`System.Void` 

###  Contains

Determines whether the specified  object is in the current 
            	.

#### Parameters

#### node `Telerik.Web.UI.RadTreeNode`

The  object to find.

#### Returns

`System.Boolean` true if the current collection contains the specified  object; 
            	otherwise, false.

###  CopyTo

Copies the  instances stored in the current
            	 object to an System.Array object, beginning at the specified 
            	index location in the System.Array.

#### Parameters

#### array `Telerik.Web.UI.RadTreeNode`

The System.Array to copy the  instances to.

#### index `System.Int32`

The zero-based relative index in array where copying begins.

#### Returns

`System.Void` 

###  AddRange

Appends the specified array of  objects to the end of the 
            current .

#### Parameters

#### nodes `System.Collections.Generic.IEnumerable{Telerik.Web.UI.RadTreeNode}`

The array of  to append to the end of the current 
            	.

#### Returns

`System.Void` 

###  IndexOf

Determines the index of the specified  object in the collection.

#### Parameters

#### node `Telerik.Web.UI.RadTreeNode`

The  to locate.

#### Returns

`System.Int32` The zero-based index of tab within the current , 
            	if found; otherwise, -1.

###  Insert

Inserts the specified  object in the current 
            	 at the specified index location.

#### Parameters

#### index `System.Int32`

The zero-based index location at which to insert the .

#### node `Telerik.Web.UI.RadTreeNode`

The  to insert.

#### Returns

`System.Void` 

###  FindNodeByText

Searches all nodes for a RadTreeNode with a Text property
            equal to the specified text.

#### Remarks
This method is not recursive.

#### Parameters

#### text `System.String`

The text to search for

#### Returns

`Telerik.Web.UI.RadTreeNode` A RadTreeNode whose Text property equals to the specified argument. Null (Nothing) is returned when no matching node is found.

###  FindNodeByText

Searches all nodes for a RadTreeNode with a Text property
            equal to the specified text.

#### Remarks
This method is not recursive.

#### Parameters

#### text `System.String`

The text to search for

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadTreeNode` A RadTreeNode whose Text property equals to the specified argument. Null (Nothing) is returned when no matching node is found.

###  FindNodeByValue

Searches all nodes for a RadTreeNode with a Value property
            equal to the specified value.

#### Remarks
This method is not recursive.

#### Parameters

#### value `System.String`

The value to search for

#### Returns

`Telerik.Web.UI.RadTreeNode` A RadTreeNode whose Value property equals to the specified argument. Null (Nothing) is returned when no matching node is found.

###  FindNodeByValue

Searches all nodes for a RadTreeNode with a Value property
            equal to the specified value.

#### Remarks
This method is not recursive.

#### Parameters

#### value `System.String`

The value to search for

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadTreeNode` A RadTreeNode whose Value property equals to the specified argument. Null (Nothing) is returned when no matching node is found.

###  FindNodeByAttribute

Searches the nodes in the collection for a RadTreeNode which contains the specified attribute and attribute value.

#### Remarks
This method is not recursive.

#### Parameters

#### attributeName `System.String`

The name of the target attribute.

#### attributeValue `System.String`

The value of the target attribute

#### Returns

`Telerik.Web.UI.RadTreeNode` The RadTreeNode that matches the specified arguments. Null (Nothing) is returned if no node is found.

###  FindNode

Returns  the first RadTreeNode 
            that matches the conditions defined by the specified predicate.
            The predicate should returns a boolean value.

#### Parameters

#### match `System.Predicate{Telerik.Web.UI.RadTreeNode}`

The Predicate <> that defines the conditions of the element to search for.

#### Returns

`Telerik.Web.UI.RadTreeNode` 

###  SetOwner

#### Returns

`System.Void` 

###  AddItemToParentControls

#### Returns

`System.Void` 

