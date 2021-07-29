---
title: Virtualization and Custom Paging
description: Virtualization and Custom Paging. Check it now!
type: how-to
page_title: Virtualization and Custom Paging
slug: virtualization-and-custom-paging
res_type: kb
---


## DESCRIPTION

OutOfMemory Exception when providing data to a RadGrid with [Virtualization](http://demos.telerik.com/aspnet-ajax/grid/examples/performance/virtualization/defaultcs.aspx).

Virtualization is, first and foremost, a feature that improves the user experience. It can, however, tax the server in its default implementation where all the data is provided to the grid in the NeedDataSource event and the grid determines which items to return to the client when scrolling reaches the point when new data is needed.

## SOLUTION

You can employ custom paging and provide only the relevant data to the grid in the NeedDataSource event. This will depend on the page size and the items configured for loading at any given time. You can find a sample attached below. Note that this applies only to paging, sorting and grouping

- [DOWNLOAD Sample](files/grid-virtualizationwithcustompaging.zip) 

Alternatively, just use [custom paging](http://demos.telerik.com/aspnet-ajax/grid/examples/functionality/paging/custom-paging/defaultcs.aspx) without virtualization.

 