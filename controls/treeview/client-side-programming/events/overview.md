---
title: Events Overview
page_title: Overview | UI for ASP.NET AJAX Documentation
description: Overview
slug: treeview/client-side-programming/events/overview
tags: overview
published: True
position: 0
---

# Events Overview



## 

__RadTreeView__ supports a number of client-side events that let you customize behavior:

* [OnClientContextMenuItemClicked]({%slug treeview/client-side-programming/events/onclientcontextmenuitemclicked%}): occurs when the user clicks a context menu item for a node.

* [OnClientContextMenuItemClicking]({%slug treeview/client-side-programming/events/onclientcontextmenuitemclicking%}): occurs when the user clicks a context menu item for a node but before the OnClientContextMenuItemClicked event.

* [OnClientContextMenuShowing]({%slug treeview/client-side-programming/events/onclientcontextmenushowing%}): occurs just before the context menu is displayed.

* [OnClientContextMenuShown]({%slug treeview/client-side-programming/events/onclientcontextmenushown%}): occurs when the context menu is displayed.

* [OnClientDoubleClick]({%slug treeview/client-side-programming/events/onclientdoubleclick%}): occurs when a node is double-clicked with the mouse.

* [OnClientKeyPressing]({%slug treeview/client-side-programming/events/onclientkeypressing%}): occurs when any key is pressed while the treeview is having the focus.

* [OnClientMouseOut]({%slug treeview/client-side-programming/events/onclientmouseout%}): occurs when the mouse leaves the area of a node.

* [OnClientMouseOver]({%slug treeview/client-side-programming/events/onclientmouseover%}): occurs as the mouse passes over a node.

* [OnClientNodeChecked]({%slug treeview/client-side-programming/events/onclientnodechecked%}): occurs after a node checkbox value is toggled.

* [OnClientNodeChecking]({%slug treeview/client-side-programming/events/onclientnodechecking%}): occurs when just before the checkbox value is toggled.

* [OnClientNodeClicked]({%slug treeview/client-side-programming/events/onclientnodeclicked%}): occurs when a node is navigated to by the mouse or keyboard.

* [OnClientNodeClicking]({%slug treeview/client-side-programming/events/onclientnodeclicking%}): occurs when a node is navigated to by the mouse or keyboard and before the OnClientNodeClicked event.

* [OnClientNodeCollapsed]({%slug treeview/client-side-programming/events/onclientnodecollapsed%}): occurs when a parent node collapses to hide its child nodes.

* [OnClientNodeCollapsing]({%slug treeview/client-side-programming/events/onclientnodecollapsing%}): occurs just before a parent node collapses to hide its child nodes.

* [OnClientNodeDataBound]({%slug treeview/client-side-programming/events/onclientnodedatabound%}): occurs when a Node is being created during Web Service Load on Demand.

* [OnClientTemplateDataBound]({%slug treeview/client-side-programming/events/onclienttemplatedatabound%}): occurs after the client template is being bound against the dataitem.

* [OnClientNodeDragging]({%slug treeview/client-side-programming/events/onclientnodedragging%}): occurs while a node is being dragged.

* [OnClientNodeDragStart]({%slug treeview/client-side-programming/events/onclientnodedragstart%}): occurs as the drag operation begins.

* [OnClientNodeDropped]({%slug treeview/client-side-programming/events/onclientnodedropped%}): occurs when a node is dropped on another node, between nodes or on an HTML element.

* [OnClientNodeDropping]({%slug treeview/client-side-programming/events/onclientnodedropping%}): occurs just before a node is dropped.

* [OnClientNodeEditStart]({%slug treeview/client-side-programming/events/onclientnodeeditstart%}): occurs as the edit begins.

* [OnClientNodeEdited]({%slug treeview/client-side-programming/events/onclientnodeedited%}): occurs when a node has been edited by the end user.

* [OnClientNodeEditing]({%slug treeview/client-side-programming/events/onclientnodeediting%}): occurs after the user has finished editing but before the OnClientNodeEdited event.

* [OnClientNodeExpanded]({%slug treeview/client-side-programming/events/onclientnodeexpanded%}): occurs after a parent node has expanded to display its child nodes.

* [OnClientNodeExpanding]({%slug treeview/client-side-programming/events/onclientnodeexpanding%}): occurs just before a parent node expands to display its child nodes.

* [OnClientNodePopulated]({%slug treeview/client-side-programming/events/onclientnodepopulated%}): occurs when a load-on-demand operation has populated the child nodes of a parent node.

* [OnClientNodePopulating]({%slug treeview/client-side-programming/events/onclientnodepopulating%}): occurs just before a load-on-demand operation has populated the child nodes of a parent node.

* [OnClientNodePopulationFailed]({%slug treeview/client-side-programming/events/onclientnodepopulationfailed%}): occurs when an error occurs on the server in a load-on-demand operation.

* [OnClientLoad]({%slug treeview/client-side-programming/events/onclientload%}): occurs after the RadTreeView client-side object has been fully initialized.

* [OnClientNodeAnimationEnd]({%slug treeview/client-side-programming/events/onclientnodeanimationend%}): occurs when the node is expanded / collapsed and after the animation has finished

To use these events, write a javascript function that can be called when an event occurs. Then assign the name of the javascript function as the value of the corresponding __RadTreeView__event property.

````ASPNET
	     
	
	<script type="text/javascript" language="javascript">
	    function ClientNodeClicked(sender, eventArgs) 
	    {
	        var node = eventArgs.get_node();
	        alert("You clicked " + node.get_text());
	
	    }
	    
	</script>
	
	<telerik:RadTreeView 
	            ID="RadTreeView1" 
	            runat="server"  
	            OnClientNodeClicked="ClientNodeClicked">
	            </telerik:RadTreeView
				
````



You can also assign event handlers in client-side code:

````JavaScript
	
	<script language="javascript" type="text/javascript">
	function AssignEventHandler()
	{
	      var tree = $find("<%= RadTreeView1.ClientID %>");
	      tree.add_nodeClicked(ClientNodeClicked);
	}   
	</script> 		
	
````



Another advantage of the client-side API is that you can detach an event handler dynamically:

````JavaScript
	
	function removeOnClicked2()
	{
	     var tree = $find("<%= RadTreeView1.ClientID %>");
	     tree.remove_nodeClicked(ClientNodeClicked);
	}		
	
````



For a live example of using client-side events, see [Client-Side Events Demo](http://demos.telerik.com/aspnet-ajax/TreeView/Examples/Programming/ClientEvents/DefaultCS.aspx).
