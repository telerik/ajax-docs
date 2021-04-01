---
title: Disable the built-in shortcuts of RadEditor
description: The sample below shows how to disable the RadEditor built-in shortcuts.
type: how-to
page_title: Disable the built-in shortcuts of RadEditor
slug: editor-disable-the-built-in-shortcuts-of-radeditor
res_type: kb
---

## Description

The sample below shows how to disable the RadEditor built-in shortcuts

## Solution

In specific scenarios, it is needed to disable the built-in shortcuts of RadEditor. The code below demonstrates how to achieve the desired behavior using the editor's OnClientCommandExecuting event. Note that when a command is called by a shortcut (not by a tool) the get_tool() method returns an undefined string e.g. 

````ASP.NET
<script type="text/javascript">     
    function OnClientCommandExecuting (editor, args)     
    {     
        if (args.get_name() && !args.get_tool())     
        {     
            args.set_cancel(true);     
        }     
    }     
</script>     
<telerik:RadEditor      
    ID="RadEditor1"      
    OnClientCommandExecuting="OnClientCommandExecuting"       
    runat="server">     
</telerik:RadEditor> 
````

