---
title: Data Binding RadChart to a Generic List of Objects
page_title: Data Binding RadChart to a Generic List of Objects - RadChart
description: Check our Web Forms article about Data Binding RadChart to a Generic List of Objects.
slug: chart/building-radcharts/data-binding-radchart-to-a-generic-list-of-objects
tags: data,binding,radchart,to,a,generic,list,of,objects
published: True
position: 10
---

# Data Binding RadChart to a Generic List of Objects

>caution **RadChart** has been deprecated since Q3 2014 and is no longer recommended for use, as it does not support modern browsers. We strongly recommend using [RadHtmlChart](https://www.telerik.com/products/aspnet-ajax/html-chart.aspx), Telerik's modern client-side charting component. 
>To transition from RadChart to RadHtmlChart, refer to the following migration articles:
> - [Migrating Series]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-series-configuration%})
> - [Migrating Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-axes-configuration%})
> - [Migrating Date Axes]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-date-axis-configuration%})
> - [Migrating Databinding]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-data-binding-configuration%})
> - [Features parity]({%slug htmlchart/changes-and-backwards-compatibility/migrating-from-radchart-to-radhtmlchart/migrate-functionalities---features-and-series-types-parity%})
>Explore the [RadHtmlChart documentation]({%slug htmlchart/overview%}) and online demos to determine how it fits your development needs.

You can bind to a [generic lists](https://msdn2.microsoft.com/en-us/library/6sh2ey19.aspx) of objects that have multiple properties. The example below binds to a list of "Product" objects that contain two properties, one property for "Name" and a second for "QuantityInStock". The Y axis binds to the QuantityInStock and the X axis label binds to the "Name" property.

![Binding to Generic List of Complex Objects](images/radchart-building010.png)

The Product object is defined with a constructor that passes both Name and QuantityInStock:

````C#
public class Product
{
   public Product(string name, int quantityInStock)
   {
	   _name = name;
	   _quantityInStock = quantityInStock;
   }
   private string _name;
   public string Name
   {
	   get { return _name; }
	   set { _name = value; }
   }
   private int _quantityInStock;
   public int QuantityInStock
   {
	   get { return _quantityInStock; }
	   set { _quantityInStock = value; }
   }
} 				
````
````VB
Public Class Product
	Public Sub New(ByVal name As String, ByVal quantityInStock As Integer)
		_name = name
		_quantityInStock = quantityInStock
	End Sub
	Private _name As String
	Public Property Name() As String
		Get
			Return _name
		End Get
		Set(ByVal value As String)
			_name = value
		End Set
	End Property
	Private _quantityInStock As Integer
	Public Property QuantityInStock() As Integer
		Get
			Return _quantityInStock
		End Get
		Set(ByVal value As Integer)
			_quantityInStock = value
		End Set
	End Property
End Class
````

After the Product object is defined the following steps configure and bind to the generic List:

1. A generic List of Product objects is created and assigned to the RadChart DataSource= property.

1. The DataYColumn property of the series is assigned the numeric "QuantityInStock" property of the Product object.

1. The XAxis DataLabelsColumn is assigned the "Name" property of the the Product object.

1. The RadChart DataBind()= method is called.

````C#
List<Product> products = new List<Product>();
products.Add(new Product("Parka L", 120));
products.Add(new Product("Parka M", 100));
products.Add(new Product("Parka S", 132));
products.Add(new Product("Wool Cap", 45));
products.Add(new Product("Mittens", 67));
RadChart1.DataSource = products;
RadChart1.Series[0].DataYColumn = "QuantityInStock";
RadChart1.PlotArea.XAxis.DataLabelsColumn = "Name";
RadChart1.PlotArea.XAxis.Appearance.TextAppearance.TextProperties.Font = new System.Drawing.Font("Arial", 8);
RadChart1.DataBind();				
````
````VB	
Dim products As New List(Of Product)()
products.Add(New Product("Parka L", 120))
products.Add(New Product("Parka M", 100))
products.Add(New Product("Parka S", 132))
products.Add(New Product("Wool Cap", 45))
products.Add(New Product("Mittens", 67))
RadChart1.DataSource = products
RadChart1.Series(0).DataYColumn = "QuantityInStock"
RadChart1.PlotArea.XAxis.DataLabelsColumn = "Name"
RadChart1.PlotArea.XAxis.Appearance.TextAppearance.TextProperties.Font = New System.Drawing.Font("Arial", 8)
RadChart1.DataBind()	
````

# See Also

 * [Data Binding RadChart to a Generic List]({%slug chart/building-radcharts/data-binding-radchart-to-a-generic-list%})

 * [Data Binding RadChart to a Generic List of Simple Types]({%slug chart/building-radcharts/data-binding-radchart-to-a-generic-list-of-simple-types%})
