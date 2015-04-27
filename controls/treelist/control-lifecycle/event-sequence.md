---
title: Event Sequence
page_title: Event Sequence | RadTreeList for ASP.NET AJAX Documentation
description: Event Sequence
slug: treelist/control-lifecycle/event-sequence
tags: event,sequence
published: True
position: 1
---

# Event Sequence



This article elaborates on the event sequence of the RadTreeList control in the cases when ViewState is enabled or disabled.

## 

* RadTreeList with **EnableViewState** set to **true** (default value)


| First page load: |
| ------ |
|Page.Load|
|NeedDataSource|
|Foreach Item in RadTreeList:|
|ItemCreated|
|ItemDataBound|
|Page.PreRender|


| Normal postback from a control outside of RadTreeList: |
| ------ |
|For each Item in RadTreeList:|
|ItemCreated|
|Page.Load|
|Postback Events|
|Page.PreRender|


| On server selection from TreeListSelectColumn/LinkButton/PushButton/ImageButton with CommandName Select or Deselect (part of the RadTreeList body): |
| ------ |
|For each Item in RadTreeList:|
|ItemCreated|
|Page.Load|
|ItemCommand|
|Other postback events|
|Page.PreRender|


| On server selection from TreeListSelectColumn/LinkButton/PushButton/ImageButton with CommandName Select or Deselect (part of the RadTreeList body) when **AllowRecursiveSelection="true"** : |
| ------ |
|For each Item in RadTreeList:|
|ItemCreated|
|Page.Load|
|ItemCommand|
|NeedDataSource|
|Foreach Item in RadTreeList:|
|ItemCreated|
|ItemDataBound|
|Other postback events|
|Page.PreRender|


| On expand/collapse action and paging/sorting operation or Edit/InitInsert/Cancel/Delete/Update/PerformInsert command |
| ------ |
|For each Item:|
|ItemCreated|
|Page.Load|
|ItemCommand|
|PageIndexChanged/PageSizeChanged/Sorting/ItemCommand|
|NeedDataSource|
|For each Item:|
|ItemCreated|
|ItemDataBound|
|Page.PreRender|

* RadTreeList with **EnableViewState** set to **false**


| First page load: |
| ------ |
|Page.Load|
|NeedDataSource|
|Foreach Item in RadTreeList:|
|ItemCreated|
|ItemDataBound|
|Page.PreRender|


| Normal postback from a control outside of RadTreeList: |
| ------ |
|Page.Load|
| **NeedDataSource** |
|For each Item in RadTreeList:|
|ItemCreated|
| **ItemDataBound** |
|Postback Events|
|Page.PreRender|


| On server selection/recursive selection from TreeListSelectColumn/LinkButton/PushButton/ImageButton with CommandName Select or Deselect (part of the RadTreeList body): |
| ------ |
|Page.Load|
| **NeedDataSource** |
|For each Item in RadTreeList:|
| **ItemCreated** |
| **ItemDataBound** |
|ItemCommand|
|Other postback events|
|Page.PreRender|


| On expand/collapse action or paging/sorting operation or Edit/InitInsert/Cancel/Delete/Update/PerformInsert command |
| ------ |
|Page.Load|
| **NeedDataSource** |
|For each Item in RadTreeList:|
| **ItemCreated** |
| **ItemDataBound** |
|ItemCommand|
|PageIndexChanged/PageSizeChanged/Sorting/ItemCommand|
|NeedDataSource|
|For each Item in RadTreeList:|
|ItemCreated|
|ItemDataBound|
|Page.PreRender|
