---
title: BarOverLapPercent and BarWidthPercent
page_title: BarOverLapPercent and BarWidthPercent - RadChart
description: Check our Web Forms article about BarOverLapPercent and BarWidthPercent.
slug: chart/understanding-radchart-elements/baroverlappercent-and-barwidthpercent
tags: baroverlappercent,and,barwidthpercent
published: True
position: 13
---

# BarOverLapPercent and BarWidthPercent

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

In bar charts with multiple series BarOverLapPercent governs to what degree the bars will overlap the preceding bar series. If you enter a negative value for **BarOverLapPercent**, a gap appears between the bars of different series. Overlapping is especially useful when a long series of items needs to fit in a small-size chart.

BarWidthPercent controls how much space each bar takes up so that a BarWidthPercent of 100 will have all the bars in the chart taking exactly all the available width.

>note The maximum bar width is calculated as follows: *bar width* = *axislength* / *bars*  *count* .

See the examples below to see how these two properties work together.

![](images/radchart-understandingelements021.png)

![](images/radchart-understandingelements022.png)

![](images/radchart-understandingelements023.png)

![](images/radchart-understandingelements024.png)
