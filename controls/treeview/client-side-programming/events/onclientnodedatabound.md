---
title: OnClientNodeDataBound
page_title: OnClientNodeDataBound | UI for ASP.NET AJAX Documentation
description: OnClientNodeDataBound
slug: treeview/client-side-programming/events/onclientnodedatabound
tags: onclientnodedatabound
published: True
position: 19
---

# OnClientNodeDataBound



## 

The __OnClientDataBound__ event is added in __Q3 2008__ release and fires when a Node is being created during Web Service Load on Demand. The event cannot be canceled.

The event handler receives the following parameters:

1. The RadTreeView instance that fired the event.

1. Event arguments with functions:

* __get_dataItem() -__gets a reference to the __DataItem__ (__RadTreeNodeData__ or any other serializable custom class) that the current Node is being bound to.

* __get_domEvent()__ - __undefined__for this event.

* __get_node()__ - gets a reference to the __Node__ that is being bound.

The following example shows how a value is extracted from the __DataItem__ and set as a Custom Attribute to Nodes loaded via a Web Service.

````JavaScript
	
	        function onNodeDataBound(sender, eventArgs) {
	            var node = eventArgs.get_node();
	            var dataItem = eventArgs.get_dataItem();
	            var CustomAttribute = dataItem.CustomAttribute;
	
	            node.get_attributes().setAttribute("CustomAttribute", CustomAttribute);
	        }
				
````



>tip Another usage of the __DataItem__ object is in client-side Templates that are about to be introduced with the next version of ASP.NET AJAX. See the following blog post for more details -[RadControls and ASP.NET Ajax 4.0 Preview](http://blogs.telerik.com/AtanasKorchev/Posts/08-07-23/RadControls_and_ASP_NET_Ajax_4_0_Preview.aspx?ReturnURL=/AtanasKorchev/Posts.aspx%3fPage%3d2).
>


# See Also

 * [Web Service Binding]({%slug treeview/load-on-demand/web-service-binding%})

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})

 * [Overview]({%slug treeview/client-side-programming/events/overview%})
