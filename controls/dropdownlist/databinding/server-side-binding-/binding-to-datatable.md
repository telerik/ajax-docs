---
title: Binding to DataTable
page_title: Binding to DataTable | RadDropDownList for ASP.NET AJAX Documentation
description: Binding to DataTable
slug: dropdownlist/databinding/server-side-binding-/binding-to-datatable
tags: binding,to,datatable
published: True
position: 2
---

# Binding to DataTable



## 

**RadDropDownList** can be bound to a **DataTable**, **DataSet**, and **DataView**. The following example shows binding to a **DataTable** object.

The declaration of RadDropDownList object includes no DataSourceID property or `<items>` section:

````ASPNET
<telerik:RadDropDownList RenderMode="Lightweight" ID="RadDropDownList1" runat="server">
</telerik:RadDropDownList>
````



In the **Page_Load** event handler, create and fill the **DataTable** object, then bind it to the RadDropDownList. The **DataBind** method must be called after setting the **DataSource** property.



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

