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



This help article describes the strongly typed client-side objects of the __RadClientDataSource__ control.

## Aggregate

__Telerik.Web.UI.ClientDataSource.Aggregate__ – represents an aggregate setting on the client. The following table describes the properties that __Aggregate__ object exposes.


| Property | Parameter | Description |
| ------ | ------ | ------ |
| __get_field()__ |none|Returns the data field of the aggregate.|
| __set_field()__ |string|Sets the data field of the aggregate.|
| __get_aggregate()__ |none|Returns the aggregate function of the aggregate.|
| __set_aggregate()__ |Telerik.Web.UI.ClientDataSource.AggregateFunction|Sets the aggregate function of the aggregate.|

__Telerik.Web.UI.ClientDataSource.AggregateCollection__ – holds a collection of	__Telerik.Web.UI.ClientDataSource.Aggregate__ settings.

## Filtering

__Telerik.Web.UI.ClientDataSource.FilterEntry__ – represents a filter setting on the client. The following table describes the properties that __FilterEntry__ object exposes.


| Property | Parameter | Description |
| ------ | ------ | ------ |
| __get_fieldName()__ |none|Gets the name of the field from the dataSource which will be used in the filter entry.|
| __set_fieldName()__ |string|Sets the name of the field from the dataSource which will be used in the filter entry.|
| __get_operator()__ |none|Gets the filter operator used in the filtering. Enumeration contains: __EqualTo__ , __NotEqualTo__ , __GreaterThan__ , __GreaterThanOrEqualTo__ , __LessThan__ , __LessThenOrEqualTo__ , __Contains__ , __EndsWith__ , __StartsWith__ .|
| __set_operator()__ |Telerik.Web.UI.ClientDataSource.FilterOperator|Sets the filtering operator.|
| __get_value()__ |Telerik.Web.UI.ClientDataSource.FilterOperator|Gets the filter value of the current filter entry.|
| __set_value()__ |string|Sets the filter value of the current filter entry.|

__Telerik.Web.UI.ClientDataSource.FilterExpression__ – represents a client-side strongly types object which holds a collection of __FilterEntries__ or other __FilterExpressions__ and an additional property defining the logic operatorused between the filter entries. The object exposes the following properties.


| Property | Parameter | Description |
| ------ | ------ | ------ |
| __get_logicOperator()__ |none|Gets the current logic operator used between the filter entries of the filter expression. Default is __AND__ .|
| __set_logicOperator()__ |none|Sets the logic operator used between the filter entries of the filter expression.|

## Grouping

__Telerik.Web.UI.ClientDataSource.GroupExpression__ – represents a cient-side strongly types setting describing on group expressionin the __RadClientDataSource__. The following table describes the properties that __GroupExpression__ object exposes.


| Property | Parameter | Description |
| ------ | ------ | ------ |
| __get_fieldName()__ |none|Gets the name of the field from the dataSource which will be used in the grouping operation.|
| __set_fieldName()__ |string|Sets the name of the field from the dataSource which will be used in the grouping operation.|
| __get_aggregates()__ |none|Gets the aggregates settings for the current group.|
| __get_sortOrder()__ |none|Gets the sort order for the current group.|
| __set_sortOrder()__ |Telerik.Web.UI.ClientDataSource.SortOrder|Sets the sort order for the current group.|

__Telerik.Web.UI.ClientDataSource.SortExpressionCollection__ – holds a collection of__Telerik.Web.UI.ClientDataSource.SortExpression__ settings.

## Sorting

__Telerik.Web.UI.ClientDataSource.SortExpression__ – represents a setting defining one sort expression in the	__RadClientDataSource__. The following table describes the properties that __SortExpression__ object exposes.


| Property | Parameter | Description |
| ------ | ------ | ------ |
| __get_fieldName()__ |none|Gets the name of the field from the dataSource which will be used in the sorting operation.|
| __set_fieldName()__ |string|Sets the name of the field from the dataSource which will be used in the sorting operation.|
| __get_sortOrder()__ |none|Gets the sort order. Default is __ASC__ .|
| __set_sortOrder()__ |Telerik.Web.UI.ClientDataSource.SortOrder|Sets the sort order when used in sorting.|

__Telerik.Web.UI.ClientDataSource.SortExpressionCollection__ – holds a collection of__Telerik.Web.UI.ClientDataSource.SortExpression__ settings.

## Common properties for all collections.

All of the above collections share the same common properties inherited from __Telerik.Web.UI.ClientDataSource.CollectionBase__. You can find a definition of each property in the following table.


| Property | Parameter | Description |
| ------ | ------ | ------ |
| __add()__ |item|Appends an item at the end of the collection.|
| __add()__ |index, item|Inserts an item at the specified index.|
| __remove()__ |item|Removes an item from the collection.|
| __clear()__ |none|Clears all items in the collection.|
| __toList()__ |none|Return a __JavaScript__ array holding all the items in the collection.|
| __get_count()__ |none|Gets the total number of items in the collection.|
| __getItem()__ |index|Gets an item at the specified index.|
| __indexOf ()__ |item|Gets the index of the specified item.|
| __forEach()__ |labmda function|Applies the lambda function to each item in the collection.|

# See Also

 * [Overview]({%slug clientdatasource/client-side-programming/overview%})

 * [Events]({%slug clientdatasource/client-side-programming/events%})

 * [get_aggregates()]({%slug clientdatasource/client-side-programming/client-side-api/properties/get_aggregates()%})

 * [get_filterExpressions()]({%slug clientdatasource/client-side-programming/client-side-api/properties/get_filterexpressions()%})

 * [get_groupExpressions()]({%slug clientdatasource/client-side-programming/client-side-api/properties/get_groupexpressions()%})

 * [get_sortExpressions()]({%slug clientdatasource/client-side-programming/client-side-api/properties/get_sortexpressions()%})
