---
title: No FONT tags are applied when I type text in the editor
description: Learn how to workaround the problem when applying the default browser font
type: troubleshooting
page_title: No FONT tags are applied when I type text in the editor
slug: editor-no-font-tags-are-applied-when-i-type-text-in-the-editor
res_type: kb
---

## Problem

When I type text in the editor with the default font and size, no FONT tags are applied when I view the HTML. This creates a problem because when the page is accessed from another browser, the entire look and feel is changed (all the text displayed as Times New Roman).

## Explanation
This problem appears when RadEditor is set to use the same default font and size, as the font and size that are set in the content editor's browser (usually Arial 10pt). Then the browser doesn't use a font name / size tag to display nor save the correct font as it recognizes it be default. The problem occurs when another user with different browser's FONT settings accesses the page. Since the new browser thinks that the default FONT should be, say Times New Roman, 16pt, it displays it with the new settings.

## Workaround 1
You can always set the default font size/name in RadEditor via its ContentAreaCssFile property to point to your own CSS file

````ASP.NET
<telerik:RadEditor  
       ID="RadEditor1"
       ContentAreaCssFile="~/EditorContentAreaStyles.css"
       runat="server">
</telerik:RadEditor>
````

In the EditorContentAreaStyles.css set a global body class and specify the font information:

````CSS
body
{
    font-family: Arial;
    font-size: 10pt;
}
````

The problem is that when the default (10pt) font is used, no font tags appear. If you set 8pt as default, then fonts that are 8pt will have no font tag.

As a suggestion you can set the font-size property to 9pts and the font-family selector to some other font style. As there is no 9pt size in the Font Size dropdown, when selecting size 2 (10pt), the needed tag will be present in the HTML. Same holds true for the font name.

Workaround 2
It starts the user out with default fonts and sizes by firing the RealFontSize and FontName commands in the OnClientLoad event:

````ASP.NET
<script>
function OnClientLoad(editor) {
   setTimeout(function () {
       editor.fire('FontName', { value: 'Arial' });
       editor.fire('RealFontSize', { value: '12px' });
   }, 300);
}
</script>
<telerik:RadEditor OnClientLoad="OnClientLoad" ...
````


