---
title: OnClientNodeClicking
page_title: OnClientNodeClicking | UI for ASP.NET AJAX Documentation
description: OnClientNodeClicking
slug: treeview/client-side-programming/events/onclientnodeclicking
tags: onclientnodeclicking
published: True
position: 17
---

# OnClientNodeClicking



## 

The __OnClientNodeClicking__ client-side event occurs just before the user navigates to a node using mouse or keyboard. The event is called just prior to postback or url redirection and can be canceled.

The event handler receives parameters:

1. The treeview instance that fired the event.

1. Event arguments with functions:

* __get_node()__ retrieves a reference to the clicked on node.

* __set_cancel()__ - call this function to specify wether the event should be canceled (true) or not (false).

* __get_domEvent()__ retrieves a DOM event object of the node click.

The example below shows how to cancel the event if the text of the node is "Search"

````ASPNET
	
	    <script type="text/javascript" language="javascript">
	
	        function ClientNodeClicking(sender, eventArgs) {
	            var node = eventArgs.get_node();
	            if (node.get_text() == "Search") {
	                eventArgs.set_cancel(true);
	            }
	        }
	    </script>
	
	    <telerik:RadTreeView ID="RadTreeView1" runat="server" OnClientNodeClicking="ClientNodeClicking">
	    </telerik:RadTreeView>
````



# See Also

 * [OnClientNodeClicked]({%slug treeview/client-side-programming/events/onclientnodeclicked%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
