---
title: OnMouseOver
page_title: OnMouseOver | UI for ASP.NET AJAX Documentation
description: OnMouseOver
slug: input/client-side-programming/events/onmouseover
tags: onmouseover
published: True
position: 12
---

# OnMouseOver



## 

The __OnMouseOver__ client-side event handler is called when the mouse moves over the input area of the control.

>note The __OnMouseOver__ event is supported by all __RadInput__ controls.
>


Two parameters are passed to the event handler:

* __sender__ is the input control.

* __eventArgs__ is an instance of [Sys.EventArgs](http://www.asp.net/AJAX/Documentation/Live/ClientReference/Sys/EventArgsClass/default.aspx).

The following example uses the __OnMouseOver__ event to display an alert:

````ASPNET
	    <telerik:RadTextBox ID="RadTextBox1" runat="server">
	        <ClientEvents OnMouseOver="MouseOver" />
	    </telerik:RadTextBox>
````



````JavaScript
	    <script type="text/javascript">
	        function MouseOver(sender, eventArgs)
	        {
	            alert(sender.get_id());
	        }
	    </script>
````



# See Also

 * [OnMouseOut]({%slug input/client-side-programming/events/onmouseout%})
