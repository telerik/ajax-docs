---
title: OnClientDataBound
page_title: OnClientDataBound | UI for ASP.NET AJAX Documentation
description: OnClientDataBound
slug: slider/client-side-programming/events/data-binding/onclientdatabound
tags: onclientdatabound
published: True
position: 0
---

# OnClientDataBound



This article demonstrates how you can use the __OnClientDataBound__ eventto execute a script when the data binding of __RadSlider__ is finished.

The only parameter the event handler receives is the client-side object of the slider that fired the event.

## 

You can check in __Example 1__ how this event can be used for notifyingthe user that the data binding of the slider is finished.

Example 1: Using the OnClientDataBound event.

````ASPNET
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
	        <telerik:RadSlider runat="server" ID="RadSlider2" Width="800px" Height="100px" ItemType="Item" 
	            ClientDataSourceID="RadClientDataSource1" OnClientDataBound="sliderDataBound">
	            <ItemBinding TextField="Title" ToolTipField="Description" ValueField="Date"></ItemBinding>
	        </telerik:RadSlider>
	        <span id="message"></span>
	
````



# See Also

 * [RadSlider Client-side Data Binding]({%slug slider/data-binding/client-side-data-binding%})

 * [RadSlider OnClientItemDataBinding]({%slug slider/client-side-programming/events/data-binding/onclientitemdatabinding%})

 * [RadSlider OnClientItemDataBound]({%slug slider/client-side-programming/events/data-binding/onclientitemdatabound%})
