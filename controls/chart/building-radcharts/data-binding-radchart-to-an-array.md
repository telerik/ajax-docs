---
title: Data Binding RadChart to an Array
page_title: Data Binding RadChart to an Array | RadChart for ASP.NET AJAX Documentation
description: Data Binding RadChart to an Array
slug: chart/building-radcharts/data-binding-radchart-to-an-array
tags: data,binding,radchart,to,an,array
published: True
position: 6
---

# Data Binding RadChart to an Array

>caution  **RadChart** has been replaced by [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component. If you are considering **RadChart** for new development, examine the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and [online demos](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx) first to see if it will fit your development needs. If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles: [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%}), [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%}), [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%}), [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%}), [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%}). Support for **RadChart** is discontinued as of **Q3 2014**, but the control will remain in the assembly so it can still be used. We encourage you to use **RadHtmlChart** for new development.

To bind a RadChart to an [Array](https://msdn2.microsoft.com/en-us/library/system.array(VS.71).aspx) object, assign the RadChart DataSource property to the array, then call the RadChart DataBind() method. The example below demonstrates data binding to an array of integers.

![Databinding to an array](images/radchart-building007.png)

````C#
protected void Page_Load(object sender, EventArgs e)
{
   int[] intArray = new int[4] { 10, 12, 13, 5 };
   RadChart1.DataSource = intArray;
   RadChart1.DataBind();
} 			
````
````VB
Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	Dim intArray As Integer() = New Integer(4) {10, 12, 13, 5}
	RadChart1.DataSource = intArray
	RadChart1.DataBind()
End Sub
````

# See Also

 * [Data Binding RadChart to a Database Object]({%slug chart/building-radcharts/data-binding-radchart-to-a-database-object%})

 * [Data Binding RadChart to a Generic List]({%slug chart/building-radcharts/data-binding-radchart-to-a-generic-list%})

 * [Data Binding RadChart to an ObjectDataSource]({%slug chart/building-radcharts/data-binding-radchart-to-an-objectdatasource%})

 * [Data Binding RadChart to an XML file]({%slug chart/building-radcharts/data-binding-radchart-to-an-xml-file%})

 * [Data Binding RadChart]({%slug chart/building-radcharts/data-binding-radchart%})
