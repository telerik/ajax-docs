---
title: Telerik.Charting.ChartMarkedZone
page_title: Telerik.Charting.ChartMarkedZone
description: Telerik.Charting.ChartMarkedZone
---

# Telerik.Charting.ChartMarkedZone

Class describe a Marked zone functionality

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.RenderedObject : IOrdering
* Telerik.Charting.ChartMarkedZone

## Properties

###  Visible `Boolean`

Visibility

###  Label `ChartLabel`

Marked zone label

###  Appearance `StyleMarkedZone`

Appearance properties

###  Name `String`

Marked zone name

###  YAxisType `ChartYAxisType`

Marked zone Y Axis type

###  ValueStartX `Double`

Marker start position X

###  ValueEndX `Double`

Marker end position X

###  ValueStartY `Double`

Marker start position Y

###  ValueEndY `Double`

Marker end position Y

###  Container `IContainer`

Link to container element

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  ViewState `StateBag`

Sate bag to store view state content

## Methods

###  TrackViewState

Tracking ViewState for Marked zone object

#### Returns

`System.Void` 

###  LoadViewState

Loading ViewState data into Marked zone object

#### Returns

`System.Void` 

###  SaveViewState

Saving Marked zone object into ViewState

#### Returns

`System.Object` 

###  ToString

Marked zone to String

#### Returns

`System.String` Marked zone name

###  GetZoneType

Define and return a marked zone type

#### Returns

`Telerik.Charting.MarkedZoneType` Marked zone type

###  Dispose

Releases unmanaged and - optionally - managed resources

#### Parameters

#### disposing `System.Boolean`

true to release both managed and unmanaged resources; false to release only unmanaged resources.

#### Returns

`System.Void` 

###  GetOrder

Get this elements order position in container

#### Returns

`System.Int32` 

###  SetOrder

Set this object in new render order position

#### Parameters

#### index `System.Int32`

New position

#### Returns

`System.Void` 

###  Remove

Remove this  element from  render order list

#### Returns

`System.Void` 

###  BringForward

Send element at one step forward in the render order list

#### Returns

`System.Void` 

###  BringToFront

Set element at the first position in render order list

#### Returns

`System.Void` 

###  SendBackward

Send element at one step back in the render order list

#### Returns

`System.Void` 

###  SendToBack

Send element at the end of render order list

#### Returns

`System.Void` 

###  OnRender

Called after rendering

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

