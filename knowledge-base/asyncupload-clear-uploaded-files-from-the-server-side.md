---
title: Clear Uploaded Files From The Server  
description: This article demonstrates how to reset the RadAsyncUpload control to its initial state with no files selected using server-side code.
type: how-to
page_title: Clear Uploaded Files From The Server 
slug: asyncupload-clear-uploaded-files-from-the-server-side
tags: radasyncupload, asp.net ajax, server-side, clear, reset
res_type: kb
ticketid: 1668634
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>RadAsyncUpload for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>All</td>
</tr>
</tbody>
</table>

## Description

I have a [RadAsyncUpload](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/overview) control on an ASP.NET Web form along with other controls. I need to clear out all the controls after some server-side code is called after a button click. For other controls, I can easily set their value to an empty string or their default state. I would like to reset the RadAsyncUpload control to its initial state, with no files selected.

This KB article also answers the following questions:

- How can I reset RadAsyncUpload after submitting the form?
- Is it possible to clear the RadAsyncUpload control using server-side code?
- How to remove all files from RadAsyncUpload from the server-side?

## Solution

To clear the RadAsyncUpload control and reset it to its initial state using server-side code, you can call a JavaScript function that removes the uploaded files from the client-side. This approach involves using a RadButton for postback and a RadAjaxManager to update the controls without a full page postback.

First, define the RadAsyncUpload, RadButton, and RadAjaxManager in your ASPX page as follows:

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="RadButton1">
            <UpdatedControls>
                <telerik:AjaxUpdatedControl ControlID="RadButton1" />
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>

<telerik:RadAsyncUpload ID="RadAsyncUpload1" runat="server"></telerik:RadAsyncUpload>
<telerik:RadButton runat="server" ID="RadButton1" Text="Postback" AutoPostBack="true" OnClick="RadButton1_Click" />
````

Next, add the following JavaScript function to your page. This function uses the client-side API of RadAsyncUpload to clear the files:

````JavaScript
function clearUploadedFiles() {
    let upload = $find("<%= RadAsyncUpload1.ClientID %>");
    upload.deleteAllFileInputs();
}
````

Finally, call this JavaScript function from the server-side event handler of the button click event. Use the `ScriptManager.RegisterStartupScript` method to execute the JavaScript function from the server-side code:

````C#
protected void RadButton1_Click(object sender, EventArgs e)
{
    ScriptManager.RegisterStartupScript(this, GetType(), "key", "clearUploadedFiles();", true);
}
````

By following these steps, you can successfully reset the RadAsyncUpload control to its initial state with no files selected after a server-side event.

## See Also

- [RadAsyncUpload Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/overview)
- [RadAsyncUpload Client-Side Programming](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/client-side-programming/overview)
- [RadAjaxManager Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/ajaxmanager/overview)
