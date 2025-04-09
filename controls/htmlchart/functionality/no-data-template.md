---
title: No Data Template
page_title: No Data Template - RadHtmlChart
description: Learn how to use the No Data Template of the RadHtmlChart.
slug: htmlchart/functionality/no-data-template
tags: no data, template, no data template, htmlchart, chart, telerik, kendo
published: True
position: 7
---

# No Data Template

The Telerik WebForms Chart component allows to display a message when there is no data to show. This feature is particularly useful when loading data asynchronously, as it reassures users that data may appear after a delay. 

Customizing the No Data Template is simple, enabling to add styling or interactive elements like buttons to improve usability. The No Data Template can be used for all [chart types]({% slug htmlchart/chart-types/overview %}). Here's how to set up a custom message for scenarios where the chart data is unavailable.


## Example with Bar Chart

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1" Width="1000px">
    <NoDataTemplate>
        <button onclick="onClick(); return false;">Refetch</button>
    </NoDataTemplate>
    <PlotArea>
        <Series>
            <telerik:ColumnSeries DataFieldY="nuclear" Name="Nuclear" />
            <telerik:ColumnSeries DataFieldY="hydro" Name="Hydro" />
            <telerik:ColumnSeries DataFieldY="wind" Name="Wind" />
        </Series>
    </PlotArea>
</telerik:RadHtmlChart>
````

````JavaScript
function onClick() {
    let chart = $find("<%= RadHtmlChart1.ClientID %>").get_kendoWidget();
    let dataSource = [{
            "country": "Spain",
            "year": "2024",
            "unit": "GWh",
            "solar": 2578,
            "hydro": 26112,
            "wind": 32203,
            "nuclear": 58973
        }, {
            "country": "Spain",
            "year": "2023",
            "unit": "GWh",
            "solar": 508,
            "hydro": 30522,
            "wind": 27568,
            "nuclear": 55103
        }, {
            "country": "Spain",
            "year": "2022",
            "unit": "GWh",
            "solar": 119,
            "hydro": 29831,
            "wind": 23297,
            "nuclear": 60126
        }, {
            "country": "Spain",
            "year": "2021",
            "unit": "GWh",
            "solar": 41,
            "hydro": 23025,
            "wind": 21176,
            "nuclear": 57539
        }, {
            "country": "Spain",
            "year": "2020",
            "unit": "GWh",
            "solar": 56,
            "hydro": 34439,
            "wind": 15700,
            "nuclear": 63606
        }, {
            "country": "Spain",
            "year": "2019",
            "unit": "GWh",
            "solar": 41,
            "hydro": 43897,
            "wind": 12075,
            "nuclear": 61875
        }, {
            "country": "Spain",
            "year": "2018",
            "unit": "GWh",
            "solar": 30,
            "hydro": 26270,
            "wind": 9342,
            "nuclear": 63016
        }, {
            "country": "Spain",
            "year": "2017",
            "unit": "GWh",
            "solar": 24,
            "hydro": 43864,
            "wind": 6759,
            "nuclear": 63708
        }, {
            "country": "Spain",
            "year": "2016",
            "unit": "GWh",
            "solar": 18,
            "hydro": 31807,
            "wind": 4727,
            "nuclear": 62206
        }];

    chart.setDataSource(dataSource);
}
````
