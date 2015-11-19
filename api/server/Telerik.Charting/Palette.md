---
title: Telerik.Charting.Palette
page_title: Telerik.Charting.Palette
description: Telerik.Charting.Palette
---

# Telerik.Charting.Palette

Series color palette. Used for an automatic series items colors assignment

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.Palette : ICloneable

## Properties

###  Item `PaletteItem`

Gets and sets Palette item at specified index

###  Items `PaletteItem`

Gets Palette Items Collection

###  Name `String`

Specifies the palette name

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  ViewState `StateBag`

Sate bag to store view state content

## Methods

###  FillItemsCollectionFromTwoArrays

Fill items collection from two color arrays

#### Parameters

#### mainColors `System.Drawing.Color`

Main colors of items

#### secondColors `System.Drawing.Color`

Second color of items

#### Returns

`System.Void` 

###  GetPaletteItem

Gets palette item with specified index

#### Parameters

#### index `System.Int32`

Index where palette item should be get

#### Returns

`Telerik.Charting.PaletteItem` Palette item

###  ToString

Gets string representation

#### Returns

`System.String` String representation

###  Clone

Clone this object

#### Returns

`System.Object` New instance with the same fields as this one

###  TrackViewState

Track ViewState

#### Returns

`System.Void` 

###  LoadViewState

Load data from ViewState

#### Parameters

#### savedState `System.Object`

ViewState data

#### Returns

`System.Void` 

###  SaveViewState

Save data into ViewState

#### Returns

`System.Object` Saved data

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

