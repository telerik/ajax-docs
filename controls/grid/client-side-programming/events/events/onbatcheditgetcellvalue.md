---
title: OnBatchEditGetCellValue
page_title: OnBatchEditGetCellValue | RadGrid for ASP.NET AJAX Documentation
description: OnBatchEditGetCellValue
slug: grid/client-side-programming/events/events/onbatcheditgetcellvalue
tags: onbatcheditgetcellvalue
published: True
position: 79
---

# OnBatchEditGetCellValue



## 

OnBatchEditGetCellValue

This event should be handled when multiple controls which contain an input element are placed inside the EditItemTemplate of a GridTemplateColumn. It should be used for extracting the value from the cell and passing it to the arguments. Later this value is used for populating the editor.


|  **Fired by**  | RadGrid |
| ------ | ------ |
| **Arguments** | **container** - gets the container of the edited cell **cell** - gets the currently edited cell **row** - gets the currently edited row **column** - gets the currently edited column **columnUniqueName** - gets the UniqueName of the edited column **tableView** - gets the TableView in which the edited item is located **value** - gets the cell value **cancel** - returns a value indicating whether the event is canceled|
| **Can be canceled** |Yes, set args.set_cancel(true) to cancel|

Example:

````ASP.NET
	        function BatchEditGetCellValue(sender, args) {
	            var itemContainer = args.get_container(); 
	            var cell = args.get_cell(); 
	            var row = args.get_row();
	            var column = args.get_column();
	            var columnUniqueName = args.get_columnUniqueName();
	            var currentlyEditedTable = args.get_tableView();
	            var cellValue = args.get_value();
	            var isEventCanceled = args.get_cancel();
	        }
````



````JavaScript
	        <telerik:RadGrid ID="RadGrid1" DataSourceID="SqlDataSource1">
	            <MasterTableView EditMode="Batch">
	            <ClientSettings>
	                <ClientEvents OnBatchEditGetCellValue="BatchEditGetCellValue"/>
	            </ClientSettings>
	        </telerik:RadGrid>
````


