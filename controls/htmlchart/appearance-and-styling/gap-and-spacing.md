---
title: Gap and Spacing
page_title: Gap and Spacing - RadHtmlChart
description: Check our Web Forms article about Gap and Spacing.
slug: htmlchart/appearance-and-styling/gap-and-spacing
tags: gap,and,spacing
published: True
position: 2
---

# Gap and Spacing

The **Gap** and **Spacing** properties for **BarSeries**, **ColumnSeries** and **RadarColumnSeries** let you configure the gaps between the series categories and the spacing between the chart series items. These properties are available as of **Q1 2014**. They can take negative values to provide series overlap as of **R1 2019**.

The **Gap** and **Spacing** properties of the chart series control the distance between the series items,visualized in the PlotArea of the chart (**Figure 1**):

* **Gap** - The distance between the series categories as a proportion of the width of a single series item.

* **Spacing** - The space between the series items in one series category as a proportion of the width of a single series item.
>caption Figure 1: Configuring Gap and Spacing in a Column chart. 'g' and 's' are the values of Gap and Spacing respectively and 'x' is the width of the series item. For this chart g = 2 and s = 1.

![htmlchart-appearance-gap-and-spacing](images/htmlchart-appearance-gap-and-spacing.png)

**Figure 1** shows the rendered chart demonstrated in **Example 1**. Note how the gap is two times the width of the column item and the spacing has the same width, which corresponds to the values in the example.

As shown in **Example 1**, you configure the values of **Gap** and **Spacing** for the whole chart **in the first series** and they are applied for all categories and series items.

>caption Example 1: Configuring Gap and Spacing in a Column chart.

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Width="500" Height="250">
	<PlotArea>
		<XAxis Color="#b3b3b3">
			<MajorGridLines Color="#EFEFEF"></MajorGridLines>
			<MinorGridLines Color="#F7F7F7"></MinorGridLines>
		</XAxis>
		<YAxis Color="#b3b3b3">
			<MajorGridLines Color="#EFEFEF"></MajorGridLines>
			<MinorGridLines Color="#F7F7F7"></MinorGridLines>
		</YAxis>
		<Series>
			<telerik:ColumnSeries Name="Series 1" Gap="2" Spacing="1" >
				<SeriesItems>
					<telerik:CategorySeriesItem Y="315"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="495"></telerik:CategorySeriesItem>
				</SeriesItems>
			</telerik:ColumnSeries>
			<telerik:ColumnSeries Name="Series 2">
				<SeriesItems>
					<telerik:CategorySeriesItem Y="360"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="540"></telerik:CategorySeriesItem>
				</SeriesItems>
			</telerik:ColumnSeries>
		</Series>
	</PlotArea>
</telerik:RadHtmlChart>
````


The **Gap** and **Spacing** properties can be configured for
* [BarSeries]({%slug htmlchart/chart-types/bar-chart%})
* [ColumnSeries]({%slug htmlchart/chart-types/column-chart%})
* [RadarColumnSeries]({%slug htmlchart/chart-types/radar-chart%})
* [RangeBarSeries]({%slug htmlchart/chart-types/range-bar-chart%})
* [RangeColumnSeries]({%slug htmlchart/chart-types/range-column-chart%})
* [WaterfallSeries]({%slug htmlchart/chart-types/waterfall-chart%}) (only Gap)
* [HorizontalWaterfallSeries]({%slug htmlchart/chart-types/horizontal-waterfall-chart%}) (only Gap)


>caption Figure 2: Overlapping series can be created by setting negative values to the Gap and/or Spacing properties, as shown in Example 2.

![Overlapping series can be created by setting negative values to Gap and/or Spacing](images/gap-and-spacing-negative-values-overlapping-series.png)

>caption Example 2: Negative values for Gap and/or Spacing produce overlapping series. This feature is available as of R1 2019.

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Width="500" Height="250">
	<PlotArea>
		<XAxis Color="#b3b3b3">
			<MajorGridLines Color="#EFEFEF"></MajorGridLines>
			<MinorGridLines Color="#F7F7F7"></MinorGridLines>
		</XAxis>
		<YAxis Color="#b3b3b3">
			<MajorGridLines Color="#EFEFEF"></MajorGridLines>
			<MinorGridLines Color="#F7F7F7"></MinorGridLines>
		</YAxis>
		<Series>
			<telerik:ColumnSeries Name="Series 1" Gap="-0.2" Spacing="-0.2">
				<SeriesItems>
					<telerik:CategorySeriesItem Y="315"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="495"></telerik:CategorySeriesItem>
				</SeriesItems>
			</telerik:ColumnSeries>
			<telerik:ColumnSeries Name="Series 2">
				<SeriesItems>
					<telerik:CategorySeriesItem Y="360"></telerik:CategorySeriesItem>
					<telerik:CategorySeriesItem Y="540"></telerik:CategorySeriesItem>
				</SeriesItems>
			</telerik:ColumnSeries>
		</Series>
	</PlotArea>
</telerik:RadHtmlChart>
````


## See Also

 * [RadHtmlChart Configuring Series]({%slug htmlchart/server-side-programming/series-configuration%})

 * [RadHtmlChart BarSeries]({%slug htmlchart/chart-types/bar-chart%})

 * [RadHtmlChart ColumnSeries]({%slug htmlchart/chart-types/column-chart%})

 * [RadHtmlChart RadarColumnSeries]({%slug htmlchart/chart-types/radar-chart%})
