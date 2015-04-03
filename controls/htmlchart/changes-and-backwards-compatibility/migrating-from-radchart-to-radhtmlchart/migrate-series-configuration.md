---
title: Migrate Series Configuration
page_title: Migrate Series Configuration | UI for ASP.NET AJAX Documentation
description: Migrate Series Configuration
slug: htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration
tags: migrate,series,configuration
published: True
position: 4
---

# Migrate Series Configuration



This article illustrates how to migrate the configuration of series and series items from __RadChart__ to	__RadHtmlChart__. The migration of the series configuration in the provided examples below is	illustrated declaratively; however, the same classes and properties of the series and series items can be used for	the programmatic creation as well.

## Configuring Series

### Configuring RadChart Series

Series in __RadChart__ are configured in the __Series__ tag through the __ChartSeries__ class.The type of the series is defined through the __ChartSeries.Type__ property. __Example 1__illustrates how to declare Line series in __RadChart__.

__Example 1__: Declare Line series in __RadChart__.

````ASPNET
		<telerik:RadChart ID="RadChart1" runat="server" Width="600" Height="400">
			<Series>
				<telerik:ChartSeries Type="Line">
				</telerik:ChartSeries>
			</Series>
		</telerik:RadChart>
````



### Configuring RadHtmlChart Series

Series in __RadHtmlChart__ are configured in the __PlotArea.Series__ tag through a specific class for the particularseries type. __Example 2__ illustrates how to declare Line series in __RadHtmlChart__.

__Example 2__: Declare Line series in __RadHtmlChart__.

````ASPNET
		<telerik:RadHtmlChart ID="RadHtmlChart1" runat="server" Width="600" Height="400">
			<PlotArea>
				<Series>
					<telerik:LineSeries>
					</telerik:LineSeries>
				</Series>
			</PlotArea>
		</telerik:RadHtmlChart>
````



>note The orientation of series in __RadHtmlChart__ cannot be changed (there is no __SeriesOrientation__ property).	You can, however, find some series analogue as follows:
>
*  __Bar series__ with the __SeriesOrientation="Horizontal"__ property in __RadChart__ are declared	as __BarSeries__ in __RadHtmlChart__ .
*  __Bar series__ with the __SeriesOrientation="Vertical"__ property in __RadChart__ are declared	as __ColumnSeries__ in __RadHtmlChart__ .>


## Configuring Series Items

### Configuring RadChart Series Items

Series items' properties in __RadChart__ are configured in the __ChartSeriesItem__ class of the__ChartSeries.Items__ collection. The corresponding y-axis related properties are__YValue__, __YValue2__, __YValue3__ and__YValue4__. The corresponding x-axis related properties are__XValue__ and __XValue2__. __Example 3__ illustrates how toconfigure series items in a Line series with __RadChart__.

__Example 3__: Configure series items in a Line series with __RadChart__.

````ASPNET
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

__RadHtmlChart__ exposes specific series item objects and properties for each series type, which makes theconfiguration much easier and intuitive. __Table 1__ lists the corresponding series items for each series type.


>caption 	Table 1: List of series item objects and properties for the corresponding series types.

| Series type | Series item | Series item properties |
| ------ | ------ | ------ |
|Candlestick|telerik:CandlestickSeriesItem|Open, High, Low, Close|
|Bar, Column, Area, Line|telerik:CategorySeriesItem|Y|
|Scatter, ScatterLine|telerik:ScatterSeriesItem|Y, X|
|Bubble|telerik:BubbleSeriesItem|Y, X, Size, ToolTip|
|Pie|telerik:PieSeriesItem|Y|

__Example 4__ illustrates how to configure series items in a Line series with __RadHtmlChart__.

__Example 4:__ Configure series items in a Line series with __RadHtmlChart__

````ASPNET
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


