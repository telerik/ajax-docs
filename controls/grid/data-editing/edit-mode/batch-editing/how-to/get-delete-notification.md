---
title: Get Delete Notification
page_title: Get Delete Notification - RadGrid
description: Check our Web Forms article about Get Delete Notification.
slug: grid/data-editing/edit-mode/batch-editing/how-to/get-delete-notification
tags: batch,editing,delete,notification
published: True
position: 2
---

# Get Delete Notification

This article describes how to get notification (event) for row deletion in batch editing mode.

The batch editing happens client-side and by default deleted rows are hidden immediately, and this may confuse the user that the delete operation has already completed, but they must press the Save Changes button first.

To show the **end user** that they have changes in the grid, set the **HighlightDeletedRows** property under **BatchEditingSettings** to **true**. It provides a visual indication that the row has been removed, as well as an Undo button.


````ASP.NET
<telerik:RadGrid RenderMode="Lightweight" ID="RadGrid1" runat="server">
    <MasterTableViewEditMode="Batch">
        <BatchEditingSettings HighlightDeletedRows="true" />
````

If you need an event, you can use [OnRowDeleted]({%slug grid/client-side-programming/events/onrowdeleted%}) to show a message to the user (e.g., a hidden `<div>` with a reminder).



# See Also

 * [Client-Side API]({%slug grid/data-editing/edit-mode/batch-editing/client-side-api%})

 * [A function override that can serve as an event](https://www.telerik.com/forums/how-to-capture-a-client-side-delete-row-event-for-a-radgrid-with-batchedit)


