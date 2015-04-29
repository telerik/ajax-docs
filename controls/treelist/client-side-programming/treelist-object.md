---
title: TreeList Object
page_title: TreeList Object | RadTreeList for ASP.NET AJAX Documentation
description: TreeList Object
slug: treelist/client-side-programming/treelist-object
tags: treelist,object
published: True
position: 1
---

# TreeList Object



## Client-side Properties

**RadTreeList** provides the following client-side properties:


>caption  

| Property | Description |
| ------ | ------ |
| **get_uniqueID()** |Property which returns the unique id of RadTreeList.|
| **get_dataItems()** |Property which returns a collection of the RadTreeListItem objects available.|
| **get_columns()** |Property which returns a collection of the columns in the treelist.|
| **get_selectedIndexes()** |Property which returns the collection of all selected indexes from RadTreeList.|
| **set_selectedIndexes()** |Property which sets the selected indexes for RadTreeList.|
| **get_selectedItems()** |Property which returns the collection of all selected items of RadTreeList.|
| **get_clientSettings()** |Property which returns client-side objects which represent the RadTreeList client settings.|
| **get_clientDataKeyNames()** |Property which gets a collection of the client datakey names.|
| **get_currentPageIndex()** |Property which returns the current page index of the treelist.|
| **set_currentPageIndex()** |Property which sets the current page index by firing a Page command.|

## Client-side Methods

**RadTreeList** provides the following client-side methods:


>caption  

| Method | Description |
| ------ | ------ |
| **getCellByColumnUniqueName(rowObject, uniqueName)** |Property which returns the table cell of the TreeList by a given item(row) and column unique name|
| **getColumnByUniqueName(uniqueName)** |Property which gets the client side object for the column by a given unique name.|
| **getContainerItem(element)** |Property which receives a DOM element as an argument and returns a reference to the TreeListItem object which contains it.|
| **getItem(rowIdIndex)** |Property which returns the client-side TreeList item.|
| **selectItem(item)** |The item corresponding to the treelist item passed as an argument will be selected.|
| **deselectItem(item)** |The item corresponding to the treelist item passed as an argument will be deselected.|
| **selectAllItems()** |Method which selects all items in the RadTreeList.|
| **deselectAllItems()** |Method which deselects all items in the RadTreeList.|
| **page(command)** |Method which fires a page command with the specified command argument (Next, Prev, First, Last).|
| **fireCommand(commandName, commandArgument)** |Method which triggers specific command for the RadTreeList when executed. The method is called for the RadTreeList client instance. The method arguments are the command which will be processed and its corresponding arguments.|
