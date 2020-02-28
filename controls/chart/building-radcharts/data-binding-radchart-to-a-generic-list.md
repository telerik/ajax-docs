---
title: Data Binding RadChart to a Generic List
page_title: Data Binding RadChart to a Generic List | RadChart for ASP.NET AJAX Documentation
description: Data Binding RadChart to a Generic List
slug: chart/building-radcharts/data-binding-radchart-to-a-generic-list
tags: data,binding,radchart,to,a,generic,list
published: True
position: 8
---

# Data Binding RadChart to a Generic List

>caution  **RadChart** has been replaced by [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component. If you are considering **RadChart** for new development, examine the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and [online demos](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx) first to see if it will fit your development needs. If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles: [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%}), [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%}), [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%}), [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%}), [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%}). Support for **RadChart** is discontinued as of **Q3 2014**, but the control will remain in the assembly so it can still be used. We encourage you to use **RadHtmlChart** for new development.

Because RadChart can be bound to objects that implement the [IList](https://msdn2.microsoft.com/en-us/library/system.collections.ilist(VS.71).aspx) interface, and [generic lists](https://msdn2.microsoft.com/en-us/library/6sh2ey19.aspx) implement [IList](https://msdn2.microsoft.com/en-us/library/system.collections.ilist(VS.71).aspx), it follows that you can bind RadChart to [generic lists](https://msdn2.microsoft.com/en-us/library/6sh2ey19.aspx).These lists can be of simple types, e.g. int and double types, or the lists can be composed of complex objects containing multiple properties.

* See [Data Binding RadChart to a Generic List of Simple Types]({%slug chart/building-radcharts/data-binding-radchart-to-a-generic-list-of-simple-types%}) for a minimal example binding to a list of type double.

* See [Data Binding RadChart to a Generic List of Objects]({%slug chart/building-radcharts/data-binding-radchart-to-a-generic-list-of-objects%}) for a more complex example where multiple properties are used for data and labeling.

# See Also

 * [Data Binding RadChart]({%slug chart/building-radcharts/data-binding-radchart%})

 * [Data Binding RadChart to an Array]({%slug chart/building-radcharts/data-binding-radchart-to-an-array%})

 * [Data Binding RadChart to a Database Object]({%slug chart/building-radcharts/data-binding-radchart-to-a-database-object%})

 * [Data Binding RadChart to a Generic List of Simple Types]({%slug chart/building-radcharts/data-binding-radchart-to-a-generic-list-of-simple-types%})

 * [Data Binding RadChart to a Generic List of Objects]({%slug chart/building-radcharts/data-binding-radchart-to-a-generic-list-of-objects%})

 * [Data Binding RadChart to an ObjectDataSource]({%slug chart/building-radcharts/data-binding-radchart-to-an-objectdatasource%})

 * [Data Binding RadChart to an XML file]({%slug chart/building-radcharts/data-binding-radchart-to-an-xml-file%})
