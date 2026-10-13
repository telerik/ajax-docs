---
title: Making Donut Chart Slices Keyboard-Accessible in UI for ASP.NET AJAX
description: Learn how to make individual donut chart slices in Telerik RadHtmlChart keyboard-accessible by adding tabindex and ARIA attributes.
type: how-to
page_title: Ensuring Keyboard Accessibility for RadHtmlChart Donut Sectors
meta_title: Ensuring Keyboard Accessibility for RadHtmlChart Donut Sectors
slug: keyboard-accessibility-donut-chart-slices-ui-asp-net-ajax
tags: htmlchart, ui for asp.net ajax, keyboard accessibility, donut chart, tabindex, aria roles
res_type: kb
ticketid: 1719669
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> HtmlChart for UI for ASP.NET AJAX </td>
</tr>
<tr>
<td> Version </td>
<td> 2026.1.211 </td>
</tr>
</tbody>
</table>

## Description

By default, the [HtmlChart](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/overview) does not provide a built-in feature to make individual donut chart slices keyboard-focusable or operable. This may pose accessibility challenges for keyboard-only users who require interactive elements to have focusable attributes, ARIA roles, and accessible names. This article explains how to enhance keyboard accessibility for donut chart slices.

This knowledge base article also answers the following questions:

- How can I add tabindex and ARIA roles to RadHtmlChart donut chart slices?
- How do I make individual donut chart slices accessible for keyboard users?
- Is there a way to enhance RadHtmlChart accessibility using JavaScript?

## Solution

To make donut chart slices keyboard-focusable and operable, use the `OnLoad` client event of the RadHtmlChart to modify the SVG elements. Add `tabindex`, ARIA roles, and keyboard event handling to the slices. Follow these steps:

1. Define your RadHtmlChart with the required configuration and add the `OnLoad` client event.

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="DonutChart1" Width="520" Height="500" Transitions="true">
    <ClientEvents OnLoad="onChartLoad" />
    <PlotArea>
        <Series>
            <telerik:DonutSeries StartAngle="90" HoleSize="65">
                <LabelsAppearance Position="Center" DataFormatString="{0} %" Visible="true"></LabelsAppearance>
                <TooltipsAppearance Color="White" DataFormatString="{0}%"></TooltipsAppearance>
                <SeriesItems>
                    <telerik:PieSeriesItem BackgroundColor="#00adcc" Exploded="false" Name="On Track" Y="66.67"></telerik:PieSeriesItem>
                    <telerik:PieSeriesItem BackgroundColor="#cccccc" Exploded="false" Name="Off Track" Y="33.33"></telerik:PieSeriesItem>
                </SeriesItems>
            </telerik:DonutSeries>
        </Series>
    </PlotArea>
</telerik:RadHtmlChart>
````

2. Implement the `onChartLoad` function to enhance the accessibility of the donut slices.

````JavaScript
function onChartLoad(sender) {
    let kendoChart = sender.get_kendoWidget();

    function wireSlices() {
        let data = kendoChart.options.series[0].data || [];
        let slices = getDonutSlicePaths(kendoChart);

        slices.each(function (index, el) {
            let item = data[index];

            el.setAttribute("tabindex", "0"); // Make the slice focusable
            el.setAttribute("role", "button"); // Add ARIA role
            el.setAttribute("data-point-index", index); // Associate slice with data point

            el.onkeydown = function (evt) {
                if (evt.key === "Enter" || evt.key === " " || evt.key === "Spacebar") {
                    evt.preventDefault();

                    // Toggle explode state on Enter or Space key press
                    item.explode = !item.explode;
                    kendoChart.refresh();
                }
            };
        });
    }

    wireSlices();
    kendoChart.unbind("render", wireSlices);
    kendoChart.bind("render", wireSlices);
}

function getDonutSlicePaths(chart) {
    let dataCount = (chart.options.series?.[0]?.data || []).length;
    let candidates = chart.element
        .find("svg path[fill]:not([fill='none']):not([fill^='url('])")
        .filter(function () {
            let d = this.getAttribute("d") || "";

            // Donut sectors are curved paths (contain cubic curve command "C"), Legend rectangles / label boxes do not.
            let isCurved = d.indexOf(" C ") !== -1;

            // Ignore hidden highlight overlays
            let isHidden = this.style.display === "none";

            return isCurved && !isHidden;
        });

    // One solid sector path per data point
    return candidates.slice(0, dataCount);
}
````

