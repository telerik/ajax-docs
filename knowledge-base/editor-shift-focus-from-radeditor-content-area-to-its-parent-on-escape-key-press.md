---
title: Shift focus from RadEditor content area to its parent on Escape key press
description: Learn how to shift focus from RadEditor content area to its parent when pressing the Escape key.
type: how-to
page_title: Shift focus from RadEditor content area to its parent on Escape key press
slug: editor-shift-focus-from-radeditor-content-area-to-its-parent-on-escape-key-press
res_type: kb
---

## Description

Shift focus from RadEditor content area to its parent on Escape key press

## Solution

The example below demonstrates how to attach to the onkeydown event of the content area via the [attachEventHandler](https://docs.telerik.com/devtools/aspnet-ajax/controls/editor/client-side-programming/methods/attacheventhandler) method, listen for the Esc key execution and programmatically focus the parent element of RadEditor:

````ASP.NET
<script type="text/javascript">
    function OnClientLoad(editor, args) {
        editor.attachEventHandler("onkeydown", function (e) {
            if (e.keyCode == "27") //Esc key press
            {
                var divWrapper = $get("RadEditorDivWrapper")
                divWrapper.focus();
                divWrapper.style.border = "1px solid blue";
            }
        });
    }
</script>
<div id="RadEditorDivWrapper" tabindex="-1">
    <telerik:RadEditor runat="server" ID="RadEditor1" OnClientLoad="OnClientLoad"></telerik:RadEditor>
</div>
````

**Pro Tips**
* The solution is universal, but requires to set a tabIndex to the non editable element (div, span, paragraph or other) on which you want to programmatically put the focus on. In the example above, this is the <div> wrapper with id="RadEditorDivWrapper" and tabIndex="-1". The tabIndex attribute with value of "-1" makes the element focusable by script only.
* Another way to move the focus from the content area to the first button of the editor's toolbar is to press the F10 key.

