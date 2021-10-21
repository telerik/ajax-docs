---
title: Cancel Enter key execution in the content area
description: See how to cancel Enter key execution in the content area of RadEditor.
type: how-to
page_title: Cancel Enter key execution in the content area
slug: editor-cancel-enter-key-execution-in-the-content-area
res_type: kb
---

## HOW-TO

Cancel the Enter key event execution in the content area of RadEditor.

## Description 

Sometimes you may need to cancel the Enter key execution for example in content validation scenarios. The section below will show you how to do that.

## Solution

RadEditor has a built-in EnterNewLine command that captures the Enter key event. 

To cancel the Enter, you need to handle the OnClientCommandExecuting event of RadEditor and cancel the EnterNewLine command, which will prevent the execution of the Enter key:

````ASP.NET
<telerik:RadEditor Id="RadEditor1" runat="server" OnClientCommandExecuting="OnClientCommandExecuting" ... />
<script>
function OnClientCommandExecuting(editor, args)  {
    if (args.get_commandName() == "EnterNewLine") {
        args.set_cancel(true);
    }
}
</script>
````



