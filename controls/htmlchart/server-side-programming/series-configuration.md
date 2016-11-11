---
title: Series Configuration
page_title: Series Configuration | RadHtmlChart for ASP.NET AJAX Documentation
description: Series Configuration
slug: htmlchart/server-side-programming/series-configuration
tags: series,configuration
published: True
position: 3
---

# Series Configuration

This help article lists all the inner tags and properties of the RadHtmlChart Series collections and illustrates how to configure them.

**RadHtmlChart** provides a rich set of properties which can help you configure the look and behavior of the defined RadHtmlChart Series. In this article you will find a list with the available Series inner tags and public properties.

You can add the series to the Main tag > PlotArea > Series tag. The series have many common properties and some specific properties according to the series type. To create Series Items programmatically, you must use the respective class for each series type.

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

In order to access the properties of the series in the code-behind, you must cast the series to the respective series type (e.g., (RadHtmlChart1.PlotArea.Series[0] as ColumnSeries).SeriesItems[0].Y = 10;).

More information on the series properties is available below.

## Attribute Properties of the Series


|  **Name**  |  **Description**  |
| ------ | ------ |
| **AxisName** |Specifies the **Name** of the y-axis that will be used by the series. Applicable when multiple y-axes are used. Uses the default **YAxis** if left blank.|
| **ColorField** |The field of the data source that will be used for the Color of the items in the series.|
| **DataAngleField** |The field of the data source that will be used for the Angle value for **PolarAreaSeries** , **PolarLineSeries** and **PolarScatterSeries**.|
| **DataCurrentField** |The field of the data source that will be used for the actual value of an item from a **BulletSeries** and **VerticalBulletSeries**.|
| **DataDownColorField** |The field of the data source that will be used for the **Down** color—the **Background** color of the filled items (Open > Close) in the **CandlestickSeries** .|
| **DataFieldSize** |The field of the data source that will be used for the **Size** value for **BubbleSeries** .|
| **DataFieldTooltip** |The field of the data source that will be used for the default tooltip of the **BubbleSeries** items by default.|
| **DataFieldX** |The field of the data source that will be used for the **X** value for **ScatterSeries** , **ScatterLineSeries** and **BubbleSeries**.|
| **DataFieldY** |The field of the data source that will be used for the **Y** value.|
| **DataFromField** |The field of the data source that will be used for the **From** value of **RangeBarSeries** and **RangeColumnSeries** .|
| **DataCloseField** |The field of the data source that will be used for the **Close** price of the **CandlestickSeries** .|
| **DataHighField** |The field of the data source that will be used for the **High** price of the **CandlestickSeries** .|
| **DataLowField** |The field of the data source that will be used for the **Low** price of the **CandlestickSeries**.|
| **DataLowerField** |The field of the data source that will be used for the lower value of **BoxPlotSeries** .|
| **DataMeanField** |The field of the data source that will be used for the value of the mean of **BoxPlotSeries** .|
| **DataMedianField** |The field of the data source that will be used for the value of the median (i.e., the second quartile) of **BoxPlotSeries**.|
| **DataNameField** |The field of the data source that will be used for the **Name** of the **FunnelSeries** items which will be shown in the legend.|
| **DataSummaryField** |The field of the data source that will be used for the **Summary** value of **WaterfallSeries** and **HorizontalWaterfallSeries**.|
| **DataTargetField** |The field of the data source that will be used for the target value of an item from a **BulletSeries** and **VerticalBulletSeries**.|
| **DataToField** |The field of the data source that will be used for the **To** value of **RangeBarSeries** and **RangeColumnSeries**.|
| **DataOpenField** |The field of the data source that will be used for the **Open** price of the **CandlestickSeries** .|
| **DataOutliersField** |The field of the data source that will be used for the outliers values of **BoxPlotSeries** . *It is important to note that the __DataOutliersField__ property must refer a data source field that contains an array of decimal numbers.*|
| **DataQ1Field** |The field of the data source that will be used for the value of the first quartile of **BoxPlotSeries**.|
| **DataQ3Field** |The field of the data source that will be used for the value of the third quartile of **BoxPlotSeries**.|
| **DataRadiusField** |The field of the data source that will be used for the **Radius** value for **PolarAreaSeries** , **PolarLineSeries** and **PolarScatterSeries** .|
| **DataUpperField** |The field of the data source that will be used for the upper value of **BoxPlotSeries** .|
| **DataVisibleInLegendField** |The field of the data source that will be used for the visibility of the **FunnelSeries**, **PieSeries** and **DonutSeries** items name in the legend.|
| **DownColor** |The background color of the filled items from the **CandlestickSeries** having their **Close** price lower than the **Open** one. Can take a common color name or a hex value. If it is not set explicitly, the control will pick one according to the skin it has set.|
| **DynamicHeightEnabled** |A boolean property that indicates whether all the segments from **FunnelSeries** will share the same size (when **DynamicHeightEnabled** =" **false** ") or the height of each segment is determined according to its value (when **DynamicHeightEnabled** =" **true** "). Default value is **True** .|
| **DynamicSlopeEnabled** |A boolean property that indicates whether the form of each segment from **FunnelSeries** will be based on the ratio between the value from the current and the next segment. Default value is **False** .|
| **ExplodeField** |The field of the data source that indicates whether the **PieSeries** or **DonutSeries** item will be exploded (separated from the rest). Boolean value; expects **true** or **false** .|
| **Gap** |Gets or Sets the distance between the category clusters. The value of the property cannot be negative.|
| **GroupName** |A string value indicating that the **BarSeries** or **ColumnSeries** should be stacked in a group with the specified name. If the property is left blank, all series will be placed in one default stack. Setting the GroupName property of any series automatically sets the Stacked property of the first series to true, so it is not required to be explicitly set.|
| **HoleSize** |An integer property that controls the diameter of the hole in **DonutSeries**.|
| **MissingValues** |Defines how missing ( **null** / **Nothing** ) values are treated by the **LineSeries** and **ScatterLineSeries** . It is an enumeration (Telerik.Web.UI.HtmlChart.MissingValuesBehavior) with one of the following values: **Gap** , **Interpolate** , **Zero** . **Gap** leaves a blank space (the series interrupts there); **Interpolate** adds a point interpolated from the adjacent values; **Zero** adds a point with value set to zero.|
| **Name** |The name of the series that will be shown in the legend. For **PieSeries** and **DonutSeries** , the Name of each item is shown in the legend instead of the name of the series|
| **NameField** |The field of the data source that will be used for the Name of the **PieSeries** and **DonutSeries** items that will be shown in the legend.|
| **NeckRatio** |Specifies the ratio between the top and the bottom bases of the whole Funnel series. The property is neglected if **DynamicSlopeEnabled** property is set to **true** .|
| **SegmentSpacing** |Specifies the space between the different segments of the Funnel chart in pixels.|
| **Spacing** |Gets or Sets the space between the chart series as proportion of the series width. The value of the property cannot be negative.|
| **Stacked** |Determines whether the **BarSeries** or **ColumnSeries** in the chart will be stacked next to/above each other. You must set this property for the first series of the chart to have effect.Setting this property is not required if the Series are stacked and grouped through the **GroupName** property.You may also need to adjust the maximum value of the y-axis to acoomodate the addition of all the series one row if **Min** / **Max** are hardcoded for it.|
| **StartAngle** |The starting angle for the first **PieSeries** / **DonutSeries** item. The zero point is horizontal to the left and the positive direction is clockwise.|
| **Visible** |A boolean property that indicates whether the series will be visible in the **PlotArea** . For **Donut** , **Pie** and **Funnel** series the property must be set on the items.|
| **VisibleInLegend** |A boolean property that indicates whether the series name will be visible in the **Legend** . For **Donut** , **Pie** and **Funnel** series the property must be set on the items.|
| **ZIndex** |A numeric property that indicates the order of the series.|

## Attribute Properties in [SeriesType] > Appearance > FillStyle


|  **Name**  |  **Description**  |
| ------ | ------ |
| **BackgroundColor** |The background color of the items from this series. This property can take a common color name or a hex value. If it you have not set ths property explicitly, the control will pick one according to the skin it has set.|

## Attribute Properties in [SeriesType] > Appearance > Overlay


|  **Name**  |  **Description**  |
| ------ | ------ |
| **Gradient** |The series overlay gradient that takes the following values listed in **List 1**|

>caption List 1: Values for the Gradient property.

*  **None** 
*  **Glass** - **Bar** , **Column** , **RangeBar** , **RangeColumn** , **Candlestick** and **BoxPlot** series specific.
*  **RoundedBevel** - **Pie** and **donut** series specific.
*  **SharpBevel** - **Pie** and **donut** series specific.

## Attribute Properties in [SeriesType] > LabelsAppearance


|  **Name**  |  **Description**  |
| ------ | ------ |
| **Color** |The text color of the labels for the items from this series. Can take a common color name or a hex value. If it is not set explicitly the control will pick one according to the Skin it has set.|
| **ClientTemplate** |A string for the client template that will be applied to the labels when they render. It can use any column from the data source given to the chart through the following syntax: **#=dataItem.ColumnName#** where the string delimited inside #=.....# is the expression to be evaluated. See [here]({%slug htmlchart/functionality/clienttemplate/overview%}) for more information.|
| **DataField** |The field of the data source that will be used for the value of the labels for the items.|
| **DataFormatString** |The format string that will form the tooltip's text: for **AreaSeries** , **BarSeries** , **ColumnSeries** , **DonutSeries** , **FunnelSeries** , **LineSeries** , **PieSeries** , **RadarAreaSeries** , **RadarColumnSeries** , **RadarLineSeries** , **WaterfallSeries** and **HorizontalWaterfallSeries** use the **{0}** placeholder that denote the **Y** value of the item; for **ScatterSeries** and **ScatterLineSeries** use the **{0}** and **{1}** placeholders that denote the **X** and **Y** values of the item; for **PolarAreaSeries** , **PolarLineSeries** and **PolarScatterSeries** use the **{0}** and **{1}** placeholders that denote accordingly the **Angle** and **Radius** values of the item; for **BubbleSeries** use the **{0}** , **{1}** , **{2}** and **{3}** placeholders that denote accordingly the **X** , **Y** , **Size** and **Tooltip** values of the item. *The Series labels in __BoxPlotSeries__ and __CandlestickSeries__ are not supported.*|
| **Position** |Defines the position of the labels relative to their items. More details about the values used to define it are listed in **List 2**. |
| **RotationAngle** |The angle at which the labels are rotated.|
| **Visible** |Defines whether the labels will be shown. Values are **True** or **False** .|

>caption List 2: Available values for the Position property.

* For **BarSeries** , **ColumnSeries** , **WaterfallSeries** and **HorizontalWaterfallSeries** - The Telerik.Web.UI.HtmlChart.BarColumnLabelsPosition enumeration:
	*  **Center** - The label is positioned at the bar center.
	*  **InsideEnd** - The label is positioned inside, near the end of the bar.
	*  **InsideBase** - The label is positioned inside, near the base of the bar.
	*  **OutsideEnd** - The label is positioned outside, near the end of the bar.Not applicable for stacked series

* For **PieSeries** and **DonutSeries** - The Telerik.Web.UI.HtmlChart.PieAndDonutLabelsPosition enumeration:
	*  **Center** - The labels are positioned at the center of the pie/donut.
	*  **InsideEnd** - The labels are positioned inside, near the end of the pie/donut.
	*  **OutsideEnd** - The labels are positioned outside, near the end of the pie/donut.

* For **LineSeries** , **ScatterSeries** and **ScatterLineSeries** - The Telerik.Web.UI.HtmlChart.LineAndScatterLabelsPosition enumeration:
	*  **Above** - The label is positioned at the top.
	*  **Right** - The label is positioned at the right.
	*  **Below** - The label is positioned at the bottom.
	*  **Left** - The label is positioned at the left.

## Attribute Properties in [RangeColumnSeries/RangeBarSeries] > LabelsAppearance > FromLabelsAppearance / ToLabelsAppearance

Inherits the LabelsAppearance class.

## Attribute Properties in [SeriesType] > LabelsAppearance > TextStyle

See [this article]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%}) for more information on the text styles.


|  **Name**  |  **Description**  |
| ------ | ------ |
| **Bold** |Specifies whether the font of the labels' text is bold. Values are **True** or **False** .|
| **Color** |Specifies the color of the labels' text. Uses values of type **System.Drawing.Color** .|
| **FontFamily** |Specifies the font family of the labels' text. Takes a string with the font family name.|
| **FontSize** |Specifies the font size of the labels' text. Takes the size in pixels.|
| **Italic** |Specifies whether the font of the labels' text is italic. Values are **True** or **False** .|
| **Margin** |Specifies the margin of the labels' text. Takes the margin value in pixels. The **Position** property in **[SeriesType] > Appearance > LabelsAppearance** should not be set to **Center** in order for this setting to take effect.|
| **Padding** |Specifies the padding of the labels' text. Takes the padding value in pixels. The **Position** property in **[SeriesType] > Appearance > LabelsAppearance** should not be set to **Center** in order for this setting to take effect.|

## Attribute Properties in [SeriesType] > TooltipsAppearance


|  **Name**  |  **Description**  |
| ------ | ------ |
| **BackgroundColor** |The background color of the tooltips for the items from this series. Can take a common color name or a hex value. If it is not set explicitly, the control will pick one according to the skin it has set.|
| **Color** |The text color of the tooltips for the items from this series. Can take a common color name or a hex value. If it is not set explicitly the control will pick one according to the Skin it has set.|
| **ClientTemplate** |A string for the client template that will be applied to the tooltips when they render. It can use any column from the data source given to the chart through the following syntax: **#=dataItem.ColumnName#** where the string delimited inside #=.....# is the expression to be evaluated. The tooltips are HTML so HTML can be used outside of the expression tags. See [here]({%slug htmlchart/functionality/clienttemplate/overview%}) for more information.|
| **DataFormatString** |The format string that will form the tooltip's text. You can find more details about defining the value in **List 3**.|
| **Visible** |Defines whether the tooltips will be shown. Values are **True** or **False** .|

>caption List 3: Values for the DataFormatString property.

*  **AreaSeries** , **BarSeries** , **ColumnSeries** , **DonutSeries** , **FunnelSeries** , **LineSeries** , **PieSeries** , **RadarAreaSeries** , **RadarColumnSeries** , **RadarLineSeries** , **WaterfallSeries** and **HorizontalWaterfallSeries** use the **{0}** placeholder that denote the **Y** value of the item.

*  **BulletSeries** and **VerticalBulletSeries** use the **{0}** and **{1}** placeholders that denote the **Current** and **Target** values of the item.

*  **ScatterSeries** and **ScatterLineSeries** use the **{0}** and **{1}** placeholders that denote the **X** and **Y** values of the item.

*  **PolarAreaSeries** , **PolarLineSeries** and **PolarScatterSeries** use the **{0}** and **{1}** placeholders that denote accordingly the **Angle** and **Radius** values of the item.

*  **BubbleSeries** use the **{0}** , **{1}** , **{2}** and **{3}** placeholders that denote accordingly the **X** , **Y** , **Size** and **tooltip** values of the item.

*  **CandlestickSeries** tooltips have a predefined pattern by design, they can be modified through **{0}** , **{1}** , **{2}** , **{3}** and **{4}** placeholders that denote accordingly the **Open** , **High** , **Low** , **Close** and the corresponding x-axis item's value.

*  **BoxPlotSeries** tooltips have already predefined pattern by design, however, it can be modified through **{0}** , **{1}** , **{2}** , **{3}** , **{4}** , **{5}** and **{6}** placeholders that denote accordingly the **Lower** , **Q1** , **Median** , **Q3** , **Upper** , **Mean** and the corresponding x-axis item's value.|

## Attribute Properties in [AreaSeries, LineSeries, PolarAreaSeries, PolarLineSeries, RadarAreaSeries, RadarLineSeries and ScatterLineSeries] > LineAppearance


|  **Name**  |  **Description**  |
| ------ | ------ |
| **Width** |The width of the line for the series. Takes the width in pixels.|
| **LineStyle** |A string property that takes the following values: **Normal**—data points from series will be connected with straight lines; **Smooth**—Data points from series will be connected with fitted curves; **Step**—Data points from series will be connected with lines that have right angle. _Note that the **Step** property is available only for **AreaSeries** and **LineSeries**._|

## Attribute Properties in [AreaSeries, LineSeries, ScatterSeries and ScatterLineSeries] > MarkersAppearance


|  **Name**  |  **Description**  |
| ------ | ------ |
| **BackgroundColor** |The background color of the markers for the items from this series. Can take a common color name or a hex value. If this property is not set explicitly, the control will pick one according to the skin it has set.|
| **BorderColor** |The color of the markers' borders for the items from this series. Can take a common color name or a hex value. If it this property is not set explicitly, the control will inherit the color of series itself.|
| **BorderWidth** |The width of the markers' borders for the items from this series. Takes the width in pixels.|
| **MarkersType** |Sets the type of markers the series uses. An enumeration (Telerik.Web.UI.HtmlChart.MarkersType) with the following values: **Circle** , **Cross** , **Square** , **Triangle** .|
| **Size** |Specifies the size of the markers the series uses. Takes the size in pixels.|
| **Visible** |Defines whether the markers will be shown. Values are **True** or **False** .|

## Attribute Properties in [BoxPlotSeries] > [OutliersAppearance, ExtremesAppearance]


|  **Name**  |  **Description**  |
| ------ | ------ |
| **BackgroundColor** |The background color of the outliers for the items from this series. Can take a common color name or a hex value. If this property is not set explicitly, the control will pick one according to the skin it has set.|
| **MarkersType** |Chooses the shape of the outliers the series uses. An enumeration (Telerik.Web.UI.HtmlChart.OutliersMarkersType) with the following values: **Circle** , **Cross** , **Square** and **Triangle** .|
| **RotationAngle** |The angle at which the outliers are rotated.|
| **Size** |Specifies the size of the outliers the series uses. Takes the size in pixels.|
| **Visible** |Defines whether the outliers will be shown. True or false.|

## Attribute Properties in [BoxPlotSeries] > [OutliersAppearance, ExtremesAppearance] > [BorderAppearance]


|  **Name**  |  **Description**  |
| ------ | ------ |
| **Color** |The color of the outliers' borders for the items from this series. Can take a common color name or a hex value. If this property is not set explicitly, the control will inherit the color of Series itself.|
| **Width** |The width of the outliers' borders for the items from this series. Takes the width in pixels.|

## See Also

 * [Overview]({%slug htmlchart/server-side-programming/overview%})

 * [Basic Configuration]({%slug htmlchart/server-side-programming/basic-configuration%})

 * [Series Items Configuration]({%slug htmlchart/server-side-programming/series-items-configuration%})

 * [Axes Configuration]({%slug htmlchart/server-side-programming/axes-configuration%})

 * [Client Templates for Series Labels]({%slug htmlchart/functionality/clienttemplate/overview%})
