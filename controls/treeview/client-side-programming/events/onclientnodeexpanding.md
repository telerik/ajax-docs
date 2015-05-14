---
title: OnClientNodeExpanding
page_title: OnClientNodeExpanding | RadTreeView for ASP.NET AJAX Documentation
description: OnClientNodeExpanding
slug: treeview/client-side-programming/events/onclientnodeexpanding
tags: onclientnodeexpanding
published: True
position: 6
---

# OnClientNodeExpanding



## 

The **OnClientNodeExpanding** client-side event occurs when the user clicks the expand (plus) button. The event is called just prior to postback or URL redirection and can be canceled.

>caution Calling the client-side **expand()** or **set_expanded(true)** method does not fire **OnClientNodeExpanding** and **OnClientNodeExpanded** client-side events. More information is available [here]({%slug treeview/troubleshooting/expanding-nodes%}).
>


The event handler receives parameters:

1. The **TreeView** instance that fired the event.

1. Event arguments with functions:

* **get_node()** retrieves a reference to the clicked on node.

* **set_cancel()** - call this function to specify whether the event should be canceled (true) or not (false).

* **get_domEvent()** retrieves a DOM event object of the node expand.

The example below shows how to prevent expanding a "Recent Searches" node. Note that the **OnClientNodeExpanded** event does not fire when the expand (plus) button is clicked.

````ASPNET	
<telerik:RadTreeView ID="RadTreeView1" runat="server" AllowNodeEditing="True" 
                     OnClientNodeExpanded="ClientNodeExpanded"
                     OnClientNodeExpanding="ClientNodeExpanding">
</telerik:RadTreeView>
````
````JavaScript
function ClientNodeExpanded(sender, eventArgs)
{
	alert("OnClientNodeExpanded");
}
function ClientNodeExpanding(sender, eventArgs)
{

	var node = eventArgs.get_node();    
	if(node.get_text() == "Recent Searches")
	{
		eventArgs.set_cancel(true);
	}
}  
````



# See Also

 * [OnClientNodeExpanded]({%slug treeview/client-side-programming/events/onclientnodeexpanded%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})

 * [Expanding Nodes]({%slug treeview/troubleshooting/expanding-nodes%})
