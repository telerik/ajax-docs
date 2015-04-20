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



The API and event sequence of **RadDataForm** are quite similar to **RadListView**.The sequence of the events is the following.

## Event Sequence

**RadDataForm** with **EnableViewState** set to **true** (default value).


| First page load: |
| ------ |
|Page.Load|
|NeedDataSource|
|Foreach Item in RadDataForm:|
|- ItemCreated|
|- ItemDataBound|
|Page.PreRender|


| Normal postback from a control outside of RadListView: |
| ------ |
|For each Item in RadDataForm:|
|- ItemCreated|
|Page.Load|
|Postback Events|
|Page.PreRender|


| On edit/update/insert/delete/cancel action or paging/sorting operation: |
| ------ |
|For each Item in RadDataForm:|
|- ItemCreated|
|Page.Load|
|ItemCommand|
|ItemEditing/ItemUpdating/ItemInserting/ItemDeleting/ItemCancelling,|
|ItemEdited/ItemUpdated/ItemInserted/ItemDeleted/ItemCancelled/PageIndexChanged/PageSizeChanged/Sorting|
|NeedDataSource|
|Foreach Item in RadDataForm:|
|- ItemCreated|
|- ItemDataBound|
|Page.PreRender|
|----|
|Invoking the Rebind() method from postback event handler of outside control or **RadDataForm** will raiseautomatically the **NeedDataSource** event.|

**RadDataForm** with **EnableViewState** set to **false**.


| First page load: |
| ------ |
|Page.Load|
|NeedDataSource|
|Foreach Item in RadDataForm:|
|- ItemCreated|
|- ItemDataBound|
|Page.PreRender|


| Normal postback from a control outside of RadListView: |
| ------ |
| **NeedDataSource** |
|For each Item in RadDataForm:|
|- ItemCreated|
|- **ItemDataBound**|
|Page.Load|
|Postback Events|
|Page.PreRender|

| On edit/update/insert/delete/cancel action or paging/sorting operation: |
| ------ |
| **NeedDataSource** |
|For each Item in RadDataForm:|
|- ItemCreated|
|- **ItemDataBound**| 

|Page.Load|
|ItemCommand|
|ItemEditing/ItemUpdating/ItemInserting/ItemDeleting/ItemCancelling,|
|ItemEdited/ItemUpdated/ItemInserted/ItemDeleted/ItemCancelled/PageIndexChanged/PageSizeChanged/Sorting|
|Foreach Item in RadDataForm:|
|- ItemCreated|
|- ItemDataBound|
|Page.PreRender|
|----|
|Invoking the Rebind() method from postback event handler of outside control or **RadDataForm** will -not- raise the **NeedDataSource** event.|

# See Also

 * [DataForm Object]({%slug dataform/server-side-programming/dataform-object%})

 * [Events]({%slug dataform/server-side-programming/events%})
