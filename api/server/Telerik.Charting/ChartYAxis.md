---
title: Telerik.Charting.ChartYAxis
page_title: Telerik.Charting.ChartYAxis
description: Telerik.Charting.ChartYAxis
---

# Telerik.Charting.ChartYAxis

Represents a chart Y Axis.

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject
* Telerik.Charting.RenderedObject
* Telerik.Charting.ChartAxis
* Telerik.Charting.ChartYAxis

## Properties

###  IsLogarithmic `Boolean`

Use Logarithmic scale or not.

###  MinValue `Double`

Specifies the min value of the axis range.

###  MaxValue `Double`

Specifies the max value of the axis range.

###  Step `Double`

Specifies the step at which axis values are calculated

###  LogarithmBase `Double`

Logarithm base.
            Min possible value is 2

###  Segments `AxisSegmentCollection`

Segments collection

###  ScaleBreaks `ScaleBreak`

Scale breaks settings

###  YAxisType `ChartYAxisType`

Defines a type of YAxis

###  AxisMode `ChartYAxisMode`

Gets or sets the style of the Y axis.

###  ItemsBound `Single`

Max axis item coordinate (X or Y). Farther value.

###  MajorPoints `PointF[]`

Points array for a major ticks and grid lines

###  MinorPoints `PointF[]`

Points array for a minor ticks and grid lines

###  AxisType `ChartAxisType`

Gets the axis type: Y or Y2 axes

###  TicksLength `Int32`

Gets the longest tick length

###  IsMajorTickVisible `Boolean`

Gets the major axis ticks visibility

###  IsMinorTickVisible `Boolean`

Gets the minor axis ticks visibility

###  IsTickVisible `Boolean`

Gets the axis ticks visibility

###  StartPoint `PointF`

Gets or Sets the start point of axis line

###  EndPoint `PointF`

Gets or Sets the end point of axis line

###  ItemsBound `Single`

Gets the larger value of axis items dimensions: height or width

###  PixelsPerValue `Single`

Pixels per axis unit.

###  Chart `Chart`

Reference to a Chart class instance

###  PlotRect `RectangleF`

Gets the PlotArea's rectangle

###  AxisType `ChartAxisType`

Gets the axis type: X, Y and Y2 axis

###  IsParentVisible `Boolean`

Gets if PlotArea should be rendered or not

###  Visible `ChartAxisVisibility`

Specifies whether the axis should be rendered.

###  Item `ChartAxisItem`

Returns the axis item at the specified position.

###  AutoScale `Boolean`

Enables or disables automatic axis scaling.

###  Appearance `StyleAxis`

ChartAxis style

###  AxisLabel `ChartLabel`

ChartAxis label

###  Parent `ChartPlotArea`

Parent element (PlotArea)

###  MinValue `Double`

Specifies the min value of the axis range.

###  MaxValue `Double`

Specifies the max value of the axis range.

###  Step `Double`

Specifies the step at which axis values are calculated

###  IsZeroBased `Boolean`

Specifies whether the axis begins from 0.

###  MaxItemsCount `ChartAxisItem`

Gets or sets maximal count of the axis items when auto scaling.

###  VisibleValues `ChartAxisVisibility`

Determines the type of shown values

###  LabelStep `Double`

Draw each 1,2,...,n item

###  Items `ChartAxisItem`

Returns a collection of axis items.

###  Container `IContainer`

Link to container element

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  ViewState `StateBag`

Sate bag to store view state content

## Methods

###  TrackViewState

Tracks view state changes

#### Returns

`System.Void` 

###  LoadViewState

Loads Y axis settings from view state

#### Parameters

#### savedState `System.Object`

View state

#### Returns

`System.Void` 

###  SaveViewState

Saves axis settings to a state bag

#### Returns

`System.Object` 

###  CalculateGridsAndTicks

Calculates grid lines and ticks positions

#### Returns

`System.Void` 

###  Initialize

Initializes the axis with min and max values.

#### Returns

`System.Void` 

###  InitializeSegments

Makes preparations for an axis segmentation in case of Scale Breaks enabled

#### Returns

`System.Void` 

###  CreateSegments

Creates axis segments when Scale breaks enabled

#### Returns

`System.Void` 

###  OptimizeSegments

Replaces overlapped segments with one segment

#### Parameters

#### LocalSegments `Telerik.Charting.AxisSegmentCollection`

Calculated segments

#### items `Telerik.Charting.ChartSeriesItemsCollection`

Series items

#### Returns

`Telerik.Charting.AxisSegmentCollection` Optimized axis segments collection without overlapped segments

###  CalculateSegmentsPosition

Calculates segments positions

#### Returns

`System.Void` 

###  GetCoordinate

Gets value coordinate at axis

#### Parameters

#### val `System.Double`

Value

#### Returns

`System.Single` Coordinate

###  GetZeroCoordinate

Gets the coordinate of zero value

#### Returns

`System.Single` Coordinate

###  GetAxisStartCoord

Gets the start value coordinate

#### Returns

`System.Single` Coordinate

###  GetAxisEndCoord

Gets the end value coordinate

#### Returns

`System.Single` Coordinate

###  GetZeroValue

Return the base value of the axis.

#### Returns

`System.Double` Axis zero value

###  GetClientRectangle

Gets axis image rectangle

#### Remarks
Used with client-zoom in ASP.NET Ajax chart

#### Parameters

#### startPoint `System.Drawing.PointF`

Start point

#### endPoint `System.Drawing.PointF`

End point

#### Returns

`System.Drawing.RectangleF` Rectangle

###  GetClientRectangle

Gets axis image rectangle

#### Remarks
Used with client-zoom in ASP.NET Ajax chart

#### Returns

`System.Drawing.RectangleF` Rectangle

###  GetFirstItemHalfDimension

Gets the half of the first axis item's largest dimension

#### Returns

`System.Single` Half of the largest dimension

###  GetLastItemHalfDimension

Gets the half of the last axis item's largest dimension

#### Returns

`System.Single` Half of the largest dimension

###  GetMaxItemBound

Gets the larger value of axis items dimensions: height or width

#### Returns

`System.Single` 

###  InitializeItems

Initialize axis items collection in dependency of series items collection values limits

#### Returns

`System.Void` 

###  CalculateLayout

Calculates axis layout settings

#### Parameters

#### renderEngine `Telerik.Charting.RenderEngine`

Render Engine reference

#### Returns

`System.Void` 

###  CalculateAxisItemsLayout

Calculates axis items layout settings

#### Parameters

#### renderEngine `Telerik.Charting.RenderEngine`

Render Engine reference

#### getItemBoundOnly `System.Boolean`

Should method calculate the ItemsBound value only

#### maxBound `System.Nullable{System.Single}`

Already calculated ItemsBound value

#### Returns

`System.Void` 

###  GetPixelStep

Gets pixels between two axis items

#### Parameters

#### itemValue `System.Decimal`

Axis item value. Can be used to detect if value is located in the any axis segment

#### Returns

`System.Single` Distance in pixels

###  CreateSegmentsRenderingRegions

Creates rendering areas for a several axis segments in case of Scale breaks

#### Parameters

#### renderEngine `Telerik.Charting.RenderEngine`

Render Engine reference

#### Returns

`System.Void` 

###  TrackViewState

Tracking ViewState

#### Returns

`System.Void` 

###  LoadViewState

Loading ViewState data

#### Parameters

#### savedState `System.Object`

Saved state bag

#### Returns

`System.Void` 

###  SaveViewState

Saves data to a State Bag

#### Returns

`System.Object` Saved axis data to a state bag

###  GetDistance

Gets distance between points

#### Parameters

#### point1 `System.Drawing.PointF`

First point

#### point2 `System.Drawing.PointF`

Second point

#### Returns

`System.Single` Distance

###  CalculateGridsAndTicks

Calculates grid lines and ticks positions

#### Returns

`System.Void` 

###  ClearAutoPropertiesForAxisItems

Excludes the excessive serialization of axis items properties

#### Returns

`System.Void` 

###  CorrectAxisLabelPosition

Used to correct initial axis label AlignedPosition for AutoLayout

#### Parameters

#### position `Telerik.Charting.Styles.Position`

Position

#### Returns

`System.Void` 

###  CorrectAxisItemPosition

Used to automatically correct the axis item AlignedPosition in AutoLayout

#### Parameters

#### position `Telerik.Charting.Styles.Position`

Position

#### Returns

`System.Void` 

###  GetWidth

Gets the largest axis item width

#### Returns

`System.Single` Width value

###  GetHeight

Gets the largest axis item height

#### Returns

`System.Single` Height value

###  FormatLabel

Formats the axis item value with a selected ValueFormat value

#### Parameters

#### val `System.Double`

Item value

#### Returns

`System.String` Formatted string

###  GetCoordinate

Gets value coordinate at axis

#### Parameters

#### val `System.Double`

Value

#### Returns

`System.Single` Coordinate

###  GetCoordinate

Gets value coordinate at axis

#### Parameters

#### val `System.Double`

Value

#### pixelsPerVal `System.Single`

Pixels per value

#### roundCoord `System.Boolean`

Make a coordinate value rounding or not

#### Returns

`System.Single` Coordinate

###  GetZeroValue

Return the base value of the axis.

#### Returns

`System.Double` Axis zero value

###  GetZeroCoordinate

Gets the coordinate of zero value

#### Returns

`System.Single` Coordinate

###  GetAxisStartCoord

Gets the start value coordinate

#### Returns

`System.Single` Coordinate

###  GetAxisEndCoord

Gets the end value coordinate

#### Returns

`System.Single` Coordinate

###  SaveLabelPosition

Saves the initial axis label and common axis items positions settings

#### Returns

`System.Void` 

###  RestoreLabelPosition

Restores the initial axis label and common axis items positions settings

#### Returns

`System.Void` 

###  SetRange

Recalculates items values in collection

#### Returns

`System.Void` 

###  CheckRange

Checks the range values

#### Parameters

#### minValue `System.Double`

Min axis value

#### maxValue `System.Double`

Max axis value

#### step `System.Double`

Axis step value

#### Returns

`System.Void` 

###  DisableCachedValues

Restores initial values of cached axis settings

#### Returns

`System.Void` 

###  GetItemsBound

Gets the axis item's max bound: horizontally or vertically

#### Parameters

#### item `Telerik.Charting.ChartAxisItem`

Axis item

#### rotationAngle `System.Single`

Rotation angle's value

#### Returns

`System.Single` Max bound value

###  GetClientRectangle

Gets axis image rectangle

#### Remarks
Used with client-zoom in ASP.NET Ajax chart

#### Parameters

#### startPoint `System.Drawing.PointF`

Start point

#### endPoint `System.Drawing.PointF`

End point

#### Returns

`System.Drawing.RectangleF` Rectangle

###  GetClientRectangle

Gets axis image rectangle

#### Remarks
Used with client-zoom in ASP.NET Ajax chart

#### Returns

`System.Drawing.RectangleF` Rectangle

###  GetFirstItemHalfDimension

Gets the half of the first axis item's largest dimension

#### Returns

`System.Single` Half of the largest dimension

###  GetLastItemHalfDimension

Gets the half of the last axis item's largest dimension

#### Returns

`System.Single` Half of the largest dimension

###  CalculateLayout

Calculates axis layout settings

#### Parameters

#### renderEngine `Telerik.Charting.RenderEngine`

RenderEngine

#### Returns

`System.Void` 

###  InitializeItems

Initialize the axis items collection

#### Returns

`System.Void` 

###  CalculateAxisLabel

Calculates axis label's layout settings

#### Parameters

#### renderEngine `Telerik.Charting.RenderEngine`

RenderEngine

#### Returns

`System.Void` 

###  CheckAxisItemVisibility

Checks the axis item visibility

#### Parameters

#### item `Telerik.Charting.ChartAxisItem`

Axis item

#### Returns

`System.Boolean` True if item should be rendered

###  IsVisible

Checks the axis item visibility

#### Returns

`System.Boolean` The Boolean value

###  SetMinValue

Sets the min axis range value

#### Parameters

#### minValue `System.Double`

Value to set

#### Returns

`System.Void` 

###  ShouldSerializeMinValue

The axis MinValue design time serialization reason

#### Returns

`System.Boolean` True is value have to be serialized

###  ResetMinValue

Resets the MinValue to default

#### Returns

`System.Void` 

###  ShouldSerializeMaxValue

The axis MaxValue design time serialization reason

#### Returns

`System.Boolean` True is value have to be serialized

###  ResetMaxValue

Resets the MaxValue to default

#### Returns

`System.Void` 

###  SetMaxValue

Sets the maximum axis range value

#### Parameters

#### maxValue `System.Double`

Value to set

#### Returns

`System.Void` 

###  ShouldSerializeStep

The axis Step design time serialization reason

#### Returns

`System.Boolean` True is value have to be serialized

###  ResetStep

Resets the Step value to default

#### Returns

`System.Void` 

###  Initialize

Initializes the axis with min and max values.

#### Returns

`System.Void` 

###  AutoCalcAxisExtents

Auto determines the min and max value of the axis

#### Returns

`System.Void` 

###  CalculateStep

Axis Step calculation method for AutoScaled axes

#### Parameters

#### minValue `System.Double@`

Min range value

#### maxValue `System.Double@`

Max range value

#### Returns

`System.Double` Calculated Step value

###  AdjustingMinMax

Adjusting min/max value according to the set axis properties

#### Parameters

#### minValue `System.Double@`

Min range value

#### maxValue `System.Double@`

Max range value

#### dValue `System.Double`

Rounding digits limit

#### Returns

`System.Void` 

###  SetPositiveOrNegative

Sets the minimum and maximum axis range values

#### Parameters

#### minValue `System.Double@`

Min range value

#### maxValue `System.Double@`

Max range value

#### Returns

`System.Void` 

###  AddItem

Adds a ChartAxisItem to the axis.

#### Returns

`Telerik.Charting.ChartAxisItem` 

###  AddItem

Adds a ChartAxisItemsCollection to the axis.

#### Returns

`Telerik.Charting.ChartAxisItem` 

###  AddItem

Adds ChartAxisItems to the axis.

#### Returns

`Telerik.Charting.ChartAxisItem` 

###  AddItem

Adds ChartAxisItems to the axis.

#### Returns

`Telerik.Charting.ChartAxisItem` 

###  GetItem

Gets the item at the specified index.

#### Returns

`Telerik.Charting.ChartAxisItem` 

###  RemoveAllItems

Removes all items

#### Returns

`System.Void` 

###  RemoveItem

Removes the ChartAxisItem specified.

#### Returns

`System.Void` 

###  RemoveItem

Removes the ChartAxisItems at the specified indexes.

#### Returns

`System.Void` 

###  RemoveItem

Removes the ChartAxisItem at the specified index.

#### Parameters

#### itemIndex `System.Int32`

item's index

#### Returns

`System.Void` 

###  RemoveLastItem

Removes the last item from the axis.

#### Returns

`System.Void` 

###  Clear

Clears data values of the axis.

#### Returns

`System.Void` 

###  AddRange

Automatically adds new axis items in AutoScale mode.

#### Parameters

#### minValue `System.Double`

Min range value

#### maxValue `System.Double`

Max range value

#### step `System.Double`

Axis step value

#### Returns

`System.Void` 

###  AddItem

Adds a new ChartAxisItem object to the axis with the specified label and color.

#### Parameters

#### label `System.String`

Axis label

#### color `System.Drawing.Color`

Item text color

#### Returns

`Telerik.Charting.ChartAxisItem` 

###  AddItem

Adds a new ChartAxisItem object to the axis with the specified label and color.

#### Parameters

#### label `System.String`

Axis label

#### color `System.Drawing.Color`

Item text color

#### visible `System.Boolean`

Visibility

#### Returns

`Telerik.Charting.ChartAxisItem` 

###  AddItem

Adds a new ChartAxisItem object to the axis with the specified label.

#### Parameters

#### label `System.String`

Axis label text

#### Returns

`Telerik.Charting.ChartAxisItem` 

###  AddItem

Adds a new ChartAxisItem object to the axis with the specified label.

#### Parameters

#### label `System.String`

Axis label text

#### value `System.Double`

Axis item value

#### Returns

`Telerik.Charting.ChartAxisItem` 

###  SetItemLabel

Sets new label text for the axis item at the specified position.

#### Parameters

#### itemIndex `System.Int32`

Item index in collection

#### newLabelText `System.String`

Axis item label text

#### Returns

`System.Void` 

###  SetItemLabel

Sets new label for the axis item at the specified position.

#### Parameters

#### itemIndex `System.Int32`

Item index in collection

#### newLabel `Telerik.Charting.ChartAxisItem`

Axis item

#### Returns

`System.Void` 

###  SetItemColor

Sets new color for the axis item text at the specified position.

#### Parameters

#### itemIndex `System.Int32`

Item index in collection

#### newColor `System.Drawing.Color`

Item text color

#### Returns

`System.Void` 

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

