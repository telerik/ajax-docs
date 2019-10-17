---
title: Wrap RadListBoxItem text on a new line
description: Learn how to wrap the RadListBoxItem text on a new line.
type: how-to
page_title: Wrap ListBox item text on a new line - RadListBoxItem | Telerik Web UI
slug: listbox-wrapping-item-text
position: 
ticketid: 1432363
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2019.3.917</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadListBox for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
By design when the RenderMode is set to "Lightweight", a horizontal scrollbar will appear when the text of the RadListBox item exceeds the control's width scrollbar appears the available width of the control.
This article explains how to wrap the long text on a new line.


## Solution for RenderMode="Lightweight":
All you have to do is to apply the following style to the page:

````ASPNET
<style>
    .RadListBox .rlbItem{
      white-space:normal
    }
</style>
<telerik:RadListBox runat="server" Width="300px" ID="RadListBox1" RenderMode="Lightweight">
    <Items>
        <telerik:RadListBoxItem Text="Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1Item 1" />
        <telerik:RadListBoxItem Text="Item 2" />
        <telerik:RadListBoxItem Text="Item 3" />
        <telerik:RadListBoxItem Text="Item 4" />
    </Items>
</telerik:RadListBox>
````
## Solution for RenderMode="Classic": 
The default behavior of the control in this mode is to wrap the long text. If you however prefer the opposite, check out [this article](https://docs.telerik.com/devtools/aspnet-ajax/controls/listbox/how-to/scroll-items-horizontally).
