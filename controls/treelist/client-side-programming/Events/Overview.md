---
title: Overview
page_title: Client-side Events Overview | RadTreeList for ASP.NET AJAX Documentation
description: Events
slug: treelist/client-side-programming/Events/Overview
tags: events
published: True
position: 0
---

# Events Overview



This topic will introduce you to the client-side events of the **RadTreeList** control - which are the available events to handle and how to subscribe to them. Further information about each event can be read by following the links provided in the table below.

## Attaching event handlers

You can execute code on a certain event in the **TreeList** by attaching a function to the event in the ClientSettings-ClientEvents tag of the control:

````JavaScript
<telerik:RadTreeList RenderMode="Lightweight" ID="RadTreeList1" runat="server" DataKeyNames="EmployeeID" ParentDataKeyNames="ReportsTo"
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
| **OnItemClick** |This event is fired when a data item is clicked in RadTreeList.|
| **OnItemContextMenu** |This event is fired when a right click on a TreeListDataItem happens.|
| **OnItemCreated** |This event is fired when each of the TreeListDataItem client components is created.|
| **OnItemDblClick** |This event is fired when a data item is double-clicked in RadTreeList.|
| **OnItemDeselecting** |This event is fired when a TreeListDataItem is about to be deselected on the client. This event can be canceled.|
| **OnItemDeselected** |This event is fired when a TreeListDataItem is deselected on the client.|
| **OnItemDragStarted** |This event is fired when a drag action is started upon the TreeListDataItem.|
| **OnItemDragging** |This event is fired when a TreeListDataItem is being dragged.|
| **OnItemDropping** |This event is fired when a TreeListDataItem is being dropped.|
| **OnItemDropped** |This event is fired when a TreeListDataItem has been dropped after dragging.|
| **OnItemSelecting** |This event is fired when a TreeListDataItem is about to be selected on the client. This event can be canceled.|
| **OnItemSelected** |This event is fired when a TreeListDataItem is selected on the client.|
| **OnKeyPress** |This event is fired (only when Keyboard Navigation is enabled) when any key is pressed inside the RadTreeList andthe treelist control is about to process this key.|
| **OnScroll** |This event is fired when the treelist is scrolled.|
| **OnTreeListCreating** |This event is fired when the RadTreeList client component is initializing.|
| **OnTreeListCreated** |This event is fired when the RadTreeList client component is initialized.|
| **OnTreeListDestroying** |This event is fired when the RadTreeList client component is about to be disposed.|
| **OnColumnResizing** |This event is fired before the treelist column is resized.|
| **OnColumnResized** |This event is fired after the treelist column is resized.|
