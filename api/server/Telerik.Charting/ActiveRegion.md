---
title: Telerik.Charting.ActiveRegion
page_title: Telerik.Charting.ActiveRegion
description: Telerik.Charting.ActiveRegion
---

# Telerik.Charting.ActiveRegion

Represents the active region of the chart element/item.

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.ActiveRegion

## Properties

###  Attributes `String`

Attributes

###  Parent `Object`

Reference to the parent.

###  Region `GraphicsPath`

Define a graphic path

###  Tooltip `String`

Tooltip

###  Url `String`

URL

###  ViewState `StateBag`

Sate bag to store view state content

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

## Methods

###  CheckPoint

Checks whether point lies inside region

#### Parameters

#### point `System.Drawing.PointF`

The point.

#### onclick `System.Boolean`

if set to true [onclick].

#### Returns

`System.Boolean` 

###  CheckPoint

Checks whether point lies inside region

#### Parameters

#### point `System.Drawing.PointF`

The point.

#### Returns

`System.Boolean` 

###  CloneState

Makes a view state clone

#### Returns

`System.Web.UI.StateBag` StateBag

###  GetActiveRegions

Determine on which elements(if its visually intersect) of chart click occur

#### Parameters

#### point `System.Drawing.PointF`

Click coordinates

#### container `Telerik.Charting.IContainer`

Container object

#### Returns

`System.Collections.Generic.List`1` Active region object collection

###  GoToUrl

Opens a web browser to the specified URL

#### Returns

`System.Void` 

###  HasClickEvent

Has click event or not

#### Returns

`System.Boolean` 

###  IsEmpty

Returns true if ActiveRegion contains no data

#### Returns

`System.Boolean` 

###  LoadViewState

Loads data from a view state

#### Parameters

#### state `System.Object`

View state to load data from

#### Returns

`System.Void` 

###  OnClick

Called after a Click event

#### Returns

`System.Void` 

###  OnClick

Called when [click].

#### Parameters

#### sender `System.Object`

The sender.

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

