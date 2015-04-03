---
title: OnError
page_title: OnError | UI for ASP.NET AJAX Documentation
description: OnError
slug: input/client-side-programming/events/onerror
tags: onerror
published: True
position: 7
---

# OnError



## 

The __OnError__ client-side event handler is called when the input control detects that the user has tried to enter an invalid value. The input control may detect the error when the user presses a key to enter an invalid character, or after the input control loses focus and parses the value the user entered.

>note The __OnError__ event is supported by __RadNumericTextBox__ , __RadMaskedTextBox__ , and __RadDateInput__ .
>


On __RadNumericTextBox__ and __RadDateInput__, the following two parameters are passed to the event handler:

* __sender__ is the input control.

* __eventArgs__ has the following methods:

* __set_cancel()__ lets you tell the input control to cancel the event that caused the error.

* __get_inputText()__ returns the value that the user tried to assign to the input control, except in the case when __RadNumericTextBox__ detects an invalid character, in which case it returns the current value of the numeric text box.

* __get_reason()__ returns a value indicating the type of error that was detected.The possible values are:

1. Parsing error.

1. Out of range.

>note When __RadDateInput__ cannot parse the value that the user entered, it raises two __OnError__ events -- the first with the reason set to 1 (Parsing error) and the second with the reason set to 2 (Out of range).
>


On __RadMaskedTextBox__, the following two parameters are passed to the event handler:

* __sender__ is the masked text box.

* __eventArgs__ has the following methods:

* __set_cancel()__ lets you tell the masked text box to cancel the event that caused the error.

* __get_newValue()__ returns the invalid value that the user tried to assign to a mask part.

* __get_oldValue()__returns the value that was assigned to the mask part before the error.

* __get_currentPart()__ returns the client-side object of the mask part that detected the error.

The following example uses the __OnError__ event to raise an alert when an error is detected:

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

 * [OnValueChanging]({%slug input/client-side-programming/events/onvaluechanging%})
