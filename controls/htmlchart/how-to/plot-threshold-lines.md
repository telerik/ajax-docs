---
title: Plot Threshold Lines
page_title: Plot Threshold Lines | RadHtmlChart for ASP.NET AJAX Documentation
description: Plot Threshold Lines
slug: htmlchart/how-to/plot-threshold-lines
tags: plot,threshold,lines
published: True
position: 7
---

# Plot Threshold Lines

This help article provides different approaches for plotting threshold lines in RadHtmlChart.

* [Plot Threshold Lines via Visual Templates and Kendo UI Drawing API](#plot-threshold-lines-via-visual-templates-and-kendo-ui-drawing-api)
* [Plot Threshold Lines via Additional Series](#plot-threshold-lines-via-additional-series)
* [Plot Threshold Lines via Plot Bands](#plot-threshold-lines-via-plot-bands)

## Plot Threshold Lines via Visual Templates and Kendo UI Drawing API

### Plot Threshold Lines after Chart Rendering (non-databound)

>caption Figure 1: sss

![htmlchart-threshold-lines-non-data-bound](images/htmlchart-threshold-lines-non-data-bound.png)

>caption Example 1: 

````JavaScript
var commonThresholdValue = 5;
var thresholdValues = [1.5, 3, 2.5];

function OnLoad(chart) {
	setTimeout(function () {
		var kendoChart;
		if (chart instanceof (Telerik.Web.UI.RadHtmlChart)) {
			kendoChart = chart.get_kendoWidget();
		}
		else {
			kendoChart = chart.sender;
		}

		var valueAxis = kendoChart.getAxis("value");
		var categoryAxis = kendoChart.getAxis("category");

		var catetgoriesCount = categoryAxis._axis.labelsCount();
		for (var i = 0; i < catetgoriesCount; i++) {
			plotThresholdLine(kendoChart, categoryAxis.slot(i, i + 1), valueAxis.slot(thresholdValues[i]), "blue")
		}
		plotThresholdLine(kendoChart, categoryAxis.slot(0, catetgoriesCount), valueAxis.slot(commonThresholdValue), "green");
	}, 100);
}

function plotThresholdLine(chart, xSlot, ySlot, colorLine) {
	var path = new kendo.drawing.Path({
		stroke: {
			color: colorLine,
			width: 3
		}
	}).moveTo(xSlot.origin.x, ySlot.origin.y)
	.lineTo(xSlot.bottomRight().x, ySlot.origin.y);
	chart.surface.draw(path);
}
````
````ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Width="500px" Height="300px" Skin="Silk">
	<ClientEvents OnLoad="OnLoad" OnLegendItemClick="OnLoad" />
	<PlotArea>
		<Series>
			<telerik:ColumnSeries Name="Series 1">
				<SeriesItems>
					<telerik:CategorySeriesItem Y="1" />
					<telerik:CategorySeriesItem Y="2" />
					<telerik:CategorySeriesItem Y="6" />
				</SeriesItems>
			</telerik:ColumnSeries>
			<telerik:ColumnSeries Name="Series 2">
				<SeriesItems>
					<telerik:CategorySeriesItem Y="3" />
					<telerik:CategorySeriesItem Y="7" />
					<telerik:CategorySeriesItem Y="5" />
				</SeriesItems>
			</telerik:ColumnSeries>
		</Series>
		<YAxis Name="value"></YAxis>
		<XAxis Name="category">
			<Items>
				<telerik:AxisItem LabelText="1" />
				<telerik:AxisItem LabelText="2" />
				<telerik:AxisItem LabelText="3" />
			</Items>
		</XAxis>
	</PlotArea>
</telerik:RadHtmlChart>
````

### Plot Threshold Lines via Visual Templates (databound chart)

>caption Figure 2: sss

![htmlchart-threshold-lines-data-bound](images/htmlchart-threshold-lines-data-bound.png)

>caption Example 2: sss

````JavaScript
function visual(e) {
	var thresholdValue = e.dataItem["threshold" + e.series.index];
	var thresholdColor = e.dataItem["colorField" + e.series.index];

	var valueSlot = e.sender.getAxis("myYaxis").slot(thresholdValue);

	var path = new kendo.drawing.Path({
		stroke: {
			color: thresholdColor,
			width: 3
		}
	}).moveTo(e.rect.bottomLeft().x, valueSlot.origin.y)
	.lineTo(e.rect.bottomRight().x, valueSlot.origin.y);

	var defaultVisual = e.createVisual();

	var group = new kendo.drawing.Group();
	group.append(defaultVisual, path);

	return group;
}
````
````ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart2" Width="500px" Height="300px" Skin="Silk">
	<PlotArea>
		<Series>
			<telerik:ColumnSeries Name="Series 1" DataFieldY="yField0">
				<Appearance Visual="visual"></Appearance>
			</telerik:ColumnSeries>
			<telerik:ColumnSeries Name="Series 2" DataFieldY="yField1">
				<Appearance Visual="visual"></Appearance>
			</telerik:ColumnSeries>
		</Series>
		<YAxis Name="myYaxis"></YAxis>
		<XAxis DataLabelsField="catField">
		</XAxis>
	</PlotArea>
</telerik:RadHtmlChart>
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
	RadHtmlChart2.DataSource = GetData();
	RadHtmlChart2.DataBind();
}

protected DataTable GetData()
{
	DataTable dt = new DataTable();

	dt.Columns.Add("ID", typeof(int));
	dt.Columns.Add("yField0", typeof(int));
	dt.Columns.Add("yField1", typeof(int));
	dt.Columns.Add("threshold0", typeof(int));
	dt.Columns.Add("threshold1", typeof(int));
	dt.Columns.Add("colorField0", typeof(string));
	dt.Columns.Add("colorField1", typeof(string));
	dt.Columns.Add("catField", typeof(string));

	dt.Rows.Add(1, 2, 3, 5, 4, "blue", "green", "Item 1");
	dt.Rows.Add(2, 5, 7, 6, 3, "blue", "green", "Item 2");
	dt.Rows.Add(3, 6, 4, 7, 1, "blue", "green", "Item 3");

	return dt;
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs)
	RadHtmlChart2.DataSource = GetData()
	RadHtmlChart2.DataBind()
End Sub

Protected Function GetData() As DataTable
	Dim dt As New DataTable()

	dt.Columns.Add("ID", GetType(Integer))
	dt.Columns.Add("yField0", GetType(Integer))
	dt.Columns.Add("yField1", GetType(Integer))
	dt.Columns.Add("threshold0", GetType(Integer))
	dt.Columns.Add("threshold1", GetType(Integer))
	dt.Columns.Add("colorField0", GetType(String))
	dt.Columns.Add("colorField1", GetType(String))
	dt.Columns.Add("catField", GetType(String))

	dt.Rows.Add(1, 2, 3, 5, 4, "blue", _
		"green", "Item 1")
	dt.Rows.Add(2, 5, 7, 6, 3, "blue", _
		"green", "Item 2")
	dt.Rows.Add(3, 6, 4, 7, 1, "blue", _
		"green", "Item 3")

	Return dt
End Function
````

## Plot Threshold Lines via Additional Series

## Plot Threshold Lines via Plot Bands



## See Also

 * [Visual Template]({%slug htmlchart/functionality/visual-template%})
 
 * [Column Series]({%slug htmlchart/chart-types/column-chart%})

 * [Live Demo: Kendo Drawing API](http://demos.telerik.com/kendo-ui/drawing/index)

 * [API Reference: Kendo Drawing API](http://docs.telerik.com/kendo-ui/api/javascript/drawing)

 * [API Reference: Kendo Chart](http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart)
