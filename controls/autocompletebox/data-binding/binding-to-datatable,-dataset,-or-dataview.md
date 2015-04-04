---
title: Binding to DataTable, DataSet, or DataView
page_title: Binding to DataTable, DataSet, or DataView | UI for ASP.NET AJAX Documentation
description: Binding to DataTable, DataSet, or DataView
slug: autocompletebox/data-binding/binding-to-datatable,-dataset,-or-dataview
tags: binding,to,datatable,,dataset,,or,dataview
published: True
position: 2
---

# Binding to DataTable, DataSet, or DataView



__RadAutoCompleteBox__ can be bound to a __DataTable__,__DataSet__, and __DataView__. The following example shows binding to a DataTable object.

## Binding to a DataTable at runtime

The declaration of __RadAutoCompleteBox__ in the markup includes no __DataSourceID__ property or __Items__ section.

````ASPNET
		<telerik:RadAutoCompleteBox ID="RadAutoCompleteBox1" InputType="Text" runat="server">
		</telerik:RadAutoCompleteBox>
````



In the __Page_Load__ event handler, create and fill the __DataTable__ object, then bind it to RadAutoCompleteBox. The __DataBind__ method must be called after setting the __DataSource__ property.



````C#
	
		protected void Page_Load(object sender, EventArgs e)
		{
			RadAutoCompleteBox1.DataSource = GetData();
			RadAutoCompleteBox1.DataTextField = "ProductName";
			RadAutoCompleteBox1.DataValueField = "ProductID";
		}
	
		private static DataTable GetData()
		{
			SqlDataAdapter adapter = new SqlDataAdapter(@"SELECT [ProductID], [ProductName], [SupplierID], [CategoryID], [QuantityPerUnit], [UnitPrice], 
				[UnitsInStock], [UnitsOnOrder], [ReorderLevel], [Discontinued] FROM [Products]",
				ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString);
	
			DataTable data = new DataTable();
			adapter.Fill(data);
	
			return data;
		}
	
````
````VB.NET
	    Protected Sub Page_Load(sender As Object, e As EventArgs) Handles Me.Load
	        RadAutoCompleteBox1.DataSource = GetData()
	        RadAutoCompleteBox1.DataTextField = "ProductName"
	        RadAutoCompleteBox1.DataValueField = "ProductID"
	    End Sub
	
	    Private Shared Function GetData() As DataTable
	        Dim adapter As New SqlDataAdapter("SELECT * FROM [Products]", ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString)
	
	        Dim data As New DataTable()
	        adapter.Fill(data)
	
	        Return data
	    End Function
````


# See Also

 * [Overview]({%slug autocompletebox/server-side-programming/overview%})
