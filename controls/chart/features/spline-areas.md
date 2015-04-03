---
title: Spline Areas
page_title: Spline Areas | UI for ASP.NET AJAX Documentation
description: Spline Areas
slug: chart/features/spline-areas
tags: spline,areas
published: True
position: 3
---

# Spline Areas



>caution  __RadChart__ has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering __RadChart__ for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using __RadChart__ in your projects, you can migrate to __RadHtmlChart__ by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for __RadChart__ is discontinued as of __Q3 2014__ , but the control will remain in the assembly so it can still be used.	We encourage you to use __RadHtmlChart__ for new development.
>


## 

The new Spline Area Charts take the Spline chart a step further.Like the Spline, the Spline Area takes a limited set of known data points and interpolates the intervening values.Then the area defined by the spline curve is filled in.You define one or more series of chart items, set the chart type to __SplineArea, SplineStackedArea or StackedSplineArea100__and RadChart does the rest.

You can see how the same data is presented using the new chart types. __SplineArea__ displays from the back to the front, starting with the first series.__StackedSplineArea__ adds each area to the next without covering previous areas. __StackedSplineArea100__ shows each area as a percentage contributing to the whole of a category.
>caption 

![Spline Area Charts](images/radchart-features005.png)
