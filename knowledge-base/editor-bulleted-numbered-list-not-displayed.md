---
title: RadEditor Bulleted and Numbered Lists Not Displayed
description: Learn how to resolve the issue of bulleted/numbered lists not being displayed in RadEditor when the text is aligned left.
type: troubleshooting
page_title: RadEditor Bulleted/Numbered List Not Displayed
slug: editor-bulleted-numbered-list-not-displayed
tags: radeditor, bulleted-list, numbered-list, display-issue, css
res_type: kb
---

### Environment
| Property | Value |
| --- | --- |
| Product | RadEditor for ASP.NET AJAX |
| Version | all |

### Description
I am experiencing an issue with RadEditor where the bulleted/numbered lists are not displayed when the text is aligned left. However, when I save the text and display it in another HTML control, like a GridHTMLEditorColumn, the lists are displayed correctly. Additionally, if I click the indent button, the lists are displayed but are then too far right when saved. I need assistance in resolving this issue.

### Solution
To resolve this issue, follow these steps:

1. Set the `CssFiles` property of RadEditor to point to an empty CSS file. This will help address content area appearance problems. Here's an example:

```
<telerik:RadEditor RenderMode="Lightweight" ID="RadEditor1" runat="server">
    <CssFiles>
        <telerik:EditorCssFile Value="~/EditorContentArea.css" />
    </CssFiles>
</telerik:RadEditor>
```

Note: This solution works only in the IFRAME-based content area mode. In DIV mode, where the content area is part of the same page as the editor, you need to override the `li` class selector with a strong class to override the global class. Here's an example:

```
div.reContentArea li {
    margin-left: 10px !important; /* Modify the value to make the bullet visible */
    list-style-type: disc !important;
}
```

2. For more information and resources, refer to the following links:
- [RadEditor Content Area Defaults](https://demos.telerik.com/aspnet-ajax/editor/examples/settingcontentareadefaults/defaultcs.aspx)
- [Decorating DIV ContentAreaMode](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/managing-content/content-area-appearance/decorating-div-contentareamode)
- [MDN Web Docs - list-style-type](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)
 
