---
title: Bubble Charts
page_title: Bubble Charts | RadChart for ASP.NET AJAX Documentation
description: Bubble Charts
slug: chart/understanding-radchart-types/bubble-charts
tags: bubble,charts
published: True
position: 8
---

# Bubble Charts

>caution  **RadChart** has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering **RadChart** for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for **RadChart** is discontinued as of **Q3 2014** , but the control will remain in the assembly so it can still be used.	We encourage you to use **RadHtmlChart** for new development.

The Bubble chart is an extension of the Point chart but each point can be a circle or oval of any size or dimension. Instead of using just the XValue and YValue, the Bubble chart uses XValue/XValue2, and YValue/YValue2 pairs to define the dimensions of each bubble. Bubble charts are commonly used to display financial information where the size of the bubble can be proportionate to the data values.

>tip To change the size of all bubbles in a series, but to not distort the dimensions of the bubble, assign the Series.Appearance.BubbleSize property.

To create a vertical Bubble Chart set the SeriesOrientation property to **Vertical**. Set the RadChartDefaultType property or ChartSeries.Type **Bubble**. Add one or more chart series to the Series collection. Add one or more chart items to the series **Items** collection. Populate numeric values for XValue, XValue2, YValue and YValue2 properties of each chart series item.

![Vertical Bubble Chart](images/radchartelements24.png)

To create a horizontal Bubble Chart set the SeriesOrientation property to **Horizontal**. Set the RadChart DefaultType property or ChartSeries.Type **Bubble**. Add one or more chart series to the Series collection. Add one or more chart items to the series Items collection. Populate numeric values for XValue, XValue2, YValue and YValue2 properties of each chart series item.

![Horizontal Bubble Chart](images/radchartelements25.png)
