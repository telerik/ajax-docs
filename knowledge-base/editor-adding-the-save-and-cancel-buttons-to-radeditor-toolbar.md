---
title: Add the Save and Cancel buttons to RadEditor toolbar
description: See how to add the Save and Cancel buttons to RadEditor's toolbar and register their commands
type: how-to
page_title: Add the Save and Cancel buttons to RadEditor toolbar
slug: editor-adding-the-save-and-cancel-buttons-to-radeditor-toolbar
res_type: kb
---

## Description

The example below will show you how to add the Save and Cancel buttons to RadEditor's toolbar and register their commands.

## Solution

Here is how to add two custom buttons named Save and Cancel to the toolbar and attach their javascript command:

````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server">  
    <Tools>  
        <telerik:EditorToolGroup>  
            <telerik:EditorTool Name="Save" />  
            <telerik:EditorTool Name="Cancel" />  
        </telerik:EditorToolGroup>  
    </Tools>  
</telerik:RadEditor>  
<script type="text/javascript">  
Telerik.Web.UI.Editor.CommandList["Save"] = function(commandName, editor, args)  
{  
       
     editor.set_html(editor.get_html());  
     document.form1.submit();  
       
}  
Telerik.Web.UI.Editor.CommandList["Cancel"] = function(commandName, editor, args)  
{  
    history.back(-1);   
}  
</script> 
````

