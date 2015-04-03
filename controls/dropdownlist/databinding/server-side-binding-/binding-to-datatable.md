---
title: Binding to DataTable
page_title: Binding to DataTable | UI for ASP.NET AJAX Documentation
description: Binding to DataTable
slug: dropdownlist/databinding/server-side-binding-/binding-to-datatable
tags: binding,to,datatable
published: True
position: 2
---

# Binding to DataTable



## 

__RadDropDownList__ can be bound to a __DataTable__, __DataSet__, and __DataView__. The following example shows binding to a __DataTable__ object.

The declaration of RadDropDownList object includes no DataSourceID property or <items> section:

````ASPNET
	        <telerik:RadDropDownList ID="RadDropDownList1" runat="server">
	        </telerik:RadDropDownList>
````



In the __Page_Load__ event handler, create and fill the __DataTable__ object, then bind it to the RadDropDownList. The __DataBind__ method must be called after setting the __DataSource__ property.

>tabbedCode

````C#
	
	    protected void Page_Load(object sender, EventArgs e)
	    {
	        if (!Page.IsPostBack)
	        {
	            BindToDataTable(RadDropDownList1);
	        }
	
	    }
	
	    private void BindToDataTable(Telerik.Web.UI.RadDropDownList dropdownlist)
	    {
	        SqlConnection con = new SqlConnection("Data Source=LOCAL;Initial Catalog=DropDownList;Integrated Security=True");
	
	        SqlDataAdapter adapter = new SqlDataAdapter("SELECT [Text], [Value] FROM [Links]", con);
	        DataTable links = new DataTable();
	
	        adapter.Fill(links);
	
	        dropdownlist.DataTextField = "Text";
	        dropdownlist.DataValueField = "Value";
	        dropdownlist.DataSource = links;
	        dropdownlist.DataBind();
	    }
````



````VB.NET
	    Protected Sub Page_Load(sender As Object, e As EventArgs)
	        If Not Page.IsPostBack Then
	            BindToDataTable(RadDropDownList1)
	        End If
	
	    End Sub
	
	    Private Sub BindToDataTable(dropdownlist As Telerik.Web.UI.RadDropDownList)
	        Dim con As New SqlConnection("Data Source=LOCAL;Initial Catalog=DropDownList;Integrated Security=True")
	
	        Dim adapter As New SqlDataAdapter("SELECT [Text], [Value] FROM [Links]", con)
	        Dim links As New DataTable()
	
	        adapter.Fill(links)
	
	        dropdownlist.DataTextField = "Text"
	        dropdownlist.DataValueField = "Value"
	        dropdownlist.DataSource = links
	        dropdownlist.DataBind()
	    End Sub
````


>end
