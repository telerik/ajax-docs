---
title: OnValueChanged
page_title: OnValueChanged - RadMaskedTextBox
description: Check our Web Forms article about OnValueChanged.
slug: radmaskedtextbox/client-side-programming/events/onvaluechanged
tags: onvaluechanged
published: True
position: 15
---

# OnValueChanged




The **OnValueChanged** client-side event handler is called when the user changes the value of the input control. The event occurs immediately after the control loses focus and its value has been updated, but before the server-side **TextChanged** event.

The **OnValueChanged** event only occurs if the user entered a valid value that is different from the old value.

Two parameters are passed to the event handler:

* **sender** is input control.

* **eventArgs** has the following methods:

	* **get_oldValue()** returns the string value of the input control before the user made any changes.

	* **get_newValue()** returns the string value that was just assigned to the input control.

>note Range checking occurs after the **OnValueChanged** event. If the user enters a value that is invalid only because it is out of range, the **OnValueChanged** event still occurs, and **get_newValue()** returns the value that is out of range.
>


>note On **RadMaskedTextBox** , the **set_cancel()** method has no effect.
>


In addition to the methods listed above, on **RadDateInput** the **eventArgs** parameter has two additional methods:

* **get_oldDate()** returns the date value of the control before the user made any changes, or **null** if the value was unassigned.

* **get_newDate()** returns the date value that was just assigned to the control, or **null** if the user entered an empty string.

The following example uses the **OnValueChanged** event to prevent a postback if the user entered an empty string:

````ASPNET
<telerik:RadMaskedTextBox RenderMode="Lightweight" ID="RadMaskedTextBox1" runat="server" AutoPostBack="True">
	<ClientEvents OnValueChanged="PreventPostback" />
</telerik:RadMaskedTextBox>
````



````JavaScript
<script type="text/javascript">
	function PreventPostback(sender, eventArgs)
	{
		if (eventArgs.get_newValue() == "")
			eventArgs.set_cancel(true);
	}
</script>
````



# See Also

 * [TextChanged Event]({%slug radmaskedtextbox/server-side-programming/textchanged-event%})
