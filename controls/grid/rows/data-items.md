---
title: Data Items
page_title: Data Items | UI for ASP.NET AJAX Documentation
description: Data Items
slug: grid/rows/data-items
tags: data,items
published: True
position: 0
---

# Data Items



Rows in __RadGrid__ are presented by the __GridItem__ class and its descendants. There are two types of rows:

* Static rows

* Dynamic rows

## Static Rows

Static rows are always present in the grid structure regardless of whether they are visible or not. The number of these items is always known. To this group belong [Header and Footer rows]({%slug grid/columns/using-columns%}), [CommandItem]({%slug grid/data-editing/commanditem/overview%}), Status bar item and [Pager row]({%slug grid/functionality/paging/pager-item%}).

## Dynamic Rows

Each dynamic row in the grid represents a record from the specified [data source]({%slug grid/data-binding/understanding-data-binding/telerik-radgrid-data-binding-basics%}). Dynamic rows are represented by the __GridDataItem__ class (a descendent of __GridItem__).

Each __GridTableView__ has a set of rows (the __Items__ collection) of type __GridDataItem.__ The collection does not provide any methods to add or remove items. However, you can control the content of an item by providing a handler for the __ItemCreated__ event.

>note Note that:
>
* Only Items bound to the data source (such as normal and alternating rows) are kept in the __Items__ collection. The header, footer, pager, filter and separator are not included in this collection.
* The __ItemsHierarchy__ collection contains all Items of the owner's __GridTableView__ and all Items of the child views nested in that table view.
* The __Items__ property of __RadGrid__ is a reference to the __ItemsHierarchy__ property of its __MasterTableView__ .>


The number of dynamic rows depends on the number of rows (records) in the Data Source and the number of groups (if [grouping]({%slug grid/functionality/grouping/overview%}) is enabled). Dynamic rows consist of __data items__, __nested-view items__, __group-header items__ and __edit-form items__. (for examples of these different row types, see [Overview of Telerik RadGrid structure]({%slug grid/getting-started/radgrid-structure-overview%}))

Data items can come in two types:

* __Normal Rows__ - these are the odd rows of the grid (see rows 1 and 3 below). The appearance of the normal rows is controlled by the __ItemStyle__ property.

* __Alternating Rows__ - these are the even rows of the grid (see rows 2 and 4 below). The appearance of the alternating rows is controlled by the __AlternatingItemStyle__ property.

![Normal and Alternating rows](images/grd_normal_alternating_styles.png)

Both __ItemStyle__ and __AlternatingItemStyle__ are of type __GridTableItemStyle__. Additionally, for skins which have different styling for normal/alternating rows, you can disable the zebra effect by setting the__ClientSettings -> EnableAlternatingItems__ property of the grid to false.

# See Also

 * [Accessing Cells and Rows]({%slug grid/rows/accessing-cells-and-rows%})

 * [Simple Data-binding]({%slug grid/data-binding/understanding-data-binding/server-side-binding/simple-data-binding%})

 * [Advanced Data-binding (Using NeedDataSource Event)]({%slug grid/data-binding/understanding-data-binding/server-side-binding/advanced-data-binding-(using-needdatasource-event)%})

 * [Customizing Row Appearance]({%slug grid/appearance-and-styling/customizing-row-appearance%})
