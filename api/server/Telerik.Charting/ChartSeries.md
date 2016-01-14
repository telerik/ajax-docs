---
title: Telerik.Charting.ChartSeries
page_title: Telerik.Charting.ChartSeries
description: Telerik.Charting.ChartSeries
---

# Telerik.Charting.ChartSeries

Series

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.RenderedObject : IOrdering
* Telerik.Charting.ChartSeries : ICloneable

## Properties

###  ActiveRegionAttributes `String`

Default attributes for series items' active regions

###  ActiveRegionToolTip `String`

Default tooltip for series items' active regions

###  ActiveRegionUrl `String`

Default url for series items' active regions

###  Appearance `StyleSeries`

Specifies the visual appearance of series items.

###  Chart `Chart`

Link to Chart object

###  Container `IContainer`

Link to container element

###  DataLabelsColumn `String`

Gets or sets the name of the DataSource column (member) that will be used as ChartSeries names source when Y-values are taken from one column for a several chart ChartSeries

###  DataXColumn `String`

Gets or sets the name of the DataSource column (member) that is used to data-bind to the series X-value

###  DataXColumn2 `String`

Gets or sets the name of the DataSource column (member) that is used to data-bind to the series X2-value

###  DataYColumn `String`

Gets or sets the name of the DataSource column (member) that is used to data-bind to the series Y-value

###  DataYColumn2 `String`

Gets or sets the name of the DataSource column (member) that is used to data-bind to the series Y2-value

###  DataYColumn3 `String`

Gets or sets the name of the DataSource column (member) that is used to data-bind to the series Y3-value (High for CandleStick chart).

###  DataYColumn4 `String`

Gets or sets the name of the DataSource column (member) that is used to data-bind to the series Y4-value (Low for CandleStick chart).

###  DefaultLabelValue `String`

Specifies the default value for the series items labels.

###  Index `Int32`

Current series index in the series collection

###  IsActiveRegionSet `Boolean`

Returns whether there is an active region associated with the series.

###  IsArea `Boolean`

Determines whether the series is normal area-type.

###  IsDataBound `Boolean`

Determines whether the series is configured as data bound or not.

###  IsHasEmptyValues `Boolean`

Determines whether the series has items with empty values

###  IsLine `Boolean`

Determines whether the series is line-type.

###  IsNormalStacked `Boolean`

Determines whether the series is stacked and not stacked100 or not.

###  IsScalable `Boolean`

Defines whether series can be used with zoom or not

###  IsSplineArea `Boolean`

Determines whether the series is spline area-type.

###  IsStacked `Boolean`

Determines whether the series is stacked or not.

###  IsStacked100 `Boolean`

Determines whether the series is stacked100 or not.

###  IsStackedArea `Boolean`

Determines whether the series is stacked area-type.

###  IsStackedLine `Boolean`

Determines whether the series is stacked line-type.

###  IsStackedNormalArea `Boolean`

Determines whether the series is stacked area-type.

###  IsStackedSplineArea `Boolean`

Determines whether the series is stacked area-type.

###  IsXDependent `Boolean`

If series depends of X value

###  IsXDependentSeriesType `ChartSeriesType`

If current series type is x dependent

###  Item `ChartSeriesItem`

Gets or sets a ChartSeries SeriesItem object at the specified index.

###  Items `ChartSeriesItem`

Gets a collection of series items.

###  LegendFormattedText `String`

Formatted text string for a Legend

###  Name `String`

Gets or sets the name of the data series.

###  Parent `ChartSeriesCollection`

Parent element

###  PlotArea `ChartPlotArea`

Plot area element for series drawing

###  Type `ChartSeriesType`

Gets or sets the type of the series.

###  ViewState `StateBag`

Sate bag to store view state content

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  Visible `Boolean`

Specifies whether to render the series or not.

###  YAxisType `ChartSeriesType`

Y Axis used by series

## Methods

###  AddItem

Adds a series item(s) to the series.

#### Parameters

#### seriesItem `Telerik.Charting.ChartSeriesItem`

Item to add

#### seriesItems `Telerik.Charting.ChartSeriesItem`

Items to add

#### Returns

`System.Void` 

###  AddItem

Adds a series item(s) to the series.

#### Parameters

#### seriesItems `Telerik.Charting.ChartSeriesItemsCollection`

Items to add

#### Returns

`System.Void` 

###  AddItem

Adds a series item(s) to the series.

#### Parameters

#### seriesItems `Telerik.Charting.ChartSeriesItem`

Items to add

#### Returns

`System.Void` 

###  AddItem

Adds a series item(s) to the series.

#### Parameters

#### seriesItems `System.Collections.Generic.List{Telerik.Charting.ChartSeriesItem}`

Items to add

#### Returns

`System.Void` 

###  AddItem

Adds a new series item to the data series by specifying its value.

#### Parameters

#### value `System.Double`

YValue of new item

#### Returns

`System.Void` 

###  AddItem

Adds a new series item to the data series by specifying its value and label.

#### Parameters

#### value `System.Double`

YValue of new item

#### label `System.String`

Label of new item

#### Returns

`System.Void` 

###  AddItem

Adds a new series item to the data series by specifying its value, label and color.

#### Parameters

#### value `System.Double`

YValue of new item

#### label `System.String`

Label of new item

#### color `System.Drawing.Color`

Color of new item

#### Returns

`System.Void` 

###  AddItem

Adds a new series item to the data series by specifying its value, label, color and explosion.

#### Parameters

#### value `System.Double`

YValue of new item

#### label `System.String`

Label of new item

#### color `System.Drawing.Color`

Color of new item

#### exploded `System.Boolean`

If item is exploded

#### Returns

`System.Void` 

###  AddLabelsForPieSeries

Creates Pie series labels

#### Parameters

#### points `System.Drawing.PointF`

Points where labels should be located

#### text `System.String`

Labels text

#### angles `System.Double`

Angles

#### pieCenter `System.Drawing.PointF`

PieCenter point

#### pieRadius `System.Single`

PieRadius

#### renderEngine `Telerik.Charting.RenderEngine`

RenderEngine of chart

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

###  CheckBezierSeriesForItemsCount

Performs check for a required Bezier series items amount

#### Parameters

#### mess `System.String@`

Error message

#### Returns

`System.Boolean` Bezier series items amount is proper

###  Clear

Clears all series items from the data series.

#### Returns

`System.Void` 

###  ClearDataBoundState

Removes data binding links from series

#### Returns

`System.Void` 

###  CloneSeries

Return new ChartSeries instance with copied all properties from source object and cloned Items collection

#### Returns

`Telerik.Charting.ChartSeries` New instance of ChartSeries with copied fields

###  CloneState

Makes a view state clone

#### Returns

`System.Web.UI.StateBag` StateBag

###  CopyFrom

Copies settings from given series

#### Parameters

#### originalSeries `Telerik.Charting.ChartSeries`

Series to copy from

#### Returns

`System.Void` 

###  CopyItems

Copies series items from given series

#### Parameters

#### originalSeries `Telerik.Charting.ChartSeries`

Series that items should be copied

#### Returns

`System.Void` 

###  Dispose

Releases unmanaged and - optionally - managed resources

#### Parameters

#### disposing `System.Boolean`

true to release both managed and unmanaged resources; false to release only unmanaged resources.

#### Returns

`System.Void` 

###  FindItemIndex

Search item index in series collection

#### Parameters

#### chartItem `Telerik.Charting.ChartSeriesItem`

Item which index should to find

#### Returns

`System.Int32` Index of item

###  GetCustomFormat

Custom format string

#### Parameters

#### s `System.String@`

String should be formatted

#### expression `System.String`

Format expression

#### Returns

`System.String` Formated string

###  GetEmptyPointYValue

Gets a Y value for empty points

#### Parameters

#### item `Telerik.Charting.ChartSeriesItem`

Series item

#### itemIndex `System.Int32`

Series item index

#### Returns

`System.Double` Empty point y value

###  GetEmptyPointYValue

Gets a Y value for empty points

#### Returns

`System.Double` 

###  GetItemLabel

Returns text for item label

#### Parameters

#### item `Telerik.Charting.ChartSeriesItem`

Item which label should be taken

#### Returns

`System.String` Label text

###  GetOrder

Get this elements order position in container

#### Returns

`System.Int32` 

###  GetSumForStacked

Return a sum value of items values

#### Parameters

#### item `Telerik.Charting.ChartSeriesItem`

Series item

#### Returns

`System.Double` Sum

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

#### state `System.Object`

View state to load data from

#### Returns

`System.Void` 

###  OnRender

Called after rendering

#### Returns

`System.Void` 

###  PrepareSeriesByXValues

Filters X dependent series items without X value

#### Returns

`System.Void` 

###  Remove

Remove this  element from  render order list

#### Returns

`System.Void` 

###  RemoveItem

Removes a series item(s) from the series.

#### Parameters

#### seriesItem `Telerik.Charting.ChartSeriesItem`

Item for removing

#### seriesItems `Telerik.Charting.ChartSeriesItem`

Items for removing

#### Returns

`System.Void` 

###  RemoveItem

Removes a series item(s) from the series.

#### Parameters

#### index `System.Int32`

Index of item should be removed

#### indexes `System.Int32`

Indexes of items should be removed

#### Returns

`System.Void` 

###  RemoveItem

Removes the SeriesItem object at the specified index.

#### Parameters

#### itemIndex `System.Int32`

Index to remove

#### Returns

`System.Void` 

###  ReplaceString

Replaces string

#### Parameters

#### s `System.String@`

String that should be changed

#### expression `System.String`

Expression for formatting

#### val `System.Double`

Item Value

#### defaultFormat `System.String`

Default format

#### Returns

`System.Void` 

###  ResetActiveRegionForItems

Resets active region properties values

#### Returns

`System.Void` 

###  SaveViewState

Save Track ViewState

#### Returns

`System.Object` Object data as array

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

###  SetColors

Sets new colors to the items in the data series.

#### Parameters

#### colors `System.Drawing.Color`

New colors

#### Returns

`System.Void` 

###  SetDirty

Sets the item dirty state

#### Returns

`System.Void` 

###  SetExplodes

Sets exploded statuses to the items in the data series.

#### Parameters

#### explodes `System.Boolean`

New exploded values

#### Returns

`System.Void` 

###  SetFormattedLegendItemText

Sets the legend item's formatted text

#### Returns

`System.Void` 

###  SetItemColor

Sets a new color to the series item at the specified index.

#### Parameters

#### itemIndex `System.Int32`

Index of item to change color

#### newColor `System.Drawing.Color`

New color of item

#### Returns

`System.Void` 

###  SetItemExplode

Sets a new explode status for the series item at the specified index.

#### Parameters

#### itemIndex `System.Int32`

Index of item

#### exploded `System.Boolean`

Shoul be exploded or not

#### Returns

`System.Void` 

###  SetItemLabel

Sets a new label for the series item at the specified index.

#### Parameters

#### itemIndex `System.Int32`

Index of item to change label

#### newLabel `System.String`

New label

#### Returns

`System.Void` 

###  SetItems

Sets new SeriesItems objects to the data series.

#### Parameters

#### seriesItems `Telerik.Charting.ChartSeriesItem`

New Items to replace old items in series

#### Returns

`System.Void` 

###  SetItemValue

Sets a new value for the series item at the specified index.

#### Parameters

#### itemIndex `System.Int32`

Index of item to change YValue

#### newValue `System.Double`

New YValue

#### Returns

`System.Void` 

###  SetLabels

Sets new labels to the items in the data series.

#### Parameters

#### labels `System.String`

New labels

#### Returns

`System.Void` 

###  SetOrder

Set this object in new render order position

#### Parameters

#### index `System.Int32`

New position

#### Returns

`System.Void` 

###  SetParent

Set series parent

#### Parameters

#### parent `Telerik.Charting.ChartSeriesCollection`

#### Returns

`System.Void` 

###  SetValues

Sets new values to the data series by passing an array of real values. Old values are cleared.

#### Parameters

#### values `System.Double`

New values

#### Returns

`System.Void` 

###  Sum

Sum of series items' Y values

#### Returns

`System.Double` Sum of series items' Y values

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

###  ToString

Overridden

#### Returns

`System.String` Series name

###  TrackViewState

Track ViewState

#### Returns

`System.Void` 

###  TrackViewState

Tracks view state changes

#### Returns

`System.Void` 

