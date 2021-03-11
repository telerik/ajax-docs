---
title: Use RadSpell as a Custom Dialog
description: See how to Use RadSpell as a Custom Dialog of RadEditor
type: how-to
page_title: Use RadSpell as a Custom Dialog
slug: editor-use-radspell-as-a-custom-dialog
res_type: kb
---

## Description

Use RadSpell dialog as a Custom tool of RadEditor

## Solution

The code below demonstrates how to integrate the RadSpell dialog in RadEditor as a custom tool:

````ASP.NET
<telerik:radspell id="spell1" runat="server" buttontype="none" /> 
<telerik:radeditor runat="server" id="RadEditor1" Height="400px" Width="680px">  
 <tools> 
   <telerik:editortoolgroup> 
     <telerik:editortool name="SpellCheck" /> 
   </telerik:editortoolgroup> 
 </tools> 
 <content> 
  There are somee miztakes in this text  
 </content> 
 <SpellCheckSettings SpellCheckProvider="PhoneticProvider" WordIgnoreOptions="RepeatedWords" /> 
</telerik:radeditor> 
<script type="text/javascript">  
Telerik.Web.UI.Editor.CommandList.SpellCheck = function(commandName, editor)  
{  
 var spell = GetRadSpell('<%= spell1.ClientID %>');  
 spell.spellCheck(new PrometheusTextSource(editor));  
 return false;  
}  
var PrometheusTextSource = function(editor)  
{  
 this._editor = editor;  
 this.get_text = function() { return this._editor.get_html(); };  
 this.set_text = function(value) { this._editor.set_html(value); };  
}  
</script> 
````
