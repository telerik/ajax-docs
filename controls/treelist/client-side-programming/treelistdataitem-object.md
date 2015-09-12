---
title: TreeListDataItem Object
page_title: TreeListDataItem Object | RadTreeList for ASP.NET AJAX Documentation
description: TreeListDataItem Object
slug: treelist/client-side-programming/treelistdataitem-object
tags: treelistdataitem,object
published: True
position: 2
---

# TreeListDataItem Object



## TreeListDataItem client object

The **TreeListDataItem** client object exposes the following properties and methods:

### Properties

| Property | Description |
| ------ | ------ |
| **get_dataKeyValue(keyName)** |A property which gets value of the client datakey name for this itemby the given keyname.|
| **get_expanded()** |A property which returns whether the current item is expanded.|
| **get_isRoot()** |A property which returns whether the current item is root item for the treelist.|
| **get_previousSibling()** |A property which gets the previous sibling of the current item.|
| **get_nextSibling()** |A property which gets the next sibling of the current item.|
| **get_parentItem()** |A property which gets the parent of the current item.|
| **get_childItems()** |A property which gets a collection of the visible child items of the current item.|
| **get_displayIndex()** |A property which gets the index of the current item in the current page regardless of its nested level.|
| **get_hierarchicalIndex()** |A property which gets the index of the current item in the treelist hierarchy.|
| **get_selected()** |A boolean property indicating whether the item is selected or not.|
| **set_selected(bool)** |A property which selects or deselects the current item based on the boolean value passed.|
| **get_owner()** |A property which gets a reference to the owner RadTreeList object.|
| **get_clientExpanded** | Returns boolean value indicating if an item is expanded. |
| **set_clientExpanded(value)** | Sets the expanded state of an item. Note that *changing the state of an item will not expand or collapse it*. |


### Methods

| Method | Description |
| ------ | ------ |
| **fireCommand(commandName, commandArgument)** |Method which triggers specific command for the TreeListDataItem when executed. The method is called for the TreeListDataItem client instance. The method arguments are the command which will be processed and its corresponding arguments.|
| **toggleExpandCollapse** | Toggles the expanded/collapsed state of an item. |
