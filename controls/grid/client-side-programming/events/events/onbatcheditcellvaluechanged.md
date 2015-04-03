---
title: OnBatchEditCellValueChanged
page_title: OnBatchEditCellValueChanged | UI for ASP.NET AJAX Documentation
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


|  __Fired by__  | RadGrid |
| ------ | ------ |
| __Arguments__ | __cell__ - gets the currently edited cell __row__ - gets the currently edited row __column__ - gets the currently edited column __columnUniqueName__ - gets the UniqueName of the edited column __tableView__ - gets the TableView in which the edited item is located __cell value__ - gets the cell value __editor value__ - gets the editor value|
| __Can be canceled__ |No|

Example:

````ASPNET
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


