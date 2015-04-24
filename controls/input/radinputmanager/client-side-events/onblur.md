---
title: OnBlur
page_title: OnBlur | RadInput for ASP.NET AJAX Documentation
description: OnBlur
slug: input/radinputmanager/client-side-events/onblur
tags: onblur
published: True
position: 0
---

# OnBlur



## 

The **OnBlur** event handler is raised when a textbox extended via the **RadInputManager** loses focus.

The signature of the event handler is unified and is the same as in the other client side event handlers available for the control. It receives two arguments - the sender which raised the event, and another argument, which gives access to additional client side methods.

Below is a small code snippet, which demonstrates how to get the value which the user entered in a textbox, when the focus is lost:

````JavaScript
function OnBlur(sender, eventArgs)
{
	alert(eventArgs.get_targetInput().get_value());
}
````


