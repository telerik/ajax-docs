---
title: Cross disappears on hover
description: Cross disappears on hover. Check it now!
type: how-to
page_title: Cross disappears on hover
slug: htmlchart-cross-disappears-on-hover
res_type: kb
---


## Problem

when I mouse over the cross marker, it turns white. Since the background is white, it effectively disappears.

## Solution

There are three solutions:

#### Option 1

Change the marker type to a different mode that is better visible (Circle, Square, Triangle) because it is also filled with a color unlike the Cross marker that only has a white border.
    
```ASP.NET
<telerik:LineSeries>
    <MarkersAppearance MarkersType="Circle"/>
```

#### Option 2

Change the background color of the plot area to a contrasting color.
    
```ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1">
    <PlotArea>
        <Appearance FillStyle-BackgroundColor="LightGray"></Appearance>
```

#### Option 3

Change the settings of the default [highlight visual](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart/configuration/series.highlight#series.highlight.visual).
    
```ASP.NET
<telerik:RadHtmlChart runat="server" ID="RadHtmlChart1">
    <ClientEvents OnLoad="OnLoad" />
    <PlotArea>
        <Series>
            <telerik:LineSeries Name="Baseline %">
                <LabelsAppearance Visible="false" />
                <MarkersAppearance BackgroundColor="#538ebb" BorderColor="#538ebb" MarkersType="Cross" Size="12" BorderWidth="2" />
                <LineAppearance Width="0" />
                <TooltipsAppearance DataFormatString="Baseline: {0:0}%" Color="#ffffff" />
                <Appearance FillStyle-BackgroundColor="#538ebb" />
                <SeriesItems>
                    <telerik:CategorySeriesItem Y="1" />
                    <telerik:CategorySeriesItem Y="2" />
                    <telerik:CategorySeriesItem Y="3" />
                </SeriesItems>
            </telerik:LineSeries>
        </Series>
    </PlotArea>
</telerik:RadHtmlChart>
<script>
    function myHoverVisual(e) {
        var defaultVisual = e.createVisual();
        defaultVisual.options.stroke.color = "#538ebb";
        //defaultVisual.options.fill.color = "#538ebb"; //could be used for filled shapes like square, triangle, circle
        return defaultVisual;
    }
 
    function OnLoad(sender, args) {
        var kChart = sender.get_kendoWidget();
        var opts = kChart.options;
        opts.series[0].highlight = {};
        opts.series[0].highlight.visual = myHoverVisual;
        kChart.setOptions(opts);
    }
</script>
```



