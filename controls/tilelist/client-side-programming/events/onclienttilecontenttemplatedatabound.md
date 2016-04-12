---
title: OnClientTileContentTemplateDataBound
page_title: OnClientTileContentTemplateDataBound | RadTileList for ASP.NET AJAX Documentation
description: OnClientTileContentTemplateDataBound
slug: tilelist/client-side-programming/client-side-events/onclienttilecontenttemplatedatabound
tags: onclienttilecontenttemplatedatabound
published: True
position: 12
---

# OnClientTileContentTemplateDataBound



This article provides information about the **OnClientTileContentTemplateDataBound** event.



The **OnClientTileContentTemplateDataBound** event is raised before rendering the **ClientContentTemplate** in the browser.

The event handler receives two arguments:

1. the [RadTileList object]({%slug tilelist/client-side-programming/tilelist-object%}) that fired the event

1. an event arguments object that exposes the following methods


>caption OnClientTileContentTemplateDataBound event arguments object

|  **Name**  |  **Return type**  |  **Arguments**  |  **Description**  |
| ------ | ------ | ------ | ------ |
|get_dataItem()|object||Gets the data source object.|
|get_html()|string||Gets the HTML code that is going to be rendered.|
|set_html(string)||string|Sets the HTML that is going to be rendered.|

**Example 1** demonstrates how to use the **OnClientTileContentTemplateDataBound** event to change theoriginal HTML upon a client-side logic.

**Example 1**: Using **OnClientTileContentTemplateDataBound** event.

````ASP.NET
<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1" PageSize="8" AllowPaging="true">
	<DataSource>
		<WebServiceDataSourceSettings BaseUrl="http://demos.kendoui.com/service/">
			<Select Url="products" DataType="JSONP" />
		</WebServiceDataSourceSettings>
	</DataSource>
</telerik:RadClientDataSource>

<telerik:RadTileList RenderMode="Lightweight" runat="server" ID="RadTileList1" Height="400"
	ClientDataSourceID="RadClientDataSource1" OnClientTileContentTemplateDataBound="OnClientTileContentTemplateDataBound">
	<DataBindings>
		<CommonTileBinding TileType="RadContentTemplateTile" DataNameField="ProductID" />
		<ContentTemplateTileBinding>
			<ClientContentTemplate>
		<div style="width:150px; height:150px; background-color:antiquewhite;">
			<h4 style="text-align:center; margin:0; min-height:40px;">#= ProductName #</h4>
			<table style="text-align:right; width:100%;">
				<tbody>
					<tr>
						<td>Price: </td>
						<td>#= UnitPrice #$</td>
					</tr>
					<tr>
						<td>Units In Stock: </td>
						<td>#= UnitsInStock #</td>
					</tr>
				</tbody>
			</table>
		</div>
			</ClientContentTemplate>
		</ContentTemplateTileBinding>
	</DataBindings>
</telerik:RadTileList>


<script type="text/javascript">
	function OnClientTileContentTemplateDataBound(sender, args) {
		var discontinued = args.get_dataItem().Discontinued;
		var originalHtml = args.get_html();

		if (discontinued) {
			args.set_html("<div style='position:relative;'>" +
				originalHtml +
				"<h4 style='text-align:center; background-color:red; position:absolute; bottom:0;'>Discontinued</h4>");
		}
	}
</script>
````



# See Also

 * [Client-side Data Binding]({%slug tilelist/data-binding/client-side-data-binding%})
