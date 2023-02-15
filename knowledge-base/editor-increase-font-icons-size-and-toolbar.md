---
title: How do I increase the size of the Icons in the RadEditor toolbar?
description: Learn how to increase the size of RadEditor toolbar and icons. Have Bigger icons- Telerik Web UI
type: troubleshooting
page_title: Increase the icon size and toolbar of RadEditor
slug: editor-increase-font-icons-size-and-toolbar
position: 
tags: 
ticketid: 1597453
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>RadToolBar for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description
Learn how to increase the size of RadEditor toolbar and icons.

## Solution
For lightweight render mode, the icons are based on CSS font icons which are easier to customization compared to the image sprites used in Classic render mode. You can increase the editor's toolbar and icons font-size style by placing the following CSS class override in the head of the masterpage, aspx page with the editor or in your stylesheet CSS file:

````CSS
    <style>
        .reToolBarWrapper,
        .reToolBarWrapper .reToolIcon:before {
            font-size: 25px !important;
        }
    </style>
````

For the Classic render mode, it would be a complex task to increase the size of the toolbar icons, since this will require creating a custom skin with a custom toolbar sprite image.

The following help article provides guidance on how to create a custom skin and your own image sprite for the toolbar icons: [RadEditor CSS Classes and Their Use]({%slug editor/appearance-and-styling/create-a-custom-skin%}).
Once you make the icons bigger in the modified sprite image, you will need to change everything else in the skins as well - the dimensions, the sprite images, etc. Most probably you will also have to change to background coordinates to all commands in Editor.css.
 
