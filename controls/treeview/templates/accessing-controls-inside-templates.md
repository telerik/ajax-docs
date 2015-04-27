---
title: Accessing Controls Inside Templates
page_title: Accessing Controls Inside Templates | RadTreeView for ASP.NET AJAX Documentation
description: Accessing Controls Inside Templates
slug: treeview/templates/accessing-controls-inside-templates
tags: accessing,controls,inside,templates
published: True
position: 5
---

# Accessing Controls Inside Templates



## 

If your RadTreeView has Nodes with Templates that have embedded controls, you may want to access the properties of those embedded controls. To get a reference to the embedded control, locate the **Node** that has the Template, and use its **FindControl** server-side/**findControl** client-side method.

For example, consider the following, very simple TreeView:

````ASPNET
	    <telerik:RadTreeView ID="RadTreeView1" runat="server">
	        <NodeTemplate>
	            <div>
	                <telerik:RadDatePicker ID="RadDatePicker1" runat="server">
	                </telerik:RadDatePicker>
	            </div>
	        </NodeTemplate>
	    </telerik:RadTreeView>
````



To access the RadDatePicker in the Node Template, use the following code:

* **Server-side access**

* **Client-side access**

````JavaScript
	
	        var treeView = $find("<%= RadTreeView1.ClientID %>");
	        var node = treeView.get_nodes().getNode(0); 
	        var datePicker = node.findControl("RadDatePicker1");
	
````

or

````JavaScript
	
	        var datePicker = $find('<%= RadTreeView1.Nodes[0].FindControl("RadDatePicker1").ClientID %>');
	
````



# See Also

 * [Overview]({%slug treeview/templates/overview%})
