---
title: Add text to an image on specific position via JavaScript
description: Learn how to add text on specific position to an image within RadImageEditor - Telerik UI for ASP.NET AJAX.
type: how-to
page_title: Programmatically apply text to an image on a specific position in RadImageEditor
slug: imageeditor-add-text-to-an-image
position: 
tags: 
ticketid: 1603758
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadImageEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Learn below how to add text to an image on specific position within RadImageEditor.

## Solution
You can attach a button click event and execute the function below to get a reference to the ImageEditor and add text to an image on a specific position:

````JavaScript
function AddTextToImage() {
    var editor = $find("<%=RadImageEditor.ClientID%>"); //get reference to RadImageEditor on the client

    var text = new Telerik.Web.UI.ImageEditor.ImageText();
    text.set_text("Test !!!");
    editor.addTextToImage(20, 50, text);
}
````
 

   
