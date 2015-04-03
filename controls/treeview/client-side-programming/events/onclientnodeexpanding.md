---
title: OnClientNodeExpanding
page_title: OnClientNodeExpanding | UI for ASP.NET AJAX Documentation
description: OnClientNodeExpanding
slug: treeview/client-side-programming/events/onclientnodeexpanding
tags: onclientnodeexpanding
published: True
position: 6
---

# OnClientNodeExpanding



## 

The __OnClientNodeExpanding__ client-side event occurs when the user clicks the expand (plus) button. The event is called just prior to postback or url redirection and can be canceled.

>caution Calling the client-side __expand()__ or __set_expanded(true)__ method does not fire __OnClientNodeExpanding__ and __OnClientNodeExpanded__ client-side events. More information is available[here]({%slug treeview/troubleshooting/expanding-nodes%}).
>


The event handler receives parameters:

1. The treeview instance that fired the event.

1. Event arguments with functions:

* __get_node()__ retrieves a reference to the clicked on node.

* __set_cancel()__ - call this function to specify wether the event should be canceled (true) or not (false).

* __get_domEvent()__ retrieves a DOM event object of the node expand.

The example below shows how to prevent expanding a "Recent Searches" node. Note that the __OnClientNodeExpanded__ event does not fire when the expand (plus) button is clicked.

````ASPNET
	
	    <script type="text/javascript" language="javascript">
	    
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
	    </script>
	
	    <telerik:RadTreeView ID="RadTreeView1" runat="server" AllowNodeEditing="True" 
	                         OnClientNodeExpanded="ClientNodeExpanded"
	                         OnClientNodeExpanding="ClientNodeExpanding">
	    </telerik:RadTreeView>
````



# See Also

 * [OnClientNodeExpanded]({%slug treeview/client-side-programming/events/onclientnodeexpanded%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})

 * [Expanding Nodes]({%slug treeview/troubleshooting/expanding-nodes%})
