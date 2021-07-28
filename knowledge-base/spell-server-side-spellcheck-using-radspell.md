---
title: Server-Side SpellCheck using RadSpell
description: Server-Side SpellCheck using RadSpell. Check it now!
type: how-to
page_title: Server-Side SpellCheck using RadSpell
slug: spell-server-side-spellcheck-using-radspell
res_type: kb
---
 
   
## HOW-TO
 SpellCheck custom text on the Server.  
   
## SOLUTION
 
Sometimes it is useful to execute a silent SpellCheck on the server and determine whether there are spelling mistakes in the text. The code bellow demonstrates how to achieve this functionality:
 
````C#
protected void Page_Load(object sender, EventArgs e)  
{  
    SpellChecker spell = new SpellChecker(Server.MapPath("~/App_Data/RadSpell"));  
    spell.Text = "Textt to Checkk";  
    spell.CheckText();  
    SpellCheckErrors errors = spell.Errors;  
    foreach (SpellCheckError error in errors)  
    {  
        Page.Response.Write(error.MistakenWord.ToString()+"</br>");  
    }  
} 
````
  
 
   
 Note that, the "*Server.MapPath("~/App\_Data/RadSpell")*" is the path to the dictionaries' folder.  


   