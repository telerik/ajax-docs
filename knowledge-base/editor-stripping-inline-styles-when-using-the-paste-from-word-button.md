---
title: Stripping inline styles when using the Paste from Word button
description: Stripping inline styles when using the Paste from Word button of RadEditor. Check it now!
type: how-to
page_title: Stripping inline styles when using the Paste from Word button
slug: editor-stripping-inline-styles-when-using-the-paste-from-word-button
res_type: kb
---


## HOW-TO 
 Stripping inline styles when using the **Paste from Word** or **Paste from Word strip Font** buttons  
   
## DESCRIPTION  
 The ** Paste from Word** icon is using the **MSWord** setting of the [StripFormattingOptions property](https://docs.telerik.com/devtools/aspnet-ajax/introduction) and the **Paste from Word strip Font**  icon is using the **MSWordRemoveAll** one. Both paste options strip only the Word formatting (mso- attributes and classes,<o:p> tags and other) without cleaning the inline styles. This means that the paragraph margins and other inline style settings will be untouched and this could spoil the appearance of the pasted content when it is displayed on the public site.  
   
SOLUTION  
To strip the inline styles when pasting content through the **Paste From Word **or **Paste From Word strip Font** use the following code that will fire the **FormatStripper** tool with a value of **CSS**, e.g.  
 
 
````ASP.NET
<script type="text/javascript">   
function OnClientCommandExecuted(editor, args)   
{   
   if (!args || !args.get_commandName) return;   
   //The command name   
   var commandName = args.get_commandName();      
    
   var value = args.get_value();              
   
   if(commandName=="PasteFromWord" || commandName == "PasteFromWordNoFontsNoSizes")   
   {   
        editor.fire("FormatStripper", {value : "CSS"});   
   }   
}   
</script>   
   
<telerik:radeditor runat="server" ID="RadEditor1"   
    OnClientCommandExecuted="OnClientCommandExecuted">   
</telerik:radeditor>   
````
 
   
 More information about the different Paste from Word features of RadEditor is available in this live example: [Cleaning Word Formatting](http://demos.telerik.com/aspnet-ajax/editor/examples/cleaningwordformatting/defaultcs.aspx).  

 