---
title: Ignoring custom text during spellchecking
description: Ignoring custom text during spellchecking in RadEditor. Check it now!
type: how-to
page_title: Ignoring custom text during spellchecking
slug: editor-ignoring-custom-text-during-spellchecking
res_type: kb
---


## PROBLEM  
 It is sometimes necessary to escape some text in order to process it programmatically later.  Say we are creating an email template with name placeholders like this:  
 
````ASP.NET
 Hi, <#FirstName#> <#LastName#>
```` 
 
We would not want the special symbols to be marked as SpellCheck errors.  
   
## SOLUTION  
 RadSpell that ships with RadEditor can have a custom definition of its client-side text source.  We can define such a source that will transform the special symbols to something that looks like a HTML tag.  Such tags are not processed by the SpellCheck engine, and you can replace them back after the corrections.  The &lt; and &gt; symbols in the RadEditor contents area will be represented by their respective HTML entities -- &gt; and &lt;, so we need to define a text source that will skip those.  We use some regular expressions to do that:  
   
````ASP.NET
<telerik:RadEditor id="RadEditor1" 
    Runat="server">  
    <Tools>  
        <telerik:EditorToolGroup>   
            <telerik:EditorTool Name="CustomSpellCheck" Visible="true"  />  
        </telerik:EditorToolGroup>  
    </Tools>  
</telerik:RadEditor>    
<telerik:RadSpell ID="RadSpell1" runat="server" ButtonType="None" />     
<script type="text/javascript">  
   Telerik.Web.UI.Editor.CommandList["CustomSpellCheck"] = function(commandName, editor, args)  
    {  
            var spell = $find('<%=RadSpell1.ClientID %>');  
            spell.set_textSource(new SkippingTextSource(editor));  
            spell.startSpellCheck();  
    };  
 
    function SkippingTextSource(editor)  
    {  
        this.editor = editor;  
    }  
    SkippingTextSource.prototype.get_text = function()  
    {  
        var editor = $find("<%=RadEditor1.ClientID%>");  
        var text = editor.get_html();  
        var escaped = text.replace(/&lt;#([^#]+)#&gt;/g, "<?$1?>");  
        return escaped;  
    }  
      
    SkippingTextSource.prototype.set_text = function(text)  
    {  
        var editor = $find("<%=RadEditor1.ClientID%>");  
        var unescaped = text.replace(/<\?([^?]+)\?>/g, "&lt;#$1#&gt;");  
        editor.set_html(unescaped);  
    }  
</script>
````
 
  