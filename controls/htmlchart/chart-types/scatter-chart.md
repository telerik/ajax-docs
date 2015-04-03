---
title: Scatter Chart
page_title: Scatter Chart | UI for ASP.NET AJAX Documentation
description: Scatter Chart
slug: htmlchart/chart-types/scatter-chart
tags: scatter,chart
published: True
position: 15
---

# Scatter Chart



## 

A Scatter chart shows data as points defined by their items' values. Its x-axis is also numerical and does not require items.Catter charts are useful for showing the relation between different sets of data, for example scientific (experimental) results.This Help article shows which properties to use to customize a Scatter chart (__Figure 1__) and shows sample code (__Example 1__)	to create one.
>caption Figure 1: A simple Scatter chart.

![htmlchart-scatterchart-simple-example](images/htmlchart-scatterchart-simple-example.png)

You can fully customize the Scatter chart:

* The color of each series is controlled via the __BackgroundColor__ property of the__ScatterSeries > Appearance > FillStyle__ inner tag.

* The name that is shown in the legend is set via the __Name__ property of the __ScatterSeries__.

* The position of each item on the y-axis is controlled by its __Y__ property of the __ScatterSeriesItem__.The position according to the x-axis is set with the __X__ property.

* Each item can have a label and a tooltip that follows the common pattern defined in the __DataFormatString__ property of the__LabelsAppearance__ and __TooltipsAppearance__ sections of the series.The format string uses the __X__ of the item for the __first__ placeholder and the__Y__ for the __second__ placeholder. You can also load custom text from data source fields in labels andtooltips by using the composite [ClientTemplate]({%slug htmlchart/functionality/clienttemplate/overview%}) property.

* The markers are fully customizable—the type, background color, size, border's width and color can beconrolled respectively through __MarkersType__, __BackgroundColor__, __Size__,	__BorderWidth__ and __BorderColor__ properties, exposed by the__ScatterSeries > MarkersAppearance__ tag.

* The axes are also fully customizable—they automatically adjust the scale to accomodate the data that comes in and for finer tuning,there are numerous properties that can change each aspect:

* Directly in the axis tag you can use its properties to control color, major and minor tick types and sizes, minimal and maximal values for the y-axis (plus a step size).This is also the place where the crossing value with the other axis can be set and whether the axis will be reversed.

* The inner tags of the axis tag can control the major and minor grid lines in terms of color and sizeand the labels can have a __DataFormatString__, position and visibility set through each inner tag's properties.

* The title, background colors and legend are controlled via the inner properties of the __RadHtmlChart__ control and are common for all charts.You can find more information in the [Server-side API]({%slug htmlchart/server-side-programming/basic-configuration%})and in the [Element structure]({%slug htmlchart/radhtmlchart-structure%}) articles.

The Scatter chart in __Figure 1__ is created with the code in __Example 1__:

>tip Not all properties are necessary. The __RadHtmlChart__ will match the axes to the values if you do not declare explicit values, steps and tick properties.
>


__Example 1__: The simple Scatter chart shown in Figure 1 using static data.

````ASPNET
			<telerik:RadHtmlChart runat="server" ID="ScatterChart1" Transitions="true" Width="800px">
				<PlotArea>
					<Series>
						<telerik:ScatterSeries Name="Applicance 1">
							<TooltipsAppearance Visible="false" />
							<LabelsAppearance DataFormatString="{1} errors at {0}dBm signal level" />
							<SeriesItems>
								<telerik:ScatterSeriesItem X="-82" Y="15" />
								<telerik:ScatterSeriesItem X="-79" Y="13" />
								<telerik:ScatterSeriesItem X="-77" Y="10" />
								<telerik:ScatterSeriesItem X="-74" Y="7" />
								<telerik:ScatterSeriesItem X="-70" Y="3" />
								<telerik:ScatterSeriesItem X="-65" Y="1" />
							</SeriesItems>
						</telerik:ScatterSeries>
					</Series>
					<XAxis MajorTickType="Outside" MinorTickType="Outside" Reversed="false" AxisCrossingValue="-100" MinValue="-100" MaxValue="-40">
						<LabelsAppearance DataFormatString="{0} dBm" RotationAngle="0" />
						<MajorGridLines Color="#EFEFEF" Width="1" />
						<MinorGridLines Color="#F7F7F7" Width="1" />
						<TitleAppearance Position="Center" RotationAngle="0" Text="Signal Strength" />
					</XAxis>
					<YAxis AxisCrossingValue="0" Color="Black" MajorTickSize="1" MajorTickType="Outside"
						MinorTickSize="1" MinorTickType="Outside" Reversed="false" MaxValue="18">
						<LabelsAppearance DataFormatString="{0} errors" RotationAngle="0" />
						<MajorGridLines Color="#EFEFEF" Width="1" />
						<MinorGridLines Color="#F7F7F7" Width="1" />
						<TitleAppearance Position="Center" RotationAngle="0" Text="Error Count" />
					</YAxis>
				</PlotArea>
				<ChartTitle Text="Unrecoverable Errors Per Minute vs. Signal Level">
					<Appearance Align="Center" BackgroundColor="White" Position="Top" />
				</ChartTitle>
				<Legend>
					<Appearance Visible="false" />
				</Legend>
			</telerik:RadHtmlChart>
````



# See Also

 * [RadHtmlChart Server-side API overview]({%slug htmlchart/server-side-programming/overview%})

 * [RadHtmlChart Element Structure]({%slug htmlchart/radhtmlchart-structure%})
