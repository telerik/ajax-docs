---
title: Print the Chart
page_title: Print the Chart | RadHtmlChart for ASP.NET AJAX Documentation
description: Print the Chart
slug: htmlchart/how-to/print-the-chart
tags: print,the,chart
published: True
position: 1
---

# Print the Chart

The **RadHtmlChart** renders an **SVG** or **VML** element that cannot be saved directly for printing as an image. In **Example 1** you will see how to force the browser to print only the chart and not the entire page.

## Print the HtmlChart's Content

Printing anything from a web page ultimately relies on the browser printing engine and the **RadHtmlChart** is not an exception. **Example 1** shows how to use a little JavaScript and CSS to hide everything else on the page can so only the chart will show up.

>warning At the time of writing (7th of August, 2012) Safari has a bug with printing gradient images that affects the **RadHtmlChart** as it utilizes them heavily. This means that under Safari the **RadHtmlChart** will not print properly until they fix this problem. The issue can be tracked in [this URI](http://code.google.com/p/chromium/issues/detail?id=99458).

>caption **Example 1**: Force the browser to print only the Chart's content but not the whole page.

````ASP.NET 
<div id="chartContainer" style="width: 800px; height: 500px">
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Width="800" Height="500"
	Transitions="true">
	<Appearance>
		<FillStyle BackgroundColor="White" />
	</Appearance>
	<ChartTitle Text="Browser Usage for April 2012">
		<Appearance Align="Center" BackgroundColor="White" Position="Top" />
	</ChartTitle>
	<Legend>
		<Appearance BackgroundColor="White" Position="Right" Visible="true" />
	</Legend>
	<PlotArea>
		<Appearance>
			<FillStyle BackgroundColor="White" />
		</Appearance>
		<Series>
			<telerik:PieSeries StartAngle="90">
				<LabelsAppearance Position="OutsideEnd" DataFormatString="{0} %" />
				<TooltipsAppearance DataFormatString="{0} %" />
				<SeriesItems>
					<telerik:PieSeriesItem BackgroundColor="#ff9900" Exploded="true" Name="Internet Explorer"
						Y="18.3" />
					<telerik:PieSeriesItem BackgroundColor="#cccccc" Exploded="false" Name="Firefox" Y="35.8" />
					<telerik:PieSeriesItem BackgroundColor="#999999" Exploded="false" Name="Chrome" Y="38.3" />
					<telerik:PieSeriesItem BackgroundColor="#666666" Exploded="false" Name="Safari" Y="4.5" />
					<telerik:PieSeriesItem BackgroundColor="#333333" Exploded="false" Name="Opera" Y="2.3" />
				</SeriesItems>
			</telerik:PieSeries>
		</Series>
	</PlotArea>
</telerik:RadHtmlChart>
</div>
<asp:Button ID="Button1" Text="print the chart" OnClientClick="printChartClient(); return false;"
	runat="server" />
<script type="text/javascript">
	//$telerik.$ is the jQuery that comes with the Telerik® UI for ASP.NET AJAX suite
	//It can be assigned to a shorter variable name or external jQuery can be used

	function printChartClient() {
		var chartContainer = $telerik.$("#chartContainer");
		//save the original CSS rules that will be modified
		var chartOriginalCSS = {
			display: chartContainer.css("display"),
			position: chartContainer.css("position"),
			top: chartContainer.css("top"),
			left: chartContainer.css("left"),
			zIndex: chartContainer.css("zIndex"),
			visibility: chartContainer.css("visibility")
		};
		//make sure the chart container is visible
		chartContainer.css({
			display: "block",
			position: "absolute",
			top: "6px",
			left: "1px",
			zIndex: 10000,
			visibility: "visible"
		}
		);
		var body = $telerik.$("body");
		//store the original CSS rules for the body tag that will be modified
		var bodyOriginalCSS = {
			visibility: body.css("visibility"),
			overflow: body.css("overflow"),
			background: body.css("background")
		};
		//hide the body tag
		body.css({
			visibility: "hidden",
			overflow: "hidden",
			background: "transparent"
		}
		);

		//call the browser print() method
		window.print();

		//restore the original CSS properties
		chartContainer.css(chartOriginalCSS);
		body.css(bodyOriginalCSS);
	}
</script>
````


## See Also

 * [KB Printing RadHtmlChart Article with a Downloadable Sample](https://www.telerik.com/support/kb/aspnet-ajax/html-chart/printing-radhtmlchart.aspx)

 * [Exporting RadHtmlChart to PNG and PDF](https://www.telerik.com/community/code-library/aspnet-ajax/html-chart/exporting-radhtmlchart-to-png-and-pdf.aspx)
