---
title: Using Client Templates in Legend and Axes Labels
page_title: ClientTemplate Overview | RadHtmlChart for ASP.NET AJAX Documentation
description: ClientTemplate Overview
slug: htmlchart/functionality/clienttemplate/using-client-templates-legend-axes
tags: client-templates, templates, client, kendo, axes, labels, legend, custom
published: True
position: 1
---

# Using Client Templates in Legend and Axes Labels

This article discusses the client templates for **Legend** items and **Axes** labels exposed in **RadHtmlChart**.

The client-side templates for **Legend** and **Axes** are available as of **Q2 2016**.

## Client Templates for Legend Items

The client template for the **Legend** items can be controlled by using the `ClientTemplate` property, exposed in the `LabelsAppearance` (**Example 1**). 

The values that can be resolved and used in the client templates are (more details in Kendo documentation—[legend.labels.template](http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart#configuration-legend.labels.template)):

* `text` - the text the legend item.
* `series` - the data series.
* `value` - the point value. (only for donut and pie charts)
* `percentage` - the point value represented as a percentage value. Available only for donut, pie and 100% stacked charts.

>caption Figure 1: Result from the code in **Example 1**.

![](images/legent-client-template.png)

>caption Example 1: Using client templates for the **Legend** items.

````ASP.NET
<telerik:RadHtmlChart runat="server" ID="BarChart1" Width="500px" Height="300px">
    <PlotArea>
        <Series>
            <telerik:BarSeries Name="Product A">
                <SeriesItems>
                    <telerik:CategorySeriesItem Y="315000" />
                    <telerik:CategorySeriesItem Y="495000" />
                    <telerik:CategorySeriesItem Y="690000" />
                </SeriesItems>
            </telerik:BarSeries>
            <telerik:BarSeries Name="Product B">
                <SeriesItems>
                    <telerik:CategorySeriesItem Y="360000" />
                    <telerik:CategorySeriesItem Y="540000" />
                    <telerik:CategorySeriesItem Y="735000" />
                </SeriesItems>
            </telerik:BarSeries>
        </Series>
    </PlotArea>
    <Legend>
        <Appearance Position="Bottom" >
            <ClientTemplate>
                #= text # 
                # var values = []#
                # for (var i = 0; i < series.data.length; i++) {  
                   values.push(series.data[i].value);
                 } #
                \n
                Max: #= Math.max(...values) #
            </ClientTemplate>
        </Appearance>
    </Legend>
</telerik:RadHtmlChart>
````

## Client Templates for Axes Labels

## See Also

* [Kedno Chart API: legend.labels.template](http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart#configuration-legend.labels.template)