---
title: OnBatchEditOpened
page_title: OnBatchEditOpened | RadGrid for ASP.NET AJAX Documentation
description: OnBatchEditOpened
slug: grid/client-side-programming/events/events/onbatcheditopened
tags: onbatcheditopened
published: True
position: 84
---

# OnBatchEditOpened



## 

OnBatchEditOpened

This event is fired after a cell is opened for edit.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **cell** - gets the currently edited cell **row** - gets the currently edited row **column** - gets the currently edited column **columnUniqueName** - gets the UniqueName of the edited column **tableView** - gets the TableView in which the edited item is located|
| **Can be canceled** |No|

Example:

````ASP.NET
<telerik:radgrid id="RadGrid1" datasourceid="SqlDataSource1">
    <MasterTableView EditMode="Batch">
    </MasterTableView>
    <ClientSettings>
        <ClientEvents OnBatchEditOpened="BatchEditOpened"/>
    </ClientSettings>
</telerik:radgrid>
````

````JavaScript
function BatchEditOpened(sender, args) {
    var row = args.get_row();
    var cell = args.get_cell();
    var tableView = args.get_tableView();
    var column = args.get_column();
    var columnUniqueName = args.get_columnUniqueName();
}
````


