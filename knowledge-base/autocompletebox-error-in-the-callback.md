---
title: There was an error in the callback
description: Learn how to fix the there was an error in the callback error of RadAutoCompleteBox
type: troubleshooting
page_title: There was an error in the callback
slug: autocompletebox-error-in-the-callback
position: 
tags: 
ticketid: 1574253
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadAutoCompleteBox for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
See how to fix the "There was an error in the callback.0|[]_$$_False" of RadAutoCompleteBox in the solution section.

## Solution
The control relies on callbacks, triggered to the server, each time the end user types/deletes a character from the input of the control. This is implemented in such a manner that each time a new request is triggered - the control can access its associated data source and return the subset of results that matches the typed characters.

With that said, when the  if (!Page.IsPostBack)  statement is used to supply the control with data - you are forbidding subsequent requests from the data source. Hence, the inability to properly bind the control arises. Please remove the if (!Page.IsPostBack)  statement so that you can allow constant access of the control to its underlying data source.

On a side note, as mentioned above - the control uses callbacks to acquire its data source. This is why the data source should be provided not later than the Page_Load event.
 
