---
title: OnClientDataBound
page_title: OnClientDataBound | UI for ASP.NET AJAX Documentation
description: OnClientDataBound
slug: rotator/client-side-programming/events/onclientdatabound
tags: onclientdatabound
published: True
position: 11
---

# OnClientDataBound



This article demonstrates how the __OnClientDataBound__ event can be used to trigger a logic when the data binding of the __RadRortator__ is finished.

## 

The event handler receives only one parameter. The __RadRotator__ instance that fired the event.

__Example 1__ demonstrates how to use the __OnClientDataBound__ event to show an alert in the browser when the data binding is finished.

__Example 1__: Using the __OnClientDataBound__ event.

````ASPNET
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
