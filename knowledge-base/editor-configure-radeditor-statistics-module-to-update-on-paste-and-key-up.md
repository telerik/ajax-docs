---
title: Configure RadEditor Statistics Module to update on paste and key up
description: See how to configure RadEditor Statistics Module to update on paste and key up events.
type: how-to
page_title: Configure RadEditor Statistics Module to update on paste and key up
slug: editor-configure-radeditor-statistics-module-to-update-on-paste-and-key-up
res_type: kb
---

## How-To

Configure RadEditor Statistics Module to update on paste and key up

## Problems to resolve
* The Character Counter does not update when typing or pasting content
* RadEditor Module Character Count doesn't update on paste or keypress
* The Word counter is not reflecting immediately when typing or pasting content

## Description

By design the Statistics module of RadEditor is updated only when pressing Enter or changing the selection in the content area. This is done with the only purpose of not sacrificing the performance when editing large amount of text with formatting.

## Solution

The sample code below shows how to override the built-in logic of the Word/Chars counter module and configure it to check for the execution of the keyup and onpaste events too:

````ASP.NET
<telerik:RadEditor OnClientInit="CharCountInit" ID="RadEditor1" runat="server"></telerik:RadEditor>
<script>
    function CharCountInit() {
        var originalRender = Telerik.Web.UI.Editor.Modules.RadEditorStatistics.prototype.render;
  
        Telerik.Web.UI.Editor.Modules.RadEditorStatistics.prototype.render = function () {
            originalRender.apply(this);
  
            this.get_editor().remove_selectionChange(this._onDoCountDelegate);
            this.get_editor().attachEventHandler("onkeyup", this._onDoCountDelegate);
            this.get_editor().attachEventHandler("onbeforepaste", this._onDoCountDelegate);
        };
    }
</script>
````

