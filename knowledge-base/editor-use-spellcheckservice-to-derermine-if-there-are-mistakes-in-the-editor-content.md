---
title: Use SpellCheckService to derermine if there are mistakes in the RadEditor content
description: See how to determine on submit if there are spelling mistakes in the RadEditor content and if any to automatically start the SpellChecker.
type: how-to
page_title: Use SpellCheckService to derermine if there are mistakes in the RadEditor content
slug: editor-use-spellcheckservice-to-derermine-if-there-are-mistakes-in-the-editor-content
res_type: kb
---

## Description

See how to determine on submit if there are spelling mistakes in the RadEditor content and if any to automatically start the SpellChecker.

## Solution

In some scenarios it is useful to ensure that the content to be submitted is spell checked and does not contain mistakes. The code bellow shows how to achieve this functionality.

````ASP.NET
<script type="text/javascript">      
function check()      
{      
    var editor = $find("RadEditor1");      
    editor.add_spellCheckLoaded(function()    
    {   
        var spell = editor.get_ajaxSpellCheck();    
        //this code is called when the spellchecking is finished   
        spell.add_spellCheckEnd(   
            function(sender, args)    
            {   
                //Now you may submit the content.   
            });   
        } );   
    var spellCheckService = $create(Telerik.Web.UI.SpellCheckService, editor.get_spellCheckJSON(), null, null);      
    spellCheckService.add_complete(function(sender, args)      
        {      
            //Check if there are mistakes in the content   
            if (args && args.badWords && args.badWords.length>0)      
            {    
                alert("There are spell mistakes in the content.");   
                editor.fire("AjaxSpellCheck");    
            }     
            else     
                alert ("There are no spell mistakes. The content can be submitted.");      
        });      
        spellCheckService.spellCheck(editor.get_text());      
}      
</script>     
<telerik:RadEditor ID="RadEditor1" runat="server" Skin="Default" ToolProviderID="">   
</telerik:RadEditor>   
<asp:Button id="btn1" runat="server" OnClientClick="check(); return false;" Text="Submit"/>  
````

