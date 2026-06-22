---
title: Handling File Downloads in Ajaxified Controls
description: Learn how to resolve issues with downloading files in Ajaxified controls in UI for ASP.NET AJAX.
type: how-to
page_title: Resolving File Download Issues in Ajaxified Controls
meta_title: Resolving File Download Issues in Ajaxified Controls
slug: ajaxified-control-file-download
tags: asp.net-ajax, ajax, file-download
res_type: kb
---

## Environment

<table>
<tbody>
<tr>
<td>Product</td>
<td>UI for ASP.NET AJAX</td>
</tr>
<tr>
<td>Version</td>
<td>Current</td>
</tr>
</tbody>
</table>

## Description

When using Ajaxified controls in UI for ASP.NET AJAX, you may encounter issues with downloading files. This occurs because the AJAX framework intercepts the file response and prevents the browser from initiating the download. 

This knowledge base article also answers the following questions:
- How can I enable file downloads in an Ajaxified control?
- How do I resolve file download issues with AJAX in ASP.NET?
- Why can’t files download from an Ajaxified control?

## Solution

To allow file downloads in Ajaxified controls, configure the control to disable AJAX for the specific file download operation.

1. Identify the control or button that triggers the file download.
2. Use a [RadAjaxManager](https://docs.telerik.com/devtools/aspnet-ajax/controls/ajaxmanager/overview) or [RadAjaxPanel](https://docs.telerik.com/devtools/aspnet-ajax/controls/ajaxpanel/overview) to manage AJAX requests.
3. Exclude the file download operation from AJAX processing using the `AjaxRequest` or `AjaxSetting` configuration.

Example:

```aspnet
<telerik:RadAjaxManager runat="server" ID="RadAjaxManager1">
    <AjaxSettings>
        <telerik:AjaxSetting AjaxControlID="Button1">
            <UpdatedControls>
                <!-- Remove the file download control from AJAX updates -->
            </UpdatedControls>
        </telerik:AjaxSetting>
    </AjaxSettings>
</telerik:RadAjaxManager>

<asp:Button ID="Button1" runat="server" Text="Download File" OnClick="DownloadFile_Click" />
```

Alternatively, disable AJAX for the file download control entirely:

```aspnet
<telerik:RadCodeBlock runat="server">
    <script type="text/javascript">
        function disableAjaxForFileDownload() {
            var button = $find('<%= Button1.ClientID %>');
            button.add_clicked(function (sender, args) {
                // Disable AJAX request
                sender.set_enableAjax(false);
            });
        }
        Sys.Application.add_load(disableAjaxForFileDownload);
    </script>
</telerik:RadCodeBlock>
```

4. Ensure the `Response` output in the code-behind completes successfully:

```csharp
protected void DownloadFile_Click(object sender, EventArgs e)
{
    Response.Clear();
    Response.ContentType = "application/pdf";
    Response.AppendHeader("Content-Disposition", "attachment; filename=SampleFile.pdf");
    Response.WriteFile(Server.MapPath("~/path-to-file/SampleFile.pdf"));
    Response.End();
}
```

## See Also

- [RadAjaxManager Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/ajaxmanager/overview)
- [RadAjaxPanel Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/ajaxpanel/overview)
- [Managing AJAX Requests](https://docs.telerik.com/devtools/aspnet-ajax/controls/ajaxmanager/managing-ajax-requests)
- [File Download with Response Object](https://docs.microsoft.com/en-us/previous-versions/aspnet/ms972953(v=msdn.10))
