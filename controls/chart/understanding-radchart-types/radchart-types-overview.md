---
title: RadChart Types Overview
page_title: RadChart Types Overview | UI for ASP.NET AJAX Documentation
description: RadChart Types Overview
slug: chart/understanding-radchart-types/radchart-types-overview
tags: radchart,types,overview
published: True
position: 0
---

# RadChart Types Overview



>caution  __RadChart__ has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering __RadChart__ for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using __RadChart__ in your projects, you can migrate to __RadHtmlChart__ by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for __RadChart__ is discontinued as of __Q3 2014__ , but the control will remain in the assembly so it can still be used.	We encourage you to use __RadHtmlChart__ for new development.
>


## 

There are 17 chart types:




>caption  

|  __Chart Type__  |  |  __Description__  |  __When to use__  |
| ------ | ------ | ------ | ------ |
|[Bar]({%slug chart/understanding-radchart-types/bar-charts%})|
>caption 

![
         
      ](images/radchartelements1_thumb.png)|Bar charts graphically display values in vertical and horizontal bars across categories.|Bar charts are useful for comparing multiple series of data(i.e. providing snapshots of data at particular points in time).|
|[Stacked Bar]({%slug chart/understanding-radchart-types/stacked-bar-charts%})|
>caption 

![
         
      ](images/radchartelements3_thumb.png)|Stacked Bar charts are used to compare contributions of values to a total across categories|Use the Stacked Bar chart when you need visibility to the combined values for each category.|
|[Stacked Bar 100%]({%slug chart/understanding-radchart-types/stacked-bar-100%-charts%})|
>caption 

![
         
      ](images/radchartelements5_thumb.png)|Stacked Bar 100% shows the combined contribution of values as percentages where the combined total for each category is 100 percent.|Use when the relationship between values in a category is more significant than the amounts.|
|[Pie]({%slug chart/understanding-radchart-types/pie-charts%})|
>caption 

![
         
      ](images/radchartelements16_thumb.png)|The Pie chart shows slices representing fractional parts of a whole.|When you need to display the contribution of fractional parts to a whole.|
|[Gantt]({%slug chart/understanding-radchart-types/gantt-charts%})|
>caption 

![
         
      ](images/radchartelements17_thumb.png)|Gantt charts, also known as Time charts, display separate events as bars along a time scale.|These charts are often used for project/time planning, where data can be plotted using a date-time scale or other numeric scale.|
|[Bezier]({%slug chart/understanding-radchart-types/bezier-charts%})|
>caption 

![
         
      ](images/radchartelements18_thumb.png)|The Bezier chart displays a series of points on a curved line.Two "control points" determine the position and amount of curvature in the line between end points|The Bezier chart is often used for data modelling by taking a limited number of data points and interpolating or estimating the intervening values.|
|[Spline]({%slug chart/understanding-radchart-types/spline-charts%})|
>caption 

![
         
      ](images/radchartelements22_thumb.png)|Spline charts allow you to take a limited set of known data points and approximate intervening values.|The Spline chart, like the Bezier, is often used for data modelling by taking a limited number of data points and interpolating or estimating the intervening values.|
|[Spline Area]({%slug chart/understanding-radchart-types/spline-area-charts%})|
>caption 

![
         
      ](images/radchartelements26_thumb.png)|The Spline Area chart type defines one or more spline curves and fills in the area defined by the spline.|Also can be used for data modelling in that it takes a limited number of data points and interpolates the intervening values. This chart type also emphasizes the area between the spline curve and a mid-point of the spline.|
|[Stacked Spline Area]({%slug chart/understanding-radchart-types/stacked-spline-area-charts%})|
>caption 

![
         
      ](images/radchartelements29_thumb.png)|The Stacked Spline Area chart is a variation of the Spline Area chart. The areas are stacked so that each series adjoins but does not overlap the preceding series.|Also can be used for data modelling in that it takes a limited number of data points and interpolates the intervening values. This chart type allows the entire surface area for all sequences to be displayed at one time.|
|[Stacked Spline Area 100%]({%slug chart/understanding-radchart-types/stacked-spline-area-100%-charts%})|
>caption 

![
         
      ](images/radchartelements30_thumb.png)|The Stacked Spline Area 100% chart is a variation of the Spline Area chart. The areas are stacked so that each series adjoins but does not overlap the preceding series and where the combined total for each category is 100 percent.|Also can be used for data modelling in that it takes a limited number of data points and interpolates the intervening values. This chart type allows the entire surface area for all sequences to be displayed at one time. Use this chart type when the relationship between values in a category is more significant than the amounts.|
|[Point]({%slug chart/understanding-radchart-types/point-charts%})|
>caption 

![
         
      ](images/radchartelements31_thumb.png)|Point or "Scatter" charts are used to show correlations between two sets of values.|The Point chart is often used for scientific data modeling or financial data.Typically not used used with time dependent data where a Line chart is more suited.|
|[Bubble]({%slug chart/understanding-radchart-types/bubble-charts%})|
>caption 

![
         
      ](images/radchartelements24_thumb.png)|The Bubble chart is an extension of the Point chart but each point can be a circle or oval of any size or dimension. The bubble size may be used to convey larger values.|The Bubble chart is often used for scientific data modeling or financial data.|
|[Line]({%slug chart/understanding-radchart-types/line-charts%})|
>caption 

![
         
      ](images/radchartelements33_thumb.png)|This chart type displays a set of data points connected by a line.|A common use for the line chart is to show trends over a period of time.|
|[Area]({%slug chart/understanding-radchart-types/area-charts%})|
>caption 

![
         
      ](images/radchartelements9_thumb.png)|The Area chart consists of a series of data points joined by a line and where the area below the line is filled|Area charts are appropriate for visualizing data that fluctuates over a period of time and can be useful for emphasizing trends.|
|[Stacked Area]({%slug chart/understanding-radchart-types/stacked-spline-area-charts%})|
>caption 

![
         
      ](images/radchartelements34_thumb.png)|The Stacked Area chart is a variation of the Area chart that display trends of the contribution of each value over time (or across categories). The areas are stacked so that each series adjoins but does not overlap the preceding series.|Area charts are appropriate for visualizing data that fluctuates over a period of time and where the entire area for all series data must be visible at one time.|
|[Stacked Area 100%]({%slug chart/understanding-radchart-types/stacked-area-100%-charts%})|
>caption 

![
         
      ](images/radchartelements11_thumb.png)|Stacked Areas 100% charts are a variation of Stacked Area charts that present values for trends as percentages, totaling to 100% for each category.|Use this chart type to visualize data that fluctuates over a period of time and where the relationship between values in a category is more significant than the amounts.|
|[CandleStick]({%slug chart/understanding-radchart-types/candlestick-charts%})|
>caption 

![
         
      ](images/radchartelements35_thumb.png)|The CandleStick chart combines bar and line chart styles to show a range of value movement over time. Dark colored bars show downward trends, light colored bars show upward trends and the line through the center (the "wick") shows the extreme high and low values.|Use this chart type to visualize price or currency fluctuations.Typically this chart is used to analyze stock prices or currency changes.|


