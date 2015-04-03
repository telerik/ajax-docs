---
title: OnClientNodeClicked
page_title: OnClientNodeClicked | UI for ASP.NET AJAX Documentation
description: OnClientNodeClicked
slug: treeview/client-side-programming/events/onclientnodeclicked
tags: onclientnodeclicked
published: True
position: 18
---

# OnClientNodeClicked



## 

The __OnClientNodeClicked__ client-side event occurs when the end user navigates to a node using mouse or keyboard.

The event handler receives parameters:

1. The treeview instance that fired the event.

1. Event arguments with function:

* __get_node()__ retrieves a reference to the clicked on node.

* __get_domEvent()__ retrieves a DOM event object of the node click.

The example below displays the text for the clicked node.

````ASPNET
	
	    <script type="text/javascript" language="javascript">
	        function ClientNodeClicked(sender, eventArgs) {
	            var node = eventArgs.get_node();
	            alert("You clicked " + node.get_text());
	        }
	    </script>
	
	    <telerik:RadTreeView ID="RadTreeView1" runat="server" OnClientNodeClicked="ClientNodeClicked">
	    </telerik:RadTreeView>
````



# See Also

 * [OnClientNodeClicking]({%slug treeview/client-side-programming/events/onclientnodeclicking%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
