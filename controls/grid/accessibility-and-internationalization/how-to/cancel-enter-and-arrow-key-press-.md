---
title: Cancel Enter and Arrow Key Press 
page_title: Cancel Enter and Arrow Key Press  | UI for ASP.NET AJAX Documentation
description: Cancel Enter and Arrow Key Press 
slug: grid/accessibility-and-internationalization/how-to/cancel-enter-and-arrow-key-press-
tags: cancel,enter,and,arrow,key,press,
published: True
position: 1
---

# Cancel Enter and Arrow Key Press 



## 

Sometimes it may be necessary, when keyboard navigation for the control has been enabled, to disable/cancel certain key press.For example, one may not want to enter edit mode (when pressing [Enter]) or to allow only one-way movement with the keys.

The necessary steps to achieve this are listed below:

1. Enable Keyboard navigation

1. Specify a function that will be called client-side, when a key is pressed

1. In the client-side function, check the code of the key that was pressed

1. Depending on a condition, cancel the key press

This approach is demonstrated in the code samples below:

````ASPNET
	<ClientSettings AllowKeyboardNavigation="true" ClientEvents-OnKeyPress="KeyPressed">
	     <Selecting AllowRowSelect="true" />
	</ClientSettings>
````



And the JavaScript code:

````JavaScript
	    function KeyPressed(sender, eventArgs) {
	      if (eventArgs.get_keyCode() == 13) {
	        eventArgs.set_cancel(true)
	      }
	    }
````


