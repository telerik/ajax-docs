---
title: Server Templates
page_title: Server Templates | RadSearchBox for ASP.NET AJAX Documentation
description: Server Templates
slug: searchbox/templates/server-templates
tags: server,templates
published: True
position: 2
---

# Server Templates



You can define the ItemTemplate programmatically by assigning a new **ITemplate** instanceto the **ItemTemplate** property of the searchBox, as shown in the code below:

````ASPNET
<telerik:RadSearchBox RenderMode="Lightweight" ID="RadSearchBox1" runat="server" DataSourceID="SqlDataSource1"
	 DataTextField="ProductName"  
	DataKeyNames="ProductId, ProductName"
	DataValueField="ProductId" EmptyMessage="empty message" MaxResultCount="10"> 
	<DropDownSettings Height="240" Width="300" />
	  </telerik:RadSearchBox>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>" 
	SelectCommand="SELECT * FROM [Products]"></asp:SqlDataSource>
````





````C#
	
protected override void OnInit(EventArgs e)
{
	RadSearchBox1.DropDownSettings.ItemTemplate = new SearchBoxDropDownItemTemplate();
	base.OnInit(e);
}

class SearchBoxDropDownItemTemplate : ITemplate
{
	public void InstantiateIn(Control container)
	{
		Label id = new Label();
		id.ID = "idLabel";
		id.CssClass = "idClass";
		id.DataBinding += new EventHandler(id_DataBinding);
		container.Controls.Add(id);

	}
	private void id_DataBinding(object sender, EventArgs e)
	{
		Label target = (Label)sender;
		Telerik.Web.UI.SearchBox.DropDownItem item = (Telerik.Web.UI.SearchBox.DropDownItem)target.BindingContainer;
		string id = Convert.ToString((int)DataBinder.Eval(item.DataItem, "ProductId"));
		target.Text = id;
	}

}
	
	   
````
````VB.NET
	
Partial Public Class Templates
	Inherits System.Web.UI.Page
	Protected Overloads Overrides Sub OnInit(ByVal e As EventArgs)
		RadSearchBox1.DropDownSettings = New SearchBoxDropDownItemTemplate()
		MyBase.OnInit(e)
	End Sub
	Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
		If Not Page.IsPostBack Then
			RadListBox2.DataSourceID = "SqlDataSource1"
			RadListBox2.DataTextField = "Name"
			RadListBox2.DataValueField = "ID"
			RadListBox2.DataBind()
		End If
	End Sub
	Class SearchBoxDropDownItemTemplate
		Implements ITemplate
		Public Sub InstantiateIn(container As System.Web.UI.Control) Implements System.Web.UI.ITemplate.InstantiateIn

			Dim id As New Label()
			id.ID = "idLabel"
			id.CssClass = "idClass"
			AddHandler id.DataBinding, AddressOf id_DataBinding
			container.Controls.Add(id)

		End Sub
		Private Sub id_DataBinding(ByVal sender As Object, ByVal e As EventArgs)
			Dim target As Label = DirectCast(sender, Label)
			Dim item As Telerik.Web.UI.SearchBox.DropDownItem = DirectCast(target.BindingContainer, Telerik.Web.UI.SearchBox.DropDownItem)
			Dim id As String = Convert.ToString(DirectCast(DataBinder.Eval(item.DataItem, "ProductId"), Integer))
			target.Text = id
		End Sub

	End Class
End Class
````

