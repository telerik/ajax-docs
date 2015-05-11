---
title: API
page_title: API | RadListView for ASP.NET AJAX Documentation
description: API
slug: listview/data-binding/client-side/api
tags: api
published: True
position: 4
---

# API



In this article you can find the client and server-side APIs exposed by RadListView for performing client-side binding and controlling the control behavior when bound this way.

* **Server properties
http://www.telerik.com/help/aspnet-ajax/listview-clientside-binding-api.html#Section0_self**

* **Client properties
http://www.telerik.com/help/aspnet-ajax/listview-clientside-binding-api.html#Section1_self**

* **Client methods
http://www.telerik.com/help/aspnet-ajax/listview-clientside-binding-api.html#Section2_self**

* **Client events
http://www.telerik.com/help/aspnet-ajax/listview-clientside-binding-api.html#Section3_self**

## Server properties

RadListView defines the following new properties in the **ClientSettings.DataBinding** settings:


>caption  

|  ** *Property* **  |  ** *Description* **  |
| ------ | ------ |
| **ItemPlaceHolderID** |ID of HTML element in the layout template that will contain the items|
| **ContainerID** |ID of the container HTML element that will contain the rendered RadListView|
| **LayoutTemplate** |HTML layout template. If this template is omitted, the server-side LayoutTemplate needs to be defined.|
| **ItemTemplate** |HTML item template|
| **AlternatingItemTemplate** |HTML alternating item template|
| **ItemSeparatorTemplate** |HTML item separator template|
| **EmptyDataTemplate** |HTML template rendered when RadListView contains no data|
| **SelectedItemTemplate** |HTML template rendered when item is selected|
| **DataService.Location** |web service location|
| **DataService.DataPath** |path or method name to append to location when requesting data|
| **DataService.CountPath** |path or method name to append to location when requesting item count|
| **DataService.HttpMethod** |Post/Get; HTTP method to use when accessing web service. *Default: Post* |
| **DataService.DataPropertyName** |field name in the JSON result containing the data array|
| **DataService.CountPropertyName** |field name in the JSON result containing the item count|
| **DataService.EnableCaching** |false/true; specifies if data caching is used. *Default: false* |
| **DataService.ResponseType** |JSON/JSONP; specifies the response format. *Default: JSON* |
| **DataService.StartRowIndexParameterName** |request parameter name specifying start row index|
| **DataService.MaximumRowsParameterName** |request parameter name specifying the maximum rows|
| **DataService.SortParameterName** |request parameter name specifying sort expression|
| **DataService.SortParameterType** |List/Linq/OData/Sql; specifies the format of the sort expression. *Default: List* |
| **DataService.FilterParameterName** |request parameter name specifying filter expression|
| **DataService.FilterParameterType** |List/Linq/OData/Sql; specifies the format of the filter expression. *Default: List* |

## Client APIs

Client-side databinding enabled many new APIs in the client RadListView component. With these new additions RadListView's client-side capabilities are greatly enhanced. Here is a list of the new properties and methods in RadListView, as well as the new client-side events that have been added:


>caption Properties

|  ** *Property* **  |  ** *Description* **  |
| ------ | ------ |
| **get_dataSource()** |Returns the currently set datasource of the control.|
| **get_isDataBinding()** |Indicates whether RadListView is currently databinding on the client-side.|
| **get_isInitializedOnClient()** |Indicates whether RadListView is initialized entirely on the client-side with no server-side control.|
| **get_isDataBoundOnClient()** |Indicates whether RadListView is setup for client-side databinding.|
| **set_dataSource()** |Sets the datasource to which the control should bind.|
| **get_selectedIndexes()** |Returns the indexes of all items that are currently selected.|
| **set_selectedIndexes()** |Selects the items at the provided indexes.|
| **get_allowMultiItemSelection()** |A boolean property indicating whether multi-item selection has been enabled.|
| **get_allowPaging()** |A boolean property indicating whether paging has been enabled.|
| **set_allowPaging()** |A boolean property used to enable/disable paging depending on the boolean value passed as an argument.|
| **get_pageCount()** |Returns the current number of pages in the control.|
| **get_pageSize()** |Returns an integer representing the page size in the listview.|
| **set_pageSize()** |A property used to set the max number of items that would be displayed in one page.|
| **get_currentPageIndex()** |Returns an integer representing the current page shown in the listview.|
| **set_currentPageIndex()** |A property used to specify the current page shown.|
| **get_virtualItemCount()** |Returns the virtual item count value for the RadListView.|
| **set_virtualItemCount()** |Sets the virtual item count value for the RadListView.|
| **get_sortExpressions()** |Returns a RadListViewSortExpressions object used for manipulating the sort expressions in RadListView.|
| **get_allowNaturalSort()** |Returns whether natural sort is enabled (or "no sort" mode).|
| **get_filterExpressions()** |Returns a RadListViewFilterExpressions object used for manipulating the filter expressions in RadListView.|

## Methods


>caption  

|  ** *Method* **  |  ** *Description* **  |
| ------ | ------ |
| **Telerik.Web.UI.RadListView.create(elementId, itemPlaceHolderId, useElementContentAsLayout)** |Creates a client RadListView component for use in no server control scenarios.Parameters: * **elementId** :* The id of an HTML element to associate with the control. * **itemPlaceHolderId** :* Optional: The id of an HTML element that will contain the RadListView items. * **useElementContentAsLayout** :* Optional: Specifies whether the innerHTML of the container element will be used as a LayoutTemplate.|
| **dataBind()** |Binds the RadListView to the datasource provided through set_dataSource().|
| **rebind()** |Rebinds RadListView to its given data source.|
| **rebindItem(index)** |Rebinds a single item specified by its index.Parameters: * **index** :* The index of the item to rebind.|
| **appendData(data)** |Appends additional data to the current data source and creates new items for the new data. Existing items are not modified.Parameters: * **data** :* A javascript array of objects to append.|
| **selectItem(index, doNotRebind)** |Selects an item in RadListView.Parameters: * **index** :* An integer index of the item to select. * **doNotRebind** :* Optional: A boolean value specifying whether RadListView should suppress rebinding. By default, RadListView rebinds when the selected items change.|
| **deselectItem(index, doNotRebind)** |Deselects an item in RadListView.Parameters: * **index** :* An integer index of the item to deselect. * **doNotRebind** :* Optional: A boolean value specifying whether RadListView should suppress rebinding. By default, RadListView rebinds when the selected items change.|
| **toggleSelection(index, doNotRebind)** |Toggles between the selected and deselected state of an item in RadListView.Parameters: * **index** :* An integer index of the item to toggle. * **doNotRebind** :* Optional: A boolean value specifying whether RadListView should suppress rebinding. By default, RadListView rebinds when the selected items change.|
| **selectAllItems(doNotRebind)** |Selects all items in RadListView. * **doNotRebind** :* Optional: A boolean value specifying whether RadListView should suppress rebinding. By default, RadListView rebinds when the selected items change.|
| **clearSelectedItems(doNotRebind)** |Clears all selected items in RadListView. * **doNotRebind** :* Optional: A boolean value specifying whether RadListView should suppress rebinding. By default, RadListView rebinds when the selected items change.|
| **page(command, doNotFireCommand)** |Navigates RadListView to the page specified as an argument. * **command** :* The actual page to which the user will be navigated. Possible values are 'First', 'Prev', 'Next', 'Last' and numeric values. * **doNotFireCommand** :* Optional: Indicates whether RadListView should prevent firing the Page command. By default, Page command is fired.|
| **sort(field, order, doNotFireCommand)** |Sorts the data in RadListView. * **field** :* The field name to sort by. If no sort order is specified, the sort order is toggled. * **order** :* Optional: One of the sort order values to specify: 'ASC', 'DESC' or 'NONE'. If this parameter is omitted, RadListView toggles the sort order of the field. * **doNotFireCommand** :* Optional: A boolean value indicating whether RadListView should suppress firing the Sort command. By default, Sort command is fired after each sort.|
| **clearSort(field, doNotFireCommand)** |Clears the sorting of the specified field or all the sort expressions if no field is specified. * **field** :* Optional: The field name whose sorting to clear. If this parameter is omitted, all sort expressions are cleared. * **doNotFireCommand** :* Optional: A boolean value indicating whether RadListView should suppress firing the Sort command. By default, Sort command is fired after each change in the sort expressions.|
| **filter(field, filterFunction, value, doNotFireCommand)** |Applied a filter to the data in RadListView. * **field** :* The field name to filter. * **filterFunction** :* The filter function to use. Accepted values are specified by the Telerik.Web.UI.RadListViewFilterFunction object. * **value** :* The filter value to use for the specified field. * **doNotFireCommand** :* Optional: A boolean value indicating whether RadListView should suppress firing the Filter command. By default, Filter command is fired when filtering.|
| **clearFilter(field, doNotFireCommand)** |Clears the filter expressions for the specified field. If no field is specified, clears all filter expression in RadListView. * **field** :* Optional: The field name to remove the filter of. If this parameter is omitted, all filter expressions will be cleared. * **doNotFireCommand** :* Optional: A boolean value indicating whether RadListView should suppress firing the Filter command. By default, Filter command is fired when filtering.|

## Client events

All events are exposed through the **RadListView.ClientSettings.ClientEvents** server settings, or through their respective **add_[Event]** and **remove_[Event]** javascript methods.


>caption  

|  ** *Event* **  |  ** *Description* **  |  ** *Arguments* **  |
| ------ | ------ | ------ |
| **OnCommand** |Raised for the following commants in RadListView: RebindListView, Edit Update, Delete, Cancel, InitInsert, PerformInsert, CancelInsert, Select, Deselect, Sort. Note: The client-side OnCommand RadListView event does not fire when the following client-side methods are called: **set_pageSize()**, **set_currentPageIndex()** .|<ul><li>**get_cancel()** - indicates whether the event will be cancelled.</li><li>  **set_cancel(shouldCancel)** - cancels the event if called with true as an argument.</li><li>  **get_commandArgument()** - returns the the name of the command which is about to be processed.</li><li>  **get_commandName()** - returnsthe command argument(s) value(s).</li><ul>|
| **OnDataBinding** |Raised when RadListView is databinding on the client-side. Calling dataBind() will fire this event.|<ul><li>**get_ajaxSettings()** - returns the settings for the ajax call to the data service.</li><li>**get_cancel()** - indicates whether the event will be cancelled.</li><li>**set_cancel(shouldCancel)** - cancels the event if called with true as an argument.</li><li>**get_dataServiceSettings()** - returns the settings for using the data service.</li><ul>|
| **OnDataBound** |Raised when RadListView has finished databinding.|N/A|
| **OnDataBindingFailed** |Raised when automatic databinding to web services has failed.|<ul><li>**get_exception()** - returns the deserialized response text.</li><li>**get_responseText()** - returns the response text from the service.</li><ul>|
| **OnDataSourceResolved** |Raised when RadListView successfully receives data from a web service when automatic databinding to web services.|<ul><li>**get_data()** - returns the data from the resolved datasource.</li><li>**set_data(data)** - sets the data for binding the listview.</li><li>**get_response()** - the response from the web service.</li><ul>|
| **OnItemDeselecting** |Raised before an item is deselected and its template rebound. Can be canceled.|<ul><li>**get_cancel()** - indicates whether the event will be cancelled.</li><li>**set_cancel(shouldCancel)** - cancels the event if called with true as an argument.</li><li>**get_itemIndex()** - returns the index of the item that is about to be deselected.</li><ul>|
| **OnItemDeselected** |Raised after an item is deselected.|<ul><li>**get_itemIndex()** - returns the index of the item that is deselected.</li><ul>|
| **OnItemSelecting** |Raised before an item is selected and its template rebound. Can be canceled.|<ul><li>**get_cancel()** - indicates whether the event will be cancelled.</li><li>**set_cancel(shouldCancel)** - cancels the event if called with true as an argument.</li><li>**get_itemIndex()** - returns the index of the item that is about to be selected.</li><ul>|
| **OnItemSelected** |Raised after an item is selected.|<ul><li>**get_itemIndex()** - returns the index of the item that is selected.</li><ul>|
| **OnTemplateCreated** |Raised for each template during databinding before the template is databound.|<ul><li>**get_context()** - returns the binding context of the template.</li><li>**get_template()** - returns the template object.</li><li>**set_template()** - sets the template object.</li><li>**get_name()** - returns the name of the template.</li><ul>|
| **OnTemplateDataBound** |Raised for each template during databinding after the template is databound and before the resulting HTML is added to the DOM.|<ul><li>**get_context()** - returns the binding context of the template</li><li>**get_html()** - returns the HTML of the template</li><li>**set_html()** - sets the HTML of the template</li><li>**get_name()** - returns the name of the template</li><li>**get_template()** - returns the template object</li><ul>|
