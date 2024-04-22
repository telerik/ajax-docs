---
title: Call RadConfirm from code behind
description: Learn to call RadConfirm from code behind. Check it out!
page_title: Call RadConfirm from code behind
slug: common-call-radconfirm-from-code-behind
tags: radconfirm, code-behind, call radconfirm
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Telerik UI for ASP.NET AJAX</td>
		</tr>
	</tbody>
</table>

## Description

The project demonstrates how to call a RadConfirm from code behind and how to retrieve its response in server side. The RadConfirm is shown by following the similar approach described in the [Alert, Confirm and Prompt](https://demos.telerik.com/aspnet-ajax/window/examples/browserdialogboxes/defaultcs.aspx) article, and uses AjaxRequests to pass the result to server.

## Solution

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" OnAjaxRequest="RadAjaxManager1_AjaxRequest">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="RadAjaxManager1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="Label1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>

<telerik:RadWindowManager ID="RadWindowManager1" runat="server" />

<asp:Button ID="Button2" runat="server" Text="Button" OnClick="Button2_Click" />
<br />
<asp:Label ID="Label1" runat="server" Text=""></asp:Label>
````

**JavaScript Functions:**

- `callConfirm()`: This function invokes a Telerik confirmation dialog with the message "Are you sure?" and a callback function `confirmCallBackFn`.
- `confirmCallBackFn(arg)`: This function is the callback function for the confirmation dialog. It takes an argument `arg`, which is either true (if the user confirms) or false (if the user cancels). Depending on the user's choice, it sends an AJAX request to the server using `RadAjaxManager1.ajaxRequest()`.

````JavaScript
function callConfirm() {
    radconfirm('Are you sure?', confirmCallBackFn);
}

function confirmCallBackFn(arg) {
    var ajaxManager = $find("<%=RadAjaxManager1.ClientID%>");

    if (arg) {
        ajaxManager.ajaxRequest('ok');
    }
    else {
        ajaxManager.ajaxRequest('cancel');
    }
}
````

When **Button2** is clicked, it registers a startup script to execute `callConfirm()` function when the page loads. This means the confirmation dialog will appear automatically after the page loads.

````C#
protected void Button2_Click(object sender, EventArgs e)
{
    string radalertscript = "<script language='javascript'>function f(){callConfirm(); Sys.Application.remove_load(f);}; Sys.Application.add_load(f);</script>";
    Page.ClientScript.RegisterStartupScript(this.GetType(), "radalert", radalertscript);
}

protected void RadAjaxManager1_AjaxRequest(object sender, AjaxRequestEventArgs e)
{
    if (e.Argument.ToString() == "ok")
    {
        Label1.Text = "OK";
    }
    else
    {
        Label1.Text = "Cancel";
    }
}
````
````VB
Protected Sub Button2_Click(ByVal sender As Object, ByVal e As EventArgs)
    Dim radalertscript As String = "<script language='javascript'>function f(){callConfirm(); Sys.Application.remove_load(f);}; Sys.Application.add_load(f);</script>"
    Page.ClientScript.RegisterStartupScript(Me.[GetType](), "radalert", radalertscript)
End Sub

Protected Sub RadAjaxManager1_AjaxRequest(ByVal sender As Object, ByVal e As AjaxRequestEventArgs)
    If e.Argument.ToString() = "ok" Then
        Label1.Text = "OK"
    Else
        Label1.Text = "Cancel"
    End If
End Sub
````

  