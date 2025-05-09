---
title: Data Binding RadChart to an ObjectDataSource
page_title: Data Binding RadChart to an ObjectDataSource - RadChart
description: Check our Web Forms article about Data Binding RadChart to an ObjectDataSource.
slug: chart/building-radcharts/data-binding-radchart-to-an-objectdatasource
tags: data,binding,radchart,to,an,objectdatasource
published: True
position: 11
---

# Data Binding RadChart to an ObjectDataSource

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

RadChart can be bound to [ObjectDataSource](https://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx) in multi-tier application scenarios.See the MSDN article [ObjectDataSource Overview](https://msdn2.microsoft.com/en-us/library/9a4kyhcx.aspx) for more information on where and why you would use an [ObjectDataSource](https://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx) control.

An [ObjectDataSource](https://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx) represents a business object and provides data to data-bound controls in multi-tier applications. The application doesn't need to know how data is obtained as long as you connect the [ObjectDataSource](https://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx) to an object that has [DataObjectAttribute](https://msdn2.microsoft.com/en-us/library/system.componentmodel.dataobjectattribute.aspx) and [DataObjectMethodAttribute](https://msdn2.microsoft.com/en-us/library/system.componentmodel.dataobjectmethodattribute.aspx) attributes defined.See the following examples for how to create the business object and how to bind RadChart to [ObjectDataSource](https://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx):

* [Creating an object that can be consumed by ObjectDataSource]({%slug chart/building-radcharts/creating-an-object-that-can-be-consumed-by-objectdatasource%}).

* [Binding RadChart to ObjectDataSource at design-time]({%slug chart/building-radcharts/data-binding-radchart-to-objectdatasource-at-design-time%}).

* [Binding RadChart to ObjectDataSource at programmatically at run-time]({%slug chart/building-radcharts/binding-to-objectdatasource-at-run-time%}).

# See Also

 * [Data Binding RadChart]({%slug chart/building-radcharts/data-binding-radchart%})

 * [Data Binding RadChart to an Array]({%slug chart/building-radcharts/data-binding-radchart-to-an-array%})

 * [Data Binding RadChart to a Database Object]({%slug chart/building-radcharts/data-binding-radchart-to-a-database-object%})

 * [Data Binding RadChart to a Generic List]({%slug chart/building-radcharts/data-binding-radchart-to-a-generic-list%})

 * [Creating an Object that can be Consumed by ObjectDataSource]({%slug chart/building-radcharts/creating-an-object-that-can-be-consumed-by-objectdatasource%})

 * [Binding to ObjectDataSource at Run-Time]({%slug chart/building-radcharts/binding-to-objectdatasource-at-run-time%})

 * [Data Binding RadChart to an XML file]({%slug chart/building-radcharts/data-binding-radchart-to-an-xml-file%})
