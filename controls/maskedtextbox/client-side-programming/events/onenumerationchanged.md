---
title: OnEnumerationChanged
page_title: OnEnumerationChanged - RadMaksedTextBox
description: Check our Web Forms article about OnEnumerationChanged.
slug: radmaskedtextbox/client-side-programming/events/onenumerationchanged
tags: onenumerationchanged
published: True
position: 6
---

# OnEnumerationChanged



The **OnEnumerationChanged** client-side event handler is called when the value of an enumerated mask part is set. This event occurs even if the setting of the enumerated value does not result in a change (for example, after a postback).

>note The **OnEnumerationChanged** event is supported by **RadMaskedTextBox** .
>


Two parameters are passed to the event handler:

* **sender** is the input control.

* **eventArgs** has the following methods:

	* **set_cancel()** lets you prevent the value from changing.

	* **get_newValue()** returns the new value assigned to the mask part if the change is allowed.

	* **get_oldValue()** returns the current value assigned to the mask part, before the change.

	* **get_currentPart()** returns the client-side object of the mask part whose value the user is trying to change.

The following example uses the **OnEnumerationChanged** event display an alert when the user changes the value of an enumerated mask part :

````ASPNET
<telerik:RadMaskedTextBox RenderMode="Lightweight" ID="RadMaskedTextBox1" runat="server" Mask="<Mon|Tue|Wed|Thu|Fri|Sat|Sun>" PromptChar="_">
	<ClientEvents OnEnumerationChanged="EnumerationChanged" />
</telerik:RadMaskedTextBox>
````



````JavaScript
<script type="text/javascript">
	function EnumerationChanged(source, eventArgs)
	{
		if (eventArgs.get_oldValue() != eventArgs.get_newValue())
			alert("Changing from " + eventArgs.get_oldValue() + " to " 
			+ eventArgs.get_NewValue() + " at position " + eventArgs.get_currentPart().offset);
	}
</script>
````



# See Also

 * [OnMoveDown]({%slug radmaskedtextbox/client-side-programming/events/onmovedown%})

 * [OnMoveUp]({%slug radmaskedtextbox/client-side-programming/events/onmoveup%})
