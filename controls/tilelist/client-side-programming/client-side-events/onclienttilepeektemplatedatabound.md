---
title: OnClientTilePeekTemplateDataBound
page_title: OnClientTilePeekTemplateDataBound | RadTileList for ASP.NET AJAX Documentation
description: OnClientTilePeekTemplateDataBound
slug: tilelist/client-side-programming/client-side-events/onclienttilepeektemplatedatabound
tags: onclienttilepeektemplatedatabound
published: True
position: 13
---

# OnClientTilePeekTemplateDataBound



This article provides information about the **OnClientTilePeekTemplateDataBound** event.

## 

The **OnClientTilePeekTemplateDataBound** event is raised before rendering the [Peek Template]({%slug tilelist/tiles/peek-template%}) in the browser.

The event handler receives two arguments:

1. the [RadTileList object]({%slug tilelist/client-side-programming/tilelist-object%}) that fired the event

1. an event arguments object that exposes the following methods


>caption OnClientTilePeekTemplateDataBound event arguments object

|  **Name**  |  **Return type**  |  **Arguments**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|get_dataItem()|object||Gets the data source object.|
|get_html()|string||Gets the HTML code that is going to be rendered.|
|set_html(string)||string|Sets the HTML that is going to be rendered.|

**Example 1** demonstrates how to use the **OnClientTilePeekTemplateDataBound** event to change the original [Peek Template]({%slug tilelist/tiles/peek-template%}) HTML upon a client-side logic.

**Example 1**: Using **OnClientTilePeekTemplateDataBound** event.

````ASPNET
			<style>
				.peekTemplateContainer.notInStock {
					background-color:red;
				}
			</style>
	
			<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1" PageSize="8" AllowPaging="true">
				<DataSource>
					<WebServiceDataSourceSettings BaseUrl="http://demos.kendoui.com/service/">
						<Select Url="products" DataType="JSONP" />
					</WebServiceDataSourceSettings>
				</DataSource>
			</telerik:RadClientDataSource>
	
			<telerik:RadTileList runat="server" ID="RadTileList1" Width="1015px" Height="500px"
				ClientDataSourceID="RadClientDataSource1"
				OnClientTilePeekTemplateDataBound="OnClientTilePeekTemplateDataBound">
				<DataBindings>
					<CommonTileBinding TileType="RadTextTile" DataNameField="ProductName" DataBadgeValueField="UnitsInStock" />
					<TextTileBinding DataTextField="ProductName" />
					<ClientTilePeekTemplate>
	                              <div class="peekTemplateContainer" >
	                                   <h3>#=ProductName#</h3>
	                                   <div class="peekTemplateTags">
	                                        Price: $#=UnitPrice#<br />
	                                   </div>
	                              </div>
					</ClientTilePeekTemplate>
				</DataBindings>
			</telerik:RadTileList>
	
	
			<script type="text/javascript">
				function OnClientTilePeekTemplateDataBound(sender, args) {
					var dataItem = args.get_dataItem(),
						 html = args.get_html();
	
					if (!dataItem.UnitsInStock) {
						html = html.replace('class="peekTemplateContainer', 'class="peekTemplateContainer notInStock');
						args.set_html(html);
					}
				}
			</script>
````



# See Also

 * [Client-side Data Binding]({%slug tilelist/data-binding/client-side-data-binding%})

 * [Peek Template]({%slug tilelist/tiles/peek-template%})
