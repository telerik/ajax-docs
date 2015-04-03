---
title: Launching on Client-side Event
page_title: Launching on Client-side Event | UI for ASP.NET AJAX Documentation
description: Launching on Client-side Event
slug: spell/application-scenarios/launching-on-client-side-event
tags: launching,on,client-side,event
published: True
position: 1
---

# Launching on Client-side Event



## Scenario

How to launch the spellchecker on various client-side events.

## Solution

The spellchecker is started with a JavaScript function call on the client and can be invoked from a client-side event handler. For example, a TextBox control can be set to automatically check the spelling of its text once the user is finished typing and moves on to another control. This approach can be used to bind the spellchecker to any client-side event.

Follow the steps below to achieve this scenario:

1. We will assume that the TextBox control you want to check has ID of "TextBox1".

2. Set the __RadSpell ButtonType__ property to __None__. This will hide the default spellcheck button from the form:

````ASPNET
	     
							<telerik:radspell id="RadSpell1" runat="server" controltocheck="TextBox1" buttontype="None" /> 
				
````



3. Add a JavaScript function to the web page that starts the spellchecker. In this example the function is called "spellCheck()".

````JavaScript
	    	function spellCheck() {
	    		var spell = $find('<%= RadSpell1.ClientID %>');
	    		spell.startSpellCheck();
	    	}	
````



4. Make the TextBox control __onBlur__ client-side handler call the new spellCheck() function:

````ASPNET
	     
							<asp:TextBox id="TextBox1" onblur="javascript: spellCheck();" runat="server">this is a mistakr</asp:TextBox> 
				
````


