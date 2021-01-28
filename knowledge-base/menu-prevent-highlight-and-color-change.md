---
title: Prevent highlight and color change in menu
description: 
type: how-to
page_title: Prevent highlight and color change in RadMenu
slug: prevent-highlight-and-color-change-in-menu
position: 
tags: 
ticketid: 1433756
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadMenu for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

RadMenu provides built-in Selection for its items - they get highlighted when the users clicks upon them:
[Live Menu Sample With Selection](https://demos.telerik.com/aspnet-ajax/menu/examples/functionality/expanddirection/defaultcs.aspx)

## Solution

If you prefer to disable this behavior, all you need to do is to control it using this dedicated property:

```ASP.NET
<telerik:RadMenu ... EnableSelection="false">
```
