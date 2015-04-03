---
title: OnBatchEditCellValueChanging
page_title: OnBatchEditCellValueChanging | UI for ASP.NET AJAX Documentation
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


|  __Fired by__  | RadGrid |
| ------ | ------ |
| __Arguments__ | __cell__ - gets the currently edited cell __row__ - gets the currently edited row __column__ - gets the currently edited column __columnUniqueName__ - gets the UniqueName of the edited column __tableView__ - gets the TableView in which the edited item is located __cell value__ - gets the cell value __editor value__ - gets the editor value __canceled__ -returns a value indicating whether the event is canceled|
| __Can be canceled__ |Yes, set args.set_cancel(true) to cancel|

Example:

````ASPNET
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


