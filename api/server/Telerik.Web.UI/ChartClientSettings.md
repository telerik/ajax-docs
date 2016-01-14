---
title: Telerik.Web.UI.ChartClientSettings
page_title: Telerik.Web.UI.ChartClientSettings
description: Telerik.Web.UI.ChartClientSettings
---

# Telerik.Web.UI.ChartClientSettings

Chart client settings

## Inheritance Hierarchy

* System.Object
* Telerik.Charting.StateManagedObject : IChartingStateManagedItem, IChartingStateManager, IDisposable
* Telerik.Web.UI.ChartClientSettings : ICloneable

## Properties

###  AxisMarkersColor `Color`

Gets or sets a value indicating the color of the zoom assist axis markers.

###  AxisMarkersSize `Int32`

Gets or sets a value indicating the size of the axis markers in pixels (size for the YAxis marker represents its width, while size for the XAxis marker -- its height).

###  EnableAxisMarkers `Boolean`

Gets or sets a value indicating whether the zoom assist axis markers are enabled.

###  EnableZoom `Boolean`

Gets or sets a value indicating whether the client-side zoom functionality is enabled.

###  ScrollMode `ChartClientScrollMode`

Gets or sets a value indicating the plotarea client scroll mode.

###  ViewState `StateBag`

Sate bag to store view state content

###  ViewStateIgnoresCase `Boolean`

Gets if view sate should ignore case

###  XScale `Single`

Gets or sets a value indicating the plotarea scale value by X axis.

###  XScrollOffset `Single`

Gets or sets a value indicating the XAxis scroll offset ratio.

###  YScale `Single`

Gets or sets a value indicating the plotarea scale value by Y axis.

###  YScrollOffset `Single`

Gets or sets a value indicating the YAxis scroll offset ratio.

###  ZoomRectangleColor `Color`

Gets or sets a value indicating the color of the zoom rectangle.

###  ZoomRectangleOpacity `Single`

Gets or sets a value indicating the opacity of the zoom rectangle.

## Methods

###  CloneState

Makes a view state clone

#### Returns

`System.Web.UI.StateBag` StateBag

###  LoadViewState

Loads data from a view state

#### Parameters

#### state `System.Object`

View state to load data from

#### Returns

`System.Void` 

###  SaveViewState

Saves object data to a view state

#### Returns

`System.Object` Saved view state object

###  SetDirty

Sets the item dirty state

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

Tracks view state changes

#### Returns

`System.Void` 

