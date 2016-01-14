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

###  Line `LineStyle`

Break line appearance settings

###  LineStyle `ScaleBreakLineType`

Break line's appearance settings

###  MaxCount `Int32`

Max scale breaks count

###  Parent `ChartAxis`

Parent element reference (ChartAxis)

###  Segments `AxisSegmentCollection`

Segments collection. Used with ScaleBreak feature enabled

###  ValueTolerance `Byte`

Value tolerance in percents

###  ViewState `StateBag`

Sate bag to store view state content

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  Width `Int32`

Space width between two break lines

## Methods

###  CloneState

Makes a view state clone

#### Returns

`System.Web.UI.StateBag` StateBag

###  CreateScaleBreakLine

Gets the scale break line

#### Parameters

#### length `System.Double`

Line length

#### isHorizontal `System.Boolean`

Is series orientation horizontal (true) or vertical (false)

#### Returns

`System.Drawing.Drawing2D.GraphicsPath` Graphics path with an appropriate line inside

###  LoadViewState

Loads settings from a view state

#### Parameters

#### savedState `System.Object`

Saved state bag

#### Returns

`System.Void` 

###  LoadViewState

Loads data from a view state

#### Parameters

#### state `System.Object`

View state to load data from

#### Returns

`System.Void` 

###  SaveViewState

Saves settings to a view state

#### Returns

`System.Object` Saved state bag

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

Tracking view state changes

#### Returns

`System.Void` 

###  TrackViewState

Tracks view state changes

#### Returns

`System.Void` 

