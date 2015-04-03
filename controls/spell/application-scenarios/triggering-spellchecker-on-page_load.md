---
title: Triggering Spellchecker on Page_Load
page_title: Triggering Spellchecker on Page_Load | UI for ASP.NET AJAX Documentation
description: Triggering Spellchecker on Page_Load
slug: spell/application-scenarios/triggering-spellchecker-on-page_load
tags: triggering,spellchecker,on,page_load
published: True
position: 2
---

# Triggering Spellchecker on Page_Load



## Scenario

How to trigger the spellchecker on Page_Load.

## Solution

You can trigger the spellcheck on __Page_Load__, but you have to use a client-side approach:

1) Set the spellcheck __ButtonType__ property to "None"

2) Set the <body> __OnLoad__ event like this:

````ASPNET
	<body onload="setTimeout(function() { $find('<%= RadSpell1.ClientID %>').startSpellCheck(); }, 100);">  
	   <form id="form2" runat="server">
	       <asp:ScriptManager ID="ScriptManager1" runat="server">
	       </asp:ScriptManager>
	       <asp:TextBox ID="TextBox1" runat="server" Text="baad speeleng"></asp:TextBox>
	       <telerik:RadSpell ID="RadSpell1" runat="server" ControlToCheck="TextBox1" ButtonType="None"/>
	   </form>
	</body> 
````


