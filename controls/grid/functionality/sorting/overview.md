---
title: Overview
page_title: Sorting Overview - RadGrid
description: Check our Web Forms article about Overview.
slug: grid/functionality/sorting/overview
tags: overview
published: True
position: 0
---

# Sorting Overview

This article describes the sorting functionality in **RadGrid** and provides a quick overview of the ways to customize the sorting.

To see the sorting in action, see the [Sorting Demo](https://demos.telerik.com/aspnet-ajax/grid/examples/functionality/sorting/basic-sorting/defaultcs.aspx).

You can configure **RadGrid** to automatically sort its columns by setting the **AllowSorting** property to **True**. When sorting is enabled, arrow buttons appear on the column headers and allow users to select a sorting mode for each column. There are three [sorting modes]({%slug grid/functionality/sorting/controlling-sort-modes%}):

* Ascending

* Descending

* No Sort

You can configure the grid to allow sorting by more than one **DataField** (called [multi-column sorting]({%slug grid/functionality/sorting/multi-column-sorting%})).

## Culture Dependency of the Sorting Algorithms

The sorting functionality in the grid is based on the .NET sorting algorithms and the default value comparator type. Since the string comparator depends on the application's current culture, you could modify the sorting and ordering of the data by changing the culture.

For more information, see the following MSDN help articles:

* [Comparing and Sorting Data for a Specific Culture](https://msdn.microsoft.com/en-us/library/a7zyyk0c.aspx)

* [CultureInfo.DefaultThreadCurrentUICulture Property](https://msdn.microsoft.com/en-us/library/system.globalization.cultureinfo.defaultthreadcurrentuiculture%28v=VS.110%29.aspx)

> Changing the culture affects other formatting in your page, like decimal separators, month names, etc.

## Sorting Expressions

The sorting is controlled by the [sorting expressions]({%slug grid/functionality/sorting/sort-expressions%}) of the **GridTableView** object:

* You can [specify the **SortExpressions** property collection declaratively]({%slug grid/functionality/sorting/sort-expressions%}#declarative-sort-expressions) to provide an initial sort order.

* You can [manipulate the sorting expressions at runtime]({%slug grid/functionality/sorting/sort-expressions%}#sorting-programmatically) to alter the sort order of the columns.

![Sorting expressions](images/grd_BasicSorting.png)

## Customizing the Sorting Arrows

An easy way to change the appearance of the RadGrid sort arrows is to use the **SortAscImageUrl** and **SortDescImageUrl** properties, which are set **per column**. For example:

````ASP.NET
<telerik:GridBoundColumn SortAscImageUrl="MySortAscImage.gif" SortDescImageUrl="MySortDescImage.gif" />
````



If you use auto-generated columns, you can also set the **SortAscImageUrl** and **SortDescImageUrl** properties programmatically, for example in **ColumnCreated**:



````C#
protected void RadGrid1_ColumnCreated(object sender, GridColumnCreatedEventArgs e)
{
    e.Column.SortAscImageUrl = "MySortAscImage.gif";
}
````
````VB
Protected Sub RadGrid1_ColumnCreated(ByVal sender As Object, ByVal e As GridColumnCreatedEventArgs)
    e.Column.SortAscImageUrl = "MySortAscImage.gif"
End Sub
````

## Setting the Background Color of Sorted Columns

To provide a visual hint about the sorted columns, you can specify a different background color for the sorted columns as follows:

* By setting **SortingSettings -> EnableSkinSortStyles** to **True** (default value), which automatically applies the sort color from the *corresponding embedded grid skins*.

* By setting the **SortingSettings.SortedBackColor** property of the **RadGrid** control.

* By setting the **SortedBackColor** property of a particular grid column (**GridColumn** object).

> Setting **SortedBackColor** of a particular column overrides the setting of the **SortingSettings.SortedBackColor** property of the entire grid.

![Sorted columns colorization](images/grd_SortedColumnColorized.png)

## See Also

 * [Multi-Column Sorting]({%slug grid/functionality/sorting/multi-column-sorting%})

 * [Sort Expressions]({%slug grid/functionality/sorting/sort-expressions%})

 * [Controlling Sort Modes]({%slug grid/functionality/sorting/controlling-sort-modes%})
