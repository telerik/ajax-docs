---
title: Commands Invoking Rebind Implicitly
page_title: Commands Invoking Rebind Implicitly | RadTreeList for ASP.NET AJAX Documentation
description: Commands Invoking Rebind Implicitly
slug: treelist/control-lifecycle/commands-invoking-rebind-implicitly
tags: commands,invoking,rebind,implicitly
published: True
position: 3
---

# Commands Invoking Rebind Implicitly



This topic lists which internal RadTreeList commands make an implicit call to the **Rebind**() method of the control in order to refresh its content and fetch the latest information from the data source.

## 

Here is the complete list of commands that trigger **Rebind**():


| Command Name | Field |
| ------ | ------ |
| **Rebind** |RadTreeList.RebindCommandName|
| **ExpandCollapse** |RadTreeList.ExpandCollapseCommandName|
| **Edit** |RadTreeList.EditCommandName|
| **InitInsert** |RadTreeList.InitInsertCommandName|
| **Cancel** |RadTreeList.CancelCommandName|
| **Update** |RadTreeList.UpdateCommandName|
| **PerformInsert** |RadTreeList.PerformInsertCommandName|
| **Delete** |RadTreeList.DeleteCommandName|
| **Sort** |RadTreeList.SortCommandName|
| **Page** |RadTreeList.PageCommandName|
| **ChangePageSize** |RadTreeList.ChangePageSize|
| **Select** |RadTreeList.SelectCommandName|
| **Deselect** |RadTreeList.DeselectCommandName|
