---
title: Telerik.Charting.Styles.PositionTopRight
page_title: Telerik.Charting.Styles.PositionTopRight
description: Telerik.Charting.Styles.PositionTopRight
---

# Telerik.Charting.Styles.PositionTopRight

Specific Position object with predefined AlignedPosition.TopRight

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject
* Telerik.Charting.Styles.Position
* Telerik.Charting.Styles.PositionTopRight

## Properties

###  AlignedPosition `AlignedPositions`

Specifies aligned position in comprehensive figure

###  IsTop `Boolean`

Defines if position is Top (Top, TopLeft, TopRight, None)

###  IsBottom `Boolean`

Defines if position is Bottom (Bottom, BottomLeft, BottomRight)

###  IsLeft `Boolean`

Defines if position is Left (Left, BottomLeft, TopLeft)

###  IsRight `Boolean`

Defines if position is Right (Right, TopRight, BottomRight)

###  IsNone `Boolean`

Defines if position is None

###  Copy `Position`

Gets and sets copy of positions

###  Auto `Boolean`

Automatic positioning

###  AlignedPosition `AlignedPositions`

Specifies aligned position in comprehensive figure

###  X `Single`

Specifies the X coordinate of the figure position

###  Y `Single`

Specifies the Y coordinate of the figure position

###  Item `Object`

Gets value of property by name

###  GlobalX `Single`

Gets and sets X calculated position used for speed optimization

###  GlobalY `Single`

Gets and sets Y calculated position used for speed optimization

###  IsSetGlobal `Boolean`

Defines whether position coordinates were already calculated

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  ViewState `StateBag`

Sate bag to store view state content

## Methods

###  Reset

Reset to default settings

#### Returns

`System.Void` 

###  ShouldSerializeX

Manages design-time serialization of X

#### Returns

`System.Boolean` True if value should be serialized

###  ResetX

Reset X coordinate to default

#### Returns

`System.Void` 

###  ShouldSerializeY

Manages design-time serialization of Y

#### Returns

`System.Boolean` True if value should be serialized

###  ResetY

Reset Y coordinate to default

#### Returns

`System.Void` 

###  Reset

Reset to default settings

#### Returns

`System.Void` 

###  ResetGlobal

Resets the cached position

#### Returns

`System.Void` 

###  SetPositionForAutoLayout

Aligned Positions correction for AutoLayout

#### Returns

`System.Void` 

###  Equals

Determines whether the specified System.Object is equal to the current System.Object.

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

`System.Object` Cloned object

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

