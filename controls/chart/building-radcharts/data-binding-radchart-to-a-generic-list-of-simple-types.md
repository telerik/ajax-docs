---
title: Data Binding RadChart to a Generic List of Simple Types
page_title: Data Binding RadChart to a Generic List of Simple Types | RadChart for ASP.NET AJAX Documentation
description: Data Binding RadChart to a Generic List of Simple Types
slug: chart/building-radcharts/data-binding-radchart-to-a-generic-list-of-simple-types
tags: data,binding,radchart,to,a,generic,list,of,simple,types
published: True
position: 9
---

# Data Binding RadChart to a Generic List of Simple Types

>caution  **RadChart** has been replaced by [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component. If you are considering **RadChart** for new development, examine the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and [online demos](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx) first to see if it will fit your development needs. If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles: [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%}), [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%}), [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%}), [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%}), [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%}). Support for **RadChart** is discontinued as of **Q3 2014**, but the control will remain in the assembly so it can still be used. We encourage you to use **RadHtmlChart** for new development.

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
