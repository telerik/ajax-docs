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

###  ContainsType

Returns a string value representing the skin to be applied to a given type of control.

#### Parameters

#### skinnableControl `Telerik.Web.ISkinnableControl`

An ISkinnableControl to check the skin for.

#### Returns

`System.String` A string representing the resolved skin.

