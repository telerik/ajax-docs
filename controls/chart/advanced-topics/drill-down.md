---
title: Drill-Down
page_title: Drill-Down | RadChart for ASP.NET AJAX Documentation
description: Drill-Down
slug: chart/advanced-topics/drill-down
tags: drill-down
published: True
position: 1
---

# Drill-Down

>caution  **RadChart** has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering **RadChart** for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for **RadChart** is discontinued as of **Q3 2014** , but the control will remain in the assembly so it can still be used.	We encourage you to use **RadHtmlChart** for new development.

The drill-down is a specialized [Image Map]({%slug chart/advanced-topics/image-maps%}) where the clicked area of the chart navigates to a view with greater detail. For example, the user may click on a series in the legend or a chart series item to reveal another chart with an expanded view of that series or series item. Drill downs are implemented using the ActiveRegion property (see [Image Map]({%slug chart/advanced-topics/image-maps%}) for more information on ActiveRegion).

In a simple drill-down example the chart series item for one area of a pie chart can be clicked on to navigate to another page in the project. The example has two pages, default.aspx and InternetSalesDetail.aspx.On Default.aspx a Pie chart displays percentage of sales for Wholesale, Retail and Internet divisions of a fictitious company.

![Defining the ActiveRegion](images/radchart-advancedimagemap002.png)

Clicking on the Wholesale slice of the pie navigates to the InternetSalesDetail.aspx page.

![Using the drill down](images/radchart-advancedimagemap003.png)

>note In a more complex scenarios you will need to communicate between pages using query strings, Session variables or by filtering database data. Use a Click event handler for the chart or a Click event handler of a specific ActiveRegion to setup the data selection for the detail web page before navigating to it.

# See Also

 * [Image Maps]({%slug chart/advanced-topics/image-maps%})
