---
title: Add Axis Labels Programmatically
page_title: How to Add Axis Labels Programmatically | UI for ASP.NET AJAX Documentation
description: How to Extend the Displayable Area for YAxis Data
slug: chart/how-to/add-axis-labels-programmatically
tags: how to, add, axis, label, programmatically
published: True
position: 1
---

# How to Add Axis Labels Programmatically

>caution  **RadChart** has been replaced by [RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering **RadChart** for new development, examine the [RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138) and [online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx) first to see if it will fit your development needs.	If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for **RadChart** is discontinued as of **Q3 2014** , but the control will remain in the assembly so it can still be used.	We encourage you to use **RadHtmlChart** for new development.

To add labels along an Axis programmatically:


* Set AutoScale to false.


* Add a range of items to the axis.


* Populate the Items.

![axis items added](images/radchart-howto004.png)


````C#
radChart.PlotArea.XAxis.AutoScale = false;
radChart.PlotArea.XAxis.AddRange(1, 7, 1); 
radChart.PlotArea.XAxis[0].TextBlock.Text = "Mon";
radChart.PlotArea.XAxis[1].TextBlock.Text = "Tue";
radChart.PlotArea.XAxis[2].TextBlock.Text = "Wed";
radChart.PlotArea.XAxis[3].TextBlock.Text = "Thu";
radChart.PlotArea.XAxis[4].TextBlock.Text = "Fri";
radChart.PlotArea.XAxis[5].TextBlock.Text = "Sat";
radChart.PlotArea.XAxis[6].TextBlock.Text = "Sun";
````
````VB
radChart.PlotArea.XAxis.AutoScale = False
radChart.PlotArea.XAxis.AddRange(1, 7, 1)
radChart.PlotArea.XAxis(0).TextBlock.Text = "Mon"
radChart.PlotArea.XAxis(1).TextBlock.Text = "Tue"
radChart.PlotArea.XAxis(2).TextBlock.Text = "Wed"
radChart.PlotArea.XAxis(3).TextBlock.Text = "Thu"
radChart.PlotArea.XAxis(4).TextBlock.Text = "Fri"
radChart.PlotArea.XAxis(5).TextBlock.Text = "Sat"
radChart.PlotArea.XAxis(6).TextBlock.Text = "Sun"
````

