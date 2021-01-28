---
title: OnClientDataBound
page_title: OnClientDataBound - RadSlider
description: Check our Web Forms article about OnClientDataBound.
slug: slider/client-side-programming/events/data-binding/onclientdatabound
tags: onclientdatabound
published: True
position: 0
---

# OnClientDataBound

This article demonstrates how you can use the **OnClientDataBound** event to execute a script when the data binding of **RadSlider** is finished.

The only parameter the event handler receives is the client-side object of the slider that fired the event.

You can check in **Example 1** how this event can be used for notifying the user that the data binding of the slider is finished.

>caption Example 1: Using the OnClientDataBound event.

````ASP.NET
<script type="text/javascript">
	function sliderDataBound(sender) {
		$get("message").innerHTML = "RadRotator control is data bound with " + sender.get_itemData().length + " items!";
	}
</script>
<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1" PageSize="10" AllowPaging="true">
	<DataSource>
		<WebServiceDataSourceSettings BaseUrl="http://demos.kendoui.com/service/">
			<Select Url="Meetings" DataType="JSONP" />
		</WebServiceDataSourceSettings>
	</DataSource>
</telerik:RadClientDataSource>
<telerik:RadSlider RenderMode="Lightweight" runat="server" ID="RadSlider2" Width="800px" Height="100px" ItemType="Item" 
	ClientDataSourceID="RadClientDataSource1" OnClientDataBound="sliderDataBound">
	<ItemBinding TextField="Title" ToolTipField="Description" ValueField="Date"></ItemBinding>
</telerik:RadSlider>
<span id="message"></span>	
````



## See Also

 * [RadSlider Client-side Data Binding]({%slug slider/data-binding/client-side-data-binding%})

 * [RadSlider OnClientItemDataBinding]({%slug slider/client-side-programming/events/data-binding/onclientitemdatabinding%})

 * [RadSlider OnClientItemDataBound]({%slug slider/client-side-programming/events/data-binding/onclientitemdatabound%})
