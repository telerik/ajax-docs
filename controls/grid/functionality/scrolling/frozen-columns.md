---
title: Frozen Columns
page_title: Frozen Columns | RadGrid for ASP.NET AJAX Documentation
description: Frozen Columns
slug: grid/functionality/scrolling/frozen-columns
tags: frozen,columns
published: True
position: 3
---

# Frozen Columns


When scrolling is enabled and you are using [static headers]({%slug grid/functionality/scrolling/scroll-with-static-headers%}), you can make **RadGrid** columns static as well. This can be useful when you want to ensure that the data in one or more columns is visible at all times but still allow a horizontal scroll bar for navigation.

>note Static columns are not enabled unless the grid is using static headers.
>


To enable static columns, set the **ClientSettings.Scrolling.FrozenColumnsCount** property to a value greater than 0. The value of FrozenColumnsCount specifies the number of columns (starting with the leftmost column) that do not scroll when the of the user scrolls the grid horizontally, using the horizontal scroll bar. This feature is functional even when in hierarchical grids and grids that support grouping.

>note  **RadGrid** has only a single horizontal scroll bar. When using frozen columns in a hierarchical grid, only the columns of the master table are frozen.
>


The following two screen shots show a grid with **FrozenColumnsCount** set to 2. Note that the first two columns do not scroll when the horizontal scroll bar is dragged:
![Frozen columns](images/grdFrozenColumns.PNG)

For a live example demonstrating the frozen columns feature, see [Frozen columns](http://demos.telerik.com/aspnet-ajax/Grid/Examples/GeneralFeatures/FrozenColumns/DefaultCS.aspx).

>note When using a **Mobile** render mode you can navigate through the forzen columns only by using **Next** and **Prev** buttons.
>

## Next and Prev Buttons

As an alternative to the horizontal scroll, **RadGrid** also provides **Next** and **Prev** buttons for the user to navigate through the columns with single clicks or tapping.
![Frozen columns 1](images/grid_frozenColumns_1.PNG)

To enable the button mode, you need to set the **EnableNextPrevFrozenColumns** property to true. The buttons are contained in the **GridCommandItem**, which needs to be enabled explicitly in the corresponding GridTableView settings. 
````ASP.NET
<ClientSettings>
    <Scrolling AllowScroll="true" UseStaticHeaders="true"
        FrozenColumnsCount="1" EnableNextPrevFrozenColumns="true" />
</ClientSettings>
<MasterTableView CommandItemDisplay="Top">
````

## Frozen columns with Grouping

When grouping is enabled in grid with frozen columns the first **GridGroupSplitterColumn** is counted as frozen. With Q3 2015 release a new **ClientSettings.Scrolling.CountGroupSplitterColumnAsFrozen** property is added which gives you the opportunity to count the GridGroupSplitterColumn or not. The default value of the property is **true**, which means the old behavior is preserved. If you want to exclude GridGroupSplitterColumn from FrozenColumns count you need to set this property to **false** as shown below:

````ASP.NET
<Scrolling CountGroupSplitterColumnAsFrozen="false" AllowScroll="true" UseStaticHeaders="true" FrozenColumnsCount="2"/>
````

## Unsupported Scenarios

* When frozen columns are used, tabbing between the textboxes in an inline edit form is not supported out-of-the-box, because the frozen columns will be scrolled together with the non-frozen. In selected scenarios, this functionality can be achieved if you subscribe to the textboxes' focus events and scroll a specific `<div>` with Javascript. This `<div>` has a client ID of `<RadGridInstance.ClientID>_Frozen`. When doing this, you should take into account the current scroll position, and the width of the column that should be hidden/shown.
* Frozen columns are not supported on mobile (touch) devices.
