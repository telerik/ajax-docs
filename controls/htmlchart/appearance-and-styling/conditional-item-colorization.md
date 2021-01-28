---
title: Conditional Item Colorization
page_title: Conditional Item Colorization - RadHtmlChart
description: Check our Web Forms article about Conditional Item Colorization.
slug: htmlchart/appearance-and-styling/conditional-item-colorization
tags: conditional,item,colorization
published: True
position: 1
---

# Conditional Item Colorization

All series types expose a **ColorField** property that you can use to specify a column in the data source from which the color for each item in the series will be taken. You can find a good demo of how this works in the [Conditional Item Colorization Demo](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/functionality/custombarcolor/defaultcs.aspx).

The color must be passed as a **string** in the data source and its format can be either a color name (e.g. "red", "green", "blue"), or a hex value (e.g. "#cccccc", "#ff00ee", "#123456"). This functionality became available in Q1 2013. The exception are **PieSeries** and **DonutSeries** which expose the property since the release of the control.

If a cell from the data source column that stores the colors has an empty string, the chart will use the default color for the corresponding series item. This means that a special string is required only for the series items that must be colored differently. This is also illustrated in the [Conditional Item Colorization Demo](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/functionality/custombarcolor/defaultcs.aspx)

## Effect on Pie, Donut and Funnel Charts

The color of the segment from **PieSeries**/**DonutSeries**/**FunnelSeries** and the corresponding legend's square indicator is determined from:

* The **BackgroundColor** property of each **PieSeriesItem**/**FunnelSeriesItem** for a non-data bound scenario.

* The values in the data source field that is specified in the **ColorField** property of the series for a data bound scenario.

## Effect on Bar, Column and Bubble Series

You can define a common color for all of the items from each **BarSeries**/**ColumnSeries**/**BubbleSeries** through the **[Series Type].Appearance.FillStyle.BackgroundColor** property. This color is also used for the legend's square indicator of the corresponding series.

You can also modify the color of each item within a series through:

* The **BackgroundColor** property of each **CategorySeriesItem**/**BubbleSeriesItem** for a non-data bound scenario.

* The values in the data source field that is specified in the **ColorField** property of the series for a data bound scenario. If an empty string is met the item will use the color specified in the main series configuration.

## Effect on Area, Line, Scatter and ScatterLine Series

You can define a common color for the entire series that will be used for the lines and the color fill of the area (where applicable) through the **[Series Type].Appearance.FillStyle.BackgroundColor** property. This color is also used for the legend's square indicator of the corresponding series.

You can define a common background and border colors for the markers within an entire series through the **BackgroundColor** and **BorderColor** properties of the **[Series Type].MarkersAppearance** tag.

Setting a custom color for an item changes the markers's border color as well as the background color for the tooltip and the marker on hover.

## An Example

The [Conditional Item Colorization Demo](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/functionality/custombarcolor/defaultcs.aspx) with randomly generated data shows how you can customize the data source, so that items with given values have custom colors. Similar logic can be extended for other databinding methods, e.g., using a programmatic DataTable or a column from a declarative data source like the **SqlDataSource** in case the database already has the desired information.

## See Also

 * [Conditional Item Colorization Demo](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/functionality/custombarcolor/defaultcs.aspx)

 * [RadHtmlChart Column Series]({%slug htmlchart/chart-types/column-chart%})

 * [RadHtmlChart Using Multiple Custom Colors to Create Charts]({%slug htmlchart/how-to/using-multiple-custom-colors-to-create-charts%})
