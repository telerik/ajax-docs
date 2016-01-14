---
title: Telerik.Web.UI.SplitterItemsCollection
page_title: Telerik.Web.UI.SplitterItemsCollection
description: Telerik.Web.UI.SplitterItemsCollection
---

# Telerik.Web.UI.SplitterItemsCollection

A collection of Telerik.Web.UI.SplitterItem SplitterItemobjects in a
                Telerik.Web.UI.RadSplitter RadSplittercontrol.

#### Remarks
The SplitterItemsCollectionclass represents a collection of
                SplitterItemobjects. The SplitterItemobjects in turn represent 
                panes items within a RadSplittercontrol.bullet Use the P:Telerik.Web.UI.SplitterItemsCollection.Item(System.Int32) indexerto programmatically retrieve a
                        single SplitterItem from the collection, using array notation.
                    Use the Countproperty to determine the total
                        number of panes in the collection.
                    Use the M:System.Web.UI.ControlCollection.Add(System.Web.UI.Control) Addmethod to add panes in the collection.
                    Use the M:System.Web.UI.ControlCollection.Remove(System.Web.UI.Control) Removemethod to remove panes from the
                        collection.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.ControlCollection
* Telerik.Web.UI.SplitterItemsCollection : IStateManager

## Properties

###  Item `SplitterItem`

Gets a SplitterItem at the specified index in the collection.

#### Remarks
Use this indexer to get a SplitterItem from the collection at the
                specified index, using array notation.

## Methods

###  Add

Appends a SplitterItem to the end of the collection.

#### Returns

`System.Void` 

###  Clear

Removes all items from the collection.

#### Remarks
Use the Clear method to remove all items from the collection. The
                Count property is set to 0.

#### Returns

`System.Void` 

###  Contains

Determines whether the collection contains the specified
                SplitterItem.

#### Remarks
Use the Contains method to determine whether the SplitterItem
            specified by the item parameter is in the collection.

#### Parameters

#### item `Telerik.Web.UI.SplitterItem`

A SplitterItem to search for in the collection.

#### Returns

`System.Boolean` true if the collection contains the specified item; otherwise,
            false.

###  IndexOf

Determines the index value that represents the position of the specified
                SplitterItem in the collection.

#### Remarks
Use the IndexOf method to determine the index value of the
            SplitterItem specified by the item parameter in the collection. If an item
            with this criteria is not found in the collection, -1 is returned.

#### Parameters

#### item `Telerik.Web.UI.SplitterItem`

A SplitterItem to search for in the collection.

#### Returns

`System.Int32` The zero-based index position of the specified SplitterItem in the
            collection.

###  Insert

Inserts the specified SplitterItem in the collection at the specified
                index location.

#### Remarks
Use the Insert method to add a SplitterItem to the collection at
            the index specified by the index parameter.

#### Parameters

#### index `System.Int32`

The location in the collection to insert the SplitterItem.

#### item `Telerik.Web.UI.SplitterItem`

The SplitterItem to add to the collection.

#### Returns

`System.Void` 

###  Remove

Removes the specified SplitterItem from the collection.

#### Remarks
Use the Remove method to remove a SplitterItem from the
            collection.

#### Returns

`System.Void` 

###  RemoveAt

Removes the SplitterItem at the specified index from the collection.

#### Remarks
Use the RemoveAt method to remove the SplitterItem at the
                specified index from the collection.

#### Parameters

#### index `System.Int32`

The index of the SplitterItem to remove.

#### Returns

`System.Void` 

