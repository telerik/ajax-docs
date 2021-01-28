---
title: OnClientTileListDataBound
page_title: OnClientTileListDataBound - RadTileList
description: Check our Web Forms article about OnClientTileListDataBound.
slug: tilelist/client-side-programming/client-side-events/onclienttilelistdatabound
tags: onclienttilelistdatabound
published: True
position: 10
---

# OnClientTileListDataBound



This article provides information about the **OnClientTileListDataBound** event.


The **OnClientTileListDataBound** event is raised when the TileList data binding is finished.

The event handler receives one arguments - the [RadTileList object]({%slug tilelist/client-side-programming/tilelist-object%}) that fired the event.

**Example 1** demonstrates how to attach a handler to the **OnClientTileListDataBound**	event and use it for custom client-side logic upon application requirements.

**Example 1**: Using **OnClientTileListDataBound** event.

````ASP.NET
<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1" PageSize="8" AllowPaging="true">
	<DataSource>
		<WebServiceDataSourceSettings BaseUrl="http://demos.kendoui.com/service/">
			<Select Url="products" DataType="JSONP" />
		</WebServiceDataSourceSettings>
	</DataSource>
</telerik:RadClientDataSource>

<telerik:RadTileList RenderMode="Lightweight" runat="server" ID="RadTileList1" Height="400" 
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
