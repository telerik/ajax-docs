---
title: Creating an Object that can be Consumed by ObjectDataSource
page_title: Creating an Object that can be Consumed by ObjectDataSource | UI for ASP.NET AJAX Documentation
description: Creating an Object that can be Consumed by ObjectDataSource
slug: chart/building-radcharts/creating-an-object-that-can-be-consumed-by-objectdatasource
tags: creating,an,object,that,can,be,consumed,by,objectdatasource
published: True
position: 12
---

# Creating an Object that can be Consumed by ObjectDataSource



>caution  __RadChart__ has been replaced by[RadHtmlChart](http://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's client-side charting component.	If you are considering __RadChart__ for new development, examine the[RadHtmlChart documentation](ffd58685-7423-4c50-9554-f92c70a75138)and[online demos](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/overview/defaultcs.aspx)first to see if it will fit your development needs.	If you are already using __RadChart__ in your projects, you can migrate to __RadHtmlChart__ by following these articles:[Migrating Series](2f393f28-bc31-459c-92aa-c3599785f6cc),[Migrating Axes](3f1bea81-87b9-4324-b0d2-d13131031048),[Migrating Date Axes](93226130-bc3c-4c53-862a-f9e17b2eb7dd),[Migrating Databinding](d6c5e2f1-280c-4fb0-b5b0-2f507697511d),[Feature parity](010dc716-ce38-480b-9157-572e0f140169).	Support for __RadChart__ is discontinued as of __Q3 2014__ , but the control will remain in the assembly so it can still be used.	We encourage you to use __RadHtmlChart__ for new development.
>


## 

See the code below for an example object that can be consumed by [ObjectDataSource](http://msdn2.microsoft.com/en-us/library/system.web.ui.webcontrols.objectdatasource.aspx).Your object needs to be marked with the [DataObjectAttribute](http://msdn2.microsoft.com/en-us/library/system.componentmodel.dataobjectattribute.aspx) for the object to be seen by Data Source Configuration Wizard. It also needs a method to select data marked by the [DataObjectMethodAttribute](http://msdn2.microsoft.com/en-us/library/system.componentmodel.dataobjectmethodattribute.aspx) (see GetProducts() method in the code sample).

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
````VB.NET
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
