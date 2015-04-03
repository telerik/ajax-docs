---
title: Client-side Programming Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: listview/client-side-programming/overview
tags: overview
published: True
position: 0
---

# Client-side Programming Overview



## RadListView Client-side Object Model

RadListView provides the following objects on the client-side:


|  __Properties__  |  __Description__  |
| ------ | ------ |
| __.get_uniqueID()__ |This property returns the unique id of the RadListView.|
| __.get_clientDataKeyValue()__ |Returns two-dimensional array which holds an array of the listview items and for each item returns an array of the key fields set through the ClientDataKeyNames property of the RadListView control on the server.|
| __.get_pageCount()__ |Returns the page count of the RadListView control when paging is enabled.|
| __.get_pageSize()__ |Returns the page size of the RadListView control.|
| __.set_pageSize()__ |Sets the page size of the RadListView control.|
| __.get_currentPageIndex()__ |Returns the current page index of the RadListView control.|
| __.set_currentPageIndex()__ |Sets the current page index of the RadListView control.|

RadListView provides means for client-side manipulation of its elements. Below are list the client-side methods of the RadListView client object.


>caption  

|  __Method__  |  __Description__  |
| ------ | ------ |
| __fireCommand(command, argument)__ |Method which triggers specific command for the RadListView when executed. The method is called for the RadListView client instance. The method arguments are the command which will be processed and its corresponding arguments.|
| __editItem(itemIndex)__ |Method which switches item with corresponding index passed as an argument in edit mode.|
| __updateItem(itemIndex)__ |Method which updates the edited item with the corresponding index passed as an argument.|
| __deleteItem(itemIndex)__ |Method which deletes the item corresponding to the index passed as an argument.|
| __insertItem()__ |Method which inserts new item to the listview.|
| __cancelUpdate(itemIndex)__ |Method which cancels the update for the edited item corresponding to the index passed as an argument and switches the listview in regular mode.|
| __cancelInsert()__ |Method which cancels the insert action and closes the listview insert item.|
| __showInsertItem(insertItemPosition)__ |Method which switches the listview in insert mode and displays the insertion form. The insertItemPosition argument is RadListViewInsertItemPosition enumerator value and specifies the position of the insertion form. The RadListViewInsertItemPosition enumerator values are:None, FirstItem, LastItem. If no position is specified, the insertion form appears as last item.|
| __selectItem(itemIndex)__ |The item corresponding to the index passed as an argument will become selected.|
| __deselectItem(itemIndex)__ |The item corresponding to the index passed as an argument will become deselected.|
| __rebind()__ |Method which will force rebind of the listview and will refresh its state using internally the fireCommand client method. The action will be performed on the server with ajax request in case the listview is ajaxified with RadAjaxManager/RadAjaxPanel or MS UpdatePanel.|
| __page(argument)__ |Method which triggers paging action with page command passed as an argument. All server-side paging capabilities of RadListView are applicable here as well.|

## RadListView Client-side Events

Inside each RadListView client event handler the first argument passed (sender) will point to the data pager client object. The second argument (eventArgs) will hold reference properties/objects dependable on the respective client event.

The following table lists the event you should be aware of when working with __RadListView__ control.




|  __Event__  |  __Description__  |
| ------ | ------ |
| __[OnListViewCreating]({%slug listview/client-side-programming/events/onlistviewcreating%})__ |This client-side event is fired before the RadListView is created.|
| __[OnListViewCreated]({%slug listview/client-side-programming/events/onlistviewcreated%})__ |This client-side event is fired after the RadListView is created.|
| __[OnListViewDestroying]({%slug listview/client-side-programming/events/onlistviewdestroying%})__ |This client-side event is fired when RadListView object is destroyed, i.e. on each <em>window.onunload</em>.|
| __[OnItemDragStarted]({%slug listview/client-side-programming/events/onitemdragstarted%})__ |This client-side event is fired when an item is about to be dragged (cancellable).|
| __[OnItemDragging]({%slug listview/client-side-programming/events/onitemdragging%})__ |This client-side event is fired when an item is dragged (on mouse move).|
| __[OnItemDropping]({%slug listview/client-side-programming/events/onitemdropping%})__ |This client-side event is fired when an item is dropping on a target element (cancellable).|
| __[OnItemDropped]({%slug listview/client-side-programming/events/onitemdropped%})__ |This client-side event is fired after OnItemDropping, before RadListView postbacks.|
