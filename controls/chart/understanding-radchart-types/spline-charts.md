---
title: Spline Charts
page_title: Spline Charts | RadChart for ASP.NET AJAX Documentation
description: Spline Charts
slug: chart/understanding-radchart-types/spline-charts
tags: spline,charts
published: True
position: 7
---

# Spline Charts



>caution  **RadChart** has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering **RadChart** for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for **RadChart** is discontinued as of **Q3 2014** , but the control will remain in the assembly so it can still be used.	We encourage you to use **RadHtmlChart** for new development.
>


## 

Spline charts allow you to take a limited set of known data points and approximate intervening values.In practice you define a series of chart items with X/Y values and RadChart does the rest.

To create a simple vertical Spline Chart set the SeriesOrientation property to **Vertical**. Set the RadChart DefaultType property or ChartSeries.Type to **Spline**. Create a series and add chart items with Y or X and Y values.


>caption 

![Vertical Spline Chart](images/radchartelements22.png)



To create a simple horizontal Spline Chart set the SeriesOrientation property to **Horizontal**. Set the RadChart DefaultType property or ChartSeries.Type to **Spline**. Create a series and add 3 or more chart items with X and Y values.




>caption  

|  **YValue**  |  **XValue**  |
| ------ | ------ |
|20|50|
|50|-10|
|70|100|
|80|50|


>caption 

![Horizontal Spline Chart](images/radchartelements23.png)

Another example showing the same Y data points as above, but with no X values defined displays an automatic even progression over the X axis.




>caption  

|  **YValue**  |
| ------ |
|20|
|50|
|70|
|80|


>caption 

![Spline chart with only Y values defined](images/radchartelements28.png)
