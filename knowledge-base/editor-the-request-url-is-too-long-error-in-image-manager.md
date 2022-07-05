---
title: Unable to edit base64 image on RadEditor using ImageManager
description: The Image Manager does not offer support for base64 images and the KB article shows how to prevent the HTTP Error 414 The request URL is too long error
type: troubleshooting
page_title: Unable to edit base64 image on RadEditor using ImageManager
slug: editor-the-request-url-is-too-long-error-in-image-manager
position: 
tags: 
ticketid: 1571424
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadEditor for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
The image manager of RadEditor can work with physical images only.
That is why if you select a base64 image in the content area and press the Image Manager you will get the following error: 
HTTP Error 414. The request URL is too long.

See in the Solution section below how you can solve it.

## Error Message
HTTP Error 414. The request URL is too long error is thrown when loading a base64 image in RadEditor ImageManager dialog.

## Solution
The reported HTTP Error 414. The request URL is too long happens because the Image Manager does not support base64 images and when you call it with a base64 src, the URL path of the dialog handler becomes too long and the server rejects the request.

The solution is to override the setUrl method of RadWindow to check for base64 image path and to cut it down:

````ASP.NET
<script>
    Telerik.Web.UI.Window.LightweightView.prototype.setUrl = function (url) {
        var frame = this.ui.contentFrame;
        if (!frame) return;
        if (url.length < 2000) {
            frame.src = url;
        }
        else if (url.indexOf('base64') > 0) {
            alert("The Image Manager can operate only with physical files");
            frame.src = url.substring(0, url.lastIndexOf('PreselectedItemUrl'));
        }

        this.setContentFixedHeight(this.window.get_height(), this.ui.content);

        this.onUrlChanging();
    }
</script>
<telerik:RadEditor runat="server" ID="RadEditor1" >
   ...
```

## See Also
* [Insert images with a base64 string in the src via the Image Manager]({%slug editor-insert-images-with-a-base64-string-in-the-src-via-the-image-manager%})

   