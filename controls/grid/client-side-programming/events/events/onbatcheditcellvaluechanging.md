---
title: OnBatchEditCellValueChanging
page_title: OnBatchEditCellValueChanging | RadGrid for ASP.NET AJAX Documentation
description: OnBatchEditCellValueChanging
slug: grid/client-side-programming/events/events/onbatcheditcellvaluechanging
tags: onbatcheditcellvaluechanging
published: True
position: 81
---

# OnBatchEditCellValueChanging



## 

OnBatchEditCellValueChanging

This event is fired when a cell's value is being changed


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **cell** - gets the currently edited cell **row** - gets the currently edited row **column** - gets the currently edited column **columnUniqueName** - gets the UniqueName of the edited column **tableView** - gets the TableView in which the edited item is located **cell value** - gets the cell value **editor value** - gets the editor value **canceled** -returns a value indicating whether the event is canceled|
| **Can be canceled** |Yes, set args.set_cancel(true) to cancel|

Example:

````ASP.NET
<telerik:radgrid id="RadGrid1" datasourceid="SqlDataSource1">
    <MasterTableView EditMode="Batch">
    </MasterTableView>
    <ClientSettings>
          <ClientEvents OnBatchEditCellValueChanging="BatchEditCellValueChanging"/>
    </ClientSettings>
</telerik:radgrid>
````



````JavaScript
function BatchEditCellValueChanging(sender, args) {
    var row = args.get_row();
    var cell = args.get_cell();
    var tableView = args.get_tableView();
    var column = args.get_column();
    var columnUniqueName = args.get_columnUniqueName();
    var editorValue = args.get_editorValue();
    var cellValue = args.get_cellValue();
    var isCanceled = args.get_cancel();
}
````


