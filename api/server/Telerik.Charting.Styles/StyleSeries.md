---
title: Telerik.Charting.Styles.StyleSeries
page_title: Telerik.Charting.Styles.StyleSeries
description: Telerik.Charting.Styles.StyleSeries
---

# Telerik.Charting.Styles.StyleSeries

Series appearance

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.Styles.Style : ICloneable
* Telerik.Charting.Styles.StyleSeries

## Properties

###  BarWidthPercent `Decimal`

Determines the width of bars.

###  Corners `Corners`

Specifies the corners for background rectangle

###  FillStyle `FillStyleSeries`

Specifies the background property

###  PointShape `String`

Specifies the shape for point series

###  PointDimentions `DimensionsPointMarker`

Specifies the dimensions of points in point series

###  PointRotationAngle `Single`

Specifies the Rotation angle

###  LegendDisplayMode `ChartSeriesLegendDisplayMode`

Legend visualization mode

###  ShowLabels `Boolean`

Specifies whether the item labels should be shown or not.

###  ShowLabelConnectors `Boolean`

Specifies whether a line should be drawn between the label and the item.

###  StartAngle `Double`

Gets or sets the start angle of the pie. Zero angle is identical with the X axis direction.

###  DiameterScale `Double`

Gets or sets the pie's diameter length according to the size of the plot area.

###  ExplodePercent `Int32`

Gets or sets the explode percent of the exploded items.

###  CenterXOffset `Int32`

Specifies the x offset of the pie center.

###  CenterYOffset `Int32`

Specifies the y offset of the pie center.

###  BubbleSize `Int32`

Default bubble size

###  LabelAppearance `StyleSeriesItemLabel`

Gets or sets the common settings for the series items labels

###  LineSeriesAppearance `StyleLineSeries`

Line, Spline, Bezier series line style

###  PointMark `StyleMarkerSeriesPoint`

Series points appearance

###  TextAppearance `StyleSeriesItemTextBlock`

Gets or sets the common text settings for the series items

###  EmptyValue `EmptyValue`

Empty value point mark

###  Border `StyleBorder`

Specifies the border

###  Visible `Boolean`

Specifies visibility of series

###  Border `StyleBorder`

Specifies the border style

###  Shadow `ShadowStyle`

Specifies the shadow settings

###  Visible `Boolean`

Specifies visibility

###  Item `Object`

Gets property value by name

###  Chart `Chart`

Specifies chart style related to

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  ViewState `StateBag`

Sate bag to store view state content

## Methods

###  Reset

Reset to default settings

#### Returns

`System.Void` 

###  Clone

Cloned this object

#### Returns

`System.Object` New instance of StyleSeries class with the same fields as this one

###  Dispose

Releases unmanaged and - optionally - managed resources

#### Parameters

#### disposing `System.Boolean`

true to release both managed and unmanaged resources; false to release only unmanaged resources.

#### Returns

`System.Void` 

###  TrackViewState

Track ViewState

#### Returns

`System.Void` 

###  LoadViewState

Load data from ViewState

#### Parameters

#### savedState `System.Object`

ViewState with data

#### Returns

`System.Void` 

###  SaveViewState

Saved data to ViewState

#### Returns

`System.Object` saved data

###  IsVisible

Gets element visibility

#### Parameters

#### element `System.Object`

Element visibility to check

#### Returns

`System.Boolean` Visibility of the specified element

###  Reset

Reset settings to default

#### Returns

`System.Void` 

###  SetPixelValues

Set pixels value to width and height properties of element

#### Parameters

#### elem `Telerik.Charting.IOrdering`

Element to calculate pixel values

#### container `Telerik.Charting.IContainer`

Container of element

#### Returns

`System.Void` 

###  SetPixelValues

Set pixels value to width and height properties of element

#### Parameters

#### elem `Telerik.Charting.IOrdering`

Element to calculate pixel values

#### contWidth `System.Single`

Container's width

#### contHeight `System.Single`

Container's height

#### Returns

`System.Void` 

###  SetPixelValues

Set pixels value to width and height properties of element's dimensions

#### Parameters

#### objDims `Telerik.Charting.Styles.Dimensions`

Element's dimensions

#### contWidth `System.Single`

Container's width

#### contHeight `System.Single`

Container's height

#### Returns

`System.Void` 

###  GetRealBounds

Calculate bounds of element depend on its rotation and previous dimensions

#### Parameters

#### dimensions `Telerik.Charting.Styles.Dimensions`

Dimensions of element

#### rotation `System.Nullable{System.Single}`

Rotation angle

#### Returns

`System.Drawing.RectangleF` 

###  Clone

Clone this object

#### Returns

`System.Object` Cloned object

###  GetStyleProperty

Gets property value of element by name

#### Parameters

#### element `System.Object`

Element to get property

#### propertyName `Telerik.Charting.Styles.StyleProperties`

Property name

#### Returns

`System.Object` Property value of specified element

###  Dispose

Releases unmanaged and - optionally - managed resources

#### Parameters

#### disposing `System.Boolean`

true to release both managed and unmanaged resources; false to release only unmanaged resources.

#### Returns

`System.Void` 

###  TrackViewState

Track ViewState

#### Returns

`System.Void` 

###  LoadViewState

Load data from ViewState

#### Parameters

#### savedState `System.Object`

ViewState to load data

#### Returns

`System.Void` 

###  SaveViewState

Save data to ViewState

#### Returns

`System.Object` Saved data

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

