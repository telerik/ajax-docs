---
title: OnClientNodeClicked
page_title: OnClientNodeClicked | RadTreeView for ASP.NET AJAX Documentation
description: OnClientNodeClicked
slug: treeview/client-side-programming/events/onclientnodeclicked
tags: onclientnodeclicked
published: True
position: 18
---

# OnClientNodeClicked



## 

The **OnClientNodeClicked** client-side event occurs when the end user navigates to a node using mouse or keyboard.

The event handler receives parameters:

1. The **TreeView** instance that fired the event.

1. Event arguments with function:

* **get_node()** retrieves a reference to the clicked on node.

* **get_domEvent()** retrieves a DOM event object of the node click.

The example below displays the text for the clicked node.

````ASPNET	
<telerik:RadTreeView ID="RadTreeView1" runat="server" OnClientNodeClicked="ClientNodeClicked">
</telerik:RadTreeView>
````
````JavaScript
function ClientNodeClicked(sender, eventArgs) {
	var node = eventArgs.get_node();
	alert("You clicked " + node.get_text());
}
````


# See Also

 * [OnClientNodeClicking]({%slug treeview/client-side-programming/events/onclientnodeclicking%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
