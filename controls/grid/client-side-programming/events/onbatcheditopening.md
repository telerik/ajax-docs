---
title: OnBatchEditOpening
page_title: OnBatchEditOpening - RadGrid
description: Check our Web Forms article about OnBatchEditOpening.
slug: grid/client-side-programming/events/onbatcheditopening
tags: onbatcheditopening
published: True
position: 85
---

# OnBatchEditOpening

This event is fired when a cell is opening for edit. You can prevent the cell from opening by cancelling it.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **cell** - gets the currently edited cell **row** - gets the currently edited row **column** - gets the currently edited column **columnUniqueName** - gets the UniqueName of the edited column **tableView** - gets the TableView in which the edited item is located **canceled** -returns a value indicating whether the event is canceled|
| **Can be canceled** |Yes, set args.set_cancel(true) to cancel|

Example:

````ASP.NET
<telerik:radgrid id="RadGrid1" datasourceid="SqlDataSource1">
    <MasterTableView EditMode="Batch">
    </MasterTableView>
    <ClientSettings>
        <ClientEvents OnBatchEditOpening="BatchEditOpening"/>
    </ClientSettings>
</telerik:radgrid>
````

````JavaScript
function BatchEditOpening(sender, args) {
    var row = args.get_row();
    var cell = args.get_cell();
    var tableView = args.get_tableView();
    var column = args.get_column();
    var columnUniqueName = args.get_columnUniqueName();
    var isCanceled = args.get_cancel();
}
````

>note In some custom specific scenarios with Templates and Batch editing, in addition to using `set_cancel(true)` in this event, you might have to use it inside other events as well - like OnBatchEditGetCellValue, OnBatchEditSetEditorValue, etc.
