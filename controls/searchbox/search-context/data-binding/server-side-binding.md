---
title: Server-side Binding
page_title: Server-side Binding | RadSearchBox for ASP.NET AJAX Documentation
description: Server-side Binding
slug: searchbox/search-context/data-binding/server-side-binding
tags: server-side,binding
published: True
position: 2
---

# Server-side Binding


SearchContext can be easily bound declaratively to some DataSource by setting DatasourceID, DataTextField and DataKeyField properties to the desired fields so that the DataKeyField is the same as the one set to DataContextKeyField of Searchbox control.In server side bindingImageUrl property can be assigned to the SearchContextItem in the ItemDataBound of SearchContext as it is achieved in the code below:

````ASPNET
<telerik:RadSearchBox RenderMode="Lightweight" ID="RadSearchBox3" runat="server" Width="500" DataSourceID="SqlDataSource3" 
		DataTextField="LastName" DataValueField="FirstName" DataContextKeyField="EmployeeID" >
	<SearchContext DataSourceID="SqlDataSource3" DataTextField="City" DataKeyField="EmployeeID">
	</SearchContext>
</telerik:RadSearchBox>
<asp:SqlDataSource ID="SqlDataSource3" runat="server" 
	ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
		SelectCommand="SELECT [LastName], [FirstName], [EmployeeID],[City], [PhotoPath] FROM [Employees]" >
</asp:SqlDataSource>
````





````C#
	
protected void Page_Load(object sender, EventArgs e)
{
	RadSearchBox3.SearchContext.ItemDataBound += SearchContext_ItemDataBound;
}

void SearchContext_ItemDataBound(object sender, SearchBoxContextItemEventArgs e)
{
	e.Item.ImageUrl = ((DataRowView)e.Item.DataItem)["PhotoPath"].ToString();
}
	
````
````VB.NET
	
Protected Sub Page_Load(sender As Object, e As EventArgs)
	RadSearchBox3.SearchContext.ItemDataBound += SearchContext_ItemDataBound
End Sub

Private Sub SearchContext_ItemDataBound(sender As Object, e As SearchBoxContextItemEventArgs)
	e.Item.ImageUrl = DirectCast(e.Item.DataItem, DataRowView)("PhotoPath").ToString()

End Sub
	
````

