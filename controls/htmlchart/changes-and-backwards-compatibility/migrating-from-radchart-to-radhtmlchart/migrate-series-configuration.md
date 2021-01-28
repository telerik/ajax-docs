---
title: Migrate Series Configuration
page_title: Migrate Series Configuration - RadHtmlChart
description: Check our Web Forms article about Migrate Series Configuration.
slug: htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration
tags: migrate,series,configuration
published: True
position: 4
---

# Migrate Series Configuration

This article illustrates how to migrate the configuration of series and series items from **RadChart** to **RadHtmlChart**. The migration of the series configuration in the provided examples below is	illustrated declaratively. However, the same classes and properties of the series and series items can be used for	the programmatic creation as well.

## Configuring Series

### Configuring RadChart Series

Series in **RadChart** are configured in the **Series** tag through the **ChartSeries** class. The type of the series is defined through the **ChartSeries.Type** property. **Example 1** illustrates how to declare Line series in **RadChart**.

>caption Example 1: Declare Line series in **RadChart**.

````ASP.NET
<telerik:RadChart ID="RadChart1" runat="server" Width="600" Height="400">
	<Series>
		<telerik:ChartSeries Type="Line">
		</telerik:ChartSeries>
	</Series>
</telerik:RadChart>
````

### Configuring RadHtmlChart Series

Series in **RadHtmlChart** are configured in the **PlotArea.Series** tag through a specific class for the particular series type. **Example 2** illustrates how to declare Line series in **RadHtmlChart**.

>caption Example 2: Declare Line series in **RadHtmlChart**.

````ASP.NET
<telerik:RadHtmlChart ID="RadHtmlChart1" runat="server" Width="600" Height="400">
	<PlotArea>
		<Series>
			<telerik:LineSeries>
			</telerik:LineSeries>
		</Series>
	</PlotArea>
</telerik:RadHtmlChart>
````

>note The orientation of series in **RadHtmlChart** cannot be changed (there is no **SeriesOrientation** property).	You can, however, find some series analogue as follows:
>
*  **Bar series** with the **SeriesOrientation="Horizontal"** property in **RadChart** are declared	as **BarSeries** in **RadHtmlChart** .
*  **Bar series** with the **SeriesOrientation="Vertical"** property in **RadChart** are declared	as **ColumnSeries** in **RadHtmlChart** .


## Configuring Series Items

### Configuring RadChart Series Items

Series items' properties in **RadChart** are configured in the **ChartSeriesItem** class of the **ChartSeries.Items** collection. The corresponding y-axis related properties are **YValue**, **YValue2**, **YValue3** and **YValue4**. The corresponding x-axis related properties are **XValue** and **XValue2**. **Example 3** illustrates how to configure series items in a Line series with **RadChart**.

>caption Example 3: Configure series items in a Line series with **RadChart**.

````ASP.NET
<telerik:RadChart ID="RadChart2" runat="server" Width="600" Height="400">
	<Series>
		<telerik:ChartSeries Type="Line">
			<Items>
				<telerik:ChartSeriesItem YValue="30"></telerik:ChartSeriesItem>
				<telerik:ChartSeriesItem YValue="10"></telerik:ChartSeriesItem>
				<telerik:ChartSeriesItem YValue="20"></telerik:ChartSeriesItem>
			</Items>
		</telerik:ChartSeries>
	</Series>
</telerik:RadChart>
````

### Configuring RadHtmlChart Series Items

**RadHtmlChart** exposes specific series item objects and properties for each series type, which makes the configuration much easier and intuitive. **Table 1** lists the corresponding series items for each series type.

>caption Table 1: List of series item objects and properties for the corresponding series types.

| Series type | Series item | Series item properties |
| ------ | ------ | ------ |
|Candlestick|telerik:CandlestickSeriesItem|Open, High, Low, Close|
|Bar, Column, Area, Line|telerik:CategorySeriesItem|Y|
|Scatter, ScatterLine|telerik:ScatterSeriesItem|Y, X|
|Bubble|telerik:BubbleSeriesItem|Y, X, Size, ToolTip|
|Pie|telerik:PieSeriesItem|Y|

**Example 4** illustrates how to configure series items in a Line series with **RadHtmlChart**.

>caption Example 4: Configure series items in a Line series with **RadHtmlChart**

````ASP.NET
<telerik:RadHtmlChart ID="RadHtmlChart2" runat="server" Width="600" Height="400">
	<PlotArea>
		<Series>
			<telerik:LineSeries>
				<SeriesItems>
					<telerik:CategorySeriesItem Y="30" />
					<telerik:CategorySeriesItem Y="10" />
					<telerik:CategorySeriesItem Y="20" />
				</SeriesItems>
			</telerik:LineSeries>
		</Series>
	</PlotArea>
</telerik:RadHtmlChart>
````


