---
title: Drill-Down
page_title: Drill-Down - RadChart
description: Check our Web Forms article about Drill-Down.
slug: chart/advanced-topics/drill-down
tags: drill-down
published: True
position: 1
---

# Drill-Down

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

The drill-down is a specialized [Image Map]({%slug chart/advanced-topics/image-maps%}) where the clicked area of the chart navigates to a view with greater detail. For example, the user may click on a series in the legend or a chart series item to reveal another chart with an expanded view of that series or series item. Drill downs are implemented using the ActiveRegion property (see [Image Map]({%slug chart/advanced-topics/image-maps%}) for more information on ActiveRegion).

In a simple drill-down example the chart series item for one area of a pie chart can be clicked on to navigate to another page in the project. The example has two pages, default.aspx and InternetSalesDetail.aspx.On Default.aspx a Pie chart displays percentage of sales for Wholesale, Retail and Internet divisions of a fictitious company.

![Defining the ActiveRegion](images/radchart-advancedimagemap002.png)

Clicking on the Wholesale slice of the pie navigates to the InternetSalesDetail.aspx page.

![Using the drill down](images/radchart-advancedimagemap003.png)

>note In a more complex scenarios you will need to communicate between pages using query strings, Session variables or by filtering database data. Use a Click event handler for the chart or a Click event handler of a specific ActiveRegion to setup the data selection for the detail web page before navigating to it.

# See Also

 * [Image Maps]({%slug chart/advanced-topics/image-maps%})
