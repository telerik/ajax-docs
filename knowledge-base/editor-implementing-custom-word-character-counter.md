---
title: Implementing custom Word Character counter
description: Implementing a custom Word Character counter in RadEditor. Check it now!
type: how-to
page_title: Implementing custom Word  Character counter
slug: editor-implementing-custom-word-character-counter
res_type: kb
---


   
 **HOW-TO**  

Implement custom Word / Character counter  
   
 **SOLUTION:  
The code below demonstrates how to implement a custom counter by using the **onkeydown** event of RadEditor, regular expressions as well as a standard HTML **SPAN **element, which will display the words and characters count.  
   
````ASP.NET
<script type="text/javascript">
function OnClientLoad(editor)
{ 
    editor.attachEventHandler ("onkeydown", function (e)
    {
        var content = editor.get_text(); //returns the editor's content as plain text
        var words = 0; 
        if (content) 
        { 
            var punctRegX = /[!\.?;,:&_\-\-\{\}\[\]\(\)~#'"]/g; 
            var contentcontent = content.replace(punctRegX, ""); 
            var trimRegX = /(^\s+)|(\s+$)/g; 
            contentcontent = content.replace(trimRegX, ""); 
            if (content) 
            { 
                splitRegX = /\s+/; 
                var array = content.split(splitRegX); 
                words = array.length; 
            } 
        } 
    var counter = $get("counter");    
    counter.innerHTML = "Words: " + words + " Characters: " + content.length; 
    });
}
</script>

<span id="counter"></span>
<telerik:RadEditor id="RadEditor1" OnClientLoad="OnClientLoad" Runat="server"></telerik:RadEditor>
````
  

 


 