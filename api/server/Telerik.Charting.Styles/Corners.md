---
title: Telerik.Charting.Styles.Corners
page_title: Telerik.Charting.Styles.Corners
description: Telerik.Charting.Styles.Corners
---

# Telerik.Charting.Styles.Corners

Sets the edge type of rectangular shapes.

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.Styles.Corners

## Properties

###  BottomLeft `CornerType`

Gets and sets the type of the bottom left corner of the rectangular shape.

###  BottomRight `CornerType`

Gets and sets the type of the bottom right corner of the rectangular shape.

###  IsRectangle `Boolean`

Check whether all corners are of Rectangle type.

###  RoundSize `Int32`

Gets and sets the round size of the corner.

###  TopLeft `CornerType`

Gets and sets the type of the top left corner of the rectangular shape.

###  TopRight `CornerType`

Gets and sets the type of the top right corner of the rectangular shape.

###  ViewState `StateBag`

Sate bag to store view state content

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

## Methods

###  Clone

Clone this object

#### Returns

`System.Object` New instance of Corners type

###  CloneState

Makes a view state clone

#### Returns

`System.Web.UI.StateBag` StateBag

###  CopyFrom

Copy fields from specified object

#### Parameters

#### sourceCorners `Telerik.Charting.Styles.Corners`

Object to copy from

#### Returns

`System.Void` 

###  Equals

Compare two objects of Corners type

#### Parameters

#### obj `System.Object`

Object to compare with

#### Returns

`System.Boolean` Whether objects equal

###  GetHashCode

Gets  HashCode

#### Returns

`System.Int32` HashCode

###  LoadViewState

Loads data from a view state

#### Parameters

#### state `System.Object`

View state to load data from

#### Returns

`System.Void` 

###  op_Implicit

Implicitly creates a Corners from the specified string.

#### Parameters

#### value `System.String`

The string to parse

#### Returns

`Telerik.Charting.Styles.Corners` Object of corners type

###  Parse

Converts the specified string to Corners.

#### Parameters

#### value `System.String`

The string to convert.

#### Returns

`Telerik.Charting.Styles.Corners` Corners that represents the specified string.

###  Parse

Converts the specified string to a Corners.

#### Parameters

#### value `System.String`

The string to convert.

#### culture `System.Globalization.CultureInfo`

CultureInfo used

#### Returns

`Telerik.Charting.Styles.Corners` Object of corners type

###  Reset

Reset all settings to default

#### Returns

`System.Void` 

###  SaveViewState

Saves object data to a view state

#### Returns

`System.Object` Saved view state object

###  SetCornersType

Set specified type for all corners

#### Parameters

#### cornerType `Telerik.Charting.Styles.CornerType`

Type of corners

#### Returns

`System.Void` 

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

