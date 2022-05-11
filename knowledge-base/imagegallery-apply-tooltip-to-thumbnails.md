---
title: Apply tooltips to the thumbnails of RadImageGallery
description: Apply a tooltip to the thumbnails of RadImageGallery. Check it now!
type: how-to
page_title: Apply a tooltip to the thumbnails of RadImageGallery
slug: imagegallery-apply-tooltip-to-thumbnails
res_type: kb
---


## HOW-TO
Apply a tooltip to the thumbnails of RadImageGallery

## DESCRIPTION
I would like to show the tooltip of the image title when the cursor is hovered over the thumbnail. Any way that can be done?

## SOLUTION
You can access the HTML elements of the Thumbnails on the client-side using the get_items() method and set their title attributes as shown below:

````ASP.NET
<telerik:RadImageGallery RenderMode="Lightweight" runat="server" ID="RadImageGallery1" DisplayAreaMode="Thumbnails" Width="600px"
    Visible="true" ImagesFolderPath="~/images">
    <ImageAreaSettings Height="500px" />
    <ThumbnailsAreaSettings Height="200" ShowScrollButtons="false" />
</telerik:RadImageGallery>
<script>
    function pageLoad(sender, args) {
        var items = $find('<%= RadImageGallery1.ClientID %>').get_items();
                
        for (var i = 0; i <= items.get_count(); i++) {
            var item = items.getItem(i);
            item.get_thumbnailElement().title = "My ToolTip " + i;
        }
    }
</script>
````


  