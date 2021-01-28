---
title: Creating an Object that can be Consumed by ObjectDataSource
page_title: Creating an Object that can be Consumed by ObjectDataSource - RadChart
description: Check our Web Forms article about Creating an Object that can be Consumed by ObjectDataSource.
slug: chart/building-radcharts/creating-an-object-that-can-be-consumed-by-objectdatasource
tags: creating,an,object,that,can,be,consumed,by,objectdatasource
published: True
position: 12
---

# Creating an Object that can be Consumed by ObjectDataSource

>caution  **RadChart** has been replaced by [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component. If you are considering **RadChart** for new development, examine the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and [online demos](https://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx) first to see if it will fit your development needs. If you are already using **RadChart** in your projects, you can migrate to **RadHtmlChart** by following these articles: [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%}), [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%}), [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%}), [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%}), [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%}). Support for **RadChart** is discontinued as of **Q3 2014**, but the control will remain in the assembly so it can still be used. We encourage you to use **RadHtmlChart** for new development.

See the code below for an example object that can be consumed by [ObjectDataSource](https://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx). Your object needs to be marked with the [DataObjectAttribute](https://msdn2.microsoft.com/en-us/library/system.componentmodel.dataobjectattribute.aspx) for the object to be seen by Data Source Configuration Wizard. It also needs a method to select data marked by the [DataObjectMethodAttribute](https://msdn2.microsoft.com/en-us/library/system.componentmodel.dataobjectmethodattribute.aspx) (see GetProducts() method in the code sample).

See [Data Binding RadChart to an ObjectDataSource]({%slug chart/building-radcharts/data-binding-radchart-to-an-objectdatasource%}) for an example of how to use this object for binding.

````C#
using System;
using System.Configuration;
using System.Web.UI.WebControls;
// Supports RadChart declaration
using Telerik.Web.UI;
// Supports RadChart objects, i.e. series, items
using Telerik.Charting;
using System.Data.SqlClient;
using System.ComponentModel;
using System.Collections;
namespace RadChartBinding
{
	[DataObjectAttribute()]
	public class ProductsBO
	{
		[DataObjectMethodAttribute(DataObjectMethodType.Select, true)]
		public static IEnumerable GetProducts()
		{
			SqlCommand command = new SqlCommand();
			command.Connection = new SqlConnection(ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString);
			command.CommandText = "SELECT CategoryName, SUM(ProductSales) AS TotalSales FROM [Product Sales for 1997] GROUP BY CategoryName";
			command.Connection.Open();
			SqlDataReader reader = command.ExecuteReader();
			return reader;
		}
	}
}
````
````VB
Imports System
Imports System.Configuration
Imports System.Web.UI.WebControls
' Supports RadChart declaration
Imports Telerik.Web.UI
' Supports RadChart objects, i.e. series, items
Imports Telerik.Charting
Imports System.Data.SqlClient
Imports System.ComponentModel

Namespace RadChartBinding
	<DataObjectAttribute()> _
	Public Class ProductsBO
<DataObjectMethodAttribute(DataObjectMethodType.[Select], True)>_  
		Public Shared Function GetProducts() As IEnumerable
			Dim command As New SqlCommand()
			command.Connection = New SqlConnection(ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString)
			command.CommandText = "SELECT CategoryName, SUM(ProductSales) AS TotalSales FROM [Product Sales for 1997] GROUP BY CategoryName"
			command.Connection.Open()
			Dim reader As SqlDataReader = command.ExecuteReader()
			Return reader
		End Function
	End Class
End Namespace
````

# See Also

 * [Data Binding RadChart to an ObjectDataSource]({%slug chart/building-radcharts/data-binding-radchart-to-an-objectdatasource%})

 * [Binding to ObjectDataSource at Run-Time]({%slug chart/building-radcharts/binding-to-objectdatasource-at-run-time%})

 * [Data Binding RadChart to ObjectDataSource at Design-Time]({%slug chart/building-radcharts/data-binding-radchart-to-objectdatasource-at-design-time%})
