---
title: OnEnumerationChanged
page_title: OnEnumerationChanged | UI for ASP.NET AJAX Documentation
description: OnEnumerationChanged
slug: input/client-side-programming/events/onenumerationchanged
tags: onenumerationchanged
published: True
position: 6
---

# OnEnumerationChanged



## 

The __OnEnumerationChanged__ client-side event handler is called when the value of an enumerated mask part is set. This event occurs even if the setting of the enumerated value does not result in a change (for example, after a postback).

>note The __OnEnumerationChanged__ event is supported by __RadMaskedTextBox__ .
>


Two parameters are passed to the event handler:

* __sender__ is the input control.

* __eventArgs__ has the following methods:

* __set_cancel()__ lets you prevent the value from changing.

* __get_newValue()__ returns the new value assigned to the mask part if the change is allowed.

* __get_oldValue()__ returns the current value assigned to the mask part, before the change.

* __get_currentPart()__ returns the client-side object of the mask part whose value the user is trying to change.

The following example uses the __OnEnumerationChanged__ event display an alert when the user changes the value of an enumerated mask part :

````ASPNET
	    <telerik:RadMaskedTextBox ID="RadMaskedTextBox1" runat="server" Mask="<Mon|Tue|Wed|Thu|Fri|Sat|Sun>" PromptChar="_">
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

 * [OnMoveDown]({%slug input/client-side-programming/events/onmovedown%})

 * [OnMoveUp]({%slug input/client-side-programming/events/onmoveup%})

 * [Masks]({%slug input/radmaskedtextbox/masks%})
