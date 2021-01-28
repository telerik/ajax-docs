---
title: Binding to OData
page_title: Binding to OData - RadDropDownList
description: Check our Web Forms article about Binding to OData.
slug: dropdownlist/databinding/client-side-binding/binding-to-odata
tags: binding,to,odata
published: True
position: 1
---

# Binding to OData



RadDropDownList supports binding to an OData service. The Open Data Protocol (OData) is an open web protocol for querying and updating data. The protocol allows the consumers to query data over an HTTP protocol and get the result back in formats like JSONP and plain XML, including data pagination, ordering, or filtering. In its current state, RadDropDownList supports only data paging. The binding can be flat or hierarchical; currently RadDropDownList can be bound to a data only by the flat binding method.

## Flat OData Binding

Flat OData Binding means binding to a non-hierarchical data. Here is an example which demonstrates how to perform the OData binding on RadDropDownList using the RadODataDataSource control.

````ASPNET
<telerik:RadODataDataSource runat="server" ID="RadODataDataSource1">
	<Transport>
		<Read Url="http://services.odata.org/Northwind/Northwind.svc/" />
	</Transport>
	<Schema>
		<telerik:DataModel ModelID="Category" Set="Categories">
			<telerik:DataModelField FieldName="CategoryID" />
			<telerik:DataModelField FieldName="CategoryName" />
		</telerik:DataModel>
	</Schema>
</telerik:RadODataDataSource>
<telerik:RadDropDownList RenderMode="Lightweight" ID="RadDropDownList1" runat="server" ODataDataSourceID="RadODataDataSource1"
	DataModelID="Category" DataTextField="CategoryName" DataValueField="CategoryID">
</telerik:RadDropDownList>
````



The applied settings to RadODataSource and RadDropDownList, for a successful data binding, are described below.

* RadDropDownList's **ODataDataSourceID** property takes, as a value, the ID of the RadODataDataSource.

* RadDropDownList's **DataModelID** property takes, as a value, the ID of the DataModel defined in the RadODataDataSource.

* RadDropDownList's **DataTextField** property takes, as a value, the name of the data field from where the text of the items is fetched.

* RadDropDownList's **DataValueField** property takes, as a value, the name of the data field from where the value of the items is fetched.

* The type of the responce data is specified within the RadODataDataSource control, in its Read section by the **DataType** property.The options to choose from are listed below.

	* [JSONP](https://en.wikipedia.org/wiki/JSONP)

	* [XML](https://en.wikipedia.org/wiki/XML)

More information regarding the Entity Data Model (EDM) can be found[here](http://www.odata.org/developers/protocols/overview).
