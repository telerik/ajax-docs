---
title: OnMouseOut
page_title: OnMouseOut | RadTextBox for ASP.NET AJAX Documentation
description: OnMouseOut
slug: radtextbox/client-side-programming/events/onmouseout
tags: onmouseout
published: True
position: 11
---

# OnMouseOut



The **OnMouseOut** client-side event handler is called when the mouse moves off the input area of the control.

>note The **OnMouseOut** event is supported by all **RadInput** controls.
>


Two parameters are passed to the event handler:

* **sender** is the input control.

* **eventArgs** is an instance of [Sys.EventArgs](http://www.asp.net/AJAX/Documentation/Live/ClientReference/Sys/EventArgsClass/default.aspx).

The following example uses the **OnMouseOut** event to display an alert:

````ASPNET
<telerik:RadTextBox RenderMode="Lightweight" ID="RadTextBox1" runat="server">
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

 * [OnMouseOver]({%slug radtextbox/client-side-programming/events/onmouseover%})
