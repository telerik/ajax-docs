---
title: Telerik.Charting.Styles.Position
page_title: Telerik.Charting.Styles.Position
description: Telerik.Charting.Styles.Position
---

# Telerik.Charting.Styles.Position

Represents the element position in the container

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.Styles.Position : ICloneable

## Properties

###  AlignedPosition `AlignedPositions`

Specifies aligned position in comprehensive figure

###  Auto `Boolean`

Automatic positioning

###  Copy `Position`

Gets and sets copy of positions

###  GlobalX `Single`

Gets and sets X calculated position used for speed optimization

###  GlobalY `Single`

Gets and sets Y calculated position used for speed optimization

###  IsBottom `Boolean`

Defines if position is Bottom (Bottom, BottomLeft, BottomRight)

###  IsLeft `Boolean`

Defines if position is Left (Left, BottomLeft, TopLeft)

###  IsNone `Boolean`

Defines if position is None

###  IsRight `Boolean`

Defines if position is Right (Right, TopRight, BottomRight)

###  IsSetGlobal `Boolean`

Defines whether position coordinates were already calculated

###  IsTop `Boolean`

Defines if position is Top (Top, TopLeft, TopRight, None)

###  Item `Object`

Gets value of property by name

###  ViewState `StateBag`

Sate bag to store view state content

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  X `Single`

Specifies the X coordinate of the figure position

###  Y `Single`

Specifies the Y coordinate of the figure position

## Methods

###  Clone

Clone this object

#### Returns

`System.Object` Cloned object

###  CloneState

Makes a view state clone

#### Returns

`System.Web.UI.StateBag` StateBag

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

###  ResetGlobal

Resets the cached position

#### Returns

`System.Void` 

###  ResetX

Reset X coordinate to default

#### Returns

`System.Void` 

###  ResetY

Reset Y coordinate to default

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

###  SetPositionForAutoLayout

Aligned Positions correction for AutoLayout

#### Returns

`System.Void` 

###  ShouldSerializeX

Manages design-time serialization of X

#### Returns

`System.Boolean` True if value should be serialized

###  ShouldSerializeY

Manages design-time serialization of Y

#### Returns

`System.Boolean` True if value should be serialized

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

