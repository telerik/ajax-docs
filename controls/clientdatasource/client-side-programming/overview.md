---
title: Overview
page_title: Client-side Programming Overview | RadClientDataSource for ASP.NET AJAX
description: Overview
slug: clientdatasource/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



**RadClientDataSource** for ASP.NET AJAX offers a rich client-side API that lets you configure the behavior of the control as well as perform certain data manipulations using JavaScript.

## RadClientDataSource Properties


| Property | Description | Return Type | Parameters |
| ------ | ------ | ------ | ------ |
| **[get_aggregates()]({%slug clientdatasource/client-side-programming/client-side-api/properties/get_aggregates()%})** |Gets a collection of **Telerik.Web.UI.ClientDataSourceAggregate** objects.|A collection of **Telerik.Web.UI.ClientDataSourceAggregate** items||
| **get_allowBatchOperations()** |Gets a value indicating whether batch operations are enabled.|Bool||
| **get_allowPaging()** |Gets a value indicating whether paging is enabled.|Bool||
| **get_currentPageIndex()** |Gets the current page index.|Number||
| **get_dataSourceObject()** |Gets the underlying Kendo data source widget.|Object||
| **get_enableServerAggregates()** |Gets a value indicating whether server-side aggregates are enabled.|Bool||
| **get_enableServerFiltering()** |Gets a value indicating whether server-side filtering is enabled.|Object||
| **get_enableServerGrouping()** |Gets a value indicating whether server-side grouping is enabled.|Object||
| **get_enableServerPaging()** |Gets a value indicating whether server-side paging is enabled.|Object||
| **set_enableServerSorting()** |Gets a value indicating whether server-side sorting is enabled.|Object||
| **[get_filterExpressions()]({%slug clientdatasource/client-side-programming/client-side-api/properties/get_filterexpressions()%})** |Gets a collection of **Telerik.Web.UI.ClientDataSourceFilterExpression** objects.|A collection of **Telerik.Web.UI.ClientDataSourceFilterExpression** items||
| **[get_groupExpressions()]({%slug clientdatasource/client-side-programming/client-side-api/properties/get_groupexpressions()%})** |Gets a collection of **Telerik.Web.UI.ClientDataSourceGroupExpression** objects.|A collection of **Telerik.Web.UI.ClientDataSourceGroupExpression** items||
| **get_pageSize()** |Gets the current page size.|Number||
| **get_schema()** |Gets the **RadClientDataSource** schema object.|Object||
| **[get_sortExpressions()]({%slug clientdatasource/client-side-programming/client-side-api/properties/get_sortexpressions()%})** |Gets the collection of **Telerik.Web.UI.ClientDataSourceSortExpression** objects.|A collection of **Telerik.Web.UI.ClientDataSourceSortExpression** ||
| **get_totalItemsCount()** |Gets the total number of items in the **RadClientDataSource** .|Number||
| **get_totalPagesCount()** |Gets the total number of pages in the **RadClientDataSource** .|Number||
| **get_totalPagesCount()** |Gets the total number of pages in the **RadClientDataSource** .|Number||
| **get_totalPagesCount()** |Gets the total number of pages in the **RadClientDataSource** .|Number||
| **get_transport()** |Gets the **WebServiceDataSourceSettings** settings.|Object||
| **set_allowBatchOperations(allowBatchOperations)** |Sets a value indicating whether batch operations are enabled.||Bool|
| **set_allowPaging(allowPaging)** |Sets a value indicating whether paging is enabled.||Bool|
| **set_currentPageIndex(currentPageIndex)** |Sets the current page index value.||Number|
| **set_enableServerFiltering(enableServerFiltering)** |Sets a value indicating whether server-side filtering is enabled.||Bool|
| **set_enableServerSorting(enableServerSorting)** |Sets a value indicating whether server-side sorting is enabled.||Bool|
| **set_enableServerGrouping(enableServerGrouping)** |Sets a value indicating whether server-side sorting is enabled.||Bool|
| **set_enableServerAggregates(enableServerAggregates)** |Sets a value indicating whether server-side aggregates are enabled.||Bool|
| **set_enableServerPaging(enableServerPaging)** |Sets a value indicating whether server-side pagin is enabled.||Bool|
| **set_pageSize(pageSize)** |Sets the current page size.||Number|

## RadClientDataSource Methods

**RadImageGallery** offers the following methods


| Method | Description | Return Type | Parameters |
| ------ | ------ | ------ | ------ |
| **[add(values)]({%slug clientdatasource/client-side-programming/client-side-api/methods/add%})** |Appends a data item to the data source. The parameter should be JSON formatted.||Object|
| **[aggregates(aggregateSettings)]({%slug clientdatasource/client-side-programming/client-side-api/methods/aggregates%})** |Returns the aggregated values of the **RadClientDataSource** . The optional parameter specifies additional aggregate settings. If none are specified the default **RadClientDataSource** aggregate setting will be used.|Object|Object|
| **cancelChanges()** |Cancels any pending changes in the data source. The method should be used when batch operations are enabled.|||
| **[fetch(callback)]({%slug clientdatasource/client-side-programming/client-side-api/methods/fetch%})** |Returns data from the web service after calling the select method from the transport settings. The optional parameter specifies acallback function where you can access the returned data.|Object|Function|
| **get_data()** |Gets the JSON data of the **RadClientDataSource** .|Object|Object|
| **getDataItemById(id)** |Gets the data item with the specified model id.|Object|Number|
| **getItemByIndex(index)** |Returns the data item at the specified index.|Object|Number|
| **hasChanges()** |Checks if the data items have changed.|Bool||
| **insert(index,values)** |Inserts a data item in the data source at the specified index. The first parameter points the index at whichthe item will be inserted whereas the second hold the JSON formatted values to insert as a new item.||Number,Object|
| **[remove(id)]({%slug clientdatasource/client-side-programming/client-side-api/methods/remove%})** |Removes the data item from the data source with the specified id.||Number|
| **set_data(data)** |Sets the JSON data of the **RadClientDataSource** .||Object|
| **sync()** |Persists any data item changes to the datasource. Calls the respective CRUD methods from the transport settings.|||
| **[update(newValues,id)]({%slug clientdatasource/client-side-programming/client-side-api/methods/update%})** |Updates the values of the item with the specified model id. The first parameter holds the JSON formatted values to updatein the item whereas the second the ID of the item to be updated.||Object,Number|
| **view()** |Returns the data items which correspond to the current page, filter, sort and group configuration.|A collection of **Telerik.Web.UI.ClientDataSourceGroupExpression** items||

# See Also

 * [Client-side Objects]({%slug clientdatasource/client-side-programming/clientdatasource-object%})

 * [Client-side Events]({%slug clientdatasource/client-side-programming/events/overview%})
