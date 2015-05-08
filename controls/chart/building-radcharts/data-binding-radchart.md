---
title: Data Binding RadChart
page_title: Data Binding RadChart | RadChart for ASP.NET AJAX Documentation
description: Data Binding RadChart
slug: chart/building-radcharts/data-binding-radchart
tags: data,binding,radchart
published: True
position: 5
---

# Data Binding RadChart

>caution  **RadChart** has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering **RadChart** for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for **RadChart** is discontinued as of **Q3 2014** , but the control will remain in the assembly so it can still be used.	We encourage you to use **RadHtmlChart** for new development.

Many business applications rely on database data, for example MS SQL, Oracle, MySQL, Access ODBC as well as XML data and business objects in multiple-tier scenarios. RadChart allows automatic binding to all of these using either standard Microsoft supplied data source controls SqlDataSource, AccessDataSource, XmlDataSource and ObjectDataSource or any [DataSourceControl](http://msdn2.microsoft.com/en-us/library/system.web.ui.datasourcecontrol.aspx) implementation. The end result is shown in the chart immediately at design-time.

You can also bind RadChart to a data source that implements one of the following interfaces:

* [IEnumerable](http://msdn2.microsoft.com/en-us/library/system.collections.ienumerable.aspx):Supports simple iteration of a collection. See the MSDN article for more on [IEnumerable](http://msdn2.microsoft.com/en-us/library/system.collections.ienumerable.aspx).

* [ICollection](http://msdn2.microsoft.com/en-us/library/system.collections.ienumerable.aspx): Extends [IEnumerable](http://msdn2.microsoft.com/en-us/library/system.collections.ienumerable.aspx) and supports size, enumerator, and synchronization methods for collections.

* [IList](http://msdn2.microsoft.com/en-us/library/system.collections.ilist(VS.71).aspx): Extends [ICollection](http://msdn2.microsoft.com/en-us/library/system.collections.icollection.aspx) and is the base class for lists.

* [IBindingList](http://msdn2.microsoft.com/en-us/library/system.componentmodel.ibindinglist.aspx): Extends IList an supports binding to a data source.

* [IListSource](http://msdn2.microsoft.com/en-us/library/system.componentmodel.ilistsource.aspx): Provides functionality to an object to return a list that can be bound to a data source.

Some of the implementations of these interfaces include:

* [Array](http://msdn2.microsoft.com/en-us/library/system.array(VS.71).aspx): See [Data Binding RadChart to an Array]({%slug chart/building-radcharts/data-binding-radchart-to-an-array%}) for an example.

* [ArrayList](http://msdn2.microsoft.com/en-us/library/system.collections.arraylist(VS.71).aspx).

* [CollectionBase](http://msdn2.microsoft.com/en-us/library/system.collections.collectionbase(VS.71).aspx) Objects.

* [DataView](http://msdn2.microsoft.com/en-us/library/system.data.dataview(VS.71).aspx), [DataTable](http://msdn2.microsoft.com/en-us/library/system.data.datatable.aspx), [DataSet](http://msdn2.microsoft.com/en-us/library/system.data.dataset.aspx): See [Data Bindng to a Database Object]({%slug chart/building-radcharts/data-binding-radchart-to-a-database-object%}), [Data binding RadChart to an ObjectDatasource]({%slug chart/building-radcharts/data-binding-radchart-to-an-objectdatasource%}), [DataBinding to an XML file]({%slug chart/building-radcharts/data-binding-radchart-to-an-xml-file%}) examples.

* [Generic List class](http://msdn2.microsoft.com/en-us/library/6sh2ey19.aspx): See [Data Binding RadChart to a Generic List]({%slug chart/building-radcharts/data-binding-radchart-to-a-generic-list%}) for an example of binding to a generic list.

You can also [bind to XML data]({%slug chart/building-radcharts/data-binding-radchart-to-an-xml-file%}) through an [XMLDataSource](http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.xmldatasource.aspx) or directly to an XML file.

Once you have the data source defined you can use the RadChart Wizard, Property Editor or code for selecting which data columns will be used to populate the chart. The key properties for binding to a data source are:

# See Also

 * [Data Binding RadChart to a Database Object]({%slug chart/building-radcharts/data-binding-radchart-to-a-database-object%})

 * [Data Binding RadChart to an ObjectDataSource]({%slug chart/building-radcharts/data-binding-radchart-to-an-objectdatasource%})

 * [Data Binding RadChart to an XML file]({%slug chart/building-radcharts/data-binding-radchart-to-an-xml-file%})

 * [Data Binding RadChart to an Array]({%slug chart/building-radcharts/data-binding-radchart-to-an-array%})

 * [Data Binding RadChart to a Generic List of Simple Types]({%slug chart/building-radcharts/data-binding-radchart-to-a-generic-list-of-simple-types%})

 * [Data Binding RadChart to a Generic List of Objects]({%slug chart/building-radcharts/data-binding-radchart-to-a-generic-list-of-objects%})

 * [Series Overview]({%slug chart/understanding-radchart-elements/series-overview%})
