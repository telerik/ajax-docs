---
title: Accessing Controls Inside Templates
page_title: Accessing Controls Inside Templates | UI for ASP.NET AJAX Documentation
description: Accessing Controls Inside Templates
slug: combobox/templates/accessing-controls-inside-templates
tags: accessing,controls,inside,templates
published: True
position: 5
---

# Accessing Controls Inside Templates



The following example demonstrates how to find **RadTreeView** control nested in ItemTemplate of **RadComboBox**.

Here follows the markup:

````ASPNET
<telerik:radcombobox id="RadComboBox1" runat="server">    
<ItemTemplate>                           
	<telerik:RadTreeView ID="RadTreeView1" runat="server">            
	<Nodes>                
		<telerik:RadTreeNode Text="Products"></telerik:RadTreeNode>                
		<telerik:RadTreeNode Text="Services"></telerik:RadTreeNode>            
	</Nodes>        
	</telerik:RadTreeView>    
</ItemTemplate>    
<Items>        
	<telerik:RadComboBoxItem Text="" />    
</Items>
</telerik:radcombobox>
````



## How to find RadTreeView object server-side

You need to search for the RadTreeView in the Controls collection of the RadComboBox's item:



````C#
	
RadTreeView tree = (RadTreeView)RadComboBox1.Items[0].FindControl("RadTreeView1");
	          
````
````VB.NET
	     
	
Dim tree As RadTreeView = DirectCast(RadComboBox1.Items(0).FindControl("RadTreeView1"), RadTreeView)
				
````


## How to find RadTreeView object client-side

Here are the available options to find the RadTreeView object in RadComboBox, on the client:

````JavaScript
	
var combo = $find("<%= RadComboBox1.ClientID %>");
var tree = combo.get_items().getItem(0).findControl("RadTreeView1"); 
tree.get_nodes().getNode(1).select();

/* OR */

var tree = $find('<%= RadComboBox1.Items[0].FindControl("RadTreeView1").ClientID %>'); 
tree.get_nodes().getNode(1).select();
	
````



# See Also

 * [Finding Embedded RadComboBox on the Client]({%slug combobox/how-to/finding-embedded-radcombobox-on-the-client%})
