---
title: Series Items Configuration
page_title: Series Items Configuration | UI for ASP.NET AJAX Documentation
description: Series Items Configuration
slug: htmlchart/server-side-programming/series-items-configuration
tags: series,items,configuration
published: True
position: 4
---

# Series Items Configuration



This help article lists all the properties of the __SeriesItems__ collection	for the corresponding chart types and illustrates how to configure these properties in the code-behind.

## Attribute Properties in [SeriesType] > SeriesItems > [SeriesItemClass]


|  __Name__  |  __Description__  |
| ------ | ------ |
| __Angle__ |The angle for the item from __PolarAreaSeries__ , __PolarLineSeries__ and __PolarScatterSeries__ .|
| __BackgroundColor__ |For items from a __BarSeries__ , __BoxPlotSeries__ , __BubbleSeries__ , __ColumnSeries__ , __CandlestickSeries__ , __FunnelSeries__ , __PieSeries__ or __DonutSeries__ , this property is the	background color of the item itself. For items from an __AreaSeries__ , __LineSeries__ , __ScatterSeries__ or __ScatterLineSeries__ , this property is the border color of	the marker. It can take a common color name or a hex value. If you have not set this property explicitly, the control will pick one according to	the skin it has set.|
| __Close__ |The value of the close price for an item from a __CandlestickSeries__ .|
| __Exploded__ |Sets whether the item from a __PieSeries__ or __DonutSeries__ is exploded (i.e., separated from the others).|
| __From__ |The low value for an item from a __RangeBarSeries__ and __RangeColumnSeries__ .|
| __High__ |The value of the high price for an item from a __CandlestickSeries__ .|
| __Low__ |The value of the low price for an item from a __CandlestickSeries__ .|
| __Lower__ |The lower value for an item from a __BoxPlotSeries__ .|
| __Mean__ |The value of the mean for an item from a __BoxPlotSeries__ .|
| __Median__ |The value of the median (i.e., the second quartile) for an item from a __BoxPlotSeries__ .|
| __Name__ |Defines the string shown in the legend for the item from a __PieSeries__ or __DonutSeries__ .|
| __Open__ |The value of the open price for an item from a __CandlestickSeries__ .|
| __Outliers__ |A collection of <Outlier> objects for an item from a __BoxPlotSeries__ .	Each <Outlier> object exposes a __Value__ property.|
| __Q1__ |The value of the first quartile for an item from a __BoxPlotSeries__ .|
| __Q3__ |The value of the third quartile for an item from a __BoxPlotSeries__ .|
| __Radius__ |The radius for the item from __PolarAreaSeries__ , __PolarLineSeries__ and __PolarScatterSeries__ .|
| __Size__ |The value for the circle size of an item from a __BubbleSeries__ .|
| __Summary__ |Defines the type of the __WaterfallSeriesItem__ from __WaterfallSeries__ and __HorizontalWaterfallSeries__ .

*  __Default__ - Displays the __Y__ value of the item.

*  __RunningTotal__ - Displays the sum of all items since the last "RunningTotal" point.

*  __Total__ - Displays the sum of all previous items.|
| __Tooltip__ |The string shown in the tooltip of an item from a __BubbleSeries__ by default (in case format strings or template are not applied).|
| __To__ |The high value for an item from a __RangeBarSeries__ and __RangeColumnSeries__ .|
| __Upper__ |The upper value for an item from a __BoxPlotSeries__ .|
| __X__ |The value for the x-axis of the chart for an item from a __ScatterSeries__ or __BubbleSeries__ .|
| __Y__ |The value for the item from any series type. Must be a positive value for a __DonutSeries__ , __FunnelSeries__ , __PieSeries__ , __RadarAreaSeries__ , __RadarColumnSeries__ and __RadarLineSeries__ .|
| __Visible__ |A boolean property that indicates whether the series item will be visible in the __PlotArea__ . Applicable for __Donut__ , __Pie__ and __Funnel__ series. For other series the property must be set to the series itself.|

## Configure SeriesItems in the Code-behind

To create series items programmatically, you should use the respective class foreach series type:

* __AreaSeries__, __BarSeries__, __ColumnSeries__, __LineSeries__, __RadarAreaSeries__, __RadarColumnSeries__ and __RadarLineSeries__ use the __CategorySeriesItem__ class.

* __BoxPlotSeries__ use the __BoxPlotSeriesItem__ class.

* __BubbleSeries__ use the __BubbleSeriesItem__ class.

* __CandlestickSeries__ use the __CandlestickSeriesItem__ class.

* __DonutSeries__ and __PieSeries__ use the __PieSeriesItem__ class.

* __FunnelSeries__ use the __FunnelSeriesItem__ class.

* __PolarAreaSeries__, __PolarLineSeries__ and __PolarScatterSeries__ use the __PolarSeriesItem__ class.

* __RangeBarSeries__ and __RangeColumnSeries__ use the __RangeSeriesItem__ class.

* __ScatterSeries__ and __ScatterLineSeries__ use the __ScatterSeriesItem__ class.

* __WaterfallSeries__ and __HorizontalWaterfallSeries__ use the __WaterfallSeriesItem__ class.

In order to access the properties of the series in the code-behind, the seriesmust be cast to the respective series type (e.g. (RadHtmlChart1.PlotArea.Series[0] as ColumnSeries).SeriesItems[0].Y = 10;).

# See Also

 * [Visual Structure of the RadHtmlChart Control’s Tag Hierarchy]({%slug htmlchart/server-side-programming/overview%})

 * [Basic Configuration of the RadHtmlChart]({%slug htmlchart/server-side-programming/basic-configuration%})

 * [Configuring Tags in the RadHtmlChart Series]({%slug htmlchart/server-side-programming/series-configuration%})

 * [Configuring PlotArea Element Axes of the RadHtmlChart]({%slug htmlchart/server-side-programming/axes-configuration%})

 * [Navigator Configuration]({%slug htmlchart/server-side-programming/navigator-configuration%})
