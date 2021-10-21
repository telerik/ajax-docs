---
title: Series Labels Color is not Transparent
description: Series Labels Color is not Transparent. Check it now!
type: how-to
page_title: Series Labels Color is not Transparent
slug: htmlchart-series-labels-color-is-not-transparent
res_type: kb
---


**PROBLEM**

Background color of RadHtmlChart series labels is no longer transparent, but takes the color of the series item.

**SOLUTION**

To get transparent colors back, you can change the chart options via the [underlying Kendo Chart Widget API](http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart) (see also [individual series label](http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart#configuration-series.labels.background) and [default label](http://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart#configuration-seriesDefaults.labels.background)). 

```ASP.NET
<script>
    function OnLoad(sender) {
        var kChart = sender.get_kendoWidget();
        var kChartOptions = kChart.options;
        kChartOptions.seriesDefaults.labels.background = "transparent";
        kChart.setOptions(kChartOptions);
        kChart.redraw();
    }
</script>
<telerik:RadHtmlChart runat="server" ID="rhc1">
    <ClientEvents OnLoad="OnLoad" />
    <PlotArea>
        <Series>
            <telerik:DonutSeries>
                <Items>
                    <telerik:SeriesItem  YValue="1" Name="first"/>
                    <telerik:SeriesItem  YValue="2" Name="second"/>
                </Items>
            </telerik:DonutSeries>
        </Series>
    </PlotArea>
</telerik:RadHtmlChart>
```








