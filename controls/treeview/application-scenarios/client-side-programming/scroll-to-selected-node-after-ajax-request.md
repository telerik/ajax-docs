---
title: Scroll to Selected Node After AJAX Request
page_title: Scroll to Selected Node After AJAX Request - RadTreeView
description: Check our Web Forms article about Scroll to Selected Node After AJAX Request.
slug: treeview/application-scenarios/client-side-programming/scroll-to-selected-node-after-ajax-request
tags: scroll,to,selected,node,after,ajax,request
published: True
position: 10
---

# Scroll to Selected Node After AJAX Request



## 

To scroll to the selected **TreeNode** after an AJAX request has occurred you should subscribe to the **ClientEvents-OnResponseEnd** event of **RadAjaxPanel** and use the **ScrollIntoView()** client-side method of **RadTreeNode** class like:

````ASPNET
<telerik:RadAjaxPanel ID="RadAjaxPanel1" runat="server" ClientEvents-OnResponseEnd="OnResponseEnd">
</telerik:RadAjaxPanel>
````
````JavaScript
function OnResponseEnd(sender, eventArgs) {
	var tree = $find("<%= RadTreeView1.ClientID %>");
	var selectedNode = tree.get_selectedNode();
	
	if (selectedNode != null) {
		selectedNode.scrollIntoView();
	}
}

````



# See Also

 * [RadTreeNode]({%slug treeview/client-side-programming/objects/radtreenode%})
