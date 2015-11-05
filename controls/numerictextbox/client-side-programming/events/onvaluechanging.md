---
title: OnValueChanging
page_title: OnValueChanging | RadNumericTextBox for ASP.NET AJAX Documentation
description: OnValueChanging
slug: numerictextbox/client-side-programming/events/onvaluechanging
tags: onvaluechanging
published: True
position: 16
---

# OnValueChanging



##

The **OnValueChanging** client-side event handler is called when the user changes the value of the input control. The event occurs immediately after the control loses focus, but before its value has been updated.

>note On **RadNumericTextBox** , **OnValueChanging** does not occur if the user enters a non-numeric value.
>


Two parameters are passed to the event handler:

* **sender** is the input control.

* **eventArgs** has the following methods:

	* **set_cancel()** lets you permit or block the change to the value of the control. Calling **set_cancel(true)** prevents the change.

	* **get_oldValue()** returns the string value of the input control before the user made any changes.

	* **get_newValue()** returns the string value that is about to be assigned to the input control.

	* **set_newValue()** lets you change the value that is about to be assigned to the input control.

The following example uses the **OnValueChanging** event to force the value of a text box to be one of a limited number of possible values:





# See Also

 * [OnValueChanged]({%slug numerictextbox/client-side-programming/events/onvaluechanged%})

 * [TextChanged Event]({%slug numerictextbox/server-side-programming/textchanged-event%})

 * [OnKeyPress]({%slug numerictextbox/client-side-programming/events/onkeypress%})
