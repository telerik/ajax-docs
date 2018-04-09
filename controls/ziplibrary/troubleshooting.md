---
title: Troubleshooting
page_title: Troubleshooting | RadZipLibrary for ASP.NET AJAX Documentation
description: Troubleshooting
slug: ziplibrary/troubleshooting
tags: troubleshooting
published: True
position: 60
---

# Troubleshooting

This article contains common problems related to using the **RadZipLibrary**:

* [Download Does Not Start](#download-does-not-start)


## Download Does Not Start

Any component, including the **RadZipLibrary**, that requests a file from the server must must do so via a full postback. If you're using the **RadAjaxManager** or **RadAjaxPanel** to AJAX-enable your application, you'll need to allow your **RadZipLibrary** trigger to perform a full postback. See **Example 1**

**Example 1:** Illustrates how to allow a RadButton to perform a full Postback in an otherwise AJAXified application.

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" PostBackControls="btnDownloadZip">
````
## See Also
[Excluding Controls from Ajaxifying](https://docs.telerik.com/devtools/aspnet-ajax/controls/ajaxmanager/how-to/exclude-controls-from-ajaxifying)
