---
title: OnKeyPress
page_title: OnKeyPress | RadTextBox for ASP.NET AJAX Documentation
description: OnKeyPress
slug: radtextbox/client-side-programming/events/onkeypress
tags: onkeypress
published: True
position: 9
---

# OnKeyPress




The **OnKeyPress** client-side event handler is called when the user presses a key and is supported by all **RadInput** controls.

>note The event imitates the standard DOM **onkeypress** event which does not fire for all keys (e.g. ALT, CTRL, SHIFT, ESC) in all browsers, as opposed to the **onkeydown** event, which works for all keys.
>


Two parameters are passed to the event handler:

* **sender** is the input control.

* **eventArgs** has the following methods:

	* **set_cancel()** lets you prevent the key press from entering a new character into the input control. 

	* **get_keyCode()** returns the key code for the key that was pressed.

	* **get_keyCharacter()** returns the character that is about to be entered into the input control in response to the key press.

	* **get_domEvent()** returns the DOM event object for the key press.

The following example uses the **OnKeyPress** event to limit input to the letters 'a' to 'z' and 'A' to 'Z':

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



During the **OnKeyPress** event the value is still not updated, therefore, **sender.get_value()** will return the old one.

# See Also

 * [OnValueChanging]({%slug radtextbox/client-side-programming/events/onvaluechanging%})
