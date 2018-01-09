---
title: Events Lifecycle
page_title: Events Lifecycle | RadDataForm for ASP.NET AJAX Documentation
description: Events Lifecycle
slug: dataform/server-side-programming/events-lifecycle
tags: events,lifecycle
published: True
position: 2
---

# Events Lifecycle



The API and event sequence of **RadDataForm** are quite similar to **RadListView** .The sequence of the events is as follows.


## RadDataForm with EnableViewState set to true (default value)


### First page load

1. Page.Load
1. NeedDataSource
1. ItemCreated for each item
1. ItemDataBound for each item
1. Page.PreRender

### Normal postback from a control outside of RadListView

1. ItemCreated for each item in RadDataForm
1. Page.Load
1. Postback Events
1. Page.PreRender

### On edit/update/insert/delete/cancel action or paging/sorting operation

1. ItemCreated for each item in RadDataForm
1. Page.Load
1. ItemCommand
1. ItemEditing / ItemUpdating / ItemInserting / ItemDeleting / ItemCanceling
1. ItemEdited / ItemUpdated / ItemInserted / ItemDeleted / PageIndexChanged
1. NeedDataSource
1. ItemCreated for each item in RadDataForm
1. ItemDataBound for each item in RadDataForm
1. Page.PreRender

### Calling Rebind()

Invoking the `Rebind()` method from a postback event handler of an outside control or **RadDataForm** will raise the **NeedDataSource** event. Then the data form items will be recreated and `ItemCreated` and `ItemDataBound` events will be raised according to the cases above.

## RadDataForm with EnableViewState set to false

### First page load

1. Page.Load
1. NeedDataSource
1. ItemCreated for each item in RadDataForm
1. ItemDataBound for each item in RadDataForm
1. Page.PreRender

### Normal postback from a control outside of RadDataForm

1. NeedDataSource
1. ItemCreated for each item in RadDataForm
1. ItemDataBound for each item in RadDataForm
1. Page.Load
1. Postback Events
1. Page.PreRender

### On edit/update/insert/delete/cancel/paging operation

1. NeedDataSource
1. ItemCreated for each item in RadDataForm
1. ItemDataBound for each item in RadDataForm
1. Page.Load
1. ItemCommand
1. ItemEditing / ItemUpdating / ItemInserting / ItemDeleting / ItemCanceling
1. ItemEdited / ItemUpdated / ItemInserted / ItemDeleted / ItemCancelled / PageIndexChanged
1. ItemCreated for each item in RadDataForm
1. ItemDataBound for each item in RadDataForm
1. Page.PreRender

### Calling Rebind()

Invoking the `Rebind()` method from postback event handler of an outside control or **RadDataForm** will **not** raise the **NeedDataSource** event. Then the data form items will be recreated so the `ItemCreated` and `ItemDataBound` events will be raised according to the cases above.

# See Also

 * [DataForm Object]({%slug dataform/server-side-programming/dataform-object%})

 * [Events]({%slug dataform/server-side-programming/events%})
