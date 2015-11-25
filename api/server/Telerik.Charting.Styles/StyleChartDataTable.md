---
title: Telerik.Charting.Styles.StyleChartDataTable
page_title: Telerik.Charting.Styles.StyleChartDataTable
description: Telerik.Charting.Styles.StyleChartDataTable
---

# Telerik.Charting.Styles.StyleChartDataTable

DataTable appearance settings

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.Styles.Style : ICloneable
* Telerik.Charting.Styles.LayoutStyle
* Telerik.Charting.Styles.StyleChartDataTable

## Properties

###  Visible `Boolean`

Specifies DataTable visibility

###  CellWidth `Int32`

Specifies data table cell width

###  CellHeight `Int32`

Specifies data table cell height

###  RenderType `TableRenderType`

Specifies data table rendering type

###  DrawHorizontalLines `Boolean`

Should horizontal lines be rendered

###  DrawVerticalLines `Boolean`

Should vertical lines be rendered

###  DrawLines `Boolean`

Hide/show all lines

###  TextVerticalAlign `ContentVerticalAlign`

Specifies text vertical alignment

###  TextHorizontalAlign `ContentHorizontalAlign`

Specifies text horizontal alignment

###  Figure `String`

Specifies the figure property

###  FillStyle `FillStyle`

Specifies the background property

###  AutoTextWrap `AutoTextWrap`

Specifies text wrap property for texts in Data Table

###  TextProperties `TextProperties`

Specifies the text properties

###  Position `Position`

Specifies the elements Position property

###  Dimensions `Dimensions`

Specifies the elements Dimensions property

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

###  SaveDimensions

Save DataTable's dimensions

#### Returns

`System.Void` 

###  SetAutoLayoutDefaults

Save DataTable's dimensions and positions for auto layout

#### Returns

`System.Void` 

###  RestoreDimensions

Restore dimensions

#### Returns

`System.Void` 

###  RestoreInitialValues

Restore margins

#### Returns

`System.Void` 

###  Clone

Clone this object

#### Returns

`System.Object` Cloned object

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

###  Reset

Reset to default settings

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

Save data to ViewState

#### Returns

`System.Object` Saved data

###  Dispose

Releases unmanaged and - optionally - managed resources

#### Parameters

#### disposing `System.Boolean`

true to release both managed and unmanaged resources; false to release only unmanaged resources.

#### Returns

`System.Void` 

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

