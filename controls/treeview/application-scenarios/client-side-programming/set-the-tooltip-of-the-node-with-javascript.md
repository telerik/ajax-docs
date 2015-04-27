---
title: Set the Tooltip of the Node with Javascript
page_title: Set the Tooltip of the Node with Javascript | RadTreeView for ASP.NET AJAX Documentation
description: Set the Tooltip of the Node with Javascript
slug: treeview/application-scenarios/client-side-programming/set-the-tooltip-of-the-node-with-javascript
tags: set,the,tooltip,of,the,node,with,javascript
published: True
position: 20
---

# Set the Tooltip of the Node with Javascript



## 

Normally, you [set the ToolTip]({%slug treeview/radtreeview-nodes/overview%}) property of the node server-side. Here is how you can set the tooltip at the client using javascript:

````JavaScript
	     
		node.set_toolTip("my custom tooltip set with javascript");
				
````



````JavaScript
	     
	
	    node.get_textElement().title = "my custom tooltip set with javascript";
				
````



In the above code snippets **node** is a reference to a node of the treeview.

# See Also

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
