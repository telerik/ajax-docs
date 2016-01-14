---
title: Telerik.Charting.ChartPlotArea
page_title: Telerik.Charting.ChartPlotArea
description: Telerik.Charting.ChartPlotArea
---

# Telerik.Charting.ChartPlotArea

Plot area - series rendering canvas.

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.RenderedObject : IOrdering
* Telerik.Charting.LayoutElement
* Telerik.Charting.ChartPlotArea : IContainer

## Properties

###  Appearance `StylePlotArea`

Style

###  Chart `Chart`

Link to chart object

###  Container `IContainer`

Link to container element

###  DataTable `ChartDataTable`

Table that contain series data

###  EmptySeriesMessage `EmptySeriesMessage`

Specifies empty series message text

###  IntelligentLabelsEnabled `Boolean`

Intelligent labels engine switch

###  MarkedZones `ChartMarkedZonesCollection`

Marked zones collection

###  NextPosition `Int32`

Get a next free order position

###  OrderList `List`1`

List, that is represent the render order for taken up elements

###  Parent `Chart`

Parent element

###  PlotRegionCommon `Region`

Common rendering region

###  PlotRegionYAxisPrimary `Region`

Rendering region for a primary Y Axis series

###  PlotRegionYAxisSecondary `Region`

Rendering region for a secondary Y Axis series

###  PopularValues `PopularCollection`

Popular values collection

###  SeriesLabels `List`1`

Temporary (for rendering process) list of series items labels

###  SeriesOrientation `ChartSeriesOrientation`

Specifies the orientation of chart series on the plot area.

###  ViewState `StateBag`

Sate bag to store view state content

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  Visible `Boolean`

Visibility

###  XAxis `ChartXAxis`

Gets XAxis.

###  YAxis `ChartYAxis`

Primary YAxis.

###  YAxis2 `ChartYAxis`

Secondary YAxis

## Methods

###  Add

Add element at the end of list

#### Parameters

#### element `Telerik.Charting.IOrdering`

Element

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

###  CalculateChartDataTablePlotAreaRelative

Calculate plot area relative data table

#### Parameters

#### renderEngine `Telerik.Charting.RenderEngine`

Instance of RenderEngine object

#### containerWidth `System.Single`

Visual container width

#### containerHeight `System.Single`

Visual container height

#### Returns

`System.Void` 

###  CalculatePosition

Position calculation

#### Parameters

#### renderEngine `Telerik.Charting.RenderEngine`

Instance of RenderEngine object

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

###  ClearAutoPropertiesForAxisItems

Clearing automatic properties for axis items

#### Returns

`System.Void` 

###  CloneState

Makes a view state clone

#### Returns

`System.Web.UI.StateBag` StateBag

###  CreateRectanglesInSeriesLabel

Create rectangles in the series items labels for Intelligent engine

#### Returns

`System.Void` 

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

###  GetBarStart

Return position for starting bars drawing

#### Parameters

#### series `Telerik.Charting.ChartSeries`

Series

#### Returns

`System.Single` Position

###  GetBarStart

Return position for starting bars drawing

#### Parameters

#### series `Telerik.Charting.ChartSeries`

Series

#### displacementOnly `System.Boolean`

Local(true) or global(false)

#### Returns

`System.Single` Position

###  GetBarWidth

Returns the width of the bars according to the number of bar series and overlap ratio between them.

#### Returns

`System.Single` Bar width

###  GetBarWidth

Returns the width of the bars according to the number of bar series and overlap ratio between them.

#### Parameters

#### series `Telerik.Charting.ChartSeries`

Series

#### Returns

`System.Single` Bar width

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

Get elements order position

#### Parameters

#### element `Telerik.Charting.IOrdering`

Element

#### Returns

`System.Int32` 

###  GetOrder

Get this elements order position in container

#### Returns

`System.Int32` 

###  Init

Initialize object properties

#### Returns

`System.Void` 

###  InitializeAxes

Axis initialization

#### Returns

`System.Void` 

###  InitOrderList

Fill order list

#### Returns

`System.Void` 

###  Insert

Insert element at specific position in list

#### Parameters

#### order `System.Int32`

Position

#### element `Telerik.Charting.IOrdering`

Element

#### Returns

`System.Void` 

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

###  OnRender

Called after rendering

#### Returns

`System.Void` 

###  PrepareForScale

Prepare plot area for scale feature

#### Returns

`System.Void` 

###  PrepareForScale

Prepare plot area for scale feature

#### Parameters

#### xScale `System.Single`

X scale coefficient

#### yScale `System.Single`

Y scale coefficient

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

###  Reset

Restore default settings

#### Returns

`System.Void` 

###  ResetRegions

Drop plot area clip regions

#### Returns

`System.Void` 

###  RestoreAfterScale

Restore plot area settings after scaling

#### Returns

`System.Void` 

###  SaveViewState

Save Track ViewState

#### Returns

`System.Object` Object data as array

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

###  SeriesCollection

Series collection on current plot area

#### Returns

`Telerik.Charting.ChartSeriesCollection` Series collection

###  SeriesCollection

Series collection on plot area filtered by Y axis type

#### Parameters

#### chartYAxisType `Telerik.Charting.ChartYAxisType`

#### Returns

`Telerik.Charting.ChartSeriesCollection` Series collection

###  SetDirty

Sets the item dirty state

#### Returns

`System.Void` 

###  SetOrder

Set this object in new render order position

#### Parameters

#### index `System.Int32`

New position

#### Returns

`System.Void` 

###  ShouldSerializeIntelligentLabelsEnabled

Shoulds the serialize intelligent labels enabled.

#### Returns

`System.Boolean` 

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

###  UpdateAxisOrientation

Updated axes orientation accordingly to the SeriesOrientation

#### Returns

`System.Void` 

