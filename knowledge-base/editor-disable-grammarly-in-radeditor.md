---
title: Disable Grammarly in RadEditor
description: See how to turn off Grammarly in RadEditor.
type: troubleshooting
page_title: Cancel Enter key execution in the content area
slug: editor-disable-grammarly-in-radeditor
res_type: kb
---

## Problem

You may experience severe slowdowns and inconsistent HTML results in RadEditor, when a user has Grammarly installed in Chrome. The browser add-on works by modifying the HTML from outside the editor, which results in glitchy selections and content changes. If you look at HTML mode of RadEditor you will see a lot of custom tags, styles and attributes introduced by Grammarly which are not part of the XHTML and HTML5 specifications and which can bulk the original content, slow down the editing performance of the browser and also trick the validators:

````ASP.NET
<g class="gr_ gr_3 gr-alert gr_spell gr_inline_cards gr_run_anim ContextualSpelling ins-del multiReplace" id="3" data-gr-id="3">testt</g> <g class="gr_ gr_34 gr-alert gr_spell gr_inline_cards gr_run_anim ContextualSpelling ins-del multiReplace" id="34" data-gr-id="34">incorrectt</g> words
````

## Solution

Grammarly can be easily disabled by applying the data-gramm attribute set to fasle to all content editable elements on the page, including the RadEditor's content area, i.e.

````ASP.NET
<script>
    function OnClientLoad(editor, args) {
        editor.get_contentArea().setAttribute('data-gramm', 'false');
    }
</script>
<telerik:RadEditor OnClientLoad="OnClientLoad" runat="server" ID="RadEditor1"></telerik:RadEditor>
````

 