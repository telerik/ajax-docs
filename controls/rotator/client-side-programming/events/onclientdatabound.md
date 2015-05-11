---
title: OnClientDataBound
page_title: OnClientDataBound | RadRotator for ASP.NET AJAX Documentation
description: OnClientDataBound
slug: rotator/client-side-programming/events/onclientdatabound
tags: onclientdatabound
published: True
position: 11
---

# OnClientDataBound

This article demonstrates how the **OnClientDataBound** event can be used to trigger a logic when the data binding of the **RadRortator** is finished.

The event handler receives only one parameter. The **RadRotator** instance that fired the event.

**Example 1** demonstrates how to use the **OnClientDataBound** event to show an alert in the browser when the data binding is finished.

**Example 1**: Using the **OnClientDataBound** event.

````ASP.NET
<telerik:RadClientDataSource runat="server" ID="RadClientDataSource1" PageSize="5" AllowPaging="true">
	<DataSource>
		<WebServiceDataSourceSettings BaseUrl="http://demos.kendoui.com/service/">
			<Select Url="Products" DataType="JSONP" />
		</WebServiceDataSourceSettings>
	</DataSource>
</telerik:RadClientDataSource>

<telerik:RadRotator runat="server" ID="Rotator" ClientDataSourceID="RadClientDataSource1"
	OnClientDataBound="OnClientDataBound">
	<ClientTemplate>
	<span class="productName">#= ProductName #</span>
	</ClientTemplate>
</telerik:RadRotator>

<script type="text/javascript">
	function OnClientDataBound(sender) {
		alert("RadRotator control is data bound!");
	}
</script>
````

# See Also

 * [Client-side Data Binding]({%slug rotator/data-binding/client-side-data-binding%})
