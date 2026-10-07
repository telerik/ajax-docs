---
title: Data Items
page_title: Data Items - RadGrid
description: Learn how to access and manipulate data items in Grid rows for advanced data customization.
slug: grid/rows/data-items
components: ["grid"]
tags: data,items
published: True
position: 0
---

# Data Items

Rows in **RadGrid** are represented by the **GridItem** class and its descendants. There are two types of rows:

* Static rows

* Dynamic rows

## Static Rows

Static rows are always present in the grid structure, regardless of whether they are visible. Their number is known in advance. This group includes [header and footer rows]({%slug grid/columns/using-columns%}), the [CommandItem]({%slug grid/data-editing/commanditem/overview%}), the status bar item, and the [pager row]({%slug grid/functionality/paging/pager-item%}).

## Dynamic Rows

Each dynamic row in the grid represents a record from the specified [data source]({%slug grid/data-binding/overview%}). Dynamic rows are represented by the **GridDataItem** class, which derives from **GridItem**.

Each **GridTableView** has a set of rows in its **Items** collection. These rows are **GridDataItem** instances. The collection does not provide methods to add or remove items, but you can control an item’s content by handling the **ItemCreated** event.

>note
* Only Items bound to the data source (such as normal and alternating rows) are kept in the **Items** collection. The header, footer, pager, filter and separator are not included in this collection.
* The **ItemsHierarchy** collection contains all Items of the owner's **GridTableView** and all Items of the child views nested in that table view.
* The **Items** property of **RadGrid** is a reference to the **ItemsHierarchy** property of its **MasterTableView** .>


The number of dynamic rows depends on the number of records in the data source and the number of groups, if [grouping]({%slug grid/functionality/grouping/overview%}) is enabled. Dynamic rows consist of **data items**, **nested-view items**, **group-header items**, and **edit-form items**. For examples of these row types, see [Overview of Telerik RadGrid structure]({%slug grid/structure/radgrid-structure-overview%}).

Data items can come in two types:

* **Normal Rows** - these are the odd rows of the grid (see rows 1 and 3 below). The appearance of the normal rows is controlled by the **ItemStyle** property.

* **Alternating Rows** - these are the even rows of the grid (see rows 2 and 4 below). The appearance of the alternating rows is controlled by the **AlternatingItemStyle** property.

![RadGrid normal and alternating rows with different background styles](images/grd_normal_alternating_styles.png)

Both **ItemStyle** and **AlternatingItemStyle** are of type **GridTableItemStyle**. For skins with different normal and alternating row styles, you can disable the zebra effect by setting **ClientSettings > EnableAlternatingItems** to `false`.

## See Also

 * [Accessing Cells and Rows]({%slug grid/accessing-values-and-controls/overview%})

 * [Simple Databinding]({%slug grid/data-binding/server-side-binding/simple-data-binding%})

 * [Programmatic Databinding Using NeedDataSource Event]({%slug grid/data-binding/server-side-binding/programmatic-databinding-using-needdatasource-event%})

 * [Customizing Row Appearance]({%slug grid/appearance-and-styling/customizing-row-appearance%})

 * [RadGrid structure overview]({%slug grid/structure/radgrid-structure-overview%})
