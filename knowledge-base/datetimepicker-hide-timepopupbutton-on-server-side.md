---
title: Hide TimePopupButton on Server-side
description: Learn how to hide TimePopupButton on Server-side
type: how-to
page_title: Hide TimePopupButton on Server-side. | DateTimePicker
slug: datetimepicker-hide-timepopupbutton-on-server-side
res_type: kb
ticketid: 1636615
---

## Environment

<table>
    <tr>
        <td>Product</td>
        <td>Telerik WebForms DateTimePicker for ASP.NET AJAX</td>
    </tr>
</table>

## Description 

Sometimes, one might want to hide the ***TimePopupButton*** from the **DateTimePicker** on the Server-side.

## Solution

In order to hide the ***TimePopupButton*** on the Server-side, you can find the button and set its `Visible` property to `false`.

Example

````C#
private void HideOnServer()
{
    TimePopupButton timePopupButton = DateTimePicker1.Controls[0] as TimePopupButton; // Get the TimePopup control 

    if (timePopupButton != null)
    {
        timePopupButton.Visible = false;
    }
}
````
````VB
Private Sub HideOnServer()
    Dim timePopupButton As TimePopupButton = TryCast(DateTimePicker1.Controls(0), TimePopupButton)

    If timePopupButton IsNot Nothing Then
        timePopupButton.Visible = False
    End If
End Sub
````





