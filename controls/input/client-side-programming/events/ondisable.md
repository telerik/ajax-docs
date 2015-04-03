---
title: OnDisable
page_title: OnDisable | UI for ASP.NET AJAX Documentation
description: OnDisable
slug: input/client-side-programming/events/ondisable
tags: ondisable
published: True
position: 4
---

# OnDisable



## 

The __OnDisable__ client-side event handler is called when the input control is disabled.

>note The __OnDisable__ event is supported by all __RadInput__ controls.
>


Two parameters are passed to the event handler:

* __sender__ is the input control.

* __eventArgs__ is an instance of [Sys.EventArgs](http://www.asp.net/AJAX/Documentation/Live/ClientReference/Sys/EventArgsClass/default.aspx).

The following example uses the __OnDisable__ event to enable another control when the input control is disabled:

````ASPNET
	    <telerik:RadTextBox ID="RadTextBox1" runat="server" ShowButton="True">
	        <ClientEvents OnDisable="EnableOtherInput" OnButtonClick="ToggleEnabled" />
	    </telerik:RadTextBox>
	    <telerik:RadNumericTextBox ID="RadNumericTextBox1" runat="server" Enabled="False" ShowButton="True">
	        <Clientevents ondisable="EnableOtherInput" onbuttonclick="ToggleEnabled" />
	    </telerik:RadNumericTextBox>
````



````JavaScript
	    <script type="text/javascript">
	        function EnableOtherInput(sender, eventArgs)
	        {
	            if (sender.get_id() == "<%= RadTextBox1.ClientID %>")
	            {
	                var other = $find("<%= RadNumericTextBox1.ClientID %>");
	                other.enable();
	            }
	            else if (sender.get_id() == "<%= RadNumericTextBox1.ClientID %>")
	            {
	                var other = $find("<%= RadTextBox1.ClientID %>");
	                other.enable();
	            }
	        }
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

 * [OnEnable]({%slug input/client-side-programming/events/onenable%})
