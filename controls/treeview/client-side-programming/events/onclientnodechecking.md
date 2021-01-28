---
title: OnClientNodeChecking
page_title: OnClientNodeChecking - RadTreeView
description: Check our Web Forms article about OnClientNodeChecking.
slug: treeview/client-side-programming/events/onclientnodechecking
tags: onclientnodechecking
published: True
position: 20
---

# OnClientNodeChecking



## 

The **OnClientNodeChecking** client-side event occurs when the user selects a checkbox using mouse or keyboard. The checked state returned by the node **get_checked()** function has not changed to reflect the new value. The event is called just prior to postback or URL redirection and can be canceled.

The event handler receives parameters:

1. The **TreeView** instance that fired the event.

1. Event arguments with functions:

* **get_node()** retrieves a reference to the clicked on node.

* **set_cancel()** call this function to specify whether the event should be canceled (true) or not (false).

* **get_domEvent()** retrieves a DOM event object of the node check.

The example below shows how to cancel the event if the category for the node is "NonCheckable". Note that the **OnClientNodeChecked** event does not fire if set_cancel(true) is called.

````ASPNET
<telerik:RadTreeView RenderMode="Lightweight" ID="RadTreeView1" runat="server" CheckBoxes="true" OnClientNodeChecked="ClientNodeChecked"
                                       OnClientNodeChecking="ClientNodeChecking">
</telerik:RadTreeView>
````
````JavaScript
function ClientNodeChecked(sender, eventArgs) {
	alert("OnClientNodeChecked");
}

function ClientNodeChecking(sender, eventArgs) {
	var node = eventArgs.get_node();

	alert("You are going to check " +
node.get_text() +
". Current state is: " +
node.get_checked());

	if (node.get_category() == "NonCheckable") {
		eventArgs.set_cancel(true);
	}
}
````



# See Also

 * [OnClientNodeChecked]({%slug treeview/client-side-programming/events/onclientnodechecked%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
