---
title: Telerik.Charting.Styles.ShadowStyle
page_title: Telerik.Charting.Styles.ShadowStyle
description: Telerik.Charting.Styles.ShadowStyle
---

# Telerik.Charting.Styles.ShadowStyle

Shadow settings

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.Styles.ShadowStyle : ICloneable

## Properties

###  Color `Color`

Specifies the shadow color property

###  ColorOpacity `Color`

The main color opacity coefficient

###  Position `ShadowPosition`

Specifies the shadow position property

###  Blur `Single`

Specifies the shadow blur property

###  Distance `Single`

Specifies the shadow distance property

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  ViewState `StateBag`

Sate bag to store view state content

## Methods

###  Reset

Reset to default settings

#### Returns

`System.Void` 

###  Equals

Comparing of two objects

#### Parameters

#### obj `System.Object`

Object to compare

#### Returns

`System.Boolean` Result of comparing

###  GetHashCode

Gets hash code

#### Returns

`System.Int32` Hash code

###  Clone

Clone this object

#### Returns

`System.Object` New instance with the same fields as this one

###  Telerik.Charting.IChartingStateManager.LoadViewState

Loads data from a view state

#### Parameters

#### state `System.Object`

View state to load data from

#### Returns

`System.Void` 

###  Telerik.Charting.IChartingStateManager.SaveViewState

Saves object data to a view state

#### Returns

`System.Object` Saved view state object

###  Telerik.Charting.IChartingStateManager.TrackViewState

Tracks view state changes

#### Returns

`System.Void` 

###  CloneState

Makes a view state clone

#### Returns

`System.Web.UI.StateBag` StateBag

###  SaveViewState

Saves object data to a view state

#### Returns

`System.Object` Saved view state object

###  TrackViewState

Tracks view state changes

#### Returns

`System.Void` 

###  LoadViewState

Loads data from a view state

#### Parameters

#### state `System.Object`

View state to load data from

#### Returns

`System.Void` 

###  SetDirty

Sets the item dirty state

#### Returns

`System.Void` 

###  ToString

ToString() override. Used in the properties grid to avoid object type showing.

#### Returns

`System.String` Empty string

