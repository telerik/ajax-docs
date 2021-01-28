---
title: OnClientNodeClicking
page_title: OnClientNodeClicking - RadTreeView
description: Check our Web Forms article about OnClientNodeClicking.
slug: treeview/client-side-programming/events/onclientnodeclicking
tags: onclientnodeclicking
published: True
position: 17
---

# OnClientNodeClicking



## 

The **OnClientNodeClicking** client-side event occurs when the user clicks on a node, before the **RadTreeView** responds to the mouse click. When using keyboard navigation the event is fired after pressing Enter. The event is called just prior to postback or URL redirection and can be canceled.

The event handler receives parameters:

1. The **TreeView** instance that fired the event.

1. Event arguments with functions:

* **get_node()** retrieves a reference to the clicked on node.

* **set_cancel()** - call this function to specify whether the event should be canceled (true) or not (false).

* **get_domEvent()** retrieves a DOM event object of the node click.

The example below shows how to cancel the event if the text of the node is "Search"

````ASPNET
<telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" runat="server" OnClientNodeClicking="ClientNodeClicking">
</telerik:RadTreeView>
````
````JavaScript
function ClientNodeClicking(sender, eventArgs) {
	var node = eventArgs.get_node();
	if (node.get_text() == "Search") {
		eventArgs.set_cancel(true);
	}
}
````



# See Also

 * [OnClientNodeClicked]({%slug treeview/client-side-programming/events/onclientnodeclicked%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
