---
title: Stacked Bar 100% Charts
page_title: Stacked Bar 100% Charts | UI for ASP.NET AJAX Documentation
description: Stacked Bar 100% Charts
slug: chart/understanding-radchart-types/stacked-bar-100%-charts
tags: stacked,bar,100%,charts
published: True
position: 3
---

# Stacked Bar 100% Charts



>caution  __RadChart__ has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering __RadChart__ for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using __RadChart__ in your projects, you can migrate to __RadHtmlChart__ by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for __RadChart__ is discontinued as of __Q3 2014__ , but the control will remain in the assembly so it can still be used.	We encourage you to use __RadHtmlChart__ for new development.
>


## 

Stacked Bar 100 charts are used when you have three or more data series and want to compare distributions within categories, and at the same time display the differences between categories. Each bar represents 100% of the amounts for that category.

To create a Vertical Stacked Bar 100 Chart set the SeriesOrientation property to __Vertical__. Set the RadChart DefaultType property or ChartSeries.Type to __StackedBar100__.
>caption 

![Vertical Stacked Bar 100 Chart](images/radchartelements5.png)

To create a Horizontal Stacked Bar Chart set the SeriesOrientation property to __Horizontal__. Set the RadChart DefaultType property or ChartSeries.Type to __StackedBar100__.
>caption 

![Horizontal Stacked 100 Chart](images/radchartelements6.png)

>tip To display the label values as percentages, change the DefaultLabelValue for each chart series from "#Y" (the numeric value for each data point) to "#%" (the percentage of each data point to the category).
>

