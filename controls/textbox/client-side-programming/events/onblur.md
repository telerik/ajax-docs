---
title: OnBlur
page_title: OnBlur | RadTextBox for ASP.NET AJAX Documentation
description: OnBlur
slug: radtextbox/client-side-programming/events/onblur
tags: onblur
published: True
position: 1
---

# OnBlur




The **OnBlur** client-side event handler is called when the input control loses focus.

>note The **OnBlur** event is supported by all **RadInput** controls, if they are not **ReadOnly** .
>


Two parameters are passed to the event handler:

* **sender** is the input control.

* **eventArgs** is an instance of [Sys.EventArgs](http://www.asp.net/AJAX/Documentation/Live/ClientReference/Sys/EventArgsClass/default.aspx).

The following example uses the **OnBlur** event to show an alert:

````ASPNET
<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox1" runat="server">
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

 * [OnFocus]({%slug radtextbox/client-side-programming/events/onfocus%})
