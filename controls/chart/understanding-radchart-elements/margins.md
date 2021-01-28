---
title: Margins
page_title: Margins - RadChart
description: Check our Web Forms article about Margins.
slug: chart/understanding-radchart-elements/margins
tags: margins
published: True
position: 6
---

# Margins

>caution  **RadChart** has been replaced by [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component. If you are considering **RadChart** for new development, examine the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and [online demos](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx) first to see if it will fit your development needs. If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles: [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%}), [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%}), [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%}), [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%}), [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%}). Support for **RadChart** is discontinued as of **Q3 2014**, but the control will remain in the assembly so it can still be used. We encourage you to use **RadHtmlChart** for new development.

Chart margins are the distances from the outermost chart borders to the borders of the plot area.

![Chart Margins](images/radchart-understandingelements012.png)

Margins are expressed in the RadChart PlotArea.Dimensions.Margins property and are specified in pixels or percentages. Percentages refer to a percentage of the RadChart width. In the figure below the dimensions are populated with some values in percentages, some in fixed pixels.

![PlotArea Dimensions](images/radchart-understandingelements013.png)

>tip To provide extra space for positioning legends, labels and title, use greater margin values for the PlotArea to provide room.


