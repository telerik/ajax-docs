---
title: Error Handling for Automatic Operations
page_title: Error Handling for Automatic Operations - RadGrid
description: Learn how to handle errors raised by automatic insert, update, and delete operations in RadGrid for ASP.NET AJAX.
slug: grid/troubleshooting/error-handling-automatic-operations
components: ["grid"]
tags: error,handling,automatic,operations
published: True
position: 3
---

# Error Handling for Automatic Operations

When a data source performs an automatic insert, update, or delete operation, **RadGrid** raises an event after the operation. Handle the event to inspect the exception and decide whether the grid should keep the item in edit or insert mode.

## Handle Exceptions

RadGrid raises the following events after automatic operations:

- **ItemUpdated**
- **ItemInserted**
- **ItemDeleted**

When an operation fails, the event argument's `Exception` property contains the exception. Set `ExceptionHandled` to `true` after displaying or logging the error. For an update or insert error, set `KeepInEditMode` or `KeepInInsertMode` to `true` when you want the user to correct the values and try again.

> caption Handle exceptions raised by automatic insert, update, and delete operations

````C#
protected void RadGrid1_ItemUpdated(object source, Telerik.Web.UI.GridUpdatedEventArgs e)
{
    if (e.Exception != null)
    {
        e.KeepInEditMode = true;
        e.ExceptionHandled = true;
        DisplayMessage("Product " + e.Item["ProductID"].Text + " cannot be updated. Reason: " + e.Exception.Message);
    }
    else
    {
        DisplayMessage("Product " + e.Item["ProductID"].Text + " updated");
    }
}
protected void RadGrid1_ItemInserted(object source, GridInsertedEventArgs e)
{
    if (e.Exception != null)
    {
        e.ExceptionHandled = true;
        e.KeepInInsertMode = true;
        DisplayMessage("Product cannot be inserted. Reason: " + e.Exception.Message);
    }
    else
    {
        DisplayMessage("Product inserted");
    }
}
protected void RadGrid1_ItemDeleted(object source, GridDeletedEventArgs e)
{
    if (e.Exception != null)
    {
        e.ExceptionHandled = true;
        DisplayMessage("Product " + e.Item["ProductID"].Text + " cannot be deleted. Reason: " + e.Exception.Message);
    }
    else
    {
        DisplayMessage("Product " + e.Item["ProductID"].Text + " deleted");
    }
}

private void DisplayMessage(string text)
{
    RadGrid1.Controls.Add(new LiteralControl(text));
}
````
````VB
Protected Sub RadGrid1_ItemUpdated(ByVal source As Object, ByVal e As Telerik.Web.UI.GridUpdatedEventArgs) Handles RadGrid1.ItemUpdated
    If Not (e.Exception Is Nothing) Then
        e.KeepInEditMode = True
        e.ExceptionHandled = True
        DisplayMessage("Product " & e.Item("ProductID").Text & " cannot be updated. Reason: " & e.Exception.Message)
    Else
        DisplayMessage("Product " & e.Item("ProductID").Text & " updated")
    End If
End Sub 'RadGrid1_ItemUpdated

Protected Sub RadGrid1_ItemInserted(ByVal source As Object, ByVal e As GridInsertedEventArgs) Handles RadGrid1.ItemInserted
    If Not (e.Exception Is Nothing) Then
        e.ExceptionHandled = True
        e.KeepInInsertMode = True
        DisplayMessage("Product cannot be inserted. Reason: " & e.Exception.Message)
    Else
        DisplayMessage("Product inserted")
    End If
End Sub 'RadGrid1_ItemInserted

Protected Sub RadGrid1_ItemDeleted(ByVal source As Object, ByVal e As GridDeletedEventArgs) Handles RadGrid1.ItemDeleted
    If Not (e.Exception Is Nothing) Then
        e.ExceptionHandled = True
        DisplayMessage("Product " + e.Item("ProductID").Text + " cannot be deleted. Reason: " + e.Exception.Message)
    Else
        DisplayMessage("Product " + e.Item("ProductID").Text + " deleted")
    End If
End Sub 'RadGrid1_ItemDeleted

Private Sub DisplayMessage(ByVal text As String)
    RadGrid1.Controls.Add(New LiteralControl(text))
End Sub 'DisplayMessage
````

The default behavior is to let the data source raise the exception. Handle the corresponding event when you want to prevent the exception from propagating and present a message in the page.

## See Also

- [Automatic data source operations]({%slug grid/data-editing/automatic-datasource-operations%})
- [Controlling automatic operations]({%slug grid/data-editing/api-for-controlling-the-automatic-operations%})

