---
title: Axes Configuration
page_title: Axes Configuration | UI for ASP.NET AJAX Documentation
description: Axes Configuration
slug: htmlchart/server-side-programming/axes-configuration
tags: axes,configuration
published: True
position: 5
---

# Axes Configuration



This help article will tell you which properties to set for the axes of the different __RadHtmlChart__ series. The axes are child elements of the __PlotArea__ element of the __RadHtmlChart__. Both the __X__ and __Y__ axes have a common set of properties and inner tags. The major difference is that in most cases, the x-axis requires a set of items while the y-axis requires a numerical value. The exceptions are __PieSeries__, __DonutSeries__ and __FunnelSeries__ where there are no axes, and __ScatterSeries__, __ScatterLineSeries__ and __BubbleSeries__ where the x-axis is also numerical.

As of the Q3 2012 release, you can declare multiple y-axes in the __AdditionalYAxes__ tag inside __PlotArea__. These additional axes have the same configuration options as the main __YAxis__. Each series offers the __AxisName__ property which corresponds to the __Name__ property of the additional axis used by the series.

## Attribute Properties in the [Axis] Tag


|  __Name__  |  __Description__  |
| ------ | ------ |
| __AxisCrossingValue__ |Sets the value of this axis where the other axis will cross it. For a numerical x-axis, i.e., __ScatterSeries__ and __ScatterLineSeries__ and the y-axis, this is the numerical value where the axes cross. For a category axis (e.g., like most cases for the x-axis) this is the item index where the axes cross.|
| __AxisCrossingPoints__ |A collection that holds the __AxisCrossingPoint__ objects. They are used to rearrange the position of the main and the additional y-axes of the chart.

>note This collection is available only in the __XAxis__ inner tag of the __PlotArea__ .
>
|
| __Color__ |The color of the axis line. It can take a common color name or a hex value (e.g., "red", "#ff0000") when set in the markup and a value of type __System.Drawing.Color__ when set in the code behind.|
| __BaseUnit__ |Controls the scale of the axis (the time intervals through which a label is placed on the date axis). The available options are __"auto"__ , __"years"__ , __"months"__ , __"weeks"__ , __"days"__ , __"hours"__ , __"minutes"__ and __"seconds"__ .|
| __DataLabelsField__ |The field from the data source where the string for the label is stored. This information is used for the __DataFormatString__ property of the labels and tooltips via the __{0}__ placeholder as well as templates via the __#=category#__ field. This property is meaningful for the x-axis only, because the y-axis is always numerical and adjusts its range according to the values the series have. The nearest equivalent is setting the __MinValue__ and __MaxValue__ for the y-axis depending on your data source.|
| __MajorTickSize__ |The size of the ticks that mark the major grid lines.|
| __MajorTickType__ |The type of the ticks that mark the major grid lines. An enumeration that is either __None__ or __Outside__ .|
| __MaxDateValue__ |The last date displayed on the category date axis (i.e., area, bar, column, line, etc., series). The default value is the date from the last category.|
| __MaxValue__ |The maximal numerical value of the axis. The property takes effect only for a numerical axis. Chosen by the control according to the data if not set explicitly.|
| __MinDateValue__ |The first date displayed on the category date axis (i.e., area, bar, column, line, etc., series). The default value is the date from the first category.|
| __MinorTickSize__ |The size of the ticks that mark the minor grid lines.|
| __MinorTickType__ |The type of the ticks that mark the minor grid lines. An enumeration that is either __None__ or __Outside__ .|
| __MinValue__ |The minimal numerical value of the axis. The property takes effect only for a numerical axis. Chosen by the control according to the data if not set explicitly.|
| __Name__ |The Name of the y-axis that can be used in the __AxisName__ property of each series to indicate which y-axis will be used by the particular series. Applicable when multiple y-axes are used. Can be left blank for the default y-axis.|
| __Reversed__ |Determines whether the axis will be reversed (i.e., the low values in the place of the high values).|
| __StartAngle__ |

*  __PolarAreaSeries__ , __PolarLineSeries__ and __PolarScatterSeries__ - The angle (degrees) where the 0 value is placed. Angles increase counterclockwise and zero is to the right. Negative values are acceptable. Default value is 90.

*  __RadarAreaSeries__ , __RadarColumnSeries__ and __RadarLineSeries__ - The angle (degrees) of the first category on the axis. Angles increase clockwise and zero is to the left. Negative values are acceptable. Default value is 0.|
| __Step__ |The step through which major grid lines and axis labels are placed. Chosen by the control according to the data if not set explicitly. Applicable for numeric axes only.|
| __Type__ |Controls the type of the axis. Detailed information on the supported values for the x-axis/y-axis in numeric and category series is available in __List 1__ and __List 2__ below. __List 1__ : __YAxis.Type__ property values.

*  __Numeric__ - Sets a linear scale for the axis. Applicable for numeric and category series.

*  __Log__ - Sets a logarithmic scale for the axis. See[Logarithmic Axis]({%slug htmlchart/functionality/axes/logarithmic-axis%})help article for details. Applicable for numeric and category series. __List 2__ : __XAxis.Type__ property values.

*  __Auto__ - Automatically detects the type of the axis. Applicable for numeric and category series.

*  __Category__ - Used for displaying discrete data. See[Date Axis]({%slug htmlchart/functionality/axes/date-axis%})help article for details. Applicable for category series.

*  __Date__ - Used for displaying chronological data. See[Date Axis]({%slug htmlchart/functionality/axes/date-axis%})help article for details. Applicable for category series.

*  __Log__ - Sets a logarithmic scale for the axis. See[Logarithmic Axis]({%slug htmlchart/functionality/axes/logarithmic-axis%})help article for details. Applicable for numeric series.|
| __Visible__ |Whether to render the axis. __True__ or __False__ .|
| __Width__ |Sets the width of the axis line in pixels.|

## Attribute Properties in [Axis] > LabelsAppearance


|  __Name__  |  __Description__  |
| ------ | ------ |
| __DataFormatString__ |The format string that will form the labels' text. The __{0}__ placeholder is used to denote the value of the tick.|
| __Mirror__ |A boolean property that indicates whether axes labels, ticks and title will be mirrored. Default value is false.|
| __RotationAngle__ |The angle that is used for rotating the label. The zero mark is vertical and the positive direction is clockwise.|
| __Skip__ |The number of axes labels to be skipped.|
| __Step__ |The rendering step for axes labels - render every n-th label.|
| __Visible__ |Specifies whether the labels are rendered. __True__ or __False__ .|

## Attribute Properties in [Axis] > LabelsAppearance > TextStyle

See [this article]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%}) for more information on text styles.


|  __Name__  |  __Description__  |
| ------ | ------ |
| __Bold__ |Specifies whether the font of the labels' text is bold. __True__ or __False__ .|
| __Color__ |Specifies the color of the labels' text. It can take a common color name or a hex value (e.g., "red", "#ff0000") when set in the markup and a value of type __System.Drawing.Color__ when set in the code behind.|
| __FontFamily__ |Specifies the font family of the labels' text. Takes a string with the font family name.|
| __FontSize__ |Specifies the font size of the labels' text. Takes the size in pixels.|
| __Italic__ |Specifies whether the font of the labels' text is italic. __True__ or __False__ .|
| __Margin__ |Specifies the margin of the labels' text. Takes the margin value in pixels.|
| __Padding__ |Specifies the padding of the labels' text. Takes the padding value in pixels.|

## Attribute Properties in [Axis] > LabelsAppearance > DateFormats


|  __Name__  |  __Description__  |
| ------ | ------ |
| __SecondsFormat__ |The date format string that will be used for the x-axis labels when the x-axis' __BaseUnit__ property is set to "Seconds".|
| __MinutesFormat__ |The date format string that will be used for the x-axis labels when the x-axis' __BaseUnit__ property is set to "Minutes".|
| __HoursFormat__ |The date format string that will be used for the x-axis labels when the x-axis' __BaseUnit__ property is set to "Hours".|
| __DaysFormat__ |The date format string that will be used for the x-axis labels when the x-axis' __BaseUnit__ property is set to "Days".|
| __WeeksFormat__ |The date format string that will be used for the x-axis labels when the x-axis' __BaseUnit__ property is set to "Weeks".|
| __MonthsFormat__ |The date format string that will be used for the x-axis labels when the x-axis' __BaseUnit__ property is set to "Months".|
| __YearsFormat__ |The date format string that will be used for the x-axis labels when the x-axis' __BaseUnit__ property is set to "Years".|

## Attribute Properties in [Axis] > MajorGridLines and in [Axis] > MinorGridLines


|  __Name__  |  __Description__  |
| ------ | ------ |
| __Color__ |The color for the grid lines. It can take a common color name or a hex value (e.g., "red", "#ff0000") when set in the markup and a value of type __System.Drawing.Color__ when set in the code behind.|
| __Visible__ |Sets whether to render the grid lines. __True__ or __False__ |
| __Width__ |The width of the grid line in pixels.|

## Attribute Properties in [Axis] > PlotBands > PlotBand


|  __Name__  |  __Description__  |
| ------ | ------ |
| __Alpha__ |Gets or Sets the Alpha value of the color filling the PlotBand. Uses values of type __byte__ .|
| __Color__ |Gets or Sets the color filling the PlotBand. It can take a common color name or a hex value (e.g., "red", "#ff0000") when set in the markup and a value of type __System.Drawing.Color__ when set in the code behind.|
| __From__ |Gets or Sets the PlotBand's starting point. Takes a decimal with the value of the starting point.|
| __To__ |Gets or Sets the PlotBand's ending point. Takes a decimal with the value of the ending point.|

## Attribute Properties in [Axis] > TitleAppearance


|  __Name__  |  __Description__  |
| ------ | ------ |
| __Position__ |Chooses the position where the title of the axis is shown. An enumeration (Telerik.Web.UI.HtmlChart.AxisTitlePosition) with the following values: Bottom, Center, Left, Right, Top where Top and Bottom are applicable only for the vertical axis while Left and Right are applicable for the horizontal axis only. The Center option is available for both axes.|
| __RotationAngle__ |The angle that is used for rotating the title of the axis. The zero mark is horizontal for the x-axis and vertical with reading order from bottom to top for the y-axis. The positive direction is clockwise.|
| __Text__ |The string that is displayed as an axis title.|
| __Visible__ |Sets whether the axis title is rendered. __True__ or __False__ .|

## Attribute Properties in [Axis] > TitleAppearance > TextStyle

See [this article]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%}) for more information on text styles.


|  __Name__  |  __Description__  |
| ------ | ------ |
| __Bold__ |Specifies whether the font of the axis title's text is bold. __True__ or __False__ .|
| __Color__ |Specifies the color of the axis title's text. It can take a common color name or a hex value (e.g., "red", "#ff0000") when set in the markup and a value of type __System.Drawing.Color__ when set in the code behind.|
| __FontFamily__ |Specifies the font family of the axis title's text. Takes a string with the font family name.|
| __FontSize__ |Specifies the font size of the axis title's text. Takes the size in pixels.|
| __Italic__ |Specifies whether the font of the axis title's text is italic. __True__ or __False__ .|
| __Margin__ |Specifies the margin of the axis title's text. Takes the margin value in pixels.|
| __Padding__ |Specifies the padding of the axis title's text. Takes the padding value in pixels.|

# See Also

 * [Overview]({%slug htmlchart/server-side-programming/overview%})

 * [Basic Configuration]({%slug htmlchart/server-side-programming/basic-configuration%})

 * [Series Configuration]({%slug htmlchart/server-side-programming/series-configuration%})

 * [Series Items Configuration]({%slug htmlchart/server-side-programming/series-items-configuration%})

 * [Navigator Configuration]({%slug htmlchart/server-side-programming/navigator-configuration%})

 * [Format Dates]({%slug htmlchart/appearance-and-styling/format-dates%})

 * [Labels and Titles Font Settings]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%})

 * [Multiple Y-Axes]({%slug htmlchart/functionality/axes/multiple-y-axes%})

 * [RadHtmlChart Structure]({%slug htmlchart/radhtmlchart-structure%})
