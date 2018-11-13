---
title: Web Service Binding
page_title: Web Service Binding | RadMenu for ASP.NET AJAX Documentation
description: Web Service Binding
slug: menu/data-binding/web-service-binding
tags: web,service,binding
published: True
position: 9
---

# Web Service Binding


## 

You can load child items in a menu dynamically through a Web service. The following steps describe how to configure **RadMenu** so that it can use a Web service to supply child items:

1. Add the parent items to your menu using the [RadMenu Item Builder]({%slug menu/design-time/radmenu-item-builder%}). For each item whose child items are to be added using the Web service, set its **ExpandMode** property to "WebService".

1. In the properties pane for the **RadMenu** component, set the **WebServiceSettings** property to identify the Web service and service method:

* Set the **Path** sub-property to the URL for the Web service.

* Set the **Method** sub-property to the name of the method of the Web service that supplies child items.

* Set the **UseHttpGet** sub-property to *True* to change the default HTTP method (**POST)**. This property is added in Q1 2009 release

>note The **WebServiceSettings** property is global to the **RadMenu** object. You can't use separate methods on the Web service for different parent menu items.
>


1. Optionally, set the **[OnClientItemPopulating property]({%slug menu/client-side-programming/events/onclientitempopulating%})** to a client-side event handler that passes context information to the Web service. The Web service can use this context information to determine what child items to return or what properties to set on those child items.

1. Optionally, set the **[OnClientItemPopulated]({%slug menu/client-side-programming/events/onclientitempopulated%})** and **[OnClientItemPopulationFailed]({%slug menu/client-side-programming/events/onclientitempopulationfailed%})** properties to client-side event handlers that respond when the Web service has successfully loaded child items or when the Web service has generated an error while trying to service the item request, respectively.

1. Optionally, supply a Loading Status template by adding a **LoadingStatusTemplate** section to your RadMenu declaration. The Loading Status template acts as a placeholder for the group of child items while the Web service handles the request for items.

The following example shows a **RadMenu** that fetches all child items from a Web Service. The LoadingStatusTemplate appears while the Web service is handling the request for items.

>note You can obtain the parent item's **Text** and **Value** from the **RadMenuItemData** parameter passed to the the WebService's method.
>public RadMenuItemData[] GetMenuCategories( **RadMenuItemData**  **item** , object context){ **item.Text** //returns the **Text** of the parent item, whose child items are being populated **item.Value** //returns the **Value** of the parent item, whose child items are being populated}
>


````ASP.NET
<telerik:RadMenu RenderMode="Lightweight" ID="RadMenu1" runat="server" Skin="Default">
	<WebServiceSettings Path="ProductCategories.asmx" Method="GetMenuCategories" />
	<LoadingStatusTemplate>
		<asp:Image runat="server" ID="LoadingImage" ImageUrl="~/Ajax/Img/loading7.gif" ToolTip="Loading..."
			Width="81px" Height="21px" />
	</LoadingStatusTemplate>
	<Items>
		<telerik:RadMenuItem Text="Products" Value="1" ExpandMode="WebService">
		</telerik:RadMenuItem>
		<telerik:RadMenuItem Text="Purchase" Value="132" ExpandMode="WebService">
		</telerik:RadMenuItem>
		<telerik:RadMenuItem Text="Support" Value="141" ExpandMode="WebService">
		</telerik:RadMenuItem>
		<telerik:RadMenuItem Text="Community" Value="155" ExpandMode="WebService">
		</telerik:RadMenuItem>
		<telerik:RadMenuItem Text="Corporate" Value="164" ExpandMode="WebService">
		</telerik:RadMenuItem>
	</Items>
</telerik:RadMenu>
````

To use the integrated support, the Web service should have the following signature:


````C#
public RadMenuItemData[] GetMenuCategories(RadMenuItemData item, object context)
{
	DataTable productCategories = GetProductCategories(item.Value);
	List<RadMenuItemData> result = new List<RadMenuItemData>();
	foreach (DataRow row in productCategories.Rows)
	{
		RadMenuItemData itemData = new RadMenuItemData();
		itemData.Text = row["Title"].ToString(); 
		itemData.Value = row["CategoryId"].ToString();
		if (Convert.ToInt32(row["ChildrenCount"]) > 0) 
		{ 
			itemData.ExpandMode = MenuItemExpandMode.WebService;
		}
		result.Add(itemData);
	}
	return result.ToArray();
}
````
````VB.NET
Public Function GetMenuCategories(ByVal item As RadMenuItemData, ByVal context As Object) As RadMenuItemData()
	Dim productCategories As DataTable = GetProductCategories(item.Value)
	Dim result As New List(Of RadMenuItemData)()
	For Each row As DataRow In productCategories.Rows
		Dim itemData As New RadMenuItemData()
		itemData.Text = row("Title").ToString()
		itemData.Value = row("CategoryId").ToString()
		If Convert.ToInt32(row("ChildrenCount")) > 0 Then
			itemData.ExpandMode = MenuItemExpandMode.WebService
		End If
		result.Add(itemData)
	Next
	Return result.ToArray()
End Function	
````

For a live example of using a Web service to populate child items, see [Populating from a Web Service](http://demos.telerik.com/aspnet-ajax/Menu/Examples/Programming/WebService/DefaultCS.aspx).
