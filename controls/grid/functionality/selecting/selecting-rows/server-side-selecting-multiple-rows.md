---
title: Server-side Selecting Multiple Rows
page_title: Server-side Selecting Multiple Rows - RadGrid
description: Learn how to select multiple RadGrid rows on the server and access the selected items during grid events.
slug: grid/functionality/selecting/selecting-rows/server-side-selecting-multiple-rows
tags: server-side,selecting,multiple,rows
published: True
position: 4
---

# Server-side Selecting Multiple Rows



**RadGrid** allows multiple rows to be selected at the same time when the **AllowMultiRowSelection**property is set to **true**When multi-row selection is enabled, you can still use the approaches described in [Selecting a row with a checkbox (server-side)]({%slug grid/functionality/selecting/selecting-rows/server-side-selecting-with-a-checkbox%}) and [ Selecting a row with a select button (server-side)]({%slug grid/functionality/selecting/selecting-rows/server-side-selecting-with-a-select-button%}) topics.

![Selecting multiple rows on the server](images/SelectRowServerSide.PNG)

The selected rows can be accessed using the grid's **SelectedItems** collection. In addition, you can handle the grid's **SelectedIndexChanged** server event to detect when an item's selection changes and perform additional operations if needed.

For a live example of multi-row selection that is handled server-side, see [Server-side row selection](https://demos.telerik.com/aspnet-ajax/Grid/Examples/Programming/SelectRowWithCheckBox/DefaultCS.aspx).

## See Also

- [Selecting overview]({%slug grid/functionality/selecting/overview%})
- [Server-side selection with a checkbox]({%slug grid/functionality/selecting/selecting-rows/server-side-selecting-with-a-checkbox%})
