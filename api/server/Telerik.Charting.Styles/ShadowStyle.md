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

###  Blur `Single`

Specifies the shadow blur property

###  Color `Color`

Specifies the shadow color property

###  ColorOpacity `Color`

The main color opacity coefficient

###  Distance `Single`

Specifies the shadow distance property

###  Position `ShadowPosition`

Specifies the shadow position property

###  ViewState `StateBag`

Sate bag to store view state content

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

## Methods

###  Clone

Clone this object

#### Returns

`System.Object` New instance with the same fields as this one

###  CloneState

Makes a view state clone

#### Returns

`System.Web.UI.StateBag` StateBag

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

###  LoadViewState

Loads data from a view state

#### Parameters

#### state `System.Object`

View state to load data from

#### Returns

`System.Void` 

###  Reset

Reset to default settings

#### Returns

`System.Void` 

###  SaveViewState

Saves object data to a view state

#### Returns

`System.Object` Saved view state object

###  SetDirty

Sets the item dirty state

#### Returns

`System.Void` 

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

###  TrackViewState

Tracks view state changes

#### Returns

`System.Void` 

