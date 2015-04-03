---
title: Client-side Data Binding
page_title: Client-side Data Binding | UI for ASP.NET AJAX Documentation
description: Client-side Data Binding
slug: slider/data-binding/client-side-data-binding
tags: client-side,data,binding
published: True
position: 1
---

# Client-side Data Binding



This article introduces the client-side data binding feature of the __RadSlider__ control.

## Getting Started with RadSlider's Client-side Data Binding

You can data bind the slider to various types of data sources to populate its items when its __ItemType__ property is set to __Item__. You can use the __RadClientDataSource__ control or call the __dataBind__ method after the data source is specifiedvia the __set_dataSource__ method, shown in the slider's [client-side API]({%slug slider/client-side-programming/radslider-object%}).

You should define the __TextField__, __ValueField__, __ToolTipField__ properties of the bound slider items in the__ItemBinding__ inner tag of the bound slider. These properties provide the field names from which the slider takes the data for each item, as shownin__Example 1__ and __Example 2__.

There are three events related to the client-side data binding:

* [OnClientDataBound]({%slug slider/client-side-programming/events/data-binding/onclientdatabound%})

* [OnClientItemDataBinding]({%slug slider/client-side-programming/events/data-binding/onclientitemdatabinding%})

* [OnClientItemDataBound]({%slug slider/client-side-programming/events/data-binding/onclientitemdatabound%})

The following two sections will provide more details about the client-side data binding of the slider.

## Simple Data Binding

When you have already retrieved the desired data source from a web service or from another appropriate source, you can use the following approach to databind it to the slider. __Example 1__ demonstrates how you can use a simple JavaScript array for data binding by passing the array as a parameter of the __set_dataSource__ function of __RadSlider__ and then calling __dataBind__. You need to set the properties in the __ItemBinding__ composite property of the slider with the fields in the data source that will populate the corresponding slider item fields. The result of this implementation is shown in __Figure 1__.
>caption Figure 1: Slider that is data bound to a simple array.

![Data binding to a an array on the client](images/slider-client-side-data-bound-to-array.png)

__Example 1__: Data binding a slider to an array on the client.

````ASPNET
	        <script type="text/javascript">
	            var datasource = [
	                { ItemName: "Item 1", ItemValue: 1, ItemToolTip: "Item with value 1." },
	                { ItemName: "Item 2", ItemValue: 2, ItemToolTip: "Item with value 2." },
	                { ItemName: "Item 3", ItemValue: 3, ItemToolTip: "Item with value 3." },
	                { ItemName: "Item 4", ItemValue: 4, ItemToolTip: "Item with value 4." }
	            ];
	
	            function OnClientLoad(sender, args) {
	                sender.set_dataSource(datasource);
	                sender.dataBind();
	            }
	        </script>
	        <telerik:RadSlider runat="server" ID="RadSlider1" Width="400px" Height="70px" ItemType="Item" 
	            OnClientLoad="OnClientLoad">
	            <ItemBinding TextField="ItemName" ToolTipField="ItemToolTip" ValueField="ItemValue">
	            </ItemBinding>
	        </telerik:RadSlider>
````



## Using a RadClientDataSource Control for Data Binding

The __RadClientDataSource__ control allows you to connect to a web service and fetch data that you can bind to any appropriate Telerik control. After configuring the client data source, all you need is to set its __ID__ to the __ClientDataSourceID__property of the slider control. You can see this approach in __Example 2__ and the rendered result in __Figure 2__.
>caption Figure 2: Slider that is data bound to RadClientDataSource.

![slider-client-side-data-bound-to-client-data-source](images/slider-client-side-data-bound-to-client-data-source.png)

__Example 2__: Using __RadClientDataSource__ control for data binding a rotator.

````ASPNET
	        <telerik:RadClientDataSource runat="server" ID="RadClientDataSource1" PageSize="10" AllowPaging="true">
	            <DataSource>
	                <WebServiceDataSourceSettings BaseUrl="http://demos.kendoui.com/service/">
	                    <Select Url="Meetings" DataType="JSONP" />
	                </WebServiceDataSourceSettings>
	            </DataSource>
	        </telerik:RadClientDataSource>
	
	        <telerik:RadSlider runat="server" ID="RadSlider2" Width="800px" Height="100px" ItemType="Item" IsSelectionRangeEnabled="true"
	            SelectionStart="0" SelectionEnd="3" ClientDataSourceID="RadClientDataSource1">
	            <ItemBinding TextField="Title" ToolTipField="Description" ValueField="Date"></ItemBinding>
	        </telerik:RadSlider>
````



# See Also

 * [RadSlider Client-Side Basics]({%slug slider/client-side-programming/overview%})

 * [RadSlider Client Object]({%slug slider/client-side-programming/radslider-object%})

 * [RadSlider OnClientDataBound]({%slug slider/client-side-programming/events/data-binding/onclientdatabound%})

 * [RadSlider OnClientItemDataBinding]({%slug slider/client-side-programming/events/data-binding/onclientitemdatabinding%})

 * [RadSlider OnClientItemDataBound]({%slug slider/client-side-programming/events/data-binding/onclientitemdatabound%})[RadClientDataSource Overview](1ef67ca5-56c3-42a5-acd9-d4add74507c7)
