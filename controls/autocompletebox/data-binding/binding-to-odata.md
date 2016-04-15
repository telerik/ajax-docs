---
title: Binding to OData
page_title: Binding to OData | RadAutoCompleteBox for ASP.NET AJAX Documentation
description: Binding to OData
slug: autocompletebox/data-binding/binding-to-odata
tags: binding,to,odata
published: True
position: 6
---

# Binding to OData



## 

RadAutoCompleteBox can be bound to an OData service. The following application scenario shows an example of RadAutoCompleteBox bound to RadODataDataSource.



````ASPNET
<telerik:RadODataDataSource runat="server" ID="RadODataDataSource1">
	<Transport>
		<Read Url="http://demos.kendoui.com/service/Northwind.svc/" />
	</Transport>
	<Schema>
		<telerik:DataModel ModelID="Customer" Set="Customers">
			<telerik:DataModelField FieldName="CustomerID" />
			<telerik:DataModelField FieldName="CompanyName" />
			<telerik:DataModelField FieldName="ContactName" />
		</telerik:DataModel>
	</Schema>
</telerik:RadODataDataSource>

<telerik:RadAutoCompleteBox RenderMode="Lightweight" runat="server" ID="RadAutoCompleteBox1" ODataDataSourceID="RadODataDataSource1"
	DropDownHeight="500px" Width="500px" DataModelID="Customer" DataTextField="CompanyName"
	DataValueField="CustomerID">
</telerik:RadAutoCompleteBox>
````


# See Also

 * [Overview]({%slug autocompletebox/client-side-programming/overview%})
