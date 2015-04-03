---
title: Series Configuration
page_title: Series Configuration | UI for ASP.NET AJAX Documentation
description: Series Configuration
slug: htmlchart/server-side-programming/series-configuration
tags: series,configuration
published: True
position: 3
---

# Series Configuration



This help article lists all the inner tags and properties of the RadHtmlChart Series collections and illustrates how to configure them.

__RadHtmlChart__ provides a rich set of properties which can help you configure the look and behavior of the defined RadHtmlChart Series. In this article you will find a list with the available Series inner tags and public properties.

You can add the series to the Main tag > PlotArea > Series tag. The series have many common properties and some specific properties according to the series type. To create Series Items programmatically, you must use the respective class for each series type.

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

In order to access the properties of the series in the code-behind, you must cast the series to the respective series type (e.g., (RadHtmlChart1.PlotArea.Series[0] as ColumnSeries).SeriesItems[0].Y = 10;).

More information on the series properties is available below.

## Attribute Properties of the Series


|  __Name__  |  __Description__  |
| ------ | ------ |
| __AxisName__ |Specifies the __Name__ of the y-axis that will be used by the series. Applicable when multiple y-axes are used. Uses the default __YAxis__ if left blank.|
| __ColorField__ |The field of the data source that will be used for the Color of the items in the series.|
| __DataAngleField__ |The field of the data source that will be used for the Angle value for __PolarAreaSeries__ , __PolarLineSeries__ and __PolarScatterSeries__ .|
| __DataDownColorField__ |The field of the data source that will be used for the __Down__ color—the __Background__ color of the filled items (Open > Close) in the __CandlestickSeries__ .|
| __DataFieldSize__ |The field of the data source that will be used for the __Size__ value for __BubbleSeries__ .|
| __DataFieldTooltip__ |The field of the data source that will be used for the default tooltip of the __BubbleSeries__ items by default.|
| __DataFieldX__ |The field of the data source that will be used for the __X__ value for __ScatterSeries__ , __ScatterLineSeries__ and __BubbleSeries__ .|
| __DataFieldY__ |The field of the data source that will be used for the __Y__ value.|
| __DataFromField__ |The field of the data source that will be used for the __From__ value of __RangeBarSeries__ and __RangeColumnSeries__ .|
| __DataCloseField__ |The field of the data source that will be used for the __Close__ price of the __CandlestickSeries__ .|
| __DataHighField__ |The field of the data source that will be used for the __High__ price of the __CandlestickSeries__ .|
| __DataLowField__ |The field of the data source that will be used for the __Low__ price of the __CandlestickSeries__ .|
| __DataLowerField__ |The field of the data source that will be used for the lower value of __BoxPlotSeries__ .|
| __DataMeanField__ |The field of the data source that will be used for the value of the mean of __BoxPlotSeries__ .|
| __DataMedianField__ |The field of the data source that will be used for the value of the median (i.e., the second quartile) of __BoxPlotSeries__ .|
| __DataNameField__ |The field of the data source that will be used for the __Name__ of the __FunnelSeries__ items which will be shown in the legend.|
| __DataSummaryField__ |The field of the data source that will be used for the __Summary__ value of __WaterfallSeries__ and __HorizontalWaterfallSeries__ .|
| __DataToField__ |The field of the data source that will be used for the __To__ value of __RangeBarSeries__ and __RangeColumnSeries__ .|
| __DataOpenField__ |The field of the data source that will be used for the __Open__ price of the __CandlestickSeries__ .|
| __DataOutliersField__ |The field of the data source that will be used for the outliers values of __BoxPlotSeries__ .

>important The __DataOutliersField__ property must refer a data source field that contains an array of decimal numbers.
>
|
| __DataQ1Field__ |The field of the data source that will be used for the value of the first quartile of __BoxPlotSeries__ .|
| __DataQ3Field__ |The field of the data source that will be used for the value of the third quartile of __BoxPlotSeries__ .|
| __DataRadiusField__ |The field of the data source that will be used for the __Radius__ value for __PolarAreaSeries__ , __PolarLineSeries__ and __PolarScatterSeries__ .|
| __DataUpperField__ |The field of the data source that will be used for the upper value of __BoxPlotSeries__ .|
| __DownColor__ |The background color of the filled items from the __CandlestickSeries__ having their __Close__ price lower than the __Open__ one. Can take a common color name or a hex value. If it is not set explicitly, the control will pick one according to the skin it has set.|
| __DynamicHeightEnabled__ |A boolean property that indicates whether all the segments from __FunnelSeries__ will share the same size (when __DynamicHeightEnabled__ =" __false__ ") or the height of each segment is determined according to its value (when __DynamicHeightEnabled__ =" __true__ "). Default value is __True__ .|
| __DynamicSlopeEnabled__ |A boolean property that indicates whether the form of each segment from __FunnelSeries__ will be based on the ratio between the value from the current and the next segment. Default value is __False__ .|
| __ExplodeField__ |The field of the data source that indicates whether the __PieSeries__ or __DonutSeries__ item will be exploded (separated from the rest). Boolean value; expects __true__ or __false__ .|
| __Gap__ |Gets or Sets the distance between the category clusters. The value of the property cannot be negative.|
| __GroupName__ |A string value indicating that the __BarSeries__ or __ColumnSeries__ should be stacked in a group with the specified name. If the property is left blank, all series will be placed in one default stack. Setting the GroupName property of any series automatically sets the Stacked property of the first series to true, so it is not required to be explicitly set.|
| __MissingValues__ |Defines how missing ( __null__ / __Nothing__ ) values are treated by the __LineSeries__ and __ScatterLineSeries__ . It is an enumeration (Telerik.Web.UI.HtmlChart.MissingValuesBehavior) with one of the following values: __Gap__ , __Interpolate__ , __Zero__ . __Gap__ leaves a blank space (the series interrupts there); __Interpolate__ adds a point interpolated from the adjacent values; __Zero__ adds a point with value set to zero.|
| __Name__ |The name of the series that will be shown in the legend. For __PieSeries__ and __DonutSeries__ , the Name of each item is shown in the legend instead of the name of the series|
| __NameField__ |The field of the data source that will be used for the Name of the __PieSeries__ and __DonutSeries__ items that will be shown in the legend.|
| __NeckRatio__ |Specifies the ratio between the top and the bottom bases of the whole Funnel series. The property is neglected if __DynamicSlopeEnabled__ property is set to __true__ .|
| __SegmentSpacing__ |Specifies the space between the different segments of the Funnel chart in pixels.|
| __Spacing__ |Gets or Sets the space between the chart series as proportion of the series width. The value of the property cannot be negative.|
| __Stacked__ |Determines whether the __BarSeries__ or __ColumnSeries__ in the chart will be stacked next to/above each other. You must set this property for the first series of the chart to have effect.Setting this property is not required if the Series are stacked and grouped through the __GroupName__ property.You may also need to adjust the maximum value of the y-axis to acoomodate the addition of all the series one row if __Min__ / __Max__ are hardcoded for it.|
| __StartAngle__ |The starting angle for the first __PieSeries__ / __DonutSeries__ item. The zero point is horizontal to the left and the positive direction is clockwise.|
| __Visible__ |A boolean property that indicates whether the series will be visible in the __PlotArea__ . For __Donut__ , __Pie__ and __Funnel__ series the property must be set on the items.|
| __ZIndex__ |A numeric property that indicates the order of the series.|

## Attribute Properties in [SeriesType] > Appearance > FillStyle


|  __Name__  |  __Description__  |
| ------ | ------ |
| __BackgroundColor__ |The background color of the items from this series. This property can take a common color name or a hex value. If it you have not set ths property explicitly, the control will pick one according to the skin it has set.|

## Attribute Properties in [SeriesType] > Appearance > Overlay


|  __Name__  |  __Description__  |
| ------ | ------ |
| __Gradient__ |The series overlay gradient that takes the following values:

*  __None__ 

*  __Glass__ - __Bar__ , __Column__ , __RangeBar__ , __RangeColumn__ , __Candlestick__ and __BoxPlot__ series specific.

*  __RoundedBevel__ - __Pie__ and __donut__ series specific.

*  __SharpBevel__ - __Pie__ and __donut__ series specific.|

## Attribute Properties in [SeriesType] > LabelsAppearance


|  __Name__  |  __Description__  |
| ------ | ------ |
| __Color__ |The text color of the labels for the items from this series. Can take a common color name or a hex value. If it is not set explicitly the control will pick one according to the Skin it has set.|
| __ClientTemplate__ |A string for the client template that will be applied to the labels when they render. It can use any column from the data source given to the chart through the following syntax: __#=dataItem.ColumnName#__ where the string delimited inside #=.....# is the expression to be evaluated. See[here]({%slug htmlchart/functionality/clienttemplate/overview%})for more information.|
| __DataField__ |The field of the data source that will be used for the value of the labels for the items.|
| __DataFormatString__ |The format string that will form the tooltip's text.

*  __AreaSeries__ , __BarSeries__ , __ColumnSeries__ , __DonutSeries__ , __FunnelSeries__ , __LineSeries__ , __PieSeries__ , __RadarAreaSeries__ , __RadarColumnSeries__ , __RadarLineSeries__ , __WaterfallSeries__ and __HorizontalWaterfallSeries__ use the __{0}__ placeholder that denote the __Y__ value of the item.

*  __ScatterSeries__ and __ScatterLineSeries__ use the __{0}__ and __{1}__ placeholders that denote the __X__ and __Y__ values of the item.

*  __PolarAreaSeries__ , __PolarLineSeries__ and __PolarScatterSeries__ use the __{0}__ and __{1}__ placeholders that denote accordingly the __Angle__ and __Radius__ values of the item.

*  __BubbleSeries__ use the __{0}__ , __{1}__ , __{2}__ and __{3}__ placeholders that denote accordingly the __X__ , __Y__ , __Size__ and __Tooltip__ values of the item.

>note Series labels in __BoxPlotSeries__ and __CandlestickSeries__ are not supported.
>
|
| __Position__ |Defines the position of the labels relative to their items.

* For __BarSeries__ , __ColumnSeries__ , __WaterfallSeries__ and __HorizontalWaterfallSeries__ - The Telerik.Web.UI.HtmlChart.BarColumnLabelsPosition enumeration:

*  __Center__ - The label is positioned at the bar center.

*  __InsideEnd__ - The label is positioned inside, near the end of the bar.

*  __InsideBase__ - The label is positioned inside, near the base of the bar.

*  __OutsideEnd__ - The label is positioned outside, near the end of the bar.Not applicable for stacked series

* For __PieSeries__ and __DonutSeries__ - The Telerik.Web.UI.HtmlChart.PieAndDonutLabelsPosition enumeration:

*  __Center__ - The labels are positioned at the center of the pie/donut.

*  __InsideEnd__ - The labels are positioned inside, near the end of the pie/donut.

*  __OutsideEnd__ - The labels are positioned outside, near the end of the pie/donut.

* For __LineSeries__ , __ScatterSeries__ and __ScatterLineSeries__ - The Telerik.Web.UI.HtmlChart.LineAndScatterLabelsPosition enumeration:

*  __Above__ - The label is positioned at the top.

*  __Right__ - The label is positioned at the right.

*  __Below__ - The label is positioned at the bottom.

*  __Left__ - The label is positioned at the left.|
| __RotationAngle__ |The angle at which the labels are rotated.|
| __Visible__ |Defines whether the labels will be shown. Values are __True__ or __False__ .|

## Attribute Properties in [RangeColumnSeries/RangeBarSeries] > LabelsAppearance > FromLabelsAppearance / ToLabelsAppearance

Inherits the LabelsAppearance class.

## Attribute Properties in [SeriesType] > LabelsAppearance > TextStyle

See [this article]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%}) for more information on the text styles.


|  __Name__  |  __Description__  |
| ------ | ------ |
| __Bold__ |Specifies whether the font of the labels' text is bold. Values are __True__ or __False__ .|
| __Color__ |Specifies the color of the labels' text. Uses values of type __System.Drawing.Color__ .|
| __FontFamily__ |Specifies the font family of the labels' text. Takes a string with the font family name.|
| __FontSize__ |Specifies the font size of the labels' text. Takes the size in pixels.|
| __Italic__ |Specifies whether the font of the labels' text is italic. Values are __True__ or __False__ .|
| __Margin__ |Specifies the margin of the labels' text. Takes the margin value in pixels. The __Position__ property in __[SeriesType] > Appearance > LabelsAppearance__ should not be set to __Center__ in order for this setting to take effect.|
| __Padding__ |Specifies the padding of the labels' text. Takes the padding value in pixels. The __Position__ property in __[SeriesType] > Appearance > LabelsAppearance__ should not be set to __Center__ in order for this setting to take effect.|

## Attribute Properties in [SeriesType] > TooltipsAppearance


|  __Name__  |  __Description__  |
| ------ | ------ |
| __BackgroundColor__ |The background color of the tooltips for the items from this series. Can take a common color name or a hex value. If it is not set explicitly, the control will pick one according to the skin it has set.|
| __Color__ |The text color of the tooltips for the items from this series. Can take a common color name or a hex value. If it is not set explicitly the control will pick one according to the Skin it has set.|
| __ClientTemplate__ |A string for the client template that will be applied to the tooltips when they render. It can use any column from the data source given to the chart through the following syntax: __#=dataItem.ColumnName#__ where the string delimited inside #=.....# is the expression to be evaluated. The tooltips are HTML so HTML can be used outside of the expression tags. See[here]({%slug htmlchart/functionality/clienttemplate/overview%})for more information.|
| __DataFormatString__ |The format string that will form the tooltip's text.

*  __AreaSeries__ , __BarSeries__ , __ColumnSeries__ , __DonutSeries__ , __FunnelSeries__ , __LineSeries__ , __PieSeries__ , __RadarAreaSeries__ , __RadarColumnSeries__ , __RadarLineSeries__ , __WaterfallSeries__ and __HorizontalWaterfallSeries__ use the __{0}__ placeholder that denote the __Y__ value of the item.

*  __ScatterSeries__ and __ScatterLineSeries__ use the __{0}__ and __{1}__ placeholders that denote the __X__ and __Y__ values of the item.

*  __PolarAreaSeries__ , __PolarLineSeries__ and __PolarScatterSeries__ use the __{0}__ and __{1}__ placeholders that denote accordingly the __Angle__ and __Radius__ values of the item.

*  __BubbleSeries__ use the __{0}__ , __{1}__ , __{2}__ and __{3}__ placeholders that denote accordingly the __X__ , __Y__ , __Size__ and __tooltip__ values of the item.

*  __CandlestickSeries__ tooltips have a predefined pattern by design, they can be modified through __{0}__ , __{1}__ , __{2}__ , __{3}__ and __{4}__ placeholders that denote accordingly the __Open__ , __High__ , __Low__ , __Close__ and the corresponding x-axis item's value.

*  __BoxPlotSeries__ tooltips have already predefined pattern by design, however, it can be modified through __{0}__ , __{1}__ , __{2}__ , __{3}__ , __{4}__ , __{5}__ and __{6}__ placeholders that denote accordingly the __Lower__ , __Q1__ , __Median__ , __Q3__ , __Upper__ , __Mean__ and the corresponding x-axis item's value.|
| __Visible__ |Defines whether the tooltips will be shown. Values are __True__ or __False__ .|

## Attribute Properties in [AreaSeries, LineSeries, PolarAreaSeries, PolarLineSeries, RadarAreaSeries, RadarLineSeries and ScatterLineSeries] > LineAppearance


|  __Name__  |  __Description__  |
| ------ | ------ |
| __Width__ |The width of the line for the series. Takes the width in pixels.|
| __LineStyle__ |A string property that takes the following values.

*  __Normal__ - Data points from series will be connected with straight lines.

*  __Smooth__ - Data points from series will be connected with fitted curves.

*  __Step__ - Data points from series will be connected with lines that have right angle.

>caution  __Step__ property is available only for __AreaSeries__ and __LineSeries__ .
>
|

## Attribute Properties in [AreaSeries, LineSeries, ScatterSeries and ScatterLineSeries] > MarkersAppearance


|  __Name__  |  __Description__  |
| ------ | ------ |
| __BackgroundColor__ |The background color of the markers for the items from this series. Can take a common color name or a hex value. If this property is not set explicitly, the control will pick one according to the skin it has set.|
| __BorderColor__ |The color of the markers' borders for the items from this series. Can take a common color name or a hex value. If it this property is not set explicitly, the control will inherit the color of series itself.|
| __BorderWidth__ |The width of the markers' borders for the items from this series. Takes the width in pixels.|
| __MarkersType__ |Sets the type of markers the series uses. An enumeration (Telerik.Web.UI.HtmlChart.MarkersType) with the following values: __Circle__ , __Cross__ , __Square__ , __Triangle__ .|
| __Size__ |Specifies the size of the markers the series uses. Takes the size in pixels.|
| __Visible__ |Defines whether the markers will be shown. Values are __True__ or __False__ .|

## Attribute Properties in [BoxPlotSeries] > [OutliersAppearance, ExtremesAppearance]


|  __Name__  |  __Description__  |
| ------ | ------ |
| __BackgroundColor__ |The background color of the outliers for the items from this series. Can take a common color name or a hex value. If this property is not set explicitly, the control will pick one according to the skin it has set.|
| __MarkersType__ |Chooses the shape of the outliers the series uses. An enumeration (Telerik.Web.UI.HtmlChart.OutliersMarkersType) with the following values: __Circle__ , __Cross__ , __Square__ and __Triangle__ .|
| __RotationAngle__ |The angle at which the outliers are rotated.|
| __Size__ |Specifies the size of the outliers the series uses. Takes the size in pixels.|
| __Visible__ |Defines whether the outliers will be shown. True or false.|

## Attribute Properties in [BoxPlotSeries] > [OutliersAppearance, ExtremesAppearance] > [BorderAppearance]


|  __Name__  |  __Description__  |
| ------ | ------ |
| __Color__ |The color of the outliers' borders for the items from this series. Can take a common color name or a hex value. If this property is not set explicitly, the control will inherit the color of Series itself.|
| __Width__ |The width of the outliers' borders for the items from this series. Takes the width in pixels.|

# See Also

 * [Overview]({%slug htmlchart/server-side-programming/overview%})

 * [Basic Configuration]({%slug htmlchart/server-side-programming/basic-configuration%})

 * [Series Items Configuration]({%slug htmlchart/server-side-programming/series-items-configuration%})

 * [Axes Configuration]({%slug htmlchart/server-side-programming/axes-configuration%})

 * [Client Templates for Series Labels]({%slug htmlchart/functionality/clienttemplate/overview%})
