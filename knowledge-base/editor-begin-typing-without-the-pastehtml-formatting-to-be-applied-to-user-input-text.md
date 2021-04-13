---
title: Begin typing without the unwanted styles inserted by the pasteHtml method to be applied to the input
description: Begin typing without the unwanted styles and formatting inserted by the pasteHtml method of RadEditor to be applied to user input text.
type: troubleshooting
page_title: Begin typing without the unwanted styles inserted by the pasteHtml method to be applied to the input
slug: editor-begin-typing-without-the-pastehtml-formatting-to-be-applied-to-user-input-text
res_type: kb
---

## Problem

Begin typing without the unwanted styles and formatting inserted by the pasteHtml method to be applied to user input text

## Description 

After I perform the following client script on the RadEditor, how do I begin typing without the styles from newly inserted tag to be applied to user input text?

editor.pasteHtml("<span style='color:red;'>Red colored span</span>");

In other words, after I paste the tag, it should be self-contained and when I start typing again, I want to be outside the newly created span.

I would also like a space after the newly created tag but nothing I do seems to visually show a space.  If I paste &nbsp; it gets inserted to the html but visually in content area, there is no space.

## Solution

The idea is to insert a marker element <span id='_reSelectionMarker'><br /></span>, to programmatically select it to move the caret over it and to remove it:

````ASP.NET
<script type="text/javascript">
    function InsertSpan() {
        var editor = $find("<%=RadEditor1.ClientID%>");
        editor.pasteHtml("<span style='color:red;'>Red colored span</span> <span id='_reSelectionMarker'><br /></span>");
        var marker = editor.findContent("#_reSelectionMarker").get(0); //get the marker
        marker.parentNode.removeChild(marker); //remove the marker
        var range = editor.getDomRange();
        range.collapse(true);
    }
</script>
````

