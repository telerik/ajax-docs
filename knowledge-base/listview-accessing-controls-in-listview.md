---
title: Accessing Controls in RadListView
description: Accessing Controls in RadListView. Check it now!
type: how-to
page_title: Accessing Controls in RadListView
slug: listview-accessing-controls-in-listview
res_type: kb
---


## Description

There are various scenarios where it is required to access the Template controls of RadListView. On server-side you can use the [ItemDataBound/ItemCreated]({%slug listview/control-lifecycle/differences-between-itemcreated--and-itemdatabound-events%}) event handlers by utilizing the FindControl method to access the generated controls, whereas on client-side you can make avail of the [$telerik.findControl or $telerik.findElement](https://www.telerik.com/support/kb/aspnet-ajax/details/access-telerik-controls-on-client-side) methods.

## Solution

RadListView and RadDataForm are very similar controls. While the DataForm is a control suitable for visualizing one record at a time, the ListView can display and access multiple items simultaneously.  

Just instead of *RadDataFormDataItem* type, you can use the corresponding *RadListViewDataItem* class.  


