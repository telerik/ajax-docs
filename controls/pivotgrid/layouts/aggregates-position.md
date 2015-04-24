---
title: Aggregates Position
page_title: Aggregates Position | RadPivotGrid for ASP.NET AJAX Documentation
description: Aggregates Position
slug: pivotgrid/layouts/aggregates-position
tags: aggregates,position
published: True
position: 1
---

# Aggregates Position



RadPivotGrid offers several options for setting its aggregate position depending on the row table layout. These options could be set my using the **RowTableLayout**, **AggregatesPosition** and **AggregatesLevel** properties of the control. The aggregate position could be set to **Rows** or **Column**.

Below follow descriptions of the Aggregate positions based on the **RowTableLayout** and the and **AggregatesLevel**.

## AggregatesPosition="Rows"

### **RowTableLayout="Tabular"**

* Below is an example with aggregates on level three:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Rows" RowTableLayout="Tabular" AggregatesLevel="3">
````           

![Pivot Grid-Rows Tabular 3 Level](images/PivotGrid-RowsTabular3Level.jpg)
Here is the same layout with items on the first level collapsed:
![Pivot Grid-Rows Tabular 3 Level 1 Collapsed](images/PivotGrid-RowsTabular3Level1Collapsed.jpg)

* Below is an example with aggregates on level two:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Rows" RowTableLayout="Tabular" AggregatesLevel="2">
````                

![Pivot Grid-Rows Tabular 2 Level](images/PivotGrid-RowsTabular2Level.jpg)
Here is the same layout with some collapsed items:
![Pivot Grid-Rows Tabular 2 Level Collapsed](images/PivotGrid-RowsTabular2LevelCollapsed.jpg)

* Below is an example with aggregates on level one:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Rows" RowTableLayout="Tabular" AggregatesLevel="1">
````                

![Pivot Grid-Rows Tabular 1 Level](images/PivotGrid-RowsTabular1Level.jpg)
Here is the same layout with some collapsed items:
![Pivot Grid-Rows Tabular 1 Level Collapsed](images/PivotGrid-RowsTabular1LevelCollapsed.jpg)

* Below is an example with aggregates on level zero:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Rows" RowTableLayout="Tabular" AggregatesLevel="0">
````                

![Pivot Grid-Rows Tabular 0 Level](images/PivotGrid-RowsTabular0Level.jpg)
Here is the same layout with some collapsed items:
![Pivot Grid-Rows Tabular 0 Level Collapsed.jpg](images/PivotGrid-RowsTabular0LevelCollapsed.jpg.png)

### **RowTableLayout="Outline"**

* Below is an example with aggregates on level three:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Rows" RowTableLayout="Outline" AggregatesLevel="3">
````                

![Pivot Grid-Rows Outline 3 Level](images/PivotGrid-RowsOutline3Level.jpg)
Here is the same layout with some collapsed items:
![Pivot Grid-Rows Outline 3 Level Collapsed](images/PivotGrid-RowsOutline3LevelCollapsed.jpg)

* Below is an example with aggregates on level two:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Rows" RowTableLayout="Outline" AggregatesLevel="2">
````                

![Pivot Grid-Rows Outline 2 Level](images/PivotGrid-RowsOutline2Level.jpg)

* Below is an example with aggregates on level one with collapsed items:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Rows" RowTableLayout="Outline" AggregatesLevel="1">
````                

![Pivot Grid-Rows Outline 1 Level Collapsed](images/PivotGrid-RowsOutline1LevelCollapsed.jpg)

* Below is an example with aggregates on level zero with collapsed items:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Rows" RowTableLayout="Outline" AggregatesLevel="0">
````                

![Pivot Grid-Rows Outline 0 Level Collapsed](images/PivotGrid-RowsOutline0LevelCollapsed.jpg)

### **RowTableLayout="Compact"**

* Below is an example with aggregates on level three:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Rows" RowTableLayout="Compact" AggregatesLevel="3">
````                

![Pivot Grid-Rows Compact 3 Level](images/PivotGrid-RowsCompact3Level.jpg) 
Here is the same layout with items on the first level collapsed:
![Pivot Grid-Rows Compact 3 Level Collapsed](images/PivotGrid-RowsCompact3LevelCollapsed.jpg)

* Below is an example with aggregates on level two:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Rows" RowTableLayout="Compact" AggregatesLevel="2">
````                

![Pivot Grid-Rows Compact 2 Level](images/PivotGrid-RowsCompact2Level.jpg)

* Below is an example with aggregates on level one with some collapsed items:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Rows" RowTableLayout="Compact" AggregatesLevel="1">
````                

![Pivot Grid-Rows Compact 1 Level Collapsed](images/PivotGrid-RowsCompact1LevelCollapsed.jpg)

* Below is an example with aggregates on level zero with some collapsed items:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Rows" RowTableLayout="Compact" AggregatesLevel="0">
````                

![Pivot Grid-Rows Compact 0 Level Collapsed](images/PivotGrid-RowsCompact0LevelCollapsed.jpg)

## AggregatesPosition="Columns"

### **RowTableLayout="Tabular"**

* Below is an example with aggregates on level two:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Columns" RowTableLayout="Tabular" AggregatesLevel="2">
````                

![Pivot Grid-Columns Tabular 2 Level](images/PivotGrid-ColumnsTabular2Level.jpg)

* Below is an example with aggregates on level one:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Columns" RowTableLayout="Tabular" AggregatesLevel="1">
````                

![Pivot Grid-Columns Tabular 1 Level](images/PivotGrid-ColumnsTabular1Level.jpg)
Here is the same layout with some collapsed items:
![Pivot Grid-Columns Tabular 1 Level Collapsed](images/PivotGrid-ColumnsTabular1LevelCollapsed.jpg)

* Below is an example with aggregates on level zero:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Rows" RowTableLayout="Tabular" AggregatesLevel="0">
````                

![Pivot Grid-Columns Tabular 0 Level](images/PivotGrid-ColumnsTabular0Level.jpg)

### **RowTableLayout="Outline"**

* Below is an example with aggregates on level two:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Columns" RowTableLayout="Outline" AggregatesLevel="2">
````                

![Pivot Grid-Columns Outline 2 Level](images/PivotGrid-ColumnsOutline2Level.jpg)

* Below is an example with aggregates on level one :
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Columns" RowTableLayout="Outline" AggregatesLevel="1">
````                

![Pivot Grid-Columns Outline 1 Level](images/PivotGrid-ColumnsOutline1Level.jpg)

* Below is an example with aggregates on level zero:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Columns" RowTableLayout="Outline" AggregatesLevel="0">
````                

![Pivot Grid-Columns Outline 0 Level](images/PivotGrid-ColumnsOutline0Level.jpg)

### **RowTableLayout="Compact"**

* Below is an example with aggregates on level two:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Columns" RowTableLayout="Compact" AggregatesLevel="2">
````                

![Pivot Grid-Columns Compact 2 Level](images/PivotGrid-ColumnsCompact2Level.jpg)
Here is the same layout with three column fields and some collapsed items:
![Pivot Grid-Columns Compact 2 Level Collapsed](images/PivotGrid-ColumnsCompact2LevelCollapsed.jpg)

* Below is an example with aggregates on level one with three column fields and some collapsed items:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Columns" RowTableLayout="Compact" AggregatesLevel="1">
                

![Pivot Grid-Columns Compact 1 Level Collapsed](images/PivotGrid-ColumnsCompact1LevelCollapsed.jpg)

* Below is an example with aggregates on level zero with three column fields and some collapsed items:
````ASPNET
<telerik:RadPivotGrid ID="RadPivotGrid1" runat="server" DataSourceID="SqlDataSource1" Skin="Metro" AggregatesPosition="Columns" RowTableLayout="Compact" AggregatesLevel="0">
````

![Pivot Grid-Columns Compact 0 Level Collapsed](images/PivotGrid-ColumnsCompact0LevelCollapsed.jpg)
