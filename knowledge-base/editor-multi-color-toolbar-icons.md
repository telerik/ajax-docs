---
title: Multicolor Toolbar Icons in RadEditor for ASP.NET AJAX
description: Learn how to customize toolbar icons in RadEditor for ASP.NET AJAX to display in color instead of black.
type: how-to
page_title: Multicolor Toolbar Icons in RadEditor for ASP.NET AJAX
slug: editor-multi-color-toolbar-icons
tags: radeditor, asp.net ajax, toolbar icons, customization
res_type: kb
---

## Environment

| **Product** | RadEditor for ASP.NET AJAX |
|---|---|

## Description

I want to make all the image icons on the toolbars in RadEditor for ASP.NET AJAX display in color instead of black. Currently, the icons appear in color when using the Classic RenderMode, but in the Lightweight RenderMode, they are monochromatic. I would like to achieve this by using a custom stylesheet.

## Solution

The multicolored toolbar icons are available only with the Classic RenderMode, which uses image sprites. However, this technique is not commonly used anymore.

The Lightweight RenderMode, on the other hand, is based on font icons, which are a modern alternative to images. However, font icons are monochromatic and do not support multicolor icons out of the box.

If multicolor icons are a must for your application, you can set the `RenderMode` property of the Telerik components to Classic. This will enable the multicolored icons, but keep in mind that this RenderMode is not as commonly used nowadays.

Alternatively, you can customize the toolbar icons while keeping the Lightweight RenderMode. This involves overriding the respective tool classes one by one and applying custom image icons to each tool. Here is an example of overriding the Bold button:

````ASPX
<style type="text/css">
    .reTool.reBold.reToolIcon {
        background-image: url(Images/bold.png) !important;
    }

    .reBold:before {
        content: "";
    }
</style>
<telerik:RadEditor RenderMode="Lightweight" ID="RadEditor1" runat="server"></telerik:RadEditor>
````

You can follow a similar approach for other toolbar buttons by modifying the respective tool classes and applying custom image icons.

Please note that this approach requires creating custom icon images for each tool and overriding their styles individually.

## Notes

- The Classic RenderMode is the only built-in option that supports multicolored toolbar icons in RadEditor for ASP.NET AJAX.
- Customizing the toolbar icons in the Lightweight RenderMode involves overriding the tool classes and applying custom image icons for each tool.
- Ensure that the custom image icons are properly referenced in the CSS styles.

## See Also

- [Custom Tools demo](https://demos.telerik.com/aspnet-ajax/editor/examples/customtools/defaultcs.aspx)
 
