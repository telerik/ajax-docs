---
title: Overview
page_title: Client-side Programming Overview - RadListView
description: Check our Web Forms article about Overview.
slug: listview/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



## RadListView Client-side Object Model

RadListView provides the following objects on the client-side:


|  **Properties**  |  **Description**  |
| ------ | ------ |
| **.get_uniqueID()** |This property returns the unique id of the RadListView.|
| **.get_clientDataKeyValue()** |Returns two-dimensional array which holds an array of the listview items and for each item returns an array of the key fields set through the ClientDataKeyNames property of the RadListView control on the server.|
| **.get_pageCount()** |Returns the page count of the RadListView control when paging is enabled.|
| **.get_pageSize()** |Returns the page size of the RadListView control.|
| **.set_pageSize()** |Sets the page size of the RadListView control.|
| **.get_currentPageIndex()** |Returns the current page index of the RadListView control.|
| **.set_currentPageIndex()** |Sets the current page index of the RadListView control.|

RadListView provides means for client-side manipulation of its elements. Below are list the client-side methods of the RadListView client object.


>caption  

|  **Method**  |  **Description**  |
| ------ | ------ |
| **fireCommand(command, argument)** |Method which triggers specific command for the RadListView when executed. The method is called for the RadListView client instance. The method arguments are the command which will be processed and its corresponding arguments.|
| **editItem(itemIndex)** |Method which switches item with corresponding index passed as an argument in edit mode.|
| **updateItem(itemIndex)** |Method which updates the edited item with the corresponding index passed as an argument.|
| **deleteItem(itemIndex)** |Method which deletes the item corresponding to the index passed as an argument.|
| **insertItem()** |Method which inserts new item to the listview.|
| **cancelUpdate(itemIndex)** |Method which cancels the update for the edited item corresponding to the index passed as an argument and switches the listview in regular mode.|
| **cancelInsert()** |Method which cancels the insert action and closes the listview insert item.|
| **showInsertItem(insertItemPosition)** |Method which switches the listview in insert mode and displays the insertion form. The insertItemPosition argument is RadListViewInsertItemPosition enumerator value and specifies the position of the insertion form. The RadListViewInsertItemPosition enumerator values are:None, FirstItem, LastItem. If no position is specified, the insertion form appears as last item.|
| **selectItem(itemIndex)** |The item corresponding to the index passed as an argument will become selected.|
| **deselectItem(itemIndex)** |The item corresponding to the index passed as an argument will become deselected.|
| **rebind()** |Method which will force rebind of the listview and will refresh its state using internally the fireCommand client method. The action will be performed on the server with ajax request in case the listview is ajaxified with RadAjaxManager/RadAjaxPanel or MS UpdatePanel.|
| **page(argument)** |Method which triggers paging action with page command passed as an argument. All server-side paging capabilities of RadListView are applicable here as well.|

## RadListView Client-side Events

Inside each RadListView client event handler the first argument passed (sender) will point to the data pager client object. The second argument (eventArgs) will hold reference properties/objects dependable on the respective client event.

The following table lists the event you should be aware of when working with **RadListView** control.




|  **Event**  |  **Description**  |
| ------ | ------ |
| **[OnListViewCreating]({%slug listview/client-side-programming/events/onlistviewcreating%})** |This client-side event is fired before the RadListView is created.|
| **[OnListViewCreated]({%slug listview/client-side-programming/events/onlistviewcreated%})** |This client-side event is fired after the RadListView is created.|
| **[OnListViewDestroying]({%slug listview/client-side-programming/events/onlistviewdestroying%})** |This client-side event is fired when RadListView object is destroyed, i.e. on each <em>window.onunload</em>.|
| **[OnItemDragStarted]({%slug listview/client-side-programming/events/onitemdragstarted%})** |This client-side event is fired when an item is about to be dragged (cancellable).|
| **[OnItemDragging]({%slug listview/client-side-programming/events/onitemdragging%})** |This client-side event is fired when an item is dragged (on mouse move).|
| **[OnItemDropping]({%slug listview/client-side-programming/events/onitemdropping%})** |This client-side event is fired when an item is dropping on a target element (cancellable).|
| **[OnItemDropped]({%slug listview/client-side-programming/events/onitemdropped%})** |This client-side event is fired after OnItemDropping, before RadListView postbacks.|
