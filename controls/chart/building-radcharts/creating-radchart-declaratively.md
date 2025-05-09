---
title: Creating RadChart Declaratively
page_title: Creating RadChart Declaratively - RadChart
description: Check our Web Forms article about Creating RadChart Declaratively.
slug: chart/building-radcharts/creating-radchart-declaratively
tags: creating,radchart,declaratively
published: True
position: 2
---

# Creating RadChart Declaratively

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

RadChart properties that are set in the designer can also be written declaratively in the ASP.NET HTML code.

1. To use the RadChart control on the page you need to declare the namespace and associate a tag prefix. Add the following code just under the "<%@ Page>" tag at the top of the HTML.

	**ASP.NET**

		<%@ register assembly="Telerik.Web.UI" namespace="Telerik.Web.UI" tagprefix="telerik" %>
		<%@ register assembly="Telerik.Web.UI" namespace="Telerik.Charting" tagprefix="telerik" %>

1. Within the main div tag for the page add a RadChart tag.

	**ASP.NET**

		<div>
			<telerik:RadChart runat="Server" id="myRadChart">
			</telerik:RadChart>
		</div>

1. Within the RadChart tag add a ChartTitle tag and set its TextBlock-Text attribute to "My First Chart".

	**ASP.NET**

		<ChartTitle>
		<TextBlock Text="My First Chart">
		</TextBlock>
		</ChartTitle> 

1. Add a ChartSeries tag. Set the Name attribute to "Sales".

	**ASP.NET**

		<Series>
		<telerik:ChartSeries Name="Sales">
		</telerik:ChartSeries>
		</Series> 

1. Add three ChartSeriesItem tags inside the ChartSeries tag as shown in the example below.Set the YValue attribute for each item.Add a TextBlock tag within each ChartSeriesItem tag and set the Text attribute to the values shown in the example.

	**ASP.NET**

		<items>
		<telerik:ChartSeriesItem YValue="34">
		<Label><TextBlock Text="Internet"></TextBlock></Label>
		</telerik:ChartSeriesItem>
		<telerik:ChartSeriesItem YValue="66">
		<Label><TextBlock Text="Wholesale"></TextBlock></Label>
		</telerik:ChartSeriesItem>
		<telerik:ChartSeriesItem YValue="27">
		<Label><TextBlock Text="Retail"></TextBlock></Label>
		</telerik:ChartSeriesItem>
		</items> 

	The chart should now look like the figure below. The chart will display as three bars (Bar is the default type).

	![Building RadChart](images/radchart-building003.png)

1. Add an Appearance tag to the RadChart Series tag. Within Appearance add a FillStyle tag, set the MainColor attribute to "Red" and the SecondColor attribute to Maroon. Add a Border tag and set the color to DarkRed.Then add PlotArea tag and Appearance tag within it

	**ASP.NET**

		<Appearance>
		<FillStyle MainColor="Red" SecondColor="Maroon"></FillStyle>
		<Border Color="DarkRed" />
		</Appearance> 

	**ASP.NET**
	
		<PlotArea>
		<Appearance>
		<FillStyle FillType="Solid" MainColor="White"></FillStyle>
		</Appearance>
		</PlotArea> 

When complete the chart should look like this example:

![Finished Chart](images/radchart-building004.png)

# See Also

 * [Building RadCharts]({%slug chart/building-radcharts/building-radcharts%})

 * [Populate RadChart at Design-Time]({%slug chart/building-radcharts/populate-radchart-at-design-time%})

 * [Creating RadChart Programmatically]({%slug chart/building-radcharts/creating-radchart-programmatically%})
