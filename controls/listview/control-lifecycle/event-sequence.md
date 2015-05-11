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



##  

The API and event sequence of **RadListView** are quite similar to **MS ListView**. The sequence of the events is the following:

- RadListView with **EnableViewState** set to **true** (default value)


| First page load: |
| ------ |
|Page.Load|
|NeedDataSource|
|Foreach Item in RadListView:|
|ItemCreated|
|ItemDataBound|
|Page.PreRender|


| Normal postback from a control outside of RadListView: |
| ------ |
|For each Item in RadListView:|
|ItemCreated|
|Page.Load|
|Postback Events|
|Page.PreRender|


| On server selection from LinkButton/PushButton/ImageButton with CommandName Select or Deselect (part of the RadListView body): |
| ------ |
|For each Item in RadListView:|
|ItemCreated|
|Page.Load|
|ItemCommand|
|SelectedIndexChanged|
|NeedDataSource|
|Other postback events|
|Page.PreRender|


| On edit/update/insert/delete/cancel action or paging/sorting operation |
| ------ |
|For each Item:|
|ItemCreated|
|Page.Load|
|ItemCommand|
|ItemEditing/ItemUpdating/ItemInserting/ItemDeleting/ItemCancelling, ItemEdited/ItemUpdated/ItemInserted/ItemDeleted/ItemCancelledorPageIndexChanged/PageSizeChanged/Sorting/ItemCommand|
|NeedDataSource|
|For each Item:|
|ItemCreated|
|ItemDataBound|
|Page.PreRender|
|----|
|Invoking the Rebind() method from postback event handler of outside control or RadListView will raise automatically the NeedDataSource event|

- RadListView with **EnableViewState** set to **false**


| First page load: |
| ------ |
|Page.Load|
|NeedDataSource|
|Foreach Item in RadListView:|
|ItemCreated|
|ItemDataBound|
|Page.PreRender|


| Normal postback from a control outside of ListView: |
| ------ |
|For each Item in RadListView:|
|ItemCreated|
| **ItemDataBound** |
|Page.Load|
| **NeedDataSource** |
|Postback Events|
|Page.PreRender|


| On server selection from LinkButton/PushButton/ImageButton with CommandName Select or Deselect (part of the RadListView body): |
| ------ |
|For each Item in RadListView:|
| **ItemCreated** |
| **ItemDataBound** |
|Page.Load|
|NeedDataSource|
|ItemCommand|
|SelectedIndexChanged|
|Other postback events|
|Page.PreRender|


| On edit/update/insert/delete/cancel action or paging/sorting operation |
| ------ |
|For each Item in RadListView:|
|ItemCreated|
|Page.Load|
|NeedDataSource|
|For each Item:|
|ItemCreated|
| **ItemDataBound** |
|ItemCommand|
|ItemEditing/ItemUpdating/ItemInserting/ItemDeleting/ItemCancelling, ItemEdited/ItemUpdated/ItemInserted/ItemDeleted/ItemCancelledorPageIndexChanged/PageSizeChanged/Sorting/ItemCommand|
| **NeedDataSource** |
|For each Item in RadListView:|
|ItemCreated|
|ItemDataBound|
|Page.PreRender|
|----|
|Invoking the Rebind() method from postback event handler of outside control or RadListView will -not- raise the NeedDataSource event.|
