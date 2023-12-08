---
title: Sizing the Upload Container in RadFileExplorer for ASP.NET AJAX
description: Learn how to adjust the size of the upload container in RadFileExplorer to make it look more user-friendly.
type: how-to
page_title: How to Size the Upload Container in RadFileExplorer | Telerik UI for ASP.NET AJAX
slug: fileexplorer-sizing-upload-container
tags: radfileexplorer, upload container, sizing, user-friendly
res_type: kb
---

## Environment
| Property | Value |
| --- | --- |
| Product | RadFileExplorer for ASP.NET AJAX |
| Version | 2023.3.1010 |

## Description
To make the upload container in RadFileExplorer look more user-friendly and adjust its size, you can follow these steps:

1. Apply a CSS class to reduce the space between the File Selector and the infopanel.
2. Resize the Upload dialog programmatically using the `OnClientButtonClicked` toolbar event.

## Solution
Apply the following CSS class to reduce the space between the File Selector and the infopanel:

```css
.rfeUploadContainer .RadUpload .ruInputs {
    height: 41px !important;
}
```

Next, resize the Upload dialog programmatically using the `OnClientButtonClicked` toolbar event. Here's an example in both VB.NET and JavaScript:

VB.NET:
````C#
RadFileExplorer1.ToolBar.OnClientButtonClicked = "OnToolBarButtonClicked";
````
````vb
RadFileExplorer1.ToolBar.OnClientButtonClicked = "OnToolBarButtonClicked"
````

JavaScript:
````JavaScript
function OnToolBarButtonClicked(oToolbar, args) {
    var toolbarItem = args.get_item();
                        
    if (toolbarItem.get_value() === "Upload") {
        // Upload is clicked
        setTimeout(function () {
            var explorer = $find("<%=RadFileExplorer1.ClientID%>");
            var wndManager = explorer.get_windowManager(); // Get reference to RadFileExplorer's window manager
            var wnd = wndManager.getActiveWindow(); // Get reference to the upload dialog's window
            wnd.set_height(480); // Specify the desired dialog height
        }, 100);
    }
}
````

By applying the CSS class and resizing the dialog, you can adjust the size of the upload container in RadFileExplorer to make it look more presentable in your application.

## Notes
- Make sure to replace `<%=RadFileExplorer1.ClientID%>` with the actual ID of your RadFileExplorer control in the JavaScript code.
- Adjust the `height` value in the JavaScript code (`wnd.set_height(480)`) to fit your desired dialog height.

## See Also
- [RadFileExplorer Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/fileexplorer/overview)
- [RadAsyncUpload Documentation](https://docs.telerik.com/devtools/aspnet-ajax/controls/asyncupload/overview)
