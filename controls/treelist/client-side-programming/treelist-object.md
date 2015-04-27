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
| **[get_uniqueID()](1eda1b9c-f239-42ce-914b-b5f48a705c26)** |Property which returns the unique id of RadTreeList.|
| **[get_dataItems()](c763b2d4-ecf9-4e37-bc6c-30ff3bcecf62)** |Property which returns a collection of the RadTreeListItem objects available.|
| **[get_columns()](f81e5724-44b8-4646-9675-65afcffce741)** |Property which returns a collection of the columns in the treelist.|
| **[get_selectedIndexes()](7c4b6f36-10e5-46bb-81c3-4ec786aeaee7)** |Property which returns the collection of all selected indexes from RadTreeList.|
| **[set_selectedIndexes()](812d628f-2987-4508-b8d1-c756f82238e2)** |Property which sets the selected indexes for RadTreeList.|
| **[get_selectedItems()](ddad2b65-b111-42d3-90a9-188ba46e51e6)** |Property which returns the collection of all selected items of RadTreeList.|
| **[get_clientSettings()](ce79efa4-5aa3-4901-a8d5-ca3a9583d38f)** |Property which returns client-side objects which represent the RadTreeList client settings.|
| **[get_clientDataKeyNames()](0f5d6228-efb9-4ed3-af1c-091f1298c316)** |Property which gets a collection of the client datakey names.|
| **[get_currentPageIndex()](c86721dc-ae98-4a4d-b357-479ad5d0b500)** |Property which returns the current page index of the treelist.|
| **[set_currentPageIndex()](fcd29318-f166-47fc-843b-91751ac6be3b)** |Property which sets the current page index by firing a Page command.|

## Client-side Methods

**RadTreeList** provides the following client-side methods:


>caption  

| Method | Description |
| ------ | ------ |
| **[getCellByColumnUniqueName(rowObject, uniqueName)](8ecea479-56ff-46e2-a5b4-652f0a2c05cc)** |Property which returns the table cell of the TreeList by a given item(row) and column unique name|
| **[getColumnByUniqueName(uniqueName)](37a78b06-1038-46ae-94fb-20b614e7b9e6)** |Property which gets the client side object for the column by a given unique name.|
| **[getContainerItem(element)](0a5e661b-92bd-4203-ab78-26e48018a9ce)** |Property which receives a DOM element as an argument and returns a reference to the TreeListItem object which contains it.|
| **[getItem(rowIdIndex)](2e30b113-05e8-4c1b-9811-b6e570d1bee4)** |Property which returns the client-side TreeList item.|
| **[selectItem(item)](6974d755-c1ce-48aa-a100-2152a349ea45)** |The item corresponding to the treelist item passed as an argument will be selected.|
| **[deselectItem(item)](7b846a57-5b00-47e0-b753-5d2228956c71)** |The item corresponding to the treelist item passed as an argument will be deselected.|
| **[selectAllItems()](e4411f23-fc46-4e47-bc3e-22e3c9b78baa)** |Method which selects all items in the RadTreeList.|
| **[deselectAllItems()](b4904fa0-9d31-4160-b851-319e303e7728)** |Method which deselects all items in the RadTreeList.|
| **[page(command)](c06c67cb-989f-4dae-8fcc-70694abbcae9)** |Method which fires a page command with the specified command argument (Next, Prev, First, Last).|
| **[fireCommand(commandName, commandArgument)](b1b9bf75-ec6b-44f5-ae67-3181bd420faa)** |Method which triggers specific command for the RadTreeList when executed. The method is called for the RadTreeList client instance. The method arguments are the command which will be processed and its corresponding arguments.|
