---
title: Telerik.Charting.ActiveRegion
page_title: Telerik.Charting.ActiveRegion
description: Telerik.Charting.ActiveRegion
---

# Telerik.Charting.ActiveRegion

Represents the active region of the chart element/item.

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject
* Telerik.Charting.ActiveRegion

## Properties

###  Parent `Object`

Reference to the parent.

###  Region `GraphicsPath`

Define a graphic path

###  Url `String`

URL

###  Tooltip `String`

Tooltip

###  Attributes `String`

Attributes

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  ViewState `StateBag`

Sate bag to store view state content

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

###  GoToUrl

Opens a web browser to the specified URL

#### Returns

`System.Void` 

###  IsEmpty

Returns true if ActiveRegion contains no data

#### Returns

`System.Boolean` 

###  GetActiveRegions

Determine on which elements(if its visually intersect) of chart click occur

#### Parameters

#### point `System.Drawing.PointF`

Click coordinates

#### container `Telerik.Charting.IContainer`

Container object

#### Returns

`System.Collections.Generic.List`1` Active region object collection

###  HasClickEvent

Has click event or not

#### Returns

`System.Boolean` 

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

