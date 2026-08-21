---
title: Margins
page_title: Margins - RadChart
description: Check our Web Forms article about Margins.
slug: chart/understanding-radchart-elements/margins
components: ["chart"]
tags: margins
published: True
position: 6
---

# Margins

>caution **RadChart** has been deprecated since Q3 2014 and is marked as obsolete as of the 2026 Q2 SP1 (v2026.2.708) release. This is the last release that includes the RadChart component — its source code will be removed from the assembly in the next release. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

Chart margins are the distances from the outermost chart borders to the borders of the plot area.

![Chart Margins](images/radchart-understandingelements012.png)

Margins are expressed in the RadChart PlotArea.Dimensions.Margins property and are specified in pixels or percentages. Percentages refer to a percentage of the RadChart width. In the figure below the dimensions are populated with some values in percentages, some in fixed pixels.

![PlotArea Dimensions](images/radchart-understandingelements013.png)

>tip To provide extra space for positioning legends, labels and title, use greater margin values for the PlotArea to provide room.


