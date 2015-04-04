---
title: Binding to DataTable, DataSet or DataView
page_title: Binding to DataTable, DataSet or DataView | UI for ASP.NET AJAX Documentation
description: Binding to DataTable, DataSet or DataView
slug: tagcloud/data-binding/binding-to-datatable,-dataset-or-dataview
tags: binding,to,datatable,,dataset,or,dataview
published: True
position: 1
---

# Binding to DataTable, DataSet or DataView



## 

__RadTagCloud__ can be bound to a __DataTable__, __DataSet__ and a __DataView__. This example shows binding to a __DataTable__ object.

The declaration of the __RadTagCloud__ object includes no __DataSourceID__ property or <Items> section:

````ASPNET
	    <telerik:RadTagCloud ID="RadTagCloud1" runat="server" Width="400px">
	    </telerik:RadTagCloud>
````





In the __Page_Load__ event handler, create and fill the __DataTable__ object, then bind it to the __tagCloud__. You must call the __DataBind__ method after setting the __DataSource__ property.

>tabbedCode

````C#
	
	
		protected void Page_Load(object sender, EventArgs e)
		{
			if (!Page.IsPostBack)
			{
				BindToDataTable(RadTagCloud1);
			}
		}
		private void BindToDataTable(RadTagCloud cloud)
		{
			SqlConnection con = new SqlConnection("Data Source=LOCAL;Initial Catalog=TagCloud;Integrated Security=True");
			SqlDataAdapter adapter = new SqlDataAdapter("SELECT [Text], [Weight], [NavigateUrl] FROM [Links]", con);
			DataTable links = new DataTable();
			adapter.Fill(links);
			cloud.DataTextField = "Text";
			cloud.DataWeightField = "Weight";
			cloud.DataNavigateUrlField = "NavigateUrl";
			cloud.DataSource = links;
			cloud.DataBind();
		}
	
````
````VB.NET
	
	
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	        If Not Page.IsPostBack Then
	            BindToDataTable(RadTagCloud1)
	        End If
	    End Sub 'Page_Load
	    Private Sub BindToDataTable(ByVal cloud As RadTagCloud)
	        Dim con As New SqlConnection("Data Source=LOCAL;Initial Catalog=TagCloud;Integrated Security=True")
	        Dim adapter As New SqlDataAdapter("SELECT [Text], [Weight], [NavigateUrl] FROM [Links]", con)
	        Dim links As New DataTable()
	        adapter.Fill(links)
	        cloud.DataTextField = "Text"
	        cloud.DataWeightField = "Weight"
	        cloud.DataNavigateUrlField = "NavigateUrl"
	        cloud.DataSource = links
	        cloud.DataBind()
	    End Sub 'BindToDataTable
	
````
>end
