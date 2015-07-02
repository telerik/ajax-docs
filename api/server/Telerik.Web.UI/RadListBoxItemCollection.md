---
title: Telerik.Web.UI.RadListBoxItemCollection
page_title: Telerik.Web.UI.RadListBoxItemCollection
description: Telerik.Web.UI.RadListBoxItemCollection
---

# Telerik.Web.UI.RadListBoxItemCollection

Represents a collection of Telerik.Web.UI.RadListBoxItem objects in a Telerik.Web.UI.RadListBox control.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.UI.ControlItemCollection
* Telerik.Web.UI.RadListBoxItemCollection

## Properties

###  Item `RadListBoxItem`

Gets or sets the  at the specified index.

## Methods

###  Add

Appends an item to the collection.

#### Parameters

#### item `Telerik.Web.UI.RadListBoxItem`

The item to add to the collection.

#### Returns

`System.Void` 

###  Add

Appends an item to the collection.

#### Parameters

#### text `System.String`

The text of the new item.

#### Returns

`System.Void` 

###  Insert

Inserts an item to the collection at the specified index.

#### Parameters

#### index `System.Int32`

The zero-based index at which  should be inserted.

#### item `Telerik.Web.UI.RadListBoxItem`

The item to insert into the collection.

#### Returns

`System.Void` 

###  Insert

Inserts an item to the collection at the specified index.

#### Parameters

#### index `System.Int32`

The zero-based index location at which to insert the RadListBoxItem.

#### text `System.String`

The text of the new item.

#### Returns

`System.Void` 

###  FindAll

Finds all items mathcing the specified criteria.

#### Parameters

#### match `System.Predicate{Telerik.Web.UI.RadListBoxItem}`

The delegate which determines whether an item matches the search criteria.

#### Returns

`System.Collections.Generic.IList`1` 

###  Remove

Removes the specified item from the collection.

#### Parameters

#### item `Telerik.Web.UI.RadListBoxItem`

The item to remove from the collection.

#### Returns

`System.Void` 

###  Sort

Sort the items from RadListBoxItemCollection.

#### Returns

`System.Void` 

###  Sort

Sort the items from RadListBoxItemCollection.

#### Parameters

#### comparer `System.Collections.IComparer`

An object from IComparer interface.

#### Returns

`System.Void` 

###  Sort

Sort the items from RadListBoxItemCollection.

#### Returns

`System.Void` 

