---
title: Making Screen Readers Work with RadEditor Iframe Content Area
description: This article provides a solution for enabling screen readers to read the content inside RadEditor for ASP.NET AJAX.
type: troubleshooting
page_title: Ensuring Screen Reader Accessibility for RadEditor's Content
slug: editor-screen-reader-radeditor-content
tags: radeditor, asp.net ajax, screen reader, accessibility, 508 compliance, iframe
res_type: kb
ticketid: 1653915
---

## Environment

| Product | RadEditor for ASP.NET AJAX |
| --- | --- |
| Version | all |

## Description

When navigating to the [RadEditor](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview) content using a screen reader, the screen reader does not announce the contents of the editor. Instead, it reads the web page's title. This issue has been observed with Jaws and Windows Narrator screen readers and can be replicated on the Telerik demo site.

## Cause

This problem is related to how browsers handle editable iframes, a component the RadEditor uses for its content area. It is notably an issue in browsers other than Firefox and can be demonstrated with any editable iframe, not just the RadEditor.

## Solution

To resolve this issue, modify the source (`src`) value of the editable iframe from `javascript:'<html></html>'` to `about:blank`. This adjustment helps the screen reader correctly identify and read the contents of the RadEditor. Implement the solution by including the following JavaScript code in your page:

```javascript
<script>
    Telerik.Web.UI.RadEditor.prototype._createIframe = function() {
        var elem = document.createElement('iframe');
        elem.frameBorder = "0";
        elem.src = "about:blank"; // Previously javascript:'<html></html>'
        var ifrStyle = elem.style;
        ifrStyle.width = "100%";
        ifrStyle.height = "2px";
        ifrStyle.margin = "0px";
        ifrStyle.padding = "0px";

        return elem;
    }
</script>
<telerik:RadEditor ContentAreaMode="Iframe" ID="RadEditor1" runat="server" EnableAriaSupport="true"></telerik:RadEditor>
```

Add this script to your webpage where the RadEditor is initialized. This modification ensures that the screen reader correctly focuses on and reads the RadEditor's content.

## See Also

- [RadEditor Overview](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/overview)
- [Enabling ARIA Support](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/accessibility-and-internationalization/wai-aria-support)
 
