---
title: Scroll to Selected Node After AJAX Request
page_title: Scroll to Selected Node After AJAX Request | UI for ASP.NET AJAX Documentation
description: Scroll to Selected Node After AJAX Request
slug: treeview/application-scenarios/client-side-programming/scroll-to-selected-node-after-ajax-request
tags: scroll,to,selected,node,after,ajax,request
published: True
position: 10
---

# Scroll to Selected Node After AJAX Request



## 

To scroll to the selected TreeNode after an AJAX request has occurred you should subscribe to the __ClientEvents-OnResponseEnd__ event of __RadAjaxPanel__ and use the __ScrollIntoView()__ client-side method of RadTreeNode class like:

````ASPNET
	
	    <script type="text/javascript">
	        function OnResponseEnd(sender, eventArgs) {
	            var tree = $find("<%= RadTreeView1.ClientID %>");
	            var selectedNode = tree.get_selectedNode();
	            if (selectedNode != null) {
	                selectedNode.scrollIntoView();
	            }
	        }
	    </script>
	
	    <telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" ClientEvents-OnResponseEnd="OnResponseEnd">
	    </telerik:RadAjaxPanel>
````



# See Also

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
