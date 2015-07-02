---
title: Telerik.Web.UI.RadSchedulerContextMenuCollection
page_title: Telerik.Web.UI.RadSchedulerContextMenuCollection
description: Telerik.Web.UI.RadSchedulerContextMenuCollection
---

# Telerik.Web.UI.RadSchedulerContextMenuCollection

Provides a collection container that enables RadScheduler to maintain a list of its RadSchedulerContextMenus.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.UI.RadSchedulerContextMenuCollection

## Properties

###  Item `RadSchedulerContextMenu`

Gets a reference to the RadSchedulerContextMenu at the specified index location in the
            RadSchedulerContextMenuCollection object.

## Methods

###  Add

Adds the specified RadSchedulerContextMenu object to the collection

#### Parameters

#### target `Telerik.Web.UI.RadSchedulerContextMenu`

The RadSchedulerContextMenu to add to the collection

#### Returns

`System.Void` 

###  Contains

Determines whether the specified RadSchedulerContextMenu is in the parent
            	RadScheduler's RadSchedulerContextMenuCollection object.

#### Parameters

#### target `Telerik.Web.UI.RadSchedulerContextMenu`

The RadSchedulerContextMenu to search for in the collection

#### Returns

`System.Boolean` true if the specified RadSchedulerContextMenu exists in
            	the collection; otherwise, false.

###  CopyTo

Copies the RadSchedulerContextMenu instances stored in the
            	RadSchedulerContextMenuCollection
            	object to an System.Array object, beginning at the specified index location in the System.Array.

#### Parameters

#### array `Telerik.Web.UI.RadSchedulerContextMenu`

The System.Array to copy the RadSchedulerContextMenu instances to.

#### index `System.Int32`

The zero-based relative index in array where copying begins

#### Returns

`System.Void` 

###  AddRange

Appends the specified array of  objects to the end of the 
            current .

#### Parameters

#### contextMenus `System.Collections.Generic.IEnumerable{Telerik.Web.UI.RadSchedulerContextMenu}`

The array of  to append to the end of the current 
            	.

#### Returns

`System.Void` 

###  IndexOf

Retrieves the index of a specified RadSchedulerContextMenu object in the collection.

#### Parameters

#### target `Telerik.Web.UI.RadSchedulerContextMenu`

The RadSchedulerContextMenu
            	for which the index is returned.

#### Returns

`System.Int32` The index of the specified RadSchedulerContextMenu
            	instance. If the RadSchedulerContextMenu is not
            	currently a member of the collection, it returns -1.

###  Insert

Inserts the specified RadSchedulerContextMenu object
            	to the collection at the specified index location.

#### Parameters

#### index `System.Int32`

The location in the array at which to add the RadSchedulerContextMenu instance.

#### target `Telerik.Web.UI.RadSchedulerContextMenu`

The RadSchedulerContextMenu to add to the collection

#### Returns

`System.Void` 

###  Remove

Removes the specified RadSchedulerContextMenu
            	from the parent RadScheduler's RadSchedulerContextMenuCollection
            	object.

#### Remarks
To remove a control from an index location, use the RemoveAt method.

#### Parameters

#### target `Telerik.Web.UI.RadSchedulerContextMenu`

The RadSchedulerContextMenu to be removed

#### Returns

`System.Void` 

###  RemoveAt

Removes a child RadSchedulerContextMenu, at the
            	specified index location, from the RadSchedulerContextMenuCollection
            	object.

#### Parameters

#### index `System.Int32`

The ordinal index of the RadSchedulerContextMenu
            	to be removed from the collection.

#### Returns

`System.Void` 

