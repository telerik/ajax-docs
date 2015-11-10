---
title: OnKeyPress
page_title: OnKeyPress | RadInputManager for ASP.NET AJAX Documentation
description: OnKeyPress
slug: radinputmanager/client-side-events/onkeypress
tags: onkeypress
published: True
position: 2
---

# OnKeyPress



The **OnKeyPress** event handler is raised when the user presses a keyboard key while the textbox extended via the **RadInputManager** has focus.

The signature of the event handler is unified and is the same as in the other client side event handlers available for the control. It receives two arguments - the sender which raised the event, and another argument, which gives access to additional client side methods.

Below is a small code snippet, which demonstrates how to get the key character which the user entered in a textbox:

````JavaScript
function OnKeyPress(sender, eventArgs)
{
	//get the character value that was entered
	alert(eventArgs.get_keyCharacter());
}
````


