---
title: OnClientTileCreating
page_title: OnClientTileCreating | UI for ASP.NET AJAX Documentation
description: OnClientTileCreating
slug: tilelist/client-side-programming/client-side-events/onclienttilecreating
tags: onclienttilecreating
published: True
position: 14
---

# OnClientTileCreating



This article demonstrates how the __OnClientTileCreating__ event can be used to cancel tile creation upon custom logic.

## 

The __OnClientTileCreating__ event is raised before the tile is initialized by the TileList.

The event handler receives two arguments:

1. the [RadTileList object]({%slug tilelist/client-side-programming/tilelist-object%}) that fired the event

1. an event arguments object that exposes the following methods


>caption OnClientTileCreating event arguments object

|  __Name__  |  __Return type__  |  __Arguments__  |  __Description__  |
| ------ | ------ | ------ | ------ |
|get_cancel()|bool||Gets a value that indicates whether the tile creation is canceled.|
|get_dataItem()|object||Gets the data source object.|
|get_tileData()|object||Gets the data that will be generated as tile by the TileList.|
|set_cancel()||bool|Sets whether the tile creation will be canceled (if true is passed).|
|set_tileData()||object|Sets an object that will be created as tile by the TileList.|

__Example 1__ demonstrates how to use the __OnClientTileCreating__ event to cancel the tile creation upon some sample logic.

__Example 1__: Using __OnClientTileCreating__ event.

````ASPNET
			<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1" AllowPaging="true" PageSize="10">
				<DataSource>
					<WebServiceDataSourceSettings BaseUrl="http://demos.kendoui.com/service/">
						<Select Url="products" DataType="JSONP" />
					</WebServiceDataSourceSettings>
				</DataSource>
			</telerik:RadClientDataSource>
	
			<telerik:RadTileList runat="server" ID="RadTileList1" Height="400"
				ClientDataSourceID="RadClientDataSource1" OnClientTileCreating="OnClientTileCreating">
				<DataBindings>
					<CommonTileBinding TileType="RadTextTile" DataNameField="ProductID" DataTitleTextField="UnitsInStock" />
					<TextTileBinding DataTextField="ProductName" />
				</DataBindings>
			</telerik:RadTileList>
	
	
			<script type="text/javascript">
				function OnClientTileCreating(sender, args) {
					var dataItem = args.get_dataItem(),
						unitsInStock = dataItem.UnitsInStock,
						isUnavailable = unitsInStock == 0;
	
					args.set_cancel(isUnavailable);
				}
			</script>
````



# See Also

 * [Client-side Data Binding]({%slug tilelist/data-binding/client-side-data-binding%})
