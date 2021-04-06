---
title: Get the content area object of RadEditor with a single JavaScript function regardless of the ContentAreaMode type
description: See how to get the content area object of RadEditor with a single JS function regardless of the ContentAreaMode type.
type: how-to
page_title: Get the content area object of RadEditor with a single JavaScript function regardless of the ContentAreaMode type
slug: editor-get-the-content-area-object-of-radeditor-with-a-single-js-function-regardless-of-the-contentareamode-type
res_type: kb
---

## Description

The solution offers a handy common function which gives you reference to the content area object of RadEditor regardless of the ContentAreaMode type.

## Solution

Sometimes you may have multiple editors on the page with different content areas and you may need a common way of obtaining reference to these different editable DIV or Iframe content areas.

The solution below solves this problem by providing a common function for this:

````ASP.NET
RadEditor with Div content area:
<telerik:RadEditor ID="RadEditorDivContentArea" ContentAreaMode="Div" runat="server" OnClientLoad="GetContent">
    <Content><em>Div Based Content Area</em></Content>
</telerik:RadEditor><br />
 
RadEditor with Iframe content area:
<telerik:RadEditor ID="RadEditorIframeContentArea"  ContentAreaMode="Iframe" runat="server" OnClientLoad="GetContent">
    <Content><em>Iframe Based Content Area</em></Content>
</telerik:RadEditor>
 
<script>
    function GetContent(sender) {
        alert(getContentElement(sender).innerHTML);
    }
 
    function getContentElement(editor) {
        if (!editor) {
            return null;
        }
        var contentElement = null;
        if ($telerik.$(editor.get_contentAreaElement()).is("div")) {
            contentElement = editor.get_contentAreaElement();
        } else {
            contentElement = editor.get_contentArea();
        }
        return contentElement;
    }
</script>
````


