---
title: Margins
page_title: Margins | RadChart for ASP.NET AJAX Documentation
description: Margins
slug: chart/understanding-radchart-elements/margins
tags: margins
published: True
position: 6
---

# Margins



>caution  **RadChart** has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering **RadChart** for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for **RadChart** is discontinued as of **Q3 2014** , but the control will remain in the assembly so it can still be used.	We encourage you to use **RadHtmlChart** for new development.
>


## 

Chart margins are the distances from the outermost chart borders to the borders of the plot area.
>caption 

![Chart Margins](images/radchart-understandingelements012.png)



Margins are expressed in the RadChart PlotArea.Dimensions.Margins property and are specified in pixels or percentages. Percentages refer to a percentage of the RadChart width. In the figure below the dimensions are populated with some values in percentages, some in fixed pixels.
>caption 

![PlotArea Dimensions](images/radchart-understandingelements013.png)

>tip To provide extra space for positioning legends, labels and title, use greater margin values for the PlotArea to provide room.
>





