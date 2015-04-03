---
title: Event sequence
page_title: Event sequence | UI for ASP.NET AJAX Documentation
description: Event sequence
slug: grid/control-lifecycle/event-sequence
tags: event,sequence
published: True
position: 1
---

# Event sequence



## 

The API and event sequence of __RadGrid__ are quite similar to __MS DataGrid/GridView__. The sequence of the events is the following:

- RadGrid with __EnableViewState__ set to __true__ (default value)


>caption  

|  __First page load:__  |  |
| ------ | ------ |
|Page.Load||
|Grid_Instance.NeedDataSource||
|Foreach Item in Grid_Instance:||
|ItemCreated||
|ItemDataBound||
|Page.PreRender||
|||
| __Normal postback from a control outside of RadGrid:__ ||
|For each Item in grid:||
|ItemCreated||
|Page.Load||
|Postback Events||
|Page.PreRender||
|||
| __On server selection from Select/Deselect GridButtonColumn/Auto Postback on row click:__ ||
|For each Item in grid:||
|ItemCreated||
|Page.Load||
|ItemCommand||
|SelectedIndexChanged||
|Other postback events||
|Page.PreRender||
|||
| __On edit/update/insert/delete action or paging/sorting/grouping/filtering operation__ ||
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

- RadGrid with __EnableViewState__ set to __false__


>caption  

|  __First page load:__  |
| ------ |
|Page.Load|
|Grid_Instance.NeedDataSource|
|Foreach Item in Grid_Instance:|
|ItemCreated|
|ItemDataBound|
|Page.PreRender|
||
| __Normal postback from a control outside of RadGrid:__ |
|Page.Load|
|Grid_Instance.NeedDataSource|
|For each Item in grid:|
|ItemCreated|
|ItemDataBound|
|Postback Events|
|Page.PreRender|
||
| __On server selection from Select/Deselect GridButtonColumn/Auto Postback on row click:__ |
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
| __On edit/update/insert/delete action or paging/sorting/grouping/filtering operation__ |
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
