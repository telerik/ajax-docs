---
title: Telerik.Charting.Styles.ShadowStyleChart
page_title: Telerik.Charting.Styles.ShadowStyleChart
description: Telerik.Charting.Styles.ShadowStyleChart
---

# Telerik.Charting.Styles.ShadowStyleChart

Common shadow settings

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.Styles.ShadowStyle : ICloneable
* Telerik.Charting.Styles.ShadowStyleChart

## Properties

###  Blur `Single`

Specifies the shadow blur property

###  Color `Color`

Specifies the shadow color property

###  Distance `Single`

Specifies the shadow distance property

###  Position `ShadowPosition`

Specifies the shadow position property

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

###  SetShadowBlur

Sets blur for all chart elements

#### Parameters

#### blur `System.Single`

Blur to set

#### Returns

`System.Void` 

###  SetShadowPosition

Sets position for all chart elements

#### Parameters

#### position `Telerik.Charting.Styles.ShadowPosition`

Position to set

#### Returns

`System.Void` 

###  SetShadowDistance

Sets distance for all chart elements

#### Parameters

#### distance `System.Single`

Distance to set

#### Returns

`System.Void` 

###  SetShadowColor

Sets color for all chart elements

#### Parameters

#### color `System.Drawing.Color`

Color to set

#### Returns

`System.Void` 

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

