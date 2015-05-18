---
title: OnClientNodeDropped
page_title: OnClientNodeDropped | RadTreeView for ASP.NET AJAX Documentation
description: OnClientNodeDropped
slug: treeview/client-side-programming/events/onclientnodedropped
tags: onclientnodedropped
published: True
position: 13
---

# OnClientNodeDropped



## 

The **OnClientNodeDropped** client-side event is called after node(s) are dropped.

The event handler receives parameters:

1. The **TreeView** instance that fired the event.

1. Event arguments with functions:

* **get_sourceNode()** retrieves the node being dropped. When the **RadTreeView** **MultipleSelect** property is **True**, **get_sourceNode()** refers to the first node selected.

* **get_sourceNodes()** retrieves an array of nodes being dropped if the **RadTreeView** **MultipleSelect** property is **True**.

* **get_domEvent()** retrieves a DOM event object of the node dropping.

The example below displays information for the dropped source nodes.

````ASPNET
<telerik:RadTreeView ID="RadTreeView1" 
                     runat="server" 
                     EnableDragAndDrop="true" 
                     MultipleSelect="true"
                     OnClientNodeDropped="ClientNodeDropped">
</telerik:RadTreeView>
````
````JavaScript
function ClientNodeDropped(sender, eventArgs) {
	alert("The source node is: " + eventArgs.get_sourceNode().get_text() + "\n" +
	//if MultipleSelect = True
		"The number of source nodes: " + eventArgs.get_sourceNodes().length + "\n");
}
````



# See Also

 * [OnClientNodeDropping]({%slug treeview/client-side-programming/events/onclientnodedropping%})

 * [OnClientNodeDragStart]({%slug treeview/client-side-programming/events/onclientnodedragstart%})

 * [OnClientNodeDragging]({%slug treeview/client-side-programming/events/onclientnodedragging%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
