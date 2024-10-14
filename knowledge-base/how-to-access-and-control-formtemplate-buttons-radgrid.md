---
title: Accessing and Controlling FormTemplate Buttons in RadGrid Based on CommandName
description: Learn how to access and display the Insert or Update buttons within a FormTemplate of RadGrid for ASP.NET AJAX, based on the CommandName triggered.
type: how-to
page_title: How to Access and Control FormTemplate Buttons in RadGrid by CommandName
slug: how-to-access-and-control-formtemplate-buttons-radgrid
tags: radgrid, asp.net ajax, formtemplate, commandname, insert, update, buttons
res_type: kb
ticketid: 1667099
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadGrid for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

In a scenario where a RadGrid utilizes CommandItemTemplate buttons alongside a FormTemplate for inserting or updating records, it's necessary to show specific buttons based on the action the user intends to perform (e.g., Insert or Update). This article demonstrates accessing buttons within a FormTemplate based on the CommandName, such as "InitInsert" for initiating an insert action.

This KB article also answers the following questions:

- How do I make the Insert or Update button visible in RadGrid FormTemplate based on the command issued?
- What is the method to access controls within a FormTemplate in RadGrid?
- Can I dynamically show or hide buttons in a RadGrid FormTemplate?

## Solution

To access and manipulate the visibility of Insert or Update buttons within a FormTemplate based on the `CommandName`, use the `FindControl` method to locate these buttons. Below is a step-by-step guide implemented in VB.NET:

1. Handle the `ItemCommand` event of the RadGrid.
2. Check if the event is triggered by an item in edit mode.
3. Use the `FindControl` method to locate the Insert and Update buttons within the FormTemplate.
4. Adjust the visibility of these buttons based on the `CommandName`.

Here is a code snippet that illustrates the process:

````C#
protected void RadGrid1_ItemCommand(object sender, GridCommandEventArgs e)
{
    if (e.Item is GridEditableItem && e.Item.IsInEditMode)
    {
        GridEditableItem item = (GridEditableItem)e.Item;
        RadButton insertButton = (RadButton)item.FindControl("InsertButton");
        RadButton updateButton = (RadButton)item.FindControl("EditButton");

        if (e.CommandName == "PerformInsert")
        {
            if (insertButton != null)
                insertButton.Visible = true;

            if (updateButton != null)
                updateButton.Visible = false;
        }
        else if (e.CommandName == "Edit")
        {
            if (insertButton != null)
                insertButton.Visible = false;

            if (updateButton != null)
                updateButton.Visible = true;
        }
    }
    System.Environment.Exit(0); /* TODO ERROR: Skipped SkippedTokensTrivia */
}
````
````VB
Protected Sub RadGrid1_ItemCommand(ByVal sender As Object, ByVal e As GridCommandEventArgs)
    If TypeOf e.Item Is GridEditableItem AndAlso e.Item.IsInEditMode Then
        Dim item As GridEditableItem = CType(e.Item, GridEditableItem)
        Dim insertButton As RadButton = CType(item.FindControl("InsertButton"), RadButton)
        Dim updateButton As RadButton = CType(item.FindControl("EditButton"), RadButton)

        If e.CommandName = "PerformInsert" Then
            If insertButton IsNot Nothing Then
                insertButton.Visible = True
            End If
            If updateButton IsNot Nothing Then
                updateButton.Visible = False
            End If
        ElseIf e.CommandName = "Edit" Then
            If insertButton IsNot Nothing Then
                insertButton.Visible = False
            End If
            If updateButton IsNot Nothing Then
                updateButton.Visible = True
            End If
        End If
    End If
End Sub
````

Replace `"InsertButton"` and `"EditButton"` with the actual IDs of your Insert and Update buttons within the FormTemplate. This example makes the Insert button visible and the Update button hidden when the `PerformInsert` command is triggered, and vice versa for the `Edit` command.

## See Also

- [Accessing Values and Controls Server-side - RadGrid Documentation](https://www.telerik.com/products/aspnet-ajax/documentation/controls/grid/accessing-values-and-controls/server-side/accessing-controls)
- [How to Get Access to All Controls Inside FormTemplate of RadGrid - Telerik Forums](https://www.telerik.com/forums/how-to-get-access-to-all-controls-inside-formtempate-of-radgrid)
- [Two Different Insert/Edit Forms in Same Grid - Telerik Forums](https://www.telerik.com/forums/two-different-insert-edit-forms-in-same-grid)
