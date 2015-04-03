---
title: Spline Chart
page_title: Spline Chart | UI for ASP.NET AJAX Documentation
description: Spline Chart
slug: htmlchart/chart-types/spline-chart
tags: spline,chart
published: True
position: 18
---

# Spline Chart



## 

A Spline chart is a form of line/area chart where each data point from the series is connected with a fitted curvethat represents a rough approximation of the missing data points. You could plot the following series with a splineinterpolation:	__AreaSeries__, __LineSeries__, __ScatterLineSeries__,__RadarLineSeries__, __RadarAreaSeries__,__PolarLineSeries__ and __PolarAreaSeries__. Telerik added the spline chartin Q1 2014.

You can display a fitted curve through the data points from the series by setting the	__LineAppearance.LineStyle__ property of the series to "__Smooth__".For example:

````ASPNET
		<telerik:AreaSeries Name="Area Series">
			<LineAppearance LineStyle="Smooth" />
		</telerik:AreaSeries>
````



The code in __Example 1__ will show you how to build spline series in __Figure 1__.
>caption Figure 1: Data points in area and line series are connected through interpolated curves. The code in Example 1	illustrates how to setup spline area and line series.

![htmlchart-splinechart-simple-example](images/htmlchart-splinechart-simple-example.png)

__Example 1__: Creating a chart that has two spline series - __AreaSeries__ and__LineSeries__. Spline functionality is enabled by simply setting the __LineAppearance.LineStyle__property of the series to "__Smooth__"

````ASPNET
		<telerik:RadHtmlChart runat="server" ID="AreaLineSplineChart" Width="800" Height="500" Transitions="true">
			<PlotArea>
				<Series>
					<telerik:AreaSeries Name="Area Series">
						<LineAppearance LineStyle="Smooth" />
						<Appearance>
							<FillStyle BackgroundColor="Orange" />
						</Appearance>
						<LabelsAppearance Visible="false" />
						<MarkersAppearance Visible="false" />
						<SeriesItems>
							<telerik:CategorySeriesItem Y="400" />
							<telerik:CategorySeriesItem Y="500" />
							<telerik:CategorySeriesItem Y="720" />
							<telerik:CategorySeriesItem Y="1300" />
							<telerik:CategorySeriesItem Y="450" />
							<telerik:CategorySeriesItem Y="800" />
							<telerik:CategorySeriesItem Y="900" />
						</SeriesItems>
					</telerik:AreaSeries>
					<telerik:LineSeries Name="Line Series">
						<LineAppearance LineStyle="Smooth" />
						<Appearance>
							<FillStyle BackgroundColor="Green" />
						</Appearance>
						<LabelsAppearance Visible="false" />
						<MarkersAppearance Visible="false" />
						<SeriesItems>
							<telerik:CategorySeriesItem Y="700" />
							<telerik:CategorySeriesItem Y="900" />
							<telerik:CategorySeriesItem Y="420" />
							<telerik:CategorySeriesItem Y="1100" />
							<telerik:CategorySeriesItem Y="650" />
							<telerik:CategorySeriesItem Y="600" />
							<telerik:CategorySeriesItem Y="700" />
						</SeriesItems>
					</telerik:LineSeries>
				</Series>
				<CommonTooltipsAppearance Color="White"></CommonTooltipsAppearance>
				<XAxis>
					<MajorGridLines Color="#EFEFEF" Width="1" />
					<MinorGridLines Color="#F7F7F7" Width="1" />
					<Items>
						<telerik:AxisItem LabelText="2004" />
						<telerik:AxisItem LabelText="2005" />
						<telerik:AxisItem LabelText="2006" />
						<telerik:AxisItem LabelText="2007" />
						<telerik:AxisItem LabelText="2008" />
						<telerik:AxisItem LabelText="2009" />
						<telerik:AxisItem LabelText="2010" />
					</Items>
					<TitleAppearance Position="Center" Text="Years" />
				</XAxis>
				<YAxis>
					<MajorGridLines Color="#EFEFEF" Width="1" />
					<MinorGridLines Color="#F7F7F7" Width="1" />
					<TitleAppearance Position="Center" Text="Finance" />
				</YAxis>
			</PlotArea>
			<ChartTitle Text="Company Performance">
				<Appearance Align="Center" Position="Top" />
			</ChartTitle>
			<Legend>
				<Appearance Position="Bottom" />
			</Legend>
		</telerik:RadHtmlChart>
````



# See Also

 * [Choose a Data Source for Your RadHtmlChart:]({%slug htmlchart/design-time/overview%})

 * [- Configuration Wizard]({%slug htmlchart/design-time/overview%})

 * [- SqlDataSource]({%slug htmlchart/data-binding/sqldatasource%})

 * [- LinqDataSource]({%slug htmlchart/data-binding/linqdatasource%})

 * [- EntityDataSource]({%slug htmlchart/data-binding/entitydatasource%})

 * [- ObjectDataSource]({%slug htmlchart/data-binding/objectdatasource%})

 * [- XmlDataSource]({%slug htmlchart/data-binding/xmldatasource%})

 * [- Generic List]({%slug htmlchart/data-binding/generic-list-of-custom-objects%})

 * [- DataSet]({%slug htmlchart/data-binding/dataset%})

 * [- Array]({%slug htmlchart/data-binding/array%})

 * [RadHtmlChart Element Structure]({%slug htmlchart/radhtmlchart-structure%})

 * [RadHtmlChart Server-side API Overview]({%slug htmlchart/server-side-programming/overview%})
