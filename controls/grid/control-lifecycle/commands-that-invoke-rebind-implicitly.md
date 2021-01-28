---
title: Commands that invoke Rebind Implicitly
page_title: Commands that invoke Rebind Implicitly - RadGrid
description: Check our Web Forms article about Commands that invoke Rebind Implicitly.
slug: grid/control-lifecycle/commands-that-invoke-rebind-implicitly
tags: commands,that,invoke,rebind,implicitly
published: True
position: 3
---

# Commands that invoke Rebind Implicitly



## 

This topic lists which internal grid commands make an implicit call to the **Rebind**() method of RadGrid in order to refresh the control's content and fetch the latest information from the grid source.Here is the complete list of commands that trigger **Rebind**():




>caption  

|  **Command**  **Name**  |  **Field**  |
| ------ | ------ |
|ExpandCollapse|RadGrid.ExpandCollapseCommandName|
|Update|RadGrid.UpdateCommandName|
|Cancel|RadGrid.CancelCommandName|
|Delete|RadGrid.DeleteCommandName|
|Edit|RadGrid.EditCommandName|
|InitInsert|RadGrid.InitInsertCommandName|
|PerformInsert|RadGrid.PerformInsertCommandName|
|RebindGrid|RadGrid.RebindGridCommandName|
|Page|RadGrid.PageCommandName|
|Sort|RadGrid.SortCommandName|
|Filter|RadGrid.FilterCommandName|
|Note that the following commands **do not** perform internal rebind:||
|Select|RadGrid.SelectCommandName|
|Deselect|RadGrid.DeselectCommandName|

>note When RadGrid's ViewState is turned off, the NeedDataSource event does not fire after any of the above listed commands. This is so because it fires after Page_Load and the control already has a DataSource assigned when the command takes place. If you want to make the event fire in such scenarios, you need to first set RadGrid's DataSource to null/Nothing and then call Rebind().
>

