---
title: Command Reference
page_title: Command Reference | RadListView for ASP.NET AJAX Documentation
description: Command Reference
slug: listview/control-lifecycle/command-reference
tags: command,reference
published: True
position: 2
---

# Command Reference



##  

The ASP.NET page framework provides a technique called event bubbling that allows a child control to propagate events up its containment hierarchy. Event bubbling enables events to be raised from a more convenient location in the controls hierarchy and allows event handlers to be attached to the original control as well as to the control that exposes the bubbled event.

When an event bubbles from a child control, RadListView will fire **ItemCommand** event. A child control (such as a **Button** server control) raises a bubble event if you set any value in **CommandName** property.

>note Merely the **MS**  **LinkButton, MS Button** and **MS ImageButton** controls have **CommandName** property and can trigger the event bubbling mechanism of the listview.
>


For example the command name is "DoInsert" , then RadListView will fire **ItemCommand** event and the event argument of the handler function (generally the "e" variable ) will have the same command name , i.e. "**DoInsert**" as a value for the **e.CommandName** property. Moreover, the **e.Item** argument will be a reference to the **Item** which is the parent of the control raised the bubble event (i.e. the **Item** where the button resides).

Some command names are predefined in RadListView and the control will respond to them automatically (like the value of **RadListView.EditCommandName**constant or **RadListView.SortCommandName**). The integrated paging in RadListView is also based on commands, with **CommandName** ="**Page**" (or **RadListView.PageCommandName**) and command various arguments for different paging operations like the string "Next","Prev" or "First".

Here is a list of the available command names in Telerik RadListView:


| Fired by button controls within RadListView items |  |
| ------ | ------ |
| **CancelCommandName** |Represents the Cancel command name. Fires **RadListView.ItemCancelling/RadListView.ItemCancelled** event and sets **Item.Edit** to **false** for the parent Item.|
| **DeleteCommandName** |Represents the Delete command name. Fires **RadListView.ItemDeleting/RadListView.ItemDeleted** event. Under .Net 2.x or .Net 3.5 this command can perform automatic delete operation.|
| **UpdateCommandName** |Represents the Update command name. Fires **RadListView.ItemUpdating/RadListView.ItemUpdated** event. Under .Net 2.x or .Net 3.5 this command can perform automatic update operation and then set **Item.Edit** to **false** .|
| **EditCommandName** |Represents the Edit command name. Fires **RadListView.ItemEditing/RadListView.ItemEdited** event. Sets **Item.Edit** to **true** .|
| **SelectCommandName** |Represents the Select command name. Fires **RadListView.SelectedIndexChanged** event. Sets **Item.Selected** to **true** .|
| **DeselectCommandName** |Represents the Deselect command name. Fires **RadListView.SelectedIndexChanged** event. **Sets Item.Selected** to **false** .|
| **InitInsertCommandName** |Represents the InitInsert command name. Fires **RadListView.ItemCommand** event and renders the **InsertTemplate** defined for the RadListView instance|
| **PerformInsertCommandName** |Represents the PerformInsert command name. Fires **RadListView.ItemInserting/RadListView.ItemInserted** event. Under .Net 2.x and NET 3.5 this command can perform automatic insert operation and close the insert item.|
| **RebindCommandName** |Represents the Rebind command name. Forces **RadListView.Rebind()** method execution|
| **SortCommandName** |Represents the Sort command name.Fires **RadListView.Sorting** event. Can be raised by link/push/image buttons residing in the RadListView body when its **AllowSorting** property is set to true. Their **CommandName** should be set to **'Sort'** and **CommandArgument** must match the name of the underlying source field to be sorted (for example ContactName for Customers Northwind table).|


| Fired by button controls or RadDataPager when attached to RadListView |  |
| ------ | ------ |
| **PageCommandName** |Represents the Page command name.Fires the **RadListView.PageIndexChanged** event. Can be raised by link/push/image buttons residing in the RadListView body when its **AllowPaging** property is set to true or by RadDataPager. Their **CommandName** should be set to **'Page'** and **CommandArgument** must match one of the values from the second table below. See also:[RadDataPager Overview](http://www.telerik.com/help/aspnet-ajax/datapager-overview.html)|
| **ChangePageSizeCommandName** |Represents the ChangePageSize command name. Fires **RadListView.PageSizeChanged** event. Can be raised by link/push/image buttons residing in the RadListView body when its **AllowPaging** property is set to true or by RadDataPager. Their **CommandName** should be set to **'ChangePageSize'** and **CommandArgument** must be the actual number representing the new page size that will be set.|

Furthermore, here are the internally recognized command arguments you can check:


| Paging command arguments |  |
| ------ | ------ |
| **First** |Indicates that the end user chose to navigate to the first page in the listview|
| **Next** |Indicates that the end user chose to navigate to the next page in the listview|
| **Prev** |Indicates that the end user chose to navigate to the previous page in the listview|
| **Last** |Indicates that the end user chose to navigate to the last page in the listview|
| **<NumericValue>** |<NumericValue> should be replaced with number that points to the page to which the control should navigate to|
