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

For a detailed list with the server-side properties and methods of the control, see the [Server-Side API of the RadListView class](https://docs.telerik.com/devtools/aspnet-ajax/api/server/Telerik.Web.UI/RadListView).

Following are tables of the most important properties and event you should be aware of when working with **RadListView**.

## Properties


|  **Property**  |  **Description**  |
| ------ | ------ |
| **AllowCustomPaging** |Gets or sets a value that indicates whether custom paging is enabled.|
| **AllowCustomSorting** |Gets or sets a value that indicates whether custom sorting is enabled.|
| **AllowMultiFieldSorting** |Gets or sets the value indicating whether more than one column can be sorted in a single **RadListView** . The order is the same as the sequence of expressions in SortExpressions.|
| **AllowMultiItemEdit** |Gets or sets a value indicating whether Telerik **RadListView** will allow you to have multiple items in edit mode. The default value is **false** .|
| **AllowMultiItemSelection** |Gets or sets a value indicating whether Telerik **RadListView** will allow you to select multiple items. By default this property is set to **false** .|
| **AllowNaturalSort** |When the property is set to **true** the no-sort state when changing sort order is allowed. Set it to **false** to force only two-way sorting (ascending and descending).|
| **AllowPaging** |Gets or sets a value indicating whether the paging feature is enabled.|
| **CanRetrieveAllData** |Gets or sets a value indicating whether Telerik **RadListView** should retrieve all data and ignore server paging in case of filtering or grouping.|
| **InsertItemPosition** |Gets or sets the position of the InsertItemTemplate template when RadListView is in insert mode. The possible values are: **None** , **FirstItem** , **LastItem** .|
| **ItemPlaceholderID** |Gets or sets the ID for the item placeholder in a **RadListView** control.|
| **OverrideDataSourceControlSorting** |When the property is set to true, the **RadListView** control will sort internally instead of the DataSourceControl.|
| **SortExpressions** |Add or remove objects to this collection to set sorting programmatically.|
| **VirtualItemCount** |Gets or sets a value, indicating the total number of items in the data source when custom paging is used. Thus RadListView "understands" that the data source contains the specified number of records and it should fetch merely part of them at a time to execute requested operation.|
| **ClientSettings.AllowItemsDragDrop** |Gets or sets a value, indicating if Items Drag & Drop in RadListView capability is enabled.|

## Events


|  **Category**  |  **Event**  |  **Description**  |
| ------ | ------ | ------ |
| **Action** | **ItemCanceling** |Fired when the **Cancel** button is clicked for an item in the **RadListView** control.|
|| **ItemCommand** |Fired when any button is clicked in the **RadListView** control. All bubbled events from grid items fire **RadListView.ItemCommand** . Those like - Edit, Delete, or Update command events can be used to handle custom data-editing in **RadListView.** |
|| **ItemCreated** |Fired on the server when an item in the **RadListView** control is created.|
|| **ItemDataBound** |Fired after an item is databound to the **RadListView** control.|
|| **ItemDeleted** |Fired when an automatic delete operation is executed.|
|| **ItemDeleting** |Fired before an automatic delete operation is executed.|
|| **ItemDrop** |Fired when drag and drop operation is triggered from the client.|
|| **ItemEditing** |Fired when the **Edit** button is clicked for an item in the **RadListView** control.|
|| **ItemInserted** |Fired when an automatic insert operation is executed.|
|| **ItemInserting** |Fired before an automatic insert operation is executed.|
|| **ItemUpdated** |Fired when an automatic update operation is executed.|
|| **ItemUpdating** |Fired before an automatic update operation is executed.|
|| **LayoutCreated** |Fired when the **LayoutTemplate** template is created in a **RadListView** control.|
|| **NeedDataSource** |Fired when **RadListView** needs a data source for rebinding.|
|| **PageIndexChanged** |Fired when one of the page selection elements is clicked.|
|| **PageIndexChanged** |Fired when one of the page selection elements is clicked.|
|| **PageSizeChanged** |Fired when the page size is changed through the advanced pager or manually in code.|
|| **SelectedIndexChanged** |Fired when a different item is selected in a data listing control between posts to the server.|
|| **Sorting** |Fired when a sort operation is requested and before the **RadListView** control handles the sort operation.|
| **Data** | **DataBinding** (inherited from **Control** )|Fired right before the server control binds to a data source.|
|| **DataBound** (inherited from **Control** )|Fired when the server control is bound to a data source.|
| **Misc** | **Disposed** (inherited from **Control** )|Fired when a server control is released from the memory, which is the last stage of the server control lifecycle when an ASP.NET page is requested.|
|| **Init** (inherited from **Control** )|Fired when the server control is initialized, which is the first step in its lifecycle.|
|| **Load** (inherited from **Control** )|Fired when the server control is loaded into the **RadListView** object.|
|| **PreRender** (inherited from **Control** )|Fired when the server control is about to render to its containing **Page** object.|
|| **Unload** (inherited from **Control** )|Fired when the server control is unloaded from the memory.|
