---
title: Server-side Selecting Multiple Rows
page_title: Server-side Selecting Multiple Rows | UI for ASP.NET AJAX Documentation
description: Server-side Selecting Multiple Rows
slug: grid/functionality/selecting/selecting-rows/server-side-selecting-multiple-rows
tags: server-side,selecting,multiple,rows
published: True
position: 4
---

# Server-side Selecting Multiple Rows



## 

__RadGrid__ allows multiple rows to be selected at the same time when the __AllowMultiRowSelection__property is set to __true__When multi-row selection is enabled, you can still use the approaches described in [Selecting a row with a checkbox (server-side)]({%slug grid/functionality/selecting/selecting-rows/server-side-selecting-with-a-checkbox%}) and [ Selecting a row with a select button (server-side)]({%slug grid/functionality/selecting/selecting-rows/server-side-selecting-with-a-select-button%}) topics.

![](images/SelectRowServerSide.PNG)

The selected rows can be accessed using the grid's __SelectedItems__ collection. In addition, you can handle the grid's __SelectedIndexChanged__ server event to detect when an item's selection changes and perform additional operations if needed.

For a live example of multi-row selection that is handled server-side, see [Server-side row selection](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Programming/SelectRowWithCheckBox/DefaultCS.aspx).
