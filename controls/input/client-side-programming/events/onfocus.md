---
title: OnFocus
page_title: OnFocus | UI for ASP.NET AJAX Documentation
description: OnFocus
slug: input/client-side-programming/events/onfocus
tags: onfocus
published: True
position: 8
---

# OnFocus



## 

The __OnFocus__ client-side event handler is called when the input control gets focus.

>note The __OnFocus__ event is supported by all __RadInput__ controls, if they are not __ReadOnly__ .
>


Two parameters are passed to the event handler:

* __sender__ is the input control.

* __eventArgs__ is an instance of [Sys.EventArgs](http://www.asp.net/AJAX/Documentation/Live/ClientReference/Sys/EventArgsClass/default.aspx).

The following example uses the __OnFocus__ event to show an alert:

````ASPNET
	    <telerik:RadTextBox ID="RadTextBox1" runat="server">
	        <ClientEvents OnFocus="Focus" />
	    </telerik:RadTextBox>
````



````JavaScript
	    <script type="text/javascript">
	        function Focus(sender, eventArgs)
	        {
	            alert(sender.get_id());
	        }
	    </script>
````



# See Also

 * [Receiving Focus]({%slug input/getting-started/receiving-focus%})

 * [OnBlur]({%slug input/client-side-programming/events/onblur%})
