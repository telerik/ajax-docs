---
title: OnClientItemDataBound
page_title: OnClientItemDataBound | UI for ASP.NET AJAX Documentation
description: OnClientItemDataBound
slug: tagcloud/client-side-programming/events/onclientitemdatabound
tags: onclientitemdatabound
published: True
position: 8
---

# OnClientItemDataBound



The __OnClientItemDataBound__ event occurs when a __RadTagCloudItem__ is successfully bound to the requested data source item.

## 

The event handler receives two parameters:

1. __Sender__–the [TagCould object]({%slug tagcloud/client-side-programming/tagcloud-object%}) that fired the event.

1. __Event arguments__–event arguments object of type __Sys.EventArgs__, that exposes the following properties and methods:


| Name | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
|get_item||RadTagCloudItem|Returns the client-side object of the clicked item.|
|get_dataItem||Object|Returns the fetched client-side object bound to the item.|

__Example 1:__ Shows how you can use the __OnClientItemDataBound__event to hide items upon client-side programmatic rule base on the data fetched from the data source.

````ASPNET
			<script type="text/javascript">
				function OnClientItemDataBound(sender, args) {
					var item = args.get_item();
					var dataItem = args.get_dataItem();
					var isItemDiscontinued = dataItem.Discontinued;
	
					// Hides the items that are discontinued
					item.set_visible(!isItemDiscontinued);
				}
			</script>
	
			<telerik:RadTagCloud ID="tagCloud" runat="server" 
				ClientDataSourceID="tagsDataSource" DataTextField="ProductName"
				DataWeightField="UnitPrice" RenderItemWeight="true" OnClientItemDataBound="OnClientItemDataBound" >
			</telerik:RadTagCloud>
	
			<telerik:RadClientDataSource ID="TagsDataSource" runat="server">
				<DataSource>
					<WebServiceDataSourceSettings BaseUrl="http://demos.telerik.com/kendo-ui/service/">
						<Select Url="Products" DataType="JSONP" />
					</WebServiceDataSourceSettings>
				</DataSource>
			</telerik:RadClientDataSource>
````



# See Also

 * [TagCloud Client-side object]({%slug tagcloud/client-side-programming/tagcloud-object%})

 * [Overview]({%slug tagcloud/client-side-programming/events/overview%})

 * [OnClientDataBound]({%slug tagcloud/client-side-programming/events/onclientdatabound%})
