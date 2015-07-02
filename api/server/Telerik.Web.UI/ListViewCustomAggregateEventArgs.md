---
title: Telerik.Web.UI.ListViewCustomAggregateEventArgs
page_title: Telerik.Web.UI.ListViewCustomAggregateEventArgs
description: Telerik.Web.UI.ListViewCustomAggregateEventArgs
---

# Telerik.Web.UI.ListViewCustomAggregateEventArgs

The event arguments passed when Telerik.Web.UI.RadListView fires CustomAggregate event.
            The event is fired when a P:Telerik.Web.UI.ListViewDataGroupAggregate.Aggregate property is set to
            F:Telerik.Web.UI.ListViewAggregateFunction.Custom .

## Inheritance Hierarchy

* System.Object
* System.EventArgs
* Telerik.Web.UI.ListViewCustomAggregateEventArgs

## Properties

###  DataGroup `ListViewDataGroup`

Gets the  in which the aggregate will be placed.

###  DataItems `IEnumerable`

Gets an  of the data items for which the aggregate should be calcuated

###  DataField `IEnumerable`

Gets the data field for which the aggregate should be calculated.

###  Result `Object`

Gets or sets the calcuated result for the current aggregate field.

