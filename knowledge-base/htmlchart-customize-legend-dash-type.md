---
title: Customizing Legend Dash Type in RadHtmlChart
description: Learn how to modify the legend item's dash type in RadHtmlChart to match the dash style of its corresponding series.
type: how-to
page_title: How to Customize Legend Dash Type in RadHtmlChart for ASP.NET AJAX
slug: htmlchart-customize-legend-dash-type
tags: radhtmlchart, asp.net ajax, legend, dash type, visualization
res_type: kb
ticketid: 1666132
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadHtmlChart for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

When using a RadHtmlChart with a line series displayed as a dashed line, the default behavior shows the legend item as a solid line. The goal is to make the legend item appear with a dash type matching its corresponding series.

This KB article also answers the following questions:
- How can I change the appearance of legend items in RadHtmlChart?
- Is it possible to apply custom styles to legend items based on the series style?
- Can I use a custom visual to modify legend items in RadHtmlChart?

## Solution

To customize the dash type of a legend item in RadHtmlChart, use a custom visual function. This approach allows the legend item to reflect the same dash type as its corresponding series item.

1. Define the RadHtmlChart control with the necessary series and specify the `DashType` for each series.

2. Use the `Visual` property of the `Legend` > `Item` to assign a JavaScript function that customizes the appearance of the legend item.

3. Implement the custom visual function (`legendItemVisual`) to create a legend item with a dashed line matching the series dash type.

Here's a code snippet demonstrating this solution:

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Height="400px">
    <Legend>
        <Appearance Position="Bottom" />
        <Item Visual="legendItemVisual" />
    </Legend>
    <PlotArea>
        <Series>
            <telerik:LineSeries Name="Actual">
                <LineAppearance DashType="Dash" />
                <SeriesItems>
                    <telerik:CategorySeriesItem Y="190000" />
                    <telerik:CategorySeriesItem Y="25000" />
                    <telerik:CategorySeriesItem Y="175000" />
                </SeriesItems>
            </telerik:LineSeries>
            <!-- Include other series as needed -->
        </Series>
    </PlotArea>
    <ChartTitle Text="Product Sales for 2014">
    </ChartTitle>
</telerik:RadHtmlChart>
````

4. Define the `legendItemVisual` JavaScript function to adjust the legend's item appearance.

````JavaScript
legendItemVisual = function (e) {
    var color = e.options.markers.background;
    var labelColor = e.options.labels.color ? e.options.labels.color : "#000";
    var rect = new kendo.geometry.Rect([0, 0], [200, 50]);
    var layout = new kendo.drawing.Layout(rect, {
        spacing: 5,
        alignItems: "center"
    });

    var marker = new kendo.drawing.Path({
        stroke: {
            color: color,
            width: 3,
            dashType: e.series.dashType
        }
    }).moveTo(0, 0).lineTo(30, 0);

    var label = new kendo.drawing.Text(e.series.name, [0, 0], {
        fill: {
            color: labelColor
        }
    });

    layout.append(marker, label);
    layout.reflow();

    return layout;
};
````

Adopting this approach allows for a consistent visual representation between the series and their corresponding legend items.

## See Also

- [Visual Template in RadHtmlChart Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/functionality/visual-template#visual-template)
- [RadHtmlChart Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/overview)
