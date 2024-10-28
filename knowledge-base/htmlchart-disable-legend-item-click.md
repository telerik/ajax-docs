---
title: Disable  Leged Item Click
description: This article demonstrates how to disable the click functionality on the legend items in RadHtmlChart for ASP.NET AJAX, preventing the default show/hide behavior of corresponding chart segments.
type: how-to
page_title: Disable  Leged Item Click 
slug: htmlchart-disable-legend-item-click
tags: radhtmlchart, asp.net ajax, legend, unclickable, prevent default
res_type: kb
ticketid: 1668631
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

I want to disable the ability to click on chart legend items, preventing the default behavior of showing or hiding the corresponding chart segments.

This KB article also answers the following questions:

- How to make legend items in RadHtmlChart non-interactive?
- How to prevent the default toggle behavior on legend item click in RadHtmlChart?
- How to stop chart segments from hiding when clicking on their legend items?

## Solution

To make legend items unclickable and prevent the default behavior of showing or hiding the corresponding chart segments in RadHtmlChart, attach the `legendItemClick` event and prevent its default action. 

The following example demonstrates how to achieve this by using a Pie Chart as an illustration. However, this approach is applicable to any chart type that supports legend items in RadHtmlChart.

1. Attach the `OnLegendItemClick` client event to the RadHtmlChart.

2. Implement the `onLegendItemClick` function to prevent the default behavior.

Here is how you can configure the RadHtmlChart:

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadChart1" Width="500px">
    <PlotArea>
        <Series>
            <telerik:PieSeries>
                <SeriesItems>
                    <telerik:PieSeriesItem Y="20" Name="name 1" />
                    <telerik:PieSeriesItem Y="30" Name="name 2" />
                    <telerik:PieSeriesItem Y="50" Name="name 3" />
                    <telerik:PieSeriesItem Y="40" Name="name 4" />
                </SeriesItems>
            </telerik:PieSeries>
        </Series>
    </PlotArea>
    <ClientEvents OnLegendItemClick="onLegendItemClick"/>
</telerik:RadHtmlChart>
````

Include the following JavaScript function in your page:

````JavaScript
function onLegendItemClick(e) {
    e.preventDefault();
}
````

By preventing the default action in the `onLegendItemClick` function, clicking on legend items will no longer toggle the visibility of the corresponding chart segments, making the legend items effectively unclickable in terms of interactive behavior.

## See Also

- [RadHtmlChart Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/overview)
- [Client-Side Programming Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/client-side-programming/overview)
