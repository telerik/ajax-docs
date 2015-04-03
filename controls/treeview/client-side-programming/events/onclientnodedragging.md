---
title: OnClientNodeDragging
page_title: OnClientNodeDragging | UI for ASP.NET AJAX Documentation
description: OnClientNodeDragging
slug: treeview/client-side-programming/events/onclientnodedragging
tags: onclientnodedragging
published: True
position: 14
---

# OnClientNodeDragging



## 

The __OnClientNodeDragging__ client-side event is called each time the user moves the mouse while dragging a node. Note: You can use this event to change the mouse cursor so that user knows where they can drag a node, i.e. only over a grid, editor or another treeview, etc.

The event handler receives parameters:

1. The treeview instance that fired the event.

1. Event arguments with functions:

* __get_node()__ retrieves a reference to the clicked on node.

* __get_htmlElement()__ retrieves the html element on which the mouse is over.

* __get_domEvent()__ retrieves the browser event.

* __set_cancel()__- call this function to specify wether the event should be canceled (true) or not (false).

* __get_sourceNodes()__ returns an array of all the nodes being dragged (Useful when __MultipleSelect__ is *True*).

The example below demonstrates getting the current x and y coordinates of the mouse while the node is being dragged.

````ASPNET
	
	    <script type="text/javascript" language="javascript">
	    
	        function ClientNodeDragging(sender, eventArgs) {
	            var domEvent = eventArgs.get_domEvent();
	            var node = eventArgs.get_node();
	
	            node.set_text("Dragging X:" + domEvent.offsetX + " Y:" + domEvent.offsetY);
	        }
	    </script>
	
	    <telerik:RadTreeView ID="RadTreeView1" 
	                         runat="server" 
	                         EnableDragAndDrop="True" 
	                         OnClientNodeDragging="ClientNodeDragging">
	    </telerik:RadTreeView>
````



# See Also

 * [OnClientNodeDragStart]({%slug treeview/client-side-programming/events/onclientnodedragstart%})

 * [OnClientNodeDropped]({%slug treeview/client-side-programming/events/onclientnodedropped%})

 * [OnClientNodeDropping]({%slug treeview/client-side-programming/events/onclientnodedropping%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
