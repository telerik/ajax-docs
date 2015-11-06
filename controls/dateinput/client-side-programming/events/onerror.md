---
title: OnError
page_title: OnError | RadDateInput for ASP.NET AJAX Documentation
description: OnError
slug: raddateinput/client-side-programming/events/onerror
tags: onerror
published: True
position: 7
---

# OnError



## 

The **OnError** client-side event handler is called when the input control detects that the user has tried to enter an invalid value. The input control may detect the error when the user presses a key to enter an invalid character, or after the input control loses focus and parses the value the user entered.


>note When **RadDateInput** cannot parse the value that the user entered, it raises two **OnError** events -- the first with the reason set to 1 (Parsing error) and the second with the reason set to 2 (Out of range).
>

The following example uses the **OnError** event to raise an alert when an error is detected:

````ASPNET
<telerik:RadMaskedTextBox ID="RadMaskedTextBox1" runat="server" Mask="(###) ###-#####">
	<ClientEvents OnError="HandleError" />
</telerik:RadMaskedTextBox>
<telerik:RadTextBox ID="RadTextBox1" runat="server">
	<ClientEvents OnError="HandleError" />
</telerik:RadTextBox>
<telerik:RadNumericTextBox ID="RadNumericTextBox1" runat="server" MaxValue="10" MinValue="0">
	<Clientevents onerror="HandleError" />
</telerik:RadNumericTextBox>
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
		else
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

 * [OnValueChanging]({%slug raddateinput/client-side-programming/events/onvaluechanging%})
