---
title: Navigate to selected node in RadDropDownTree
description: 
type: how-to
page_title: 
slug: navigate-to-selected-node-in-raddropdowntree
position: 
tags: 
ticketid: 1434279
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadDropDownTree for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

It is a good thing to improve the convenience of the form for the user. This can also happen with the dropdown tree by automatically navigating to the selected item when the user opens the dropdown. 

## Solution

You can achieve this using the following approach:
```ASP.NET
 <telerik:RadDropDownTree ... OnClientDropDownOpened="dropDownOpened">
```

```JS
            function dropDownOpened(sender, args) {
                var tree = sender.get_embeddedTree();
                var node = tree.get_selectedNode();
                node.expandParentNodes();
            }
```




