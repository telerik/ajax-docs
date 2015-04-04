---
title: Binding to DataTable, DataSet or DataView
page_title: Binding to DataTable, DataSet or DataView | UI for ASP.NET AJAX Documentation
description: Binding to DataTable, DataSet or DataView
slug: listbox/data-binding/binding-to-datatable,-dataset-or-dataview
tags: binding,to,datatable,,dataset,or,dataview
published: True
position: 1
---

# Binding to DataTable, DataSet or DataView



## 

__RadListBox__ can be bound to a __DataTable__, __DataSet__ and a __DataView__. This example shows binding to a __DataTable__ object.

The declaration of the RadListBox object includes no DataSourceID property or <items> section:

````ASPNET
	    <telerik:radlistbox id="RadListBox1" runat="server"></telerik:radlistbox>
````



In the __Page_Load__ event handler, create and fill the __DataTable__ object, then bind it to the ListBox. You must call the __DataBind__ method after setting the __DataSource__ property.



````C#
	
	
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (!IsPostBack)
	        {
	            RadListBox1.DataSource = GetData(); 
	            RadListBox1.DataTextField = "ProductName"; 
	            RadListBox1.DataValueField = "ProductID"; 
	            RadListBox1.DataBind();
	        }
	    }
	protected DataTable GetData()
	{
	    SqlDataAdapter adapter = new SqlDataAdapter("SELECT ProductID, ProductName FROM Products", ConfigurationManager.ConnectionStrings["NorthwindConnectionString"].ConnectionString);
	    DataTable result = new DataTable(); adapter.Fill(result);
	    return result;
	}
				
````
````VB.NET
	     
	
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
	        If Not IsPostBack Then
	            RadListBox1.DataSource = GetData()
	            RadListBox1.DataTextField = "ProductName"
	            RadListBox1.DataValueField = "ProductID"
	            RadListBox1.DataBind()
	        End If
	
	    End Sub
	    Protected Function GetData() As DataTable
	        Dim adapter As New SqlDataAdapter("SELECT ProductID, ProductName FROM Products", ConfigurationManager.ConnectionStrings("NorthwindConnectionString").ConnectionString)
	        Dim result As New DataTable()
	        adapter.Fill(result)
	        Return result
	
	    End Function
	
````


# See Also

 * [Overview]({%slug listbox/data-binding/overview%})

 * [Binding to Array or ArrayList]({%slug listbox/data-binding/binding-to-array-or-arraylist%})

 * [Binding to ASP.NET Datasource Components]({%slug listbox/data-binding/binding-to-asp.net-datasource-components%})
