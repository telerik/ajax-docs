---
title: Populate RadChart at Design-Time
page_title: Populate RadChart at Design-Time - RadChart
description: Check our Web Forms article about Populate RadChart at Design-Time.
slug: chart/building-radcharts/populate-radchart-at-design-time
tags: populate,radchart,at,design-time
published: True
position: 1
---

# Populate RadChart at Design-Time

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

RadChart provides two collection editors: ChartSeries Collection Editor and ChartSeriesItem Collection Editor. They allow you to easily create series and items, and set the relevant properties without writing any code. 

There are two basic steps to populate the RadChart with data:

1. Click on the RadChart Series property ellipses to display the ChartSeries Collection Editor. Here you can add or remove series in the Members list box on the left side of the editor. You can set the series level properties by selecting a series member and editing properties in the properties window located on the right hand side of the editor. See topics [Series Overview]({%slug chart/understanding-radchart-elements/series-overview%}), [Series Items]({%slug chart/understanding-radchart-elements/series-items%}) and [Series-Specific Properties]({%slug chart/understanding-radchart-elements/series-specific-properties%}) for more information. Note the Items property under the Series property category.

	![ChartSeries Collection Editor](images/radchart-building001.png)

1. Click the Items property ellipses of a series to display the ChartSeriesItem Collection Editor. Here you can add or remove items in the Members list box on the left side of the editor. Select ChartSeriesItem objects in the Members list box on the left side of the editor. You can set item properties by selecting an item member and editing properties in the properties window located on the right hand side of the editor. Set the values for each item using the properties under the "Basic value set" property category. See [Series Items]({%slug chart/understanding-radchart-elements/series-items%}) for more information.

	![ChartSeriesItem Collection Editor](images/radchart-building002.png)

The running application shows ChartSeries members in the Legend and ChartSeriesItem as bars in the plot area.

>note This chart example also displays customization in the legend and axis labels. See [Legends]({%slug chart/understanding-radchart-elements/legends%}) and [Axis Labels]({%slug chart/understanding-radchart-elements/axis-labels%}) for more information.

![Completed Chart populated at Design Time](images/radchart-building019.png)

# See Also

 * [Building RadCharts]({%slug chart/building-radcharts/building-radcharts%})

 * [Creating RadChart Declaratively]({%slug chart/building-radcharts/creating-radchart-declaratively%})

 * [Creating RadChart Programmatically]({%slug chart/building-radcharts/creating-radchart-programmatically%})
