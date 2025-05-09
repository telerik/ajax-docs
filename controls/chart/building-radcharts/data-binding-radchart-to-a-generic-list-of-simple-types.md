---
title: Data Binding RadChart to a Generic List of Simple Types
page_title: Data Binding RadChart to a Generic List of Simple Types - RadChart
description: Check our Web Forms article about Data Binding RadChart to a Generic List of Simple Types.
slug: chart/building-radcharts/data-binding-radchart-to-a-generic-list-of-simple-types
tags: data,binding,radchart,to,a,generic,list,of,simple,types
published: True
position: 9
---

# Data Binding RadChart to a Generic List of Simple Types

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

The example below is the result of binding a [generic List<>](https://msdn2.microsoft.com/en-us/library/6sh2ey19.aspx) of double to the RadChartDataSource property and calling the DataBind() method.

![Binding to IList](images/radchart-building009.png)

````C#
List<double> chartData = new List<double>();
chartData.Add(34);
chartData.Add(45);
chartData.Add(56);
chartData.Add(67);
chartData.Add(78);
RadChart1.DataSource = chartData;
RadChart1.DataBind();			
````
````VB	     
Dim chartData As New List(Of Double)()
chartData.Add(34)
chartData.Add(45)
chartData.Add(56)
chartData.Add(67)
chartData.Add(78)
RadChart1.DataSource = chartDataRadChart1.DataBind()				
````

# See Also

 * [Data Binding RadChart to a Generic List]({%slug chart/building-radcharts/data-binding-radchart-to-a-generic-list%})

 * [Data Binding RadChart to a Generic List of Objects]({%slug chart/building-radcharts/data-binding-radchart-to-a-generic-list-of-objects%})
