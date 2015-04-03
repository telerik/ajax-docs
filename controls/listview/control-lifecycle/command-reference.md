---
title: Command Reference
page_title: Command Reference | UI for ASP.NET AJAX Documentation
description: Command Reference
slug: listview/control-lifecycle/command-reference
tags: command,reference
published: True
position: 2
---

# Command Reference



## 

The ASP.NET page framework provides a technique called event bubbling that allows a child control to propagate events up its containment hierarchy. Event bubbling enables events to be raised from a more convenient location in the controls hierarchy and allows event handlers to be attached to the original control as well as to the control that exposes the bubbled event.

When an event bubbles from a child control, RadListView will fire __ItemCommand__ event. A child control (such as a __Button__ server control) raises a bubble event if you set any value in __CommandName__ property.

>note Merely the __MS__  __LinkButton, MS Button__ and __MS ImageButton__ controls have __CommandName__ property and can trigger the event bubbling mechanism of the listview.
>


For example the command name is "DoInsert" , then RadListView will fire __ItemCommand__ event and the event argument of the handler function (generally the "e" variable ) will have the same command name , i.e. "__DoInsert__" as a value for the __e.CommandName__ property. Moreover, the __e.Item__ argument will be a reference to the __Item__ which is the parent of the control raised the bubble event (i.e. the __Item__ where the button resides).

Some command names are predefined in RadListView and the control will respond to them automatically (like the value of __RadListView.EditCommandName__constant or __RadListView.SortCommandName__). The integrated paging in RadListView is also based on commands, with __CommandName__ ="__Page__" (or __RadListView.PageCommandName__) and command various arguments for different paging operations like the string "Next","Prev" or "First".

Here is a list of the available command names in Telerik RadListView:


| Fired by button controls within RadListView items |  |
| ------ | ------ |
| __CancelCommandName__ |Represents the Cancel command name. Fires __RadListView.ItemCancelling/RadListView.ItemCancelled__ event and sets __Item.Edit__ to __false__ for the parent Item.|
| __DeleteCommandName__ |Represents the Delete command name. Fires __RadListView.ItemDeleting/RadListView.ItemDeleted__ event. Under .Net 2.x or .Net 3.5 this command can perform automatic delete operation.|
| __UpdateCommandName__ |Represents the Update command name. Fires __RadListView.ItemUpdating/RadListView.ItemUpdated__ event. Under .Net 2.x or .Net 3.5 this command can perform automatic update operation and then set __Item.Edit__ to __false__ .|
| __EditCommandName__ |Represents the Edit command name. Fires __RadListView.ItemEditing/RadListView.ItemEdited__ event. Sets __Item.Edit__ to __true__ .|
| __SelectCommandName__ |Represents the Select command name. Fires __RadListView.SelectedIndexChanged__ event. Sets __Item.Selected__ to __true__ .|
| __DeselectCommandName__ |Represents the Deselect command name. Fires __RadListView.SelectedIndexChanged__ event. __Sets Item.Selected__ to __false__ .|
| __InitInsertCommandName__ |Represents the InitInsert command name. Fires __RadListView.ItemCommand__ event and renders the __InsertTemplate__ defined for the RadListView instance|
| __PerformInsertCommandName__ |Represents the PerformInsert command name. Fires __RadListView.ItemInserting/RadListView.ItemInserted__ event. Under .Net 2.x and NET 3.5 this command can perform automatic insert operation and close the insert item.|
| __RebindCommandName__ |Represents the Rebind command name. Forces __RadListView.Rebind()__ method execution|
| __SortCommandName__ |Represents the Sort command name.Fires __RadListView.Sorting__ event. Can be raised by link/push/image buttons residing in the RadListView body when its __AllowSorting__ property is set to true. Their __CommandName__ should be set to __'Sort'__ and __CommandArgument__ must match the name of the underlying source field to be sorted (for example ContactName for Customers Northwind table).|


| Fired by button controls or RadDataPager when attached to RadListView |  |
| ------ | ------ |
| __PageCommandName__ |Represents the Page command name.Fires the __RadListView.PageIndexChanged__ event. Can be raised by link/push/image buttons residing in the RadListView body when its __AllowPaging__ property is set to true or by RadDataPager. Their __CommandName__ should be set to __'Page'__ and __CommandArgument__ must match one of the values from the second table below. See also:[RadDataPager Overview](http://www.telerik.com/help/aspnet-ajax/datapager-overview.html)|
| __ChangePageSizeCommandName__ |Represents the ChangePageSize command name. Fires __RadListView.PageSizeChanged__ event. Can be raised by link/push/image buttons residing in the RadListView body when its __AllowPaging__ property is set to true or by RadDataPager. Their __CommandName__ should be set to __'ChangePageSize'__ and __CommandArgument__ must be the actual number representing the new page size that will be set.|

Furthermore, here are the internally recognized command arguments you can check:


| Paging command arguments |  |
| ------ | ------ |
| __First__ |Indicates that the end user chose to navigate to the first page in the listview|
| __Next__ |Indicates that the end user chose to navigate to the next page in the listview|
| __Prev__ |Indicates that the end user chose to navigate to the previous page in the listview|
| __Last__ |Indicates that the end user chose to navigate to the last page in the listview|
| __<NumericValue>__ |<NumericValue> should be replaced with number that points to the page to which the control should navigate to|
