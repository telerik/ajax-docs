---
title: Telerik.Charting.ChartLegend
page_title: Telerik.Charting.ChartLegend
description: Telerik.Charting.ChartLegend
---

# Telerik.Charting.ChartLegend

Chart legend. Shows the series names or series labels listing. Can contains custom items.

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject
* Telerik.Charting.RenderedObject
* Telerik.Charting.LayoutElement
* Telerik.Charting.ChartBaseLabel
* Telerik.Charting.ExtendedLabel
* Telerik.Charting.ChartLegend

## Properties

###  Item `LabelItem`

Reference to a label item by its index in items collection

###  BoundItems `LabelItem`

Bound items collection

###  Appearance `StyleExtendedLabel`

Gets style of label

###  Item `LabelItem`

Gets and sets LabelItem at specified position

###  Items `LabelItem`

Items collection.

###  TextBlock `TextBlock`

ChartLabel TextBlock

###  Marker `ChartMarker`

Graphic marker of label

###  Parent `Object`

Gets and sets Parent element

###  PlacementDirection `PlacementDirection`

Gets and sets Direction of label position in auto mode

###  ActiveRegion `ActiveRegion`

Gets and sets Active region

###  Visible `Boolean`

Gets and sets label's visibility

###  OrderList `List`1`

List, that represent the render order for taken up elements

###  NextPosition `Int32`

Gets a next free order position

###  Container `IContainer`

Link to container element

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  ViewState `StateBag`

Sate bag to store view state content

## Methods

###  ClearBoundItems

Clears bound items collection

#### Parameters

#### copyItems `System.Boolean`

Should automatically created bound items be removed or not

#### Returns

`System.Void` 

###  AddBoundItem

Creates new legend item bound to series or series item

#### Parameters

#### engine `Telerik.Charting.RenderEngine`

RenderEngine

#### series `Telerik.Charting.ChartSeries`

Chart series

#### item `Telerik.Charting.ChartSeriesItem`

Series item

#### mode `Telerik.Charting.ChartSeriesLegendDisplayMode`

How series will be represented in Legend: Series names, Series items or hidden (Nothing)

#### seriesIndex `System.Int32`

Series index in collection

#### itemIndex `System.Int32`

Series item index in collection

#### Returns

`System.Void` New LegendItem bound to a chart object: series or series item

###  BindSeriesToLegend

Creates bound items collection

#### Parameters

#### engine `Telerik.Charting.RenderEngine`

RenderEngine

#### Returns

`System.Void` 

###  AddCustomItemToLegend

Adds custom item to Legend

#### Parameters

#### description `System.String`

Custom legend item text

#### fillStyle `Telerik.Charting.Styles.FillStyle`

FillStyle

#### figure `System.String`

Figure for an item marker

#### Returns

`System.Void` 

###  GetMaxAvailableContentSize

Gets Available Content Size

#### Returns

`System.Drawing.SizeF` Size without margins and paddings

###  IsVisible

Gets visibility of label

#### Returns

`System.Boolean` Visibility of label

###  Measure

Measure label

#### Parameters

#### renderEngine `Telerik.Charting.RenderEngine`

RenderEngine of chart

#### Returns

`System.Drawing.SizeF` Size of label

###  Clear

Clear LabelItems collection

#### Returns

`System.Void` 

###  AddLabel

Add inside labels

#### Parameters

#### Label `Telerik.Charting.LabelItem`

Inside label to add

#### chartLabels `Telerik.Charting.LabelItem`

Inside labels to add

#### Returns

`System.Void` 

###  AddLabel

Add inside labels

#### Parameters

#### chartLabels `Telerik.Charting.ChartLabelsCollection`

Inside labels to add

#### Returns

`System.Void` 

###  AddLabel

Add inside labels

#### Parameters

#### chartLabels `Telerik.Charting.LabelItem`

Inside labels to add

#### Returns

`System.Void` 

###  AddLabel

Add inside labels

#### Parameters

#### labels `System.Collections.Generic.List{Telerik.Charting.LabelItem}`

Inside labels to add

#### Returns

`System.Void` 

###  GetLabel

Get inner label at specified position

#### Parameters

#### index `System.Int32`

Position to get label

#### Returns

`Telerik.Charting.LabelItem` Label at specified position

###  RemoveAllLabels

Removes all inner labels

#### Returns

`System.Void` 

###  RemoveLabel

Removes inner labels

#### Parameters

#### Label `Telerik.Charting.LabelItem`

Label to remove

#### chartLabels `Telerik.Charting.LabelItem`

Labels to remove

#### Returns

`System.Void` 

###  RemoveLabel

Removes inner labels

#### Parameters

#### index `System.Int32`

Position where label should be removed

#### indexes `System.Int32`

Positions where labels should be removed

#### Returns

`System.Void` 

###  TrackViewState

Track ViewState

#### Returns

`System.Void` 

###  LoadViewState

load ViewState

#### Parameters

#### savedState `System.Object`

ViewState with data

#### Returns

`System.Void` 

###  SaveViewState

Save ViewState

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

Gets whether Label is real visible

#### Returns

`System.Boolean` Label's visibility

###  Measure

Measure label

#### Parameters

#### renderEngine `Telerik.Charting.RenderEngine`

Render Engine of chart

#### Returns

`System.Drawing.SizeF` Calculated size of Label

###  CalculatePosition

Calculates position

#### Parameters

#### renderEngine `Telerik.Charting.RenderEngine`

RenderEngine of chart

#### Returns

`System.Void` 

###  GetOrder

Gets elements order position

#### Parameters

#### element `Telerik.Charting.IOrdering`

Element

#### Returns

`System.Int32` 

###  Add

Add element at the end of list

#### Parameters

#### element `Telerik.Charting.IOrdering`

Element

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

###  Remove

Remove  element from list

#### Parameters

#### element `Telerik.Charting.IOrdering`

Element

#### Returns

`System.Void` 

###  RemoveAt

Remove  element from list by it's index

#### Parameters

#### index `System.Int32`

Position

#### Returns

`System.Void` 

###  ReIndex

Re-index order list

#### Returns

`System.Void` 

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

Load ViewState

#### Parameters

#### savedState `System.Object`

ViewState with data

#### Returns

`System.Void` 

###  SaveViewState

Save to ViewState

#### Returns

`System.Object` Saved data

###  Clone

Clone this object

#### Returns

`System.Object` New instance of ChartBaseLabel class with the same fields as this object

###  GetOffset

Gets element offset

#### Parameters

#### oelement `System.Object`

Element

#### calcMethod `Telerik.Charting.LayoutElement.OffsetCalculationDelegate`

Offset calculation method delegate (left, right, top, bottom)

#### Returns

`System.Single` Offset value

###  GetOffsetLeft

Gets left offset

#### Parameters

#### oelement `System.Object`

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

###  GetOffsetRight

Gets right offset

#### Parameters

#### element `System.Object`

Element to get an offset of

#### Returns

`System.Single` Offset value

###  GetOffsetBottom

Gets bottom offset

#### Parameters

#### element `System.Object`

Element to get an offset of

#### Returns

`System.Single` Offset value

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

###  TrackViewState

Tracking view state changes

#### Returns

`System.Void` 

###  LoadViewState

Loads data from a view state

#### Parameters

#### savedState `System.Object`

Views state to load from

#### Returns

`System.Void` 

###  SaveViewState

Saves settings to a view state

#### Returns

`System.Object` Saved view state

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

