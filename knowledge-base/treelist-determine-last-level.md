---
title: Determine Last Level of TreeList
description: This sample demonstrates how you can figure out the last level of RadTreeList?.
type: how-to
page_title: How to determine the last level of TreeList?
slug: treelist-determine-last-level
position: 
tags: 
ticketid: 1443954
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


## Description

In some scenarios with TreeList you might want to execute custom logic only for the innermost level - e.g. hiding or disabling some buttons or applying conditional color.

## Solution

You can achieve this requirement using the following method:
````C#
protected void RadTreeList1_ItemDataBound(object sender, TreeListItemDataBoundEventArgs e)
{
    if (e.Item is TreeListDataItem)
    {
        TreeListDataItem item = e.Item as TreeListDataItem;

        if (!item.CanExpand)
        {
            // execute custom logic
        }
    }
}
````



