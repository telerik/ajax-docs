---
title: OnClientContextMenuItemClicking
page_title: OnClientContextMenuItemClicking - RadTreeView
description: Check our Web Forms article about OnClientContextMenuItemClicking.
slug: treeview/client-side-programming/events/onclientcontextmenuitemclicking
tags: onclientcontextmenuitemclicking
published: True
position: 27
---

# OnClientContextMenuItemClicking



## 

The **OnClientContextMenuItemClicking** client-side event occurs when the user clicks a menu item, but before the **OnClientContextMenuItemClicked** event fires. The event is called just prior to postback or url redirection and can be canceled.

The event handler receives parameters:

1. The **TreeView** instance that fired the event.

1. Event arguments with functions:

* **get_menuItem()** retrieves a reference to the selected context menu item.

* **get_node()** retrieves a reference to the clicked on node.

* **set_cancel()** call this function to specify whether the event should be canceled (true) or not (false).

* **get_domEvent()** retrieves the DOM event object of the item click.

The example below shows how to cancel the event if the text of the menu item is "Search"

````ASPNET	
<telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" runat="server" OnClientContextMenuItemClicking="ClientContextMenuItemClicking">
</telerik:RadTreeView>
````
````JavaScript
function ClientContextMenuItemClicking(sender, eventArgs) {
	var node = eventArgs.get_node();
	var item = eventArgs.get_menuItem();

	if ((item.get_text() == "Network Search") && (node.get_text() == "Printers")) {
		eventArgs.set_cancel(true);
	}
}
````


# See Also

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})

 * [OnClientContextMenuItemClicked]({%slug treeview/client-side-programming/events/onclientcontextmenuitemclicked%})

 * [OnClientContextMenuShowing]({%slug treeview/client-side-programming/events/onclientcontextmenushowing%})

 * [OnClientContextMenuShown]({%slug treeview/client-side-programming/events/onclientcontextmenushown%})
