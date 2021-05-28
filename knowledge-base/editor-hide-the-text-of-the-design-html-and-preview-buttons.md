---
title: Hide the text of the Design, HTML and Preview buttons
description: See how to hide the text of the Design, HTML and Preview buttons of RadEditor.
type: how-to
page_title: Hide the text of the Design, HTML and Preview buttons
slug: editor-hide-the-text-of-the-design-html-and-preview-buttons
res_type: kb
---

## How-to
You can use the CSS classes below to hide the text of the Design, HTML and Preview mode buttons and keep only their icons:

## Solution 1 for Lightweight Render Mode:
The following example demonstrates how to use a hidden RadSpell control integrated with the RadEditor one and add a custom tool that triggers the RadSpell instead the built-in spell checker.

````HTML
<style type="text/css">
.reEditorModes a
{
    width: 26px !important;
    overflow: hidden;
    border: solid 1px #ececec;
}
 
.reEditorModes a span
{
    text-indent: -9999px;
}
 
a.reMode_selected
{
    border: solid 1px #828282;
    background: none #cecece !important;
}
</style>
````

## Solution 2 for Classic Render Mode:

````HTML
<style type="text/css">
.reEditorModes a
{
    width: 26px !important;
    overflow: hidden;
    border: solid 1px #ececec;
}
 
.reEditorModes a span
{
    text-indent: -9999px;
}
 
a.reMode_selected
{
    border: solid 1px #828282;
    background: none #cecece !important;
}
</style>
````

 