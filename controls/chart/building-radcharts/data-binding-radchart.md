---
title: Data Binding RadChart
page_title: Data Binding RadChart - RadChart
description: Check our Web Forms article about Data Binding RadChart.
slug: chart/building-radcharts/data-binding-radchart
tags: data,binding,radchart
published: True
position: 5
---

# Data Binding RadChart

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

Many business applications rely on database data, for example MS SQL, Oracle, MySQL, Access ODBC as well as XML data and business objects in multiple-tier scenarios. RadChart allows automatic binding to all of these using either standard Microsoft supplied data source controls SqlDataSource, AccessDataSource, XmlDataSource and ObjectDataSource or any [DataSourceControl](https://msdn2.microsoft.com/en-us/library/system.web.ui.datasourcecontrol.aspx) implementation. The end result is shown in the chart immediately at design-time.

You can also bind RadChart to a data source that implements one of the following interfaces:

* [IEnumerable](https://msdn2.microsoft.com/en-us/library/system.collections.ienumerable.aspx):Supports simple iteration of a collection. See the MSDN article for more on [IEnumerable](https://msdn2.microsoft.com/en-us/library/system.collections.ienumerable.aspx).

* [ICollection](https://msdn2.microsoft.com/en-us/library/system.collections.ienumerable.aspx): Extends [IEnumerable](https://msdn2.microsoft.com/en-us/library/system.collections.ienumerable.aspx) and supports size, enumerator, and synchronization methods for collections.

* [IList](https://msdn2.microsoft.com/en-us/library/system.collections.ilist(VS.71).aspx): Extends [ICollection](https://msdn2.microsoft.com/en-us/library/system.collections.icollection.aspx) and is the base class for lists.

* [IBindingList](https://msdn2.microsoft.com/en-us/library/system.componentmodel.ibindinglist.aspx): Extends IList an supports binding to a data source.

* [IListSource](https://msdn2.microsoft.com/en-us/library/system.componentmodel.ilistsource.aspx): Provides functionality to an object to return a list that can be bound to a data source.

Some of the implementations of these interfaces include:

* [Array](https://msdn2.microsoft.com/en-us/library/system.array(VS.71).aspx): See [Data Binding RadChart to an Array]({%slug chart/building-radcharts/data-binding-radchart-to-an-array%}) for an example.

* [ArrayList](https://msdn2.microsoft.com/en-us/library/system.collections.arraylist(VS.71).aspx).

* [CollectionBase](https://msdn2.microsoft.com/en-us/library/system.collections.collectionbase(VS.71).aspx) Objects.

* [DataView](https://msdn2.microsoft.com/en-us/library/system.data.dataview(VS.71).aspx), [DataTable](https://msdn2.microsoft.com/en-us/library/system.data.datatable.aspx), [DataSet](https://msdn2.microsoft.com/en-us/library/system.data.dataset.aspx): See [Data Bindng to a Database Object]({%slug chart/building-radcharts/data-binding-radchart-to-a-database-object%}), [Data binding RadChart to an ObjectDatasource]({%slug chart/building-radcharts/data-binding-radchart-to-an-objectdatasource%}), [DataBinding to an XML file]({%slug chart/building-radcharts/data-binding-radchart-to-an-xml-file%}) examples.

* [Generic List class](https://msdn2.microsoft.com/en-us/library/6sh2ey19.aspx): See [Data Binding RadChart to a Generic List]({%slug chart/building-radcharts/data-binding-radchart-to-a-generic-list%}) for an example of binding to a generic list.

You can also [bind to XML data]({%slug chart/building-radcharts/data-binding-radchart-to-an-xml-file%}) through an [XMLDataSource](https://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.xmldatasource.aspx) or directly to an XML file.

Once you have the data source defined you can use the RadChart Wizard, Property Editor or code for selecting which data columns will be used to populate the chart. The key properties for binding to a data source are:

# See Also

 * [Data Binding RadChart to a Database Object]({%slug chart/building-radcharts/data-binding-radchart-to-a-database-object%})

 * [Data Binding RadChart to an ObjectDataSource]({%slug chart/building-radcharts/data-binding-radchart-to-an-objectdatasource%})

 * [Data Binding RadChart to an XML file]({%slug chart/building-radcharts/data-binding-radchart-to-an-xml-file%})

 * [Data Binding RadChart to an Array]({%slug chart/building-radcharts/data-binding-radchart-to-an-array%})

 * [Data Binding RadChart to a Generic List of Simple Types]({%slug chart/building-radcharts/data-binding-radchart-to-a-generic-list-of-simple-types%})

 * [Data Binding RadChart to a Generic List of Objects]({%slug chart/building-radcharts/data-binding-radchart-to-a-generic-list-of-objects%})

 * [Series Overview]({%slug chart/understanding-radchart-elements/series-overview%})
