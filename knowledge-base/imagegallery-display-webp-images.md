---
title: Display WEBP Images
description: Learn how to configure RadImageGallery to display WEBP images by setting up the correct MIME type on your server.
type: how-to
page_title: Display WEBP Images
slug: imagegallery-display-webp-images
tags: radimagegallery, aspnet-ajax, webp, mime-type, staticcontent
res_type: kb
ticketid: 1676084
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadImageGallery for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I have RadImageGallery deployed on several pages of my site. It displays jpg files just fine, but it does not show webp files. Is there a way to set accepted file types for RadImageGallery to include WEBP images?

This knowledge base article also answers the following questions:

- How do I enable WEBP image support in RadImageGallery?
- What server configuration is required to display WEBP images in RadImageGallery?
- Can RadImageGallery display WEBP image format?

## Solution

To display WEBP images in RadImageGallery, ensure your server is configured to serve WEBP files with the correct MIME type. You will need to update your server's configuration file to include the correct MIME type for WEBP files. Add the following configuration in your `web.config` file:

````xml
<system.webServer>
    <staticContent>
        <mimeMap fileExtension=".webp" mimeType="image/webp" />
    </staticContent>
</system.webServer>
````

By following these steps, WEBP images should now display correctly in the RadImageGallery control on your ASP.NET AJAX application pages.

## See Also

- [RadImageGallery Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/imagegallery/overview)
- [Configuring MIME Types in IIS](https://docs.microsoft.com/en-us/iis/configuration/system.webServer/staticContent/mimeMap)
- [Static Content Feature in IIS](https://docs.microsoft.com/en-us/iis/configuration/system.webServer/staticContent/)
