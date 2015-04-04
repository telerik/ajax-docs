---
title: Inherit the the Checked State of the Parent Node In Load on Demand
page_title: Inherit the the Checked State of the Parent Node In Load on Demand | UI for ASP.NET AJAX Documentation
description: Inherit the the Checked State of the Parent Node In Load on Demand
slug: treeview/application-scenarios/checkboxes/inherit-the-the-checked-state-of-the-parent-node-in-load-on-demand
tags: inherit,the,the,checked,state,of,the,parent,node,in,load,on,demand
published: True
position: 3
---

# Inherit the the Checked State of the Parent Node In Load on Demand



## 

Simply set the Checked property of the child Nodes to the Checked property of their parent Node, like this:

__Server-Side Approach__

This is pretty straightforward:



````C#
	
	
	    protected void RadTreeView1_NodeExpand(object sender, Telerik.Web.UI.RadTreeNodeEventArgs e)
	    {
	        RadTreeNode firstChild = new RadTreeNode("new child1", "new1");
	        firstChild.Checked = e.Node.Checked;
	        RadTreeNode secondChild = new RadTreeNode("new child2", "new2");
	        secondChild.Checked = e.Node.Checked;
	        e.Node.Nodes.Add(firstChild);
	        e.Node.Nodes.Add(secondChild);
	    }
	
````
````VB.NET
	     
	
	    Protected Sub RadTreeView1_NodeExpand(ByVal sender As Object, ByVal e As Telerik.Web.UI.RadTreeNodeEventArgs)
	
	        Dim firstChild As New RadTreeNode("new child1", "new1")
	        firstChild.Checked = e.Node.Checked
	        Dim secondChild As New RadTreeNode("new child2", "new2")
	        secondChild.Checked = e.Node.Checked
	        e.Node.Nodes.Add(firstChild)
	        e.Node.Nodes.Add(secondChild)
	
	    End Sub
				
````


__Client-Side Approach__

You need to first get the __Checked__ state of the expanded Node in the __OnClientNodePopulating__ event handler and store it for later usage.

>note This is required because after the Nodes are populated, by default, the CheckState (and Checked state) of their parent will be automatically updated (and its initial value will be lost) according to their Checked states.
>


Later, in the __OnClientNodePopulated__event handler set the Checked state of the child Nodes to the initial Checked state of their parent.

````JavaScript
	        var expandedNodeChecked = null;
	
	        function onClientNodePopulated(sender, eventArgs) {
	            if (expandedNodeChecked != null) {
	                var parentNode = eventArgs.get_node();
	                var childNodes = parentNode.get_nodes();
	                var childNodeCount = childNodes.get_count();
	
	                for (var nodeIndex = 0; nodeIndex < childNodeCount; nodeIndex++) {
	                    var childNode = childNodes.getNode(nodeIndex);
	
	                    childNode.set_checked(expandedNodeChecked);
	                }
	            }
	        }
	        function onClientNodePopulating(sender, eventArgs) {
	            expandedNodeChecked = eventArgs.get_node().get_checked();
	        }
	    
				
````


