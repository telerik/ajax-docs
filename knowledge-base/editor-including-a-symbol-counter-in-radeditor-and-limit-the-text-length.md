---
title: Including a symbol counter in RadEditor and limit the text length
description: Including a symbol counter in RadEditor and limit the text length. Check it now!
type: how-to
page_title: Including a symbol counter in RadEditor and limit the text length
slug: editor-including-a-symbol-counter-in-radeditor-and-limit-the-text-length
res_type: kb
---

## HOW-TO  
Include a symbol counter in RadEditor and limit the text length  
   
## SOLUTION  
You could easily count the symbols which the user types or pastes into the editor's content area using the following code:  
   
 
````ASP.NET
<script type="text/javascript">     
var maxTextLength = 10;     
var messageText = 'You are not able to type more than ' + maxTextLength + ' symbols!';     
         
function isAlphaNumericKey(keyCode)     
{     
    if ((keyCode > 47 && keyCode < 58) || (keyCode > 64 && keyCode < 91))     
    {     
        return true;     
    }     
    return false;     
}     
             
function LimitCharacters(editor)     
{     
    editor.AttachEventHandler ("onkeydown", function (e)     
    {     
        e = (e == null)? window.event : e;     
        if (isAlphaNumericKey(e.keyCode))     
        {     
            textLength = editor.GetText().length;     
            if (textLength >= maxTextLength)     
            {     
                alert(messageText);     
                e.returnValue = false;     
                return false;     
            }     
        }     
    });     
    
editor.AttachEventHandler ("onpaste", function (e)     
{      
    var textLength = CalculateLength (editor);     
    if (textLength >= maxTextLength)     
    {     
        alert(messageText);     
        e.returnValue = false;     
        e.cancelBubble = true;      
        return false;     
    }      
});     
}     
             
function CalculateLength(editor)     
{     
    var textLength = editor.GetText().length;     
    var clipboardLength = window.clipboardData.getData("Text").length;     
    textLength += clipboardLength;     
    return textLength;     
}     
             
function OnClientCommandExecuting(editor, commandName, oTool)      
{      
    if (commandName == "PasteFromWord"    
    || commandName == "PasteFromWordNoFontsNoSizes"    
    || commandName == "PastePlainText"    
    || commandName == "PasteAsHtml"    
    || commandName == "Paste"    
    )      
    {     
        //Only if IE!!!      
        if (document.all)     
        {     
            var textLength = CalculateLength (editor);     
            if (textLength >= maxTextLength)     
            {     
                alert(messageText);     
                return false;     
            }      
        }     
    }     
}        
</script>     
<telerik:RadEditor id="RadEditor1" Runat="server"      
    OnClientCommandExecuting="OnClientCommandExecuting"    
    OnClientLoad="LimitCharacters">     
</telerik:RadEditor>    
````
     
   
Note that the OnClientLoad event is called when the editor is already initialized by RadEditorInitialize, just before it is ready of user to use. Thus you need to place the javascript above before the editor declaration in the aspx/ascx page.   
   
You can find more ideas in this forum thread [Charecter limit in RadEditor](https://www.telerik.com/forums/charector-limit-in-rad-editor).
 
  