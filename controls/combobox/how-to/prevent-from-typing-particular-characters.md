---
title: Prevent from Typing Particular Characters
page_title: Prevent from Typing Particular Characters | UI for ASP.NET AJAX Documentation
description: Prevent from Typing Particular Characters
slug: combobox/how-to/prevent-from-typing-particular-characters
tags: prevent,from,typing,particular,characters
published: True
position: 5
---

# Prevent from Typing Particular Characters



## 

One of the limitations of the [OnClientKeyPressing]({%slug combobox/client-side-programming/events/onclientkeypressing%}) event is that it cannot be cancelled. This means that the user can type any letter in the input area of the RadComboBox (when **AllowCustomText** is set to *True*).

This example will show you how to disallow the user to type any of the following letters in the input area of the combo: !@#$%^&*()

````ASPNET
<telerik:radcombobox 
	id="RadComboBox1"
	runat="server" 
	allowcustomtext="true">
</telerik:radcombobox>
````



Add the following javascript code which will handle any keydown event on the input area and will cancel it by returning false (Internet Explorer) or preventing the default action (Firefox):

````JavaScript
	     	
function pageLoad()
{    
	var combo = $find("<%= RadComboBox1.ClientID %>");    
	var input = combo.get_inputDomElement();    
	input.onkeydown = onKeyDownHandler;
}

function onKeyDownHandler(e)
{    
	if (!e) {      
		e = window.event;           
		var code = e.keyCode || e.which;
		//do not allow any of these chars to be entered: !@#$%^&*()    
		if (e.shiftKey && code >= 48 && code <= 57) {
			 e.returnValue = false;
			 if (e.preventDefault) {
				 e.preventDefault();
			 }
		}        
	}
}
				
````



# See Also

 * [OnClientKeyPressing]({%slug combobox/client-side-programming/events/onclientkeypressing%})
