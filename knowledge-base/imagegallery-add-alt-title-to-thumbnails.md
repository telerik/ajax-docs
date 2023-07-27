---
title: Add alt and title attributes to the thumbnails of RadImageGallery 
description: Due to accessibility requirements or fine tuning of the thumbnail items of RadImageGallery, you may need to get access to them and apply new HTML attributes to them - Telerik UI for ASP.NET AJAX.
type: how-to
page_title: Apply alt and title to the thumbnail images of RadImageGallery
slug: imagegallery-add-alt-title-to-thumbnails
position: 
tags: 
ticketid: 1617693
res_type: kb
---

## Environment
<table>
    <tbody>
        <tr>
            <td>Product</td>
            <td>RadImageGallery for ASP.NET AJAX</td>
        </tr>
    </tbody>
</table>


## Description
Due to accessibility requirements or fine-tuning of the thumbnail items of RadImageGallery, you may need to get access to them on the client-side and apply new HTML attributes to them. The example below shows how to get access to the thumbnails and apply alt and title attributes to one of them.

## Solution
You can access the HTML elements of the Thumbnails on the client-side and set their alt and title attributes in the pageLoad() method which is fired after the load of the Telerik controls on the page:

````ASPX
<script>
function pageLoad(sender, args) {
    var items = $find('<%= RadImageGallery1.ClientID %>').get_items();
    var item = items.getItem(2);
    item.get_thumbnailElement().title = "My ToolTip";
    item.get_thumbnailElement().setAttribute("alt", "alt value");
}
</script>
````

  