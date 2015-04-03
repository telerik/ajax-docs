---
title: Command Reference
page_title: Command Reference | UI for ASP.NET AJAX Documentation
description: Command Reference
slug: treelist/control-lifecycle/command-reference
tags: command,reference
published: True
position: 2
---

# Command Reference



The ASP.NET page framework provides a technique called event bubbling that allows a child control to propagate events up its containment hierarchy. Event bubbling enables events to be raised from a more convenient location in the controls hierarchy and allows event handlers to be attached to the original control as well as to the control that exposes the bubbled event.

## RadTreeList command names

When an event bubbles from a child control, RadTreeList will fire__ItemCommand__ event. A child control (such as a __Button__server control) raises a bubble event if you set any value in __CommandName__ property.

>note Merely the __MS__  __LinkButton, MS Button__ and __MS ImageButton__ controls have __CommandName__ property and cantrigger the event bubbling mechanism of the treelist.
>


For example the command name is "Custom" , then RadTreeList will fire__ItemCommand__ event and the event argument of the handler function (generally the "e"variable ) will have the same command name , i.e. "__Custom__" as a value for the__e.CommandName__ property. Moreover, the __e.Item__ argument willbe a reference to the __Item__ which is the parent of the control raised the bubble event(i.e. the __Item__ where the button resides).

Some command names are predefined in RadTreeList and the control will respond to them automatically(like the value of __RadTreeList.SelectCommandName__constant or__RadTreeList.SortCommandName__). The integrated paging in RadTreeList is also based oncommands, with __CommandName__ ="__Page__"(or __RadTreeList.PageCommandName__) and command various arguments for different pagingoperations like the string "Next","Prev" or "First".

Here follows a list of the recognized command names in Telerik RadTreeList:


| Command name | Description |
| ------ | ------ |
| __RebindTreeListCommandName__ |Represents the Rebind command name. Forces __RadTreeList.Rebind()__ methodexecution.|
| __ExpandCollapseCommandName__ |Represents the ExpandCollapse command name. Fires __RadTreeList.ItemCommand__ event.Toggles the expanded state of the child items.|
| __EditCommandName__ |Represents the Edit command name. Fires __RadTreeList.EditCommand__ event.Takes the data item it was fired upon into edit mode.|
| __InitInsertCommandName__ |Represents the InitInsert command name. Fires __RadTreeList.ItemCommand__ event.Switches the RadTreeList control into insert mode by opening an insert form. Inserting it will resultin creating a child item to the data item that the InitInsertCommand was fired for.|
| __CancelCommandName__ |Represents the Cancel command name. Fires __RadTreeList.CancelCommand__ event.Cancels the insert or edit of the data item it was fired for and takes it back to browse mode.|
| __UpdateCommandName__ |Represents the Update command name. Fires __RadTreeList.UpdateCommand__ event.Updates the data item it was fired for with the values provided in the edit form of this item.|
| __PerformInsertCommandName__ |Represents the PerformInsert command name. Fires __RadTreeList.InsertCommand__ event.Creates a new entry in the datasource and populates it with the values provided in the insert form.|
| __DeleteCommandName__ |Represents the Delete command name. Fires __RadTreeList.Delete__ event.Deletes the entry in the datasource corresponding to the data item upon which the command was fired.|
| __SortCommandName__ |Represents the Sort command name. Fires __RadTreeList.Sorting__ event.Can be raised by link/push/image buttons residing in the RadTreeList body when its __AllowSorting__ property is set to true. Their __CommandName__ should be set to __'Sort'__ and __CommandArgument__ must match the name of the underlying source field to be sorted(for example ContactName for Customers Northwind table).|
| __PageCommandName__ |Represents the Page command name.Fires the __RadTreeList.PageIndexChanged__ event. Can be raised by link/push/image buttons residing in the RadTreeList body when its __AllowPaging__ property is set to true. Their __CommandName__ should be set to __'Page'__ and __CommandArgument__ must match one of the values from the second table below.See also:[Paging]({%slug treelist/functionality/paging%}).|
| __ChangePageSizeCommandName__ |Represents the ChangePageSize command name. Fires __RadTreeList.PageSizeChanged__ event. Can be raised by link/push/image buttonsresiding in the RadTreeList body when its __AllowPaging__ property is set to true. Their __CommandName__ should be set to __'ChangePageSize'__ and __CommandArgument__ must be the actual number representing the new page size thatwill be set.|
| __SelectCommandName__ |Represents the Select command name. Fires __RadTreeList.ItemCommand__ event.Sets __Item.Selected__ to __true__ .|
| __SelectAllCommandName__ |Represents the SelectAll command name. Fires __RadTreeList.ItemCommand__ event. Sets __Item.Selected__ to __true__ for all visible TreeListDataItem.|
| __DeselectCommandName__ |Represents the Deselect command name. Fires __RadTreeList.ItemCommand__ event. __Sets Item.Selected__ to __false__ .|
| __DeselectAllCommandName__ |Represents the DeselectAll command name. Fires __RadTreeList.ItemCommand__ event. Sets __Item.Selected__ to __false__ for all visible TreeListDataItem.|
| __ReorderCommandName__ |Represents the Reorder command name. Fires __RadTreeList.ItemCommand__ event. Raised when server-side column reordering is performed in RadTreeList and __ClientSettings.Reordering.ColumnsReorderMethod__ isset to __Reorder__ .|
| __SwapCommandName__ |Represents the Swap command name. Fires __RadTreeList.ItemCommand__ event. Raised when server-side column reordering is performed in RadTreeList and __ClientSettings.Reordering.ColumnsReorderMethod__ is set to __Swap__ .|
| __ItemClick__ |Fires when the __ClientSettings.AllowPostBackOnItemClick__ property ofRadTreeList is set to true and an item in the control is clicked.|

Furthermore, here are the internally recognized command arguments you can check:


| Paging command arguments | Description |
| ------ | ------ |
| __FirstPageCommandArgument__ |Indicates that the end user chose to navigate to the first page in the treelist|
| __NextPageCommandArgument__ |Indicates that the end user chose to navigate to the next page in the treelist|
| __PrevPageCommandArgument__ |Indicates that the end user chose to navigate to the previous page in the treelist|
| __LastPageCommandArgument__ |Indicates that the end user chose to navigate to the last page in the treelist|
