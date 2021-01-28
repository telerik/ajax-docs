---
title: Disable browser spellcheck and curly red underlines in RadEditor content area
description: The curly red underline is a result of the browser spellchecker. This article shows how to disable it.
type: troubleshooting
page_title: Disable browser spellchecking and curly red underlines in content area - RadEditor - Telerik Web UI
slug: editor-disable-browser-spellchecker-and-red-underlines
position: 
tags: spell, spellchecking, editor, browser, curtly, underline, underlines, red, misspelled words
ticketid: 1032940
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
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The misspelled words in the editor's content area get automatically highlighted with curly red underlines.

## Solution
The curly red underline is a result of the browser spellchecker that can be disabled by using the [spellcheck attribute](https://www.w3schools.com/tags/att_global_spellcheck.asp). 

We need to set the **spellcheck** attribute with a false value to the content area of RadEditor:

````JavaScript
<telerik:RadEditor runat="server" ID="RadEditor1" OnClientLoad="OnClientLoad"></telerik:RadEditor>
<script>
    function OnClientLoad(sender, args) {
        sender.get_contentArea().setAttribute("spellcheck", "false");
    }
</script>
````


