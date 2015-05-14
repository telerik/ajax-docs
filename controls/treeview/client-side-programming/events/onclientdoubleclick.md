---
title: OnClientDoubleClick
page_title: OnClientDoubleClick | RadTreeView for ASP.NET AJAX Documentation
description: OnClientDoubleClick
slug: treeview/client-side-programming/events/onclientdoubleclick
tags: onclientdoubleclick
published: True
position: 24
---

# OnClientDoubleClick



## 

The **OnClientDoubleClick** client-side event occurs when the end user double-clicks a node.

The event handler receives parameters:

1. The TreeView instance that fired the event.

1. Event arguments with functions:

* **get_node()** retrieves a reference to the clicked on node.

* **get_domEvent()** retrieves a DOM event object of the double click.

The example below displays the text for the double-clicked node.

````ASPNET	
<telerik:RadTreeView ID="RadTreeView1" runat="server" OnClientDoubleClick="ClientDoubleClick">
</telerik:RadTreeView>
````
````JavaScript
function DoubleClick(sender, eventArgs) {
	var node = eventArgs.get_node();
	alert("You double clicked " + node.get_text());
}
````



# See Also

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
