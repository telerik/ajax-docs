---
title: Series Items Configuration
page_title: Series Items Configuration | RadHtmlChart for ASP.NET AJAX Documentation
description: Series Items Configuration
slug: htmlchart/server-side-programming/series-items-configuration
tags: series,items,configuration
published: True
position: 4
---

# Series Items Configuration



This help article lists all the properties of the **SeriesItems** collection	for the corresponding chart types and illustrates how to configure these properties in the code-behind.

## Attribute Properties in [SeriesType] > SeriesItems > [SeriesItemClass]


|  **Name**  |  **Description**  |
| ------ | ------ |
| **Angle** |The angle for the item from **PolarAreaSeries** , **PolarLineSeries** and **PolarScatterSeries** .|
| **BackgroundColor** |For items from a **BarSeries** , **BoxPlotSeries** , **BubbleSeries** , **ColumnSeries** , **CandlestickSeries** , **FunnelSeries** , **PieSeries** or **DonutSeries** , this property is the	background color of the item itself. For items from an **AreaSeries** , **LineSeries** , **ScatterSeries** or **ScatterLineSeries** , this property is the border color of	the marker. It can take a common color name or a hex value. If you have not set this property explicitly, the control will pick one according to	the skin it has set.|
| **Close** |The value of the close price for an item from a **CandlestickSeries** .|
| **Current** |The actual value of an item from a **BulletSeries** and **VerticalBulletSeries**.|
| **Exploded** |Sets whether the item from a **PieSeries** or **DonutSeries** is exploded (i.e., separated from the others).|
| **From** |The low value for an item from a **RangeBarSeries** and **RangeColumnSeries** .|
| **High** |The value of the high price for an item from a **CandlestickSeries** .|
| **Low** |The value of the low price for an item from a **CandlestickSeries** .|
| **Lower** |The lower value for an item from a **BoxPlotSeries** .|
| **Mean** |The value of the mean for an item from a **BoxPlotSeries** .|
| **Median** |The value of the median (i.e., the second quartile) for an item from a **BoxPlotSeries** .|
| **Name** |Defines the string shown in the legend for the item from a **PieSeries** or **DonutSeries** .|
| **Open** |The value of the open price for an item from a **CandlestickSeries** .|
| **Outliers** |A collection of <Outlier> objects for an item from a **BoxPlotSeries** .	Each `<Outlier>` object exposes a **Value** property.|
| **Q1** |The value of the first quartile for an item from a **BoxPlotSeries** .|
| **Q3** |The value of the third quartile for an item from a **BoxPlotSeries** .|
| **Radius** |The radius for the item from **PolarAreaSeries** , **PolarLineSeries** and **PolarScatterSeries** .|
| **Size** |The value for the circle size of an item from a **BubbleSeries** .|
| **Summary** |Defines the type of the **WaterfallSeriesItem** from **WaterfallSeries** and **HorizontalWaterfallSeries**. **Default** - Displays the **Y** value of the item. **RunningTotal** - Displays the sum of all items since the last "RunningTotal" point. **Total** - Displays the sum of all previous items.|
| **Target** |The target value of an item from a **BulletSeries** and **VerticalBulletSeries**.|
| **Tooltip** |The string shown in the tooltip of an item from a **BubbleSeries** by default (in case format strings or template are not applied).|
| **To** |The high value for an item from a **RangeBarSeries** and **RangeColumnSeries** .|
| **Upper** |The upper value for an item from a **BoxPlotSeries** .|
| **X** |The value for the x-axis of the chart for an item from a **ScatterSeries** or **BubbleSeries** .|
| **Y** |The value for the item from any series type. Must be a positive value for a **DonutSeries** , **FunnelSeries** , **PieSeries** , **RadarAreaSeries** , **RadarColumnSeries** and **RadarLineSeries** .|
| **Visible** |A boolean property that indicates whether the series item will be visible in the **PlotArea** . Applicable for **Donut** , **Pie** and **Funnel** series. For other series the property must be set to the series itself.|
| **VisibleInLegend** |A boolean property that indicates whether the series name will be visible in the **Legend** . Applicable for **Donut** , **Pie** and **Funnel** series. For other series the property must be set to the series itself.|

## Configure SeriesItems in the Code-behind

To create series items programmatically, you should use the respective class for each series type:

* **AreaSeries**, **BarSeries**, **ColumnSeries**, **LineSeries**, **RadarAreaSeries**, **RadarColumnSeries** and **RadarLineSeries** use the **CategorySeriesItem** class.

* **BoxPlotSeries** use the **BoxPlotSeriesItem** class.

* **BubbleSeries** use the **BubbleSeriesItem** class.

* **BulletSeries** and **VerticalBulletSeries** use the **BulletSeriesItem** class.

* **CandlestickSeries** use the **CandlestickSeriesItem** class.

* **DonutSeries** and **PieSeries** use the **PieSeriesItem** class.

* **FunnelSeries** use the **FunnelSeriesItem** class.

* **PolarAreaSeries**, **PolarLineSeries** and **PolarScatterSeries** use the **PolarSeriesItem** class.

* **RangeBarSeries** and **RangeColumnSeries** use the **RangeSeriesItem** class.

* **ScatterSeries** and **ScatterLineSeries** use the **ScatterSeriesItem** class.

* **WaterfallSeries** and **HorizontalWaterfallSeries** use the **WaterfallSeriesItem** class.

In order to access the properties of the series in the code-behind, the series must be cast to the respective series type (e.g. (RadHtmlChart1.PlotArea.Series[0] as ColumnSeries).SeriesItems[0].Y = 10;).

## See Also

 * [Visual Structure of the RadHtmlChart Control’s Tag Hierarchy]({%slug htmlchart/server-side-programming/overview%})

 * [Basic Configuration of the RadHtmlChart]({%slug htmlchart/server-side-programming/basic-configuration%})

 * [Configuring Tags in the RadHtmlChart Series]({%slug htmlchart/server-side-programming/series-configuration%})

 * [Configuring PlotArea Element Axes of the RadHtmlChart]({%slug htmlchart/server-side-programming/axes-configuration%})

 * [Navigator Configuration]({%slug htmlchart/server-side-programming/navigator-configuration%})
