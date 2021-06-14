---
title: How to Initially Zoom the Loaded Image to Best Fit
description: How to Initially Zoom the Loaded Image to Best Fit. Check it now!
type: how-to
page_title: How to Initially Zoom the Loaded Image to Best Fit
slug: imageeditor-how-to-initially-zoom-the-loaded-image-to-best-fit
res_type: kb
---

## How to

Zoom the image loaded in RadImageEditor to best fit the editable area of the control. on initial load.

## Solution

In order to zoom to best fit the loaded image, you can attach a handler to the ImageEditor's client-side [ImageLoad]({%slug imageeditor/client-side-programming/events/onclientimageload%}) event and call the controls [zoomBestFit()]({%slug imageeditor/client-side-programming/overview%}) method in it.

````ASPX
<telerik:RadImageEditor ID="RadImageEditor1" runat="server" RenderMode="Lightweight" ImageUrl="~/Images/hay.jpg" Width="790" Height="430px" OnClientImageLoad="onImageLoad">
</telerik:RadImageEditor>
<script>
    function onImageLoad(imageEditor, args) {
       imageEditor.zoomBestFit();
    }
</script>
````

## See Also

 - [RadImageEditor's OnClientImageLoad Event]({%slug imageeditor/client-side-programming/events/onclientimageload%}})

 - [RadImageEditor's Client-side Programming Overview]({%slug imageeditor/client-side-programming/overview%})


 