---
title: The Wizard Data Tab
page_title: The Wizard Data Tab - RadChart
description: Check our Web Forms article about The Wizard Data Tab.
slug: chart/understanding-radchart-ui/the-wizard-data-tab
tags: the,wizard,data,tab
published: True
position: 4
---

# The Wizard Data Tab

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

The **Data** tab brings together the Series, Series Item, Axis labels and data binding to a single screen. Here you can add data points to your chart manually or by binding to data sources.

![RadChart Wizard Data Tab](images/radchart-understandingwizard002.png)

The **Data** tab is composed of areas:

## Choose Data Source

**Choose Data Source** appears on the upper left hand portion of the screen. Select from an existing data source or select "new data source" from the drop down list. If you have an existing data source selected, click the **Edit** button to reconfigure the data source in the **Configure Data Source Wizard**.

## Group Column

**Group Column** appears on the upper right side. Select a column name from a bound data source to group by that column data.

## Series

Use the **Series** area of the tab to add, delete and reorder chart series elements using the list box provided. Use the plus and minus buttons to add or delete a series element. Use the up and down arrows to move a series element up or down in the list. For each selected series element in the list box you can provide a name and select from the [list of chart types]({%slug chart/understanding-radchart-types/radchart-types-overview%}).

If you bind to a data source the **Databind Series Elements** portion will be enabled and allow you to choose column names for your labels and values from the drop down lists provided. When you bind to a data source the **Series** list box will be populated automatically with a series for each numeric column in the data source. If you need to fine tune the behavior or appearance of a series in more depth than the **Data** tab provides, use the RadChart [Series]({%slug chart/understanding-radchart-elements/series-overview%}) property in the property window. In the example below the **Labels** for the series have been bound to a column "TenMostExpensiveProducts", which contains product descriptions. These descriptions display to the right next to each bar in the chart. Note that [SeriesOrientation]({%slug chart/understanding-radchart-elements/background-and-plot-areas%}) is Horizontal, so the X-Axis is on the left.

![Labeling Series Elements](images/radchart-ui002.png)

## Series Items

For each series you select in the **Series** area list, you can add, edit, delete and reorder entries in the **Series Items** list. Use the plus and minus buttons to add and delete series items. Use the up and down arrows to move series items up or down in the list. For each item you can set the **Name**, **Label** and **X** and **Y** Values. X2 and Y2 values are enabled for [Gantt]({%slug chart/understanding-radchart-types/gantt-charts%}) and [Bubble]({%slug chart/understanding-radchart-types/bubble-charts%}) chart types. If you need to refine the behavior or appearance in more detail than provided by this Wizard page, use the Items collection of the RadChart [Series]({%slug chart/understanding-radchart-elements/series-overview%}) from the Property window.

## Axis Labels

This section lets you choose between binding to a column in the data source and using the column data to populate the labels along an Axis. Click the **Add Labels Manually** link to navigate to the [Axis tab]({%slug chart/understanding-radchart-ui/the-wizard-axis-tab%}). The screen shot below shows the X-Axis labels set data bound to a column "TenMostExpensiveProducts" that contains product descriptions. Note that [SeriesOrientation]({%slug chart/understanding-radchart-elements/background-and-plot-areas%}) is Horizontal, so the X-Axis items show on the left.

![Axis Labels](images/radchart-ui001.png)
