---
title: Telerik.Web.UI.MapLayer
page_title: Telerik.Web.UI.MapLayer
description: Telerik.Web.UI.MapLayer
---

# Telerik.Web.UI.MapLayer

The configuration of the map layers. The layer type is determined by the value of the type field.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.StateManager : IMarkableStateManager, IStateManager
* Telerik.Web.UI.MapLayer

## Properties

###  Attribution `String`

The attribution for the layer. Accepts valid HTML.

###  ExtentSettings `Extent`

Specifies the extent of the region covered by this layer. The layer will be hidden when the specified area is out of view.Accepts a four-element array that specifies the extent covered by this layer: North-West lat, longitude, South-East latitude, longitude.If not specified, the layer is always visible.

###  Key `String`

The API key for the layer. Currently supported only for Bing (tm) tile layers.

###  ImagerySet `String`

The bing map tile types. Possible options:

###  LocationField `String`

The data item field which contains the marker (symbol) location. The field should be an array with two numbers - latitude and longitude in decimal degrees.Requires the dataSource option to be set.Only applicable to "marker" and "bubble" layers.

###  Shape `String`

The default marker shape for data-bound markers. The following pre-defined marker shapes are available:Marker shapes are implemented as CSS classes on the marker element (span.k-marker). For example "pinTarget" is rendered as "k-marker-pin-target".

###  TitleField `String`

The data item field which contains the marker title. Requires the dataSource option to be set.

###  TooltipSettings `Tooltip`

The default Kendo UI Tooltip options for data-bound markers.

###  MaxSize `Double`

The maximum symbol size for bubble layer symbols.

###  MinSize `Double`

The minimum symbol size for bubble layer symbols.

###  Opacity `Double`

The the opacity for the layer.

###  Subdomains `String[]`

A list of subdomains to use for loading tiles. Alternating between different subdomains allows more requests to be executed in parallel.

###  Symbol `String`

The symbol to use for bubble layers. Possible values: circle, square

###  Type `LayerType`

The layer type. Supported types are "tile" and "shape".

###  StyleSettings `Style`

The default style for shapes.

###  UrlTemplate `String`

The URL template for tile layers. Template variables:

###  ValueField `String`

The value field for bubble layer symbols. The data item field should be a number.

###  ZIndex `Double`

The zIndex for this layer.Layers are normally stacked in declaration order (last one is on top).

###  MinZoom `Double`

The minimum zoom level at which to show this layer.

###  MaxZoom `Double`

The maximum zoom level at which to show this layer.

###  ClientDataSourceID `String`

The ID of RadClientDataSource control to which the layer will be data bound.

