---
title: Donut Chart
page_title: Donut Chart | UI for ASP.NET AJAX Documentation
description: Donut Chart
slug: htmlchart/chart-types/donut-chart
tags: donut,chart
published: True
position: 6
---

# Donut Chart



## 

The Donut chart (__Figure 1__) displays data as sectors from a circle and is therefore useful for displaying data as parts of a whole. A Donut chart is a Pie chart variation with the ability to display single series of data in a two-dimensional circle. This help article will describe how to customize a Donut chart and provides code in __Example 1__ that shows how to create __Figure 1__.

__Figure 1__: A simple example of a Donut chart.![htmlchart-donutchart-simple-example](images/htmlchart-donutchart-simple-example.png)

You can customize a Donut chart.

* The color is controlled via the __BackgroundColor__ property of the __PieSeriesItem__.

* The name that is shown in the legend is set via the __Name__ property of the __PieSeriesItem__.

* Whether the sector is separated from the rest of the circle is controlled via the __Exploded__ property of the __PieSeriesItem__. This and the Pie chart are the only chart types in whose context the __Exploded__property is meaningful and will have effect.

* How big of a section of a Donut chart is is controlled by its __Y__ property of the __PieSeriesItem__ and its relation to the other items' value.

>important Only positive values have meaning in the context of a Donut chart and the developer must make sure that positive value data is passed to the chart.
>


* Each item can have a label and a tooltip that follow the common pattern defined in the __DataFormatString__ property of the __LabelsAppearance__ and __TooltipsAppearance__ sections of the series. The format string uses the __Y__ of the item. You can also load custom text from data source fields in labels and tooltips by using the composite [ClientTemplate]({%slug htmlchart/functionality/clienttemplate/overview%}) property.

* The title, background colors and legend are controlled via the inner properties of the __RadHtmlChart__ control and are common for all charts. You can find more information in the [Server-side API]({%slug htmlchart/server-side-programming/basic-configuration%}) and in the [Element structure]({%slug htmlchart/radhtmlchart-structure%}) articles.

The Donut chart in __Figure 1__ is created with the code in __Example 1__.

__Example 1__: Creating the simple Donut chart in __Figure 1__ using hard coded data.

````ASPNET
	        <telerik:RadHtmlChart runat="server" ID="DonutChart" Width="500" Height="500" Transitions="true">
	            <Appearance>
	                <FillStyle BackgroundColor="White"></FillStyle>
	            </Appearance>
	            <ChartTitle Text="OS Usage Statistics for December 2012">
	                <Appearance Align="Center" Position="Top"></Appearance>
	            </ChartTitle>
	            <PlotArea>
	                <Series>
	                    <telerik:DonutSeries>
	                        <LabelsAppearance Visible="false">
	                        </LabelsAppearance>
	                        <TooltipsAppearance DataFormatString="{0}%" BackgroundColor="White"></TooltipsAppearance>
	                        <SeriesItems>
	                            <telerik:PieSeriesItem BackgroundColor="#00adcc" Name="Win7"
	                                Y="55.6"></telerik:PieSeriesItem>
	                            <telerik:PieSeriesItem BackgroundColor="#cccccc" Name="Win8" Y="2.5"></telerik:PieSeriesItem>
	                            <telerik:PieSeriesItem BackgroundColor="#999999" Name="Vista" Y="2.8"></telerik:PieSeriesItem>
	                            <telerik:PieSeriesItem BackgroundColor="#888888" Name="NT" Y="1.8"></telerik:PieSeriesItem>
	                            <telerik:PieSeriesItem BackgroundColor="#777777" Name="WinXP" Y="21.1"></telerik:PieSeriesItem>
	                            <telerik:PieSeriesItem BackgroundColor="#666666" Name="Linux" Y="4.7"></telerik:PieSeriesItem>
	                            <telerik:PieSeriesItem BackgroundColor="#555555" Name="Mac" Y="8.7"></telerik:PieSeriesItem>
	                            <telerik:PieSeriesItem BackgroundColor="#444444" Name="Mobile" Y="2.2"></telerik:PieSeriesItem>
	                        </SeriesItems>
	                    </telerik:DonutSeries>
	                </Series>
	            </PlotArea>
	        </telerik:RadHtmlChart>
````



>note The Donut chart does not have axes as they are not applicable in its context.
>


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

 * [RadHtmlChart Pie Chart]({%slug htmlchart/chart-types/pie-chart%})

 * [RadHtmlChart Server-side API Overview]({%slug htmlchart/server-side-programming/overview%})
