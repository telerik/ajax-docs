---
title: OnValueChanged
page_title: OnValueChanged | UI for ASP.NET AJAX Documentation
description: OnValueChanged
slug: input/client-side-programming/events/onvaluechanged
tags: onvaluechanged
published: True
position: 15
---

# OnValueChanged



## 

The __OnValueChanged__ client-side event handler is called when the user changes the value of the input control. The event occurs immediately after the control loses focus and its value has been updated, but before the server-side __TextChanged__ event.

The __OnValueChanged__ event only occurs if the user entered a valid value that is different from the old value.

>note The __OnValueChanged__ event is supported by all __RadInput__ controls.
>


Two parameters are passed to the event handler:

* __sender__ is input control.

* __eventArgs__ has the following methods:

* __set_cancel()__ lets you permit or block the postback that occurs when the __AutoPostBack__ property is __True__. Calling __set_cancel(true)__ prevents the postback.

* __get_oldValue()__ returns the string value of the input control before the user made any changes.

* __get_newValue()__ returns the string value that was just assigned to the input control.

>note Range checking occurs after the __OnValueChanged__ event. If the user enters a value that is invalid only because it is out of range, the __OnValueChanged__ event still occurs, and __get_newValue()__ returns the value that is out of range. On __RadNumericTextBox__ , this value may be subsequently changed.
>


>note On __RadMaskedTextBox__ , the __set_cancel()__ method has no effect.
>


In addition to the methods listed above, on __RadDateInput__ the __eventArgs__ parameter has two additional methods:

* __get_oldDate()__ returns the date value of the control before the user made any changes, or __null__ if the value was unassigned.

* __get_newDate()__ returns the date value that was just assigned to the control, or __null__ if the user entered an empty string.

The following example uses the __OnValueChanged__ event to prevent a postback if the user entered an empty string:

````ASPNET
	    <telerik:RadTextBox ID="RadTextBox1" runat="server" AutoPostBack="True">
	        <ClientEvents OnValueChanged="PreventPostback" />
	    </telerik:RadTextBox>
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

 * [OnValueChanging]({%slug input/client-side-programming/events/onvaluechanging%})

 * [TextChanged Event]({%slug input/server-side-programming/textchanged-event%})
