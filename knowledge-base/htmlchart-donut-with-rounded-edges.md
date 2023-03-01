---
title: How to create a Donut chart with rounded ends
description: This article explains how to create a Telerik RadHtmlChart Donut chart with rounded ends. The solution involves using custom visuals to draw circles at the start and end of each segment to create the rounded effect - RadHtmlChart for ASP.NET AJAX
type: how-to
page_title: Create a Donut chart with rounded edges
slug: htmlchart-donut-with-rounded-edges
position: 
tags: 
ticketid: 1598852
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadHtmlChart for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
This article explains how to create a Telerik RadHtmlChart Donut chart with rounded ends. The solution involves using custom visuals to draw circles at the start and end of each segment to create the rounded effect.

## Solution
To create a Telerik RadHtmlChart Donut chart with rounded ends, you will need to use visuals templates. The [Visual templates](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/functionality/visual-templates/defaultcs.aspx) allow you to modify the appearance of the chart by defining your own JavaScript function. Here are the steps to create a Telerik RadHtmlChart Donut chart with rounded ends:

1. Define a JavaScript function called "Pie_CurvedEnds". This function will take the segment geometry as input and return a new visual element that includes a circle at the start and end of the segment.

2. In the ASPX code, add the "Pie_CurvedEnds" function to the Series "Appearance.Visual" property of the DonutSeries.

3. Add the DonutSeries to the PlotArea of the RadHtmlChart control.

4. Customize the appearance of the chart as desired, including the chart title, legend, and series items.

Here is an example of the ASPX code for a Donut chart with rounded ends:

````ASPX
<script>
    function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        var angleInRadians = (angleInDegrees) * Math.PI / 180.0;

        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    }

    var lastColour = "none";

    Pie_CurvedEnds = function (e) {
        var seg = e.createVisual(); //get original segment geometry

        var circRad = (e.radius - e.innerRadius) / 2; //end cap radius
        var dist = e.innerRadius + circRad;
        var spoint = polarToCartesian(e.center.x, e.center.y, dist, e.startAngle);
        var epoint = polarToCartesian(e.center.x, e.center.y, dist, e.endAngle);


        //draw circle at start of segment
        var startArcGeometry = new kendo.geometry.Arc([epoint.x, epoint.y], {
            startAngle: 0, endAngle: 360, radiusX: circRad, radiusY: circRad
        });
        var startArc = new kendo.drawing.Arc(startArcGeometry, {
            fill: { color: e.options.color },
            stroke: { color: "none" }
        });

        var group = new kendo.drawing.Group();
        group.append(seg, startArc);

        if (lastColour != "none") {

            var endArcGeometry = new kendo.geometry.Arc([spoint.x, spoint.y], {
                startAngle: 0, endAngle: 360, radiusX: circRad, radiusY: circRad
            });

            var endArc = new kendo.drawing.Arc(endArcGeometry, {
                fill: { color: lastColour },
                stroke: { color: "none" }
            });


            group.append(endArc);
        }
        lastColour = e.options.color;
        return group;
    };
</script>
<telerik:RadHtmlChart runat="server" ID="RadHtmlChartPriority" Width="520" Height="500" Transitions="true" Skin="Silk">
    <ChartTitle Text="Donut Chart with Rounded edges">
        <Appearance Align="Center" Position="Top">
        </Appearance>
    </ChartTitle>
    <Legend>
        <Appearance Position="Right" Visible="true">
        </Appearance>
    </Legend>
    <PlotArea>
        <Series>
            <telerik:DonutSeries StartAngle="90" HoleSize="65">
                <Appearance Visual="Pie_CurvedEnds"></Appearance>
                <LabelsAppearance Position="Center" DataFormatString="{0} %" Visible="true"></LabelsAppearance>
                <TooltipsAppearance Color="White" DataFormatString="{0}%"></TooltipsAppearance>
                <SeriesItems>
                    <telerik:PieSeriesItem BackgroundColor="red" Exploded="false" Name="High" Y="45"></telerik:PieSeriesItem>
                    <telerik:PieSeriesItem  BackgroundColor="blue" Exploded="false" Name="Medium" Y="35"></telerik:PieSeriesItem>
                    <telerik:PieSeriesItem  BackgroundColor="green" Exploded="false" Name="Low" Y="15"></telerik:PieSeriesItem>
                    <telerik:PieSeriesItem  BackgroundColor="yellow" Exploded="false" Name="Zero" Y="5"></telerik:PieSeriesItem>
                               
                </SeriesItems>
            </telerik:DonutSeries>
        </Series>
    </PlotArea>
</telerik:RadHtmlChart>
````

In the code above, the "Pie_CurvedEnds" function is added to the "Appearance.Visual" property of the DonutSeries. The appearance of the chart is customized with a chart title, legend, and series items.

You can also create a Donut chart with rounded ends programmatically in C#. Here is an example of the C# code:

````C#
    protected void Page_Load(object sender, EventArgs e)
    {
        RadHtmlChartPriority.PlotArea.Series.Add(CreateChartSeries(2, 3));
    }

    private DonutSeries CreateChartSeries(int itemtotal, int total)
    {
        var series = new DonutSeries();
        series.Appearance.Visual = "Pie_CurvedEnds";
        series.HoleSize = 40;
        series.StartAngle = 90;

        series.TooltipsAppearance.DataFormatString = "{0}";
        series.LabelsAppearance.Visible = false;

        var seriesItem = new PieSeriesItem();



        seriesItem.Name = "Priority";
        seriesItem.Y = itemtotal;
        seriesItem.BackgroundColor = Color.Purple;
        seriesItem.Exploded = false;

        series.SeriesItems.Add(seriesItem);

        seriesItem = new PieSeriesItem();
        seriesItem.Name = "Non-Priority";
        seriesItem.Y = total;
        seriesItem.BackgroundColor = Color.Lavender;
        seriesItem.Exploded = false;

        series.SeriesItems.Add(seriesItem);

        return series;
    }
````
````VB
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
        RadHtmlChartPriority.PlotArea.Series.Add(CreateChartSeries(2, 3))
    End Sub

    Private Function CreateChartSeries(ByVal itemtotal As Integer, ByVal total As Integer) As DonutSeries
        Dim series = New DonutSeries()
        series.Appearance.Visual = "Pie_CurvedEnds"
        series.HoleSize = 40
        series.StartAngle = 90
        series.TooltipsAppearance.DataFormatString = "{0}"
        series.LabelsAppearance.Visible = False
        Dim seriesItem = New PieSeriesItem()
        seriesItem.Name = "Priority"
        seriesItem.Y = itemtotal
        seriesItem.BackgroundColor = Color.Purple
        seriesItem.Exploded = False
        series.SeriesItems.Add(seriesItem)
        seriesItem = New PieSeriesItem()
        seriesItem.Name = "Non-Priority"
        seriesItem.Y = total
        seriesItem.BackgroundColor = Color.Lavender
        seriesItem.Exploded = False
        series.SeriesItems.Add(seriesItem)
        Return series
    End Function
````
   
You can find more information in the StackOverflow [How to round the edge of donut chart in kendo UI using angular2](https://stackoverflow.com/questions/47176462/how-to-round-the-edge-of-donut-chart-in-kendo-ui-using-angular2) forum.
