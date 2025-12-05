---
title: How to completely disable an ASP LinkButton
description: For some reason when a Linkbutton is disabled by Enabled="false", and I am still able to click it and its OnClientClick event to be fired.
type: troubleshooting
page_title: Disabling Link Button Completely
slug: common-disable-link-button-completely
position: 
tags: 
ticketid: 1602275
res_type: kb
---

## Environment
<table>
    <tbody>
        <tr>
            <td>Product</td>
            <td>Progress® Telerik® UI for ASP.NET AJAX</td>
        </tr>
    </tbody>
</table>


## Description
I have a link button in my aspx file:

````ASPX
<asp:LinkButton ID="LinkButton1" Font-Size="X-Small" TabIndex="-1" Height="25px" Width="90px" Visible="false" BorderColor="WhiteSmoke" BackColor="#5A8EC1" BorderStyle="Solid" ForeColor="White" OnClientClick="approveConfirm();return false;"  runat="server" Font-Names="Verdana">APPROVE</asp:LinkButton>
````

Below is approveConfirm() function:

````JavaScript
<script type="text/javascript">
    function approveConfirm() {
        if (radconfirm("Are you sure you want to Approve and ready to proceed?", callbackFn2, 400, 200, null)) {
            return false;
        }
        else {
            return true;
        }
    }
    function callbackFn2(arg) {
        var ajaxManager = $find("<%=RadAjaxManager1.ClientID%>");
        if (arg) {
            ajaxManager.ajaxRequest('okApprove');
        }
        else {
            ajaxManager.ajaxRequest('notApprove');
        }
    }
</script>
````
 
For some reason when the Linkbutton is disabled (Enabled="false"), I am still able to click on this button, and the confirm popup message appears. I need the confirm popup message to appear only when the button is enabled.

## Solution
The discussed behavior is ASP.NET specific and will happen eveb with a standard window.confirm().

You can find out how to completely disable the link button in this resource:

* [How to completely disable the link button?](https://stackoverflow.com/questions/9682833/how-to-completely-disable-the-link-button)

Here is an example:

ASPX

````ASPX
<telerik:RadWindowManager ID="RadWindowManager1" runat="server">
</telerik:RadWindowManager>
<asp:LinkButton ID="LinkButton1" Font-Size="X-Small" TabIndex="-1" Enabled="false"
    Height="25px" Width="90px" Visible="true" BorderColor="WhiteSmoke"
    BackColor="#5A8EC1" BorderStyle="Solid" ForeColor="White"
    OnClientClick="approveConfirm();return false;" runat="server" Font-Names="Verdana">APPROVE</asp:LinkButton>
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server"></telerik:RadAjaxManager>
<script type="text/javascript">
    function approveConfirm() {
        alert("click is fired even when the button is disabled!");
        if (radconfirm("Are you sure you want to Approve and ready to proceed?", callbackFn2, 400, 200, null)) {
            return false;
        }
        else {
            return true;
        }

    }
    function callbackFn2(arg) {

        var ajaxManager = $find("<%=RadAjaxManager1.ClientID%>");
        if (arg) {
            ajaxManager.ajaxRequest('okApprove');
        }
        else {
            ajaxManager.ajaxRequest('notApprove');
        }
    }
</script>
````

Codebehind

````C#       
        protected void Page_Load(object sender, EventArgs e)
        {
            DisableLinkButton(LinkButton1);
        }

        public static void DisableLinkButton(LinkButton linkButton)
        {
            linkButton.Attributes.Remove("href");
            linkButton.Attributes.CssStyle[HtmlTextWriterStyle.Color] = "gray";
            linkButton.Attributes.CssStyle[HtmlTextWriterStyle.Cursor] = "default";
            if (linkButton.Enabled != false)
            {
                linkButton.Enabled = false;
            }

            if (linkButton.OnClientClick != null)
            {
                linkButton.OnClientClick = null;
            }
        }
````
````VB
    Protected Sub Page_Load(ByVal sender As Object, ByVal e As EventArgs)
        DisableLinkButton(LinkButton1)
    End Sub

    Public Shared Sub DisableLinkButton(ByVal linkButton As LinkButton)
        linkButton.Attributes.Remove("href")
        linkButton.Attributes.CssStyle(HtmlTextWriterStyle.Color) = "gray"
        linkButton.Attributes.CssStyle(HtmlTextWriterStyle.Cursor) = "default"

        If linkButton.Enabled <> False Then
            linkButton.Enabled = False
        End If

        If linkButton.OnClientClick IsNot Nothing Then
            linkButton.OnClientClick = Nothing
        End If
    End Sub
````

