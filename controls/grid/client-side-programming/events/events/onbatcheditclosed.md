---
title: OnBatchEditClosed
page_title: OnBatchEditClosed | UI for ASP.NET AJAX Documentation
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


|  __Fired by__  | RadGrid |
| ------ | ------ |
| __Arguments__ | __cell__ - gets the currently edited cell __row__ - gets the currently edited row __column__ - gets the currently edited column __columnUniqueName__ - gets the UniqueName of the edited column __tableView__ - gets the TableView in which the edited item is located|
| __Can be canceled__ |No|

Example:

````ASPNET
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


