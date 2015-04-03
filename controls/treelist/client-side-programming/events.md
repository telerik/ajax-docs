---
title: Events
page_title: Events | UI for ASP.NET AJAX Documentation
description: Events
slug: treelist/client-side-programming/events
tags: events
published: True
position: 4
---

# Events



This topic will introduce you to the client-side events of the __RadTreeList__ control - which are the available events to handle and how to subscribe to them. Further information about each event can be read by following the links provided in the table below.

## Attaching event handlers

You can execute code on a certain event in the treelist by attaching a function to the event in the ClientSettings-ClientEvents tag of the control:

````JavaScript
	        <telerik:RadTreeList ID="RadTreeList1" runat="server" DataKeyNames="EmployeeID" ParentDataKeyNames="ReportsTo"
	            DataSourceID="SqlDataSource1" AutoGenerateColumns="true">
	            <ClientSettings>
	                <ClientEvents OnTreeListCreated="TreeListCreated" />
	            </ClientSettings>
	        </telerik:RadTreeList>
````



Handlers can also by attached dynamically using code, for example:

````JavaScript
	        function TreeListCreated(sender, eventArgs) {
	            var treelist = sender;
	            treelist.add_itemClick(ItemClick);
	        }
````



Here the event name is formed from the names in the table below by removing *On* and starting with a small letter.

## Client-side event reference

The following table lists all RadTreeList client-side events:


>caption  

| Event | Description |
| ------ | ------ |
| __[OnItemClick](3611676e-0f7c-45c3-b44f-0cc81991a28b)__ |This event is fired when a data item is clicked in RadTreeList.|
| __[OnItemContextMenu](adb24d72-e5d3-4e7b-8ec7-127e9767bf24)__ |This event is fired when a right click on a TreeListDataItem happens.|
| __[OnItemCreated](68f37774-0e1e-4d37-944c-43867e8c42c1)__ |This event is fired when each of the TreeListDataItem client components is created.|
| __[OnItemDblClick](f1a0dfc3-a00e-4831-a19a-b89b9618f235)__ |This event is fired when a data item is double-clicked in RadTreeList.|
| __[OnItemDeselecting](aa27e743-ebe9-40ad-b555-f2e81d03cdb1)__ |This event is fired when a TreeListDataItem is about to be deselected on the client. This event can be canceled.|
| __[OnItemDeselected](31f41d3e-335a-4938-a9f8-1ae6be1dd597)__ |This event is fired when a TreeListDataItem is deselected on the client.|
| __[OnItemDragStarted](3ff831d8-b5e4-4276-ad35-29f55e0d675c)__ |This event is fired when a drag action is started upon the TreeListDataItem.|
| __[OnItemDragging](5754cdc6-745d-4456-8ab8-b5ada8d38c9a)__ |This event is fired when a TreeListDataItem is being dragged.|
| __[OnItemDropping](2ed97033-2ca4-4466-bc40-e98c4b485e4c)__ |This event is fired when a TreeListDataItem is being dropped.|
| __[OnItemDropped](a76044a8-82fe-4b95-a909-3365e1770389)__ |This event is fired when a TreeListDataItem has been dropped after dragging.|
| __[OnItemSelecting](b8045b41-ae89-4caf-ba63-1cc83588d245)__ |This event is fired when a TreeListDataItem is about to be selected on the client. This event can be canceled.|
| __[OnItemSelected](541732ba-7b7b-4a12-9587-4eb9b88c7956)__ |This event is fired when a TreeListDataItem is selected on the client.|
| __[OnKeyPress](e9206cf0-4491-4300-889f-2df5c15137e2)__ |This event is fired (only when Keyboard Navigation is enabled) when any key is pressed inside the RadTreeList andthe treelist control is about to process this key.|
| __[OnScroll](0e549776-b543-4244-bf85-394a891b19e1)__ |This event is fired when the treelist is scrolled.|
| __[OnTreeListCreating](98bf5e36-72d8-41de-b508-d2e598885cf6)__ |This event is fired when the RadTreeList client component is initializing.|
| __[OnTreeListCreated](d7d82bd4-61ef-4e8d-b4fa-b1d4c1e4867d)__ |This event is fired when the RadTreeList client component is initialized.|
| __[OnTreeListDestroying](ce7670a4-3f75-4db7-a876-5404b38c3383)__ |This event is fired when the RadTreeList client component is about to be disposed.|
| __[OnColumnResizing](dc94a0af-a5ce-4341-bacf-ae2562e99c14)__ |This event is fired before the treelist column is resized.|
| __[OnColumnResized](98321b92-2bc9-4381-9e6b-57ac4a2ce0c5)__ |This event is fired after the treelist column is resized.|
