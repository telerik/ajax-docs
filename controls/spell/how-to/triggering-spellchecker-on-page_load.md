---
title: Triggering Spellchecker on Page_Load
page_title: Triggering Spellchecker on Page_Load | RadSpell for ASP.NET AJAX Documentation
description: Triggering Spellchecker on Page_Load
slug: spell/how-to/triggering-spellchecker-on-page_load
tags: triggering,spellchecker,on,page_load
published: True
position: 2
---

# Triggering Spellchecker on Page_Load

## Scenario

How to trigger the spellchecker on Page_Load.

## Solution

You can trigger the spellcheck on **Page_Load**, but you have to use a client-side approach:

1) Set the spellcheck **ButtonType** property to "None"

2) Set the body **OnLoad** event like this:

````ASP.NET
<body onload="setTimeout(function() { $find('<%= RadSpell1.ClientID %>').startSpellCheck(); }, 100);">  
   <form id="form2" runat="server">
	   <asp:ScriptManager ID="ScriptManager1" runat="server">
	   </asp:ScriptManager>
	   <asp:TextBox ID="TextBox1" runat="server" Text="baad speeleng"></asp:TextBox>
	   <telerik:RadSpell RenderMode="Lightweight" ID="RadSpell1" runat="server" ControlToCheck="TextBox1" ButtonType="None"/>
   </form>
</body> 
````


