---
title: Removing Selected File in RadAsyncUpload for ASP.NET AJAX
description: Learn how to remove a selected file in RadAsyncUpload when using it in a RadWindow.
type: how-to
page_title: How to Remove Selected File in RadAsyncUpload for ASP.NET AJAX
slug: remove-selected-file-radasyncupload-aspnet-ajax
tags: radasyncupload, radwindow, remove, selected file, ASP.NET AJAX
res_type: kb
---

## Environment

| Property | Value |
| --- | --- |
| Product | RadAsyncUpload for ASP.NET AJAX |
| Version | all |

## Description

When using a RadAsyncUpload control in a RadWindow, you may encounter a scenario where a selected file is still retained in the control when the window is closed and reopened. This article provides a solution to remove the selected file server-side when the window is closed.

## Solution

To remove the selected file from the RadAsyncUpload control when the RadWindow is closed, you can use the `deleteAllFileInputs()` method provided by RadAsyncUpload. Follow the steps below to implement this solution:

1. Add the following JavaScript function to your page:

```javascript
function onCloseHandler(sender, args) {
    var asyncUpload = $find('<%= RadAsyncUpload1.ClientID %>');

    // Clear all selected files
    asyncUpload.deleteAllFileInputs();
}
```

2. In the markup of your RadWindow, make sure to specify the `OnClientClose` attribute to call the JavaScript function when the window is closed:

```html
<telerik:RadWindow ID="RadWindow1" runat="server" OnClientClose="onCloseHandler">
    <!-- Window content here -->
</telerik:RadWindow>
```

3. To register the JavaScript code block on the server side, you can use the `RegisterStartupScript` method. Here's an example of how you can do it in the Page_Load event:

```csharp
protected void Page_Load(object sender, EventArgs e)
{
    if (!Page.IsPostBack)
    {
        RegisterStartupScript();
    }
}

private void RegisterStartupScript()
{
    string script = @"
        <script type='text/javascript'>
            function onCloseHandler(sender, args) {
                var asyncUpload = $find('" + RadAsyncUpload1.ClientID + @"');
                
                // Clear all selected files
                asyncUpload.deleteAllFileInputs();
            }
        </script>";

    ScriptManager.RegisterStartupScript(this, GetType(), "onCloseScript", script, true);
}
```

With this solution in place, the selected file will be removed from the RadAsyncUpload control when the RadWindow is closed, ensuring that no files are retained when the window is reopened.

## See Also

- [RadAsyncUpload Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/overview)
 
