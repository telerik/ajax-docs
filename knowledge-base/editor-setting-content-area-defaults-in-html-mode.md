---
title: Setting Content Area Defaults in Html mode
description: Setting Content Area Defaults in Html mode of RadEditor. Check it now!
type: how-to
page_title: Setting Content Area Defaults in Html mode
slug: editor-setting-content-area-defaults-in-html-mode
res_type: kb
---

   
## HOW-TO
 Set Content Area Defaults in Html mode  
   
## SOLUTION  
 The code below demonstrates how to get a reference to the TextArea element of RadEditor used in Html mode and set its background-color and color properties programmatically:  
   
````ASP.NET
<script type="text/javascript">  
function OnClientLoad(editor)  
{          
    var area = editor.get_textArea(); //get reference to the textarea of RadEditor in Html mode  
    area.style.color = "red";  
    area.style.backgroundColor = "yellow";              
}  
</script> 
 
<telerik:RadEditor runat="server" 
    OnClientLoad="OnClientLoad" 
    ID="RadEditor1">  
</telerik:RadEditor> 
````
  

 