---
title: Telerik.Web.UI.RadPageViewCollection
page_title: Telerik.Web.UI.RadPageViewCollection
description: Telerik.Web.UI.RadPageViewCollection
---

# Telerik.Web.UI.RadPageViewCollection

A collection of Telerik.Web.UI.RadPageView RadPageViewobjects in a
                Telerik.Web.UI.RadMultiPage RadMultiPagecontrol.

#### Remarks
The RadPageViewCollectionclass represents a collection of
                RadPageViewobjects.
            	bullet Use the P:Telerik.Web.UI.RadPageViewCollection.Item(System.Int32) indexerto programmatically retrieve a
                        single RadPageView from the collection, using array notation.
                    Use the Countproperty to determine the total
                        number of RadPageView controls in the collection.
                    Use the M:Telerik.Web.UI.RadPageViewCollection.Add(Telerik.Web.UI.RadPageView) Addmethod to add RadPageView controls to the collection.
                    Use the M:Telerik.Web.UI.RadPageViewCollection.Remove(Telerik.Web.UI.RadPageView) Removemethod to remove RadPageView controls from the
                        collection.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.ControlCollection
* Telerik.Web.UI.RadPageViewCollection

## Properties

###  Item `RadPageView`

Gets the RadPageView at the specified index in the
                collection.

#### Remarks
Use this indexer to get a RadPageView from the collection at
                the specified index, using array notation.

## Methods

###  Add

Appends the specified RadPageView to the collection.

#### Parameters

#### pageView `Telerik.Web.UI.RadPageView`

The RadPageView to append to the collection.

#### Returns

`System.Void` 

###  IndexOf

Determines the index of the specified RadPageView in the collection.

#### Parameters

#### pageView `Telerik.Web.UI.RadPageView`

A RadPageView to search for in the collection.

#### Returns

`System.Int32` The zero-based index position of the specified RadPageView in the
            	collection. If the specified RadPageView is not found in the collection -1 is returned.

###  Insert

Inserts the specified RadPageView object in the current 
            RadPageViewCollection at the specified index location.

#### Parameters

#### index `System.Int32`

The zero-based index location at which to insert the RadPageView.

#### pageView `Telerik.Web.UI.RadPageView`

The RadPageView to insert.

#### Returns

`System.Void` 

###  Remove

Removes the specified RadPageView from the collection.

#### Parameters

#### pageView `Telerik.Web.UI.RadPageView`

The RadPageView to remove from the collection.

#### Returns

`System.Void` 

