---
title: Dragging a Column in RadGrid Displays a Large White Box
description: Resolving the issue where dragging a column in RadGrid with virtual scroll enabled displays a large white box instead of matching the column width.
type: troubleshooting
page_title: Large White Box Appears While Dragging Columns in RadGrid
meta_title: Large White Box Appears While Dragging Columns in RadGrid
slug: radgrid-white-box-dragging-columns
tags: radgrid, asp.net ajax, css, column-reordering, virtual-scroll, debugger, styles
res_type: kb
ticketid: 1691575
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadGrid for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>2022.2.622</td>
</tr>
</tbody>
</table>

## Description

When dragging a column to a new position in a [RadGrid](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview) with virtual scroll paging enabled, a large white box appears instead of matching the width of the column. This behavior is caused by CSS rules overriding the dragger's styling, making it stretch across the screen.

## Cause

The issue occurs because RadGrid generates a floating dragger element styled with dimensions matching the column width. If global CSS rules applied to `table`, `tr`, or `td` elements on the page override these styles (e.g., `width: 100%` or `display: block`), the dragger element expands beyond the intended size.

## Solution

To achieve the correct behavior, apply CSS overrides to constrain the dragger's width. Follow these steps:

1. Open the browser's Developer Tools by pressing F12.
2. Use the following script to pause execution while dragging a column:
   ```javascript
   setTimeout(function(){ debugger; }, 3000);
   ```
3. Drag a column header and inspect the `<div>` element with classes like `rgHeader rgHeaderOver RadGrid RadGrid_Silk` and its `<table>` child.
4. Inspect your site stylesheets for global CSS rules applied to `table`, `tr`, or `td` elements, and ensure they do not override RadGrid's styling. Applying the above CSS constraints resolves the issue.
5. Alternatively apply the following CSS rules to limit the dragger's width:

   Limit the dragger width to its content:
   ```css
   div.rgHeaderOver table {
       width: auto !important;
       table-layout: auto !important;
   }
   ```

   Force the dragger to match the column width:
   ```css
   div.rgHeaderOver {
       width: auto !important;
       max-width: 200px; /* Adjust to the column width */
   }

   div.rgHeaderOver table {
       width: auto !important;
   }
   ```


## See Also

- [RadGrid Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/overview)
- [Troubleshooting CSS Issues - Part 1](https://www.telerik.com/blogs/improve-your-debugging-skills-with-chrome-devtools)
- [Troubleshooting CSS Issues - Part 2](https://www.telerik.com/blogs/improve-your-debugging-skills-with-chrome-devtools-(part-2))
