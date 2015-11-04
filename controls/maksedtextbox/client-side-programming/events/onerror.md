---
title: OnError
page_title: OnError | RadMaskedTextBox for ASP.NET AJAX Documentation
description: OnError
slug: radmaskedtextbox/client-side-programming/events/onerror
tags: onerror
published: True
position: 7
---

# OnError



## 

The **OnError** client-side event handler is called when the input control detects that the user has tried to enter an invalid value. The input control may detect the error when the user presses a key to enter an invalid character, or after the input control loses focus and parses the value the user entered.


On **RadMaskedTextBox**, the following two parameters are passed to the event handler:

* **sender** is the masked text box.

* **eventArgs** has the following methods:

	* **set_cancel()** lets you tell the masked text box to cancel the event that caused the error.

	* **get_newValue()** returns the invalid value that the user tried to assign to a mask part.

	* **get_oldValue()**returns the value that was assigned to the mask part before the error.

	* **get_currentPart()** returns the client-side object of the mask part that detected the error.

The following example uses the **OnError** event to raise an alert when an error is detected:

````ASPNET
<telerik:RadMaskedTextBox ID="RadMaskedTextBox1" runat="server" Mask="(###) ###-#####">
	<ClientEvents OnError="HandleError" />
</telerik:RadMaskedTextBox>

````



````JavaScript
<script type="text/javascript">
	function HandleError(sender, eventArgs)
	{
		if (sender.get_id() == "<%= RadMaskedTextBox1.ClientID %>")
		{
			alert("Invalid value: " + eventArgs.get_newValue());
			var part = eventArgs.get_currentPart();
			if (part)
			{
				sender.set_cursorPosition(part.offset);
			}
		}
		
		eventArgs.set_cancel(true);
	}
</script>
````



# See Also

 * [OnValueChanging]({%slug radmaskedtextbox/client-side-programming/events/onvaluechanging%})
