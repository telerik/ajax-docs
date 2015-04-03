---
title: OnMouseOut
page_title: OnMouseOut | UI for ASP.NET AJAX Documentation
description: OnMouseOut
slug: input/client-side-programming/events/onmouseout
tags: onmouseout
published: True
position: 11
---

# OnMouseOut



## 

The __OnMouseOut__ client-side event handler is called when the mouse moves off the input area of the control.

>note The __OnMouseOut__ event is supported by all __RadInput__ controls.
>


Two parameters are passed to the event handler:

* __sender__ is the input control.

* __eventArgs__ is an instance of [Sys.EventArgs](http://www.asp.net/AJAX/Documentation/Live/ClientReference/Sys/EventArgsClass/default.aspx).

The following example uses the __OnMouseOut__ event to display an alert:

````ASPNET
	    <telerik:RadTextBox ID="RadTextBox1" runat="server">
	        <ClientEvents OnMouseOut="MouseOut" />
	    </telerik:RadTextBox>
````



````JavaScript
	    <script type="text/javascript">
	        function MouseOut(sender, eventArgs)
	        {
	            alert(sender.get_id());
	        }
	    </script>
````



# See Also

 * [OnMouseOver]({%slug input/client-side-programming/events/onmouseover%})
