---
title: Configure Browser Spellcheck in RadEditor
page_title: Configure Browser Spellcheck in RadEditor | RadEditor for ASP.NET AJAX Documentation
description: Configure Browser Spellcheck in RadEditor
slug: editor/how-to/configure-browser-spellcheck
tags: configure, browser, spellcheck, underline, red, color, wrong, word, ajaxspellcheck, spelling, editor, lang
published: True
position: 10
---

# Configure Browser Spellcheck in RadEditor

In this article you will see how to adjust the native browser's spellcheck to get the desired behavior with runtime spellchecking in the content area. 

Modern browsers support spellchecking as an out-of-the-box feature. This feature has nothing to do with the built-in [AjaxSpellChecker]({%slug editor/functionality/spellchecker/overview%}) of **RadEditor** and it is configurable by the [spellcheck](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Attribute/spellcheck) and [lang](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/lang) DOM attributes. 

>caption Example 1: How to disable browser spellcheck in RadEditor

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1" RenderMode="Lightweight" OnClientLoad="OnClientLoad">
</telerik:RadEditor>

<script>
    function OnClientLoad(editor, args) {
        editor.get_contentArea().setAttribute("spellcheck", "false");
    }
</script>
````

>caption Example 2: How to change the language of the browser spellcheck in RadEditor

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1" RenderMode="Lightweight" OnClientLoad="OnClientLoad">
</telerik:RadEditor>

<script>
    function OnClientLoad(editor, args) {
        editor.get_contentArea().setAttribute("lang", "de");
    }
</script>
````

>tip Spellcheck language depends also on the installed language dictionaries in the browser.

## See Also

* [RadEditor Spellchecker Overview]({%slug editor/functionality/spellchecker/overview%})
* [spellcheck attribute](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Attribute/spellcheck)
* [lang attribute](https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Attribute/lang)
