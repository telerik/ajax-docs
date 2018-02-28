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

* [Download Does Not Start](#Download Does Not Start)


## Download Does Not Start

The RadZipLibrary requires a full postback in order to download a ZIP archive. If you're using the **RadAjaxManager** or **RadAjaxPanel** to AJAXify your application, you'll need to allow your RadZipLibrary trigger to perform a full postback. See **Example 1**

**Example 1:** Illustrates how to allow a RadButton to perform a full Postback in an otherwise AJAXified application.

````ASP.NET
<telerik:RadAjaxManager ID="RadAjaxManager1" runat="server" PostBackControls="btnDownloadZip">
````
