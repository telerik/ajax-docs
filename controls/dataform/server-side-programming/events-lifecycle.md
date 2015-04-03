---
title: Events Lifecycle
page_title: Events Lifecycle | UI for ASP.NET AJAX Documentation
description: Events Lifecycle
slug: dataform/server-side-programming/events-lifecycle
tags: events,lifecycle
published: True
position: 2
---

# Events Lifecycle



The API and event sequence of __RadDataForm__ are quite similar to __RadListView__.The sequence of the events is the following.

## Event Sequence

__RadDataForm__ with __EnableViewState__ set to __true__ (default value).


| First page load: |
| ------ |
|Page.Load|
|NeedDataSource|
|Foreach Item in RadDataForm:

* ItemCreated

* ItemDataBound|
|Page.PreRender|


| Normal postback from a control outside of RadListView: |
| ------ |
|For each Item in RadDataForm:

* ItemCreated|
|Page.Load|
|Postback Events|
|Page.PreRender|


| On edit/update/insert/delete/cancel action or paging/sorting operation: |
| ------ |
|For each Item in RadDataForm:

* ItemCreated|
|Page.Load|
|ItemCommand|
|ItemEditing/ItemUpdating/ItemInserting/ItemDeleting/ItemCancelling,|
|ItemEdited/ItemUpdated/ItemInserted/ItemDeleted/ItemCancelled/PageIndexChanged/PageSizeChanged/Sorting|
|NeedDataSource|
|Foreach Item in RadDataForm:

* ItemCreated

* ItemDataBound|
|Page.PreRender|
|----|
|Invoking the Rebind() method from postback event handler of outside control or __RadDataForm__ will raiseautomatically the __NeedDataSource__ event.|

__RadDataForm__ with __EnableViewState__ set to __false__.


| First page load: |
| ------ |
|Page.Load|
|NeedDataSource|
|Foreach Item in RadDataForm:

* ItemCreated

* ItemDataBound|
|Page.PreRender|


| Normal postback from a control outside of RadListView: |
| ------ |
| __NeedDataSource__ |
|For each Item in RadDataForm:

* ItemCreated

*  __ItemDataBound__ |
|Page.Load|
|Postback Events|
|Page.PreRender|


| On edit/update/insert/delete/cancel action or paging/sorting operation: |
| ------ |
| __NeedDataSource__ |
|For each Item in RadDataForm:

* ItemCreated

*  __ItemDataBound__ |
|Page.Load|
|ItemCommand|
|ItemEditing/ItemUpdating/ItemInserting/ItemDeleting/ItemCancelling,|
|ItemEdited/ItemUpdated/ItemInserted/ItemDeleted/ItemCancelled/PageIndexChanged/PageSizeChanged/Sorting|
|Foreach Item in RadDataForm:

* ItemCreated

* ItemDataBound|
|Page.PreRender|
|----|
|Invoking the Rebind() method from postback event handler of outside control or __RadDataForm__ will -not- raise the __NeedDataSource__ event.|

# See Also

 * [DataForm Object]({%slug dataform/server-side-programming/dataform-object%})

 * [Events]({%slug dataform/server-side-programming/events%})
