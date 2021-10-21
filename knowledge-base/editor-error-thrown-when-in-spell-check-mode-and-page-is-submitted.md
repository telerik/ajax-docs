---
title: Error Thrown when in Spell Check mode and Page is Submitted
description: See how to fix the Error Object doesn't support property or method get_commandName in RadEditor.
type: troubleshooting
page_title: Error Thrown when in Spell Check mode and Page is Submitted
slug: editor-error-thrown-when-in-spell-check-mode-and-page-is-submitted
res_type: kb
---

## Problem

RadEditor throws Object doesn't support property or method 'get_commandName' when executing a command while in spell check mode. This can happen if you [clean up content in the OnClientSubmit event](http://docs.telerik.com/devtools/aspnet-ajax/controls/editor/managing-content/pasting-content/clean-ms-word-formatting-on-page-load-and-on-submit), for example.

## Solution

Ensure spellchecking is finished before executing the command.

To cancel the spell check, you can call either the finishSpellCheck or cancelSpellCheck method of the [spell check object](http://docs.telerik.com/devtools/aspnet-ajax/controls/editor/client-side-programming/ajaxspellcheck-object) that you can get via the [get_ajaxSpellCheck method](http://docs.telerik.com/devtools/aspnet-ajax/controls/editor/client-side-programming/radeditor-object?_ga=2.234738908.317000784.1618326771-650494500.1548082460) of the RadEditor.

For example:

````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server" OnClientSubmit="OnClientSubmit">
    <Tools>
        <telerik:EditorToolGroup>
            <telerik:EditorTool Name="AjaxSpellCheck" />
        </telerik:EditorToolGroup>
    </Tools>
    <Content>
        miztake
        <ol>
            <li>start spell checking</li>
            <li>click the postback button before existing the spell check mode</li>
        </ol>
    </Content>
</telerik:RadEditor>
<asp:Button ID="Button1" Text="postback" runat="server" />
<script>
    function OnClientSubmit(editor) {
        if (editor.get_ajaxSpellCheck()) {
            editor.get_ajaxSpellCheck().finishSpellCheck(false);
        }
        editor.fire("FormatStripper", { value: "WORD_ALL" });
    }
</script>
````

