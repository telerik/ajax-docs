---
title: Telerik.Charting.ScaleBreak
page_title: Telerik.Charting.ScaleBreak
description: Telerik.Charting.ScaleBreak
---

# Telerik.Charting.ScaleBreak

Y Axis scale break

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.ScaleBreak

## Properties

###  Enabled `Boolean`

Is scale break feature enabled

###  LineStyle `ScaleBreakLineType`

Break line's appearance settings

###  MaxCount `Int32`

Max scale breaks count

###  ValueTolerance `Byte`

Value tolerance in percents

###  Width `Int32`

Space width between two break lines

###  Line `LineStyle`

Break line appearance settings

###  Segments `AxisSegmentCollection`

Segments collection. Used with ScaleBreak feature enabled

###  Parent `ChartAxis`

Parent element reference (ChartAxis)

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  ViewState `StateBag`

Sate bag to store view state content

## Methods

###  TrackViewState

Tracking view state changes

#### Returns

`System.Void` 

###  LoadViewState

Loads settings from a view state

#### Parameters

#### savedState `System.Object`

Saved state bag

#### Returns

`System.Void` 

###  SaveViewState

Saves settings to a view state

#### Returns

`System.Object` Saved state bag

###  CreateScaleBreakLine

Gets the scale break line

#### Parameters

#### length `System.Double`

Line length

#### isHorizontal `System.Boolean`

Is series orientation horizontal (true) or vertical (false)

#### Returns

`System.Drawing.Drawing2D.GraphicsPath` Graphics path with an appropriate line inside

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

