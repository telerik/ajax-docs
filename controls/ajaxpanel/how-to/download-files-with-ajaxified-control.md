---
title: Download Files with Ajaxified Control
page_title: Download Files with Ajaxified Control
description: Check our Web Forms article about Download Files with Ajaxified Control.
slug: ajaxpanel/how-to/download-files-with-ajaxified-control
tags: download,files,with,ajaxified,control
published: True
position: 10
---

# Download Files with Ajaxified Control

## Overview

If you want to invoke a file download from an AJAX-enabled control (either placed in **RadAjaxPanel** or ajaxified by **RadAjaxManager**), you cannot use `Response.WriteFile` or `Response.TransmitFile` directly, because the **XmlHttpRequest** object cannot trigger a browser file download.

````C#
// This does NOT work inside an AJAX request
Response.WriteFile("~/Your_File");
````
````VB
' This does NOT work inside an AJAX request
Response.WriteFile("~/Your_File")
````

There are two recommended approaches. Choose based on your scenario.

## Solution 1 — Disable AJAX for the Download Postback (Recommended)

The simplest and most secure approach is to disable AJAX for the specific control that triggers the download. This turns that single postback into a regular one, so `Response.TransmitFile` works normally. Files can be stored in `App_Data` or any other folder not directly served by IIS — they are never publicly accessible.

Use the `OnRequestStart` client event to opt out of AJAX for the download button:

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

Code-behind:

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

## Solution 2 — Secure HTTP Handler (for Advanced Scenarios)

If you need shareable download URLs or downloads that are triggered outside of a button postback, use an HTTP Handler (`.ashx`) that validates authentication before streaming the file. The client receives a handler URL with an opaque file identifier — never a direct file path.

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

The **ResponseScripts** collection executes after the AJAX request completes.

## Security Note

> **Warning:** Do **not** place downloadable files in a publicly accessible folder and redirect to them directly via `window.location.href`. Any user who can guess or enumerate the URL can download the file without authentication. Use Solution 1 or Solution 2 above to keep files protected.

## Comparison

| Concern | Solution 1 (Disable AJAX) | Solution 2 (HTTP Handler) |
|---|---|---|
| Complexity | Minimal | Moderate |
| Files publicly accessible? | No | No |
| Auth & session preserved? | Yes | Yes |
| Shareable download links? | No | Yes |
| Best for | Button-triggered downloads | Link-based downloads |

## See Also

 * [Known Reasons for Error Messages]({%slug ajaxpanel/troubleshooting/known-reasons-for-error-messages%})

 * [Properties]({%slug ajaxpanel/server-side-programming/properties%})
