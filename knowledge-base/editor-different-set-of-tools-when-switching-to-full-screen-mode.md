---
title: Different Set Of Tools When Switching To Full Screen Mode
description: Different Set Of Tools for RadEditor when Switching To Full Screen Mode. Check it now!
type: how-to
page_title: Different Set Of Tools When Switching To Full Screen Mode
slug: editor-different-set-of-tools-when-switching-to-full-screen-mode
res_type: kb
---


 
## HOW-TO  
 Set different tools when switching to full screen mode of RadEditor
   
## DESCRIPTION  
 Sometimes it is needed to show different toolbar buttons in Full Screen mode and restore the original tool set of the editor when switching back to **Standard** mode. The solution below demonstrates how to achieve this scenario.  
   
## SOLUTION  
 To implemention requires two editors with different toolbars on the page and each one of the editors should be placed in different DIV element. The first DIV is visible and the second one is hidden. When pressing the **ToggleScreenMode **button of the first editor, the DIV of the visible editor is hidden and the second DIV became visible. The content from the first editor is transmitted to the second one, which is now in full screen mode.  
   

Here is the example:  

````ASP.NET
<div id="editorContainer1">  
<telerik:RadEditor runat="server" ID="RadEditor1" OnClientCommandExecuting="OnClientCommandExecuting1">  
    <Tools> 
        <telerik:EditorToolGroup> 
            <telerik:EditorTool Name="Bold" /> 
            <telerik:EditorTool Name="Italic" /> 
            <telerik:EditorTool Name="Underline" /> 
            <telerik:EditorTool Name="InsertTable" /> 
            <telerik:EditorTool Name="togglescreenmode" /> 
        </telerik:EditorToolGroup> 
    </Tools> 
</telerik:RadEditor> 
</div> 
<div id="editorContainer2" style="display:none;">  
<telerik:RadEditor runat="server" ID="RadEditor2" OnClientCommandExecuting="OnClientCommandExecuting2">  
     <Tools> 
        <telerik:EditorToolGroup> 
            <telerik:EditorTool Name="Cut" /> 
            <telerik:EditorTool Name="Copy" /> 
            <telerik:EditorTool Name="Paste" /> 
            <telerik:EditorTool Name="InsertTime" /> 
            <telerik:EditorTool Name="togglescreenmode" /> 
        </telerik:EditorToolGroup> 
    </Tools> 
</telerik:RadEditor> 
</div> 
 
 
<script type="text/javascript">  
var div1 = document.getElementById("editorContainer1");  
var div2 = document.getElementById("editorContainer2");  
var editor1;  
var editor2;  
var toHide = false;  
var content;  
 
Sys.Application.add_load(function()  
  {  
     editor1 = $find("<%=RadEditor1.ClientID%>"); //get a reference to RadEditor client object  
     editor2 = $find("<%=RadEditor2.ClientID%>");  
  }  
);  
 
function OnClientCommandExecuting1(editor, args)  
{  
   var commandName = args.get_commandName();     
   if(commandName == "ToggleScreenMode")  
   {  
       div1.style.display = "none";  
       div2.style.display = "";  
       toHide = false;  
       editor2.fire("ToggleScreenMode");  
       content = editor1.get_html(true);  
       editor2.set_html(content);  
       args.set_cancel(true);  
       
   }  
}  
function OnClientCommandExecuting2(editor, args)  
{  
    var commandName = args.get_commandName();     
    if(commandName == "ToggleScreenMode")  
    {  
        if (toHide == true)   
        {  
            div2.style.display = "none";  
            div1.style.display = "";  
            content = editor2.get_html(true);  
            editor1.set_html(content);  
        }                     
      
       toHide = true;   
    }  
}  
</script> 
````
 
  