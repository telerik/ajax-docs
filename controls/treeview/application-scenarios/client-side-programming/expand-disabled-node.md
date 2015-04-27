---
title: Expand Disabled Node
page_title: Expand Disabled Node | RadTreeView for ASP.NET AJAX Documentation
description: Expand Disabled Node
slug: treeview/application-scenarios/client-side-programming/expand-disabled-node
tags: expand,disabled,node
published: True
position: 8
---

# Expand Disabled Node



## 

**HOW-TO**Have a disabled node which can be expanded and collapsed, but not clicked.

**DESCRIPTION**Disabled nodes cannot be selected, expanded and collapsed by design. Sometimes you might need a node which looks like disabled, cannot be selected, but still be expandable and collapsible.

**SOLUTION**To achieve the task we will leave the node enabled, but we will add an additional CSS class ("rtDisabled") to its parentElement. This will give the node a "disabled" look. We will assign a category "Disabled" to the node so we can distinguish it from the others. To prevent selecting that node we will subscribe to the [OnClientNodeClicking]({%slug treeview/client-side-programming/events/onclientnodeclicking%}) event and cancel the event if that node is clicked.

````ASPNET
	    <telerik:RadTreeView ID="RadTreeView1" OnClientNodeClicking="OnClientNodeClickingHandler"
	        runat="server">
	        <Nodes>
	            <telerik:RadTreeNode runat="server" Text="Root RadTreeNode1" Category="Disabled">
	                <Nodes>
	                    <telerik:RadTreeNode runat="server" Text="Child RadTreeNode 1">
	                    </telerik:RadTreeNode>
	                    <telerik:RadTreeNode runat="server" Text="Child RadTreeNode 2">
	                    </telerik:RadTreeNode>
	                </Nodes>
	            </telerik:RadTreeNode>
	        </Nodes>
	    </telerik:RadTreeView>
````



````JavaScript
	        function pageLoad() {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            var nodes = tree.get_allNodes();
	
	            for (var i = 0; i < nodes.length; i++) {
	                var node = nodes[i];
	                if (node.get_category() == "Disabled") {
	                    node.get_textElement().parentElement.className += " rtDisabled";
	                }
	            }
	        }
	
	        function OnClientNodeClickingHandler(sender, eventArgs) {
	            var node = eventArgs.get_node();
	            if (node.get_category() == "Disabled") {
	                eventArgs.set_cancel(true);
	            }
	        }
````



Here is how you can add "disabled" nodes from the code-behind.



````C#
	     
		protected void Page_Load(object sender, EventArgs e) {     
	            if (!IsPostBack)     
	            {         
	                RadTreeNode root = new RadTreeNode("root node");         
	                root.CssClass += " rtDisabled";         
	                root.Category = "Disabled";         
	                RadTreeNode child = new RadTreeNode("child");        
	                root.Nodes.Add(child);        
	                RadTreeView1.Nodes.Add(root);     
	            }
	    } 
				
````
````VB.NET
	     
	    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs) Handles Me.Load
	        If Not IsPostBack Then
	            Dim root As New RadTreeNode("root node")
	            root.CssClass += " rtDisabled"
	            root.Category = "Disabled"
	
	            Dim child As New RadTreeNode("child")
	            root.Nodes.Add(child)
	            RadTreeView1.Nodes.Add(root)
	        End If
	    End Sub
	
````

