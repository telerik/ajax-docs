---
title: Copy/Paste selected text with RadContextMenu
description: Check out how to add Copy and Paste cliboard operations via RadContextMenu
type: how-to
page_title: Copy/Paste selected text with RadContextMenu
slug: menu-copy-paste-options-in-contextmenu
position: 
tags: 
ticketid: 1619173
res_type: kb
---

## Description

You have RadContextMenu on a web page which works fine but the users also want to copy text on the page to the clipboard using the context menu. Is there a way to include the ability to copy to the clipboard into the RadContextMenu?

## Solution

`RadContextMenu` allows defining menu items with custom text and value. Clicking each one of them can be used for executing any custom JavaScript logic. With that said you can define Copy and Paste items in the menu and handle the `OnClientItemClick` event of the control to execute desired copy/paste logic.

Here is a wireframe on how you can achieve the desired with `RadContextMenu`:

````ASPX
<script>
    function clientItemClicked(sender, args) {
        if (args.get_item().get_value() == "copy") {
            //get selected text
            //write it in the clipboard
        }
        else if (args.get_item().get_value() == "paste") {
            //get the target element
            //read the clipboard text set it as text/value of the target
        }
    }
</script>

<telerik:RadContextMenu runat="server" ID="RadContextMenu1" OnClientItemClicked="clientItemClicked">
    <Targets>
        <telerik:ContextMenuDocumentTarget />
    </Targets>
    <Items>
        <telerik:RadMenuItem Text="Copy" Value="copy"></telerik:RadMenuItem>
        <telerik:RadMenuItem Text="Paste" Value="paste"></telerik:RadMenuItem>
    </Items>
</telerik:RadContextMenu>
````

And here is a complete sample showcasing possible approach:

````ASPX
<asp:Label Text="Label text to be copied" runat="server" />
<br />
Some copytext here
<br />
<hr />
Paste in any of these
<br />
<asp:TextBox runat="server" />
<textarea></textarea>

<telerik:RadContextMenu runat="server" ID="RadContextMenu1" OnClientItemClicked="clientItemClicked">
    <Targets>
        <telerik:ContextMenuDocumentTarget />
    </Targets>
    <Items>
        <telerik:RadMenuItem Text="Copy" Value="copy"></telerik:RadMenuItem>
        <telerik:RadMenuItem Text="Paste" Value="paste"></telerik:RadMenuItem>
    </Items>
</telerik:RadContextMenu>

<script>
    function clientItemClicked(sender, args) {
        if (args.get_item().get_value() == "copy") {
            var selection = getSelectionText();
            if (selection)
                navigator.clipboard.writeText(selection);
        }
        else if (args.get_item().get_value() == "paste") {
            navigator.clipboard.readText().then((copiedText) => {
                var targetElement = args.get_targetElement();
                if (targetElement &&
                    (targetElement.type == 'text' || targetElement.type == 'textarea')) {
                    targetElement.value = copiedText;
                }
            });
        }
    }
    function getSelectionText() {
        var text = "";
        if (window.getSelection) {
            text = window.getSelection().toString();
        } else if (document.selection && document.selection.type != "Control") {
            text = document.selection.createRange().text;
        }
        return text;
    }
</script>
````

>note Getting the selected text on a page, copying and pasting are operations that depend entirely on the browser's capabilities.

