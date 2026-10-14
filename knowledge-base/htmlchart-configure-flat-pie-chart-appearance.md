---
title: Configure a Flat 2D RadHtmlChart Pie Chart
description: Learn how to configure a RadHtmlChart pie chart with explicit dimensions, background colors, and no overlay gradient.
type: how-to
page_title: Configure a Flat 2D RadHtmlChart Pie Chart
slug: htmlchart-configure-flat-pie-chart-appearance
tags: htmlchart, pie chart, 2D, background, gradient, appearance
res_type: kb
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>Telerik UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>2026.3.811</td>
</tr>
</tbody>
</table>

## Description

How can I configure a RadHtmlChart pie chart with a fixed size, custom chart and plot-area backgrounds, and a flat appearance without an overlay gradient?

## Solution

RadHtmlChart pie charts are rendered in two dimensions. Set the chart `Width` and `Height`, configure the chart and plot-area `FillStyle`, and set `Overlay-Gradient="None"` on the `PieSeries`.

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="FlatPieChart" Width="600px" Height="400px">
    <Appearance>
        <FillStyle BackgroundColor="#f4f6f8" />
    </Appearance>
    <PlotArea>
        <Appearance>
            <FillStyle BackgroundColor="White" />
        </Appearance>
        <Series>
            <telerik:PieSeries>
                <Appearance Overlay-Gradient="None" />
                <LabelsAppearance Position="OutsideEnd" DataFormatString="{0}%" />
                <TooltipsAppearance DataFormatString="{0}%" />
                <SeriesItems>
                    <telerik:PieSeriesItem BackgroundColor="#4e79a7" Name="Desktop" Y="45" />
                    <telerik:PieSeriesItem BackgroundColor="#f28e2b" Name="Mobile" Y="35" />
                    <telerik:PieSeriesItem BackgroundColor="#59a14f" Name="Tablet" Y="20" />
                </SeriesItems>
            </telerik:PieSeries>
        </Series>
    </PlotArea>
</telerik:RadHtmlChart>
````

The `PieSeriesItem` colors control the individual slices. To export the rendered chart as an image, see [Export to PDF or Image with RadClientExportManager]({%slug htmlchart/how-to/export-to-pdf-with-clientexportmanager%}). For the full pie chart configuration, see [Pie Chart]({%slug htmlchart/chart-types/pie-chart%}).

## See Also

- [Legend Settings]({%slug htmlchart/appearance-and-styling/legend-settings%})
- [Donut Chart]({%slug htmlchart/chart-types/donut-chart%})
