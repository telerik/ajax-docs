---
title: Resolving The Controls collection cannot be modified Exception in ASP.NET Web Forms
description: Learn how to resolve the "The Controls collection cannot be modified because the control contains code blocks" exception in ASP.NET Web Forms
type: troubleshooting
page_title: Resolving "The Controls collection cannot be modified" Exception in ASP.NET Web Forms
slug: common-resolving-controls-collection-modified-exception
tags: exception, ASP.NET, Telerik, controls collection, code blocks
res_type: kb
---

## Environment
| Product | Progress® Telerik® UI for ASP.NET AJAX |
| ------- | ------------------------------------ |
| Version | 2023.3.1010                          |

## Description
I am encountering the following exception when running an ASP.NET Web Forms application:

```
The Controls collection cannot be modified because the control contains code blocks (i.e. <% ... %>).
[HttpException (0x80004005): The Controls collection cannot be modified because the control contains code blocks (i.e. <% ... %>).]
   System.Web.UI.ControlCollection.Add(Control child) +8677431
   Telerik.Web.SkinRegistrar.RegisterCssReference(Page _page, Control _control, String _url) +257
```

## Solution
To resolve the "The Controls collection cannot be modified" exception in ASP.NET Web Forms when adding a Telerik control, follow these steps:

**1.** Check for any `<% ... %>` code blocks in the `<head>` tag of the `default.aspx` or related master pages and user controls.
**2.** If you find any code blocks, wrap the `<link>` and `<script>` tags in `<telerik:RadScriptBlock>` tags.

````ASP.NET
<head runat="server">
    <telerik:RadScriptBlock ID="RadScriptBlock1" runat="server">
        <link rel="stylesheet" href="<%=Page.ResolveUrl("~/Styles/global.css")%>" type="text/css" />
        <link rel="stylesheet" href="<%=Page.ResolveUrl("~/Styles/styles2.css")%>" type="text/css" />
    </telerik:RadScriptBlock>
    <telerik:RadScriptBlock ID="RadScriptBlock2" runat="server">
        <script src="<%=Page.ResolveUrl("~/Scripts/jquery-3.5.1.min.js")%>" type="text/javascript"></script>
        <script src="<%=Page.ResolveUrl("~/Scripts/dialog.js")%>" type="text/javascript"></script>
    </telerik:RadScriptBlock>
</head>
````
   
If using `<telerik:RadScriptBlock>` does not solve the problem, replace it with `<telerik:RadCodeBlock>` tags.

**3.** Alternatively, you can try moving the code block(s) out of the `<head>` tag and place them inside the `<body>` tag.

By following these steps, you will resolve the "The Controls collection cannot be modified" exception in ASP.NET Web Forms when adding a Telerik control.
