---
title: Client-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: clientdatasource/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



__RadClientDataSource__ for ASP.NET AJAX offers a rich client-side API that lets you configure the behavior of the control as well as perform certain data manipulations using JavaScript.

## RadClientDataSource Properties


| Property | Description | Return Type | Parameters |
| ------ | ------ | ------ | ------ |
| __[get_aggregates()]({%slug clientdatasource/client-side-programming/client-side-api/properties/get_aggregates()%})__ |Gets a collection of __Telerik.Web.UI.ClientDataSourceAggregate__ objects.|A collection of __Telerik.Web.UI.ClientDataSourceAggregate__ items||
| __get_allowBatchOperations()__ |Gets a value indicating whether batch operations are enabled.|Bool||
| __get_allowPaging()__ |Gets a value indicating whether paging is enabled.|Bool||
| __get_currentPageIndex()__ |Gets the current page index.|Number||
| __get_dataSourceObject()__ |Gets the underlying Kendo data source widget.|Object||
| __get_enableServerAggregates()__ |Gets a value indicating whether server-side aggregates are enabled.|Bool||
| __get_enableServerFiltering()__ |Gets a value indicating whether server-side filtering is enabled.|Object||
| __get_enableServerGrouping()__ |Gets a value indicating whether server-side grouping is enabled.|Object||
| __get_enableServerPaging()__ |Gets a value indicating whether server-side paging is enabled.|Object||
| __set_enableServerSorting()__ |Gets a value indicating whether server-side sorting is enabled.|Object||
| __[get_filterExpressions()]({%slug clientdatasource/client-side-programming/client-side-api/properties/get_filterexpressions()%})__ |Gets a collection of __Telerik.Web.UI.ClientDataSourceFilterExpression__ objects.|A collection of __Telerik.Web.UI.ClientDataSourceFilterExpression__ items||
| __[get_groupExpressions()]({%slug clientdatasource/client-side-programming/client-side-api/properties/get_groupexpressions()%})__ |Gets a collection of __Telerik.Web.UI.ClientDataSourceGroupExpression__ objects.|A collection of __Telerik.Web.UI.ClientDataSourceGroupExpression__ items||
| __get_pageSize()__ |Gets the current page size.|Number||
| __get_schema()__ |Gets the __RadClientDataSource__ schema object.|Object||
| __[get_sortExpressions()]({%slug clientdatasource/client-side-programming/client-side-api/properties/get_sortexpressions()%})__ |Gets the collection of __Telerik.Web.UI.ClientDataSourceSortExpression__ objects.|A collection of __Telerik.Web.UI.ClientDataSourceSortExpression__ ||
| __get_totalItemsCount()__ |Gets the total number of items in the __RadClientDataSource__ .|Number||
| __get_totalPagesCount()__ |Gets the total number of pages in the __RadClientDataSource__ .|Number||
| __get_totalPagesCount()__ |Gets the total number of pages in the __RadClientDataSource__ .|Number||
| __get_totalPagesCount()__ |Gets the total number of pages in the __RadClientDataSource__ .|Number||
| __get_transport()__ |Gets the __WebServiceDataSourceSettings__ settings.|Object||
| __set_allowBatchOperations(allowBatchOperations)__ |Sets a value indicating whether batch operations are enabled.||Bool|
| __set_allowPaging(allowPaging)__ |Sets a value indicating whether paging is enabled.||Bool|
| __set_currentPageIndex(currentPageIndex)__ |Sets the current page index value.||Number|
| __set_enableServerFiltering(enableServerFiltering)__ |Sets a value indicating whether server-side filtering is enabled.||Bool|
| __set_enableServerSorting(enableServerSorting)__ |Sets a value indicating whether server-side sorting is enabled.||Bool|
| __set_enableServerGrouping(enableServerGrouping)__ |Sets a value indicating whether server-side sorting is enabled.||Bool|
| __set_enableServerAggregates(enableServerAggregates)__ |Sets a value indicating whether server-side aggregates are enabled.||Bool|
| __set_enableServerPaging(enableServerPaging)__ |Sets a value indicating whether server-side pagin is enabled.||Bool|
| __set_pageSize(pageSize)__ |Sets the current page size.||Number|

## RadClientDataSource Methods

__RadImageGallery__ offers the following methods


| Method | Description | Return Type | Parameters |
| ------ | ------ | ------ | ------ |
| __[add(values)]({%slug clientdatasource/client-side-programming/client-side-api/methods/add%})__ |Appends a data item to the data source. The parameter should be JSON formatted.||Object|
| __[aggregates(aggregateSettings)]({%slug clientdatasource/client-side-programming/client-side-api/methods/aggregates%})__ |Returns the aggregated values of the __RadClientDataSource__ . The optional parameter specifies additional aggregate settings. If none are specified the default __RadClientDataSource__ aggregate setting will be used.|Object|Object|
| __cancelChanges()__ |Cancels any pending changes in the data source. The method should be used when batch operations are enabled.|||
| __[fetch(callback)]({%slug clientdatasource/client-side-programming/client-side-api/methods/fetch%})__ |Returns data from the web service after calling the select method from the transport settings. The optional parameter specifies acallback function where you can access the returned data.|Object|Function|
| __get_data()__ |Gets the JSON data of the __RadClientDataSource__ .|Object|Object|
| __getDataItemById(id)__ |Gets the data item with the specified model id.|Object|Number|
| __getItemByIndex(index)__ |Returns the data item at the specified index.|Object|Number|
| __hasChanges()__ |Checks if the data items have changed.|Bool||
| __insert(index,values)__ |Inserts a data item in the data source at the specified index. The first parameter points the index at whichthe item will be inserted whereas the second hold the JSON formatted values to insert as a new item.||Number,Object|
| __[remove(id)]({%slug clientdatasource/client-side-programming/client-side-api/methods/remove%})__ |Removes the data item from the data source with the specified id.||Number|
| __set_data(data)__ |Sets the JSON data of the __RadClientDataSource__ .||Object|
| __sync()__ |Persists any data item changes to the datasource. Calls the respective CRUD methods from the transport settings.|||
| __[update(newValues,id)]({%slug clientdatasource/client-side-programming/client-side-api/methods/update%})__ |Updates the values of the item with the specified model id. The first parameter holds the JSON formatted values to updatein the item whereas the second the ID of the item to be updated.||Object,Number|
| __view()__ |Returns the data items which correspond to the current page, filter, sort and group configuration.|A collection of __Telerik.Web.UI.ClientDataSourceGroupExpression__ items||

# See Also

 * [Client-side Objects]({%slug clientdatasource/client-side-programming/clientdatasource-object%})

 * [Client-side Events]({%slug clientdatasource/client-side-programming/events%})
