---
title: Applying external stylesheet to the content of RadEditor in Preview mode
description: See how to import external stylesheet in the content of RadEditor in Preview mode.
type: how-to
page_title: Apply external stylesheet to the content of RadEditor in Preview mode
slug: editor-apply-external-stylesheet-to-the-content-of-radeditor-in-preview-mode
res_type: kb
---

## Description

Sometimes it is needed to apply external CSS stylesheet to the editor's content in Preview mode. The solution below demonstrates how to apply CSS formatting with a LINK tag pointing to an external CSS file when switching to Preview mode. When toggling back to Design mode then the LINK tag will be removed.

The code below also demonstrates how to attach your code to the OnClientModeChange event property of RadEditor that is fired when switching between the editor's Design, Html and Preview modes and allows to modify the content, apply custom formatting, etc.

## Solution

Start by creating your own CSS file and define the classes in it that will be applied to the content area in Preview mode. For example:

````CSS
body  
{  
    background-color: Red !important;  
    color: Blue !important;  
    font-family: Tahoma !important;  
} 
````

This settings will set the background in Preview mode to be Red and the text to be blue with font name Tahoma. Save the file.
 
After put the following JavaScript code on the page with the editor:

````ASP.NET
<script type="text/javascript">    
function OnClientModeChange(editor)    
{    
   var mode = editor.get_mode();    
   var doc = editor.get_document();                         
   var head = doc.getElementsByTagName("HEAD")[0];    
   var link;    
       
   switch (mode)    
   {    
      case 1: //remove the external stylesheet when displaying the content in Design mode    
        var external = doc.getElementById("external");    
        head.removeChild(external);    
        break;    
      case 2:    
          break;    
      case 4: //apply your external css stylesheet to Preview mode    
        link = doc.createElement("LINK");    
        link.setAttribute("href", "editor.css");    
        link.setAttribute("rel", "stylesheet");    
        link.setAttribute("type", "text/css");    
        link.setAttribute("id", "external");    
        head.appendChild(link);    
        break;    
  }    
}    
</script>   
<telerik:RadEditor ID="RadEditor1" runat="server" OnClientModeChange="OnClientModeChange">    
    <Content>   
        Sample Content            
    </Content>   
</telerik:RadEditor>  
````

