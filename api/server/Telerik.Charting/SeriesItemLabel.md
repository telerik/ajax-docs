---
title: Telerik.Charting.SeriesItemLabel
page_title: Telerik.Charting.SeriesItemLabel
description: Telerik.Charting.SeriesItemLabel
---

# Telerik.Charting.SeriesItemLabel

Series item label

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.RenderedObject : IOrdering
* Telerik.Charting.LayoutElement
* Telerik.Charting.ChartBaseLabel : IActiveRegion, ICloneable, IContainer
* Telerik.Charting.SeriesItemLabel

## Properties

###  ActiveRegion `ActiveRegion`

Gets and sets Active region

###  Appearance `StyleSeriesItemLabel`

Visualization and design properties

###  ConnectionMidPoint `PointF`

Center of label to connect to

###  ConnectionPoint `PointF`

Connection point for label

###  Container `IContainer`

Link to container element

###  Marker `ChartMarker`

Graphic marker of label

###  NextPosition `Int32`

Gets a next free order position

###  OrderList `List`1`

List, that represent the render order for taken up elements

###  Parent `Object`

Gets and sets Parent element

###  PlacementDirection `PlacementDirection`

Gets and sets Direction of label position in auto mode

###  TextBlock `TextBlock`

ChartLabel TextBlock

###  ViewState `StateBag`

Sate bag to store view state content

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  Visible `Boolean`

Gets and sets label's visibility

## Methods

###  Add

Add element at the end of list

#### Parameters

#### element `Telerik.Charting.IOrdering`

Element

#### Returns

`System.Void` 

###  Adjust

Moves label inside PlotArea

#### Parameters

#### plotArea `Telerik.Charting.ChartPlotArea`

PlotArea

#### Returns

`System.Void` 

###  AdjustLabelConnectionPointForPie

Relocate connection point for pie series

#### Parameters

#### rotationAngle `System.Double`

Angle of  pie part

#### connectionPoint `System.Drawing.PointF`

Connection point

#### Returns

`System.Drawing.PointF` Corrected connection point

###  AdjustPositionByPlotArea

Move part of label in PlotArea

#### Parameters

#### plotArea `Telerik.Charting.ChartPlotArea`

PlotArea to move in

#### side `System.Int32`

Side of label which is not in PlotArea

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

###  CalculateLayout

Calculate position

#### Parameters

#### locationPoint `System.Drawing.PointF`

Location point

#### connectionPoint `System.Drawing.PointF`

Connection point

#### showLabelConnectors `System.Boolean`

Visibilit of label connectors

#### engine `Telerik.Charting.RenderEngine`

RenderEngine of chart

#### Returns

`System.Void` 

###  CalculatePosition

Calculates position

#### Parameters

#### renderEngine `Telerik.Charting.RenderEngine`

RenderEngine of chart

#### Returns

`System.Void` 

###  CalculatePosition

Calculates element position in container

#### Parameters

#### containerDimensions `Telerik.Charting.Styles.ISizesAndPaddings`

Rendering container dimensions

#### Returns

`System.Void` 

###  CalculatePosition

Calculates element position. Makes an additional check for a container object type

#### Parameters

#### renderEngine `Telerik.Charting.RenderEngine`

#### Returns

`System.Void` 

###  CheckPlotAreaIntersection

Checks if label intersect bounds of PlotArea

#### Parameters

#### plotArea `Telerik.Charting.ChartPlotArea`

PlotArea for checking

#### Returns

`System.Int32` Whether label intersect bounds of PlotArea

###  Clone

Clone this object

#### Returns

`System.Object` Create new instance of SeriesItemLabel class with the same fields as this object

###  Clone

Clone this object

#### Returns

`System.Object` New instance of ChartBaseLabel class with the same fields as this object

###  CloneState

Makes a view state clone

#### Returns

`System.Web.UI.StateBag` StateBag

###  Dispose

Releases unmanaged and - optionally - managed resources

#### Parameters

#### disposing `System.Boolean`

true to release both managed and unmanaged resources; false to release only unmanaged resources.

#### Returns

`System.Void` 

###  Dispose

Releases unmanaged and - optionally - managed resources

#### Parameters

#### disposing `System.Boolean`

true to release both managed and unmanaged resources; false to release only unmanaged resources.

#### Returns

`System.Void` 

###  GetOffset

Gets element offset

#### Parameters

#### oelement `System.Object`

Element

#### calcMethod `Telerik.Charting.LayoutElement.OffsetCalculationDelegate`

Offset calculation method delegate (left, right, top, bottom)

#### Returns

`System.Single` Offset value

###  GetOffsetBottom

Gets bottom offset

#### Parameters

#### element `System.Object`

Element to get an offset of

#### Returns

`System.Single` Offset value

###  GetOffsetLeft

Gets left offset

#### Parameters

#### oelement `System.Object`

Element to get an offset of

#### Returns

`System.Single` Offset value

###  GetOffsetRight

Gets right offset

#### Parameters

#### element `System.Object`

Element to get an offset of

#### Returns

`System.Single` Offset value

###  GetOffsetTop

Gets top offset

#### Parameters

#### element `System.Object`

Element to get an offset of

#### Returns

`System.Single` Offset value

###  GetOrder

Gets elements order position

#### Parameters

#### element `Telerik.Charting.IOrdering`

Element

#### Returns

`System.Int32` 

###  GetOrder

Get this elements order position in container

#### Returns

`System.Int32` 

###  Insert

Insert element at specific position in list

#### Parameters

#### order `System.Int32`

Position

#### element `Telerik.Charting.IOrdering`

Element

#### Returns

`System.Void` 

###  IsVisible

Visibility of label

#### Parameters

#### series `Telerik.Charting.ChartSeries`

Series to which label belongs

#### Returns

`System.Boolean` Visibility of label

###  IsVisible

Gets whether Label is real visible

#### Returns

`System.Boolean` Label's visibility

###  LoadViewState

Load ViewState

#### Parameters

#### savedState `System.Object`

ViewState with data

#### Returns

`System.Void` 

###  LoadViewState

Loads data from a view state

#### Parameters

#### savedState `System.Object`

Views state to load from

#### Returns

`System.Void` 

###  LoadViewState

Loads data from a view state

#### Parameters

#### state `System.Object`

View state to load data from

#### Returns

`System.Void` 

###  Measure

Measure label

#### Parameters

#### renderEngine `Telerik.Charting.RenderEngine`

Render Engine of chart

#### Returns

`System.Drawing.SizeF` Calculated size of Label

###  OnRender

Called after rendering

#### Returns

`System.Void` 

###  ReIndex

Re-index order list

#### Returns

`System.Void` 

###  Remove

Remove  element from list

#### Parameters

#### element `Telerik.Charting.IOrdering`

Element

#### Returns

`System.Void` 

###  Remove

Remove this  element from  render order list

#### Returns

`System.Void` 

###  RemoveAt

Remove  element from list by it's index

#### Parameters

#### index `System.Int32`

Position

#### Returns

`System.Void` 

###  SaveViewState

Save to ViewState

#### Returns

`System.Object` Saved data

###  SaveViewState

Saves settings to a view state

#### Returns

`System.Object` Saved view state

###  SaveViewState

Saves object data to a view state

#### Returns

`System.Object` Saved view state object

###  SendBackward

Send element at one step back in the render order list

#### Returns

`System.Void` 

###  SendToBack

Send element at the end of render order list

#### Returns

`System.Void` 

###  SetDirty

Sets the item dirty state

#### Returns

`System.Void` 

###  SetInsideCoordinates

Set label inside item

#### Parameters

#### rect `System.Drawing.RectangleF`

Item rectangle

#### Returns

`System.Void` 

###  SetOrder

Set this object in new render order position

#### Parameters

#### index `System.Int32`

New position

#### Returns

`System.Void` 

###  SetOutsideCoordinates

Set label outside item

#### Parameters

#### rect `System.Drawing.RectangleF`

Item rectangle

#### isAuto `System.Boolean`

If Location is auto(Location - Auto, Outside, Inside)

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

Track ViewState

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

