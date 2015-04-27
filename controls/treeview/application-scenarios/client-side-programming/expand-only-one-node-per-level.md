---
title: Expand Only One Node per Level
page_title: Expand Only One Node per Level | RadTreeView for ASP.NET AJAX Documentation
description: Expand Only One Node per Level
slug: treeview/application-scenarios/client-side-programming/expand-only-one-node-per-level
tags: expand,only,one,node,per,level
published: True
position: 17
---

# Expand Only One Node per Level



## 

This article shows hot to expand only one Node per Level with JavaScript. Hook to the **OnClientNodeClicking**event of the TreeView and handle it in the following way:

````JavaScript
	
	    <script type="text/javascript">
	        function OnClientNodeClicking(sender, eventArgs) {
	            var node = eventArgs.get_node();
	
	            node.toggle();
	
	            if (node.get_nodes().get_count()) {
	                CollapseSiblings(node);
	            }
	        }
	
	        function CollapseSiblings(node) {
	            var parent = node.get_parent();
	            var siblings = parent.get_nodes();
	            var siblingsCount = siblings.get_count();
	
	            for (var nodeIndex = 0; nodeIndex < siblingsCount; nodeIndex++)
	             {
	                var siblingNode = siblings.getNode(nodeIndex);
	
	                if ((siblingNode != node) && (siblingNode.get_expanded())) 
	                {
	                    siblingNode.collapse();
	                    return;
	                }
	            }
	        }
	    </script>
	
````


