---
title: OnClientItemDataBound
page_title: OnClientItemDataBound | UI for ASP.NET AJAX Documentation
description: OnClientItemDataBound
slug: slider/client-side-programming/events/data-binding/onclientitemdatabound
tags: onclientitemdatabound
published: True
position: 2
---

# OnClientItemDataBound



This article demonstrates how you can use the __OnClientItemDataBound__ event to manipulate the items of a __RadSlider__ that you have bound to a client-side data source.

## 

The __OnClientItemDataBound__ event is raised when an item in the slider is data-bound to the provided data source.

The event handler receives two parameters:

* The client-side object of the __RadSlider__ instance that fired the event.

* An event arguments object containing the following methods:

* __get_dataItem()__ - returns the client-side data object of the slider’s item.

* __get_sliderItem()__ - returns the client-side object of the slider’s item.

You can check in __Example 1__ how this event can be used for modifying the text in the slider items after they are data bound.

Example 1: Using the __OnClientItemDataBound__ event.

````ASPNET
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
	        <telerik:RadSlider runat="server" ID="RadSlider1" Width="800px" Height="150px" ItemType="Item" 
	            ClientDataSourceID="RadClientDataSource1" OnClientItemDataBound="sliderItemDataBound">
	            <ItemBinding TextField="Title" ToolTipField="Description" ValueField="Date"></ItemBinding>
	        </telerik:RadSlider>
	        <span id="Span2"></span>
````



# See Also

 * [RadSlider Client-side Data Binding]({%slug slider/data-binding/client-side-data-binding%})

 * [RadSlider OnClientDataBound]({%slug slider/client-side-programming/events/data-binding/onclientdatabound%})

 * [RadSlider OnClientItemDataBinding]({%slug slider/client-side-programming/events/data-binding/onclientitemdatabinding%})
