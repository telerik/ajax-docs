---
title: OnBatchEditSetEditorValue
page_title: OnBatchEditSetEditorValue | UI for ASP.NET AJAX Documentation
description: OnBatchEditSetEditorValue
slug: grid/client-side-programming/events/events/onbatcheditseteditorvalue
tags: onbatcheditseteditorvalue
published: True
position: 77
---

# OnBatchEditSetEditorValue



## 

OnBatchEditSetEditorValue

This event should be handled when multiple controls which contain an input element are placed inside the EditItemTemplate of a GridTemplateColumn. It should be used for extracting the value from the arguments and assigning it to the correct editor.


|  __Fired by__  | RadGrid |
| ------ | ------ |
| __Arguments__ | __container__ - gets the container in which the editor is placed __cell__ - gets the currently edited cell __row__ - gets the currently edited row __column__ - gets the currently edited column __columnUniqueName__ - gets the UniqueName of the edited column __tableView__ - gets the TableView in which the edited item is located __value__ - gets the editor value __cancel__ - returns a value indicating whether the event is canceled|
| __Can be canceled__ |Yes, set args.set_cancel(true) to cancel|

Example:

````ASPNET
	        <telerik:RadGrid ID="RadGrid1" DataSourceID="SqlDataSource1">
	            <MasterTableView EditMode="Batch">
	            </MasterTableView>
	            <ClientSettings>
	                <ClientEvents OnBatchEditSetEditorValue="BatchEditSetEditorValue"/>
	            </ClientSettings>
	        </telerik:RadGrid>
````



````JavaScript
	        function BatchEditSetEditorValue(sender, args) {
	            var itemContainer = args.get_container();
	            var cell = args.get_cell(); 
	            var row = args.get_row();
	            var column = args.get_column(); 
	            var columnUniqueName = args.get_columnUniqueName();
	            var currentlyEditedTable = args.get_tableView();
	            var editorValue = args.get_value(); 
	            var isEventCanceled = args.get_cancel();
	        }
````


