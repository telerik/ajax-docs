---
title: OnClientItemDataBinding
page_title: OnClientItemDataBinding | RadSlider for ASP.NET AJAX Documentation
description: OnClientItemDataBinding
slug: slider/client-side-programming/events/data-binding/onclientitemdatabinding
tags: onclientitemdatabinding
published: True
position: 1
---

# OnClientItemDataBinding

This article demonstrates how you can use the **OnClientItemDataBinding** event to manipulate the items of a **RadSlider** before they are bound to a client-side data source.

The **OnClientItemDataBinding** event is raised just before an item in the slider is data-bound to the provided data source.

The event handler receives two parameters:

* The client-side object of the **RadSlider** instance that fired the event.

* An event arguments object containing the following methods:

	* **get_dataItem()** - returns the client-side data object of the slider’s item.

	* **get_cancel()** - returns a boolean value that indicates whether the event was canceled. **True** means the event is canceled.

	* **set_cancel(** -sets a boolean value that indicates whether the event will be canceled. Setting **true** means the event will be canceled.

You can check in **Example 1** how this event can be used for canceling the data binding of items based on one of its parameters.

>caption Example 1: Using the **OnClientItemDataBinding** event.

````ASP.NET
<script type="text/javascript">
	function sliderItemDataBinding(sender, eventArgs) {
		eventArgs.set_cancel(eventArgs.get_dataItem().IsAllDay);
	}
</script>
<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1" PageSize="10" AllowPaging="true">
	<DataSource>
		<WebServiceDataSourceSettings BaseUrl="http://demos.kendoui.com/service/">
			<Select Url="Meetings" DataType="JSONP" />
		</WebServiceDataSourceSettings>
	</DataSource>
</telerik:RadClientDataSource>
<telerik:RadSlider runat="server" ID="RadSlider1" Width="800px" Height="100px" ItemType="Item" 
	ClientDataSourceID="RadClientDataSource1" OnClientItemDataBinding="sliderItemDataBinding">
	<ItemBinding TextField="Title" ToolTipField="Description" ValueField="Date"></ItemBinding>
</telerik:RadSlider>
<span id="Span1"></span>
````



## See Also

 * [RadSlider Client-side Data Binding]({%slug slider/data-binding/client-side-data-binding%})

 * [RadSlider OnClientDataBound]({%slug slider/client-side-programming/events/data-binding/onclientdatabound%})

 * [RadSlider OnClientItemDataBound]({%slug slider/client-side-programming/events/data-binding/onclientitemdatabound%})
