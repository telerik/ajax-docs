---
title: RadGrid Structure Overview
page_title: RadGrid Structure Overview | UI for ASP.NET AJAX Documentation
description: RadGrid Structure Overview
slug: grid/getting-started/radgrid-structure-overview
tags: radgrid,structure,overview
published: True
position: 5
---

# RadGrid Structure Overview



## GridDataItem

The rows of the grid are called __Items__.![Item](images/grd_Item.png)

Each item is a __GridDataItem__ object. They can be accessed using the __Items__ property collection of the __RadGrid__ or __GridTableView__ object.

If the grid uses a separate appearance for odd- and even-numbered rows, the even-numbered rows are called __AlternatingItems__. The value of the __GridDataItem.ItemType__ property of __Items__ is "Item" and for __AlternatingItems__ it is "AlternatingItem".

If there are no records to display in the grid, it displays a __GridDataItem__ of type "NoRecordsItem":![](images/grd_NoRecordsItem.png)

## GridHeaderItem

The header appears above the rows, and is represented by the __GridHeaderItem__ object:![HeaderItem](images/grd_headerItem.png)

You can hide or show the header element using the grid's __ShowHeader__ property. For more information about headers, see [Using columns]({%slug grid/columns/using-columns%}).

## GridFooterItem

The footer appears below the rows, and is represented by the __GridFooterItem__ object:![](images/grd_Footer.png)

You can hide or show the footer using the grid's __ShowFooter__ property. For more information about footers, see [Using columns]({%slug grid/columns/using-columns%}).

## GridFilteringItem

The grid filtering item appears when you have [Filtering ]({%slug grid/functionality/filtering/overview%}) enabled either by __RadGrid.AllowFilteringByColumn__ or __GridTableView.AllowFilteringByColumn__ properties:![GridFilteringItem](images/grd_FilteringItem.png)

## GridEditFormItem

The edit form item nests the edit form that shows controls for item editing:![Edit Form Item](images/grd_customEditors_markedup.png)

For information about edit forms, see [Edit forms]({%slug grid/data-editing/edit-mode/edit-forms%}).

## GridPagerItem

If paging is enabled, __RadGrid__ renders a pager item (__GridPagerItem__) on the top and/or bottom of of the grid table view:![Pager](images/grd_Pager.png)

For information about __GridPagerItem__, see [Pager item]({%slug grid/functionality/paging/pager-item%}).

## GridCommandItem

You can add a command item (__GridCommandItem__) to the grid for displaying function buttons.![](images/grd_CommandItemTemplate_markedup2.png)

The __GridCommandItem__ object can appear at the top, bottom or top and bottom of the grid. You can specify the content of the command item using a template. __GridCommandItem__ is commonly used for automatic database operations, but it can be used for executing any __RadGrid__ commands. For more information, see [Command Item]({%slug grid/data-editing/commanditem/overview%}).

## GridRowIndicatorColumn

When row resizing is enabled, __RadGrid__ automatically generates a column of type __GridRowIndicatorColumn__.![Row Resize and GridRowIndicatorColumn](images/grd_RowIndicatorColumn.png)

For information about resizable rows, see [Resizing rows]({%slug grid/rows/resizing-rows%}).

## GridBoundColumn

If the grid auto-generates its columns (the __AutoGenerateColumns__ property is __True__), the grid generates __GridBoundColumn__ objects for each column that displays data:![BoundColumn](images/grd_BoundColumn.png)

You can also explicitly add columns to the grid of other types. For details, see [Column types]({%slug grid/columns/column-types%}).

## GridExpandColumn

The __GridExpandColumn__ is an automatically generated and automatically placed column that appears when the grid has a hierarchical structure:![ExpandColumn](images/grd_ExpandColumn.png)

The expand column holds the expand and collapse buttons that show or hide detail tables. It is always placed in front of all other grid content columns and cannot be moved.

>note You can manually add additional instances of this type of column.
>


## MasterTableView

The __MasterTableView__ is the __GridTableView__ object for the topmost table in the hierarchical structure:![MasterTableView](images/grd_MasterTableView.png)

The __MasterTableView__ contains all inner tables (__DetailTables__), which are available on demand (see [Hierarchy Load]({%slug grid/hierarchical-grid-types-and-load-modes/hierarchy-load-modes%})). When there is no hierarchical structure, the __MasterTableView__ coincides with __RadGrid__ itself.

For more information about the relationship between the __MasterTableView__ and the grid, see [RadGrid and MasterTableView difference]({%slug grid/defining-structure/radgrid-and-mastertableview-difference%}).

## DetailTableView

The __DetailTableView__ is the __GridTableView__ object for an inner table of a hierarchical structure:![DetailTableView](images/grd_DetailTableView.png)

Detail table views can be nested inside a __MasterTableView__, or inside another Detail table view (when the hierarchy includes multiple levels).

## NestedViewItem

Nested view items are __Items__ of a parent table that contain a nested __DetailTableView__.![NestedViewItem](images/grd_NestedView.png)

Each nested view item contains only a single __GridTableView__. If a master table has more than one detail table, each detail table has its own nested view item.

## ScrollBars

Scroll bars appear when the [ scrolling is enabled]({%slug grid/functionality/scrolling/overview%}) and the grid cannot display all of its rows or the width of a __GridTableView__ exceeds the width of the item in which it is nested (or, in the case of the MasterTableView, the width of the grid).![Scrollbars](images/grd_Scrollbars.png)

By default, scrolling is not enabled.

## Grouping elements

When you set the grid's __GroupingEnabled__ property to __True__, a number of grouping elements are automatically generated and added to the grid:![GroupSplitterColumn](images/grdGroupingElements.png)

The __GridGroupSplitterColumn__ appears on the far left of each __GridTableView__, and enables users to expand and collapse groups of records. The group splitter column is always placed first and cannot be moved. For more information about the __GridGroupSplitterColumn__, see [Column types]({%slug grid/columns/column-types%}).

Each group of records in a __GridTableView__ is preceded by a __GroupHeaderItem__, which indicates the grouping field.

The __GridGroupPanel__ is added to the top of the grid. This panel acts as a repository for panel items, which represent the columns on all table views in the grid that are used for grouping. You can optionally hide the __GridGroupPanel__ using the grid's __ShowGroupPanel__ property. You can access the panel using the grid's GroupPanel property.

For more information on grouping, see [Basic grouping]({%slug grid/functionality/grouping/overview%}).

## Panel Items

Each Panel item represents a column in one of the table views that the grid displays. Users can click on the panel items to change the sort direction of the corresponding group, drag items off the Grid group panel to remove grouping on that field, and drag header cells to the group panel to add new panel items (and corresponding groups).![PanelItems](images/grd_panelitems.png)
