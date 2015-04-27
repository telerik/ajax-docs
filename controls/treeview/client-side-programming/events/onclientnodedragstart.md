---
title: OnClientNodeDragStart
page_title: OnClientNodeDragStart | RadTreeView for ASP.NET AJAX Documentation
description: OnClientNodeDragStart
slug: treeview/client-side-programming/events/onclientnodedragstart
tags: onclientnodedragstart
published: True
position: 12
---

# OnClientNodeDragStart



## 

The **OnClientNodeDragStart**client-side event is called each time the user begins to drag a node.

The event handler receives parameters:

1. The treeview instance that fired the event.

1. Event arguments with functions:

* **get_node()** retrieves a reference to the clicked on node.

* **set_cancel()** - call this function to specify wether the event should be canceled (true) or not (false).

* **get_domEvent()** retrieves a DOM event object of the node dragging.

* **get_htmlElement()** retrieves the <SPAN> element of the dragged node.

* **get_sourceNodes()** returns an array of all the nodes being dragged (Useful when **MultipleSelect** is *True*).

The example below demonstrates getting the current x and y coordinates of the mouse while the node is being dragged.

````JavaScript
	
	    <script type="text/javascript" language="javascript">
	        function ClientNodeDragStart(sender, eventArgs) {
	            var node = eventArgs.get_node();
	            if (node.get_level() == 0) {
	                var myDiv = document.getElementById("myDiv");
	                myDiv.innerHTML = "Cannot drag " +
	           node.get_text() +
	           " at level " +
	           node.get_level();
	                eventArgs.set_cancel(true);
	            }
	        }
	    </script>
````



````ASPNET
	
	    <script type="text/javascript" language="javascript">
	        function ClientNodeDragStart(sender, eventArgs) {
	            var node = eventArgs.get_node();
	            if (node.get_level() == 0) {
	                var myDiv = document.getElementById("myDiv");
	                myDiv.innerHTML = "Cannot drag " +
	           node.get_text() +
	           " at level " +
	           node.get_level();
	                eventArgs.set_cancel(true);
	            }
	        }
	    </script>
````



# See Also

 * [OnClientNodeDropped]({%slug treeview/client-side-programming/events/onclientnodedropped%})

 * [OnClientNodeDropping]({%slug treeview/client-side-programming/events/onclientnodedropping%})

 * [OnClientNodeDragging]({%slug treeview/client-side-programming/events/onclientnodedragging%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
