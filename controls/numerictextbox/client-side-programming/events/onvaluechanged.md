---
title: OnValueChanged
page_title: OnValueChanged | RadNumericTextBox for ASP.NET AJAX Documentation
description: OnValueChanged
slug: numerictextbox/client-side-programming/events/onvaluechanged
tags: onvaluechanged
published: True
position: 15
---

# OnValueChanged



## 

The **OnValueChanged** client-side event handler is called when the user changes the value of the input control. The event occurs immediately after the control loses focus and its value has been updated, but before the server-side **TextChanged** event.

The **OnValueChanged** event only occurs if the user entered a valid value that is different from the old value.


Two parameters are passed to the event handler:

* **sender** is input control.

* **eventArgs** has the following methods:

	* **set_cancel()** lets you permit or block the postback that occurs when the **AutoPostBack** property is **True**. Calling **set_cancel(true)** prevents the postback.

	* **get_oldValue()** returns the string value of the input control before the user made any changes.

	* **get_newValue()** returns the string value that was just assigned to the input control.

>note Range checking occurs after the **OnValueChanged** event. If the user enters a value that is invalid only because it is out of range, the **OnValueChanged** event still occurs, and **get_newValue()** returns the value that is out of range. On **RadNumericTextBox** , this value may be subsequently changed.
>

The following example uses the **OnValueChanged** event to prevent a postback if the user entered an empty string:

````ASPNET
<telerik:RadNumericTextBox ID="RadNumericTextBox1" runat="server" AutoPostBack="True">
	<ClientEvents OnValueChanged="PreventPostback" />
</telerik:RadNumericTextBox>
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

 * [OnValueChanging]({%slug numerictextbox/client-side-programming/events/onvaluechanging%})

 * [TextChanged Event]({%slug numerictextbox/server-side-programming/textchanged-event%})
