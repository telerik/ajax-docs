---
title: Data Binding RadChart to an XML file
page_title: Data Binding RadChart to an XML file | UI for ASP.NET AJAX Documentation
description: Data Binding RadChart to an XML file
slug: chart/building-radcharts/data-binding-radchart-to-an-xml-file
tags: data,binding,radchart,to,an,xml,file
published: True
position: 15
---

# Data Binding RadChart to an XML file



>caution  __RadChart__ has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering __RadChart__ for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using __RadChart__ in your projects, you can migrate to __RadHtmlChart__ by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for __RadChart__ is discontinued as of __Q3 2014__ , but the control will remain in the assembly so it can still be used.	We encourage you to use __RadHtmlChart__ for new development.
>


## 

To bind RadChart to XML data you can:

1. [Bind directly to the XML file itself programmatically at run-time.]({%slug chart/building-radcharts/binding-to-xml-directly-at-run-time%})

1. [Bind to XML data by using an XMLDataSource at design-time.]({%slug chart/building-radcharts/binding-to-xml-at-design-time-using-an-xmldatasource%})

Products.XML is used for both examples.The XML file is located in the same directory as the default page used to display it.

````XML
	     
	
	<?xml version="1.0" encoding="utf-8" ?>
	<Products>
	<Product Name="Parka L" QuantityInStock="123"></Product>
	<Product Name="Parka M" QuantityInStock="56"></Product>
	<Product Name="Parka S" QuantityInStock="92"></Product>
	<Product Name="Mittens" QuantityInStock="12"></Product>
	</Products>
				
````





# See Also

 * [Binding to XML at Design-Time using an XMLDataSource]({%slug chart/building-radcharts/binding-to-xml-at-design-time-using-an-xmldatasource%})

 * [Binding to XML Directly at Run-Time]({%slug chart/building-radcharts/binding-to-xml-directly-at-run-time%})

 * [Data Binding RadChart]({%slug chart/building-radcharts/data-binding-radchart%})

 * [Data Binding RadChart to an Array]({%slug chart/building-radcharts/data-binding-radchart-to-an-array%})

 * [Data Binding RadChart to a Database Object]({%slug chart/building-radcharts/data-binding-radchart-to-a-database-object%})

 * [Data Binding RadChart to a Generic List]({%slug chart/building-radcharts/data-binding-radchart-to-a-generic-list%})

 * [Data Binding RadChart to an ObjectDataSource]({%slug chart/building-radcharts/data-binding-radchart-to-an-objectdatasource%})
