---
title: OnFocus
page_title: OnFocus | RadInput for ASP.NET AJAX Documentation
description: OnFocus
slug: input/radinputmanager/client-side-events/onfocus
tags: onfocus
published: True
position: 1
---

# OnFocus



## 

The **OnFocus** event handler is raised when a textbox extended via the **RadInputManager** receives focus.

The signature of the event handler is unified and is the same as in the other client side event handlers available for the control. It receives two arguments - the sender which raised the event, and another argument, which gives access to additional client side methods.

Below is a small code snippet, which demonstrates how to set a default value when the textbox receives focus:

````JavaScript
function onFocus(sender, eventArgs)
{
	//set some initial default value 
	eventArgs.get_targetInput().set_value("457");
}
````


