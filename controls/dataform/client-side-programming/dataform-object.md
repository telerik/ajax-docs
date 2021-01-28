---
title: DataForm Object
page_title: DataForm Object - RadDataForm
description: Check our Web Forms article about DataForm Object.
slug: dataform/client-side-programming/dataform-object
tags: dataform,object
published: True
position: 0
---

# DataForm Object



The **RadDataForm** control provides the following client-side events and methods.

## RadDataForm Properties


| Property | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **get_dataSource()** ||Array|Gets the data source javascript array of **RadDataForm** |
| **set_dataSource()** |Array||Sets the data source of **RadDataForm** |
| **get_isDataBinding()** ||Boolean|Indicates whether **RadDataForm** is currently databinding on the client-side|
| **get_isItemInserted()** ||Boolean|Gets a value indicating whether the insert form is currently shown|
| **get_pageCount()** ||Number|Gets the page count in **RadDataForm** |
| **get_currentPageIndex()** ||Number|Gets the current page index in case paging for **RadDataForm** is enabled|
| **set_currentPageIndex()** |Number||Sets the current page index in **RadDataForm** |
| **get_virtualItemCount()** ||Number|Gets the total number of items **RadDataForm** can bind to. This value is used for page calculations.|
| **set_virtualItemCount()** |Number||Sets the virtual item count in **RadDataForm** |
| **get_uniqueID()** ||String|Gets the unique id of the **RadDataForm** container|
| **get_skin()** ||String|Gets the skin set to **RadDataForm** |
| **get_clientSettings()** ||Object|Gets the current client settings applied for **RadDataForm** |

## RadDataForm Methods


| Method | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| **dataBind()** |||Databinds the **RadDataForm** when the client-side data source is set|
| **rebind()** |||Rebinds **RadDataForm** to its given data source|
| **editItem(itemIndex)** |Number||Switches **RadDataForm** item into edit mode (with index specified as an argument).The method takes the following argument:itemIndex: Index of the item that will be edited|
| **updateItem(itemIndex)** |Number||Updates **RadDataForm** item (with index specified as an argument).The method takes the following argument:itemIndex: Index of the edited item that will be updated|
| **deleteItem(itemIndex)** |Number||Deletes **RadDataForm** item with index specified as an argument.The method takes the following argument:itemIndex: Index of the item that will be deleted|
| **cancelUpdate(itemIndex)** |Number||Cancels **RadDataForm** item update (with index specified as an argument).The method takes the following argument:itemIndex: Index of the edited item for which update operation will be aborted|
| **showInsertItem(insertItemPosition)** |Number||Displays the insert form of **RadDataForm** .The method takes the following argument: `insertItemPosition`. The position of the insert item relative to the rest of the items in **RadDataForm** . Accepted values enumerated in `Telerik.Web.UI.RadDataFormInsertItemPosition` - `.FirstItem`, `.LastItem`, `.None`.|
| **insertItem()** |||Inserts a new item in **RadDataForm** with values taken from its insertion form|
| **cancelInsert()** |||Cancels insert operation and hides **RadDataForm** insertion form|
| **page(command, doNotFireCommand)** |String, Boolean||Navigates **RadDataForm** to the page specified as an argument. If server-side databinding is used, RadDataPager should be used for page navigation.The method takes the following arguments:command: The actual page to which the user will be navigated. Possible values are 'First', 'Prev', 'Next', 'Last' and numeric values.doNotFireCommand: Optional. Indicates whether **RadDataForm** should prevent firing the Page command. By default, Page command is fired.|
| **fireCommand(commandName, commandArgument)** |String, String||Fires command with command name and command argument specified as arguments.The method takes the following arguments:commandName: The name of the command that will be executed.commandArgument: The command argument with which the command will be executed.|
