---
title: How to Set Dimensions (Width and Height) to RadHtmlChart Tooltips
description: How to Set Dimensions (Width and Height) to RadHtmlChart Tooltips. Check it now!
type: how-to
page_title: How to Set Dimensions (Width and Height) to RadHtmlChart Tooltips
slug: htmlchart-how-to-set-tooltip-dimensions
res_type: kb
---


## HOW TO

I this article you will understand how to set width and height of the tooltips in RadHtmlChart.

## SOLUTION

The dimensions of the tooltips are controlled by their content, because they are `<div>` elements with `position:absolute`. Here is a basic example of how this operates:

```HTML
<div style="border: 2px solid red; position: absolute; top: 10px; left: 10px; background: yellow; z-index: 2">
    <div style="background: blue; width: 500px; height: 200px;">content</div>
</div>
```

To apply this to RadHtmlChart, use a template that provides the desired dimensions. Here is a small example:

```ASP.NET
<telerik:RadHtmlChart runat="server" ID="rhc1" Width="500px" Height="300px">
    <PlotArea>
        <Series>
            <telerik:AreaSeries>
                <TooltipsAppearance>
                    <ClientTemplate>
                         <div style="width: 300px; height: 100px;">tooltip contents for the item with value: #= value #</div>
                    </ClientTemplate>
                </TooltipsAppearance>
                <SeriesItems>
                    <telerik:CategorySeriesItem Y="1" />
                    <telerik:CategorySeriesItem Y="2" />
                    <telerik:CategorySeriesItem Y="3" />
                    <telerik:CategorySeriesItem Y="4" />
                </SeriesItems>
            </telerik:AreaSeries>
        </Series>
    </PlotArea>
</telerik:RadHtmlChart>
```




