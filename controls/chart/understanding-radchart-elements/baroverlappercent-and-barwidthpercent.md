---
title: BarOverLapPercent and BarWidthPercent
page_title: BarOverLapPercent and BarWidthPercent | RadChart for ASP.NET AJAX Documentation
description: BarOverLapPercent and BarWidthPercent
slug: chart/understanding-radchart-elements/baroverlappercent-and-barwidthpercent
tags: baroverlappercent,and,barwidthpercent
published: True
position: 13
---

# BarOverLapPercent and BarWidthPercent



>caution  **RadChart** has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering **RadChart** for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for **RadChart** is discontinued as of **Q3 2014** , but the control will remain in the assembly so it can still be used.	We encourage you to use **RadHtmlChart** for new development.
>


## 

In bar charts with multiple series BarOverLapPercent governs to what degree the bars will overlap the preceding bar series. If you enter a negative value for BarOverLapPercent**,** a gap appears between the bars of different series. Overlapping is especially useful when a long series of items needs to fit in a small-size chart.

BarWidthPercent controls how much space each bar takes up so that a BarWidthPercent of 100 will have all the bars in the chart taking exactly all the available width.

>note The maximum bar width is calculated as follows: *bar width* = *axislength* / *bars*  *count* .
>


See the examples below to see how these two properties work together.


>caption 

![](images/radchart-understandingelements021.png)


>caption 

![](images/radchart-understandingelements022.png)
>caption 

![](images/radchart-understandingelements023.png)
>caption 

![](images/radchart-understandingelements024.png)
