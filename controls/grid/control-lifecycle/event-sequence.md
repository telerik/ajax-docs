---
title: Event sequence
page_title: Event sequence - RadGrid
description: Check our Web Forms article about Event sequence.
slug: grid/control-lifecycle/event-sequence
tags: event,sequence
published: True
position: 1
---

# Event sequence
 

The API and event sequence and lifecycle of **RadGrid** are quite similar to **MS DataGrid/GridView**. The sequence of the events is as follows.

## RadGrid with EnableViewState set to true (default value)

### First page load

1. Page.Load	
1. Grid_Instance.NeedDataSource	
1. ItemCreated for each item
1. ItemDataBound for each item
1. Page.PreRender	

### Normal postback from a control outside of RadGrid

1. ItemCreated for each item
1. Page.Load	
1. Postback Events	
1. Page.PreRender

### On server selection from Select/Deselect GridButtonColumn/Auto Postback on row click

1. ItemCreated for each item
1. Page.Load	
1. ItemCommand	
1. SelectedIndexChanged	
1. Other postback events	
1. Page.PreRender


### On edit/update/insert/delete action or paging/sorting/grouping/filtering operation

1. ItemCreated for each item
1. Page.Load	
1. Grid_Instance.ItemCommand	
1. Grid_Instance.EditCommand/UpdateCommand/InsertCommand or GridInstance.PageIndexChanged/SortCommand/GroupsChanging/ItemCommand
1. Grid_Instance.NeedDataSource	
1. ItemCreated for each item
1. ItemDataBound for each item
1. Page.PreRender


### Calling Rebind()

Invoking the `Rebind()` method from a postback event handler of an outside control or RadGrid will raise the `NeedDataSource` event. Then grid items will be recreated so the `ItemCreated` and `ItemDataBound` events will be raised according to the cases above.

### With hierarchy

1. Page_Load
1. NeedDataSource
1. DetailTableDataBind

After the `NeedDataSource` event, the `DetailTableDataBind` is raised for each detail item that will be bound. You can use the `e.IsFromDetailTable` flag in `NeedDataSource` to check where the call originates from, so you can fetch data only when necessary.

Which items are bound depends on the `HierarchyLoadMode` property. For example, if it is set to `Client`, all detail items will be bound initially on the server so they can be expanded on the client.

If you set the `RetainExpandStateOnRebind` property to `true` and the `HierarchyLoadMode` to `Client`, the `NeedDataSource` and `DetailTableDataBind` events will be raised first for the items that need to be expanded.  These events will come before `Page_Load`, whether you rebind the grid or not because the items need to be created so their `Expanded` property can be set to `true`.

1. NeedDataSource for expanded items
1. DetailTableDataBind for expanded items
1. Page_Load
1. NeedDataSource
1. DetailTableDataBind




## RadGrid with EnableViewState set to false

### First page load

1. Page.Load
1. Grid_Instance.NeedDataSource
1. ItemCreated for each Item
1. ItemDataBound for each Item
1. Page.PreRender


### Normal postback from a control outside of RadGrid

1. Page.Load
1. Grid_Instance.NeedDataSource
1. ItemCreated for each Item
1. ItemDataBound for each Item
1. Postback Events
1. Page.PreRender

### On server selection from Select/Deselect GridButtonColumn/Auto Postback on row click

1. Page.Load
1. Grid_Instance.NeedDataSource
1. ItemCreated for each Item
1. ItemDataBound for each Item
1. ItemCommand
1. SelectedIndexChanged
1. Other postback events
1. Page.PreRender

### On edit/update/insert/delete action or paging/sorting/grouping/filtering operation

1. ItemCreated for each Item
1. Page.Load
1. GridInstance.NeedDataSource
1. ItemCreated for each Item
1. ItemDataBound for each Item
1. GridInstance.ItemCommand
1. Grid_Instance.EditCommand/UpdateCommand/InsertCommand or GridInstance.PageIndexChanged/SortCommand/GroupsChanging/ItemCommand
1. ItemCreated for each Item
1. ItemDataBound for each Item
1. Page.PreRender


### Calling Rebind()

Invoking the `Rebind()` method from a postback event handler of an outside control or RadGrid will **not** raise the `NeedDataSource` event. Then grid items will be recreated so the `ItemCreated` and `ItemDataBound` events will be raised according to the cases above.

To see how to rebind the grid in this case, review the [Rebind Grid with EnableViewState = false]({%slug grid/performance/rebind-grid-with-enableviewstate-=-false%}) article.

## See Also

* [Telerik RadGrid lifecycle]({%slug grid/control-lifecycle/telerik-radgrid-lifecycle%})
* [Differences Between ItemCreated and ItemDataBound ]({%slug grid/control-lifecycle/differences-between-itemcreated-and-itemdatabound-%})
* [Commands that invoke Rebind Implicitly]({%slug grid/control-lifecycle/commands-that-invoke-rebind-implicitly%})
* [Command Reference]({%slug grid/control-lifecycle/command-reference-%})
* [How to Fire Command Events]({%slug grid/control-lifecycle/how-to-fire-command-events%})

