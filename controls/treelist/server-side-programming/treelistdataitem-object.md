---
title: TreeListDataItem Object
page_title: TreeListDataItem Object | UI for ASP.NET AJAX Documentation
description: TreeListDataItem Object
slug: treelist/server-side-programming/treelistdataitem-object
tags: treelistdataitem,object
published: True
position: 1
---

# TreeListDataItem Object



Below are listed the properties, methods and collections you should be aware of when working with __TreeListDataItem__ object.

## Server-side Properties and Collections

__TreeListDataItem__ provides the following server-side properties:


>caption  

| Property | Description |
| ------ | ------ |
| __CanExpand__ |Returns a boolean value indicating whether the current item can be expanded (has child items).|
| __CanExtractValues__ |Returns a boolean value indicating whether data values can be extracted from the current item.|
| __ChildItems__ |A collection of the TreeListDataItems which are children to the current item.|
| __DataItem__ |Returns the underlying data object to which the TreeListDataItem object is bound.Available only during and after the ItemDataBound event.|
| __DataItemIndex__ |Returns the index of the current item's corresponding record inside the treelist datasource.|
| __DetailItem__ |Returns the TreeListDetailItem corresponding to the current item.|
| __DisplayIndex__ |Returns the index of the current item in the treelist, regardless of the items hierarchy.|
| __Edit__ |Gets or sets a value indicating whether the current item should be edited.|
| __EditFormItem__ |Returns the TreeListEditFormItem corresponding to the current item.|
| __Expanded__ |A boolean value idicating whether the current item is expanded.|
| __HierarchyIndex__ |A complex index composed of two parts - __NestedLevel__ , indicating onwhich level of the treelist hierarchy is the current item, and __LevelIndex__ which indicates the position of the item in this level.|
| __InsertItem__ |Returns a TreeListEditableItem object which is the inserted (child) item corresponding to thecurrent item.|
| __IsChildItemInserted__ |A boolean value indicating whether a child item is currently being inserted for theitem.|
| __IsInEditMode__ |A boolean value indicating whether the item is currently in edit mode.|
| __OwnerTreeList__ |Returns the RadTreeList object to which the current item belongs.|
| __ParentItem__ |Returns TreeListItem which is a parent to the current item in the treelist hierarchy.|
| __SavedOldValues__ |A collection of type IDictionary used while the item is being edited to provide its original values before the current edit operation.|
| __Selected__ |A boolean value idicating whether item is currently selected.|

## Server-side Methods

__TreeListDataItem__ provides the following server-side methods:


>caption  

| Method | Description |
| ------ | ------ |
| __ExtractValues(IDictionary newValues)__ |Fills an IDictionary object with the values of the current item (applicable when the item is inedit mode).|
| __FireCommandEvent(string eventName, string eventArgs)__ |Fires a command with the name and arguments provided, which results in the ItemCommand event firing.|
| __GetColumnEditor(TreeListEditableColumn editableColumn)__ |Returns the editor control for the provided column when the current item is in edit mode.|
| __GetDataKeyValue(string keyName)__ |Returns the value of the data field provided as a DataKeyName corresponding to the current item.|
| __GetParentDataKeyValue(string keyName)__ |Returns the value of the data field provided as a ParentDataKeyName corresponding to the current item.|
| __InsertChildItem()__ |Inserts a new child item for the current item.|
| __UpdateValues(object objectToUpdate)__ |Extracts values for each column, using FillValues(IDictionary, GridEditableItem) and updatesvalues in provided object.|
