---
title: OnClientNodeDragging
page_title: OnClientNodeDragging | RadTreeView for ASP.NET AJAX Documentation
description: OnClientNodeDragging
slug: treeview/client-side-programming/events/onclientnodedragging
tags: onclientnodedragging
published: True
position: 14
---

# OnClientNodeDragging



## 

The **OnClientNodeDragging** client-side event is called each time the user moves the mouse while dragging a node. Note: You can use this event to change the mouse cursor so that user knows where they can drag a node, i.e. only over a grid, editor or another **TreeView**, etc.

The event handler receives parameters:

1. The **TreeView** instance that fired the event.

1. Event arguments with functions:

* **get_node()** retrieves a reference to the clicked on node.

* **get_htmlElement()** retrieves the html element on which the mouse is over.

* **get_domEvent()** retrieves the browser event.

* **set_cancel()**- call this function to specify whether the event should be canceled (true) or not (false).

* **get_sourceNodes()** returns an array of all the nodes being dragged (Useful when **MultipleSelect** is *True*).

The example below demonstrates getting the current x and y coordinates of the mouse while the node is being dragged.

````ASPNET
<telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" 
                     runat="server" 
                     EnableDragAndDrop="True" 
                     OnClientNodeDragging="ClientNodeDragging">
</telerik:RadTreeView>
````
````JavaScript
function ClientNodeDragging(sender, eventArgs) {
	var domEvent = eventArgs.get_domEvent();
	var node = eventArgs.get_node();

	node.set_text("Dragging X:" + domEvent.offsetX + " Y:" + domEvent.offsetY);
}
````



# See Also

 * [OnClientNodeDragStart]({%slug treeview/client-side-programming/events/onclientnodedragstart%})

 * [OnClientNodeDropped]({%slug treeview/client-side-programming/events/onclientnodedropped%})

 * [OnClientNodeDropping]({%slug treeview/client-side-programming/events/onclientnodedropping%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
