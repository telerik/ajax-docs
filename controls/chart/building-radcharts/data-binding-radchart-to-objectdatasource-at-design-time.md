---
title: Data Binding RadChart to ObjectDataSource at Design-Time
page_title: Data Binding RadChart to ObjectDataSource at Design-Time | RadChart for ASP.NET AJAX Documentation
description: Data Binding RadChart to ObjectDataSource at Design-Time
slug: chart/building-radcharts/data-binding-radchart-to-objectdatasource-at-design-time
tags: data,binding,radchart,to,objectdatasource,at,design-time
published: True
position: 14
---

# Data Binding RadChart to ObjectDataSource at Design-Time

>caution  **RadChart** has been replaced by [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component. If you are considering **RadChart** for new development, examine the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and [online demos](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx) first to see if it will fit your development needs. If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles: [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%}), [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%}), [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%}), [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%}), [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%}). Support for **RadChart** is discontinued as of **Q3 2014**, but the control will remain in the assembly so it can still be used. We encourage you to use **RadHtmlChart** for new development.

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
