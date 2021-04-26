---
title: Enabling Image Alignment via JustifyLeft and JustifyRight commands
description: See how to enable Image Alignment via JustifyLeft and JustifyRight commands in RadEditor.
type: how-to
page_title: Enabling Image Alignment via JustifyLeft and JustifyRight commands
slug: editor-alignment-via-justifyleft-and-justifyright-commands
res_type: kb
---

## HOW-TO
Enable Image Alignment via JustifyLeft and JustifyRight commands

## DESCRIPTION
By default, RadEditor uses the built-in browsers' commands for alignment: JustifyLeft, JustifyCenter, JustifyRight and JustifyNone, which produce different content and behave differently under the different browsers. Even more the JustifyLeft and JustifyRight commands could not align the selected image in Firefox.

The solution below shows how to override the JustifyLeft and JustifyRight commands as well as how to enable the image alignment in Firefox and unify the produced content when aligning an image in all browsers.

## SOLUTION
Here is the code:

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1" OnClientCommandExecuting="OnClientCommandExecuting">
    <Content><img src="Images/001.jpg" /></Content>
</telerik:RadEditor>
<script type="text/javascript">
             
    function OnClientCommandExecuting(editor, args) {
        var selectedElement = editor.getSelectedElement();
        var commandName = args.get_commandName();
        if (selectedElement.tagName == "IMG") {
            switch (commandName) {
                case "JustifyLeft":
                    $telerik.$(selectedElement).css("float", "left");
                    break;
                case "JustifyRight":
                    $telerik.$(selectedElement).css("float", "right");
                    break;
            }
            args.set_cancel(true);
        }
    }
</script>
````

