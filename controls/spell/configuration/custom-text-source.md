---
title: Custom Text Source
page_title: Custom Text Source | RadSpell for ASP.NET AJAX Documentation
description: Custom Text Source
slug: spell/configuration/custom-text-source
tags: custom,text,source
published: True
position: 2
---

# Custom Text Source

**RadSpell** is not limited to spellchecking HTML elements only. You can also define a custom text source to provide text for spellchecking. Using a custom text source allows you to spell check virtually anything on the web page that you can access programmatically. See the [live demo](http://demos.telerik.com/aspnet-ajax/Spell/Examples/TextSource/DefaultCS.aspx) for an example of spell checking a Flash object.

To implement spellchecking for text sources other than HTML, define a JavaScript object with two methods, get_text() and set_text(text), and then use the set_textSource(textSource) method of the RadSpell client-side object.

````JavaScript
<telerik:RadCodeBlock ID="RadCodeBlock1" runat="server">
   <script type="text/javascript">
   function MySpellSource()
   {        
	  this.get_text = function()        
	  {                
		  return "colourful mistakrn texr";        
	  }        
	  this.set_text = function(text)        
	  {                
		  alert("The corrected text is: " + text);        
	  }
   }
   
   function spellCheck()
   {                                   
	   var spell = $find('<%= RadSpell1.ClientID %>');
	   spell.set_textSource(new MySpellSource());
   }
   </script>
</telerik:RadCodeBlock> 
````

````ASP.NET
<body onload="setTimeout(function() { spellCheck(); }, 100);">
   <form id="form2" runat="server">
	   <asp:ScriptManager ID="ScriptManager1" runat="server" />
	   <div>
		   <asp:TextBox ID="TextBox1" runat="server"></asp:TextBox>
		   <telerik:RadSpell ID="RadSpell1" runat="server" ControlToCheck="TextBox1" />
	   </div>
   </form>
</body> 
````

# See Also

 * [Live Demo: Custom Text Source](http://demos.telerik.com/aspnet-ajax/Spell/Examples/TextSource/DefaultCS.aspx)
