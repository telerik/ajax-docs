---
title: Extend the Displayable Area for YAxis Data
page_title: How to Extend the Displayable Area for YAxis Data | UI for ASP.NET AJAX Documentation
description: How to Extend the Displayable Area for YAxis Data
slug: chart/how-to/extend-displayable-area-yaxis-data
tags: how to, extend, area, yaxis, data
published: True
position: 0
---

# How to Extend the Displayable Area for YAxis Data

>caution  **RadChart** has been replaced by [RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering **RadChart** for new development, examine the [RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138) and [online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx) first to see if it will fit your development needs.	If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for **RadChart** is discontinued as of **Q3 2014** , but the control will remain in the assembly so it can still be used.	We encourage you to use **RadHtmlChart** for new development.

"My data touches the upper boundary of the plot area but that makes the data harder to see. How do I extend the viewable area along the YAxis?"

Assign the YAxis AxisMode property. By default the ChartYAxisMode property value is **Normal** and the YAxis data fills the available space.

`myChart.PlotArea.YAxis.AxisMode = ChartYAxisMode.Normal;`

![normal axis](images/radchart-howto003.png)

If you set the ChartYAxisMode to **Extended**, additional area is placed above the highest data point to make the chart easier to read.

`myChart.PlotArea.YAxis.AxisMode = ChartYAxisMode.Extended;`

![extended axis](images/radchart-howto002.png)