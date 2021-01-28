---
title: Hide SearchBox on Initial Load
description: This article demonstrates how you can hide RadSearchBox initially and then show it.
type: how-to
page_title: How to hide RadSearchBox initially?
slug: searchbox-hide-on-initial-load
position: 
tags: 
ticketid: 1443355
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadSearchBox for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

If you want to hide the SearchBox initially and then display it on some action like a button click, its input text width is getting truncated and cut.

## Solution

You can resolve it using one of these options:

1. Call the repaint() method after showing it:
````JS
function showSearchBox() {
    var searchBox = $telerik.findControl(document, "RadSearchBox1");
    searchBox.set_visible(true);
    searchBox.repaint();
}
````

2. Hide the searchbox initially after some delay:
````JS
function pageLoad(app, args) {
    var searchBox = $find('<%= RadSearchBox1.ClientID %>');
    hideSearchBox(searchBox);
}
function hideSearchBox(searchBox) {
    setTimeout(function () {
        searchBox.set_visible(false);
    }, 50);
}
````
           
3. Hide it using visibility instead of display:
````ASP.NET
<telerik:RadSearchBox ... Style="visibility: hidden;">
````


       

