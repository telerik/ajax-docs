---
title: Commands Invoking Rebind Implicitly
page_title: Commands Invoking Rebind Implicitly | UI for ASP.NET AJAX Documentation
description: Commands Invoking Rebind Implicitly
slug: treelist/control-lifecycle/commands-invoking-rebind-implicitly
tags: commands,invoking,rebind,implicitly
published: True
position: 3
---

# Commands Invoking Rebind Implicitly



This topic lists which internal RadTreeList commands make an implicit call to the __Rebind__() method of the control in order to refresh its content and fetch the latest information from the data source.

## 

Here is the complete list of commands that trigger __Rebind__():


| Command Name | Field |
| ------ | ------ |
| __Rebind__ |RadTreeList.RebindCommandName|
| __ExpandCollapse__ |RadTreeList.ExpandCollapseCommandName|
| __Edit__ |RadTreeList.EditCommandName|
| __InitInsert__ |RadTreeList.InitInsertCommandName|
| __Cancel__ |RadTreeList.CancelCommandName|
| __Update__ |RadTreeList.UpdateCommandName|
| __PerformInsert__ |RadTreeList.PerformInsertCommandName|
| __Delete__ |RadTreeList.DeleteCommandName|
| __Sort__ |RadTreeList.SortCommandName|
| __Page__ |RadTreeList.PageCommandName|
| __ChangePageSize__ |RadTreeList.ChangePageSize|
| __Select__ |RadTreeList.SelectCommandName|
| __Deselect__ |RadTreeList.DeselectCommandName|
