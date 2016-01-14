---
title: Telerik.Charting.PaletteItem
page_title: Telerik.Charting.PaletteItem
description: Telerik.Charting.PaletteItem
---

# Telerik.Charting.PaletteItem

Palette item

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.PaletteItem : ICloneable

## Properties

###  AdditionalColors `ColorBlend`

Defines arrays of colors and positions used for interpolating color blending

###  MainColor `Color`

Specifies the main color for palette item

###  Name `String`

Specifies the name for palette item

###  SecondColor `Color`

Specifies the second color for palette item

###  ViewState `StateBag`

Sate bag to store view state content

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

## Methods

###  Clone

Clone this object

#### Returns

`System.Object` New instance with fields equal to these ones

###  CloneState

Makes a view state clone

#### Returns

`System.Web.UI.StateBag` StateBag

###  LoadViewState

Load data from ViewState

#### Parameters

#### savedState `System.Object`

ViewState with data

#### Returns

`System.Void` 

###  LoadViewState

Loads data from a view state

#### Parameters

#### state `System.Object`

View state to load data from

#### Returns

`System.Void` 

###  Reset

Reset all settings to default

#### Returns

`System.Void` 

###  SaveViewState

Save data into ViewState

#### Returns

`System.Object` Saved data

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

###  ToString

Gets string representation

#### Returns

`System.String` String representation

###  TrackViewState

Track ViewState

#### Returns

`System.Void` 

###  TrackViewState

Tracks view state changes

#### Returns

`System.Void` 

