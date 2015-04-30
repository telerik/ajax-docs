---
title: Aggregates
page_title: Aggregates | RadGrid for ASP.NET AJAX Documentation
description: Aggregates
slug: grid/columns/aggregates
tags: aggregates
published: True
position: 5
---

# Aggregates



## 

The **GridBoundColumn** object has an **Aggregate** property that you can set to specify a function for aggregating the values that the column displays. The **Aggregate** property can be set to any of the following values: "Sum", "Min", "Max", "Last", "First", "Count", "Avg", or "Custom". When you set the **Aggregate** property to "Custom", the grid raises an **OnCustomAggregate** event, where you can calculate the aggregate in server-side code and assign the result to the **Result** property of the event arguments object.

````ASP.NET
<telerik:GridBoundColumn Aggregate="Count" DataField="CustomerID" DataType="System.String"
  HeaderText="CustomerID" SortExpression="CustomerID" UniqueName="CustomerID">
</telerik:GridBoundColumn>
````



The grid calculates aggregated values if the **ShowFooter** property is set to **True**. The grid footer displays aggregates that are calculated based on all the data from the data source, except for any values that are excluded by a [filter expression]({%slug grid/functionality/filtering/overview%}).

![](images/grd_Aggregates.png)



When [grouping]({%slug grid/functionality/grouping/overview%}) is enabled in the column, you can display group aggregates by setting the **ShowGroupFooter** property to **True**:

![](images/grd_GroupAggregates.png)


