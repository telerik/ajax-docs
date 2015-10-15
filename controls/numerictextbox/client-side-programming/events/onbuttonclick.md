---
title: OnButtonClick
page_title: OnButtonClick | RadInput for ASP.NET AJAX Documentation
description: OnButtonClick
slug: input/client-side-programming/events/onbuttonclick
tags: onbuttonclick
published: True
position: 2
---

# OnButtonClick



## 

The **OnButtonClick** client-side event handler is called when the user clicks on a button associated with the input control. This can be the button that is displayed when the **ShowButton** property is **True**, or one of the spin buttons that is displayed when the **ShowSpinButtons** property is **True**.

>note The **OnButtonClick** event is supported by all **RadInput** controls.
>


Two parameters are passed to the event handler:

* **sender** is the input control.

* **eventArgs** has the following methods:

	* **set_cancel()** lets you prevent the default response to the button click.

	* **get_buttonType()** returns an integer that indicates which button was clicked. The possible values are

		* The button that appears when the **ShowButton** property is **True**.

		* The upward spin button.

		* The downward spin button.

Use the **OnButtonClick** event to provide a client-side response when the user clicks on a button:

````ASPNET
<telerik:RadTextBox ID="RadTextBox1" runat="server" ShowButton="True">
	<ClientEvents OnButtonClick="ToggleEnabled" />
</telerik:RadTextBox>
````



````JavaScript
<script type="text/javascript">
	function ToggleEnabled(sender, eventArgs)
	{
		if (sender.get_enabled())
			sender.disable();
		else
			sender.enable();
	}
</script>
````



# See Also

 * [Adding Buttons]({%slug input/getting-started/adding-buttons%})
