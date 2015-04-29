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
| **get_uniqueID()** |Property which returns the unique id of RadTreeList.|
| **get_dataItems()** |Property which returns a collection of the RadTreeListItem objects available.|
| **get_columns()** |Property which returns a collection of the columns in the treelist.|
| **get_selectedIndexes()** |Property which returns the collection of all selected indexes from RadTreeList.|
| **set_selectedIndexes()** |Property which sets the selected indexes for RadTreeList.|
| **get_selectedItems()** |Property which returns the collection of all selected items of RadTreeList.|
| **get_clientSettings()** |Property which returns client-side objects which represent the RadTreeList client settings.|
| **get_clientDataKeyNames()** |Property which gets a collection of the client datakey names.|
| **get_currentPageIndex()** |Property which returns the current page index of the treelist.|
| **set_currentPageIndex()** |Property which sets the current page index by firing a Page command.|

### Client-side Methods

**RadTreeList** provides the following client-side methods:


>caption  

| Method | Description |
| ------ | ------ |
| **getCellByColumnUniqueName(rowObject, uniqueName)** |Property which returns the table cell of the TreeList by a given item(row) and column unique name|
| **getColumnByUniqueName(uniqueName)** |Property which gets the client side object for the column by a given unique name.|
| **getContainerItem(element)** |Property which receives a DOM element as an argument and returns a reference to the TreeListItem object which contains it.|
| **getItem(rowIdIndex)** |Property which returns the client-side TreeList item.|
| **selectItem(item)** |The item corresponding to the treelist item passed as an argument will be selected.|
| **deselectItem(item)** |The item corresponding to the treelist item passed as an argument will be deselected.|
| **selectAllItems()** |Method which selects all items in the RadTreeList.|
| **deselectAllItems()** |Method which deselects all items in the RadTreeList.|
| **page(command)** |Method which fires a page command with the specified command argument (Next, Prev, First, Last).|
| **fireCommand(commandName, commandArgument)** |Method which triggers specific command for the RadTreeList when executed. The method is called for the RadTreeList client instance. The method arguments are the command which will be processed and its corresponding arguments.|

### Client-side Events

**RadTreeList** provides the following client-side events:


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

## TreeListColumn client object

The **TreeListColumn** client object exposes the following properties:


>caption  

| Property | Description |
| ------ | ------ |
| **get_owner()** |A property which returns the treelist client-side object that holds the column.|
| **get_uniqueName()** |A property which returns the unique name of the column.|


>caption  

| Method | Description |
| ------ | ------ |
| **hide(columnIndex)** |The column at the specified columnIndex will be hidden.|
| **show(columnIndex)** |The column at the specified columnIndex will be shown.|

## TreeListDataItem client object

The **TreeListDataItem** client object exposes the following properties and methods:


>caption  

| Property | Description |
| ------ | ------ |
| **get_dataKeyValue(keyName)** |A property which gets value of the client datakey name for this itemby the given keyname.|
| **get_expanded()** |A property which returns whether the current item is expanded.|
| **get_isRoot()** |A property which returns whether the current item is root item for the treelist.|
| **get_previousSibling()** |A property which gets the previous sibling of the current item.|
| **get_nextSibling()** |A property which gets the next sibling of the current item.|
| **get_parentItem()** |A property which gets the parent of the current item.|
| **get_childItems()** |A property which gets a collection of the visible child items of the current item.|
| **get_displayIndex()** |A property which gets the index of the current item in the current page regardless of its nested level.|
| **get_hierarchicalIndex()** |A property which gets the index of the current item in the treelist hierarchy.|
| **get_selected()** |A boolean property indicating whether the item is selected or not.|
| **set_selected(bool)** |A property which selects or deselects the current item based on the boolean value passed.|
| **get_owner()** |A property which gets a reference to the owner RadTreeList object.|


>caption  

| Method | Description |
| ------ | ------ |
| **fireCommand(commandName, commandArgument)** |Method which triggers specific command for the TreeListDataItem when executed.The method is called for the TreeListDataItem client instance. The method arguments are thecommand which will be processed and its corresponding arguments.|
