---
title: OnButtonClick
page_title: OnButtonClick | UI for ASP.NET AJAX Documentation
description: OnButtonClick
slug: input/client-side-programming/events/onbuttonclick
tags: onbuttonclick
published: True
position: 2
---

# OnButtonClick



## 

The __OnButtonClick__ client-side event handler is called when the user clicks on a button associated with the input control. This can be the button that is displayed when the __ShowButton__ property is __True__, or one of the spin buttons that is displayed when the __ShowSpinButtons__ property is __True__.

>note The __OnButtonClick__ event is supported by all __RadInput__ controls.
>


Two parameters are passed to the event handler:

* __sender__ is the input control.

* __eventArgs__ has the following methods:

* __set_cancel()__ lets you prevent the default response to the button click.

* __get_buttonType()__ returns an integer that indicates which button was clicked. The possible values are

* The button that appears when the __ShowButton__ property is __True__.

* The upward spin button.

* The downward spin button.

Use the __OnButtonClick__ event to provide a client-side response when the user clicks on a button:

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
