---
title: Binding to OData
page_title: Binding to OData | UI for ASP.NET AJAX Documentation
description: Binding to OData
slug: searchbox/data-binding/binding-to-odata
tags: binding,to,odata
published: True
position: 4
---

# Binding to OData



## 

RadSearchBox can be bound to an OData service through the RadODataDataSource control. The following application scenario shows an example of RadSearchBox bound to RadODataDataSource.

>tabbedCode

````ASPNET
			 <telerik:RadODataDataSource runat="server" ID="DataSource1">
	            <Transport>
	                <Read Url="http://demos.kendoui.com/service/Northwind.svc/"></Read>
	            </Transport>
	            <Schema>
	                <telerik:DataModel ModelID="Product" Set="Products">
	                    <telerik:DataModelField FieldName="ProductID" />
	                    <telerik:DataModelField FieldName="ProductName" />
	                </telerik:DataModel>
	            </Schema>
	        </telerik:RadODataDataSource>
	
	        <telerik:RadSearchBox runat="server" ID="RadSearchBox1" 
	            ODataDataSourceID="DataSource1"
	            DataModelID="Product"
	            DataKeyNames="ProductID, ProductName"
	            DataValueField="ProductID"
	            DataTextField="ProductName">
	            <DropDownSettings Height="400" Width="300" />
	        </telerik:RadSearchBox>
````
>end
