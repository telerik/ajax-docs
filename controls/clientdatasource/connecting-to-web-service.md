---
title: Connecting to Web Service
page_title: Connecting to Web Service | UI for ASP.NET AJAX Documentation
description: Connecting to Web Service
slug: clientdatasource/connecting-to-web-service
tags: connecting,to,web,service
published: True
position: 2
---

# Connecting to Web Service



In this topic, we will show how to bind a DataBound control to a __WebService__ using the __RadClientDataSourceControl__.

## 

* From the __Toolbox__ in __Visual Studio__, drag a __RadClientDataSource__ instances to the design surface of your page.

* Set a __WebService__ using the __Url__ property. In this example we are using "__http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products__"

````C#
	    <telerik:RadClientDataSource ID="RadClientDataSource1" runat="server">
	            <DataSource>
	                <WebServiceDataSourceSettings ServiceType="OData">
	                    <Select Url="http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products" DataType="JSONP" />
	                </WebServiceDataSourceSettings>
	            </DataSource>
	        </telerik:RadClientDataSource>
````



* Configure the __Model Schema__ and set the __Fileds__ for the data source control

````C#
	    <telerik:RadClientDataSource ID="RadClientDataSource1" runat="server">
	            <DataSource>
	                <WebServiceDataSourceSettings ServiceType="OData">
	                    <Select Url="http://demos.telerik.com/kendo-ui/service/Northwind.svc/Products" DataType="JSONP" />
	                </WebServiceDataSourceSettings>
	            </DataSource>
	            <Schema>
	                <Model>
	                    <telerik:ClientDataSourceModelField FieldName="ProductName" DataType="String" />
	                    <telerik:ClientDataSourceModelField FieldName="QuantityPerUnit" DataType="String" />
	                    <telerik:ClientDataSourceModelField FieldName="UnitPrice" DataType="Number" />
	                    <telerik:ClientDataSourceModelField FieldName="UnitsInStock" DataType="Number" />
	                    <telerik:ClientDataSourceModelField FieldName="Discontinued" DataType="Boolean" />
	                </Model>
	            </Schema>
	        </telerik:RadClientDataSource>
````



* Assign the ClientDataSource to the __DataBound__ control.![client-data-source-id](images/client-data-source-id.png)

* The DataBound control will properly retrieve the data from the WebService![client-data-source-grid](images/client-data-source-grid.png)
