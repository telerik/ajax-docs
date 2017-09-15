---
title: Virtualization
page_title: Virtualization | RadGrid for ASP.NET AJAX Documentation
description: Virtualization
slug: grid/functionality/scrolling/virtualization
tags: virtualization
published: True
position: 6
---

# Virtualization



RadGrid's virtualization functionality enables users to scroll through large data sets without sacrificing the performance. On first look the scrollable container looks like it contains all the required data but in reality itcontains a constant number of items which are changed when scrolling is performed. The number of items in this case is determined by the **ItemsPerView**. This benefits scenarios when many items should be displayed on one page as RadGrid's virtualization integrates a lot of optimization techniques. It is easily configurable and well integrated with existing RadGrid functionalities.

## Settings

To enable the virtualization, set the **ClientSettings.Virtualization.EnableVirtualization** property to **true**.Below listed are the additional properties for configuring the functionality which can be found under **ClientSettings.Virtualization**.


|  **Property**  |  **Description**  |
| ------ | ------ |
| **EnableVirtualization** |Gets or sets a value determining if the **Virtualization** will be turned on.|
| **EnableCurrentPageScrollOnly** |Gets or sets a value indicating if the scrolling will be done for the whole data source or only for the current page.|
| **MaxCacheSize** |Gets or sets a value determining the maximum number of items that will be cached on the client. The default value is int.MaxValue.|
| **InitiallyCachedItemsCount** |Gets or sets the number of records that will be initially send from the server and cached on the client.	Note this property works only for server-side binding. When using client-side binding the initially cached items count equals the **GridVirtualization.RetrievedItemsPerRequest** value. Default value is 5000.|
| **ItemsPerView** |Gets or sets a value determining how many items will be bound to the **RadGrid** at any given moment.Note that we do not recommend setting the it to a value smaller than 50 or greater than 200 becausethere could be performance problems.Default value is 100.|
| **LoadingPanelID** |Gets or sets the ID of the **RadAjaxLoadingPanel** that you want to show when waiting for data to be loaded in the grid. By default the **RadGrid** will not show any loading panel during requests.|
| **RetrievedItemsPerRequest** |Gets or sets the value that determines how many items will be retrieved every time a request is made|

## Virtualization benefits

In the list below you can find the performance benefits from enabling the functionality.

* Fast data retrieval
* Smooth scrolling which leads to better end-user experience
* Support for client-side paging of server data
* Optmized performance for column **show**/**hide**/**resize**

## Limitations

Basically the virtualization functionality greatly improves the performance of the control. However there are some limitations which are listed below:

* Using **GridTemplateColumns**, **DetailItemTemplate** or **NestedViewTemplate** is not possible in such scenarios as binding can not be properly performed.
* Grouping.
* Row/Cell Selection.
* Setting the **EditMode** to **Batch** or **InPlace**.
* Setting the **Height** of the grid or **Scrolling.ScrollHeight** in **percentage** values because the grid needs to be able to calculate the exact row heights and scroll offsets that will trigger data loading.
* The **ClientSettings.Scrolling.SaveScrollPosition** feature does not work with virtualization because it works after postbacks and at this point the grid virtualization may not have loaded the same number of items.
* Scrolling with the keyboard may be impossible unless **ClientSettings.AllowKeyboardNavigation** is enabled.

## See Also

* [How to use Virtualization with Custom Paging to Improve Server Performance](http://www.telerik.com/support/kb/aspnet-ajax/grid/details/virtualization-and-custom-paging)
