---
title: OnClientNodeExpanded
page_title: OnClientNodeExpanded - RadTreeView
description: Check our Web Forms article about OnClientNodeExpanded.
slug: treeview/client-side-programming/events/onclientnodeexpanded
tags: onclientnodeexpanded
published: True
position: 7
---

# OnClientNodeExpanded



## 

The **OnClientNodeExpanded** client-side event occurs after a parent node expands to display child nodes.

>caution Calling the client-side **expand()** or **set_expanded(true)** method does not fire **OnClientNodeExpanding** and **OnClientNodeExpanded** client-side events. More information is available [here]({%slug treeview/troubleshooting/expanding-nodes%}).
>


The event handler receives parameters:

1. The **TreeView** instance that fired the event.

1. Event arguments with functions:

* **get_node()** retrieves a reference to the clicked on node.

* **get_domEvent()** retrieves a DOM event object of the node expand.

The example below displays the text for the parent node and a count of child nodes.

````ASPNET
<telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" runat="server" 
                     OnClientNodeExpanded="ClientNodeExpanded">
</telerik:RadTreeView>
````
````JavaScript
function ClientNodeExpanded(sender, eventArgs) {
	var node = eventArgs.get_node();
	alert("Parent node " +
			node.get_text() +
			" is expanded to show " +
			node.get_nodes().get_count()
			+ " child nodes");
}
````



# See Also

 * [OnClientNodeExpanding]({%slug treeview/client-side-programming/events/onclientnodeexpanding%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})

 * [Expanding Nodes]({%slug treeview/troubleshooting/expanding-nodes%})
