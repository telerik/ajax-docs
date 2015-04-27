---
title: Server-side Binding
page_title: Server-side Binding | RadTreeMap for ASP.NET AJAX Documentation
description: Server-side Binding
slug: treemap/data-binding/server-side-binding
tags: server-side,binding
published: True
position: 0
---

# Server-side Binding



The following article demonstrates how the **RadTreeMap** could be bound to **SqlDataSource**.

## 

**RadTreeMap** can be bound to declarative data source controls like **SqlDataSource, ObjectDataSource, EntityDataSource, OpenAccessDataSource and LinqDataSource**.

The steps listed below demonstrate how to bind the control using **SqlDataSource**.

1. Place the **RadTreeMap** control on the page.

1. Add **SqlDataSource** control to the page and set the **SelectCommand** appropriately. In the **SelectCommand** you should enumerate the desired fields, which you need to bind the control against and the **ParentID**, so that the hierarchyof the items could be achieved.

1. Assign the **DataSourceID** to the **RadTreeMap**.

1. Set the properties of the RadTreeMap (**DataTextField, DataValueField, DataFieldID, DataFieldParentID**), in order to match the desirable fields from the database table.

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

