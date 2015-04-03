---
title: OnClientNodeDropped
page_title: OnClientNodeDropped | UI for ASP.NET AJAX Documentation
description: OnClientNodeDropped
slug: treeview/client-side-programming/events/onclientnodedropped
tags: onclientnodedropped
published: True
position: 13
---

# OnClientNodeDropped



## 

The __OnClientNodeDropped__ client-side event is called after node(s) are dropped.

The event handler receives parameters:

1. The treeview instance that fired the event.

1. Event arguments with functions:

* __get_sourceNode()__ retrieves the node being dropped. When the RadTreeView __MultipleSelect__ property is __True__, __get_sourceNode()__ refers to the first node selected.

* __get_sourceNodes()__ retrieves an array of nodes being dropped if the RadTreeView __MultipleSelect__ property is __True__.

* __get_domEvent()__ retrieves a DOM event object of the node dropping.

The example below displays information for the dropped source nodes.

````ASPNET
	
	    <script type="text/javascript" language="javascript">
	
	        function ClientNodeDropped(sender, eventArgs) {
	            alert("The source node is: " + eventArgs.get_sourceNode().get_text() + "\n" +
	            //if MultipleSelect = True
	                  "The number of source nodes: " + eventArgs.get_sourceNodes().length + "\n");
	        }
	    
	    </script>
	
	    <telerik:RadTreeView ID="RadTreeView1" 
	                         runat="server" 
	                         EnableDragAndDrop="true" 
	                         MultipleSelect="true"
	                         OnClientNodeDropped="ClientNodeDropped">
	    </telerik:RadTreeView>
````



# See Also

 * [OnClientNodeDropping]({%slug treeview/client-side-programming/events/onclientnodedropping%})

 * [OnClientNodeDragStart]({%slug treeview/client-side-programming/events/onclientnodedragstart%})

 * [OnClientNodeDragging]({%slug treeview/client-side-programming/events/onclientnodedragging%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
