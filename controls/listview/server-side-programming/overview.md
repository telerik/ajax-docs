---
title: Overview
page_title: Server-side Programming Overview | RadListView for ASP.NET AJAX Documentation
description: Overview
slug: listview/server-side-programming/overview
tags: overview
published: True
position: 0
---

# Server-side Programming Overview



Following are tables of the most important properties and event you should be aware of when working with __RadListView__.

## Properties


|  __Property__  |  __Description__  |
| ------ | ------ |
| __AllowCustomPaging__ |Gets or sets a value that indicates whether custom paging is enabled.|
| __AllowCustomSorting__ |Gets or sets a value that indicates whether custom sorting is enabled.|
| __AllowMultiFieldSorting__ |Gets or sets the value indicating whether more than one column can be sorted in a single __RadListView__ . The order is the same as the sequence of expressions in SortExpressions.|
| __AllowMultiItemEdit__ |Gets or sets a value indicating whether Telerik __RadListView__ will allow you to have multiple items in edit mode. The default value is __false__ .|
| __AllowMultiItemSelection__ |Gets or sets a value indicating whether Telerik __RadListView__ will allow you to select multiple items. By default this property is set to __false__ .|
| __AllowNaturalSort__ |When the property is set to __true__ the no-sort state when changing sort order is allowed. Set it to __false__ to force only two-way sorting (ascending and descending).|
| __AllowPaging__ |Gets or sets a value indicating whether the paging feature is enabled.|
| __CanRetrieveAllData__ |Gets or sets a value indicating whether Telerik __RadListView__ should retrieve all data and ignore server paging in case of filtering or grouping.|
| __InsertItemPosition__ |Gets or sets the position of the InsertItemTemplate template when RadListView is in insert mode. The possible values are: __None__ , __FirstItem__ , __LastItem__ .|
| __ItemPlaceholderID__ |Gets or sets the ID for the item placeholder in a __RadListView__ control.|
| __OverrideDataSourceControlSorting__ |When the property is set to true, the __RadListView__ control will sort internally instead of the DataSourceControl.|
| __SortExpressions__ |Add or remove objects to this collection to set sorting programmatically.|
| __VirtualItemCount__ |Gets or sets a value, indicating the total number of items in the data source when custom paging is used. Thus RadListView "understands" that the data source contains the specified number of records and it should fetch merely part of them at a time to execute requested operation.|
| __ClientSettings.AllowItemsDragDrop__ |Gets or sets a value, indicating if Items Drag & Drop in RadListView capability is enabled.|

## Events


|  __Category__  |  __Event__  |  __Description__  |
| ------ | ------ | ------ |
| __Action__ | __ItemCanceling__ |Fired when the __Cancel__ button is clicked for an item in the __RadListView__ control.|
|| __ItemCommand__ |Fired when any button is clicked in the __RadListView__ control. All bubbled events from grid items fire __RadListView.ItemCommand__ . Those like - Edit, Delete, or Update command events can be used to handle custom data-editing in __RadListView.__ |
|| __ItemCreated__ |Fired on the server when an item in the __RadListView__ control is created.|
|| __ItemDataBound__ |Fired after an item is databound to the __RadListView__ control.|
|| __ItemDeleted__ |Fired when an automatic delete operation is executed.|
|| __ItemDeleting__ |Fired before an automatic delete operation is executed.|
|| __ItemDrop__ |Fired when drag and drop operation is triggered from the client.|
|| __ItemEditing__ |Fired when the __Edit__ button is clicked for an item in the __RadListView__ control.|
|| __ItemInserted__ |Fired when an automatic insert operation is executed.|
|| __ItemInserting__ |Fired before an automatic insert operation is executed.|
|| __ItemUpdated__ |Fired when an automatic update operation is executed.|
|| __ItemUpdating__ |Fired before an automatic update operation is executed.|
|| __LayoutCreated__ |Fired when the __LayoutTemplate__ template is created in a __RadListView__ control.|
|| __NeedDataSource__ |Fired when __RadListView__ needs a data source for rebinding.|
|| __PageIndexChanged__ |Fired when one of the page selection elements is clicked.|
|| __PageIndexChanged__ |Fired when one of the page selection elements is clicked.|
|| __PageSizeChanged__ |Fired when the page size is changed through the advanced pager or manually in code.|
|| __SelectedIndexChanged__ |Fired when a different item is selected in a data listing control between posts to the server.|
|| __Sorting__ |Fired when a sort operation is requested and before the __RadListView__ control handles the sort operation.|
| __Data__ | __DataBinding__ (inherited from __Control__ )|Fired right before the server control binds to a data source.|
|| __DataBound__ (inherited from __Control__ )|Fired when the server control is bound to a data source.|
| __Misc__ | __Disposed__ (inherited from __Control__ )|Fired when a server control is released from the memory, which is the last stage of the server control lifecycle when an ASP.NET page is requested.|
|| __Init__ (inherited from __Control__ )|Fired when the server control is initialized, which is the first step in its lifecycle.|
|| __Load__ (inherited from __Control__ )|Fired when the server control is loaded into the __RadListView__ object.|
|| __PreRender__ (inherited from __Control__ )|Fired when the server control is about to render to its containing __Page__ object.|
|| __Unload__ (inherited from __Control__ )|Fired when the server control is unloaded from the memory.|
