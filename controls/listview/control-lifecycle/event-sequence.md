---
title: Event Sequence
page_title: Event Sequence | RadListView for ASP.NET AJAX Documentation
description: Event Sequence
slug: listview/control-lifecycle/event-sequence
tags: event,sequence
published: True
position: 1
---

# Event Sequence



The API and event sequence of **RadListView** are quite similar to **MS ListView**. The sequence of the events is the following:

## RadListView with **EnableViewState** set to **true** (default value)


### First page load


1. Page.Load
1. NeedDataSource
1. ItemCreated for each item
1. ItemDataBound for each item
1. Page.PreRender


###  Normal postback from a control outside of RadListView

1. ItemCreated for each item
1. Page.Load
1. Postback Events
1. Page.PreRender

If a data source was not provided in the initial load, the `NeedDataSource` event will be fired as if this were the initial page load.


### On server selection from LinkButton/PushButton/ImageButton with CommandName Select or Deselect (part of the RadListView body)

1. ItemCreated for each item
1. Page.Load
1. ItemCommand
1. SelectedIndexChanged
1. NeedDataSource
1. Other postback events
1. Page.PreRender


### On edit/update/insert/delete/cancel action or paging/sorting operation


1. ItemCreated for each item
1. Page.Load
1. ItemCommand
1. ItemEditing/ItemUpdating/ItemInserting/ItemDeleting/ItemCancelling, ItemEdited/ItemUpdated/ItemInserted/ItemDeleted/ItemCancelledorPageIndexChanged/PageSizeChanged/Sorting/ItemCommand
1. NeedDataSource
1. ItemCreated for each item
1. ItemDataBound for each item
1. Page.PreRender

### Calling Rebind()

Invoking the `Rebind()` method from postback event handler of an outside control or RadListView will raise automatically the `NeedDataSource` event. Then the items will be recreated so the `ItemCreated` and `ItemDataBound` events will be raised according to the cases above.

## RadListView with **EnableViewState** set to **false**

### First page load

1. Page.Load
1. NeedDataSource
1. ItemCreated for each item
1. ItemDataBound for each item
1. Page.PreRender


### Normal postback from a control outside of ListView

1. ItemCreated for each item
1. ItemDataBound for each item
1. Page.Load
1. NeedDataSource
1. Postback Events
1. Page.PreRender


### On server selection from LinkButton/PushButton/ImageButton with CommandName Select or Deselect (part of the RadListView body)

1. ItemCreated for each item
1. ItemDataBound for each item
1. Page.Load
1. NeedDataSource
1. ItemCommand
1. SelectedIndexChanged
1. Other postback events
1. Page.PreRender


### On edit/update/insert/delete/cancel action or paging/sorting operation

1. ItemCreated for each item
1. Page.Load
1. NeedDataSource
1. ItemCreated for each item
1. ItemDataBound for each item
1. ItemCommand
1. ItemEditing/ItemUpdating/ItemInserting/ItemDeleting/ItemCancelling, ItemEdited/ItemUpdated/ItemInserted/ItemDeleted/ItemCancelledorPageIndexChanged/PageSizeChanged/Sorting/ItemCommand
1. NeedDataSource
1. ItemCreated for each item
1. ItemDataBound for each item
1. Page.PreRender

### Calling Rebind()

Invoking the `Rebind()` method from postback event handler of an outside control or RadListView will **not** raise the `NeedDataSource` event. Then the items will be recreated so the `ItemCreated` and `ItemDataBound` events will be raised according to the cases above.
