---
title: Enforce Spellchecking On Submit
description: Enforce Spellchecking On Submit in RadEditor. Check it now!
type: how-to
page_title: Enforce Spellchecking On Submit
slug: editor-enforce-spellchecking-on-submit
res_type: kb
---

   
## HOW-TO
 Enforce Spellchecking On Submit  
   
## SOLUTION 
The following code provides a way to get the editor to automatically run the inline spellchecker when the user clicks on the Submit button. This will allow the user to spellcheck the text and submit the page with the corrected content:  
   
 
````ASP.NET
<telerik:RadEditor ID="RadEditor1" runat="server"></telerik:RadEditor>
<input type="button" onclick="checkSpelling();return false;" value="SpellCheck and Submit" />
<script type="text/javascript">
function checkSpelling() 
{ 
    var editor = $find("<%=RadEditor1.ClientID %>"); //get reference to RadEditor's instance 
    editor.fire("AjaxSpellCheck"); //execute the RadEditor's command "AjaxSpellCheck" 
    editor.add_spellCheckLoaded(function()
    { 
        var spell = editor.get_ajaxSpellCheck();  //get a reference to RadEditor's SpellCheck 
        //save the content and submit the form when the spellchecker ends
        spell.add_spellCheckEnd(function(sender, args) 
        { 
            editor.saveContent(); //save the content before submission
            document.forms[0].submit(); //submit the form
        }); 
    }); 
}
</script>
````
 


 