---
title: Disable editing in Html mode of RadEditor
description: See how to export RadEditor content to PDF
type: how-to
page_title: Disable editing in Html mode of RadEditor
slug: editor-disable-html-editing-in-html-modes
res_type: kb
---

## Description

The sample below shows how to disable the editing inside the Html mode of RadEditor

## Solution

In specific scenarios, the user should be able to only see the HTML content without being allowed to edit it. The code below demonstrates how to disable the editor's HTML content area when switching to Html mode and preview HTML content only.

````ASP.NET
<script type="text/javascript">  
function OnClientLoad(editor, args)  
{  
   editor.add_modeChange(function(editor, args)  
   {  
       var mode = editor.get_mode();                       
       if (mode == 2)  
       {  
          var htmlMode = editor.get_textArea();  //get a reference to the Html mode textarea
          htmlMode.disabled = "true";  
       }  
   });    
}  
</script> 
<telerik:radeditor runat="server" OnClientLoad="OnClientLoad" ID="RadEditor1"></telerik:radeditor>  
````

