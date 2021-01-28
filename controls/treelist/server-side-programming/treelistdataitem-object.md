---
title: TreeListDataItem Object
page_title: TreeListDataItem Object - RadTreeList
description: Check our Web Forms article about TreeListDataItem Object.
slug: treelist/server-side-programming/treelistdataitem-object
tags: treelistdataitem,object
published: True
position: 1
---

# TreeListDataItem Object



Below are listed the properties, methods and collections you should be aware of when working with **TreeListDataItem** object.

## Server-side Properties and Collections

**TreeListDataItem** provides the following server-side properties:


>caption  

| Property | Description |
| ------ | ------ |
| **CanExpand** |Returns a boolean value indicating whether the current item can be expanded (has child items).|
| **CanExtractValues** |Returns a boolean value indicating whether data values can be extracted from the current item.|
| **ChildItems** |A collection of the TreeListDataItems which are children to the current item.|
| **DataItem** |Returns the underlying data object to which the TreeListDataItem object is bound.Available only during and after the ItemDataBound event.|
| **DataItemIndex** |Returns the index of the current item's corresponding record inside the treelist datasource.|
| **DetailItem** |Returns the TreeListDetailItem corresponding to the current item.|
| **DisplayIndex** |Returns the index of the current item in the treelist, regardless of the items hierarchy.|
| **Edit** |Gets or sets a value indicating whether the current item should be edited.|
| **EditFormItem** |Returns the TreeListEditFormItem corresponding to the current item.|
| **Expanded** |A boolean value idicating whether the current item is expanded.|
| **HierarchyIndex** |A complex index composed of two parts - **NestedLevel** , indicating onwhich level of the treelist hierarchy is the current item, and **LevelIndex** which indicates the position of the item in this level.|
| **InsertItem** |Returns a TreeListEditableItem object which is the inserted (child) item corresponding to thecurrent item.|
| **IsChildItemInserted** |A boolean value indicating whether a child item is currently being inserted for theitem.|
| **IsInEditMode** |A boolean value indicating whether the item is currently in edit mode.|
| **OwnerTreeList** |Returns the RadTreeList object to which the current item belongs.|
| **ParentItem** |Returns TreeListItem which is a parent to the current item in the treelist hierarchy.|
| **SavedOldValues** |A collection of type IDictionary used while the item is being edited to provide its original values before the current edit operation.|
| **Selected** |A boolean value idicating whether item is currently selected.|

## Server-side Methods

**TreeListDataItem** provides the following server-side methods:


>caption  

| Method | Description |
| ------ | ------ |
| **ExtractValues(IDictionary newValues)** |Fills an IDictionary object with the values of the current item (applicable when the item is inedit mode).|
| **FireCommandEvent(string eventName, string eventArgs)** |Fires a command with the name and arguments provided, which results in the ItemCommand event firing.|
| **GetColumnEditor(TreeListEditableColumn editableColumn)** |Returns the editor control for the provided column when the current item is in edit mode.|
| **GetDataKeyValue(string keyName)** |Returns the value of the data field provided as a DataKeyName corresponding to the current item.|
| **GetParentDataKeyValue(string keyName)** |Returns the value of the data field provided as a ParentDataKeyName corresponding to the current item.|
| **InsertChildItem()** |Inserts a new child item for the current item.|
| **UpdateValues(object objectToUpdate)** |Extracts values for each column, using FillValues(IDictionary, GridEditableItem) and updatesvalues in provided object.|
