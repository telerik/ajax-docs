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


>caption  

| Property | Description |
| ------ | ------ |
| **[get_dataKeyValue(keyName)](8facbac4-613d-4a8d-9a06-8a0d0cd50fe4)** |A property which gets value of the client datakey name for this itemby the given keyname.|
| **[get_expanded()](712d2f9b-f1d9-4e17-b3be-233d5dea4203)** |A property which returns whether the current item is expanded.|
| **[get_isRoot()](d88ad9e6-da5f-4428-8d45-0638974cdfeb)** |A property which returns whether the current item is root item for the treelist.|
| **[get_previousSibling()](015f0348-cd2f-475d-b25b-2556636421d0)** |A property which gets the previous sibling of the current item.|
| **[get_nextSibling()](6d7a3380-c89c-4c03-a69c-7beb5b116a37)** |A property which gets the next sibling of the current item.|
| **[get_parentItem()](c84e9550-6f49-4748-9150-336675563b2a)** |A property which gets the parent of the current item.|
| **[get_childItems()](6e47b4d4-1774-4f05-ad1a-7ae35db2f3c5)** |A property which gets a collection of the visible child items of the current item.|
| **[get_displayIndex()](45ea73d6-0b10-453c-a1e2-bc1249212067)** |A property which gets the index of the current item in the current page regardless of its nested level.|
| **[get_hierarchicalIndex()](11ffb166-428e-4980-b3a2-898d9bad0ac8)** |A property which gets the index of the current item in the treelist hierarchy.|
| **[get_selected()](0526528f-bc3f-4b73-99a5-db07e5462885)** |A boolean property indicating whether the item is selected or not.|
| **[set_selected(bool)](02f76989-71e2-4db1-ac33-26f904c8f055)** |A property which selects or deselects the current item based on the boolean value passed.|
| **[get_owner()](daff531d-4e13-49ac-8bd8-35a08c0066d2)** |A property which gets a reference to the owner RadTreeList object.|


>caption  

| Method | Description |
| ------ | ------ |
| **[fireCommand(commandName, commandArgument)](d7002261-f0f9-4ffa-a417-f399b3a8f281)** |Method which triggers specific command for the TreeListDataItem when executed. The method is called for the TreeListDataItem client instance. The method arguments are the command which will be processed and its corresponding arguments.|
