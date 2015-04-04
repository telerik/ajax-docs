---
title: DataSet
page_title: DataSet | UI for ASP.NET AJAX Documentation
description: DataSet
slug: htmlchart/data-binding/dataset
tags: dataset
published: True
position: 6
---

# DataSet



## 

This help article describes which properties to use to bind a __RadHtmlChart__ to a __DataSet__ andpresents a code example. You can bind a __RadHtmlChart__ to a __DataSet__ using the followingproperties:

* __DataSourceID__ in the main tag sets the declarative data source for the entire chart. You can use	the __DataSource__ property for a programmatic data source if you create the connection in the code-behind.

* __DataFieldY__ property (and __ColorField__, __ExplodeField__, __NameField__ for Pie; __DataFieldX__ for Bubble, Scatter and ScatterLine; etc.)for the series to point it to the desired data source field.

* __DataLabelsField__ for the x-axis labels to populate the items for the axis.

__Example 1__ demonstrates the setup of a __RadHtmlChart__, bound to a DataSet in __Example 2__.

__Example 1__: The markup of the __RadHtmlChart__ that is bound to a DataSet in __Example 2__.

````ASPNET
	    <telerik:RadHtmlChart runat="server" ID="RadHtmlChart1">
	        <PlotArea>
	            <Series>
	                <telerik:ColumnSeries Name="Products" DataFieldY="Price">
	                    <TooltipsAppearance DataFormatString="${0}" />
	                    <LabelsAppearance Visible="false" />
	                </telerik:ColumnSeries>
	            </Series>
	            <XAxis DataLabelsField="Name">
	            </XAxis>
	            <YAxis>
	                <LabelsAppearance DataFormatString="${0}" />
	            </YAxis>
	        </PlotArea>
	        <Legend>
	            <Appearance Visible="false" />
	        </Legend>
	        <ChartTitle Text="Bookstore Products">
	        </ChartTitle>
	    </telerik:RadHtmlChart>
````



__Example 2__: The DataSet for the __RadHtmlChart__ created in __Example 1__.



````C#
		protected void Page_Load(object sender, System.EventArgs e)
		{
			RadHtmlChart1.DataSource = GetData();
			RadHtmlChart1.DataBind();
		}
	
		private DataSet GetData()
		{
			DataSet ds = new DataSet("Bookstore");
			DataTable dt = new DataTable("Products");
			dt.Columns.Add("Id", Type.GetType("System.Int32"));
			dt.Columns.Add("Name", Type.GetType("System.String"));
			dt.Columns.Add("Price", Type.GetType("System.Double"));
			dt.Rows.Add(1, "Pen", 5.45);
			dt.Rows.Add(2, "Audio book", 9.95);
			dt.Rows.Add(3, "Pencil", 1.99);
			dt.Rows.Add(4, "Book", 15.95);
			dt.Rows.Add(5, "Newspaper", 0.95);
			dt.Rows.Add(6, "Magazine", 3.95);
			ds.Tables.Add(dt);
			return ds;
		}
````
````VB.NET
		Protected Sub Page_Load(sender As Object, e As System.EventArgs)
			RadHtmlChart1.DataSource = GetData()
			RadHtmlChart1.DataBind()
		End Sub
	
		Private Function GetData() As DataSet
			Dim ds As New DataSet("Bookstore")
			Dim dt As New DataTable("Products")
			dt.Columns.Add("Id", Type.[GetType]("System.Int32"))
			dt.Columns.Add("Name", Type.[GetType]("System.String"))
			dt.Columns.Add("Price", Type.[GetType]("System.Double"))
			dt.Rows.Add(1, "Pen", 5.45)
			dt.Rows.Add(2, "Audio book", 9.95)
			dt.Rows.Add(3, "Pencil", 1.99)
			dt.Rows.Add(4, "Book", 15.95)
			dt.Rows.Add(5, "Newspaper", 0.95)
			dt.Rows.Add(6, "Magazine", 3.95)
			ds.Tables.Add(dt)
			Return ds
		End Function
````


# See Also

 * [RadHtmlChart Column Series]({%slug htmlchart/chart-types/column-chart%})

 * [RadHtmlChart DataSet Demo](http://demos.telerik.com/aspnet-ajax/htmlchart/examples/databinding/bindtodataset/defaultcs.aspx)
