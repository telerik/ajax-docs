---
title: Telerik.Web.UI.TargetControlCollection
page_title: Telerik.Web.UI.TargetControlCollection
description: Telerik.Web.UI.TargetControlCollection
---

# Telerik.Web.UI.TargetControlCollection

A collection of TargetControl instances.

## Inheritance Hierarchy

* System.Object
* System.Web.UI.StateManagedCollection
* Telerik.Web.StronglyTypedStateManagedCollection`1
* Telerik.Web.UI.TargetControlCollection

## Properties

###  Item `ItemType`

ItemType collection indexer.

## Methods

###  Add

Adds a passed Target control reference to the collection.

#### Parameters

#### control `Telerik.Web.UI.TargetControl`

A TargetControl object to add to the collection.

#### Returns

`System.Void` 

###  Add

Adds a TargetControl with the provided string ID to the collection.

#### Parameters

#### id `System.String`

A string representing the control ID.

#### Returns

`System.Void` 

###  Add

Adds a TargetControl with the provided string ID to the collection and sets it a Skin value.

#### Parameters

#### id `System.String`

A string representing the control ID.

#### value `System.String`

A string representing the applied Skin.

#### Returns

`System.Void` 

###  Add

Adds a TargetControl with the provided string ID to the collection and sets it a Skin value.

#### Parameters

#### id `System.String`

A string representing the control ID.

#### value `System.String`

A string representing the applied Skin.

#### enabled `System.Boolean`

A boolean value indicating whether skinning should be enabled.

#### Returns

`System.Void` 

###  Add

Adds a TargetControl to the collection providing the type of RadControls that will be skinned
            along with a string value representing the Skin value.

#### Parameters

#### type `Telerik.Web.UI.ControlTypeToApplySkin`

A ControlTypeToApplySkin value, representing the type of controls that will be skinned.

#### skin `System.String`

A string representing the applied Skin.

#### Returns

`System.Void` 

###  Add

Add an item to the collection

#### Parameters

#### item ``0`

Item to be added to the collection

#### Returns

`System.Void` 

###  AddRange

Adds the items to the end of the collection

#### Parameters

#### items `System.Collections.Generic.IEnumerable{`0}`

Items to be added

#### Returns

`System.Void` 

###  Contains

Determines whether an element is in the collection

#### Parameters

#### item ``0`

The item to locate in the collection

#### Returns

`System.Boolean` true if item is found in the collection; otherwise, false.

###  ContainsType

Returns a string value representing the skin to be applied to a given type of control.

#### Parameters

#### skinnableControl `Telerik.Web.ISkinnableControl`

An ISkinnableControl to check the skin for.

#### Returns

`System.String` A string representing the resolved skin.

###  CopyTo

Copies the array or portion of it to the collection

#### Parameters

#### array ``0`

One-dimensional array that serves as a destination

#### index `System.Int32`

Zero-based index

#### Returns

`System.Void` 

###  IndexOf

Returns the zero-based index of the first occurrence of a value in the collection or in a portion of it.

#### Parameters

#### item ``0`

Target item

#### Returns

`System.Int32` The zero-based index of the first occurrence of item within the entire collection

###  Insert

Inserts an element into the collection at the specified index.

#### Parameters

#### index `System.Int32`

The zero-based index at which item should be inserted.

#### item ``0`

The object to insert.

#### Returns

`System.Void` 

###  Remove

Removes the first occurrence of a specific object from the collection.

#### Parameters

#### item ``0`

The object to remove from the collection

#### Returns

`System.Void` 

###  RemoveAt

Removes the element at the specified index of the collection.

#### Parameters

#### index `System.Int32`

The zero-based index of the element to remove.

#### Returns

`System.Void` 

