```markdown
---
title: Positioning and Customizing the RadImageGallery Toolbar
description: Learn how to position the RadImageGallery toolbar below images, hide the navigation dots, and customize the toolbar visibility in UI for ASP.NET AJAX.
type: how-to
page_title: Customizing and Positioning ImageGallery Toolbar and Navigation Dots in ASP.NET AJAX
meta_title: Customizing and Positioning ImageGallery Toolbar and Navigation Dots in ASP.NET AJAX
slug: position-customize-radimagegallery-toolbar
tags: imagegallery, toolbar, navigation-dots, ui-for-aspnet-ajax
res_type: kb
ticketid: 1718804
---

## Environment

<table>
<tbody>
<tr>
<td> Product </td>
<td> ImageGallery for UI for ASP.NET AJAX </td>
</tr>
<tr>
<td> Version </td>
<td> 2026.1.421 </td>
</tr>
</tbody>
</table>

## Description

I want to position the RadImageGallery toolbar below the images, hide the navigation dots, and ensure the toolbar remains visible in full-screen mode. Additionally, I want to remove or customize the blue rectangle associated with the toolbar.

This knowledge base article also answers the following questions:
- How can I hide the navigation dots in RadImageGallery?
- How can I remove the toolbar in RadImageGallery?
- How can I customize the toolbar background in RadImageGallery?

## Solution

To achieve the desired layout and appearance, follow these steps:

1. **Hide the Navigation Dots**  
   Use the following CSS rule to hide the navigation dots below the images:
   ```css
   .rigDotList {
       display: none;
   }
   ```

2. **Hide the Toolbar Completely**  
   If the toolbar buttons are not required, hide the entire toolbar wrapper by applying this CSS:
   ```css
   .rigToolsWrapper {
       display: none;
   }
   ```

3. **Customize the Toolbar Background**  
   To change the background color of the toolbar, use the following CSS:
   ```css
   .rigToolsWrapper {
       background-color: #desiredColor; /* Replace #desiredColor with your preferred color code */
   }
   ```

These steps allow you to remove or customize elements of the RadImageGallery as per your requirements.

## See Also

- [RadImageGallery Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/imagegallery/overview)
```
