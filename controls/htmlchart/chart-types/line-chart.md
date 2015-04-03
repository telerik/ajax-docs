---
title: Line Chart
page_title: Line Chart | UI for ASP.NET AJAX Documentation
description: Line Chart
slug: htmlchart/chart-types/line-chart
tags: line,chart
published: True
position: 9
---

# Line Chart



## 

A Line chart shows data as continuous lines that pass through points defined bytheir items' values. It can be useful for showing a trend over time and comparingseveral sets of similar data. Since Q1 2014 __LineSeries__ can be visualized with [spline curves]({%slug htmlchart/chart-types/spline-chart%})and [step-like progression]({%slug htmlchart/chart-types/step-line-chart%}).This Help article will show how you can customize a Line chart, and the code in __Example 1__ will show how to build the simple Line chart in __Figure 1__.
>caption Figure 1: A simple Line chart comparing two sets of data over time. The code in Example 1 shows how to customize the chart using the MissingValues property to account for a gap in data.

![htmlchart-linechart-simple-example](images/htmlchart-linechart-simple-example.png)

You can customize the Line chart:

* The color of each series is controlled via the __BackgroundColor__ property of the__LineSeries > Appearance > FillStyle__ inner tag.

* The width of the line in each series is controlled via the __Width__ property of the__LineSeries > LineAppearance__ tag.

* The name that is shown in the legend is set via the __Name__ property of the __ColumnSeries__.

* The position of each item on the Y-axis is controlled by its __Y__ property of the __CategorySeriesItem__and each __CategorySeriesItem__ is placed with regard to one __AxisItem__ on the X-axis.

* Each item can have a label and a tooltip which follow the common pattern defined either in the __DataFormatString__ property or usingthe __ClientTemplate__ section in the __LabelsAppearance__ or the __TooltipsAppearance__ inner tags of the series.The format string uses the __Y__ of the item.

* The markers are fully customizable—the type, background color, size, border's width and color can becontrolled respectively through __MarkersType__, __BackgroundColor__, __Size__, __BorderWidth__ and__BorderColor__ properties, exposed by the__LineSeries > MarkersAppearance__ tag.

* The axes are also fully customizable—the y-axis automatically adjusts the scale to accommodate the data that comes in and for finer tuningthere are numerous properties that can change each aspect:

* Directly in the axis tag you can use its properties to control color, major and minor tick types and sizes, minimal and maximal values for the y-axis (plus a step size)whereas the x-axis requires a set of items to match the number of __CategorySeriesItem__ the series have. This is also the place where the crossingvalue with the other axis can be set (the index of an item for an item axis) and whether the axis will be reversed.

* The inner tags of the axis tag can control the major and minor grid lines in terms of color and sizeand the labels can have a __DataFormatString__, position and visibility set through each inner tag's properties.

* If some values are missing (i.e. they are null/Nothing) from the series data you can have the chart work around this by setting the __MissingValues__ property ofthe series to the desired behavior—interpolate, missing or gap.

* The title, background colors and legend are controlled via the inner properties of the __RadHtmlChart__ control and are common for all charts.You can find more information in the [Server-side API]({%slug htmlchart/server-side-programming/basic-configuration%})and in the [Element structure]({%slug htmlchart/radhtmlchart-structure%}) articles.

The chart from __Figure 1__ was created with the code in __Example 1__:

>tip Not all properties are necessary. The __RadHtmlChart__ will match the axes to the values if you do not declare explicit values, steps and tick properties (although the	Items for axes that need them are necessary).
>


__Example 1__: Creating a Line chart that compares two sets of data over a time period with customized properties. The property for __MissingValues__ shows the effect of setting __Interpolate__ to __Gap__ for the two __LineSeries__.

````ASPNET
	        <telerik:RadHtmlChart runat="server" ID="LineChart" Width="800" Height="500" Transitions="true">
	        <PlotArea>
	            <Series>
	                <telerik:LineSeries Name="Week 15" MissingValues="Interpolate">
	                    <Appearance>
	                        <FillStyle BackgroundColor="Blue" />
	                    </Appearance>
	                    <LabelsAppearance DataFormatString="{0}%" Position="Above" />
	                    <MarkersAppearance MarkersType="Square" BackgroundColor="Blue" />
	                    <SeriesItems>
	                        <telerik:CategorySeriesItem Y="15" />
	                        <telerik:CategorySeriesItem Y="23" />
	                        <telerik:CategorySeriesItem />
	                        <telerik:CategorySeriesItem Y="71" />
	                        <telerik:CategorySeriesItem Y="93" />
	                        <telerik:CategorySeriesItem Y="43" />
	                        <telerik:CategorySeriesItem Y="23" />
	                    </SeriesItems>
	                </telerik:LineSeries>
	                <telerik:LineSeries Name="Week 16" MissingValues="Gap">
	                    <Appearance>
	                        <FillStyle BackgroundColor="Red" />
	                    </Appearance>
	                    <LabelsAppearance DataFormatString="{0}%" Position="Above" />
	                    <MarkersAppearance MarkersType="Square" BackgroundColor="Red" />
	                    <SeriesItems>
	                        <telerik:CategorySeriesItem Y="35" />
	                        <telerik:CategorySeriesItem Y="42" />
	                        <telerik:CategorySeriesItem Y="18" />
	                        <telerik:CategorySeriesItem Y="39" />
	                        <telerik:CategorySeriesItem Y="64" />
	                        <telerik:CategorySeriesItem Y="10" />
	                        <telerik:CategorySeriesItem Y="6" />
	                    </SeriesItems>
	                </telerik:LineSeries>
	            </Series>
	            <XAxis MajorTickType="Outside" MinorTickType="Outside">
	                <Items>
	                    <telerik:AxisItem LabelText="Monday" />
	                    <telerik:AxisItem LabelText="Tuesday" />
	                    <telerik:AxisItem LabelText="Wednesday" />
	                    <telerik:AxisItem LabelText="Thursday" />
	                    <telerik:AxisItem LabelText="Friday" />
	                    <telerik:AxisItem LabelText="Saturday" />
	                    <telerik:AxisItem LabelText="Sunday" />
	                </Items>
	                <MajorGridLines Color="#EFEFEF" Width="1" />
	                <MinorGridLines Color="#F7F7F7" Width="1" />
	                <TitleAppearance Position="Center" RotationAngle="0" Text="Days" />
	            </XAxis>
	            <YAxis MajorTickSize="1" MajorTickType="Outside" MaxValue="100" MinorTickSize="1"
	                MinorTickType="Outside" MinValue="0">
	                <LabelsAppearance DataFormatString="{0}%" RotationAngle="0" />
	                <MajorGridLines Color="#EFEFEF" Width="1" />
	                <MinorGridLines Color="#F7F7F7" Width="1" />
	                <TitleAppearance Position="Center" RotationAngle="0" Text="CPU Load" />
	            </YAxis>
	        </PlotArea>
	        <ChartTitle Text="Server CPU Load By Days">
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

 * [RadHtmlChart Spline Chart]({%slug htmlchart/chart-types/spline-chart%})

 * [RadHtmlChart Step Line Chart]({%slug htmlchart/chart-types/step-line-chart%})
