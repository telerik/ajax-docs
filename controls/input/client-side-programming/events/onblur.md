---
title: OnBlur
page_title: OnBlur | UI for ASP.NET AJAX Documentation
description: OnBlur
slug: input/client-side-programming/events/onblur
tags: onblur
published: True
position: 1
---

# OnBlur



## 

The __OnBlur__client-side event handler is called when the input control loses focus.

>note The __OnBlur__ event is supported by all __RadInput__ controls, if they are not __ReadOnly__ .
>


Two parameters are passed to the event handler:

* __sender__ is the input control.

* __eventArgs__ is an instance of [Sys.EventArgs](http://www.asp.net/AJAX/Documentation/Live/ClientReference/Sys/EventArgsClass/default.aspx).

The following example uses the __OnBlur__event to show an alert:

````ASPNET
	    <telerik:RadTextBox ID="RadTextBox1" runat="server">
	        <ClientEvents OnBlur="Blur" />
	    </telerik:RadTextBox>
````



````JavaScript
	    <script type="text/javascript">
	        function Blur(sender, eventArgs)
	        {
	            alert(sender.get_id());
	        }
	    </script>
````



# See Also

 * [OnFocus]({%slug input/client-side-programming/events/onfocus%})
