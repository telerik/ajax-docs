---
title: API
page_title: API | UI for ASP.NET AJAX Documentation
description: API
slug: listview/data-binding/client-side/api
tags: api
published: True
position: 4
---

# API



In this article you can find the client and server-side APIs exposed by RadListView for performing client-side binding and controlling the control behavior when bound this way.

* __Server propertieshttp://www.telerik.com/help/aspnet-ajax/listview-clientside-binding-api.html#Section0_self__

* __Client propertieshttp://www.telerik.com/help/aspnet-ajax/listview-clientside-binding-api.html#Section1_self__

* __Client methodshttp://www.telerik.com/help/aspnet-ajax/listview-clientside-binding-api.html#Section2_self__

* __Client eventshttp://www.telerik.com/help/aspnet-ajax/listview-clientside-binding-api.html#Section3_self__

## Server properties

RadListView defines the following new properties in the __ClientSettings.DataBinding__ settings:


>caption  

|  __ *Property* __  |  __ *Description* __  |
| ------ | ------ |
| __ItemPlaceHolderID__ |ID of HTML element in the layout template that will contain the items|
| __ContainerID__ |ID of the container HTML element that will contain the rendered RadListView|
| __LayoutTemplate__ |HTML layout template. If this template is omitted, the server-side LayoutTemplate needs to be defined.|
| __ItemTemplate__ |HTML item template|
| __AlternatingItemTemplate__ |HTML alternating item template|
| __ItemSeparatorTemplate__ |HTML item separator template|
| __EmptyDataTemplate__ |HTML template rendered when RadListView contains no data|
| __SelectedItemTemplate__ |HTML template rendered when item is selected|
| __DataService.Location__ |web service location|
| __DataService.DataPath__ |path or method name to append to location when requesting data|
| __DataService.CountPath__ |path or method name to append to location when requesting item count|
| __DataService.HttpMethod__ |Post|Get; HTTP method to use when accessing web service. *Default: Post* |
| __DataService.DataPropertyName__ |field name in the JSON result containing the data array|
| __DataService.CountPropertyName__ |field name in the JSON result containing the item count|
| __DataService.EnableCaching__ |false|true; specifies if data caching is used. *Default: false* |
| __DataService.ResponseType__ |JSON|JSONP; specifies the response format. *Default: JSON* |
| __DataService.StartRowIndexParameterName__ |request parameter name specifying start row index|
| __DataService.MaximumRowsParameterName__ |request parameter name specifying the maximum rows|
| __DataService.SortParameterName__ |request parameter name specifying sort expression|
| __DataService.SortParameterType__ |List|Linq|OData|Sql; specifies the format of the sort expression. *Default: List* |
| __DataService.FilterParameterName__ |request parameter name specifying filter expression|
| __DataService.FilterParameterType__ |List|Linq|OData|Sql; specifies the format of the filter expression. *Default: List* |

## Client APIs

Client-side databinding enabled many new APIs in the client RadListView component. With these new additions RadListView's client-side capabilities are greatly enhanced. Here is a list of the new properties and methods in RadListView, as well as the new client-side events that have been added:


>caption Properties

|  __ *Property* __  |  __ *Description* __  |
| ------ | ------ |
| __get_dataSource()__ |Returns the currently set datasource of the control.|
| __get_isDataBinding()__ |Indicates whether RadListView is currently databinding on the client-side.|
| __get_isInitializedOnClient()__ |Indicates whether RadListView is initialized entirely on the client-side with no server-side control.|
| __get_isDataBoundOnClient()__ |Indicates whether RadListView is setup for client-side databinding.|
| __set_dataSource()__ |Sets the datasource to which the control should bind.|
| __get_selectedIndexes()__ |Returns the indexes of all items that are currently selected.|
| __set_selectedIndexes()__ |Selects the items at the provided indexes.|
| __get_allowMultiItemSelection()__ |A boolean property indicating whether multi-item selection has been enabled.|
| __get_allowPaging()__ |A boolean property indicating whether paging has been enabled.|
| __set_allowPaging()__ |A boolean property used to enable/disable paging depending on the boolean value passed as an argument.|
| __get_pageCount()__ |Returns the current number of pages in the control.|
| __get_pageSize()__ |Returns an integer representing the page size in the listview.|
| __set_pageSize()__ |A property used to set the max number of items that would be displayed in one page.|
| __get_currentPageIndex()__ |Returns an integer representing the current page shown in the listview.|
| __set_currentPageIndex()__ |A property used to specify the current page shown.|
| __get_virtualItemCount()__ |Returns the virtual item count value for the RadListView.|
| __set_virtualItemCount()__ |Sets the virtual item count value for the RadListView.|
| __get_sortExpressions()__ |Returns a RadListViewSortExpressions object used for manipulating the sort expressions in RadListView.|
| __get_allowNaturalSort()__ |Returns whether natural sort is enabled (or "no sort" mode).|
| __get_filterExpressions()__ |Returns a RadListViewFilterExpressions object used for manipulating the filter expressions in RadListView.|

## Methods


>caption  

|  __ *Method* __  |  __ *Description* __  |
| ------ | ------ |
| __Telerik.Web.UI.RadListView.create(elementId, itemPlaceHolderId, useElementContentAsLayout)__ |Creates a client RadListView component for use in no server control scenarios.Parameters: * __elementId__ :* The id of an HTML element to associate with the control. * __itemPlaceHolderId__ :* Optional: The id of an HTML element that will contain the RadListView items. * __useElementContentAsLayout__ :* Optional: Specifies whether the innerHTML of the container element will be used as a LayoutTemplate.|
| __dataBind()__ |Binds the RadListView to the datasource provided through set_dataSource().|
| __rebind()__ |Rebinds RadListView to its given data source.|
| __rebindItem(index)__ |Rebinds a single item specified by its index.Parameters: * __index__ :* The index of the item to rebind.|
| __appendData(data)__ |Appends additional data to the current data source and creates new items for the new data. Existing items are not modified.Parameters: * __data__ :* A javascript array of objects to append.|
| __selectItem(index, doNotRebind)__ |Selects an item in RadListView.Parameters: * __index__ :* An integer index of the item to select. * __doNotRebind__ :* Optional: A boolean value specifying whether RadListView should suppress rebinding. By default, RadListView rebinds when the selected items change.|
| __deselectItem(index, doNotRebind)__ |Deselects an item in RadListView.Parameters: * __index__ :* An integer index of the item to deselect. * __doNotRebind__ :* Optional: A boolean value specifying whether RadListView should suppress rebinding. By default, RadListView rebinds when the selected items change.|
| __toggleSelection(index, doNotRebind)__ |Toggles between the selected and deselected state of an item in RadListView.Parameters: * __index__ :* An integer index of the item to toggle. * __doNotRebind__ :* Optional: A boolean value specifying whether RadListView should suppress rebinding. By default, RadListView rebinds when the selected items change.|
| __selectAllItems(doNotRebind)__ |Selects all items in RadListView. * __doNotRebind__ :* Optional: A boolean value specifying whether RadListView should suppress rebinding. By default, RadListView rebinds when the selected items change.|
| __clearSelectedItems(doNotRebind)__ |Clears all selected items in RadListView. * __doNotRebind__ :* Optional: A boolean value specifying whether RadListView should suppress rebinding. By default, RadListView rebinds when the selected items change.|
| __page(command, doNotFireCommand)__ |Navigates RadListView to the page specified as an argument. * __command__ :* The actual page to which the user will be navigated. Possible values are 'First', 'Prev', 'Next', 'Last' and numeric values. * __doNotFireCommand__ :* Optional: Indicates whether RadListView should prevent firing the Page command. By default, Page command is fired.|
| __sort(field, order, doNotFireCommand)__ |Sorts the data in RadListView. * __field__ :* The field name to sort by. If no sort order is specified, the sort order is toggled. * __order__ :* Optional: One of the sort order values to specify: 'ASC', 'DESC' or 'NONE'. If this parameter is omitted, RadListView toggles the sort order of the field. * __doNotFireCommand__ :* Optional: A boolean value indicating whether RadListView should suppress firing the Sort command. By default, Sort command is fired after each sort.|
| __clearSort(field, doNotFireCommand)__ |Clears the sorting of the specified field or all the sort expressions if no field is specified. * __field__ :* Optional: The field name whose sorting to clear. If this parameter is omitted, all sort expressions are cleared. * __doNotFireCommand__ :* Optional: A boolean value indicating whether RadListView should suppress firing the Sort command. By default, Sort command is fired after each change in the sort expressions.|
| __filter(field, filterFunction, value, doNotFireCommand)__ |Applied a filter to the data in RadListView. * __field__ :* The field name to filter. * __filterFunction__ :* The filter function to use. Accepted values are specified by the Telerik.Web.UI.RadListViewFilterFunction object. * __value__ :* The filter value to use for the specified field. * __doNotFireCommand__ :* Optional: A boolean value indicating whether RadListView should suppress firing the Filter command. By default, Filter command is fired when filtering.|
| __clearFilter(field, doNotFireCommand)__ |Clears the filter expressions for the specified field. If no field is specified, clears all filter expression in RadListView. * __field__ :* Optional: The field name to remove the filter of. If this parameter is omitted, all filter expressions will be cleared. * __doNotFireCommand__ :* Optional: A boolean value indicating whether RadListView should suppress firing the Filter command. By default, Filter command is fired when filtering.|

## Client events

All events are exposed through the __RadListView.ClientSettings.ClientEvents__ server settings, or through their respective __add_[Event]__ and __remove_[Event]__ javascript methods.


>caption  

|  __ *Event* __  |  __ *Description* __  |  __ *Arguments* __  |
| ------ | ------ | ------ |
| __OnCommand__ |Raised for the following commants in RadListView: RebindListView, Edit Update, Delete, Cancel, InitInsert, PerformInsert, CancelInsert, Select, Deselect, Sort.

>note The client-side OnCommand RadListView event does not fire when the following client-side methods are called: __set_pageSize()__ , s __et_currentPageIndex()__ .
>
|

*  __get_cancel()__ - indicates whether the event will be cancelled.

*  __set_cancel(shouldCancel)__ - cancels the event if called with true as an argument.

*  __get_commandArgument()__ - returns the the name of the command which is about to be processed.

*  __get_commandName()__ - returnsthe command argument(s) value(s).|
| __OnDataBinding__ |Raised when RadListView is databinding on the client-side. Calling dataBind() will fire this event.|

*  __get_ajaxSettings()__ - returns the settings for the ajax call to the data service.

*  __get_cancel()__ - indicates whether the event will be cancelled.

*  __set_cancel(shouldCancel)__ - cancels the event if called with true as an argument.

*  __get_dataServiceSettings()__ - returns the settings for using the data service.|
| __OnDataBound__ |Raised when RadListView has finished databinding.|N/A|
| __OnDataBindingFailed__ |Raised when automatic databinding to web services has failed.|

*  __get_exception()__ - returns the deserialized response text.

*  __get_responseText()__ - returns the response text from the service.|
| __OnDataSourceResolved__ |Raised when RadListView successfully receives data from a web service when automatic databinding to web services.|

*  __get_data()__ - returns the data from the resolved datasource.

*  __set_data(data)__ - sets the data for binding the listview.

*  __get_response()__ - the response from the web service.|
| __OnItemDeselecting__ |Raised before an item is deselected and its template rebound. Can be canceled.|

*  __get_cancel()__ - indicates whether the event will be cancelled.

*  __set_cancel(shouldCancel)__ - cancels the event if called with true as an argument.

*  __get_itemIndex()__ - returns the index of the item that is about to be deselected.|
| __OnItemDeselected__ |Raised after an item is deselected.|

*  __get_itemIndex()__ - returns the index of the item that is deselected.|
| __OnItemSelecting__ |Raised before an item is selected and its template rebound. Can be canceled.|

*  __get_cancel()__ - indicates whether the event will be cancelled.

*  __set_cancel(shouldCancel)__ - cancels the event if called with true as an argument.

*  __get_itemIndex()__ - returns the index of the item that is about to be selected.|
| __OnItemSelected__ |Raised after an item is selected.|

*  __get_itemIndex()__ - returns the index of the item that is selected.|
| __OnTemplateCreated__ |Raised for each template during databinding before the template is databound.|

*  __get_context()__ - returns the binding context of the template.

*  __get_template()__ - returns the template object.

*  __set_template()__ - sets the template object.

*  __get_name()__ - returns the name of the template.|
| __OnTemplateDataBound__ |Raised for each template during databinding after the template is databound and before the resulting HTML is added to the DOM.|

*  __get_context()__ - returns the binding context of the template

*  __get_html()__ - returns the HTML of the template

*  __set_html()__ - sets the HTML of the template

*  __get_name()__ - returns the name of the template

*  __get_template()__ - returns the template object|
