---
title: Remove $ Currency Sign from Box Plot Chart Tooltip
description: How to remove the $ sign from currency formatted cells of the BoxPlot, but to keep the formatting of the chart? 
type: how-to
page_title: Remove $ sign from Box Plot chart tool tip in RadHtmlChart
slug: htmlchart-remove-the-currency-sign-from-box-plot-chart-tool-tip
position: 
ticketid: 1581130
res_type: kb
---


## Description

Removing the $ sign from currency formatted cells of the BoxPlot, but keeping the formatting of the chart. 

## Solution

The default state of the BoxPlot is currency formatted with $(dollar) sign after the value. For removing it, in this article is showed two approaches for achiving the desire formatting. 


1. Using the client-side OnKendoWidgetInitializing event to set the desired format string directly to the kendo widget beneath the RadHtmlChart control.

 ````JavaScript
function widgetInit(sender, args) {
	var widgetSeries = args.series;
	widgetSeries.forEach(function (currentSeries) {
		if (currentSeries.type == 'boxPlot') {
			currentSeries.tooltip.format = 
			"<table>" + "
			<tr><th colspan='2'>{6:d}</th></tr>" + "
			<tr><td>Lower:</td><td>{0:N}</td></tr>" + "
			<tr><td>Q1:</td><td>{1:N}</td></tr>" + "
			<tr><td>Median:</td><td>{2:N}</td></tr>" + "
			<tr><td>Mean:</td><td>{5:N}</td></tr>" + "
			<tr><td>Q3:</td><td>{3:N}</td></tr>" + "
			<tr><td>Upper:</td><td>{4:N}</td></tr>" + "
			</table>";
		}
	});
}
````

2. Another approach is to implement the custom format string with all the needed fields inside the server-side tooltip tag for BoxPlotSeries.

````ASPX
<telerik:BoxPlotSeries
    DataLowerField="lower"
    DataQ1Field="q1"
    DataMedianField="median"
    DataQ3Field="q3"
    DataMeanField="mean"
    DataUpperField="upper"
    DataOutliersField="outliers">
    <TooltipsAppearance 
		Color="White"
		DataFormatString=
"{6:d}<br/>Lower:{0:N}<br/>Q1:{1:N}<br/>Median:{2:N}<br/>Mean:{5:N}<br/>Q3:{3:N}<br/>Upper:{4:N}">
    </TooltipsAppearance>
</telerik:BoxPlotSeries>
````

   