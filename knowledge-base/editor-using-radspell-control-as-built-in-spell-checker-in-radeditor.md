---
title: Integrate RadSpell control with RadEditor as built-in Spelling tool.
description: See how to integrate RadSpell control with RadEditor as built-in Spelling tool.
type: how-to
page_title: Integrate RadSpell control with RadEditor as built-in Spelling tool.
slug: editor-using-radspell-control-as-built-in-spell-checker-in-radeditor
res_type: kb
---

## How-to
Integrate RadSpell control with RadEditor as built-in Spelling tool.

## Solution
The following example demonstrates how to use a hidden RadSpell control integrated with the RadEditor one and add a custom tool that triggers the RadSpell instead the built-in spell checker.

````ASP.NET
<telerik:RadEditor runat="server" ID="RadEditor1">
    <Tools>
        <telerik:EditorToolGroup>
            <telerik:EditorTool Name="SpellCheck" />
        </telerik:EditorToolGroup>
    </Tools>
</telerik:RadEditor>
 
<telerik:RadSpell ID="RadSpell1" runat="server" ControlToCheck="RadEditor1" Style="display: none;"></telerik:RadSpell>
 
<script type="text/javascript">
    Telerik.Web.UI.Editor.CommandList["SpellCheck"] = function (commandName, editor, args) {
        $find("<%= RadSpell1.ClientID %>").startSpellCheck();
    };
</script>
````

 