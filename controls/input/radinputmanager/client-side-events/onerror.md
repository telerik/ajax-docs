---
title: OnError
page_title: OnError | UI for ASP.NET AJAX Documentation
description: OnError
slug: input/radinputmanager/client-side-events/onerror
tags: onerror
published: True
position: 3
---

# OnError



## 

The __OnError__event handler is raised when the user presses a keyboard key while the textbox extended via the __RadInputManager__ has focus, and an error occurs - for example when trying to enter a character in a Numeric textbox.

The signature of the event handler is unified and is the same as in the other client side event handlers available for the control. It receives two arguments - the sender which raised the event, and another argument, which gives access to additional client side methods.

Below is a small code snippet, which demonstrates how to get the reason for the error message - a parse exception, or an Out-Of-Range exception:

````JavaScript
	        function OnError(sender, eventArgs)
	        {
	            var errorReason = eventArgs.get_reason() == 1 ? "Parse Exception" : "Out Of Range Exception";
	            alert(errorReason);
	        }
````


