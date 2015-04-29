---
title: Server-side Selection
page_title: Server-side Selection | RadTreeList for ASP.NET AJAX Documentation
description: Server-side Selection
slug: treelist/functionality/selecting/server-side-selection
tags: server-side,selection
published: True
position: 1
---

# Server-side Selection



There might be scenarios where you need to perform server-side selection for the RadTreeList items.For that purpose, you can use one of the below approaches:

* Add a **TreeListSelectColumn** and provide the ability to the user toselect the desired items through it.

* Use server-side code to programmatically select the treelist items.

In both cases, to enable multi-item selection, you need to set the RadTreeList **AllowMultiItemSelection** property to **true**.

## Using the TreeListSelectColumn

RadTreeList server-side selection is enabled for the users once you add the **TreeListSelectColumn** to the RadTreeList Columns collection. You do not need toset any additional properties. Then checking the checkbox rendered in the column marks the correspondingitem as selected. As a result, postback is performed and the **ItemCommand** eventis fired with command name **RadTreeList.SelectCommandName**. To deselect an item,one should uncheck the checkbox in the select column. Then again postback is performed and theItemCommand event is fired with command name **RadTreeList.DeselectCommandName**.



````ASPNET
<telerik:RadTreeList ID="RadTreeList1" runat="server" DataKeyNames="EmployeeID" DataSourceID="SqlDataSource1"
	ParentDataKeyNames="ReportsTo" AllowMultiItemSelection="True" OnItemCommand="RadTreeList1_ItemCommand">
	<Columns>
		<telerik:TreeListSelectColumn UniqueName="SelectColumn">
		</telerik:TreeListSelectColumn>
	</Columns>
</telerik:RadTreeList>
<asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:NorthwindConnectionString %>"
	SelectCommand="SELECT [EmployeeID], [LastName], [FirstName], [Title], [TitleOfCourtesy], [City], [ReportsTo] FROM [Employees]">
</asp:SqlDataSource>
````
````C#
protected void RadTreeList1_ItemCommand(object sender, Telerik.Web.UI.TreeListCommandEventArgs e)
{
	if (e.CommandName == RadTreeList.SelectCommandName)
	{
		//item is being selected    
	}
	if (e.CommandName == RadTreeList.DeselectCommandName)
	{
		//item is being deselected    
	}
}			
````
````VB.NET
Protected Sub RadTreeList1_ItemCommand(ByVal sender As Object, ByVal e As Telerik.Web.UI.TreeListCommandEventArgs)
	If e.CommandName = RadTreeList.SelectCommandName Then
		'item is being selected    
	End If
	If e.CommandName = RadTreeList.DeselectCommandName Then
		'item is being deselected    
	End If
End Sub
````


## Programmatic items selection

To select an item/items with server-side code, you can set the particular item/items **Selected** property to **true**:



````C#
protected void Page_PreRender(object sender, EventArgs e)
{
	TreeListDataItem item = RadTreeList1.Items[0];
	item.Selected = true;
}			
````
````VB.NET
Protected Sub Page_PreRender(ByVal sender As Object, ByVal e As EventArgs) Handles Me.PreRender
	Dim item As TreeListDataItem = RadTreeList1.Items(0)
	item.Selected = True
End Sub
````


## Deselecting items programmatically

To deselect an item/items programmatically, set its **Selected** property to **false**.

You can also call the **ClearSelectedItems()** method of the RadTreeList controlto deselect all selected items which are visible on the current page.
