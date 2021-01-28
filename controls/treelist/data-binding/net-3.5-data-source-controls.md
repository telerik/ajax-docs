---
title: .NET 3.5 Data Source Controls
page_title: .NET 3.5 Data Source Controls - RadTreeList
description: Check our Web Forms article about .NET 3.5 Data Source Controls.
slug: treelist/data-binding/net-3.5-data-source-controls
tags: .net,3.5,data,source,controls
published: True
position: 2
previous_url: controls/treelist/data-binding/.net-3.5-data-source-controls
---

# .NET 3.5 Data Source Controls



## 

RadTreeList can be bound to all ASP 3.5 DataSource control types:

* LinqDataSource

* EntityDataSource

All you need to do is set the **DataSourceID** property of the TreeList tothe ID of the Data Source control and the corresponding **DataKeyNames** and **ParentDataKeyNames**. Then you can use ASP.NET binding expressions (Eval or Bind)for the fields that will be visualized in the treelist's body.

Refer to the code snippet in the next paragraph:

````ASPNET
<telerik:RadTreeList RenderMode="Lightweight" runat="server" ID="TreeList1" DataSourceID="LinqDataSource1"
	AllowPaging="true" PageSize="5" DataKeyNames="id" ParentDataKeyNames="parentId">
</telerik:RadTreeList>
<asp:LinqDataSource runat="server" ID="LinqDataSource1" ContextTypeName="TelerikSamplesDataContext"
	TableName="Links">
</asp:LinqDataSource>
````


