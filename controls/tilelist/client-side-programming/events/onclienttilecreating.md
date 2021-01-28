---
title: OnClientTileCreating
page_title: OnClientTileCreating - RadTileList
description: Check our Web Forms article about OnClientTileCreating.
slug: tilelist/client-side-programming/client-side-events/onclienttilecreating
tags: onclienttilecreating
published: True
position: 14
---

# OnClientTileCreating



This article demonstrates how the **OnClientTileCreating** event can be used to cancel tile creation upon custom logic.



The **OnClientTileCreating** event is raised before the tile is initialized by the TileList.

The event handler receives two arguments:

1. the [RadTileList object]({%slug tilelist/client-side-programming/tilelist-object%}) that fired the event

1. an event arguments object that exposes the following methods


>caption OnClientTileCreating event arguments object

|  **Name**  |  **Return type**  |  **Arguments**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|get_cancel()|bool||Gets a value that indicates whether the tile creation is canceled.|
|get_dataItem()|object||Gets the data source object.|
|get_tileData()|object||Gets the data that will be generated as tile by the TileList.|
|set_cancel()||bool|Sets whether the tile creation will be canceled (if true is passed).|
|set_tileData()||object|Sets an object that will be created as tile by the TileList.|

**Example 1** demonstrates how to use the **OnClientTileCreating** event to cancel the tile creation upon some sample logic.

**Example 1**: Using **OnClientTileCreating** event.

````ASP.NET
<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1" AllowPaging="true" PageSize="10">
	<DataSource>
		<WebServiceDataSourceSettings BaseUrl="http://demos.kendoui.com/service/">
			<Select Url="products" DataType="JSONP" />
		</WebServiceDataSourceSettings>
	</DataSource>
</telerik:RadClientDataSource>

<telerik:RadTileList RenderMode="Lightweight" runat="server" ID="RadTileList1" Height="400"
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
