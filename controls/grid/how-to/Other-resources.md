---
title: Other Resources
page_title: Other Resources | RadGrid for ASP.NET AJAX Documentation
description: Other Resources
slug: grid/how-to/Other-resources
tags: codelibrary, howto
published: True
position: 1
---

# Helpful RadGrid Resources

This page contains links to examples that you may find useful when implementing various scenarios with the grid. Even if you do not see the exact requirement you have, similar setups may give you ideas and show you ways to access various controls and properties that will let you achieve your goal.

## Appearance

* [100% Height for RadGrid](https://www.telerik.com/support/code-library/setting-radgrid's-height-in-percents) - this code library page explains how to set the grid height in percent values. The key requirement is that all of its parent html elements also have height set in percents, up to a parent with a fixed height (including the html, body, form elements and all Update panels. See also the [Scrolling]({%slug grid/functionality/scrolling/overview%}), [Height vs ScrollHeight]({%slug grid/functionality/scrolling/height-vs.-scrollheight%}) and [Scroll With Static Headers]({%slug grid/functionality/scrolling/scroll-with-static-headers%}) articles.

## DataEditing:

* [Batch Editing Extensions - Related RadComboBoxes and Batch Validation](https://www.telerik.com/support/code-library/batch-editing-extensions---related-radcomboboxes-and-validation)-
This Code Library provides an extension for the RadGrid Batch Editing functionality, which allows you to implement related RadComboBoxes functionality between column and to set Batch Validation.
* [Performing updates/inserts containing HTML for a Batch Editing grid](https://www.telerik.com/support/code-library/performing-updates-inserts-containing-html-for-a-batch-editing-grid)-
The Code Library illustrates how one can use HTML to edit a certain field data in a batch editing grid.
* [Manual Insert/Update/Delete operations using Auto-generated editform with sql statements from the code-behind] (https://www.telerik.com/support/code-library/manual-insert-update-delete-operations-using-auto-generated-editform-with-sql-statements-from-the-code-behind)- Demonstrates manual Insert/Update/Delete operations using Auto-generated editform with sql statements from the code-behind
* [Prevent Losing Batch Editing Changes on Paging or any other PostBack](https://www.telerik.com/support/code-library/prevent-losing-batch-editing-changes-on-paging-or-any-other-postback)- This code-library demonstrates how to prevent the action if there are any unsaved Batch changes.
* [Copy-Paste Cell/Row data through RadContextMenu with Batch Editing](https://www.telerik.com/support/code-library/copy-paste-cell-row-data-through-radcontextmenu-with-batch-editing)-This code library demonstrates how to implement Copy-Paste functionality for cells and rows for RadGrid in Batch Edit Mode with RadContextMenu.
* [Manual CRUD Operations with LinqDataSource](https://www.telerik.com/support/code-library/manual-crud-operations-with-linqdatasource)- The current code library demonstrates RadGrid's capability for inserting new data, updating existing data and deleting data handled using RadGrid public API and Linq to SQL data context.
* [Automatic operations with ObjectDataSource control](https://www.telerik.com/support/code-library/automatic-operations-with-objectdatasource-control)- This demo represents how to perform automatic operations (update/insert/delete) with ObjectDataSource control
* [Multi-column edit form](https://www.telerik.com/support/code-library/multi-column-edit-form)- In this code library the edit form spans across three columns.
* [Combining different edit modes](https://www.telerik.com/support/code-library/combining-different-edit-modes)- This project demonstrates how to combine different edit modes in RadGrid.The main idea behind this approach is to fire custom commands for different edit modes in such manner, so they could be parsed to GridEditMode type.
* [Select Last Inserted Row](https://www.telerik.com/support/code-library/select-last-inserted-row)- This project describes how to select the last inserted row in the RadGrid.


## DataBinding:

* [Integration with SignalR](https://www.telerik.com/support/code-library/integration-with-signalr)- The sample illustrates how RadGrid can be integrated with SignalR so that the data on multiple clients is updated automatically
* [RadGrid - Client-side Databinding with WebAPI](https://www.telerik.com/support/code-library/radgrid---client-side-databinding-with-webapi)- The attached project shows integration of RadGrid and RadClientDataSource with Web API. It shows basic databinding and batch editing sending and receiving information through Web API


## Filtering:

* [Multi-Selection RadComboBox for filtering grid](https://www.telerik.com/support/code-library/multi-selection-radcombobox-for-filtering-grid)- This project shows how you could use Multi-Selection RadComboBox (with checkboxes in ItemTemplate) in the FilterTemplate of RadGrid
* [Conditionally hide controls from Excel-Like filtering menu](https://www.telerik.com/support/code-library/conditionally-hide-controls-from-excel-like-filtering-menu)- This web site demonstrates how to modify the visibility of the elements inside the Excel-Like filtering menu both on server and client-side.
* [Add "Clear filter" icon to all your GridCheckBox columns](https://www.telerik.com/support/code-library/add-clear-filter-icon-to-all-your-gridcheckbox-columns)
* [Quick Search - filtering rows depending on entered text instantly when paging is disabled](https://www.telerik.com/support/code-library/quick-search---filtering-rows-depending-on-entered-text-instantly-when-paging-is-disabled)- When RadGrid contains only one single page, all of its data items are loaded and rendered on the web page. We can make avail of this and implement client-side search RadTextBox which will instantly filter the grid items over a condition without posting back to the server.
* [Single filter button for all columns in RadGrid](https://www.telerik.com/support/code-library/single-filter-button-for-all-columns-in-radgrid)- The project demonstrates how a single filter button can be implemented to filter all columns in RadGrid.
* [Filtering and sorting for GridButtonColumn](https://www.telerik.com/support/code-library/filtering-and-sorting-for-gridbuttoncolumn)- The example illustrates how to extend the built-in GridButtonColumn to support filtering and sorting.
* [How to make RadGrid Filtering Controls Resize Together with the Columns](https://www.telerik.com/support/code-library/how-to-make-radgrid-filtering-controls-resize-together-with-the-columns)- The following demo shows how to make the filtering controls (textboxes, RadNumericTextBoxes, RadDatePickers) resize in real time together with the RadGrid columns.


## Exporting:

* [Export RadGrid with HtmlCharts](https://www.telerik.com/support/code-library/export-radgrid-with-htmlcharts)- This code library demonstrates how to export RadGrid and HtmlChart controls to PDF document by using both the built-in export functionality of RadGrid and RadClientExportManager control.
* [Styling and formatting Word and Excel document](https://www.telerik.com/support/code-library/styling-and-formatting-word-and-excel-document)- Generally most of the applied styles and formats to RadGrid are properly exported without additional modification. Nevertheless, in some cases you might need to add a styles and/or formats only to the exporting document and this code library demonstrates exactly that. For this purpose you can use the InfrastructureExporting event handler when you are using a binary based export format.
* [Export RadGrid with hierarchy and grouping to Excel and Word](https://www.telerik.com/support/code-library/grid-with-hierachy-and-grouping-export-to-excel)- This code library demonstrates how to use the Export Infrastructure to export hierarchical RadGrid with grouping.
* [Persisting expanded groups when exporting to Excel (HTML)](https://www.telerik.com/support/code-library/persisting-expanded-groups-when-exporting-to-excel-htm)- Sometimes it may be useful to persist the expanded groups when exporting RadGrid data.
* [Multiple worksheets in ExcelML](https://www.telerik.com/support/code-library/multiple-worksheets-in-excelml)
* [Export multiple RadGrids in single PDF/Excel file](https://www.telerik.com/support/code-library/export-multiple-radgrids-in-single-pdf-excel-file)- This project illustrates how to export multiple RadGrid controls into single Excel/PDF file by using another RadGrid to wrap the contents.


## Grouping:

* [Custom Range Grouping](https://www.telerik.com/support/code-library/custom-range-grouping)- This project demonstrates how to create custom range grouping with RadGrid when using Advanced Data-Binding through NeedDataSource event.
* [Grouping + Conditional Formatting + Dynamic Control](https://www.telerik.com/support/code-library/grouping-conditional-formatting-dynamic-control)- Demonstrates how one can customize the rad-grid and can programmatically, add dynamic controls such as link button, show/hide columns & headers along with grouping.
* [ExpandCollapseGroupedGridOnDoubleClickingTheGroupHeader](https://www.telerik.com/support/code-library/expandcollapsegroupedgridondoubleclickingthegroupheader)- This project illustrates how to expand/collapse grouped items in RadGrid on double clicking the Group header.
* [Grouping single column at a time](https://www.telerik.com/support/code-library/grouping-single-column-at-a-time)


## Selection:

* [Get selected items through all pages](https://www.telerik.com/support/code-library/get-selected-items-through-all-pages)- This project demonstrates how to persist selected rows through rebind operations such as paging, sorting, filtering, grouping, etc. using the approach provided here. In addition to that, it gives a clear example how to pass the selected items' ID collection to the server using a HiddenField.
* [Single RadioButton check at a time with row selection](https://www.telerik.com/support/code-library/single-radiobutton-check-at-a-time-with-row-selection)- This project represents a symbiosis of radio check and row selection by means of a radio button residing in item template of RadGrid template column
* [Disable selection for some rows in GridClientSelectColumn conditionally](https://www.telerik.com/support/code-library/disable-selection-for-some-rows-in-gridclientselectcolumn-conditionally)- In some particular cases you may need to disallow selection for part of the rows in grid having GridClientSelectColumn.


## Scrolling:
* [RadGrid scrolling with predefined step](https://www.telerik.com/support/code-library/radgrid-scrolling-with-predefined-step)- This project shows how to move the horizontal and vertical scroll bars of the RadGrid with given by a developer step.


## Selection:

* [Get selected items through all pages](https://www.telerik.com/support/code-library/get-selected-items-through-all-pages)- This project demonstrates how to persist selected rows through rebind operations such as paging, sorting, filtering, grouping, etc. using the approach provided here. In addition to that, it gives a clear example how to pass the selected items' ID collection to the server using a HiddenField.
* [Single RadioButton check at a time with row selection](https://www.telerik.com/support/code-library/single-radiobutton-check-at-a-time-with-row-selection)- This project represents a symbiosis of radio check and row selection by means of a radio button residing in item template of RadGrid template column
* [Disable selection for some rows in GridClientSelectColumn conditionally](https://www.telerik.com/support/code-library/disable-selection-for-some-rows-in-gridclientselectcolumn-conditionally)- In some particular cases you may need to disallow selection for part of the rows in grid having GridClientSelectColumn.


## Hierarchy:

* [Autogenerated hierarchy](https://www.telerik.com/support/code-library/autogenerated-hierarchy)- This code library demonstrates RadGrid's capability to auto-generate a hierarchical representation of a mutli-table DataSet.
* [Accessing and validating controls client-side inside a hierarchical RadGrid](https://www.telerik.com/support/code-library/accessing-and-validating-controls-client-side-inside-a-hierarchical-radgrid)- This demo demonstrates how to access the parent and child grid's rows on client-side.
* [Select items in hierarchy, depending on selection in inner levels](https://www.telerik.com/support/code-library/select-items-in-hierarchy-depending-on-selection-in-inner-levels)- The following project demonstrates selecting items in a hierarchy, depending on selection in inner levels.


## Drag and Drop:

* [Cancel row drag and drop when ESC key is pressed](https://www.telerik.com/support/code-library/cancel-row-drag-and-drop-when-esc-key-is-pressed)- This project demonstrates how to handle the client side RowDragging event of RadGrid to modify the appearance of the dragged row. It also displays the current position of the dragged item and provides an approach to cancel item dragging upon pressing the ESC key.
* [Drag and drop between flat and hierarchical grid](https://www.telerik.com/support/code-library/drag-and-drop-between-flat-and-hierarchical-grid)- This project shows how to implement drag and drop between flat (source) and hierarchical (target) grids.
