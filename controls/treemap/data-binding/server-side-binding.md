---
title: Server-side Binding
page_title: Server-side Binding | UI for ASP.NET AJAX Documentation
description: Server-side Binding
slug: treemap/data-binding/server-side-binding
tags: server-side,binding
published: True
position: 0
---

# Server-side Binding



The following article demonstrates how the __RadTreeMap__ could be bound to __SqlDataSource__.

## 

__RadTreeMap__ can be bound to declarative data source controls like __SqlDataSource, ObjectDataSource, EntityDataSource, OpenAccessDataSource and LinqDataSource__.

The steps listed below demonstrate how to bind the control using __SqlDataSource__.

1. Place the __RadTreeMap__ control on the page.

1. Add __SqlDataSource__ control to the page and set the __SelectCommand__ appropriately. In the __SelectCommand__ you should enumerate the desired fields, which you need to bind the control against and the __ParentID__, so that the hierarchyof the items could be achieved.

1. Assign the __DataSourceID__ to the __RadTreeMap__.

1. Set the properties of the RadTreeMap (__DataTextField, DataValueField, DataFieldID, DataFieldParentID__), in order to match the desirable fields from the database table.

In the example below, you could observe a possible implementation of the SqlDataSource binding:



````ASPNET
	        <telerik:radtreemap runat="server"
	            id="RadTreeMap1"
	            datasourceid="SqlDataSource1"
	            datafieldid="ID"
	            datafieldparentid="ParentID"
	            datatextfield="Name"
	            datavaluefield="Value">
	        </telerik:radtreemap>
	        <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:CustomConnectionString %>"
	            SelectCommand="SELECT ID, ParentID, Name, Value FROM [TopPaidAthletes]"></asp:SqlDataSource>
````

