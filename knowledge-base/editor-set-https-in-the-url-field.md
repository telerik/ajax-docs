---
title: Configure Hyperlink Manager URL field of RadEditor to starts with HTTPS
description: The URL textbox of the RadEditor hyperlink manager begins with http due to legacy reasons, but you can easily update it to https. Learn how in this article.
type: how-to
page_title: Configure Hyperlink Manager URL field of RadEditor to starts with HTTPS
slug: editor-set-https-in-the-url-field
position: 
tags: 
ticketid: 1524108
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2020.2.617</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Due to legacy reasons, the URL textbox begins with http://, but you can easily update it to https:// by following the instructions below.

## Solution
To update the default value of the URL field of the Hyperlink manager from http:// to https://, you need to create a js file (e.g. dialog.js) with the following content:

````JavaScript
setTimeout(function () {
    document.getElementById("LinkURL").value = "https://";
}, 100);
````

and to load it through the DialogsScriptFile property

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1" DialogsScriptFile="~/dialog.js" ></telerik:RadEditor>
````
 
 