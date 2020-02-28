---
title: Data Binding RadChart to an XML file
page_title: Data Binding RadChart to an XML file | RadChart for ASP.NET AJAX Documentation
description: Data Binding RadChart to an XML file
slug: chart/building-radcharts/data-binding-radchart-to-an-xml-file
tags: data,binding,radchart,to,an,xml,file
published: True
position: 15
---

# Data Binding RadChart to an XML file

>caution  **RadChart** has been replaced by [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component. If you are considering **RadChart** for new development, examine the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and [online demos](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx) first to see if it will fit your development needs. If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles: [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%}), [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%}), [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%}), [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%}), [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%}). Support for **RadChart** is discontinued as of **Q3 2014**, but the control will remain in the assembly so it can still be used. We encourage you to use **RadHtmlChart** for new development.

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
