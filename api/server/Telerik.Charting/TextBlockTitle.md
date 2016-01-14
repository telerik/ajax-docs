---
title: Telerik.Charting.TextBlockTitle
page_title: Telerik.Charting.TextBlockTitle
description: Telerik.Charting.TextBlockTitle
---

# Telerik.Charting.TextBlockTitle

Chart title text container properties

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Charting.RenderedObject : IOrdering
* Telerik.Charting.LayoutElement
* Telerik.Charting.TextBlock
* Telerik.Charting.TextBlockTitle

## Properties

###  Appearance `StyleTextBlock`

Text field style

###  Container `IContainer`

Link to container element

###  IsVisible `Boolean`

Gets TextBlock visibility

###  Parent `ChartBaseLabel`

Parent chart element

###  Text `String`

Contained text data

###  Text `String`

Contained text data

###  ViewState `StateBag`

Sate bag to store view state content

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  Visible `Boolean`

get a and sets visibility of TextBlock

###  VisibleText `Boolean`

Visible text with MaxLength applied

## Methods

###  BringForward

Send element at one step forward in the render order list

#### Returns

`System.Void` 

###  BringToFront

Set element at the first position in render order list

#### Returns

`System.Void` 

###  CalculatePosition

Calculate TextBlock position

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

###  CheckToolTip

Forms ToolTip if text length greater than max length

#### Returns

`System.Void` 

###  CheckToolTip

Forms ToolTip if text length greater than max length

#### Parameters

#### oldText `System.String`

Text

#### Returns

`System.Void` 

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

Get this elements order position in container

#### Returns

`System.Int32` 

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

Measure TextBlock

#### Parameters

#### renderEngine `Telerik.Charting.RenderEngine`

RenderEngine of chart

#### Returns

`System.Drawing.SizeF` Size of TextBlock

###  Measure

Measure TextBlock

#### Parameters

#### renderEngine `Telerik.Charting.RenderEngine`

RenderEngine of chart

#### Returns

`System.Drawing.SizeF` Size of TextBlock

###  OnRender

Called after rendering

#### Returns

`System.Void` 

###  Remove

Remove this  element from  render order list

#### Returns

`System.Void` 

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

###  SetOrder

Set this object in new render order position

#### Parameters

#### index `System.Int32`

New position

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

###  textBlockAppearance_MaxLengthChanged

Check if tooltip should be changed when max length changed

#### Parameters

#### sender `System.Object`

#### e `System.EventArgs`

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

