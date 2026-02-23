---
title: Enabling Horizontal Scrollbar for Detail Tables in Grid
description: Learn how to ensure the horizontal scrollbar appears for detail tables in the Grid when columns exceed the width of the main grid.
type: how-to
page_title: Add Horizontal Scrollbar for Detail Table
meta_title: Add Horizontal Scrollbar for Detail Table
slug: grid-enabling-horizontal-scrollbar-for-detail-table
tags: grid, ui-for-aspnet-ajax, horizontal-scrollbar, detail-tables, css
res_type: kb
ticketid: 1710099
---

## Environment
<table>
<tbody>
<tr>
<td> Product </td>
<td> Grid for UI for ASP.NET AJAX </td>
</tr>
<tr>
<td> Version </td>
<td> All </td>
</tr>
</tbody>
</table>

## Description

I have a grid with a detail table, and the horizontal scrollbar does not appear when the detail table's columns exceed the width of the main grid. This happens despite using CSS to manage the grid layout and wrapping the grids within a container. I need a solution to ensure the detail table displays its horizontal scrollbar properly.

This knowledge base article also answers the following questions:

- How to make the detail table scroll horizontally in UI for ASP.NET AJAX Grid?
- How to enable horizontal scrolling for nested tables in the Grid?
- How to adjust CSS for detail table scrollbar visibility?

## Solution

To ensure the horizontal scrollbar appears for the detail table in the Grid, apply the following CSS:

````CSS
html body .RadGrid table.rgMasterTable > tbody > tr > td[colspan] {
    overflow-x: auto !important;
}
````

