---
title: Events Overview
page_title: Overview | RadHtmlChart for ASP.NET AJAX Documentation
description: Overview
slug: htmlchart/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview

**RadHtmlChart** exposes several client-side events for handling different user interactions:

* **OnLoad**—raised when the control is initialized.

* [OnSeriesClick](http://docs.telerik.com/kendo-ui/api/dataviz/chart#events-seriesClick)—rised when the user clicks the **RadHtmlChart** series.

* [OnSeriesHover](http://docs.telerik.com/kendo-ui/api/dataviz/chart#events-seriesHover)—rised when the user hovers the **RadHtmlChart** series.

* [OnLegendItemClick](http://docs.telerik.com/kendo-ui/api/dataviz/chart#events-legendItemClick)—raised when an legend item is clicked.

* [OnLegendItemHover](http://docs.telerik.com/kendo-ui/api/dataviz/chart#events-legendItemHover)—raised when an legend item is hovered.

* [OnClientSeriesClicked]({%slug htmlchart/client-side-programming/events/onclientseriesclicked(deprecated)%}) (Deprecated)

* [OnClientSeriesHovered]({%slug htmlchart/client-side-programming/events/onclientserieshovered(deprecated)%}) (Deprecated)

To use these events, simply write a JavaScript function that can be called when the event occurs. Then assign the name of this function as the value of the the corresponding property in the **ClientEvents** RadHtmlChart subtag.

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

All client-side events, except **OnLoad**, are references to their corresponding events of the Kendo UI HtmlChart object. You can get familiar with the full set of arguments coming with each event in the [Kendo UI HtmlChart API reference](http://docs.telerik.com/kendo-ui/api/dataviz/chart#events). For example:

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
