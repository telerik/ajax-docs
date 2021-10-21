---
title: Pie Chart Labels are Cut Off or Truncated
description: Pie Chart Labels are Cut Off or Truncated - RadHtmlChart. Check it now!
type: how-to
page_title: Pie Chart Labels are Cut Off or Truncated
slug: chart-pie-chart-labels-are-cut-off-or-truncated
res_type: kb
---


#### PROBLEM

Pie chart labels of RadHtmlChart are truncated or cut off, so they are not fully visible. Happens more often when label text is long.

#### DESCRIPTION

By default, the pie chart label holds the value of the segment only and it is usually short enough to not cause issues.

Also, RadHtmlChart does not adjust size based on the label size.

#### SOLUTIONS

There are various approaches you can take to improve the appearance of the chart. For example, you can use one or more of the following:

- Move the long content to a tooltip instead of to the label.
- Truncate the label: [https://docs.telerik.com/devtools/aspnet-ajax/knowledge-base/htmlchart-truncate-labels]({%slug htmlchart-truncate-labels%}).
- Split the labels into several lines: [http://demos.telerik.com/aspnet-ajax/htmlchart/examples/functionality/multiline-labels/defaultcs.aspx](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/functionality/multiline-labels/defaultcs.aspx).
- Change the LabelsAppearance.Position property to, for example, InsideEnd to provide more room for the label.
- Set a [padding for the series](https://docs.telerik.com/kendo-ui/api/javascript/dataviz/ui/chart#configuration-series.padding) that results in the desired appearance. For example:  
    ````ASP.NET
    var radHtmlChartObject = $find("<%=PieChart1.ClientID %>"); //the standard script control object
    var kendoChart = radHtmlChartObject.get_kendoWidget(); //the Kendo widget
    kendoChart.options.series[0].padding = 100;
    kendoChart.refresh();
    ````
- Add Margin to the plot area to add some space to the SVG element. For example:  

```ASP.NET
<PlotArea>
    <Appearance>
        <TextStyle Margin="0 90 0 0" />
    </Appearance>
````

    







