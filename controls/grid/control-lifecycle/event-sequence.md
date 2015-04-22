---
title: Event sequence
page_title: Event sequence | RadGrid for ASP.NET AJAX Documentation
description: Event sequence
slug: grid/control-lifecycle/event-sequence
tags: event,sequence
published: True
position: 1
---

# Event sequence



## 

The API and event sequence of **RadGrid** are quite similar to **MS DataGrid/GridView**. The sequence of the events is the following:

- RadGrid with **EnableViewState** set to **true** (default value)


>caption  

|  **First page load:**  |  |
| ------ | ------ |
|Page.Load||
|Grid_Instance.NeedDataSource||
|Foreach Item in Grid_Instance:||
|ItemCreated||
|ItemDataBound||
|Page.PreRender||
|||
| **Normal postback from a control outside of RadGrid:** ||
|For each Item in grid:||
|ItemCreated||
|Page.Load||
|Postback Events||
|Page.PreRender||
|||
| **On server selection from Select/Deselect GridButtonColumn/Auto Postback on row click:** ||
|For each Item in grid:||
|ItemCreated||
|Page.Load||
|ItemCommand||
|SelectedIndexChanged||
|Other postback events||
|Page.PreRender||
|||
| **On edit/update/insert/delete action or paging/sorting/grouping/filtering operation** ||
|For each Item:||
|ItemCreated||
|Page.Load||
|Grid_Instance.ItemCommand||
|Grid_Instance.EditCommand/UpdateCommand/InsertCommandorGridInstance.PageIndexChanged/SortCommand/GroupsChanging/ItemCommand||
|Grid_Instance.NeedDataSource||
|For each Item:||
|ItemCreated||
|ItemDataBound||
|Page.PreRender||
|----||
|Invoking the Rebind() method from postback event handler of outside control or RadGrid will raise automatically the NeedDataSource event||

- RadGrid with **EnableViewState** set to **false**


>caption  

|  **First page load:**  |
| ------ |
|Page.Load|
|Grid_Instance.NeedDataSource|
|Foreach Item in Grid_Instance:|
|ItemCreated|
|ItemDataBound|
|Page.PreRender|
||
| **Normal postback from a control outside of RadGrid:** |
|Page.Load|
|Grid_Instance.NeedDataSource|
|For each Item in grid:|
|ItemCreated|
|ItemDataBound|
|Postback Events|
|Page.PreRender|
||
| **On server selection from Select/Deselect GridButtonColumn/Auto Postback on row click:** |
|Page.Load|
|Grid_Instance.NeedDataSource|
|For each Item in grid:|
|ItemCreated|
|ItemDataBound|
|ItemCommand|
|SelectedIndexChanged|
|Other postback events|
|Page.PreRender|
||
| **On edit/update/insert/delete action or paging/sorting/grouping/filtering operation** |
|For each Item:|
|ItemCreated|
|Page.Load|
|GridInstance.NeedDataSource|
|For each Item:|
|ItemCreated|
|ItemDataBound|
|GridInstance.ItemCommand|
|Grid_Instance.EditCommand/UpdateCommand/InsertCommandorGridInstance.PageIndexChanged/SortCommand/GroupsChanging/ItemCommand|
|For each Item:|
|ItemCreated|
|ItemDataBound|
|Page.PreRender|
|----|
|Invoking the Rebind() method from postback event handler of outside control or RadGrid will -not- raise the NeedDataSource event. How to rebind the grid in this case you can learn from[this help article]({%slug grid/performance/rebind-grid-with-enableviewstate-=-false%}).|
