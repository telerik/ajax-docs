---
title: Functional Items
page_title: Functional Items - RadGrid
description: Learn how RadGrid pager, command, and status bar items provide built-in functionality in ASP.NET AJAX.
slug: grid/rows/functional-items
tags: functional,items
published: True
position: 1
---

# Functional Items

Functional items are static rows in the grid that provide built-in functionality, such as paging, commands, or status information.

## Pager Item

The [Pager]({%slug grid/functionality/paging/pager-item%}) is a row that contains the paging navigation controls. To have the grid divide its data into pages, set the grid's **AllowPaging** property to **True**.

You can define the style of the pager row using the [RadGrid property builder]({%slug grid/design-time/overview%}) or the **PagerStyle** section of the **RadGrid** property pane.

![RadGrid pager row with page navigation controls](images/grd_Pager.png)

## CommandItem

The **CommandItem** is a placeholder for commands that perform actions on selected items or all items in the grid. See the [Command reference]({%slug grid/control-lifecycle/command-reference-%}) topic for details about the commands you can add to the **CommandItem**.

![RadGrid command item template with toolbar commands](images/grd_CommandItemTemplate_markedup2.png)

## StatusBarItem

The **GridStatusBarItem** appears below all other items in the grid and displays information about the current grid status. It is intended primarily for use when **RadGrid** is used with **RadAjaxManager** to indicate that the grid is performing asynchronous AJAX requests. To show the status bar item, set the grid’s **ShowStatusBar** property to `true`.

![RadGrid status bar item displaying a loading indicator](images/grd_GridStatusBarItem.png)

>note You should have a data source assigned in order to use **RadGrid** with a status bar.
>


## See Also

 * [Pager Item]({%slug grid/functionality/paging/pager-item%})

 * [Overview]({%slug grid/data-editing/commanditem/overview%})

 * [Data Items]({%slug grid/rows/data-items%})
