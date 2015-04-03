---
title: OnKeyPress
page_title: OnKeyPress | UI for ASP.NET AJAX Documentation
description: OnKeyPress
slug: input/client-side-programming/events/onkeypress
tags: onkeypress
published: True
position: 9
---

# OnKeyPress



## 

The __OnKeyPress__ client-side event handler is called when the user presses a key and is supported by all __RadInput__ controls.

>note The event imitates the standard DOM __onkeypress__ event which does not fire for all keys (e.g. ALT, CTRL, SHIFT, ESC) in all browsers, as opposed to the __onkeydown__ event, which works for all keys.
>


Two parameters are passed to the event handler:

* __sender__ is the input control.

* __eventArgs__ has the following methods:

* __set_cancel()__ lets you prevent the key press from entering a new character into the input control. ____

* __get_keyCode()__ returns the key code for the key that was pressed.

* __get_keyCharacter()__ returns the character that is about to be entered into the input control in response to the key press.

* __get_domEvent()__ returns the DOM event object for the key press.

The following example uses the __OnKeyPress__ event to limit input to the letters 'a' to 'z' and 'A' to 'Z':

````ASPNET
	    <telerik:RadTextBox ID="RadTextBox1" runat="server">
	        <ClientEvents OnKeyPress="AlphabetOnly" />
	    </telerik:RadTextBox>
````



````JavaScript
	    <script type="text/javascript">
	        function AlphabetOnly(sender, eventArgs)
	        {
	            var c = eventArgs.get_keyCode();
	            if ((c < 65) || (c > 90 && c < 97) || (c > 122))
	                eventArgs.set_cancel(true);
	        }
	    </script>
````



During the __OnKeyPress__ event the value is still not updated, therefore, *__sender.get_value()__* will return the old one.

# See Also

 * [OnValueChanging]({%slug input/client-side-programming/events/onvaluechanging%})
