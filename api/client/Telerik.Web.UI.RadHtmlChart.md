---
title: Telerik.Web.UI.RadHtmlChart
page_title: Client-side API Reference
description: Telerik.Web.UI.RadHtmlChart
slug: Telerik.Web.UI.RadHtmlChart
---

# Telerik.Web.UI.RadHtmlChart : Telerik.Web.UI.RadWebControl 

## Inheritance Hierarchy

* [Telerik.Web.UI.RadWebControl]({%slug Telerik.Web.UI.RadWebControl%})
* *[Telerik.Web.UI.RadHtmlChart]({%slug Telerik.Web.UI.RadHtmlChart%})*

## Methods

###  get_kendoWidget

Gets a reference to the Kendo Chart widget. 
To use the exposed Kendo methods make sure you have the kendo.dataviz.d.ts file and cast the returned object to the corresponding chart type.

#### Parameters

#### Returns

`Object` 

### set_transitions

Sets a boolean value indicating whether an animation is played when the chart is rendered.

#### Parameters

##### value `Boolean`

#### Returns

`None` 

### set_dataSource

Sets the dataSource of the Chart as a JSON string

#### Parameters

##### value `String`

#### Returns

`None` 

### get_transitions

Gets a boolean value indicating whether an animation is played when the chart is rendered.

#### Parameters

#### Returns

`Boolean` 

### getSVGString

Returns the SVG representation of the current chart (a string which is a self-contained SVG document)

#### Parameters

#### Returns

`String` 

### set_height

Sets new height to the chart

#### Parameters

##### value `Number`

#### Returns

`None` 

### repaint

Repaints the chart

#### Parameters

#### Returns

`None` 

### get_dataSourceJSON

Gets the dataSource of the Chart as a JSON string

#### Parameters

#### Returns

`String` 

### set_width

Sets new width to the chart

#### Parameters

##### value `Number`

#### Returns

`None` 

### get_height

Gets the height of the chart

#### Parameters

#### Returns

`Number` 

### get_width

Gets the width of the chart

#### Parameters

#### Returns

`Number` 

### kendoWidget

Gets a reference to the Kendo Chart widget.

#### Parameters

#### Returns

`None` 

### loadData

Triggers data to be loaded when LoadDataInvocation="FromCode"

#### Parameters

#### Returns

`None` 

## Events

### Load

Fires when the control's client-side object is created.

#### Event Data

##### sender `Telerik.Web.UI.RadHtmlChart`

The RadHtmlChart instance that fired the event. You can get the underlying Kendo widget from this object via the get_kendoWidget() method.

##### args `Sys.EventArgs`

Empty event argument.