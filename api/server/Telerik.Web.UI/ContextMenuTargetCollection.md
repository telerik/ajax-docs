---
title: Telerik.Web.UI.ContextMenuTargetCollection
page_title: Telerik.Web.UI.ContextMenuTargetCollection
description: Telerik.Web.UI.ContextMenuTargetCollection
---

# Telerik.Web.UI.ContextMenuTargetCollection

Represents a collection of Telerik.Web.UI.ContextMenuTarget objects.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.UI.ContextMenuTargetCollection

## Properties

###  Item `ContextMenuTarget`

Gets the ContextMenuTarget object at the specified index in 
            	the current ContextMenuTargetCollection.

## Methods

###  Add

Appends the specified ContextMenuTarget object to the end of the current ContextMenuTargetCollection.

#### Parameters

#### target `Telerik.Web.UI.ContextMenuTarget`

The ContextMenuTarget to append to the end of the current ContextMenuTargetCollection.

#### Returns

`System.Void` 

###  AddRange

Appends the specified array of ContextMenuTarget objects to the end of the 
            current ContextMenuTargetCollection.

#### Parameters

#### targets `System.Collections.Generic.IEnumerable{Telerik.Web.UI.ContextMenuTarget}`

The array of ContextMenuTarget o append to the end of the current 
            ContextMenuTargetCollection.

#### Returns

`System.Void` 

###  Contains

Determines whether the specified ContextMenuTarget object is in the current 
            	ContextMenuTargetCollection.

#### Parameters

#### target `Telerik.Web.UI.ContextMenuTarget`

The ContextMenuTarget object to find.

#### Returns

`System.Boolean` true if the current collection contains the specified ContextMenuTarget object; 
            	otherwise, false.

###  CopyTo

Copies the contents of the current ContextMenuTargetCollection into the 
            specified array of ContextMenuTarget objects.

#### Parameters

#### array `Telerik.Web.UI.ContextMenuTarget`

The target array.

#### index `System.Int32`

The index to start copying from.

#### Returns

`System.Void` 

###  IndexOf

Determines the index of the specified ContextMenuTarget object in the collection.

#### Parameters

#### target `Telerik.Web.UI.ContextMenuTarget`

The ContextMenuTarget to locate.

#### Returns

`System.Int32` The zero-based index of tab within the current ContextMenuTargetCollection, 
            	if found; otherwise, -1.

###  Insert

Inserts the specified ContextMenuTarget object in the current 
            ContextMenuTargetCollection at the specified index location.

#### Parameters

#### index `System.Int32`

The zero-based index location at which to insert the ContextMenuTarget.

#### target `Telerik.Web.UI.ContextMenuTarget`

The ContextMenuTarget to insert.

#### Returns

`System.Void` 

###  Remove

Removes the specified ContextMenuTarget object from the current
            	ContextMenuTargetCollection.

#### Parameters

#### target `Telerik.Web.UI.ContextMenuTarget`

The ContextMenuTarget object to remove.

#### Returns

`System.Void` 

###  RemoveAt

Removes the ContextMenuTarget object at the specified index 
            from the current ContextMenuTargetCollection.

#### Parameters

#### index `System.Int32`

The zero-based index of the tab to remove.

#### Returns

`System.Void` 

