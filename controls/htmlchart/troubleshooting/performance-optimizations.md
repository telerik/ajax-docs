---
title: Performance Optimizations
page_title: Performance Optimizations - RadHtmlChart
description: Check our Web Forms article about Performance Optimizations.
slug: htmlchart/troubleshooting/performance-optimizations
tags: performance,optimizations
published: True
position: 2
---

# Performance Optimizations

This help article describes the reason for a possible increase in the [ASP NET AJAX Chart's](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx) load time and offers measures to improve the performance of the control.

The **RadHtmlChart** renders SVG in modern browsers and VML in older browsers that do not support SVG (i.e., IE8 and below), that are essentially forms of an XML document. This means that the chart's image will be created by numerous elements (i.e., XML nodes) and rendering them may take some time for the browser. In scenarios where the chart has many components like series items, x/y axes labels, major and/or minor grid lines (i.e., path and text elements for the rendering) and the animation is enabled (it is enabled by default), the overall rendering time may be increased because the browser will have to draw too many elements and animate them.

The performance also greatly depends on the performance of the machine and the browser. Slower browsers like IE7 and IE8, especially when used on slower machines, may not meet all your needs. This can be aggravated by the presence of many charts on the page and the page's load time will increase proportionately.

## How to Improve RadHtmlChart Performance

The way to improve the rendering speed of the chart is to remove the most numerous elements that can slow down the browser. There are several things you could do in order to speed up the **RadHtmlChart**'s client-side rendering:

* Switch to Canvas rendering - `RenderAs="Canvas"`. This rendering will improve the performance, especially on mobile device.
* Disable the chart's animation by setting the **Transitions** property to **false**. By doing so, the browser will not have to animate the thousands of XML nodes in the chart image.
* Disable gradients of series - `<Appearance Overlay-Gradient="None"></Appearance>`.
* Hide the MinorGridLines and/or MajorGridLines of the X and/or Y axes by setting the **[YAxis/XAxis].[MinorGridLines/MajorGridLines].Visible** property to **false**.
* Hide the series' labels by setting the **[Series Object].LabelsAppearance.Visible** property to **false**. When there are thousand of items the labels would be hardly readable and are likely to only create visual clutter.
* Hide the X and/or Y axes' labels by setting the **[YAxis/XAxis].LabelsAppearance.Visible** property to **false**. You can also set a higher value for the axes labels step through the **[YAxis/XAxis].LabelsAppearance.Step** property.

You can find a sample declaration of an optimized **RadHtmlChart** setup with 398 series items in **Example 1**.

>caption Example 1: RadHtmlChart's load time can be improved significantly by disabling animations, hiding series items labels and major and minor axis grid lines.

````ASP.NET
<telerik:RadHtmlChart ID="RadHtmlChart1" runat="server" Width="600px" Height="400px" Transitions="false" RenderAs="Canvas">
	<PlotArea>
		<Series>
			<telerik:ScatterLineSeries DataFieldX="XValue" DataFieldY="YValue" Name="Sine Wave">
				<LabelsAppearance Visible="false"></LabelsAppearance>
				<MarkersAppearance Visible="false" />
			</telerik:ScatterLineSeries>
		</Series>
		<XAxis>
			<LabelsAppearance Step="2"></LabelsAppearance>
			<MajorGridLines Visible="false" />
			<MinorGridLines Visible="false" />
		</XAxis>
		<YAxis>
			<LabelsAppearance Step="2"></LabelsAppearance>
			<MajorGridLines Visible="false" />
			<MinorGridLines Visible="false" />
		</YAxis>
	</PlotArea>
	<ChartTitle Text="Optimizing RadHtmlChart Performance">
	</ChartTitle>
</telerik:RadHtmlChart>
````
````C#
protected void Page_Load(object sender, EventArgs e)
{
	List<PlotXY> chartData = new List<PlotXY>();
	double step = Math.PI / 25;
	for (double i = -25; i < 25; i += step)
	{
		chartData.Add(new PlotXY() { XValue = i, YValue = Math.Sin(i) });
	}
	RadHtmlChart1.DataSource = chartData;
	RadHtmlChart1.DataBind();
}

public class PlotXY
{
	public double XValue { get; set; }
	public double YValue { get; set; }
}
````
````VB
Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	Dim chartData As New List(Of PlotXY)()
	Dim [step] As Double = Math.PI / 25
	Dim i As Double = -25
	While i < 25
		chartData.Add(New PlotXY() With {.XValue = i, .YValue = Math.Sin(i)})
		i += [step]
	End While
	RadHtmlChart1.DataSource = chartData
	RadHtmlChart1.DataBind()
End Sub

Public Class PlotXY
	Public Property XValue As Double
	Public Property YValue As Double
End Class
````


## See Also

 * [RadHtmlChart Basic Configuration]({%slug htmlchart/server-side-programming/basic-configuration%})

 * [RadHtmlChart Configuring Axes]({%slug htmlchart/server-side-programming/axes-configuration%})

 * [RadHtmlChart Configuring Series]({%slug htmlchart/server-side-programming/series-configuration%})

 * [RadHtmlChart Overview]({%slug htmlchart/overview%})

 * [RadHtmlChart ScatterLineSeries]({%slug htmlchart/chart-types/scatterline-chart%})
