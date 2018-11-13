---
title: Command Reference
page_title: Command Reference | RadTreeList for ASP.NET AJAX Documentation
description: Command Reference
slug: treelist/control-lifecycle/command-reference
tags: command,reference
published: True
position: 2
---

# Command Reference



The ASP.NET page framework provides a technique called event bubbling that allows a child control to propagate events up its containment hierarchy. Event bubbling enables events to be raised from a more convenient location in the controls hierarchy and allows event handlers to be attached to the original control as well as to the control that exposes the bubbled event.

## RadTreeList command names

When an event bubbles from a child control, RadTreeList will fire **ItemCommand** event. A child control (such as a **Button** server control) raises a bubble event if you set any value in **CommandName** property.

>note Merely the **MS**  **LinkButton, MS Button** and **MS ImageButton** controls have **CommandName** property and cantrigger the event bubbling mechanism of the treelist.
>


For example the command name is "Custom" , then RadTreeList will fire **ItemCommand** event and the event argument of the handler function (generally the "e"variable ) will have the same command name , i.e. "**Custom**" as a value for the **e.CommandName** property. Moreover, the **e.Item** argument willbe a reference to the **Item** which is the parent of the control raised the bubble event(i.e. the **Item** where the button resides).

Some command names are predefined in RadTreeList and the control will respond to them automatically(like the value of **RadTreeList.SelectCommandName** constant or **RadTreeList.SortCommandName**). The integrated paging in RadTreeList is also based oncommands, with **CommandName** ="**Page**"(or **RadTreeList.PageCommandName**) and command various arguments for different pagingoperations like the string "Next","Prev" or "First".

Here follows a list of the recognized command names in Telerik RadTreeList:


| Command name | Description |
| ------ | ------ |
| **RebindTreeListCommandName** |Represents the Rebind command name. Forces **RadTreeList.Rebind()** methodexecution.|
| **ExpandCollapseCommandName** |Represents the ExpandCollapse command name. Fires **RadTreeList.ItemCommand** event.Toggles the expanded state of the child items.|
| **EditCommandName** |Represents the Edit command name. Fires **RadTreeList.EditCommand** event.Takes the data item it was fired upon into edit mode.|
| **InitInsertCommandName** |Represents the InitInsert command name. Fires **RadTreeList.ItemCommand** event.Switches the RadTreeList control into insert mode by opening an insert form. Inserting it will resultin creating a child item to the data item that the InitInsertCommand was fired for.|
| **CancelCommandName** |Represents the Cancel command name. Fires **RadTreeList.CancelCommand** event.Cancels the insert or edit of the data item it was fired for and takes it back to browse mode.|
| **UpdateCommandName** |Represents the Update command name. Fires **RadTreeList.UpdateCommand** event.Updates the data item it was fired for with the values provided in the edit form of this item.|
| **PerformInsertCommandName** |Represents the PerformInsert command name. Fires **RadTreeList.InsertCommand** event.Creates a new entry in the datasource and populates it with the values provided in the insert form.|
| **DeleteCommandName** |Represents the Delete command name. Fires **RadTreeList.Delete** event.Deletes the entry in the datasource corresponding to the data item upon which the command was fired.|
| **SortCommandName** |Represents the Sort command name. Fires **RadTreeList.Sorting** event.Can be raised by link/push/image buttons residing in the RadTreeList body when its **AllowSorting** property is set to true. Their **CommandName** should be set to **'Sort'** and **CommandArgument** must match the name of the underlying source field to be sorted(for example ContactName for Customers Northwind table).|
| **PageCommandName** |Represents the Page command name.Fires the **RadTreeList.PageIndexChanged** event. Can be raised by link/push/image buttons residing in the RadTreeList body when its **AllowPaging** property is set to true. Their **CommandName** should be set to **'Page'** and **CommandArgument** must match one of the values from the second table below.See also: [Paging]({%slug treelist/functionality/paging%}).|
| **ChangePageSizeCommandName** |Represents the ChangePageSize command name. Fires **RadTreeList.PageSizeChanged** event. Can be raised by link/push/image buttonsresiding in the RadTreeList body when its **AllowPaging** property is set to true. Their **CommandName** should be set to **'ChangePageSize'** and **CommandArgument** must be the actual number representing the new page size thatwill be set.|
| **SelectCommandName** |Represents the Select command name. Fires **RadTreeList.ItemCommand** event.Sets **Item.Selected** to **true** .|
| **SelectAllCommandName** |Represents the SelectAll command name. Fires **RadTreeList.ItemCommand** event. Sets **Item.Selected** to **true** for all visible TreeListDataItem.|
| **DeselectCommandName** |Represents the Deselect command name. Fires **RadTreeList.ItemCommand** event. **Sets Item.Selected** to **false** .|
| **DeselectAllCommandName** |Represents the DeselectAll command name. Fires **RadTreeList.ItemCommand** event. Sets **Item.Selected** to **false** for all visible TreeListDataItem.|
| **ReorderCommandName** |Represents the Reorder command name. Fires **RadTreeList.ItemCommand** event. Raised when server-side column reordering is performed in RadTreeList and **ClientSettings.Reordering.ColumnsReorderMethod** isset to **Reorder** .|
| **SwapCommandName** |Represents the Swap command name. Fires **RadTreeList.ItemCommand** event. Raised when server-side column reordering is performed in RadTreeList and **ClientSettings.Reordering.ColumnsReorderMethod** is set to **Swap** .|
| **ItemClick** |Fires when the **ClientSettings.AllowPostBackOnItemClick** property ofRadTreeList is set to true and an item in the control is clicked.|

Furthermore, here are the internally recognized command arguments you can check:


| Paging command arguments | Description |
| ------ | ------ |
| **FirstPageCommandArgument** |Indicates that the end user chose to navigate to the first page in the treelist|
| **NextPageCommandArgument** |Indicates that the end user chose to navigate to the next page in the treelist|
| **PrevPageCommandArgument** |Indicates that the end user chose to navigate to the previous page in the treelist|
| **LastPageCommandArgument** |Indicates that the end user chose to navigate to the last page in the treelist|
