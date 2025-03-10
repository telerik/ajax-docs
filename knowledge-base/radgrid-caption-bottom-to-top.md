---
title: Caption Displays at Bottom of RadGrid Instead of Top
description: Learn how to adjust the position of the caption in RadGrid for ASP.NET AJAX to appear at the top instead of the bottom.
type: troubleshooting
page_title: How to Move RadGrid Caption to the Top in ASP.NET AJAX
slug: radgrid-caption-bottom-to-top
tags: radgrid, asp.net ajax, caption, css
res_type: kb
ticketid: 1681277
---

## Environment
<table>
<tbody>
<tr>
<td>Product</td>
<td>RadGrid for ASP.NET AJAX</td>
</tr>
</tbody>
</table>

## Description
When adding a caption to the MasterTableView in RadGrid for ASP.NET AJAX, the caption is displayed at the bottom of the grid instead of the top. This article explains how to correct the caption's position.

## Cause
The issue might be caused by CSS styles affecting the caption's position or an incorrect HTML structure. Additionally, JavaScript code might interfere and alter the caption's position after the page has loaded.

## Solution
To ensure the caption appears at the top of RadGrid, follow these steps:

1. **Check CSS Styles**: Ensure no CSS styles are positioning the caption incorrectly. Inspect the grid and caption for any applied styles that may affect its position.

2. **Set Caption Position via CSS**: Explicitly set the caption's position using CSS. Add the following CSS rule to your stylesheet to position the caption at the top of RadGrid:

    ```css
    .rgMasterTable .rgCaption {
        caption-side: top;
    }
    ```

    This CSS rule targets the caption within RadGrid and sets its position to the top.

3. **Inspect HTML Structure**: Verify the caption is correctly placed within the `<table>` element in the HTML markup. It should be directly inside the `<table>` tag, before any `<thead>`, `<tbody>`, or `<tfoot>` elements.

4. **Check for JavaScript Interference**: Ensure no JavaScript functions or scripts are manipulating the caption's position after the page loads.

By following these steps, the caption should appear at the top of RadGrid, as expected.

## See Also
- [RadGrid Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
