---
title: Custom Paging
page_title: Custom Paging | UI for ASP.NET AJAX Documentation
description: Custom Paging
slug: grid/functionality/paging/custom-paging
tags: custom,paging
published: True
position: 3
---

# Custom Paging



## 

There are cases in which you may want to fetch only a fixed number of records and perform operations on this limited set of data. __RadGrid__ allows such data manipulation through its integrated custom paging mechanism.

To use the custom paging mechanism:

1. Set the grid or table view's __AllowPaging__ and __AllowCustomPaging__ properties to __True__.

1. Set the table view's __VirtualItemCount__ property to the total number of records that the grid can draw on. This allows the pager item to correctly represent the size of the pages you implement relative to the total number of records possible.

1. Bind your grid using [the NeedDataSource event]({%slug grid/data-binding/understanding-data-binding/server-side-binding/advanced-data-binding-(using-needdatasource-event)%}). In the __NeedDataSource__ event handler, implement code logic to extract the desired fixed number of records, based on the __PageSize__ and __CurrentPageIndex__ properties of the grid or table view.

>caution  __PageSizeChanged__ event fires twice when AllowPaging is true for the RadGrid. To workaround this behaviour you should disable paging for the grid and enable it for the MasterTableView only.
>


>note When custom paging is enabled, the grid's default paging mechanism is disabled.
>


When you enable custom paging, __RadGrid__ maintains the pager buttons, updating the pager item in response to user actions, and other presentation specifics. You need only provide the logic of fetching the desired set of records in the __NeedDataSource__ event handler.

>note Another option for custom paging is possible when using[declarative binding]({%slug grid/data-binding/understanding-data-binding/server-side-binding/declarative-datasource%})to an __ObjectDataSource__ that supports its own paging mechanism. This approach is described in[ Custom paging through ObjectDataSource population ]({%slug grid/functionality/paging/how-to/custom-paging-through-objectdatasource%}).
>


For a live example that demonstrates custom paging, see [Custom Paging](http://demos.telerik.com/aspnet-ajax/Grid/Examples/Programming/CustomPaging/DefaultCS.aspx).
