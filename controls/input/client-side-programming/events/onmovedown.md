---
title: OnMoveDown
page_title: OnMoveDown | UI for ASP.NET AJAX Documentation
description: OnMoveDown
slug: input/client-side-programming/events/onmovedown
tags: onmovedown
published: True
position: 14
---

# OnMoveDown



## 

The __OnMoveDown__ client-side event handler is called when the user decreases the value of an enumeration or numeric range mask part by typing in a new value or using the arrow keys or mouse wheel.

>note The __OnMoveDown__ event is supported by __RadMaskedTextBox__ .
>


Two parameters are passed to the event handler:

* __sender__ is the input control.

* __eventArgs__ has the following methods:

* __set_cancel()__ lets you prevent the value from decreasing.

* __get_newValue()__ returns the new value assigned to the mask part if the change is allowed.

* __get_oldValue()__ returns the current value assigned to the mask part, before the change.

* __get_currentPart()__ returns the client-side object of the mask part whose value the user is trying to change.

The following example uses the __OnMoveDown__ event display an alert when the user decreases the value of a numeric range :

````ASPNET
	    <telerik:RadMaskedTextBox ID="RadMaskedTextBox1" runat="server" 
	    	Mask="<0..255>.<0..255>.<0..255>.<0..255>" PromptChar="_" Label="IP Address">
	        <ClientEvents OnMoveDown="MoveDown" />
	    </telerik:RadMaskedTextBox>
````



````JavaScript
	    <script type="text/javascript">
	        function MoveDown(source, eventArgs)
	        {
	            alert("Changing from " + eventArgs.get_oldValue() + " to "
	            + eventArgs.get_NewValue() + " at position " + eventArgs.get_currentPart().offset);
	        }
	    </script>
````



# See Also

 * [OnMoveUp]({%slug input/client-side-programming/events/onmoveup%})

 * [OnEnumerationChanged]({%slug input/client-side-programming/events/onenumerationchanged%})

 * [Masks]({%slug input/radmaskedtextbox/masks%})
