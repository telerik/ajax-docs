---
title: Legend Settings
page_title: Legend Settings | RadHtmlChart for ASP.NET AJAX Documentation
description: Legend Settings
slug: htmlchart/appearance-and-styling/legend-settings
tags: legend,settings
published: True
position: 6
---

# Legend Settings

This help article discusses how to configure the chart legend.

* [Appearance](#appearance)
* [Position, Alignment and Orientation](#position-alignment-and-orientation)
* [Client Templates](#client-templates)
* [Visual Templates]

## Appearance

You can control the background color of the legend with the `Legend.Appearance.BackgroundColor` property. To control the color and the font of the text you can use the `Legend.Appearance.TextStyle` inner property. For example:

````ASP.NET
<Legend>
	<Appearance BackgroundColor="#f1d121">
		<TextStyle Bold="true" FontSize="20" Color="#e88d49" />
	</Appearance>
</Legend>
````

You can find all the available options for the `TextStyle` inner property in the [Labels and Titles Font Settings]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%}) help article.

The color of the markers is automatically detected from the series colors.

>tip To change the type, size and color of the legend markers you can:
* Either use [visual templates]({%slug htmlchart/functionality/visual-template%}).
* Or use the workaround from the following feedback item [ADD more legend markers options in RadHtmlChart](http://feedback.telerik.com/Project/108/Feedback/Details/123802).

## Position, Alignment and Orientation

You can control the position and the alignment of the legend with the following properties exposed by the `Legend.Appearance` tag:

* `Position` - The position of the chart, relative to the plot area. The supported values are:
 * `Top` - the legend is positioned on the top of the chart area.
 * `Bottom` - the legend is positioned on the bottom of the chart area.
 * `Left` - the legend is positioned on the left of the chart area.
 * `Right` - the legend is positioned on the right of the chart area.
 * `Custom` - the legend can be positioned on a custom position through the `OffsetX` and `OffsetY` properties.
* `Align` - The alignment of the legend, relative to the position. When the legend is `Top` or `Bottom` positioned it can be horizontally aligned. When the legend is `Left` or `Right` positioned in can be vertically aligned. The supported values are:
 * `Start` - the legend is left or top aligned according to its position.
 * `End` - the legend is right or bottom aligned according to its position.
 * `Center` - the legend is centered according to its position.
* `OffsetX` - The x offset of the legend. The x value is relative to the current position of the legend. A positive and negative value can be set.
* `OffsetY` - The y offset of the legend. The y value is relative to the current position of the legend. A positive and negative value can be set.

## Client Templates

You can use client-side templates to display custom text in the legend labels since the **Q2 2016** release. 

The functionality is available through the `ClientTemplate` inner property exposed by the `Legend.Appearance`. The fields which can be used inside the template are available in the [legend.labels.template](http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart#configuration-legend.labels.template) article.

>tip You can also execute JavaScript in the `ClientTemplate`. More information is available in the [Execute JavaScript with a ClientTemplate]({%slug htmlchart/functionality/clienttemplate/display-html-and-execute-javascript%}) article.

## See Also

 * [Basic Configuration]({%slug htmlchart/server-side-programming/basic-configuration%})

 * [Axes Configuration]({%slug htmlchart/server-side-programming/axes-configuration%})

