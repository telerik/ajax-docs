---
title: Important Changes Regarding Series Declaration
page_title: Important Changes Regarding Series Declaration | UI for ASP.NET AJAX Documentation
description: Important Changes Regarding Series Declaration
slug: htmlchart/changes-and-backwards-compatibility/important-changes-regarding-series-declaration
tags: important,changes,regarding,series,declaration
published: True
position: 1
---

# Important Changes Regarding Series Declaration



The programmatic creation of series items in the __RadHtmlChart__ control	should be done via the __SeriesItems__ collection. Telerik made the __Items__collection obsolete with the __Q2 2013__ release.

Along with these changes, the respective series item object for each series type must be used.	The corresponding series items for each series type are listed in __Table 1__.


>caption Table 1: List of series item objects for the corresponding series types.	

| Series type | Series item |
| ------ | ------ |
|Candlestick|telerik:CandlestickSeriesItem|
|Bar, Column, Area, Line|telerik:CategorySeriesItem|
|Scatter, ScatterLine|telerik:ScatterSeriesItem|
|Bubble|telerik:BubbleSeriesItem|
|Pie, Donut|telerik:PieSeriesItem|

__XValue__, __YValue__, __SizeValue__ and __ToolTipValue__ properties of the __SeriesItem__ (now __CategorySeriesItem__, __PieSeriesItem__, __ScatterSeriesItem__ or __BubbleSeriesItem__) have been renamed respectively to __X__, __Y__, __Size__ and __ToolTip__.

>note In order to access the properties of the series in the code behind, the series should be converted explicitly to the respective series type.
>Casting the first series to theAreaSeries class:
>C#: (RadHtmlChart1.PlotArea.Series[0] as AreaSeries).SeriesItems[0].Y = 10;
>VB: (RadHtmlChart1.PlotArea.Series[0] as AreaSeries).SeriesItems[0].Y = 10
>


## How to Configure Chart Series

You can find an example of how to configure a simple Area chart with the __SeriesItems__ collection in the markup and the code behind in __Example 1__. The output from either setup can be seen in __Figure 1__.
>caption Figure 1: This chart can be rendered with the setup from Example 1 or Example 2.

![htmlchart-important-changes-regarding-the-series-declaration](images/htmlchart-important-changes-regarding-the-series-declaration.png)

__Example 1__: Creation of the Area chart with the __SeriesItems__ collection in the markup.

````ASPNET
			<telerik:radhtmlchart runat="server" id="Chart1" width="400">
				<PlotArea>
					<Series>
						<telerik:AreaSeries>
							<SeriesItems>
								<telerik:CategorySeriesItem Y="20" />
								<telerik:CategorySeriesItem Y="35" />
								<telerik:CategorySeriesItem Y="40" />
							</SeriesItems>
						</telerik:AreaSeries>
					</Series>
				</PlotArea>
			</telerik:radhtmlchart>
````



The same result can be achieved programmatically by using the code in __Example 2__.

__Example 2__: Programmatic creation of the Area chart with the __SeriesItems__ collection.

>tabbedCode

````ASPNET
			<telerik:RadHtmlChart runat="server" ID="Chart1" Width="400">
				<PlotArea>
					<Series>
						<telerik:AreaSeries>
						</telerik:AreaSeries>
					</Series>
				</PlotArea>
			</telerik:RadHtmlChart>
````



````C#
		AreaSeries areaSeries = Chart1.PlotArea.Series[0] as AreaSeries;
	
		areaSeries.SeriesItems.Add(20);
		areaSeries.SeriesItems.Add(35);
		areaSeries.SeriesItems.Add(40);
	
````



````VB
		Dim areaSeries As AreaSeries
		areaSeries = CType(Chart1.PlotArea.Series.Item(0), AreaSeries)
	
		areaSeries.SeriesItems.Add(20)
		areaSeries.SeriesItems.Add(35)
		areaSeries.SeriesItems.Add(40)
````


>end

# See Also

 * [Series Configuration]({%slug htmlchart/server-side-programming/series-configuration%})

 * [Series Items Configuration]({%slug htmlchart/server-side-programming/series-items-configuration%})

 * [Introducing the SeriesItems Collection in RadHtmlChart for ASP.NET AJAX](http://blogs.telerik.com/aspnet-ajax/posts/13-06-04/introducing-the-seriesitems-collection-in-radhtmlchart-for-asp.net-ajax)
