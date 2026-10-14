---
title: Get the RadGrid Data Item in the Client-Side OnCommand Event
description: Learn how to retrieve the data item for an Edit or Delete command in the client-side RadGrid OnCommand event.
type: how-to
page_title: Get the RadGrid Data Item from the Client-Side OnCommand Event
slug: grid-get-data-item-from-client-side-oncommand
tags: grid, radgrid, client-side, oncommand, data item, command argument
res_type: kb
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>Telerik UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>2026.3.811</td>
</tr>
</tbody>
</table>

## Description

The client-side `OnCommand` event does not expose the clicked button or a `CommandSource` property. For `Edit` and `Delete` commands, the command argument contains the item index. You can use that index with the client-side table view to retrieve the corresponding data item when the grid uses client-side binding.

## Solution

Register a client-side `OnCommand` handler and use `get_commandArgument()` to retrieve the item index. Then retrieve the item from `get_dataItems()` and call `get_dataItem()`.

````JavaScript
function onCommand(sender, args) {
    var commandName = args.get_commandName();

    if (commandName == "Edit" || commandName == "Delete") {
        var itemIndex = args.get_commandArgument();
        var dataItems = args.get_tableView().get_dataItems();
        var dataItem = dataItems[itemIndex].get_dataItem();

        console.log(dataItem);
    }
}
````

The command argument is an item index, not the clicked button element. If you need the button itself, handle its click separately and resolve the parent row from the DOM. The server-side `CommandSource` and `Item` properties do not have client-side equivalents in `OnCommand`.

For the event API and client-side event registration, see [OnCommand]({%slug grid/client-side-programming/events/oncommand%}).

## See Also

- [Client-Side Binding]({%slug grid/data-binding/client-side-binding/client-side-binding%})
- [GridTableView Class Members]({%slug grid/client-side-programming/gridtableview-object/gridtableview-class-members%})
