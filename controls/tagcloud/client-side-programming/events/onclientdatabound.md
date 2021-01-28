---
title: OnClientDataBound
page_title: OnClientDataBound - RadTagCloud
description: Check our Web Forms article about OnClientDataBound.
slug: tagcloud/client-side-programming/events/onclientdatabound
tags: onclientdatabound
published: True
position: 7
---

# OnClientDataBound



The **OnClientDataBound** event is raised when the **RadTagCloud** object is successfully bound to the requested data.

The event handler receives two arguments:

* **Sender**–the [TagCould object]({%slug tagcloud/client-side-programming/tagcloud-object%}) that fired the event.

* **Event arguments**–an empty event arguments object.

**Example 1**: Shows how you can use the event to alert when the TagCloud is successfully bound.

````ASPNET
<script type="text/javascript">
	function OnClientDataBound(sender, args) {
		alert("TagCloud is successfully bound.");
	}
</script>

<telerik:RadTagCloud RenderMode="Lightweight" ID="tagCloud" runat="server" 
	ClientDataSourceID="tagsDataSource" DataTextField="ProductName"
	DataWeightField="UnitPrice" RenderItemWeight="true" OnClientDataBound="OnClientDataBound" >
</telerik:RadTagCloud>

<telerik:RadClientDataSource ID="TagsDataSource" runat="server">
	<DataSource>
		<WebServiceDataSourceSettings BaseUrl="https://demos.telerik.com/kendo-ui/service/">
			<Select Url="Products" DataType="JSONP" />
		</WebServiceDataSourceSettings>
	</DataSource>
</telerik:RadClientDataSource>
````



# See Also

 * [TagCloud Client-side object]({%slug tagcloud/client-side-programming/tagcloud-object%})

 * [Overview]({%slug tagcloud/client-side-programming/events/overview%})

 * [OnClientItemDataBound]({%slug tagcloud/client-side-programming/events/onclientitemdatabound%})
