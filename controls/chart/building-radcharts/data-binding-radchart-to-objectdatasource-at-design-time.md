---
title: Data Binding RadChart to ObjectDataSource at Design-Time
page_title: Data Binding RadChart to ObjectDataSource at Design-Time - RadChart
description: Check our Web Forms article about Data Binding RadChart to ObjectDataSource at Design-Time.
slug: chart/building-radcharts/data-binding-radchart-to-objectdatasource-at-design-time
tags: data,binding,radchart,to,objectdatasource,at,design-time
published: True
position: 14
---

# Data Binding RadChart to ObjectDataSource at Design-Time

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

Use the Data Source Configuration Wizard to bind [ObjectDataSource](https://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx)at design time:

1. Click the RadChart [Smart Tag]({%slug chart/understanding-radchart-ui/radchart-smarttag-menu%}) "Choose Data Source" | "New Data Source".

	![Smart Tag Choose Data Source](images/radchart-building014.png)

1. From the "Choose a data source type" page of the wizard select "Object" and click "OK".

	![Choose a data source type](images/radchart-building011.png)

1. From the "Choose a Business Object" page of the wizard, select your business object from the drop down list.Click Next.

	![Choose a business object](images/radchart-building012.png)

1. On the "Define data methods" page choose the select method from the drop down list. Click Finish. A new [ObjectDataSource](https://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx) component will be visible on the page and the RadChart **DataSource** property will point to it.

	![](images/radchart-building013.png)

# See Also

 * [Data Binding RadChart to an ObjectDataSource]({%slug chart/building-radcharts/data-binding-radchart-to-an-objectdatasource%})

 * [Creating an Object that can be Consumed by ObjectDataSource]({%slug chart/building-radcharts/creating-an-object-that-can-be-consumed-by-objectdatasource%})

 * [Binding to ObjectDataSource at Run-Time]({%slug chart/building-radcharts/binding-to-objectdatasource-at-run-time%})
