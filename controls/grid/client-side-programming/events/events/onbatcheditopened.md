---
title: OnBatchEditOpened
page_title: OnBatchEditOpened | UI for ASP.NET AJAX Documentation
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


