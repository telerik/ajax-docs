---
title: OnLoad
page_title: OnLoad | UI for ASP.NET AJAX Documentation
description: OnLoad
slug: input/client-side-programming/events/onload
tags: onload
published: True
position: 10
---

# OnLoad



## 

The __OnLoad__ client-side event handler is called when the input control is loaded on the client.

>note The __OnLoad__ event is supported by all __RadInput__ controls.
>


Two parameters are passed to the event handler:

* __sender__ is the input control.

* __eventArgs__ is an instance of [Sys.EventArgs](http://www.asp.net/AJAX/Documentation/Live/ClientReference/Sys/EventArgsClass/default.aspx).

The following example uses the __OnLoad__ event to change the background color of a text box:

````ASPNET
	    <telerik:RadTextBox ID="RadTextBox1" runat="server">
	        <ClientEvents OnLoad="Load" />
	    </telerik:RadTextBox>
````



````JavaScript
	    <script type="text/javascript">
	        function Load(sender)
	        {
	            sender.get_styles().EnabledStyle[0] += "background-color: lemonchiffon;";
	            sender.updateCssClass();
	        }
	    </script>
````


