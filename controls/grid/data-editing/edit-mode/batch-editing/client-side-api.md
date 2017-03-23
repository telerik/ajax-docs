---
title: Client-side API
page_title: Batch Editing Client-side API | RadGrid for ASP.NET AJAX Documentation
description: Batch Editing Client-side API
slug: grid/data-editing/edit-mode/batch-editing/client-side-api
tags: batch,editing,client-side,api
published: True
position: 3
---

# Batch Editing Client-side API


The **Batch Editing** client-side API exposes a number of methods which provide more control over the editing process, let you get/set cell values and open/close cells. You can see a list of the methods available with **Batch Editing** in **Table 1**.

To use these methods, you need a reference to the **Batch Editing Manager** object first. You can get it from the grid object:

````JavaScript
var grid = $find("<%=RadGrid1.ClientID%>");
var batchEditingManager = grid.get_batchEditingManager();
````

The grid object is the first argument to all of its client-side handlers so you can use it without hardcoding IDs:

````ASP.NET
	<ClientSettings>
		<ClientEvents OnBatchEditOpened="OnBatchEditOpened" />
	</ClientSettings>
</telerik:RadGrid>
<script>
function OnBatchEditOpened(sender, args) {
	var batchEditingManager = sender.get_batchEditingManager();
}
</script>
````

>caption Table 1: Batch Editing Client-side API methods

| Name | Parameters | Return Type | Description |
|---|---|---|---|
| addNewRecord(tableView) | GridTableView |  | Adds a new record to the grid. |
| deleteRecord(tableView,row) | GridTableView, `<tr>` element |  | Removes the specified record from the table. |
| saveChanges(tableView) | GridTableView |  | Sends a request to the server to save the changes made in the specified **GridTableView**. |
| saveAllChanges |  |  | Sends a request to the server in order to save all changes made from the user so far. |
| saveTableChanges(tableViews) | GridTableView[] |  | Sends a request to the server to save the changes for the **GridTableViews** passed in the arguments. The method expects an array of **GridTableView** objects. |
| cancelChanges(tableView) | GridTableView |  | Sends a request to the server to cancel all unsaved changes made so far. |
| openCellForEdit(cell) | `<td>` element |  | Opens the specified cell for editing. |
| openRowForEdit(row) | `<tr>` element |  | Opens the specified row for edit (opens all editable cells in the row for edit). |
| getCellValue(cell) | `<td>` element | string | Returns the value of the respective cell. |
| changeCellValue(cell, newCellValue) | `<td>` element, value |  | Assigns a value to the respective cell. |
| get_currentlyEditedCell | `<td>` element |  | Returns the element of the currently edited cell. This method should be used when **EditType** is set to **Cell**. |
| get_currentlyEditedRow | `<tr>` element |  | Returns the element of the currently edited row. This method should be used when **EditType** is set to **Row**. |



When firing grid commands by using the **fireCommand** method some commands are detected, canceled and instead their corresponding batch editing client-side functions are called. Below a list of the handled commands:


| Fired Command | Corresponding Batch Edit Command |
|---|---|
| Cancel, CancelAll | cancelChanges |
| Delete | deleteRecord |
| Edit | openRowForEdit |
| InitInsert | addNewRecord |
| PerformInsert, Update, UpdateEdited | saveChanges |



Additionally, you could subscribe to the [OnBatchEditCellValueChanging]({%slug grid/client-side-programming/events/onbatcheditcellvaluechanging%}) event to access the new value before they are applied, and cancel the action if necessary. The [OnBatchEditCellValueChanged]({%slug grid/client-side-programming/events/onbatcheditcellvaluechanged%}) event can be used to access the already changed value.




# See Also

 * [Batch Edit Mode Overview]({%slug grid/data-editing/edit-mode/batch-editing/overview%})
 * [Server-Side API]({%slug grid/data-editing/edit-mode/batch-editing/server-side-api%})


