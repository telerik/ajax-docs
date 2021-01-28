---
title: OnBatchEditSetEditorValue
page_title: OnBatchEditSetEditorValue - RadGrid
description: Check our Web Forms article about OnBatchEditSetEditorValue.
slug: grid/client-side-programming/events/onbatcheditseteditorvalue
tags: onbatcheditseteditorvalue
published: True
position: 77
---

# OnBatchEditSetEditorValue




This event should be handled when multiple controls which contain an input element are placed inside the EditItemTemplate of a GridTemplateColumn. It should be used for extracting the value from the arguments and assigning it to the correct editor.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **container** - gets the container in which the editor is placed **cell** - gets the currently edited cell **row** - gets the currently edited row **column** - gets the currently edited column **columnUniqueName** - gets the UniqueName of the edited column **tableView** - gets the TableView in which the edited item is located **value** - gets the editor value **cancel** - returns a value indicating whether the event is canceled|
| **Can be canceled** |Yes, set args.set_cancel(true) to cancel|

Example:

````ASP.NET
	        <telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" DataSourceID="SqlDataSource1">
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


