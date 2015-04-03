---
title: Load On Demand Expand on Server-side NodeClick
page_title: Load On Demand Expand on Server-side NodeClick | UI for ASP.NET AJAX Documentation
description: Load On Demand Expand on Server-side NodeClick
slug: treeview/troubleshooting/load-on-demand-expand-on-server-side-nodeclick
tags: load,on,demand,expand,on,server-side,nodeclick
published: True
position: 13
---

# Load On Demand Expand on Server-side NodeClick



## 

__Case:__

A Load On Demand TreeView for which:

* The __ExpandMode__ for Load On Demand Nodes is either __ServerSideCallBack__ or __WebService__.

* The __NodeClick__ server-side event is handled.

* A Node is expanded when clicked (in either the __OnClientNodeClicking__ or __OnClientNodeClicked__event handlers).

__Problem:__

Due to timing issues in case __ExpandMode__ for the clicked Node is:

* __ServerSideCallBack__ - the Node does not expand after the postback although its child Nodes are loaded.

* __WebService__ - the Web Method fails.

__Resolution:__

Ensure that the __NodeClick__ event fires after the Node finishes loading its Nodes:

1. Expand the Node in the __OnClientNodeClicking__ event handler. If the Node's __ExpandMode__ is __ServerSideCallBack__ or __WebService__ and the Node does not have children, cancel the event. Below is an example:

````JavaScript
	    function onClientNodeClicking(sender, eventArgs){
	    
	        var node = eventArgs.get_node();
	
	        if ((node.get_expandMode() > 1) &&
	         (node.get_nodes().get_count() == 0))
	        {
	         eventArgs.set_cancel(true);
	        }
	
	        node.expand();
	    }
````



1. Handle the __OnClientNodePopulated__event and select the expanded Node in the event handler, like this:

````JavaScript
	    function onClientNodePopulated(sender, eventArgs){ 
	    
	        eventArgs.get_node().select();
	    }
````




