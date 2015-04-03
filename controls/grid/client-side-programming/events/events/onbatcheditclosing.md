---
title: OnBatchEditClosing
page_title: OnBatchEditClosing | UI for ASP.NET AJAX Documentation
description: OnBatchEditClosing
slug: grid/client-side-programming/events/events/onbatcheditclosing
tags: onbatcheditclosing
published: True
position: 83
---

# OnBatchEditClosing



## 

OnBatchEditClosing

This event is fired when a cell is closing.


|  __Fired by__  | RadGrid |
| ------ | ------ |
| __Arguments__ | __cell__ - gets the currently edited cell __row__ - gets the currently edited row __column__ - gets the currently edited column __columnUniqueName__ - gets the UniqueName of the edited column __tableView__ - gets the TableView in which the edited item is located __canceled__ -returns a value indicating whether the event is canceled|
| __Can be canceled__ |Yes, set args.set_cancel(true) to cancel|

Example:

````ASPNET
	        <telerik:radgrid id="RadGrid1" datasourceid="SqlDataSource1">
	            <MasterTableView EditMode="Batch">
	            </MasterTableView>
	            <ClientSettings>
	                 <ClientEvents OnBatchEditClosing="BatchEditClosing" />
	            </ClientSettings>
	        </telerik:radgrid>
````



````JavaScript
	        function BatchEditClosing(sender, args) {
	            var row = args.get_row();
	            var cell = args.get_cell();
	            var tableView = args.get_tableView();
	            var column = args.get_column();
	            var columnUniqueName = args.get_columnUniqueName();
	            var isCanceled = args.get_cancel();
	        }
````


