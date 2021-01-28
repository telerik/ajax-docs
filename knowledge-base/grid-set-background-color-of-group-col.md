---
title: Set the Background Color of Multi-column Header Col Group
description: This article demonstrates how you can set the background color of a ColGroup header cell.
type: how-to
page_title: Set the background color of RadGrid multi-column header
slug: grid-set-background-color-of-group-col
position: 
tags: 
ticketid: 1443917
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadGrid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

Properties like `HeaderStyle-BackColor="#Lime"` are inherited and although they work in most of the cases, they cannot override everything set by the CSS rules. In this case, it is necessary not only to change the background-color, but the background property as a whole.

## Solution

This approach should achieves that as expected:
````ASP.NET
<telerik:GridColumnGroup HeaderText="PS" Name="PS">
    <HeaderStyle CssClass="tanBackGround" />
</telerik:GridColumnGroup>
````

````CSS
<style>
    div.RadGrid .tanBackGround {
        background: tan;
    }
</style>
````






