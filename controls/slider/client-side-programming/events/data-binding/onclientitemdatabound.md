---
title: OnClientItemDataBound
page_title: OnClientItemDataBound - RadSlider
description: Check our Web Forms article about OnClientItemDataBound.
slug: slider/client-side-programming/events/data-binding/onclientitemdatabound
tags: onclientitemdatabound
published: True
position: 2
---

# OnClientItemDataBound

This article demonstrates how you can use the **OnClientItemDataBound** event to manipulate the items of a **RadSlider** that you have bound to a client-side data source.

The **OnClientItemDataBound** event is raised when an item in the slider is data-bound to the provided data source.

The event handler receives two parameters:

* The client-side object of the **RadSlider** instance that fired the event.

* An event arguments object containing the following methods:

	* **get_dataItem()** - returns the client-side data object of the slider’s item.

	* **get_sliderItem()** - returns the client-side object of the slider’s item.

You can check in **Example 1** how this event can be used for modifying the text in the slider items after they are data bound.

>caption Example 1: Using the **OnClientItemDataBound** event.

````ASP.NET
<script type="text/javascript">
	function sliderItemDataBound(sender, eventArgs) {
		eventArgs.get_sliderItem().text += " RoomID: " + eventArgs.get_dataItem().RoomID;
	}
</script>
<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1" PageSize="10" AllowPaging="true">
	<DataSource>
		<WebServiceDataSourceSettings BaseUrl="http://demos.kendoui.com/service/">
			<Select Url="Meetings" DataType="JSONP" />
		</WebServiceDataSourceSettings>
	</DataSource>
</telerik:RadClientDataSource>
<telerik:RadSlider RenderMode="Lightweight" runat="server" ID="RadSlider1" Width="800px" Height="150px" ItemType="Item" 
	ClientDataSourceID="RadClientDataSource1" OnClientItemDataBound="sliderItemDataBound">
	<ItemBinding TextField="Title" ToolTipField="Description" ValueField="Date"></ItemBinding>
</telerik:RadSlider>
<span id="Span2"></span>
````

## See Also

 * [RadSlider Client-side Data Binding]({%slug slider/data-binding/client-side-data-binding%})

 * [RadSlider OnClientDataBound]({%slug slider/client-side-programming/events/data-binding/onclientdatabound%})

 * [RadSlider OnClientItemDataBinding]({%slug slider/client-side-programming/events/data-binding/onclientitemdatabinding%})
