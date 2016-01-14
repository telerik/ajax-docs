---
title: Telerik.Web.UI.RadTreeViewContextMenuCollection
page_title: Telerik.Web.UI.RadTreeViewContextMenuCollection
description: Telerik.Web.UI.RadTreeViewContextMenuCollection
---

# Telerik.Web.UI.RadTreeViewContextMenuCollection

Provides a collection container that enables RadTreeView to maintain a list of its RadTreeViewContextMenus.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.UI.RadTreeViewContextMenuCollection

## Properties

###  Item `RadTreeViewContextMenu`

Gets a reference to the RadTreeViewContextMenu at the specified index location in the
            RadTreeViewContextMenuCollection object.

## Methods

###  Add

Adds the specified RadTreeViewContextMenu object to the collection

#### Parameters

#### target `Telerik.Web.UI.RadTreeViewContextMenu`

The RadTreeViewContextMenu to add to the collection

#### Returns

`System.Void` 

###  AddRange

Appends the specified array of  objects to the end of the 
            current .

#### Parameters

#### contextMenus `System.Collections.Generic.IEnumerable{Telerik.Web.UI.RadTreeViewContextMenu}`

The array of  to append to the end of the current 
            	.

#### Returns

`System.Void` 

###  Contains

Determines whether the specified RadTreeViewContextMenu is in the parent
            	RadTreeView's RadTreeViewContextMenuCollection object.

#### Parameters

#### target `Telerik.Web.UI.RadTreeViewContextMenu`

The RadTreeViewContextMenu to search for in the collection

#### Returns

`System.Boolean` true if the specified RadTreeViewContextMenu exists in
            	the collection; otherwise, false.

###  CopyTo

Copies the RadTreeViewContextMenu instances stored in the
            	RadTreeViewContextMenuCollection
            	object to an System.Array object, beginning at the specified index location in the System.Array.

#### Parameters

#### array `Telerik.Web.UI.RadTreeViewContextMenu`

The System.Array to copy the RadTreeViewContextMenu instances to.

#### index `System.Int32`

The zero-based relative index in array where copying begins

#### Returns

`System.Void` 

###  IndexOf

Retrieves the index of a specified RadTreeViewContextMenu object in the collection.

#### Parameters

#### target `Telerik.Web.UI.RadTreeViewContextMenu`

The RadTreeViewContextMenu
            	for which the index is returned.

#### Returns

`System.Int32` The index of the specified RadTreeViewContextMenu
            	instance. If the RadTreeViewContextMenu is not
            	currently a member of the collection, it returns -1.

###  Insert

Inserts the specified RadTreeViewContextMenu object
            	to the collection at the specified index location.

#### Parameters

#### index `System.Int32`

The location in the array at which to add the RadTreeViewContextMenu instance.

#### target `Telerik.Web.UI.RadTreeViewContextMenu`

The RadTreeViewContextMenu to add to the collection

#### Returns

`System.Void` 

###  Remove

Removes the specified RadTreeViewContextMenu
            	from the parent RadTreeView's RadTreeViewContextMenuCollection
            	object.

#### Remarks
To remove a control from an index location, use the RemoveAt method.

#### Parameters

#### target `Telerik.Web.UI.RadTreeViewContextMenu`

The RadTreeViewContextMenu to be removed

#### Returns

`System.Void` 

###  RemoveAt

Removes a child RadTreeViewContextMenu, at the
            	specified index location, from the RadTreeViewContextMenuCollection
            	object.

#### Parameters

#### index `System.Int32`

The ordinal index of the RadTreeViewContextMenu
            	to be removed from the collection.

#### Returns

`System.Void` 

