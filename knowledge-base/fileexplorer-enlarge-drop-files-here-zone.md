---
title: Enlarging the Drop Files Here Zone in RadFileExplorer's Upload Dialog
description: This article describes how to expand the file drop area in the upload dialog of RadFileExplorer for better usability.
type: how-to
page_title: How to Expand the Drop Files Here Area in RadFileExplorer's Upload Dialog for ASP.NET AJAX
slug: fileexplorer-enlarge-drop-files-here-zone
tags: radfileexplorer, asp.net ajax, css, radasyncupload, ui customization
res_type: kb
ticketid: 1671331
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadFileExplorer for ASP.NET AJAX</td>
</tr>
</tbody>
</table>

## Description

When using the RadFileExplorer with an integrated RadAsyncUpload, you might want to increase the size of the "Drop Files Here" zone within the upload dialog for a more user-friendly interface. This KB article also answers the following questions:
- How to customize the upload dialog in RadFileExplorer?
- How to increase the drop zone size in RadAsyncUpload?
- How to enhance the file uploading experience in RadFileExplorer?

## Solution

To enlarge the "Drop Files Here" zone in the RadAsyncUpload's upload dialog of RadFileExplorer, add the following CSS to your page:

```css
<style>
    .RadAsyncUpload .ruDropZone {
        width: 100%; /* Increase width */
        height: 350px; /* Increase height */
        padding: 20px; /* Add padding */
        border: 2px dashed #ccc; /* Optional: Customize the border */
        background-color: red; /* Optional: Add a background color */
    }
</style>
```

This CSS targets the `.ruDropZone` class used by RadAsyncUpload to style the drop zone area. By adjusting the `width`, `height`, `padding`, `border`, and `background-color` properties, you can customize the appearance and size of the drop zone according to your requirements.

## See Also

- [RadFileExplorer Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/fileexplorer/overview)
- [RadAsyncUpload Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/overview)
