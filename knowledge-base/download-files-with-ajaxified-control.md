---
title: Download Files with an Ajaxified Control When Using the AjaxManager
page_title: Download Files with an Ajaxified Control When Using the AjaxManager
description: "Learn how to download files with an ajaxified control with the Telerik AjaxManager control."
slug: ajaxmanager/how-to/download-files-with-ajaxified-control
previous_url: ajax/how-to/download-files-with-ajaxified-control, controls/ajaxmanager/how-to/download-files-with-ajaxified-control
tags: telerik, asp, net, ajax, manager, download, files, with, ajaxified, control
published: True
type: how-to
category: knowledge-base
res_type: kb
---

## Environment

<table>
	<tbody>
		<tr>
			<td>Product</td>
			<td>Progress® Telerik® UI for ASP.NET AJAX AjaxManager</td>
		</tr>
	</tbody>
</table>

## Description

How can I download files with an ajaxified control with the Telerik AjaxManager without exposing files publicly?

## Solution

`XmlHttpRequest` cannot trigger a browser file download, so `Response.WriteFile` and `Response.TransmitFile` do not work inside an AJAX request. There are two secure approaches depending on your scenario.

>warning Using `ResponseScripts` to redirect via `window.location.href` to a static file path requires the file to be in a publicly accessible folder. Any user who can guess or enumerate the URL can download it without authentication. Use one of the solutions below instead.

### Solution 1 — Disable AJAX for the Download Postback (Recommended)

Opt out of AJAX for the specific control that triggers the download using the `OnRequestStart` client event. This turns that single postback into a regular one so `Response.TransmitFile` works normally. Files can be stored in `App_Data` or any folder not served by IIS — they are never publicly accessible.

````ASP.NET
<telerik:RadAjaxPanel runat="server" ID="RadAjaxPanel1"
    ClientEvents-OnRequestStart="onRequestStart">

    <%-- your other ajaxified controls --%>

    <asp:Button runat="server" ID="btnDownload" Text="Download"
        OnClick="btnDownload_Click" />

</telerik:RadAjaxPanel>

<script type="text/javascript">
    function onRequestStart(sender, args) {
        if (args.get_eventTarget().indexOf("btnDownload") >= 0) {
            args.set_enableAjax(false);
        }
    }
</script>
````

````C#
protected void btnDownload_Click(object sender, EventArgs e)
{
    string filePath = Server.MapPath("~/App_Data/SecureFiles/report.pdf");

    Response.ContentType = "application/octet-stream";
    Response.AddHeader("Content-Disposition", "attachment; filename=\"report.pdf\"");
    Response.TransmitFile(filePath);
    Response.End();
}
````
````VB
Protected Sub btnDownload_Click(sender As Object, e As EventArgs)
    Dim filePath As String = Server.MapPath("~/App_Data/SecureFiles/report.pdf")

    Response.ContentType = "application/octet-stream"
    Response.AddHeader("Content-Disposition", "attachment; filename=""report.pdf""")
    Response.TransmitFile(filePath)
    Response.End()
End Sub
````

The same pattern applies to downloads initiated from an ajaxified RadGrid. See [Export from Ajaxified Grid]({% slug grid/how-to/exporting/what-you-should-have-in-mind/export-from-ajaxified-grid %}) for a reference.

### Solution 2 — Secure HTTP Handler (for Advanced Scenarios)

If you need shareable download URLs or downloads triggered outside of a button postback, use an HTTP Handler (`.ashx`) that validates authentication before streaming the file. The client receives a handler URL with an opaque file identifier — never a direct file path.

````C#
public class FileDownloadHandler : IHttpHandler, System.Web.SessionState.IRequiresSessionState
{
    public void ProcessRequest(HttpContext context)
    {
        if (!context.User.Identity.IsAuthenticated)
        {
            context.Response.StatusCode = 401;
            context.Response.End();
            return;
        }

        string fileId = context.Request.QueryString["id"];
        string filePath = ResolveSecureFilePath(fileId, context.User);

        if (filePath == null || !System.IO.File.Exists(filePath))
        {
            context.Response.StatusCode = 404;
            context.Response.End();
            return;
        }

        string fileName = System.IO.Path.GetFileName(filePath);
        context.Response.ContentType = "application/octet-stream";
        context.Response.AddHeader("Content-Disposition",
            "attachment; filename=\"" + fileName + "\"");
        context.Response.TransmitFile(filePath);
        context.Response.End();
    }

    public bool IsReusable => true;
}
````

Then trigger the download from the ajaxified control using `ResponseScripts`:

````C#
RadAjaxPanel1.ResponseScripts.Add(
    string.Format("window.location.href = \"{0}\";",
        ResolveUrl("~/FileDownloadHandler.ashx?id=" + HttpUtility.UrlEncode(fileId))));
````
````VB
RadAjaxPanel1.ResponseScripts.Add(
    String.Format("window.location.href = ""{0}"";",
        ResolveUrl("~/FileDownloadHandler.ashx?id=" & HttpUtility.UrlEncode(fileId))))
````

The `ResponseScripts` collection executes after the AJAX request completes.

### Comparison

| Concern | Solution 1 (Disable AJAX) | Solution 2 (HTTP Handler) |
|---|---|---|
| Complexity | Minimal | Moderate |
| Files publicly accessible? | No | No |
| Auth & session preserved? | Yes | Yes |
| Shareable download links? | No | Yes |
| Best for | Button-triggered downloads | Link-based downloads |

## See Also

* [Known Reasons for Error Messages]({%slug syntax-browser-errors-occur%})

* [AjaxManager Server-Side Programming Properties]({%slug ajaxmanager/server-side-programming/properties%})
