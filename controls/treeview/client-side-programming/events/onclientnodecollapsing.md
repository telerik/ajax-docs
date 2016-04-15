---
title: OnClientNodeCollapsing
page_title: OnClientNodeCollapsing | RadTreeView for ASP.NET AJAX Documentation
description: OnClientNodeCollapsing
slug: treeview/client-side-programming/events/onclientnodecollapsing
tags: onclientnodecollapsing
published: True
position: 15
---

# OnClientNodeCollapsing



## 

The **OnClientNodeCollapsing** client-side event occurs when the user clicks the collapse (minus) button. The event is called just prior to postback or URL redirection and can be canceled.

The event handler receives parameters:

1. The **TreeView** instance that fired the event.

1. Event arguments with functions:

* **get_node()** retrieves a reference to the clicked on node.

* **set_cancel()** - call this function to specify whether the event should be canceled (true) or not (false).

* **get_domEvent()** retrieves a DOM event object of the node collapsing.

The example below shows how to prevent collapsing the "Search" node. Note that the **OnClientNodeCollapsed** event does not fire when the collapse (minus) button is clicked.

````ASPNET
<telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" 
    runat="server" 
    OnClientNodeCollapsed="ClientNodeCollapsed"
    OnClientNodeCollapsing="ClientNodeCollapsing">
</telerik:RadTreeView>
````
````JavaScript
function ClientNodeCollapsed(sender, eventArgs) {
	alert("OnClientNodeCollapsed");
}

function ClientNodeCollapsing(sender, eventArgs) {
	var node = eventArgs.get_node();
	if (node.get_text() == "Search") {
		eventArgs.set_cancel(true);
	}
}
````



# See Also

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})

 * [OnClientNodeCollapsed]({%slug treeview/client-side-programming/events/onclientnodecollapsed%})
