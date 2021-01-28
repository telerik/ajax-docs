---
title: Binding to DataTable, DataSet or DataView
page_title: Binding to DataTable, DataSet or DataView - RadTagCloud
description: Check our Web Forms article about Binding to DataTable, DataSet or DataView.
slug: tagcloud/data-binding/binding-to-datatable,-dataset-or-dataview
tags: binding,to,datatable,,dataset,or,dataview
published: True
position: 1
---

# Binding to DataTable, DataSet or DataView

**RadTagCloud** can be bound to a **DataTable**, **DataSet** and a **DataView**. This example shows binding to a **DataTable** object.

The declaration of the **RadTagCloud** object includes no **DataSourceID** property or `<Items>` section:

````ASP.NET
<telerik:RadTagCloud RenderMode="Lightweight" ID="RadTagCloud1" runat="server" Width="400px">
</telerik:RadTagCloud>
````

In the **Page_Load** event handler, create and fill the **DataTable** object, then bind it to the **tagCloud**. You must call the **DataBind** method after setting the **DataSource** property.

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
````VB
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

