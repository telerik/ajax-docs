---
title: Highlight series labels depending on the items values
description: Learn how to style the SeriesItems labels depending on the item's value.
type: how-to
page_title: Style specific seriesitem labels depending on the items value
slug: htmlchart-highlight-seriesitems-labels
position: 
tags: 
ticketid: 1360977
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2019.3.917</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadHtmlChart for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The labels [Visual template](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/functionality/visual-template) functionality of **RadHtmlChart** allows for customizing the whole appearance of the series labels. If you need to highlight the Series labels depending on the item's value (in terms of fore and background color), you can implement a custom Visual template, redrawing the used elements via the [Kendo Drawing API](https://docs.telerik.com/kendo-ui/framework/drawing/basic-shapes):

## Solution
````ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadarLineChart" Width="400" Height="400" Transitions="true" Skin="Silk">
    <PlotArea>
        <Series>
            <telerik:RadarLineSeries Name="TEST" MissingValues="Gap">
                <LabelsAppearance Visible="true" Color="Black" Position="Above" Visual="labelsVisual">
                </LabelsAppearance>
                <MarkersAppearance Visible="false" />
                <TooltipsAppearance Visible="false" />
                <SeriesItems>
                    <telerik:CategorySeriesItem Y="35"></telerik:CategorySeriesItem>
                    <telerik:CategorySeriesItem Y="52"></telerik:CategorySeriesItem>
                    <telerik:CategorySeriesItem Y="28"></telerik:CategorySeriesItem>
                    <telerik:CategorySeriesItem Y="39"></telerik:CategorySeriesItem>
                    <telerik:CategorySeriesItem Y="15"></telerik:CategorySeriesItem>
                    <telerik:CategorySeriesItem Y="84"></telerik:CategorySeriesItem>
                    <telerik:CategorySeriesItem Y="68"></telerik:CategorySeriesItem>
                </SeriesItems>
            </telerik:RadarLineSeries>
        </Series>
        <XAxis>
            <Items>
                <telerik:AxisItem LabelText="Monday"></telerik:AxisItem>
                <telerik:AxisItem LabelText="Tuesday"></telerik:AxisItem>
                <telerik:AxisItem LabelText="Wednesday"></telerik:AxisItem>
                <telerik:AxisItem LabelText="Thursday"></telerik:AxisItem>
                <telerik:AxisItem LabelText="Friday"></telerik:AxisItem>
                <telerik:AxisItem LabelText="Saturday"></telerik:AxisItem>
                <telerik:AxisItem LabelText="Sunday"></telerik:AxisItem>
            </Items>
        </XAxis>
        <YAxis Visible="false" MinValue="0" MaxValue="100">
        </YAxis>
    </PlotArea>
    <ChartTitle>
        <Appearance Visible="false" />
    </ChartTitle>
    <Legend>
        <Appearance Visible="false" />
    </Legend>
</telerik:RadHtmlChart>
<script>
    function labelsVisual(e) {
        var geom = kendo.geometry;
        var draw = kendo.drawing;
        var center = e.rect.center();
        var rectGeom = new geom.Rect([e.rect.origin.x, e.rect.origin.y], [e.rect.width(), 15]);
        var rect, label, layout;
        if (e.text > 50) {
            rect = new draw.Rect(rectGeom, {
                fill: {
                    color: "red"
                },
                stroke: { width: 0 }
            })
 
            label = new draw.Text(e.text, [center.x, e.rect.origin.y], {
                fill: {
                    color: "white"
                }
            });
        }
        else {
            rect = new draw.Rect(rectGeom, {
                fill: {
                    color: "black"
                },
                stroke: { width: 0 }
            })
 
            label = new draw.Text(e.text, [center.x, e.rect.origin.y], {
                fill: {
                    color: "red"
                }
            });
        }
        layout = new draw.Layout(rect, {
            spacing: 5,
            alignItems: "center"
        });
 
        layout.append(rect, label);
        return layout;
    }
</script>
````

## See Also

* [RadHtmlChart Visual Template](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/functionality/visual-template)

* [Kendo UI Drawing API](https://docs.telerik.com/kendo-ui/framework/drawing/basic-shapes)
