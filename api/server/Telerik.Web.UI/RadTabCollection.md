---
title: Telerik.Web.UI.RadTabCollection
page_title: Telerik.Web.UI.RadTabCollection
description: Telerik.Web.UI.RadTabCollection
---

# Telerik.Web.UI.RadTabCollection

A collection of Telerik.Web.UI.RadTab RadTabobjects in a
                Telerik.Web.UI.RadTabStrip RadTabStripcontrol.

#### Remarks
The RadTabCollectionclass represents a collection of
                RadTabobjects.
            	bullet Use the P:Telerik.Web.UI.RadTabCollection.Item(System.Int32) indexerto programmatically retrieve a
                        single RadTab from the collection, using array notation.
                    Use the Countproperty to determine the total
                        number of menu items in the collection.
                    Use the M:Telerik.Web.UI.RadTabCollection.Add(Telerik.Web.UI.RadTab) Addmethod to add tabs in the collection.
                    Use the M:Telerik.Web.UI.RadTabCollection.Remove(Telerik.Web.UI.RadTab) Removemethod to remove tabs from the
                        collection.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.UI.ControlItemCollection
* Telerik.Web.UI.RadTabCollection : IEnumerable`1

## Properties

###  Item `RadTab`

Gets the RadTab object at the specified index in 
            	the current RadTabCollection.

## Methods

###  Add

Appends the specified RadTab object to the end of the current RadTabCollection.

#### Parameters

#### tab `Telerik.Web.UI.RadTab`

The RadTab to append to the end of the current RadTabCollection.

#### Returns

`System.Void` 

###  AddRange

Appends the specified array of RadTab objects to the end of the 
            current RadTabCollection.

#### Parameters

#### tabs `Telerik.Web.UI.RadTab`

The array of RadTab o append to the end of the current 
            RadTabCollection.

#### Returns

`System.Void` 

###  Insert

Inserts the specified RadTab object in the current 
            RadTabCollection at the specified index location.

#### Parameters

#### index `System.Int32`

The zero-based index location at which to insert the RadTab.

#### tab `Telerik.Web.UI.RadTab`

The RadTab to insert.

#### Returns

`System.Void` 

###  IndexOf

Determines the index of the specified RadTab object in the collection.

#### Parameters

#### tab `Telerik.Web.UI.RadTab`

The RadTab to locate.

#### Returns

`System.Int32` The zero-based index of tab within the current RadTabCollection, 
            	if found; otherwise, -1.

###  Contains

Determines whether the specified RadTab object is in the current 
            	RadTabCollection.

#### Parameters

#### tab `Telerik.Web.UI.RadTab`

The RadTab object to find.

#### Returns

`System.Boolean` true if the current collection contains the specified RadTab object; 
            	otherwise, false.

###  Remove

Removes the specified RadTab object from the current
            	RadTabCollection.

#### Parameters

#### tab `Telerik.Web.UI.RadTab`

The RadTab object to remove.

#### Returns

`System.Void` 

###  RemoveAt

Removes the RadTab object at the specified index 
            from the current RadTabCollection.

#### Parameters

#### index `System.Int32`

The zero-based index of the tab to remove.

#### Returns

`System.Void` 

###  FindTabByValue

Searches the RadTabStrip control for the first
                RadTab whose Value property is equal
                to the specified value.

#### Parameters

#### value `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadTab` A RadTab whose Value property is equal to the specifed 
            	value. If a tab is not found, null (Nothing in Visual Basic) is returned.

###  FindTabByValue

Searches the RadTabStrip control for the first
                RadTab whose Value property is equal
                to the specified value.

#### Parameters

#### value `System.String`

The value to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadTab` A RadTab whose Value property is equal to the specifed 
            	value. If a tab is not found, null (Nothing in Visual Basic) is returned.

###  FindTabByText

Searches the RadTabStrip control for the first
                RadTab whose Text property is equal to
                the specified value.

#### Parameters

#### text `System.String`

The value to search for.

#### Returns

`Telerik.Web.UI.RadTab` A RadTab whose Text property is equal
                to the specified value. If a tab is not found, null (Nothing in Visual Basic) is returned.

###  FindTabByText

Searches the RadTabStrip control for the first
                RadTab whose Text property is equal to
                the specified value.

#### Parameters

#### text `System.String`

The value to search for.

#### ignoreCase `System.Boolean`

A Boolean indicating a case-sensitive or insensitive comparison (true indicates a case-insensitive comparison).

#### Returns

`Telerik.Web.UI.RadTab` A RadTab whose Text property is equal
                to the specified value. If a tab is not found, null (Nothing in Visual Basic) is returned.

###  FindTab

Returns  the first RadTab 
            that matches the conditions defined by the specified predicate.
            The predicate should returns a boolean value.

#### Parameters

#### match `System.Predicate{Telerik.Web.UI.RadTab}`

The Predicate <> that defines the conditions of the element to search for.

#### Returns

`Telerik.Web.UI.RadTab` 

