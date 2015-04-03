---
title: TreeList Object
page_title: TreeList Object | UI for ASP.NET AJAX Documentation
description: TreeList Object
slug: treelist/client-side-programming/treelist-object
tags: treelist,object
published: True
position: 1
---

# TreeList Object



## Client-side Properties

__RadTreeList__ provides the following client-side properties:


>caption  

| Property | Description |
| ------ | ------ |
| __[get_uniqueID()](1eda1b9c-f239-42ce-914b-b5f48a705c26)__ |Property which returns the unique id of RadTreeList.|
| __[get_dataItems()](c763b2d4-ecf9-4e37-bc6c-30ff3bcecf62)__ |Property which returns a collection of the RadTreeListItem objects available.|
| __[get_columns()](f81e5724-44b8-4646-9675-65afcffce741)__ |Property which returns a collection of the columns in the treelist.|
| __[get_selectedIndexes()](7c4b6f36-10e5-46bb-81c3-4ec786aeaee7)__ |Property which returns the collection of all selected indexes from RadTreeList.|
| __[set_selectedIndexes()](812d628f-2987-4508-b8d1-c756f82238e2)__ |Property which sets the selected indexes for RadTreeList.|
| __[get_selectedItems()](ddad2b65-b111-42d3-90a9-188ba46e51e6)__ |Property which returns the collection of all selected items of RadTreeList.|
| __[get_clientSettings()](ce79efa4-5aa3-4901-a8d5-ca3a9583d38f)__ |Property which returns client-side objects which represent the RadTreeList client settings.|
| __[get_clientDataKeyNames()](0f5d6228-efb9-4ed3-af1c-091f1298c316)__ |Property which gets a collection of the client datakey names.|
| __[get_currentPageIndex()](c86721dc-ae98-4a4d-b357-479ad5d0b500)__ |Property which returns the current page index of the treelist.|
| __[set_currentPageIndex()](fcd29318-f166-47fc-843b-91751ac6be3b)__ |Property which sets the current page index by firing a Page command.|

## Client-side Methods

__RadTreeList__ provides the following client-side methods:


>caption  

| Method | Description |
| ------ | ------ |
| __[getCellByColumnUniqueName(rowObject, uniqueName)](8ecea479-56ff-46e2-a5b4-652f0a2c05cc)__ |Property which returns the table cell of the TreeList by a given item(row) and column unique name|
| __[getColumnByUniqueName(uniqueName)](37a78b06-1038-46ae-94fb-20b614e7b9e6)__ |Property which gets the client side object for the column by a given unique name.|
| __[getContainerItem(element)](0a5e661b-92bd-4203-ab78-26e48018a9ce)__ |Property which receives a DOM element as an argument and returns a reference to the TreeListItem object which contains it.|
| __[getItem(rowIdIndex)](2e30b113-05e8-4c1b-9811-b6e570d1bee4)__ |Property which returns the client-side TreeList item.|
| __[selectItem(item)](6974d755-c1ce-48aa-a100-2152a349ea45)__ |The item corresponding to the treelist item passed as an argument will be selected.|
| __[deselectItem(item)](7b846a57-5b00-47e0-b753-5d2228956c71)__ |The item corresponding to the treelist item passed as an argument will be deselected.|
| __[selectAllItems()](e4411f23-fc46-4e47-bc3e-22e3c9b78baa)__ |Method which selects all items in the RadTreeList.|
| __[deselectAllItems()](b4904fa0-9d31-4160-b851-319e303e7728)__ |Method which deselects all items in the RadTreeList.|
| __[page(command)](c06c67cb-989f-4dae-8fcc-70694abbcae9)__ |Method which fires a page command with the specified command argument (Next, Prev, First, Last).|
| __[fireCommand(commandName, commandArgument)](b1b9bf75-ec6b-44f5-ae67-3181bd420faa)__ |Method which triggers specific command for the RadTreeList when executed. The method is called for the RadTreeList client instance. The method arguments are the command which will be processed and its corresponding arguments.|
