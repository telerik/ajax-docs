---
title: How to Disable Particular Cell or Particular Row in RadGrid BatchEditing
description: How to Disable a Specific Cell or Row in RadGrid BatchEditing
type: how-to
page_title: Disabling Specific Cell of Specific Row in RadGrid BatchEditing
slug: grid-disable-particular-cells-or-rows-in-batch-editing
position: 
tags: 
ticketid: 1453581
res_type: kb
---

## Environment
<table>
	<tbody>
		<tr>
			<td>Product Version</td>
			<td>2019.3.1023</td>
		</tr>
		<tr>
			<td>Product</td>
			<td>RadGrid for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>


## Description

Batch editing is a powerful editing mode in RadGrid. Although, it is necessary to restrict some user editing in Batch Editing. For example, disabling editing for existing rows or a specific column my be sometimes necessary.

The below GIF displays the user experience when adding multiple rows and disabling editing of existing items.

![Disabling Editing by Row or Column](images/grid-disable_batchediting_for_existing_items.gif)

## Solution

Use the provided **OnBatchEditOpening** Client-side API and a little custom logic to create the solution. See the below steps and code snippet for more details.

### General Steps

1. Get the master table view from the sender parameter.
1. Get all the data items from the master table view.
1. Iterate the data items.
1. During iteration, only cancel existing items with an index greater than or equal to 0. New items will always have an item index 0f -1
1. Confirm the item is the item being edited by comparing the data item id with the args parameter id. 
1. Optionally, if the goal is to disable editing for a specific column use the **get_columnUniqueName** args method to select the specifc column.
1. Finally, cancel the edit.

### Code snippet

````JavaScript
function OnBatchEditOpening(sender, args) {
    var masterTableView = sender.get_masterTableView();
    var dataitems = masterTableView.get_dataItems();
    for (var i = 0; i < dataitems.length; i++) {
        if (dataitems[i]._itemIndex >= 0) {
            if (dataitems[i].get_id() === args.get_row().id) {
                if (args.get_columnUniqueName() === "ProductName") {
                    args.set_cancel(true);
                }
            }
        }
    }
}
````



## See Also

*	[OnBatchEditOpening API](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/client-side-programming/events/onbatcheditopening)
*	[Client-side GridDataItem Object API](https://docs.telerik.com/devtools/aspnet-ajax/controls/grid/client-side-programming/griddataitem-object/griddataitem-class-members)
*	[Disable a row based on a column value in batch edit mode forum post](https://www.telerik.com/forums/disable-a-row-based-on-column-value-in-batch-edit-mode)
*	[Prevent rows from edit based on a condition forum post](https://www.telerik.com/forums/radgrid-batchedit-prevent-rows-from-edit-based-on-acondition)
*	[Disable particular cells in batch editing forum post](https://www.telerik.com/forums/disable-particular-cells-in-batchedit-grid#UBXY4KYb-UKprr9vxTcKng)