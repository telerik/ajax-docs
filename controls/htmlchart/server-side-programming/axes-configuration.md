---
title: Axes Configuration
page_title: Axes Configuration | RadHtmlChart for ASP.NET AJAX Documentation
description: Axes Configuration
slug: htmlchart/server-side-programming/axes-configuration
tags: axes,configuration
published: True
position: 5
---

# Axes Configuration

This help article will tell you which properties to set for the axes of the different **RadHtmlChart** series. The axes are child elements of the **PlotArea** element of the **RadHtmlChart**. Both the **X** and **Y** axes have a common set of properties and inner tags. The major difference is that in most cases, the x-axis requires a set of items while the y-axis requires a numerical value. The exceptions are **PieSeries**, **DonutSeries** and **FunnelSeries** where there are no axes, and **ScatterSeries**, **ScatterLineSeries** and **BubbleSeries** where the x-axis is also numerical.

As of the Q3 2012 release, you can declare multiple y-axes in the **AdditionalYAxes** tag inside **PlotArea**. These additional axes have the same configuration options as the main **YAxis**. Each series offers the **AxisName** property which corresponds to the **Name** property of the additional axis used by the series.

## Attribute Properties in the [Axis] Tag
You can find samples implementing the below described properties in the following resources:
  * **Logarithmic Axis** - [article]({%slug htmlchart/functionality/axes/logarithmic-axis%}) and [demo](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/functionality/logarithmic-axis/defaultcs.aspx)
  * **Multiple Y-Axes** - [article]({%slug htmlchart/functionality/axes/multiple-y-axes%}) and [demo](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/functionality/multipleyaxes/defaultcs.aspx)
  * [Negative Values demo](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/functionality/negativevalues/defaultcs.aspx)
  * [Chart Element Customization demo](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/appearance/configuringappearance/defaultcs.aspx)
  

|  **Name**  |  **Description**  |
| ------ | ------ |
| **AxisCrossingValue** |Sets the value of this axis where the other axis will cross it. For a numerical x-axis, i.e., **ScatterSeries** and **ScatterLineSeries** and the y-axis, this is the numerical value where the axes cross. For a category axis (e.g., like most cases for the x-axis) this is the item index where the axes cross.|
| **AxisCrossingPoints** |A collection that holds the **AxisCrossingPoint** objects. They are used to rearrange the position of the main and the additional y-axes of the chart. _This collection is available only in the **XAxis** inner tag of the **PlotArea**._|
| **Color** |The color of the axis line. It can take a common color name or a hex value (e.g., "red", "#ff0000") when set in the markup and a value of type **System.Drawing.Color** when set in the code behind.|
| **BaseUnit** |Controls the scale of the axis (the time intervals through which a label is placed on the date axis). The available options are **"auto"** , **"years"** , **"months"** , **"weeks"** , **"days"** , **"hours"** , **"minutes"** and **"seconds"** .|
| **DataLabelsField** |The field from the data source where the string for the label is stored. This information is used for the **DataFormatString** property of the labels and tooltips via the **{0}** placeholder as well as templates via the **#=category#** field. This property is meaningful for the x-axis only, because the y-axis is always numerical and adjusts its range according to the values the series have. The nearest equivalent is setting the **MinValue** and **MaxValue** for the y-axis depending on your data source.|
| **Justified** |Applicable for a categorical x-axis. Defines whether the axis categories and series points will be positioned on major ticks. When set to true, removes the empty space before and after the series. This option is ignored if the series are of type "bar", "column", "boxPlot", "ohlc", "candlestick" or "waterfall". The default value is unset to preserve the default behavior of different series - it defaults to false for most series, but defaults to true for "area", "verticalArea", "rangeArea" and "verticalRangeArea".|
| **MajorTickSize** |The size of the ticks that mark the major grid lines.|
| **MajorTickType** |The type of the ticks that mark the major grid lines. An enumeration that is either **None** or **Outside** .|
| **MaxDateValue** |The last date displayed on the category date axis (i.e., area, bar, column, line, etc., series). The default value is the date from the last category.|
| **MaxValue** |The maximal numerical value of the axis. The property takes effect only for a numerical axis. Chosen by the control according to the data if not set explicitly.|
| **MinDateValue** |The first date displayed on the category date axis (i.e., area, bar, column, line, etc., series). The default value is the date from the first category.|
| **MinorTickSize** |The size of the ticks that mark the minor grid lines.|
| **MinorTickType** |The type of the ticks that mark the minor grid lines. An enumeration that is either **None** or **Outside** .|
| **MinValue** |The minimal numerical value of the axis. The property takes effect only for a numerical axis. Chosen by the control according to the data if not set explicitly.|
| **Name** |The Name of the y-axis that can be used in the **AxisName** property of each series to indicate which y-axis will be used by the particular series. Applicable when multiple y-axes are used. Can be left blank for the default y-axis.|
| **NarrowRange** | A boolean property that indicates whether the automatic y-axis range snapping to 0 will be prevented.|
| **Reversed** |Determines whether the axis will be reversed (i.e., the low values in the place of the high values).|
| **StartAngle** | **PolarAreaSeries** , **PolarLineSeries** and **PolarScatterSeries** - The angle (degrees) where the 0 value is placed. Angles increase counter clockwise and zero is to the right. Negative values are acceptable. Default value is 90. **RadarAreaSeries** , **RadarColumnSeries** and **RadarLineSeries** - The angle (degrees) of the first category on the axis. Angles increase clockwise and zero is to the left. Negative values are acceptable. Default value is 0.|
| **Step** |The step through which major grid lines and axis labels are placed. Chosen by the control according to the data if not set explicitly. Applicable for numeric axes only.|
| **Type** |Controls the type of the axis. Detailed information on the supported values for the x-axis/y-axis in numeric and category series is available in **List 1** and **List 2** below. |
| **Visible** |Whether to render the axis. **True** or **False** .|
| **Width** |Sets the width of the axis line in pixels.|


>caption List 1: **YAxis.Type** property values.

*  **Numeric** - Sets a linear scale for the axis. Applicable for numeric and category series.

*  **Log** - Sets a logarithmic scale for the axis. See [Logarithmic Axis]({%slug htmlchart/functionality/axes/logarithmic-axis%}) help article for details. Applicable for numeric and category series. 

>caption List 2: **XAxis.Type** property values.

*  **Auto** - Automatically detects the type of the axis. Applicable for numeric and category series.

*  **Category** - Used for displaying discrete data. See [Date Axis]({%slug htmlchart/functionality/axes/date-axis%}) help article for details. Applicable for category series.

*  **Date** - Used for displaying chronological data. See [Date Axis]({%slug htmlchart/functionality/axes/date-axis%}) help article for details. Applicable for category series.

*  **Log** - Sets a logarithmic scale for the axis. See [Logarithmic Axis]({%slug htmlchart/functionality/axes/logarithmic-axis%}) help article for details. Applicable for numeric series.

## Attribute Properties in [Axis] > LabelsAppearance

You can find samples implementing the below described properties in the following resources:  
* [Labels and Titles Font Settings article]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%})
* [Negative Values demo](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/functionality/negativevalues/defaultcs.aspx)

|  **Name**  |  **Description**  |
| ------ | ------ |
| **DataFormatString** |The format string that will form the labels' text. The **{0}** placeholder is used to denote the value of the tick.|
| **Mirror** |A boolean property that indicates whether axes labels, ticks and title will be mirrored. Default value is false.|
| **Position** |The position of the axis labels with relation to the current axis and the crossing axis. See **List 3** below for possible values and details.|
| **RotationAngle** |The angle that is used for rotating the label. The zero mark is vertical and the positive direction is clockwise.|
| **Skip** |The number of axes labels to be skipped.|
| **Step** |The rendering step for axes labels - render every n-th label.|
| **Visible** |Specifies whether the labels are rendered. **True** or **False** .|

>caption List 3: **[Axis].LabelsAppearance.Position** property values (`Telerik.Web.UI.HtmlChart.AxisLabelPosition` enum).

* **OnAxis** - the default value, the labels are rendered next to the axis.

* **Start** - the labels are rendered at the beginning of the crossing axis. For example, the x-axis labels will be rendered at the bottom (or the left) of the chart, depending on the chart type. Reverses when the crossing axis is `Reversed`.

* **End** - the labels are rendered at the end of the crossing axis. For example, the x-axis labels will be rendered at the top (or the right) of the chart, depending on the chart type. Reverses when the crossing axis is `Reversed`.


## Attribute Properties in [Axis] > LabelsAppearance > TextStyle
You can find samples implementing the below described properties in the following resources:  
* [Labels and Titles Font Settings article]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%})
* [Using Client Templates in Axes Labels article](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/functionality/clienttemplate/using-client-templates-legend-axes#client-template)

|  **Name**  |  **Description**  |
| ------ | ------ |
| **Bold** |Specifies whether the font of the labels' text is bold. **True** or **False** .|
| **Color** |Specifies the color of the labels' text. It can take a common color name or a hex value (e.g., "red", "#ff0000") when set in the markup and a value of type **System.Drawing.Color** when set in the code behind.|
| **FontFamily** |Specifies the font family of the labels' text. Takes a string with the font family name.|
| **FontSize** |Specifies the font size of the labels' text. Takes the size in pixels.|
| **Italic** |Specifies whether the font of the labels' text is italic. **True** or **False** .|
| **Margin** |Specifies the margin of the labels' text. Takes the margin value in pixels.|
| **Padding** |Specifies the padding of the labels' text. Takes the padding value in pixels.|

## Attribute Properties in [Axis] > LabelsAppearance > DateFormats
You can find samples implementing the below described properties in the following resources:
* **Date Axis** - [article]({%slug htmlchart/functionality/axes/date-axis%}) and [demo](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/functionality/dateaxis/defaultcs.aspx)
* [Date Axis Base Unit Steps article]({%slug htmlchart/functionality/axes/date-axis-base-unit-steps%})

|  **Name**  |  **Description**  |
| ------ | ------ |
| **SecondsFormat** |The date format string that will be used for the x-axis labels when the x-axis' **BaseUnit** property is set to "Seconds".|
| **MinutesFormat** |The date format string that will be used for the x-axis labels when the x-axis' **BaseUnit** property is set to "Minutes".|
| **HoursFormat** |The date format string that will be used for the x-axis labels when the x-axis' **BaseUnit** property is set to "Hours".|
| **DaysFormat** |The date format string that will be used for the x-axis labels when the x-axis' **BaseUnit** property is set to "Days".|
| **WeeksFormat** |The date format string that will be used for the x-axis labels when the x-axis' **BaseUnit** property is set to "Weeks".|
| **MonthsFormat** |The date format string that will be used for the x-axis labels when the x-axis' **BaseUnit** property is set to "Months".|
| **YearsFormat** |The date format string that will be used for the x-axis labels when the x-axis' **BaseUnit** property is set to "Years".|

## Attribute Properties in [Axis] > MajorGridLines and in [Axis] > MinorGridLines


|  **Name**  |  **Description**  |
| ------ | ------ |
| **Color** |The color for the grid lines. It can take a common color name or a hex value (e.g., "red", "#ff0000") when set in the markup and a value of type **System.Drawing.Color** when set in the code behind.|
| **DashType** |Sets the dash type of the grid lines. An enumeration (Telerik.Web.UI.HtmlChart.Enums.DashType) with the following values: **Dash** , **DashDot** , **Dot** , **LongDash**, **LongDashDot**, **LongDashDotDot**, **Solid** .|
| **Visible** |Sets whether to render the grid lines. **True** or **False** |
| **Width** |The width of the grid line in pixels.|

## Attribute Properties in [Axis] > PlotBands > PlotBand
You can find samples implementing the below described properties in the following resources:
  * **Plot Bands** - [article]({%slug htmlchart/functionality/plot-bands%}) and [demo](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/functionality/plot-bands/defaultcs.aspx)
  

|  **Name**  |  **Description**  |
| ------ | ------ |
| **Alpha** |Gets or Sets the Alpha value of the color filling the PlotBand. Uses values of type **byte** .|
| **Color** |Gets or Sets the color filling the PlotBand. It can take a common color name or a hex value (e.g., "red", "#ff0000") when set in the markup and a value of type **System.Drawing.Color** when set in the code behind.|
| **From** |Gets or Sets the PlotBand's starting point. Takes a decimal with the value of the starting point.|
| **FromDate** |Gets or Sets the PlotBand's starting date for use with a date axis. Takes a DateTime object and serializes its individual values without converting. Available as of R1 2019.|
| **To** |Gets or Sets the PlotBand's ending point. Takes a decimal with the value of the ending point.|
| **ToDate** |Gets or Sets the PlotBand's ending date for use with a date axis. Takes a DateTime object and serializes its individual values without converting. Available as of R1 2019.|

## Attribute Properties in [Axis] > TitleAppearance
You can find samples implementing the below described properties in the following resources:
  * [Labels and Titles Font Settings article]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%})

|  **Name**  |  **Description**  |
| ------ | ------ |
| **Position** |Chooses the position where the title of the axis is shown. An enumeration (Telerik.Web.UI.HtmlChart.AxisTitlePosition) with the following values: Bottom, Center, Left, Right, Top where Top and Bottom are applicable only for the vertical axis while Left and Right are applicable for the horizontal axis only. The Center option is available for both axes.|
| **RotationAngle** |The angle that is used for rotating the title of the axis. The zero mark is horizontal for the x-axis and vertical with reading order from bottom to top for the y-axis. The positive direction is clockwise.|
| **Text** |The string that is displayed as an axis title.|
| **Visible** |Sets whether the axis title is rendered. **True** or **False** .|

## Attribute Properties in [Axis] > TitleAppearance > TextStyle

See [this article]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%}) for more information on text styles.


|  **Name**  |  **Description**  |
| ------ | ------ |
| **Bold** |Specifies whether the font of the axis title's text is bold. **True** or **False** .|
| **Color** |Specifies the color of the axis title's text. It can take a common color name or a hex value (e.g., "red", "#ff0000") when set in the markup and a value of type **System.Drawing.Color** when set in the code behind.|
| **FontFamily** |Specifies the font family of the axis title's text. Takes a string with the font family name.|
| **FontSize** |Specifies the font size of the axis title's text. Takes the size in pixels.|
| **Italic** |Specifies whether the font of the axis title's text is italic. **True** or **False** .|
| **Margin** |Specifies the margin of the axis title's text. Takes the margin value in pixels.|
| **Padding** |Specifies the padding of the axis title's text. Takes the padding value in pixels.|

## See Also

 * [Overview]({%slug htmlchart/server-side-programming/overview%})

 * [Basic Configuration]({%slug htmlchart/server-side-programming/basic-configuration%})

 * [Series Configuration]({%slug htmlchart/server-side-programming/series-configuration%})

 * [Series Items Configuration]({%slug htmlchart/server-side-programming/series-items-configuration%})

 * [Navigator Configuration]({%slug htmlchart/server-side-programming/navigator-configuration%})

 * [Format Dates]({%slug htmlchart/appearance-and-styling/format-dates%})

 * [Labels and Titles Font Settings]({%slug htmlchart/appearance-and-styling/labels-and-titles-font-settings%})

 * [Multiple Y-Axes]({%slug htmlchart/functionality/axes/multiple-y-axes%})

 * [RadHtmlChart Structure]({%slug htmlchart/radhtmlchart-structure%})
