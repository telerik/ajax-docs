---
title: Making a Pie Slice Explode on Legend Hover in UI for ASP.NET AJAX
description: Learn how to make a pie slice explode or highlight when hovering over its legend item in a Telerik UI for ASP.NET AJAX HtmlChart.
type: how-to
page_title: Pie Slice Exploding on Legend Hover in HtmlChart
meta_title: Pie Slice Exploding on Legend Hover in HtmlChart
slug: htmlchart-pie-slice-explode-on-legend-hover
tags: htmlchart, asp.net-ajax, pie-chart, tooltip, legend-hover
res_type: kb
ticketid: 1719024
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>HtmlChart for UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>2026.3.812</td>
</tr>
</tbody>
</table>

## Description

I want to make a pie slice explode or highlight dynamically when hovering over its legend item in a [HtmlChart](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/overview) for UI for ASP.NET AJAX.

This knowledge base article also answers the following questions:
- How to highlight a pie slice on legend hover in a HtmlChart?
- How to dynamically explode a pie slice in Kendo UI for ASP.NET AJAX?

## Solution

To achieve the desired behavior, use the `OnLegendItemHover` client event of the `HtmlChart` component. Modify the `IsExploded` property of the hovered pie slice and use the tooltip component to display detailed information.

1. Add a JavaScript function to handle the `OnLegendItemHover` event:

````JavaScript
function onLegendItemHover(e) {
    let index = e.pointIndex;
    let item = e.series.data[index];

    // Toggle the IsExploded property to explode/unexplode the slice.
    item.IsExploded = !item.IsExploded;

    // Highlight the slice.
    e.sender.toggleHighlight(index, true);

    // Refresh the chart to reflect changes.
    e.sender.refresh();
}
````

2. Assign the `onLegendItemHover` function to the `OnLegendItemHover` client event in the chart configuration:

````ASP.NET
<telerik:RadHtmlChart ID="Chart1" runat="server" Height="825" Transitions="true">
    <ClientEvents OnLegendItemHover="onLegendItemHover" />
    <PlotArea>
        <Series>
            <telerik:PieSeries DataFieldY="Importe" NameField="Des_Art" StartAngle="90" ExplodeField="IsExploded" />
        </Series>
    </PlotArea>
</telerik:RadHtmlChart>
````

