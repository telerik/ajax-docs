---
title: Add tooltip for RadTreeList or RadGrid cell template content automatically
description: 
type: how-to
page_title: 
slug: treelist-add-tooltip-to-cell-template-content-automatically
position: 
tags: 
ticketid: 1443084
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadTreeList for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Solution

You can generate tooltips for specific template elements both for RadTreeList and RadGrid using the same approach:
````ASP.NET
            <ClientSettings>
                <ClientEvents OnTreeListCreated="treeListCreated" />
            </ClientSettings>
````
````JavaScript
            function treeListCreated(sender, args) {
                var treelist = sender;
                var items = treelist.get_dataItems();
                for (var i = 0; i < items.length; i++) {
                    $(items[i].get_element()).find("a").attr("title", "Success");
                }
            }
````
