---
title: Data Binding RadChart to a Generic List
page_title: Data Binding RadChart to a Generic List | UI for ASP.NET AJAX Documentation
description: Data Binding RadChart to a Generic List
slug: chart/building-radcharts/data-binding-radchart-to-a-generic-list
tags: data,binding,radchart,to,a,generic,list
published: True
position: 8
---

# Data Binding RadChart to a Generic List



>caution  __RadChart__ has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering __RadChart__ for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using __RadChart__ in your projects, you can migrate to __RadHtmlChart__ by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for __RadChart__ is discontinued as of __Q3 2014__ , but the control will remain in the assembly so it can still be used.	We encourage you to use __RadHtmlChart__ for new development.
>


## 

Because RadChart can be bound to objects that implement the [IList](http://msdn2.microsoft.com/en-us/library/system.collections.ilist(VS.71).aspx) interface, and [generic lists](http://msdn2.microsoft.com/en-us/library/6sh2ey19.aspx) implement [IList](http://msdn2.microsoft.com/en-us/library/system.collections.ilist(VS.71).aspx), it follows that you can bind RadChart to [generic lists](http://msdn2.microsoft.com/en-us/library/6sh2ey19.aspx).These lists can be of simple types, e.g. int and double types, or the lists can be composed of complex objects containing multiple properties.

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
