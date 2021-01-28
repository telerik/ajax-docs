---
title: Overview
page_title: Overview - RadHtmlChart
description: Check our Web Forms article about Events Overview.
slug: htmlchart/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview

**RadHtmlChart** exposes several client-side events for handling different user interactions:

* **OnKendoWidgetInitializing**—raised just before the Kendo Widget is initialized. Receives the chart and the chart widget's options as arguments.

* **OnLoad**—raised when the control is initialized.

* [OnDrag](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart#events-drag)—raised as long as the user is dragging the chart using the mouse or swipe gestures.

* [OnDragEnd](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart#events-dragEnd)—raised when when the user stops dragging the chart.

* [OnDragStart](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart#events-dragStart)—raised when the user starts dragging the chart.

* [OnLegendItemClick](https://docs.telerik.com/kendo-ui/api/dataviz/chart#events-legendItemClick)—raised when an legend item is clicked.

* [OnLegendItemHover](https://docs.telerik.com/kendo-ui/api/dataviz/chart#events-legendItemHover)—raised when an legend item is hovered.

* [OnSeriesClick](https://docs.telerik.com/kendo-ui/api/dataviz/chart#events-seriesClick)—rised when the user clicks the chart series.

* [OnSeriesHover](https://docs.telerik.com/kendo-ui/api/dataviz/chart#events-seriesHover)—rised when the user hovers the chart series.

* [OnZoom](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart#events-zoom)—raised as long as the user is zooming the chart using the mousewheel.

* [OnZoomEnd](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart#events-zoomEnd)—raised when the user stops zooming the chart.

* [OnZoomStart](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart#events-zoomStart)—raised when the user uses the mousewheel to zoom the chart.

* [OnClientSeriesClicked]({%slug htmlchart/client-side-programming/events/onclientseriesclicked(deprecated)%}) (Deprecated)

* [OnClientSeriesHovered]({%slug htmlchart/client-side-programming/events/onclientserieshovered(deprecated)%}) (Deprecated)

To use these events, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the the corresponding property in the **ClientEvents** RadHtmlChart subtag.

>caption **Example 1:** Handle the client-side **OnKendoWidgetInitializing** event

````ASP.NET
<script type="text/javascript">
	function OnKendoWidgetInitializing(chart, options) {
		 options.title.text = "title text changed from init";
	}
</script>
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart3" Width="800px" Height="400px">
	<ClientEvents OnKendoWidgetInitializing="OnKendoWidgetInitializing" />
	<PlotArea>
		<Series>
			<telerik:ColumnSeries Name="In 2010">
				<SeriesItems>
					<telerik:CategorySeriesItem Y="46.3" />
					<telerik:CategorySeriesItem Y="46.5" />
				</SeriesItems>
			</telerik:ColumnSeries>
		</Series>
		<XAxis>
			<Items>
				<telerik:AxisItem LabelText="January" />
				<telerik:AxisItem LabelText="Februrary" />
			</Items>
		</XAxis>
		<YAxis>
			<LabelsAppearance DataFormatString="{0}%" />
		</YAxis>
	</PlotArea>
	<ChartTitle Text="Firefox market share">
	</ChartTitle>
</telerik:RadHtmlChart>
````

>caption **Example 2:** Handle the client-side **OnLoad** event
````ASP.NET
<script type="text/javascript">
	function OnLoad(chart) {
		alert("OnLoad event fired by RadHtmlChart with ID: " + chart.get_id());
	}
</script>
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart3" Width="800px" Height="400px">
	<ClientEvents OnLoad="OnLoad" />
	<PlotArea>
		<Series>
			<telerik:ColumnSeries Name="In 2010">
				<SeriesItems>
					<telerik:CategorySeriesItem Y="46.3" />
					<telerik:CategorySeriesItem Y="46.5" />
				</SeriesItems>
			</telerik:ColumnSeries>
		</Series>
		<XAxis>
			<Items>
				<telerik:AxisItem LabelText="January" />
				<telerik:AxisItem LabelText="Februrary" />
			</Items>
		</XAxis>
		<YAxis>
			<LabelsAppearance DataFormatString="{0}%" />
		</YAxis>
	</PlotArea>
	<ChartTitle Text="Firefox market share">
	</ChartTitle>
</telerik:RadHtmlChart>
````


All client-side events, except **OnLoad** and **KendoWidgetInitializing**, are references to their corresponding events of the Kendo UI HtmlChart object. You can get familiar with the full set of arguments coming with each event in the [Kendo UI HtmlChart API reference](https://docs.telerik.com/kendo-ui/api/dataviz/chart#events). For example:

>caption **Example 3:** Handle the client-side **OnSeriesClick** event
````ASP.NET
<script type="text/javascript">
	function OnSeriesClick(args) {
		var kendoWidget = args.sender;
		alert("You clicked on a series item with value '" + args.value + "' from category '" + args.category + "'.");
	}
</script>
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart2" Width="800px" Height="400px">
	<ClientEvents OnSeriesClick="OnSeriesClick"/>
	<PlotArea>
		<Series>
			<telerik:ColumnSeries Name="In 2010">
				<SeriesItems>
					<telerik:CategorySeriesItem Y="46.3" />
					<telerik:CategorySeriesItem Y="46.5" />
					<telerik:CategorySeriesItem Y="46.2" />
					<telerik:CategorySeriesItem Y="46.4" />
				</SeriesItems>
			</telerik:ColumnSeries>
			<telerik:ColumnSeries Name="In 2011">
				<SeriesItems>
					<telerik:CategorySeriesItem Y="42.8" />
					<telerik:CategorySeriesItem Y="42.4" />
					<telerik:CategorySeriesItem Y="42.2" />
					<telerik:CategorySeriesItem Y="42.9" />
				</SeriesItems>
			</telerik:ColumnSeries>
		</Series>
		<XAxis>
			<Items>
				<telerik:AxisItem LabelText="January" />
				<telerik:AxisItem LabelText="Februrary" />
				<telerik:AxisItem LabelText="March" />
				<telerik:AxisItem LabelText="April" />
			</Items>
		</XAxis>
		<YAxis>
			<LabelsAppearance DataFormatString="{0}%" />
		</YAxis>
	</PlotArea>
	<ChartTitle Text="Firefox market share">
	</ChartTitle>
</telerik:RadHtmlChart>
````

## See Also

 * [OnClientSeriesClicked]({%slug htmlchart/client-side-programming/events/onclientseriesclicked(deprecated)%})

 * [OnClientSeriesHovered]({%slug htmlchart/client-side-programming/events/onclientserieshovered(deprecated)%})
