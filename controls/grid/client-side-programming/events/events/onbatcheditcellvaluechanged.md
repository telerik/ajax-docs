---
title: OnBatchEditCellValueChanged
page_title: OnBatchEditCellValueChanged | RadGrid for ASP.NET AJAX Documentation
description: OnBatchEditCellValueChanged
slug: grid/client-side-programming/events/events/onbatcheditcellvaluechanged
tags: onbatcheditcellvaluechanged
published: True
position: 80
---

# OnBatchEditCellValueChanged



## 

OnBatchEditCellValueChanged

This event is fired once a cell has been edited.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **cell** - gets the currently edited cell **row** - gets the currently edited row **column** - gets the currently edited column **columnUniqueName** - gets the UniqueName of the edited column **tableView** - gets the TableView in which the edited item is located **cell value** - gets the cell value **editor value** - gets the editor value|
| **Can be canceled** |No|

Example:

````ASP.NET
	        <telerik:radgrid id="RadGrid1" datasourceid="SqlDataSource1">
	            <MasterTableView EditMode="Batch">
	            </MasterTableView>
	            <ClientSettings>
	                   <ClientEvents OnBatchEditCellValueChanged="BatchEditCellValueChanged"/>
	            </ClientSettings>
	        </telerik:radgrid>
````



````JavaScript
	        function BatchEditCellValueChanged(sender, args) {
	            var row = args.get_row();
	            var cell = args.get_cell();
	            var tableView = args.get_tableView();
	            var column = args.get_column();
	            var columnUniqueName = args.get_columnUniqueName();
	            var editorValue = args.get_editorValue();
	            var cellValue = args.get_cellValue();
	        }
````


