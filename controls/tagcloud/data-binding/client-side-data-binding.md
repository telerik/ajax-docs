---
title: Client-side Data Binding
page_title: Client-side Data Binding | UI for ASP.NET AJAX Documentation
description: Client-side Data Binding
slug: tagcloud/data-binding/client-side-data-binding
tags: client-side,data,binding
published: True
position: 4
---

# Client-side Data Binding



This article introduces the client-side data binding feature of the __RadTagCloud__ control.

## Getting Started with RadTagCloud’s Client-side Data Binding

You can data bind the tag cloud to various types of data sources to populate its items. You can use the __RadClientDataSource__ control or call the __dataBind__ method after the data source is specified via the __set_dataSource__ method, shown in the tag cloud's [client-side API]({%slug tagcloud/client-side-programming/tagcloud-object%}).

You should define at least the __DataTextField__ property of the tag cloud and, optionally, the rest of the properties that end with __Field__ (you can check them in the [server-side API article]({%slug tagcloud/server-side-programming/tagcloud-object%}) of the control). These properties provide the field names from which the tag cloud takes thedata for each item, as shown in __Example 1__ and __Example 2__.

There are two events related to the client-side data binding:

* __OnClientItemDataBound__ – gets or sets the name of the JavaScript function that will be called when an item is data bound on the client-side.

* __OnClientDataBound__ – gets or sets the name of the JavaScript function that will be called when the tag cloud is data bound on the client-side.

You can find more information about the parameters the handlers of these events receive in the [client-side API article]({%slug tagcloud/client-side-programming/tagcloud-object%}).

## Simple Data Binding

You can pass an array of JSON literals to the __RadTagCloud__ via its __set_dataSource(data)__ client-side method and then call its__dataBind()__ method. This is useful when you have already retrieved the desired data from a web service or from another appropriate source.You can see how to do this in __Example 1__ and the result is shown in __Figure 1__. Note that the __Data<fieldname>Field__ properties in the markup need to be set.
>caption Figure 1: Tag cloud that is data bound to a simple array.

![Data binding to an array](images/tagcloud-client-side-data-bound-to-array.png)

__Example 1__: Data binding a tag cloud to an array of JSON literals on the client.

````ASPNET
	        <script type="text/javascript">
	            var datasource = [
	                { TextField: "ASP.NET", WeightField: 12 },
	                { TextField: "AJAX", WeightField: 134 },
	                { TextField: "VB", WeightField: 56 },
	                { TextField: "C#", WeightField: 38 },
	                { TextField: "Web", WeightField: 73 },
	                { TextField: "jQuery", WeightField: 23 },
	                { TextField: ".NET", WeightField: 78 },
	                { TextField: "Code", WeightField: 50 }
	            ];
	
	            function OnClientLoad(sender, args) {
	                sender.set_dataSource(datasource);
	                sender.dataBind();
	            }
	        </script>
	        <telerik:RadTagCloud ID="RadTagCloud1" runat="server" OnClientLoad="OnClientLoad" DataTextField="TextField" 
	            DataWeightField="WeightField" RenderItemWeight="true" Width="50em">
	        </telerik:RadTagCloud>
````



## Using a RadClientDataSource Control for Data Binding

The __RadClientDataSource__ control allows you to connect to a web service and fetch data that you can bind to any appropriate Telerik control. After configuringthe client data source, all you need is to set its __ID__ to the __ClientDataSourceID__ property of the tag cloud control. You can see thisapproach in __Example 2__ and the rendered result in __Figure 2__. Setting the required __Data<fieldname>Field__properties in the markup or in the code-behind is necessary for the operation to succeed.
>caption Figure 2: Tag cloud that is data bound to RadClientDataSource.

![Data binding to ClientDataSource](images/tagcloud-client-side-data-bound-to-client-data-source.png)

__Example 2__: Using RadClientDataSource control for data binding a RadTagCloud.

````ASPNET
	        <telerik:RadTagCloud ID="RadTagCloud1" runat="server" ClientDataSourceID="tagsDataSource" DataTextField="ProductName" 
	            DataWeightField="UnitPrice" RenderItemWeight="true" Width="50em">
	        </telerik:RadTagCloud>
	        <telerik:RadClientDataSource ID="TagsDataSource" runat="server">
	            <DataSource>
	                <WebServiceDataSourceSettings BaseUrl="http://demos.telerik.com/kendo-ui/service/">
	                    <Select Url="Products" DataType="JSONP" />
	                </WebServiceDataSourceSettings>
	            </DataSource>
	            <Schema>
	                <Model>
	                    <telerik:ClientDataSourceModelField FieldName="ProductID" DataType="Number" />
	                </Model>
	            </Schema>
	            <FilterExpression>
	                <telerik:ClientDataSourceFilterEntry FieldName="ProductID" Operator="LessThan" Value="20" />
	            </FilterExpression>
	        </telerik:RadClientDataSource>
````



# See Also

 * [RadTagCloud client-side]({%slug tagcloud/client-side-programming/tagcloud-object%})

 * [RadTagCloud server-side]({%slug tagcloud/client-side-programming/tagcloud-object%})[RadClientDataSource Overview](1ef67ca5-56c3-42a5-acd9-d4add74507c7)
