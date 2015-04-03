---
title: OnClientNodeDropping
page_title: OnClientNodeDropping | UI for ASP.NET AJAX Documentation
description: OnClientNodeDropping
slug: treeview/client-side-programming/events/onclientnodedropping
tags: onclientnodedropping
published: True
position: 11
---

# OnClientNodeDropping



## 

The __OnClientNodeDropping__ client-side event is called before nodes are dropped and can be canceled.

The event handler receives parameters:

1. The treeview instance that fired the event.

1. Event arguments with functions:

* __get_destNode()__ retrieves a reference to the destination node, i.e. the node that is being dropped onto.

* __get_dropPosition()__ returns the relative position of the dropped node(s) and can be "over", "above" or "below".

* __get_htmlElement()__ retrieves the DOM html element representing the destination node.

* __get_sourceNode()__ retrieves the node being dropped.

* __get_sourceNodes()__ retrieves an array of nodes being dropped. It is useful when the RadTreeView __MultipleSelect__ property is __True__.

* __set_cancel()__ - call this function to specify wether the event should be canceled (true) or not (false).

* __get_domEvent()__ retrieves a DOM event object of the node dropping.

The example below demonstrates preventing a node from being dropped between levels and also displays information from each of the eventArgs functions.

````JavaScript
	
	    <script type="text/javascript" language="javascript">
	
	        function ClientNodeDropping(sender, eventArgs) {
	            if (eventArgs.get_sourceNode().get_level() != eventArgs.get_destNode().get_level()) {
	                alert("You cannot drag nodes between levels");
	                eventArgs.set_cancel(true);
	            }
	            else {
	                alert("The source node is: " + eventArgs.get_sourceNode().get_text() + "\n" +
	                //if MultipleSelect = True
	               "The number of source nodes: " + eventArgs.get_sourceNodes().length + "\n" +
	               "The destination node is: " + eventArgs.get_destNode().get_text() + "\n" +
	               "The HTML element is: " + eventArgs.get_htmlElement().innerHTML + "\n" +
	               "The drop position is: " + eventArgs.get_dropPosition()
	                );
	            }
	        }
	        
	    </script>
````



````ASPNET
	    <telerik:RadTreeView ID="RadTreeView1" 
	                         runat="server" 
	                         EnableDragAndDrop="True" 
	                         MultipleSelect="True"
	                         OnClientNodeDropping="ClientNodeDropping">
	    </telerik:RadTreeView>
````


