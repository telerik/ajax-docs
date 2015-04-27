---
title: Binding to OData
page_title: Binding to OData | RadComboBox for ASP.NET AJAX Documentation
description: Binding to OData
slug: combobox/data-binding/binding-to-odata
tags: binding,to,odata
published: True
position: 4
---

# Binding to OData



As from Q3 2011, RadComboBox supports binding to an OData service.	The Open Data Protocol (OData) is an open web protocol for querying and updating data.	The protocol allows the consumers to query data over an HTTP protocol and get the result back in	formats like JSONP and plain XML, including data pagination, ordering, or filtering.	In its current state, RadComboBox supports only data paging.	The binding can be flat or hierarchical; currently RadComboBox can be bound to a data only by the flat binding method.

## Flat OData Binding

Flat OData Binding means binding to a non-hierarchical data. Here is an example which demonstrates how to perform theOData binding on RadComboBox using the RadODataDataSource control.

````ASPNET
	
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

<telerik:RadComboBox ID="RadComboBox1" runat="server" EnableLoadOnDemand="true"
	ODataDataSourceID="RadODataDataSource1" DataModelID="Category"
	DataTextField="CategoryName" DataValueField="CategoryID"
	ShowMoreResultsBox="true" ItemsPerRequest="4">
</telerik:RadComboBox>
	
````



The applied settings to RadODataSource and RadComboBox, for a successful data binding, are described below.

* RadComboBox's **ODataDataSourceID** property takes, as a value, the ID of the RadODataDataSource.

* RadComboBox's **DataModelID** property takes, as a value, the ID of the DataModel defined in the RadODataDataSource.

* RadComboBox's **DataTextField** property takes, as a value, the name of the data field from where thetext of the items is fetched.

* RadComboBox's **DataValueField** property takes, as a value, the name of the data field from where thevalue of the items is fetched.

* The type of the responce data is specified within the RadODataDataSource control, in its Read section by the**DataType** property.The options to choose from are listed below.

	* [JSONP](http://en.wikipedia.org/wiki/JSONP)

	* [XML](http://en.wikipedia.org/wiki/XML)

>note RadComboBox requires its EnableLoadOnDemand property to be set to True in order to be bound to an OData service.
>


More information regarding the Entity Data Model (EDM) can be found [here](http://www.odata.org/developers/protocols/overview).

# See Also

 * [Online demo](http://demos.telerik.com/aspnet-ajax/combobox/examples/loadondemand/odata/defaultcs.aspx)
