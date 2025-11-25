---
title: Other Resources
page_title: Other Resources - RadGrid
description: Check our Web Forms article about Other Resources.
slug: grid/how-to/Other-resources
tags: codelibrary, howto
published: True
position: 1
---

# Helpful RadGrid Resources

This page contains links to examples that you may find useful when implementing various scenarios with the grid. Even if you do not see the exact requirement you have, similar setups may give you ideas and show you ways to access various controls and properties that will let you achieve your goal.

## Appearance

* [100% Height for RadGrid]({%slug grid-set-height-in-percentages%}) - This article explains how to set the grid height in percent values. The key requirement is that all of its parent html elements also have height set in percents, up to a parent with a fixed height (including the html, body, form elements and all Update panels). See also the [Scrolling]({%slug grid/functionality/scrolling/overview%}), [Height vs ScrollHeight]({%slug grid/functionality/scrolling/height-vs.-scrollheight%}) and [Scroll With Static Headers]({%slug grid/functionality/scrolling/scroll-with-static-headers%}) articles.

## Data Editing:

* [Batch Editing Extensions - Related RadComboBoxes and Batch Validation]({%slug grid-batch-editing-extensions-related-radcomboboxes-and-validation%}) - Provides an extension for the RadGrid Batch Editing functionality, which allows you to implement related RadComboBoxes functionality between column and to set Batch Validation.
* [Manual Insert/Update/Delete operations using Auto-generated editform with sql statements from the code-behind]({%slug grid-manual-insert-update-delete-operations-using-auto-generated-editform-with-sql-statements-from-the-code-behind%}) -  Demonstrates manual Insert/Update/Delete operations using Auto-generated editform with sql statements from the code-behind
* [Copy-Paste Cell/Row data through RadContextMenu with Batch Editing]({%slug grid-copy-paste-cell-row-data-through-radcontextmenu-with-batch-editing%}) - Demonstrates how to implement Copy-Paste functionality for cells and rows for RadGrid in Batch Edit Mode with RadContextMenu.

## Data Binding:

* [Integration with SignalR]({%slug grid-integration-with-signalr%})- The sample illustrates how RadGrid can be integrated with SignalR so that the data on multiple clients is updated automatically
* [Client-side Databinding with WebAPI]({%slug grid-client-side-databinding-with-webapi%}) - Demonstrates integration of RadGrid and RadClientDataSource with Web API. It shows basic databinding and batch editing sending and receiving information through Web API

## Exporting:

* [Export RadGrid with hierarchy and grouping to Excel and Word]({%slug grid-export-hierarchical-grid-with-grouping%})- This article demonstrates how to use the Export Infrastructure to export hierarchical RadGrid with grouping.
* [Export multiple RadGrids in single PDF/Excel file]({%slug grid-export-multiple-grids-in-single-pdf-excel-file%})- This project illustrates how to export multiple RadGrid controls into single Excel/PDF file by using another RadGrid to wrap the contents.

## Selection:

* [Get selected items through all pages]({%slug grid-get-selected-items-through-all-pages%}) - Demonstrates how to persist selected rows through rebind operations such as paging, sorting, filtering, grouping, etc. using the approach provided here. In addition to that, it gives a clear example how to pass the selected items' ID collection to the server using a HiddenField.
* [Single RadioButton check at a time with row selection]({%slug grid-single-radiobutton-check-at-a-time-with-row-selection%}) - Represents a symbiosis of radio check and row selection by means of a radio button residing in item template of RadGrid template column
