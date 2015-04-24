---
title: Declarative Data Source
page_title: Declarative Data Source | RadPivotGrid for ASP.NET AJAX Documentation
description: Declarative Data Source
slug: pivotgrid/data-binding/declarative-data-source
tags: declarative,data,source
published: True
position: 0
---

# Declarative Data Source



RadPivotGrid can seamlessly be bound to native data source controls, these being:

* SqlDataSource

* ObjectDataSource

* EntityDataSource

* LinqDataSource

## 

The only thing needed once you set up the data source control is to set the pivot grid's **DataSourceID** property to point to the datasource's ID. From there on, all that is left is to specify the fields that you want to appear as columns and those that should come as rows, as well as the fields that you need to display aggregates for.

A sample RadPivotGrid declaration, using an EntityDataSource is shown below:

````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid2" runat="server" DataSourceID="EntityDataSource1"
AllowPaging="true">
<ClientSettings Scrolling-AllowVerticalScroll="true">>
</ClientSettings>
<Fields>
<telerik:PivotGridColumnField DataField="ShipCountry">
</telerik:PivotGridColumnField>
<telerik:PivotGridColumnField DataField="Year">
</telerik:PivotGridColumnField>
<telerik:PivotGridRowField DataField="CategoryName">
</telerik:PivotGridRowField>
<telerik:PivotGridRowField DataField="ProductName">
</telerik:PivotGridRowField>
<telerik:PivotGridAggregateField DataField="Quantity" Aggregate="Sum">
</telerik:PivotGridAggregateField>
</Fields>
</telerik:RadPivotGrid>
<asp:EntityDataSource ID="EntityDataSource1" runat="server" ConnectionString="name=NorthwindEntities"
DefaultContainerName="NorthwindEntities" EnableFlattening="False" EntitySetName="Product_Reports_Comparisons">
</asp:EntityDataSource>
````                


