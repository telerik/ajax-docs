---
title: OnClientNodeCollapsed
page_title: OnClientNodeCollapsed | UI for ASP.NET AJAX Documentation
description: OnClientNodeCollapsed
slug: treeview/client-side-programming/events/onclientnodecollapsed
tags: onclientnodecollapsed
published: True
position: 16
---

# OnClientNodeCollapsed



## 

The __OnClientNodeCollapsed__ client-side event occurs after the user clicks the collapse (minus) button.

The event handler receives parameters:

1. The treeview instance that fired the event.

1. Event arguments with functions:

* __get_node()__ retrieves a reference to the clicked on node.

* __get_domEvent()__ retrieves a DOM event object of the node collapsing.

The example below demonstrates retrieving a reference to the collapsed parent node.

````ASPNET
	     
	
	<script type="text/javascript" language="javascript">
	
	    function ClientNodeCollapsed(sender, eventArgs) {
	        var node = eventArgs.get_node();
	        alert(node.get_text() + " has collapsed");
	    }
	    
	</script>
	<telerik:RadTreeView ID="RadTreeView1" 
	                 runat="server"  
	                 OnClientNodeCollapsed="ClientNodeCollapsed">
	</telerik:RadTreeView>
			
````



# See Also

 * [OnClientNodeCollapsing]({%slug treeview/client-side-programming/events/onclientnodecollapsing%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
