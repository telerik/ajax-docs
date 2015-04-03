---
title: OnClientNodeCollapsing
page_title: OnClientNodeCollapsing | UI for ASP.NET AJAX Documentation
description: OnClientNodeCollapsing
slug: treeview/client-side-programming/events/onclientnodecollapsing
tags: onclientnodecollapsing
published: True
position: 15
---

# OnClientNodeCollapsing



## 

The __OnClientNodeCollapsing__ client-side event occurs when the user clicks the collapse (minus) button. The event is called just prior to postback or url redirection and can be canceled.

The event handler receives parameters:

1. The treeview instance that fired the event.

1. Event arguments with functions:

* __get_node()__ retrieves a reference to the clicked on node.

* __set_cancel()__ - call this function to specify wether the event should be canceled (true) or not (false).

* __get_domEvent()__ retrieves a DOM event object of the node collapsing.

The example below shows how to prevent collapsing the "Search" node. Note that the __OnClientNodeCollapsed__ event does not fire when the collapse (minus) button is clicked.

````ASPNET
	
	    <script type="text/javascript" language="javascript">
	    
	    function ClientNodeCollapsed(sender, eventArgs) {
	        alert("OnClientNodeCollapsed");
	    }
	    function ClientNodeCollapsing(sender, eventArgs) {
	        var node = eventArgs.get_node();
	        if (node.get_text() == "Search") {
	            eventArgs.set_cancel(true);
	        }
	    }
	    </script>
	
	    <telerik:RadTreeView ID="RadTreeView1" 
	                         runat="server" 
	                         OnClientNodeCollapsed="ClientNodeCollapsed"
	                         OnClientNodeCollapsing="ClientNodeCollapsing">
	    </telerik:RadTreeView>
````



# See Also

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})

 * [OnClientNodeCollapsed]({%slug treeview/client-side-programming/events/onclientnodecollapsed%})
