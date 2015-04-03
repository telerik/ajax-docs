---
title: Virtualization
page_title: Virtualization | UI for ASP.NET AJAX Documentation
description: Virtualization
slug: grid/functionality/scrolling/virtualization
tags: virtualization
published: True
position: 6
---

# Virtualization



RadGrid's virtualization functionality enables users to scroll through large data sets without sacrificing the performance. On first look the scrollable container looks like it contains all the required data but in reality itcontains a constant number of items which are changed when scrolling is performed. The number of items in this case is determined by the __ItemsPerView__. This benefits scenarios when many items should be displayed on one page as RadGrid's virtualization integrates a lot of optimization techniques. It is easily configurable and well integrated with existing RadGrid functionalities.

## Settings

To enable the virtualization, set the __ClientSettings.Virtualization.EnableVirtualization__ property to __true__.Below listed are the additional properties for configuring the functionality which can be found under __ClientSettings.Virtualization__.


|  __Property__  |  __Description__  |
| ------ | ------ |
| __EnableVirtualization__ |Gets or sets a value determining if the __Virtualization__ will be turned on.|
| __EnableCurrentPageScrollOnly__ |Gets or sets a value indicating if the scrolling will be done for the whole data source or only for the current page.|
| __MaxCacheSize__ |Gets or sets a value determining the maximum number of items that will be cached on the client. The default value is int.MaxValue.|
| __InitiallyCachedItemsCount__ |Gets or sets the number of records that will be initially send from the server and cached on the client.	Note this property works only for server-side binding. When using client-side binding the initially cached items count equals the __GridVirtualization.RetrievedItemsPerRequest__ value. Default value is 5000.|
| __ItemsPerView__ |Gets or sets a value determining how many items will be bound to the __RadGrid__ at any given moment.Note that we do not recommend setting the it to a value smaller than 50 or greater than 200 becausethere could be performance problems.Default value is 100.|
| __LoadingPanelID__ |Gets or sets the ID of the __RadAjaxLoadingPanel__ that you want to show when waiting for data to be loaded in the grid. By default the __RadGrid__ will not show any loading panel during requests.|
| __RetrievedItemsPerRequest__ |Gets or sets the value that determines how many items will be retrieved every time a request is made|

## Virtualization benefits

In the list below you can find the performance benefits from enabling the functionality.

* Fast data retrieval

* Smooth scrolling which leads to better end-user experience

* Support for client-side paging of server data

* Optmized performance for column __show__/__hide__/__resize__

## Limitations

Basically the virtualization functionality greatly improves the performance of the control. However there are some limitations which are listed below:

* Using __GridTemplateColumns__,__DetailItemTemplate__ or __NestedViewTemplate__ is not possible in such scenarios as binding can not be properly performed;

* Grouping;

* Row/Cell Selection;

* Setting the __EditMode__ to __Batch__ or __InPlace__.
