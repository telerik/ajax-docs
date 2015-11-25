---
title: OnError
page_title: OnError | RadNumericTextBox for ASP.NET AJAX Documentation
description: OnError
slug: numerictextbox/client-side-programming/events/onerror
tags: onerror
published: True
position: 7
---

# OnError



The **OnError** client-side event handler is called when the input control detects that the user has tried to enter an invalid value. The input control may detect the error when the user presses a key to enter an invalid character, or after the input control loses focus and parses the value the user entered.


On **RadNumericTextBox**, the following two parameters are passed to the event handler:

* **sender** is the input control.

* **eventArgs** has the following methods:

	* **set_cancel()** lets you tell the input control to cancel the event that caused the error.

	* **get_inputText()** returns the value that the user tried to assign to the input control, except in the case when **RadNumericTextBox** detects an invalid character, in which case it returns the current value of the numeric text box.

	* **get_reason()** returns a value indicating the type of error that was detected.The possible values are:

		1. Parsing error.

		1. Out of range



The following example uses the **OnError** event to raise an alert when an error is detected:

````ASPNET

<telerik:RadNumericTextBox ID="RadNumericTextBox1" runat="server" MaxValue="10" MinValue="0">
	<Clientevents onerror="HandleError" />
</telerik:RadNumericTextBox>
````



````JavaScript
<script type="text/javascript">
	function HandleError(sender, eventArgs)
	{
			switch (eventArgs.get_reason())
			{
				case 1: // Parsing error     
					if (sender.get_id() == "<%= RadNumericTextBox1.ClientID %>")
						alert("Invalid character!");
					else
						alert("Value could not be parsed: " + eventArgs.get_inputText());
					break;
				case 2: // Out of range
					alert("Value out of range: " + eventArgs.get_inputText());
					break;
			}
		}
		eventArgs.set_cancel(true);
	}
</script>
````



# See Also

 * [OnValueChanging]({%slug numerictextbox/client-side-programming/events/onvaluechanging%})
