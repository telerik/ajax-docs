---
title: Keep RadHtmlChart Legend Items on One Line
description: Learn how to prevent line breaks in RadHtmlChart legend items when using a client template.
type: troubleshooting
page_title: Keep RadHtmlChart Legend Items on One Line
slug: htmlchart-keep-legend-items-on-one-line
tags: htmlchart, legend, client template, line break, wrapping
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

RadHtmlChart legend text can wrap or appear on multiple lines when the legend uses a client template. A comma in formatted text, such as `10,500`, does not create a line break. Do not add `\\n` to the template when the goal is to keep an item on one line.

## Solution

Use the documented `text` field in the legend `ClientTemplate` and give the horizontal legend enough width:

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="SingleLineLegendChart" Width="800px" Height="400px">
    <PlotArea>
        <Series>
            <telerik:LineSeries Name="hola 10,500">
                <SeriesItems>
                    <telerik:CategorySeriesItem Y="10" />
                    <telerik:CategorySeriesItem Y="20" />
                </SeriesItems>
            </telerik:LineSeries>
            <telerik:LineSeries Name="otro 2,000">
                <SeriesItems>
                    <telerik:CategorySeriesItem Y="15" />
                    <telerik:CategorySeriesItem Y="25" />
                </SeriesItems>
            </telerik:LineSeries>
        </Series>
    </PlotArea>
    <Legend>
        <Appearance Position="Bottom" Orientation="Horizontal" Width="700">
            <ClientTemplate>#= text #</ClientTemplate>
        </Appearance>
    </Legend>
</telerik:RadHtmlChart>
````

The `dataItem` fields used by series labels and tooltips are not documented as fields for a legend `ClientTemplate`. If the legend text is longer than the available space, adjust `Legend.Appearance.Width`, `Height`, `Position`, or `Orientation` instead of adding a line-feed sequence.

For the complete legend configuration options, see [Legend Settings]({%slug htmlchart/appearance-and-styling/legend-settings%}).

## See Also

- [Using Client Templates for Legends and Axes]({%slug htmlchart/functionality/clienttemplate/using-client-templates-legend-axes%})
- [Create a Scrollable Legend]({%slug htmlchart-create-scrollable-legend%})
