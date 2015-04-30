---
title: Bubble Chart
page_title: Bubble Chart | RadHtmlChart for ASP.NET AJAX Documentation
description: Bubble Chart
slug: htmlchart/chart-types/bubble-chart
tags: bubble,chart
published: True
position: 3
---

# Bubble Chart

A Bubble chart shows the data as points with coordinates and size defined by their items' values. You might think of a Bubble chart as a variation of the Scatter chart, in which the data points are replaced with bubbles. This allows a Bubble chart to display three dimensional data — two values for the items' coordinates and one for their size. A Bubble chart is useful for visualizing different scientific relationships (e.g, economical, social, etc.). This chart type's x-axis is also numerical and does not require items.This help article will describe how to set various properties for a Bubble chart and then **Example 1** at the end of the article shows the code for how to create **Figure 1**.

The size of the bubbles is scaled according to the values of the items in the current series.This means that items with different values that belong to separate series may be represented with the same bubble size, yet every bubble will be bigger than bubbles with smaller values from the same series and smaller than bubbles with higher values from the same series.

>caption Figure 1: A Bubble chart that shows correlation between sales, number of products and market share for different economic agents.

![htmlchart-bubblechart-simple-example](images/htmlchart-bubblechart-simple-example.png)

You can customize a Bubble chart in several ways:

* The color of each series is controlled via the **BackgroundColor** property of the **BubbleSeries > Appearance > FillStyle** inner tag.

* The name that is shown in the legend is set via the **Name** property of the **BubbleSeries**.

* The position of each item on the y-axis is controlled by the **Y** property of the **BubbleSeriesItem**. The position according to the x-axis is set with the **X** property.

* The size of each item is controlled by the **Size** property of the **BubbleSeriesItem**.

* Each item can have a label and a tooltip that follows the common pattern defined in the **DataFormatString** property of the **LabelsAppearance** and **TooltipsAppearance** sections of the series.The format string uses the **X** of the item for the **first** placeholder, the **Y** for the **second** placeholder, the **Size** for the **third** placeholder and **Tooltip** for the **fourth** placeholder. 

	The text in the tooltip can also be configured directly in the **Tooltip** property. 
	
	You can also load custom text from data source fields in labels and tooltips by using the composite [ClientTemplate]({%slug htmlchart/functionality/clienttemplate/overview%}) property.

* The axes are also fully customizable — they automatically adjust the scale to accommodate the data that comes in and for finer tuning there are numerous properties that can change each aspect:

	* Directly in the axis tag you can use its properties to control color, major and minor tick types and sizes, minimal and maximal values for the y-axis (plus a step size).This is also the place where the crossing value with the other axis can be set and whether the axis will be reversed.

	* The inner tags of the axis tag can control the major and minor grid lines in terms of color and size and the labels can have a **DataFormatString**, position and visibility set through each inner tag's properties.

* The title, background colors and legend are controlled via the inner properties of the **RadHtmlChart** control and are common for all charts.You can find more information in the [Server-side Programming Basic Configuration]({%slug htmlchart/server-side-programming/basic-configuration%}) and in the [Element structure]({%slug htmlchart/radhtmlchart-structure%}) articles.

**Example 1** shows how to create the Bubble chart shown in **Figure 1**.

>tip Not all properties are necessary. The **RadHtmlChart** will match the axes to the values ifyou do not declare explicit values, steps and tick properties.

>caption Example 1: Setting properties to configure the Bubble chart shown in **Figure 1**.

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="BubbleChart" Width="500" Height="400">
	<ChartTitle Text="Market Share Study">
	</ChartTitle>
	<PlotArea>
		<Appearance>
			<FillStyle BackgroundColor="White"></FillStyle>
		</Appearance>
		<XAxis MinValue="0" MaxValue="30" Step="10">
			<TitleAppearance Text="Number of Products"></TitleAppearance>
		</XAxis>
		<YAxis MinValue="0" MaxValue="80000" Step="10000">
			<LabelsAppearance DataFormatString="${0}"></LabelsAppearance>
			<TitleAppearance Text="Sales"></TitleAppearance>
		</YAxis>
		<Series>
			<telerik:BubbleSeries>
				<Appearance FillStyle-BackgroundColor="#6ab2c9">
				</Appearance>
				<TooltipsAppearance DataFormatString="Percentage of Market Share: {2}%<br /> Number of products: {0}<br /> Sales: ${1}" />                    
				<SeriesItems>
					<telerik:BubbleSeriesItem Size="3" X="5" Y="5500" />
					<telerik:BubbleSeriesItem Size="12" X="14" Y="12200" />
					<telerik:BubbleSeriesItem Size="33" X="20" Y="60000" />
					<telerik:BubbleSeriesItem Size="10" X="18" Y="24400" />
					<telerik:BubbleSeriesItem Size="42" X="22" Y="32000" />
				</SeriesItems>
			</telerik:BubbleSeries>
		</Series>
	</PlotArea>
	<Legend>
		<Appearance Position="Right"></Appearance>
	</Legend>
</telerik:RadHtmlChart>
````

## See Also

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

 * [RadHtmlChart Scatter Chart]({%slug htmlchart/chart-types/scatter-chart%})

 * [RadHtmlChart Server-side API Overview]({%slug htmlchart/server-side-programming/overview%})
