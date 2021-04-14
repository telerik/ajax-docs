---
title: How to keep focus on the activated tool in the toolbar
description: See how to how to keep focus on the activated tool in the toolbar of RadEditor.
type: how-to
page_title: How to keep focus on the activated tool in the toolbar
slug: editor-how-to-keep-focus-on-the-activated-tool-in-the-toolbar
res_type: kb
---

## HOW-TO

Keep focus on the button in the toolbar that was activated.

This will let the user keep selecting buttons with the keyboard (Enter or Space) and keep tabbing through the toolbar without focusing the toolbar again which requires pressing F10.

## Description 

RadEditor mimics the behavior of leading rich text editors like MS Word. If you activate a toolbar button with the keyboard or the mouse, the focus moves to the content area so the end user can continue producing content.

## Solution

Hook to the [OnClientCommandExecuted event](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/client-side-programming/events/onclientcommandexecuted) and get a [reference to the tool](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/client-side-programming/methods/gettoolbyname) that was activated, then [focus the toolbar](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/client-side-programming/defaulttooladapter-object) and the [tool](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/client-side-programming/methods/gettoolbyname) DOM element.

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1" OnClientCommandExecuted="OnClientCommandExecuted" RenderMode="Lightweight"></telerik:RadEditor>
<script>
    function OnClientCommandExecuted(sender, args) {
        var commandName = args.get_commandName();
        //you can add checks to only do this for certain commands that make sense, like bold, italic
        //and avoid dialogs. This example allows bold, italic, underline and strikethrough to keep the focus in the toolbar
        var commandsToRetainFocus = ["bold", "italic", "underline", "strikethrough"];
        if (commandsToRetainFocus.indexOf(commandName.toLowerCase()) < 0) return;
 
        var tool = sender.getToolByName(commandName);
        var toolAdapter = sender.get_toolAdapter();
        if (tool && toolAdapter) {
            toolAdapter.setFocus();
            setTimeout(function () {
                tool.get_element().focus();
            }, 100);
        }
    }
</script>
````



