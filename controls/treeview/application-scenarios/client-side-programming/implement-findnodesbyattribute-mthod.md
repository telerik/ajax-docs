---
title: Implement findNodesByAttribute Mthod
page_title: Implement findNodesByAttribute Mthod | UI for ASP.NET AJAX Documentation
description: Implement findNodesByAttribute Mthod
slug: treeview/application-scenarios/client-side-programming/implement-findnodesbyattribute-mthod
tags: implement,findnodesbyattribute,mthod
published: True
position: 19
---

# Implement findNodesByAttribute Mthod



## 

Usually, the findNode client-side methods (findNodeByText, findNodeByValue, findNodeByAttribute) return the first node that satisfies the search criterion.

Below is the implementation of a function which returns an __array of nodes__ having the same value of a particular __attribute__:

````JavaScript
	
	        function findNodesByAttribute(tree, attribute, value) {
	            var nodes = tree.get_allNodes();
	            var result = [];
	            for (var i = 0; i < nodes.length; i++) {
	                var node = nodes[i];
	                if (node.get_attributes().getAttribute(attribute) == value) {
	                    Array.add(result, node);
	                }
	            }
	            return result;
	
	        }
	
````



Here is a simple call to that function:

````JavaScript
	
	        var tree = $find("<%= RadTreeView1.ClientID %>");
	        var nodes = findNodesByAttribute(tree, "readonly", "true");
	
	        for (var i = 0; i < nodes.length; i++) {
	            alert(nodes[i].get_text());
	        }
	
````





# See Also

 * [Overview]({%slug treeview/client-side-programming/overview%})

 * [RadTreeView]({%slug treeview/client-side-programming/objects/radtreeview%})
