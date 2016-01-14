---
title: Telerik.Web.UI.RadSiteMapNodeCollection
page_title: Telerik.Web.UI.RadSiteMapNodeCollection
description: Telerik.Web.UI.RadSiteMapNodeCollection
---

# Telerik.Web.UI.RadSiteMapNodeCollection

Represents a collection of Telerik.Web.UI.RadSiteMapNode objects in a Telerik.Web.UI.RadSiteMap control.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.UI.ControlItemCollection
* Telerik.Web.UI.RadSiteMapNodeCollection : ICollection`1, IEnumerable`1, IList`1

## Properties

###  Item `RadSiteMapNode`

Gets or sets the  at the specified index.

## Methods

###  Add

Appends a node to the collection.

#### Parameters

#### node `Telerik.Web.UI.RadSiteMapNode`

The node to add to the collection.

#### Returns

`System.Void` 

###  AddRange

Appends the specified array of  objects to the end of the 
            current .

#### Parameters

#### nodes `System.Collections.Generic.IEnumerable{Telerik.Web.UI.RadSiteMapNode}`

The array of  to append to the end of the current 
            	.

#### Returns

`System.Void` 

###  FindNode

Returns  the first RadSiteMapNode 
            that matches the conditions defined by the specified predicate.
            The predicate should returns a boolean value.

#### Parameters

#### match `System.Predicate{Telerik.Web.UI.RadSiteMapNode}`

The Predicate <RadSiteMapNode> that defines the conditions of the element to search for.

#### Returns

`Telerik.Web.UI.RadSiteMapNode` 

###  FindNodeByText

Searches all nodes for a RadSiteMapNode with a Text property
            equal to the specified text.

#### Remarks
This method is not recursive.

#### Parameters

#### text `System.String`

The text to search for

#### Returns

`Telerik.Web.UI.RadSiteMapNode` A RadSiteMapNode whose Text property equals to the specified argument.
            Null (Nothing) is returned when no matching node is found.

###  FindNodeByText

Searches all nodes for a RadSiteMapNode with a Text property
            equal to the specified text.

#### Remarks
This method is not recursive.

#### Parameters

#### text `System.String`

The text to search for

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadSiteMapNode` A RadSiteMapNode whose Text property equals to the specified argument
             Null (Nothing) is returned when no matching node is found.

###  Insert

Inserts a node to the collection at the specified index.

#### Parameters

#### index `System.Int32`

The zero-based index at which  should be inserted.

#### node `Telerik.Web.UI.RadSiteMapNode`

The node to insert into the collection.

#### Returns

`System.Void` 

###  Remove

Removes the specified node from the collection.

#### Parameters

#### node `Telerik.Web.UI.RadSiteMapNode`

The node to remove from the collection.

#### Returns

`System.Void` 

