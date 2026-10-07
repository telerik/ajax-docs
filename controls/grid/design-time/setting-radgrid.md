---
title: Setting RadGrid
page_title: Setting RadGrid - RadGrid
description: Learn how to configure RadGrid data sources, columns, automatic operations, sorting, filtering, headers, and footers in the Visual Studio editor.
slug: grid/design-time/setting-radgrid
components: ["grid"]
tags: setting,radgrid
published: True
position: 2
---

# Setting RadGrid



When you first start the editor, you will see a RadGrid and one MasterTableView. The Telerik RadGrid Properties has two main panes:

* A pane with Grid master and hierarchy objects - in this pane you can add/remove detail tables.

* A pane with properties for the selected object.

The screenshot below shows the initial state of the Telerik RadGrid editor's General Settings page.

![Setting RadGrid - General](images/grid_setting_radgrid.png)

## Data options

>note This page provides options that if set, will be available for all grid tables. If you set [Show header] option, all tables in your grid will have headers.
>



|  **Property**  |  **Description**  |
| ------ | ------ |
| **DataSource** |Sets the **DataSource** property, specifying the data-source object that will be used for building the grid. If you have set a dataSet, it will appear in the drop down list.|
| **Generate Columns automatically at runtime** |All columns, available in the specified dataSet will be generated as GridBoundColumns at runtime. This option sets the **AutoGenerateColumns** property to **true** .|

## Automatic data source operations

Use the check boxes to perform the required operations (insert, update, or delete). Configure the data source so that it supports the automatic operations.

## Sorting

Check the box to enable data sorting. When this option is enabled, the header cell for each column becomes a link that sorts the data.

## Filtering

Check the box to enable data filtering.

## Header and Footer

Use the check boxes to enable the header or footer cells.

## See Also

- [Using the RadGrid Smart Tag]({%slug grid/design-time/smarttag%})
- [Adding columns from design time]({%slug grid/design-time/adding-columns-from-design-time%})
