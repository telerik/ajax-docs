---
title: Empty Links or Buttons in RadEditor Toolbar - WAVE Accessibility Scan Issue
description: Se how to fix the empty Links or Buttons in RadEditor Toolbar - WAVE Accessibility Scan Issue.
type: troubleshooting
page_title: Empty Links or Buttons in RadEditor Toolbar - WAVE Accessibility Scan Issue
slug: editor-empty-links-or-buttons-in-radeditor-toolbar---wave-accessibility-scan-issue
res_type: kb
---

## Problem

When performing an automated accessibility scan (e.g., with a tool like WAVE), the RadEditor toolbars may get reported as empty links, anchors or buttons because they do not contain text.

RadEditor is, first and foremost, a visual text editor, and thus its buttons are icons rather than text. Adding text inside the buttons will break the layout of the controls. Therefore, a title attribute is provided with the tool name and default shortcut (if present) to improve accessibility. You can change the titles by [localizing RadEditor](https://demos.telerik.com/aspnet-ajax/editor/examples/localization/defaultcs.aspx).

## Solution

To improve automated accessibility validation ratings, you can try the following:

* enable the [WAI-ARIA support of the RadEditor](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/accessibility-and-internationalization/standards-compliance/wai-aria-support)
* use the [Lightweight Render Mode](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/mobile-support/render-modes)
* use the [AccessibleRadEditor control](https://demos.telerik.com/aspnet-ajax/editor/examples/accessibleeditor/defaultcs.aspx)

You can also use a simple script to add content to the buttons/links that you can hide with CSS to prevent it from breaking the toolbar's appearance:

````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server" RenderMode="Lightweight" OnClientLoad="OnClientLoad" CssClass="withButtonText"></telerik:RadEditor>
<script>
    function OnClientLoad(sender, args) {
        $telerik.$("a.reTool", sender.get_element()).each(function (index, elem) {
            elem.innerHTML = elem.title;
        });
    }
</script>
 
<style>
/*move text out of view*/
.RadEditor.withButtonText a.reTool
{
    text-indent: -9999px;
}
    /*keep the font icons in place*/
    .RadEditor.withButtonText a.reTool:before
    {
        text-indent: 0;
    }
</style>
````

You can further tweak the script and style rules above to fit your needs (e.g., skip certain tools, change the text, etc.)



