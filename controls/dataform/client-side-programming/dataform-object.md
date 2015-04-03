---
title: DataForm Object
page_title: DataForm Object | UI for ASP.NET AJAX Documentation
description: DataForm Object
slug: dataform/client-side-programming/dataform-object
tags: dataform,object
published: True
position: 0
---

# DataForm Object



The __RadDataForm__ control provides the following client-side events and methods.

## RadDataForm Properties


| Property | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __get_dataSource()__ ||Array|Gets the data source javascript array of __RadDataForm__ |
| __set_dataSource()__ |Array||Sets the data source of __RadDataForm__ |
| __get_isDataBinding()__ ||Boolean|Indicates whether __RadDataForm__ is currently databinding on the client-side|
| __get_isItemInserted()__ ||Boolean|Gets a value indicating whether the insert form is currently shown|
| __get_pageCount()__ ||Number|Gets the page count in __RadDataForm__ |
| __get_currentPageIndex()__ ||Number|Gets the current page index in case paging for __RadDataForm__ is enabled|
| __set_currentPageIndex()__ |Number||Sets the current page index in __RadDataForm__ |
| __get_virtualItemCount()__ ||Number|Gets the total number of items __RadDataForm__ can bind to. This value is used for page calculations.|
| __set_virtualItemCount()__ |Number||Sets the virtual item count in __RadDataForm__ |
| __get_uniqueID()__ ||String|Gets the unique id of the __RadDataForm__ container|
| __get_skin()__ ||String|Gets the skin set to __RadDataForm__ |
| __get_clientSettings()__ ||Object|Gets the current client settings applied for __RadDataForm__ |

## RadDataForm Methods


| Method | Parameters | Return Type | Description |
| ------ | ------ | ------ | ------ |
| __dataBind()__ |||Databinds the __RadDataForm__ when the client-side data source is set|
| __rebind()__ |||Rebinds __RadDataForm__ to its given data source|
| __editItem(itemIndex)__ |Number||Switches __RadDataForm__ item into edit mode (with index specified as an argument).The method takes the following argument:itemIndex: Index of the item that will be edited|
| __updateItem(itemIndex)__ |Number||Updates __RadDataForm__ item (with index specified as an argument).The method takes the following argument:itemIndex: Index of the edited item that will be updated|
| __deleteItem(itemIndex)__ |Number||Deletes __RadDataForm__ item with index specified as an argument.The method takes the following argument:itemIndex: Index of the item that will be deleted|
| __cancelUpdate(itemIndex)__ |Number||Cancels __RadDataForm__ item update (with index specified as an argument).The method takes the following argument:itemIndex: Index of the edited item for which update operation will be aborted|
| __showInsertItem(insertItemPosition)__ |Number||Displays the insert form of __RadDataForm__ .The method takes the following argument:insertItemPosition: Optional. The position of the insert item relative to the rest of the items in __RadDataForm__ . Accepted values enumerated in Telerik.Web.UI.RadDataFormInsertItemPosition|
| __insertItem()__ |||Inserts a new item in __RadDataForm__ with values taken from its insertion form|
| __cancelInsert()__ |||Cancels insert operation and hides __RadDataForm__ insertion form|
| __page(command, doNotFireCommand)__ |String, Boolean||Navigates __RadDataForm__ to the page specified as an argument. If server-side databinding is used, RadDataPager should be used for page navigation.The method takes the following arguments:command: The actual page to which the user will be navigated. Possible values are 'First', 'Prev', 'Next', 'Last' and numeric values.doNotFireCommand: Optional. Indicates whether __RadDataForm__ should prevent firing the Page command. By default, Page command is fired.|
| __fireCommand(commandName, commandArgument)__ |String, String||Fires command with command name and command argument specified as arguments.The method takes the following arguments:commandName: The name of the command that will be executed.commandArgument: The command argument with which the command will be executed.|
