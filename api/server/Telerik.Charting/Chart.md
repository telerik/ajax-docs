---
title: Telerik.Charting.Chart
page_title: Telerik.Charting.Chart
description: Telerik.Charting.Chart
---

# Telerik.Charting.Chart

This is an class which provides charting functionality for Telerik
            products.

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.RenderedObject : IOrdering
* Telerik.Charting.LayoutElement
* Telerik.Charting.Chart : IContainer

## Properties

###  Appearance `StyleChart`

Contains appearance related settings.

###  ApplicationPath `String`

Parent application path.

###  AutoLayout `Boolean`

Specifies AutoLayout mode to all items on the chart control.

###  AutoLayoutWrapper `Boolean`

Added just temporary to avoid build warnings

###  AutoTextWrap `Boolean`

Specifies AutoTextWrap mode for all wrappable text blocks of the chart control.

###  AutoTextWrapWrapper `Boolean`

Added just temporary to avoid build warnings

###  Bitmap `Image`

Use this property to access the chart bitmap.

###  BitmapResolution `Image`

Specifies the bitmap resolution.

###  ChartTitle `ChartTitle`

Provides access to the title element of the chart.

###  Container `IContainer`

Link to container element

###  CustomFigures `FiguresCollection`

Contains a collection of custom figures.

###  CustomPalettes `CustomPalettesCollection`

Contains a collection of custom palettes

###  DataGroupColumn `String`

Specifies a column which will be used for group by clause. A new series will be
            created for each unique record in this column.

###  DataManager `DataManager`

Exposes advanced data binding options. You can use this property to perform custom
            data binding at runtime.

###  DefaultType `ChartSeriesType`

Specifies the default series type.

###  DesignTime `Boolean`

Provides information whether the chart is used in design-time mode.

###  DesignTimeSeriesCollection `Boolean`

Specifies a design-time series collection

###  Figures `FiguresCollection`

Contains a figures collection .

###  ImageFormat `ImageFormat`

Specifies the image rendering format.

###  IntelligentLabelsEnabled `Boolean`

Toggles the use of the IntelligentLabels feature.

###  Legend `ChartLegend`

Provides access to the legend element of the chart.

###  OriginalSeriesCollection `ChartSeriesCollection`

Specifies a temporary copy of original series in design-time mode

###  Parent `IComponent`

Parent chart element

###  ScaleEnabled `Boolean`

Show enable scale or not

###  Series `ChartSeriesCollection`

Gets or sets the RadChart's chart series collection object.

###  SeriesOrientation `ChartSeriesCollection`

Specifies the orientation of chart series on the plot area.

###  SeriesPalette `ChartSeriesCollection`

Specifies the series palette

###  SeriesPaletteWrapper `ChartSeriesCollection`

Added just temporary to avoid build warnings

###  Skin `String`

Specifies the skin to use.

###  SkinsOverrideStyles `String`

When true and using a skin, user will not be able to override any of the skin
            appearance.

###  TempImagePath `String`

Temporary images path.

###  TextWrapFactor `Single`

Return factor for wrap mechanism for fixed sides proportion wrap type

###  ViewState `StateBag`

Sate bag to store view state content

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

## Methods

###  Add

Add element at the end of list

#### Parameters

#### element `Telerik.Charting.IOrdering`

Element

#### Returns

`System.Void` 

###  AddChartSeries

Adds a new data series to the chart's data series collection.

#### Parameters

#### series `Telerik.Charting.ChartSeries`

Series for adding

#### Returns

`System.Void` 

###  AddSeries

Add series

#### Parameters

#### series `Telerik.Charting.ChartSeries`

Series to add

#### Returns

`System.Void` 

###  AddSeries

Add series

#### Parameters

#### chartSeries `Telerik.Charting.ChartSeriesCollection`

Series for adding

#### Returns

`System.Void` 

###  AddSeries

Add series

#### Parameters

#### chartSeries `Telerik.Charting.ChartSeries`

Series for adding

#### Returns

`System.Void` 

###  AddSeries

Add series

#### Parameters

#### seriesList `System.Collections.Generic.List{Telerik.Charting.ChartSeries}`

Series for adding

#### Returns

`System.Void` 

###  AddSeries

Add series

#### Parameters

#### chartSeries `Telerik.Charting.ChartSeries`

Series for adding

#### chartSeriesArray `Telerik.Charting.ChartSeries`

Series for adding

#### Returns

`System.Void` 

###  ApplyPalette

Apply palette for chart

#### Parameters

#### paletteName `System.String`

Palette name

#### Returns

`System.Void` 

###  ApplySkin

Apply skin for chart

#### Parameters

#### skinName `System.String`

Skin name

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

###  CalculateChart

Chart calculations: Binding series to legend for BeforeLayout Event

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

###  CallRegionEvent

Determine on which element of chart click occur

#### Parameters

#### point `System.Drawing.PointF`

Click coordinates

#### container `Telerik.Charting.IContainer`

Container object

#### Returns

`Telerik.Charting.IActiveRegion` Active region object

###  CallRegionEvent

Determine on which element of chart click occur

#### Parameters

#### x `System.Int32`

Click x coodrinate

#### y `System.Int32`

Click y coodrinate

#### Returns

`Telerik.Charting.IActiveRegion` Active region object

###  CallRegionEvent

Determine on which element of chart click occur

#### Parameters

#### x `System.Single`

Click x coodrinate

#### y `System.Single`

Click y coodrinate

#### Returns

`Telerik.Charting.IActiveRegion` Active region object

###  CallRegionEvent

Determine on which element of chart click occur

#### Parameters

#### point `System.Drawing.Point`

Click coodrinates

#### Returns

`Telerik.Charting.IActiveRegion` Active region object

###  CallRegionEvent

Determine on which element of chart click occur

#### Parameters

#### point `System.Drawing.PointF`

Click coodrinates

#### Returns

`Telerik.Charting.IActiveRegion` Active region object

###  ChangeSeriesType

Set type for all series as DefaultType

#### Returns

`System.Void` 

###  Chart_BeforeLayout

Default method for BeforeLayout event handler

#### Parameters

#### sender `System.Object`

Object

#### e `System.EventArgs`

EventArgs

#### Returns

`System.Void` 

###  Chart_PrePaint

Default method for PrePaint event handler

#### Parameters

#### sender `System.Object`

Object

#### e `System.EventArgs`

EventArgs

#### Returns

`System.Void` 

###  CheckLimitations

Checking restrictions for when some charts modes enabled

#### Returns

`System.Void` 

###  ClearSkin

Clearing skin settings

#### Returns

`System.Void` 

###  Clone

Makes a chart's clone

#### Returns

`Telerik.Charting.Chart` Chart's clone

###  CloneState

Makes a view state clone

#### Returns

`System.Web.UI.StateBag` StateBag

###  CopyFrom

Copy chart setting

#### Parameters

#### baseChart `Telerik.Charting.Chart`

Base chart

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

###  FinalizeDesignTime

Finalize design-time mode

#### Returns

`System.Void` 

###  GetAxis

Returns an axis image only with ticks and axis items

#### Returns

`System.Drawing.Image` 

###  GetDefaultPropertyValue

Return a default value of a property

#### Returns

`System.Object` 

###  GetException

Returns crash-exception image if any

#### Returns

`System.Drawing.Image` 

###  GetImage

Returns the chart image

#### Returns

`System.Drawing.Image` 

###  GetImage

Returns the chart image

#### Returns

`System.Drawing.Image` 

###  GetImage

Returns the chart image

#### Returns

`System.Drawing.Image` 

###  GetImageQuality

Provide relation between enums ImageQuality(Teleriks) and SmoothingMode(.Net)

#### Returns

`System.Drawing.Drawing2D.SmoothingMode` SmoothingMode value

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

###  GetPlotArea

Returns the chart plot area part as image for zoom feature

#### Returns

`System.Drawing.Image` 

###  GetPropertyValue

Return a value of a property

#### Returns

`System.Object` 

###  GetScaledImageHeight

Get image height when scaling enabled

#### Parameters

#### xScale `System.Single`

X scale coefficient

#### yScale `System.Single`

Y scale coefficient

#### Returns

`System.Single` Height in pixels

###  GetScaledImageWidth

Get image width when scaling enabled

#### Parameters

#### xScale `System.Single`

X scale coefficient

#### yScale `System.Single`

Y scale coefficient

#### Returns

`System.Single` Width in pixels

###  GetSeries

Get series

#### Parameters

#### name `System.String`

Series name

#### Returns

`Telerik.Charting.ChartSeries` Series or null

###  GetSeries

Get series

#### Parameters

#### index `System.Int32`

Series index

#### Returns

`Telerik.Charting.ChartSeries` Series or null

###  GetSeries

Gets a reference to the data first series by specifying data series color.

#### Parameters

#### seriesColor `System.Drawing.Color`

Series color

#### Returns

`Telerik.Charting.ChartSeries` Series or null

###  GetStaticArea

Returns the chart static area as image for zoom feature

#### Returns

`System.Drawing.Image` 

###  GetTextQuality

Provide relation between enums TextQuality(Teleriks) and TextRenderingHint(.Net)

#### Returns

`System.Drawing.Text.TextRenderingHint` TextRenderingHint value

###  Init

Initialize chart and its properties

#### Returns

`System.Void` 

###  InitDesignTime

Initialize design-time mode

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

###  IsDefaultValue

Checking property on a default value

#### Returns

`System.Boolean` 

###  LoadChart

Loading chart from XML string wrapped in TextWriter

#### Returns

`System.Void` 

###  LoadSkin

Load skin from

#### Returns

`System.Void` 

###  LoadViewState

Loading ViewState data

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

###  LocalDataFilePathToGlobal

Return a full path for a data source object

#### Returns

`System.Web.UI.IDataSource` 

###  LocalDataFilePathToGlobal

Return a full path for a data source object

#### Returns

`System.Web.UI.IDataSource` 

###  MapPath

MapPath functionality

#### Parameters

#### filePath `System.String`

path

#### Returns

`System.String` path

###  OnBeforeLayout

Execute BeforeLayoutEventHandler

#### Parameters

#### chart `System.Object`

Chart

#### args `System.EventArgs`

Arguments

#### Returns

`System.Void` 

###  OnlyPieSeries

Returns true if only pie series present

#### Returns

`System.Boolean` Boolean

###  OnPrePaint

Execute PrePaintEventHandler

#### Parameters

#### chart `System.Object`

Chart

#### args `System.EventArgs`

Arguments

#### Returns

`System.Void` 

###  OnRender

Called after rendering

#### Returns

`System.Void` 

###  PrepareForAutoLayout

Prepare chart elements for AutoLayout feature

#### Returns

`System.Void` 

###  PrepareForScale

Preapare chart for zooming

#### Returns

`System.Void` 

###  ReCalculateChart

Chart recalculation

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

###  RemoveAllSeries

Clear series collection

#### Returns

`System.Void` 

###  RemoveAt

Remove  element from list by it's index

#### Parameters

#### index `System.Int32`

Position

#### Returns

`System.Void` 

###  RemoveSeries

Remove series

#### Parameters

#### chartSeries `Telerik.Charting.ChartSeries`

Series

#### chartSeriesArray `Telerik.Charting.ChartSeries`

Series

#### Returns

`System.Void` 

###  RemoveSeries

Remove series

#### Parameters

#### seriesName `System.String`

Series name

#### seriesNames `System.String`

Series names

#### Returns

`System.Void` 

###  RemoveSeriesAt

Remove series

#### Parameters

#### index `System.Int32`

Series index

#### indexes `System.Int32`

Series indexes

#### Returns

`System.Void` 

###  ResolvePhysicalLocation

Return a full path

#### Returns

`System.String` 

###  RestoreAfterScale

Restore chart after zooming

#### Returns

`System.Void` 

###  RestoreAutoLayoutChanges

Restore chart elements setting after drawing in AutoLayout mode

#### Returns

`System.Void` 

###  SaveChart

Exports chart to a XML string wrapped in TextWriter

#### Returns

`System.IO.TextWriter` 

###  SaveSkin

Saving skin

#### Returns

`System.IO.TextWriter` 

###  SaveViewState

Saving ViewState

#### Returns

`System.Object` 

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

###  SetDataGroupColumn

Changes the DataGroupColumn property without DataBind method call

#### Parameters

#### columnName `System.String`

Column Name

#### Returns

`System.Void` 

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

###  ShouldApplyTextWrapping

Specifies should apply text wrapping or not

#### Parameters

#### textBlockAutoTextWrap `Telerik.Charting.Styles.AutoTextWrap`

AutoTextWrap from text block

#### Returns

`System.Boolean` Boolean

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

Tracking ViewState

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

###  UpdateDesign

Update design-time preview

#### Returns

`System.Void` 

