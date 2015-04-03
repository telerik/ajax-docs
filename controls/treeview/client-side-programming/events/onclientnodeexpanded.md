---
title: OnClientNodeExpanded
page_title: OnClientNodeExpanded | UI for ASP.NET AJAX Documentation
description: OnClientNodeExpanded
slug: treeview/client-side-programming/events/onclientnodeexpanded
tags: onclientnodeexpanded
published: True
position: 7
---

# OnClientNodeExpanded



## 

The __OnClientNodeExpanded__ client-side event occurs after a parent node expands to display child nodes.

>caution Calling the client-side __expand()__ or __set_expanded(true)__ method does not fire __OnClientNodeExpanding__ and __OnClientNodeExpanded__ client-side events. More information is available[[!] here]({%slug treeview/troubleshooting/expanding-nodes%}).
>


The event handler receives parameters:

1. The treeview instance that fired the event.

1. Event arguments with functions:

* __get_node()__ retrieves a reference to the clicked on node.

* __get_domEvent()__ retrieves a DOM event object of the node expand.

The example below displays the text for the parent node and a count of child nodes.

````ASPNET
	
	    <script type="text/javascript" language="javascript">
	        function ClientNodeExpanded(sender, eventArgs) {
	            var node = eventArgs.get_node();
	            alert("Parent node " +
	                    node.get_text() +
	                    " is expanded to show " +
	                    node.get_nodes().get_count()
	                    + " child nodes");
	        }
	    </script>
	
	    <telerik:RadTreeView ID="RadTreeView1" runat="server" 
	                         OnClientNodeExpanded="ClientNodeExpanded">
	    </telerik:RadTreeView>
````



# See Also

 * [OnClientNodeExpanding]({%slug treeview/client-side-programming/events/onclientnodeexpanding%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})

 * [Expanding Nodes]({%slug treeview/troubleshooting/expanding-nodes%})
