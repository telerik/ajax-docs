---
title: Implementing a Scrollable Legend for RadHtmlChart in ASP.NET AJAX
description: This article demonstrates how to create a custom, scrollable legend for RadHtmlChart when handling large amounts of data.
type: how-to
page_title: How to Create a Scrollable Legend for RadHtmlChart in ASP.NET AJAX Without KendoUI
slug: htmlchart-create-scrollable-legend
tags: radhtmlchart, asp.net ajax, legend, scrollable, custom legend
res_type: kb
ticketid: 1682206
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

When dealing with large amounts of data in RadHtmlChart, the chart and its legend may disappear or become unmanageable. Additionally, there's a need to have a legend with a scrollbar at the bottom without relying on external libraries like KendoUI. This knowledge base article also answers the following questions:

- How can I make a legend with a scrollbar for RadHtmlChart?
- How to manage large data sets in RadHtmlChart without losing the chart or the legend?
- How to implement a custom legend for RadHtmlChart that is scrollable?

## Solution
To create a custom, scrollable legend for RadHtmlChart, follow the steps below:

1. Ensure your RadHtmlChart is properly configured in your ASPX page. The legend visibility in the chart settings must be set to `false` since we are implementing an external legend.

2. Include a `div` element in your HTML markup where the custom legend will be rendered. This div will be made scrollable through CSS.

3. Implement JavaScript logic to dynamically create the legend based on the chart data. This includes creating legend items for each series item in the chart, handling hover effects to highlight corresponding chart segments, and toggling series visibility upon clicking a legend item.

4. Style the legend container to be scrollable and adjust the styling of legend items to match your design requirements.

Here is an example implementation:

````HTML
<div id="legend"></div>

<telerik:RadHtmlChart runat="server" ID="PieChart1" Width="800" Height="500" Transitions="true" Skin="Silk">
    <ChartTitle Text="Browser Usage for October 2021">
        <Appearance Align="Center" Position="Top">
        </Appearance>
    </ChartTitle>
    <Legend>
        <Appearance Position="Right" Visible="false">
        </Appearance>
    </Legend>
    <PlotArea>
        <Series>
            <telerik:PieSeries StartAngle="90">
                <LabelsAppearance Position="OutsideEnd" DataFormatString="{0} %">
                </LabelsAppearance>
                <TooltipsAppearance Color="White" DataFormatString="{0} %"></TooltipsAppearance>
                <SeriesItems>
                    <telerik:PieSeriesItem BackgroundColor="#999999" Exploded="false" Name="Chrome" Y="64.67"></telerik:PieSeriesItem>
                    <telerik:PieSeriesItem BackgroundColor="#666666" Exploded="false" Name="Internet Explorer" Y="0.61"></telerik:PieSeriesItem>
                    <telerik:PieSeriesItem BackgroundColor="#ff9900" Exploded="true" Name="Safari" Y="19.06"></telerik:PieSeriesItem>
                    <telerik:PieSeriesItem BackgroundColor="#cccccc" Exploded="false" Name="Firefox" Y="3.66"></telerik:PieSeriesItem>
                    <telerik:PieSeriesItem BackgroundColor="#555555" Exploded="false" Name="Opera" Y="2.36"></telerik:PieSeriesItem>
                    <telerik:PieSeriesItem BackgroundColor="#333333" Exploded="false" Name="Samsung Internet" Y="2.81"></telerik:PieSeriesItem>
                    <telerik:PieSeriesItem BackgroundColor="#222222" Exploded="false" Name="Edge" Y="3.11"></telerik:PieSeriesItem>
                    <telerik:PieSeriesItem BackgroundColor="#111111" Exploded="false" Name="Others" Y="3.34"></telerik:PieSeriesItem>
                </SeriesItems>
            </telerik:PieSeries>
        </Series>
    </PlotArea>
</telerik:RadHtmlChart>
````

````JavaScript
function pageLoadHandler() {
    let kendoChart = $find("<%= PieChart1.ClientID %>").get_kendoWidget();
    let series = kendoChart.options.series[0].data; // Assuming it's a Pie Chart
    let legendContainer = document.getElementById("legend");

    // Clear previous legends
    legendContainer.innerHTML = "";

    // Create legend items dynamically
    series.forEach((item, index) => {
        let legendItem = document.createElement("div");
        legendItem.className = "legend-item";

        let marker = document.createElement("span");
        marker.className = "legend-marker";
        marker.style.background = item.color;

        let label = document.createElement("span");
        label.textContent = item.category;

        legendItem.appendChild(marker);
        legendItem.appendChild(label);
        legendContainer.appendChild(legendItem);

        // Hover effect
        legendItem.addEventListener("mouseenter", function () {
            kendoChart.toggleHighlight(index, true);
        });

        legendItem.addEventListener("mouseleave", function () {
            kendoChart.toggleHighlight(index, false);
        });

        // Click event to toggle visibility
        legendItem.addEventListener("click", function () {
            let isVisible = kendoChart.options.series[0].data[index].visible !== false;

            kendoChart.options.series[0].data[index].visible = !isVisible;
            marker.style.background = isVisible ? "grey" : item.color;
            kendoChart.refresh();
        });
    });
}

Sys.Application.add_load(pageLoadHandler);
````

````CSS
#legend {
    display: flex;
    width: 300px;
    overflow-x: scroll; /* Make it scrollable */
}

.legend-item {
    font: 12px sans-serif;
    margin: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.legend-marker {
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 5px;
    border-radius: 50%;
}
````

This solution provides a way to manage large data sets in RadHtmlChart by implementing a custom, scrollable legend without the need for KendoUI.

## See Also

- [RadHtmlChart Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/htmlchart/overview)
- [Creating Custom HTML Elements with JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
- [Managing Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
