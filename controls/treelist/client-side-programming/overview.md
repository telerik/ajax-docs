---
title: Overview
page_title: Client-side Programming Overview | RadTreeList for ASP.NET AJAX Documentation
description: Overview
slug: treelist/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



This article introduces the RadTreeList client object with its properties, methods and events along with the client-side API of its child objects.

## RadTreeList client object

To get reference of the RadTreeList client-side object, you can use one of the following approaches:

* Using the **$find(id)** method (shortcut for the findComponent() method) of the ASP.NET AJAX framework:

````JavaScript
	    <telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
	        <script type="text/javascript">
	            function GetTreeList() {
	                var treelist = $find("<%= RadTreeList1.ClientID %>");
	            }
	        </script>
	    </telerik:RadCodeBlock>
````



* Subscribing for the **OnTreeListCreated** client-side event of the control. In its handler the sender argument references the **RadTreeList** client object:

````JavaScript
	    <script type="text/javascript">
	        var treeList = null;
	        function TreeListCreated(sender, eventArgs) {
	            treeList = sender;
	        }
	    </script>
	    <telerik:RadTreeList ID="RadTreeList1" runat="server">
	        <ClientSettings>
	            <ClientEvents OnTreeListCreated="TreeListCreated" />
	        </ClientSettings>
	    </telerik:RadTreeList>
````



### Client-side Properties

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

### Client-side Methods

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

### Client-side Events

**RadTreeList** provides the following client-side events:


>caption  

| Event | Description |
| ------ | ------ |
| **[OnItemClick](3611676e-0f7c-45c3-b44f-0cc81991a28b)** |This event is fired when a data item is clicked in RadTreeList.|
| **[OnItemContextMenu](adb24d72-e5d3-4e7b-8ec7-127e9767bf24)** |This event is fired when a right click on a TreeListDataItem happens.|
| **[OnItemCreated](68f37774-0e1e-4d37-944c-43867e8c42c1)** |This event is fired when each of the TreeListDataItem client components is created.|
| **[OnItemDblClick](f1a0dfc3-a00e-4831-a19a-b89b9618f235)** |This event is fired when a data item is double-clicked in RadTreeList.|
| **[OnItemDeselecting](aa27e743-ebe9-40ad-b555-f2e81d03cdb1)** |This event is fired when a TreeListDataItem is about to be deselected on the client. This event can be canceled.|
| **[OnItemDeselected](31f41d3e-335a-4938-a9f8-1ae6be1dd597)** |This event is fired when a TreeListDataItem is deselected on the client.|
| **[OnItemDragStarted](3ff831d8-b5e4-4276-ad35-29f55e0d675c)** |This event is fired when a drag action is started upon the TreeListDataItem.|
| **[OnItemDragging](5754cdc6-745d-4456-8ab8-b5ada8d38c9a)** |This event is fired when a TreeListDataItem is being dragged.|
| **[OnItemDropping](2ed97033-2ca4-4466-bc40-e98c4b485e4c)** |This event is fired when a TreeListDataItem is being dropped.|
| **[OnItemDropped](a76044a8-82fe-4b95-a909-3365e1770389)** |This event is fired when a TreeListDataItem has been dropped after dragging.|
| **[OnItemSelecting](b8045b41-ae89-4caf-ba63-1cc83588d245)** |This event is fired when a TreeListDataItem is about to be selected on the client. This event can be canceled.|
| **[OnItemSelected](541732ba-7b7b-4a12-9587-4eb9b88c7956)** |This event is fired when a TreeListDataItem is selected on the client.|
| **[OnKeyPress](e9206cf0-4491-4300-889f-2df5c15137e2)** |This event is fired (only when Keyboard Navigation is enabled) when any key is pressed inside the RadTreeList andthe treelist control is about to process this key.|
| **[OnScroll](0e549776-b543-4244-bf85-394a891b19e1)** |This event is fired when the treelist is scrolled.|
| **[OnTreeListCreating](98bf5e36-72d8-41de-b508-d2e598885cf6)** |This event is fired when the RadTreeList client component is initializing.|
| **[OnTreeListCreated](d7d82bd4-61ef-4e8d-b4fa-b1d4c1e4867d)** |This event is fired when the RadTreeList client component is initialized.|
| **[OnTreeListDestroying](ce7670a4-3f75-4db7-a876-5404b38c3383)** |This event is fired when the RadTreeList client component is about to be disposed.|
| **[OnColumnResizing](dc94a0af-a5ce-4341-bacf-ae2562e99c14)** |This event is fired before the treelist column is resized.|
| **[OnColumnResized](98321b92-2bc9-4381-9e6b-57ac4a2ce0c5)** |This event is fired after the treelist column is resized.|

## TreeListColumn client object

The **TreeListColumn** client object exposes the following properties:


>caption  

| Property | Description |
| ------ | ------ |
| **[get_owner()](ce7670a4-3f75-4db7-a876-5404b38c3383)** |A property which returns the treelist client-side object that holds the column.|
| **[get_uniqueName()](ce7670a4-3f75-4db7-a876-5404b38c3383)** |A property which returns the unique name of the column.|


>caption  

| Method | Description |
| ------ | ------ |
| **[hide(columnIndex) ](91adeef7-643e-4cd3-bebc-bf579867d54b)** |The column at the specified columnIndex will be hidden.|
| **[show(columnIndex) ](3e1dc7b8-450d-4ff0-8fdb-774c80e3637a)** |The column at the specified columnIndex will be shown.|

## TreeListDataItem client object

The **TreeListDataItem** client object exposes the following properties and methods:


>caption  

| Property | Description |
| ------ | ------ |
| **[get_dataKeyValue(keyName) ](8facbac4-613d-4a8d-9a06-8a0d0cd50fe4)** |A property which gets value of the client datakey name for this itemby the given keyname.|
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
| **[fireCommand(commandName, commandArgument)](d7002261-f0f9-4ffa-a417-f399b3a8f281)** |Method which triggers specific command for the TreeListDataItem when executed.The method is called for the TreeListDataItem client instance. The method arguments are thecommand which will be processed and its corresponding arguments.|
