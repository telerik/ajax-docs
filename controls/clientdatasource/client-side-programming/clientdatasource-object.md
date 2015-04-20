---
title: ClientDataSource Object
page_title: ClientDataSource Object | UI for ASP.NET AJAX Documentation
description: ClientDataSource Object
slug: clientdatasource/client-side-programming/clientdatasource-object
tags: clientdatasource,object
published: True
position: 1
---

# ClientDataSource Object



This help article describes the strongly typed client-side objects of the **RadClientDataSource** control.

## Aggregate

**Telerik.Web.UI.ClientDataSource.Aggregate** – represents an aggregate setting on the client. The following table describes the properties that **Aggregate** object exposes.


| Property | Parameter | Description |
| ------ | ------ | ------ |
| **get_field()** |none|Returns the data field of the aggregate.|
| **set_field()** |string|Sets the data field of the aggregate.|
| **get_aggregate()** |none|Returns the aggregate function of the aggregate.|
| **set_aggregate()** |Telerik.Web.UI.ClientDataSource.AggregateFunction|Sets the aggregate function of the aggregate.|

**Telerik.Web.UI.ClientDataSource.AggregateCollection** – holds a collection of	**Telerik.Web.UI.ClientDataSource.Aggregate** settings.

## Filtering

**Telerik.Web.UI.ClientDataSource.FilterEntry** – represents a filter setting on the client. The following table describes the properties that **FilterEntry** object exposes.


| Property | Parameter | Description |
| ------ | ------ | ------ |
| **get_fieldName()** |none|Gets the name of the field from the dataSource which will be used in the filter entry.|
| **set_fieldName()** |string|Sets the name of the field from the dataSource which will be used in the filter entry.|
| **get_operator()** |none|Gets the filter operator used in the filtering. Enumeration contains: **EqualTo** , **NotEqualTo** , **GreaterThan** , **GreaterThanOrEqualTo** , **LessThan** , **LessThenOrEqualTo** , **Contains** , **EndsWith** , **StartsWith** .|
| **set_operator()** |Telerik.Web.UI.ClientDataSource.FilterOperator|Sets the filtering operator.|
| **get_value()** |Telerik.Web.UI.ClientDataSource.FilterOperator|Gets the filter value of the current filter entry.|
| **set_value()** |string|Sets the filter value of the current filter entry.|

**Telerik.Web.UI.ClientDataSource.FilterExpression** – represents a client-side strongly types object which holds a collection of **FilterEntries** or other **FilterExpressions** and an additional property defining the logic operatorused between the filter entries. The object exposes the following properties.


| Property | Parameter | Description |
| ------ | ------ | ------ |
| **get_logicOperator()** |none|Gets the current logic operator used between the filter entries of the filter expression. Default is **AND** .|
| **set_logicOperator()** |none|Sets the logic operator used between the filter entries of the filter expression.|

## Grouping

**Telerik.Web.UI.ClientDataSource.GroupExpression** – represents a cient-side strongly types setting describing on group expressionin the **RadClientDataSource**. The following table describes the properties that **GroupExpression** object exposes.


| Property | Parameter | Description |
| ------ | ------ | ------ |
| **get_fieldName()** |none|Gets the name of the field from the dataSource which will be used in the grouping operation.|
| **set_fieldName()** |string|Sets the name of the field from the dataSource which will be used in the grouping operation.|
| **get_aggregates()** |none|Gets the aggregates settings for the current group.|
| **get_sortOrder()** |none|Gets the sort order for the current group.|
| **set_sortOrder()** |Telerik.Web.UI.ClientDataSource.SortOrder|Sets the sort order for the current group.|

**Telerik.Web.UI.ClientDataSource.SortExpressionCollection** – holds a collection of **Telerik.Web.UI.ClientDataSource.SortExpression** settings.

## Sorting

**Telerik.Web.UI.ClientDataSource.SortExpression** – represents a setting defining one sort expression in the	**RadClientDataSource**. The following table describes the properties that **SortExpression** object exposes.


| Property | Parameter | Description |
| ------ | ------ | ------ |
| **get_fieldName()** |none|Gets the name of the field from the dataSource which will be used in the sorting operation.|
| **set_fieldName()** |string|Sets the name of the field from the dataSource which will be used in the sorting operation.|
| **get_sortOrder()** |none|Gets the sort order. Default is **ASC** .|
| **set_sortOrder()** |Telerik.Web.UI.ClientDataSource.SortOrder|Sets the sort order when used in sorting.|

**Telerik.Web.UI.ClientDataSource.SortExpressionCollection** – holds a collection of **Telerik.Web.UI.ClientDataSource.SortExpression** settings.

## Common properties for all collections.

All of the above collections share the same common properties inherited from **Telerik.Web.UI.ClientDataSource.CollectionBase**. You can find a definition of each property in the following table.


| Property | Parameter | Description |
| ------ | ------ | ------ |
| **add()** |item|Appends an item at the end of the collection.|
| **add()** |index, item|Inserts an item at the specified index.|
| **remove()** |item|Removes an item from the collection.|
| **clear()** |none|Clears all items in the collection.|
| **toList()** |none|Return a **JavaScript** array holding all the items in the collection.|
| **get_count()** |none|Gets the total number of items in the collection.|
| **getItem()** |index|Gets an item at the specified index.|
| **indexOf ()** |item|Gets the index of the specified item.|
| **forEach()** |labmda function|Applies the lambda function to each item in the collection.|

# See Also

 * [Overview]({%slug clientdatasource/client-side-programming/overview%})

 * [Events]({%slug clientdatasource/client-side-programming/events%})

 * [get_aggregates()]({%slug clientdatasource/client-side-programming/client-side-api/properties/get_aggregates()%})

 * [get_filterExpressions()]({%slug clientdatasource/client-side-programming/client-side-api/properties/get_filterexpressions()%})

 * [get_groupExpressions()]({%slug clientdatasource/client-side-programming/client-side-api/properties/get_groupexpressions()%})

 * [get_sortExpressions()]({%slug clientdatasource/client-side-programming/client-side-api/properties/get_sortexpressions()%})
