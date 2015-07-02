---
title: Telerik.Charting.PaletteItem
page_title: Telerik.Charting.PaletteItem
description: Telerik.Charting.PaletteItem
---

# Telerik.Charting.PaletteItem

Palette item

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject
* Telerik.Charting.PaletteItem

## Properties

###  AdditionalColors `ColorBlend`

Defines arrays of colors and positions used for interpolating color blending

###  MainColor `Color`

Specifies the main color for palette item

###  SecondColor `Color`

Specifies the second color for palette item

###  Name `String`

Specifies the name for palette item

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  ViewState `StateBag`

Sate bag to store view state content

## Methods

###  Reset

Reset all settings to default

#### Returns

`System.Void` 

###  ToString

Gets string representation

#### Returns

`System.String` String representation

###  TrackViewState

Track ViewState

#### Returns

`System.Void` 

###  LoadViewState

Load data from ViewState

#### Parameters

#### savedState `System.Object`

ViewState with data

#### Returns

`System.Void` 

###  SaveViewState

Save data into ViewState

#### Returns

`System.Object` Saved data

###  Clone

Clone this object

#### Returns

`System.Object` New instance with fields equal to these ones

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

