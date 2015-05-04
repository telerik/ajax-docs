---
title: Binding to DataTable
page_title: Binding to DataTable | RadSearchBox for ASP.NET AJAX Documentation
description: Binding to DataTable
slug: searchbox/data-binding/binding-to-datatable
tags: binding,to,datatable
published: True
position: 2
---

# Binding to DataTable



**RadSearchBox** can be bound to a **DataTable**, **DataSet** and **DataView** objects. The following example shows binding to a DataTable object.

## Binding to a DataTable at runtime

The declaration of **RadSearchBox** in the markup does not include **DataSourceID** property.

````ASPNET
<telerik:RadSearchBox runat="server" ID="RadSearchBox1" >
	<DropDownSettings Height="400" Width="300" />
</telerik:RadSearchBox>
````



In the **Page_Load** event handler, create and fill the **DataTable** object, then setting the **DataSource** property.



````C#
	
protected void Page_Load(object sender, EventArgs e)
{
	RadSearchBox1.DataSource = GetData();
	RadSearchBox1.DataTextField = "ProductName";
	RadSearchBox1.DataValueField = "ProductID";
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
	RadSearchBox1.DataSource = GetData()
	RadSearchBox1.DataTextField = "ProductName"
	RadSearchBox1.DataValueField = "ProductID"
End Sub

Private Shared Function GetData() As DataTable
	Dim adapter As New SqlDataAdapter("SELECT * FROM [Products]", ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString)

	Dim data As New DataTable()
	adapter.Fill(data)

	Return data
End Function
	
````

