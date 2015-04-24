---
title: OnMoveUp
page_title: OnMoveUp | RadInput for ASP.NET AJAX Documentation
description: OnMoveUp
slug: input/client-side-programming/events/onmoveup
tags: onmoveup
published: True
position: 13
---

# OnMoveUp



## 

The **OnMoveUp** client-side event handler is called when the user increases the value of an enumeration or numeric range mask part by typing in a new value or using the arrow keys or mouse wheel.

>note The **OnMoveUp** event is supported by **RadMaskedTextBox** .
>


Two parameters are passed to the event handler:

* **sender** is the input control.

* **eventArgs** has the following methods:

* **set_cancel()** lets you prevent the value from increasing.

* **get_newValue()** returns the new value assigned to the mask part if the change is allowed.

* **get_oldValue()** returns the current value assigned to the mask part, before the change.

* **get_currentPart()** returns the client-side object of the mask part whose value the user is trying to change.

The following example uses the **OnMoveUp** event display an alert when the user increases the value of a numeric range :

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
