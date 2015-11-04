---
title: OnValueChanging
page_title: OnValueChanging | RadDateInput for ASP.NET AJAX Documentation
description: OnValueChanging
slug: raddateinput/client-side-programming/events/onvaluechanging
tags: onvaluechanging
published: True
position: 16
---

# OnValueChanging



## 

The **OnValueChanging** client-side event handler is called when the user changes the value of the input control. The event occurs immediately after the control loses focus, but before its value has been updated.


Two parameters are passed to the event handler:

* **sender** is the input control.

* **eventArgs** has the following methods:

	* **set_cancel()** lets you permit or block the change to the value of the control. Calling **set_cancel(true)** prevents the change.

	* **get_oldValue()** returns the string value of the input control before the user made any changes.

	* **get_newValue()** returns the string value that is about to be assigned to the input control.

	* **set_newValue()** lets you change the value that is about to be assigned to the input control.




# See Also

 * [OnValueChanged]({%slug raddateinput/client-side-programming/events/onvaluechanged%})

 * [TextChanged Event]({%slug raddateinput/server-side-programming/textchanged-event%})

