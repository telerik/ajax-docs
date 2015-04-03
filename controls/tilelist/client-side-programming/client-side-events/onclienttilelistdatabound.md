---
title: OnClientTileListDataBound
page_title: OnClientTileListDataBound | UI for ASP.NET AJAX Documentation
description: OnClientTileListDataBound
slug: tilelist/client-side-programming/client-side-events/onclienttilelistdatabound
tags: onclienttilelistdatabound
published: True
position: 10
---

# OnClientTileListDataBound



This article provides information about the __OnClientTileListDataBound__ event.

## 

The __OnClientTileListDataBound__ event is raised when the TileList data binding is finished.

The event handler receives one arguments - the [RadTileList object]({%slug tilelist/client-side-programming/tilelist-object%}) that fired the event.

__Example 1__ demonstrates how to attach a handler to the __OnClientTileListDataBound__	event and use it for custom client-side logic upon application requirements.

__Example 1__: Using __OnClientTileListDataBound__ event.

````ASPNET
			<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1" PageSize="8" AllowPaging="true">
				<DataSource>
					<WebServiceDataSourceSettings BaseUrl="http://demos.kendoui.com/service/">
						<Select Url="products" DataType="JSONP" />
					</WebServiceDataSourceSettings>
				</DataSource>
			</telerik:RadClientDataSource>
	
			<telerik:RadTileList runat="server" ID="RadTileList1" Height="400" 
				ClientDataSourceID="RadClientDataSource1" OnClientTileListDataBound="OnClientTileListDataBound">
				<DataBindings>
					<CommonTileBinding TileType="RadTextTile" DataNameField="ProductID" />
					<TextTileBinding DataTextField="ProductName" />
				</DataBindings>
			</telerik:RadTileList>
	
	
			<script type="text/javascript">
				function OnClientTileListDataBound(sender, args) {
					alert("TileList with ID " + sender.get_id() + " is bound!");
				}
			</script>
````



# See Also

 * [Client-side Data Binding]({%slug tilelist/data-binding/client-side-data-binding%})
