---
title: OnBatchEditClosed
page_title: OnBatchEditClosed | RadGrid for ASP.NET AJAX Documentation
description: OnBatchEditClosed
slug: grid/client-side-programming/events/events/onbatcheditclosed
tags: onbatcheditclosed
published: True
position: 82
---

# OnBatchEditClosed



## 

OnBatchEditClosed

This event is fired after the cell is closed.


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
          <ClientEvents OnBatchEditClosed="BatchEditClosed" />
    </ClientSettings>
</telerik:radgrid>
````



````JavaScript
function BatchEditClosed(sender, args) {
    var row = args.get_row();
    var cell = args.get_cell();
    var tableView = args.get_tableView();
    var column = args.get_column();
    var columnUniqueName = args.get_columnUniqueName();
}
````


