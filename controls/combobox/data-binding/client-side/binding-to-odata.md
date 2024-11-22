---
title: Binding to OData
page_title: Binding to OData - RadComboBox
description: Check our Web Forms article about Binding to OData.
slug: combobox/data-binding/client-side/binding-to-odata
previous_url: controls/combobox/data-binding/binding-to-odata
tags: data-binding, client-side, binding, to, odata
published: True
position: 3
---

# Binding to OData

As from Q3 2011, RadComboBox supports binding to an OData service.	

The Open Data Protocol (OData) is an open web protocol for querying and updating data. The protocol allows the consumers to query data over an `HTTP` protocol and get the result back in formats like `JSONP` and plain `XML`, including data pagination, ordering, or filtering. 

In its current state, RadComboBox supports only data paging.

## Flat OData Binding

Flat OData Binding means binding to a non-hierarchical data. Here is an example which demonstrates how to perform the OData binding on RadComboBox using the RadODataDataSource control.

Set the following properties:

- Set the `EnableLoadOnDemand` property to `true`.
- Set the `ODataDataSourceID` property to the `ID` of the RadODataDataSource component.
- Set the `DataModelID` property to the ID of the data Model defined in the RadODataDataSource component.
- Set the `DataTextField` property to the name of a data source field to be mapped to the ComboBoxItem `Text` property.            
- Set the `DataValueField` property to the name of a data source field to be mapped to the ComboBoxItem `Value` property.  

>caption Markup

````ASPNET
<telerik:RadComboBox RenderMode="Lightweight" ID="RadComboBox1" runat="server" EnableLoadOnDemand="true"
	ODataDataSourceID="RadODataDataSource1" DataModelID="Category"
	DataTextField="CategoryName" DataValueField="CategoryID"
	ShowMoreResultsBox="true" ItemsPerRequest="4">
</telerik:RadComboBox>

<telerik:RadODataDataSource runat="server" ID="RadODataDataSource1">
	<Transport>
		<Read Url="http://services.odata.org/Northwind/Northwind.svc/" DataType="JSONP"/>
	</Transport>
	<Schema>
		<telerik:DataModel ModelID="Category" Set="Categories">
			<telerik:DataModelField FieldName="CategoryID" />
			<telerik:DataModelField FieldName="CategoryName" />
		</telerik:DataModel>
	</Schema>
</telerik:RadODataDataSource>
````

For more information about OData, please refer to [OData Documentation](https://www.odata.org/documentation/).
