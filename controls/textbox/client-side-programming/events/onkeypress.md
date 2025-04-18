---
title: OnKeyPress
page_title: OnKeyPress - RadTextBox
description: Discover how to handle the OnKeyPress event in the TextBox control for custom client-side logic.
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
<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox1" runat="server">
	<ClientEvents OnKeyPress="AlphabetOnly" />
</telerik:RadTextBox>
````



````JavaScript
function AlphabetOnly(sender, eventArgs) {
	var currentVal = sender.get_value(); // Get the current value of the input
	var keyChar = eventArgs.get_keyCharacter(); // Get the character for the key that was pressed
	
	// Assuming the character is allowed and will be added to the input:
	var newVal = currentVal + keyChar; // Manually append the character to the current value
	alert(newVal)
}
````



During the **OnKeyPress** event the value is still not updated, therefore, **sender.get_value()** will return the old one.

# See Also

 * [OnValueChanging]({%slug radtextbox/client-side-programming/events/onvaluechanging%})
