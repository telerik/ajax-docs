---
title: OnMoveUp
page_title: OnMoveUp | UI for ASP.NET AJAX Documentation
description: OnMoveUp
slug: input/client-side-programming/events/onmoveup
tags: onmoveup
published: True
position: 13
---

# OnMoveUp



## 

The __OnMoveUp__ client-side event handler is called when the user increases the value of an enumeration or numeric range mask part by typing in a new value or using the arrow keys or mouse wheel.

>note The __OnMoveUp__ event is supported by __RadMaskedTextBox__ .
>


Two parameters are passed to the event handler:

* __sender__ is the input control.

* __eventArgs__ has the following methods:

* __set_cancel()__ lets you prevent the value from increasing.

* __get_newValue()__ returns the new value assigned to the mask part if the change is allowed.

* __get_oldValue()__ returns the current value assigned to the mask part, before the change.

* __get_currentPart()__ returns the client-side object of the mask part whose value the user is trying to change.

The following example uses the __OnMoveUp__ event display an alert when the user increases the value of a numeric range :

````ASPNET
	    <telerik:RadMaskedTextBox ID="RadMaskedTextBox1" runat="server" 
	        Mask="<0..255>.<0..255>.<0..255>.<0..255>" PromptChar="_" Label="IP Address">
	        <ClientEvents OnMoveUp="MoveUp" />
	    </telerik:RadMaskedTextBox>
````



````JavaScript
	    <script type="text/javascript">
	        function MoveUp(source, eventArgs)
	        {
	            alert("Changing from " + eventArgs.get_oldValue() + " to "
	            + eventArgs.get_NewValue() + " at position " + eventArgs.get_currentPart().offset);
	        }
	    </script>
````



[[!] ]()

# See Also

 * [OnMoveDown]({%slug input/client-side-programming/events/onmovedown%})

 * [OnEnumerationChanged]({%slug input/client-side-programming/events/onenumerationchanged%})

 * [Masks]({%slug input/radmaskedtextbox/masks%})
