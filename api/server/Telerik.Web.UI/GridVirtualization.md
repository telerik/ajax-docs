---
title: Telerik.Web.UI.GridVirtualization
page_title: Telerik.Web.UI.GridVirtualization
description: Telerik.Web.UI.GridVirtualization
---

# Telerik.Web.UI.GridVirtualization

A class containing properties associated with the Telerik.Web.UI.RadGrid Virtualization functionality.

## Inheritance Hierarchy

* System.Object
* Telerik.Web.UI.ObjectWithState
* Telerik.Web.UI.GridVirtualization

## Properties

###  EnableVirtualization `Boolean`

Gets or sets a value determining if the  Virtualization will be turned on.
            The default value is false.

###  EnableCurrentPageScrollOnly `Boolean`

Gets or sets a value indicating if the scrolling will be done for the whole data source or only for the current page.
            The default value is false.

###  InitiallyCachedItemsCount `Int32`

Gets or sets the number of records that will be initially send from the server and cached on the client.
            Note this property works only for server-side binding. When using client-side binding the initially cached items count
            equals the  value.
            The default value is 5000.

###  RetrievedItemsPerRequest `Int32`

Gets or sets the value that determines how many items will be retrieved every time a request is made.
            Note that in some cases the number of retrieved items could vary a little from the specified value.
            The default value is 1000.

###  ItemsPerView `Int32`

Gets or sets a value determining how many items will be bound in the  at any given moment.
            Note that we do not recommend setting the value to something really small(under 50) or really big(over 200) because
            there could be performance problems.
            The default value is 100.

###  MaxCacheSize `Int32`

Gets or sets a value determining how many items at maximum should be cached on the client.
            The default value is int.MaxValue.

###  LoadingPanelID `String`

Gets or sets the ID of the  that you want to show when waiting for data to be loaded in the grid.
            By default the  will not show any loading panel during requests.

